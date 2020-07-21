import React, { useState } from "react";
import "./Add.scss";
import { categories } from "../other/categories";
import { useHistory } from "react-router-dom";

function Category({
  type,
  description,
  icon,
  name,
  value,
  color,
  incomeCategory,
  expenseCategory,
  handleIncomeCategory,
  handleExpenseCategory,
}) {
  return (
    <label className="category">
      <i className={`icon ${icon}`}></i>
      <p>{description}</p>
      <input
        name={`${type}Category`}
        type="radio"
        value={`${value}`}
        checked={(type == "income" ? incomeCategory : expenseCategory) == value}
        onChange={
          type == "income" ? handleIncomeCategory : handleExpenseCategory
        }
      />
    </label>
  );
}

function Add({ lastLocation, setLastLocation }) {
  const history = useHistory();
  const [radioType, setRadioType] = useState("income");
  const [amount, setAmount] = useState(0);

  // Radio buttons
  const [incomeCategory, setIncomeCategory] = useState("deposit");
  const [expenseCategory, setExpenseCategory] = useState("auto");
  const handleIncomeCategory = (e) => {
    setIncomeCategory(e.target.value);
  };
  const handleExpenseCategory = (e) => {
    setExpenseCategory(e.target.value);
  };
  //

  const onSubmit = (e) => {
    e.preverDefault();
  };

  const handleType = (e) => {
    setRadioType(e.target.value);
  };

  const handleClose = () => {
    history.push(lastLocation == null ? "/" : lastLocation);
  };

  const styleAmount =
    radioType == "income"
      ? {
          background: "#f9dcdc",
          color: "#db302e",
          border: "1px #db302e solid",
          boxShadow: "inset 0 0 5px #db302e",
        }
      : {
          background: "#cbffde",
          color: "#009838",
          border: "1px #009838  solid",
          boxShadow: "inset 0 0 5px #009838",
        };

  return (
    <div className="addSection">
      <div className="closeBar">
        <p className="daySelected">10 mayo de 2020</p>
        <i
          className="fas fa-chevron-left closeButton"
          onClick={handleClose}
        ></i>
      </div>
      <form className="inputForm" action="" onSubmit={onSubmit}>
        <label className="radioIncome">
          <input
            name="incomeExpense"
            type="radio"
            value="income"
            checked={radioType == "income"}
            onChange={handleType}
          />
          Income
        </label>
        <label className="radioExpense">
          <input
            name="incomeExpense"
            type="radio"
            value="expense"
            checked={radioType == "expense"}
            onChange={handleType}
          />
          Expense
        </label>

        <br />
        <input
          className="amount"
          type="number"
          style={styleAmount}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <br />
        <textarea className="note" />

        <p>
          Choose {radioType == "income" ? "income" : "expense"} category ...
        </p>
        {radioType == "income"
          ? categories.income.map(
              ({ type, description, icon, name, value, color }) => (
                <Category
                  type={type}
                  description={description}
                  icon={icon}
                  name={name}
                  value={value}
                  color={color}
                  incomeCategory={incomeCategory}
                  expenseCategory={expenseCategory}
                  handleIncomeCategory={handleIncomeCategory}
                  handleExpenseCategory={handleExpenseCategory}
                />
              )
            )
          : categories.expense.map(
              ({ type, description, icon, name, value, color }) => (
                <Category
                  type={type}
                  description={description}
                  icon={icon}
                  name={name}
                  value={value}
                  color={color}
                  incomeCategory={incomeCategory}
                  expenseCategory={expenseCategory}
                  handleIncomeCategory={handleIncomeCategory}
                  handleExpenseCategory={handleExpenseCategory}
                />
              )
            )}

        <div className="buttons">
          <button className="closeButton" onClick={handleClose}>
            Close
          </button>
          <button className="submitButton" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
