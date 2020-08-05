import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";
import { Calendar as ReactCalendar } from "react-calendar";
import { useHistory } from "react-router-dom";

const NextIcon = ({ value, change, handlePush }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
      onClick={() => {
        change(new Date(value.getFullYear(), value.getMonth() + 1, 1));

        handlePush({
          direction: "next",
        });
      }}
      className="nextIcon"
    >
      ›
    </div>
  );
};

const PreviousIcon = ({ value, change, handlePush }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
      onClick={() => {
        change(new Date(value.getFullYear(), value.getMonth() - 1, 1));
        handlePush({ direction: "previous" });
      }}
      className="nextIcon"
    >
      ‹
    </div>
  );
};

function Calendar({ handleClick, value, onChange, currentSection }) {
  const {
    location: { pathname },
    push,
  } = useHistory();

  const handlePush = ({ direction }) => {
    if (direction == "next") {
      const year = value.getFullYear();
      const month = ("0" + (value.getMonth() + 2)).slice(-2);

      if (value.getMonth() == 11) {
        push(
          pathname == `/${currentSection}`
            ? `${pathname}/${year + 1}${"01"}`
            : `/${currentSection}/${year + 1}${"01"}`
        );
      } else {
        push(
          pathname == `/${currentSection}`
            ? `${pathname}/${year}${month}`
            : `/${currentSection}/${year}${month}`
        );
      }
    } else {
      // Previous
      const year = value.getFullYear();
      const month = ("0" + value.getMonth()).slice(-2);

      if (value.getMonth() == 0) {
        push(
          pathname == `/${currentSection}`
            ? `${pathname}/${year - 1}${"12"}`
            : `/${currentSection}/${year - 1}${"12"}`
        );
      } else {
        push(
          pathname == `/${currentSection}`
            ? `${pathname}/${year}${month}`
            : `/${currentSection}/${year}${month}`
        );
      }
    }
  };

  return (
    <ReactCalendar
      onClickMonth={(value) => {
        onChange(new Date(value));
        push(
          `/${currentSection}/${value.getFullYear()}${(
            "0" +
            (value.getMonth() + 1)
          ).slice(-2)}`
        );
      }}
      onClickDay={(e) => {
        handleClick(e);
      }}
      onChange={onChange}
      value={value}
      nextLabel={
        <NextIcon change={onChange} value={value} handlePush={handlePush} />
      }
      prevLabel={
        <PreviousIcon change={onChange} value={value} handlePush={handlePush} />
      }
      next2Label={null}
      prev2Label={null}
    />
  );
}

export default Calendar;
