import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Balance.scss";
import Calendar from "../calendar/Calendar";
import TodaysTransactions from "../todayTransacion/TodaysTransactions";
import { filterYearMonth } from "../../extras/functions";

function Balance({ data, lastLocation, setLastLocation, value, onChange }) {
  const history = useHistory();
  const currentSection = "balance";
  const parameter = useParams();

  const yearMonth =
    parameter.yearmonth ||
    `${new Date().getFullYear()}${("0" + (new Date().getMonth() + 1)).slice(
      -2
    )}`;

  const handleClick = (e) => {
    setLastLocation(history.location.pathname);
    history.push(
      `/transactions/${e.getFullYear()}${("0" + (e.getMonth() + 1)).slice(
        -2
      )}${e.getDate()}`
    );
  };

  const list = filterYearMonth(
    data,
    yearMonth.slice(0, 4),
    ("0" + (yearMonth.slice(4, 6) - 1)).slice(-2)
  );

  var incomeTotal = 0;
  var expenseTotal = 0;

  list.map((e) => {
    if (e.type == "income") {
      incomeTotal = e.amount + incomeTotal;
    } else {
      expenseTotal = e.amount + expenseTotal;
    }
  });

  incomeTotal = Math.round(incomeTotal * 100) / 100;
  expenseTotal = Math.round(expenseTotal * 100) / 100;

  const balance = Math.round((incomeTotal - expenseTotal) * 100) / 100;
  const incomeBar = Math.round(
    (incomeTotal / (incomeTotal + expenseTotal)) * 100
  );

  return (
    <div className="balanceSection">
      <div className="acutalMonth">
        <p className="monthAndYear">
          {new Date(value).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
          })}
        </p>
      </div>

      <div class="summary">
        <div class="graph">
          <i class="fas fa-plus income"></i>
          <div className="bars">
            <div class="incomeBar" style={{ flexBasis: `${incomeBar}%` }}></div>
            <div class="expenseBar"></div>
          </div>
          <i class="fas fa-minus expense"></i>
        </div>
        <div class="income">
          <p>Income</p>
          <p>$ {incomeTotal}</p>
        </div>
        <div class="expense">
          <p>Expense</p>
          <p>$ {expenseTotal}</p>
        </div>
        <div class="balance">
          <p>Saldo</p>
          <p>$ {balance}</p>
        </div>
      </div>

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

export default Balance;
