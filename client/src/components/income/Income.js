import React, { useState } from "react";
import "./Income.scss";
import TodaysTransactions from "../todayTransacion/TodaysTransactions";
import Calendar from "../calendar/Calendar";
import { useHistory } from "react-router-dom";
import SumaryBox from "../sumaryBox/SumaryBox";

function Income({ lastLocation, setLastLocation }) {
  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const [redirect, useRedirect] = useState(true);

  const handleClick = () => {
    setLastLocation(history.location.pathname);
    history.push("/transactions");
  };

  return (
    <div className="incomeSection">
      <SumaryBox />
      <Calendar onChange={onChange} value={value} handleClick={handleClick} />
      <TodaysTransactions />
    </div>
  );
}

export default Income;
