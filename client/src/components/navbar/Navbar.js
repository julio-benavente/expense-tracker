import React from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";

function Navbar() {
  let { path, url } = useRouteMatch();
  return (
    <nav className="navbar">
      <NavLink to={`${url !== "/" ? url : ""}/income`}>
        <button id="income-btn" type="button" className="m-button">
          <img
            src="https://img.icons8.com/dusk/32/000000/money-transfer.png"
            alt="income_icon"
          />
          Ingresos
        </button>
      </NavLink>
      <NavLink exact to={`${url !== "/" ? url : ""}/balance`}>
        <button id="balance-btn" tsype="button" className="m-button">
          <img
            src="https://img.icons8.com/dusk/32/000000/bill.png"
            alt="balance_icon"
          />
          Saldo
        </button>
      </NavLink>
      <NavLink to={`${url !== "/" ? url : ""}/expense`}>
        <button id="expenses-btn" type="button" className="m-button">
          <img
            src="https://img.icons8.com/dusk/32/000000/cash-.png"
            alt="expense_icon"
          />
          Gastos
        </button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
