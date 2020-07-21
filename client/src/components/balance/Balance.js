import React, { useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import "./Balance.scss";
import Calendar from "../calendar/Calendar";
import TodaysTransactions from "../todayTransacion/TodaysTransactions";

function Balance({ lastLocation, setLastLocation }) {
  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const [redirect, useRedirect] = useState(true);

  const handleClick = () => {
    setLastLocation(history.location.pathname);
    history.push("/transactions");
  };

  return (
    <div className="balanceSection">
      <div className="acutalMonth">
        <p className="monthAndYear">Julio 2020</p>
      </div>

      <div class="summary">
        <div class="graph">
          <i class="fas fa-plus income"></i>
          <div className="bars">
            <div class="incomeBar"></div>
            <div class="expenseBar"></div>
          </div>
          <i class="fas fa-minus expense"></i>
        </div>
        <div class="income">
          <p>Ingresos</p>
          <p>$ 711.00</p>
        </div>
        <div class="expense">
          <p>Gastos</p>
          <p>$ 470.00</p>
        </div>
        <div class="balance">
          <p>Saldo</p>
          <p>$ 241.00</p>
        </div>
      </div>

      <Calendar onChange={onChange} value={value} handleClick={handleClick} />
      <TodaysTransactions />
    </div>
  );
}

export default Balance;
