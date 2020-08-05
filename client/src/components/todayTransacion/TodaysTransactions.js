import React, { useState, useEffect } from "react";
import "./TodaysTransactions.scss";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";

function Transaction({ description, note, amount }) {
  const noteStyle = note ? { color: "black", fontStyle: "normal" } : {};
  return (
    <div className="transaction">
      <div className="detail">
        <div className="category">
          <i className="fas fa-align-justify"></i>
          <p>{description}</p>
        </div>
        <p className="import">$ {amount}</p>
      </div>
      <div className="notes">
        <p>Nota:</p>
        <p className="note" style={noteStyle}>
          {note ? note : "There are not additional notes"}
        </p>
      </div>
    </div>
  );
}

function TodaysTransactions(props) {
  const { item } = props;
  const [transacions, setTransacions] = useState(null);

  // const data = item.items;
  const data = [...item.items];

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    const display = () => {
      const compared = data.filter((e) => {
        const today = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ).getTime();
        const compare = new Date(
          new Date(e.date).getFullYear(),
          new Date(e.date).getMonth(),
          new Date(e.date).getDate()
        ).getTime();
        return today == compare;
      });
      return compared;
    };
    setTransacions(display);
  }, []);

  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const balanceResult = (data) => {
      var result = 0;

      const compared = data.filter((e) => {
        const today = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ).getTime();
        const compare = new Date(
          new Date(e.date).getFullYear(),
          new Date(e.date).getMonth(),
          new Date(e.date).getDate()
        ).getTime();
        return today == compare;
      });

      for (let i of compared) {
        if (i.type == "income") {
          result = result + i.amount;
        } else {
          result = result - i.amount;
        }
      }
      return Math.round(result * 100) / 100;
    };
    setBalance(balanceResult(data));
  }, []);

  return (
    <div className="transactionsSection">
      <div className="sectionHeader">
        <p>Today's transactions</p>
      </div>
      <div className="transactions">
        {transacions &&
          transacions.map(({ description, note, amount }) => {
            return (
              <Transaction
                description={description}
                note={note}
                amount={amount}
              />
            );
          })}
      </div>
      <div className="balance">
        <p>Today's balance</p>
        <p>$ {balance}</p>
      </div>
    </div>
  );
}

const mapPropsToState = (state) => ({
  item: state.item,
});

export default connect(mapPropsToState, { getItems })(TodaysTransactions);
