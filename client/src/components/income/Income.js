import React, { useState } from "react";
import "./Income.scss";
import TodaysTransactions from "../todayTransacion/TodaysTransactions";
import Calendar from "../calendar/Calendar";
import { useHistory, useParams } from "react-router-dom";
import SumaryBox from "../sumaryBox/SumaryBox";
import { summaryByMonth } from "../../extras/functions";

function Income({ data, lastLocation, setLastLocation, value, onChange }) {
  const currentSection = "income";

  const history = useHistory();
  const parameter = useParams();

  const yearMonth =
    parameter.yearmonth ||
    `${new Date().getFullYear()}${("0" + (new Date().getMonth() + 1)).slice(
      -2
    )}`;

  const listToDplay = summaryByMonth(
    data,
    "income",
    yearMonth.slice(0, 4),
    ("0" + (yearMonth.slice(4, 6) - 1)).slice(-2)
  );

  const handleClick = (e) => {
    setLastLocation(history.location.pathname);
    history.push(
      `/transactions/${e.getFullYear()}${("0" + (e.getMonth() + 1)).slice(
        -2
      )}${e.getDate()}`
    );
  };

  return (
    <div className="incomeSection">
      <SumaryBox
        fourMax={listToDplay[0]}
        standard={listToDplay[1]}
        value={value}
      />
      <Calendar
        value={value}
        onChange={onChange}
        handleClick={handleClick}
        currentSection={currentSection}
      />
      <TodaysTransactions data={data} />
    </div>
  );
}

export default Income;
