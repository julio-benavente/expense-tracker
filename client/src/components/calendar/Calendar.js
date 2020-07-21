import React from "react";
import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";
import { Calendar as ReactCalendar } from "react-calendar";

function Calendar({ onChange, value, handleClick }) {
  return (
    <ReactCalendar
      onChange={onChange}
      value={value}
      onClickDay={(params) => {
        handleClick();
      }}
    />
  );
}

export default Calendar;
