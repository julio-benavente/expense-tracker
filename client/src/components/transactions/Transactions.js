import React, { useState, useEffect } from "react";
import "./Transactions.scss";
import { useHistory, useParams } from "react-router-dom";
import { deleteItem, addItem } from "../../actions/itemActions";
import { connect } from "react-redux";

const Transaction = (props) => {
  const { description, note, amount, onDelete } = props;
  console.log(props);

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
      <button
        className="delete"
        onClick={() => {
          onDelete();
        }}
      >
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

const Transactions = (props) => {
  const { lastLocation, setLastLocation, deleteItem, item } = props;

  const data = item.items;

  const handleDelete = (id) => {
    deleteItem(id);
  };

  console.log(props);
  const history = useHistory();
  const parameters = useParams();
  const date =
    parameters.day ||
    `${new Date().getFullYear()}${("0" + (new Date().getMonth() + 1)).slice(
      -2
    )}${new Date().getDate()}`;

  const handleAdd = () => {
    history.push(`/add/${date}`);
  };

  const handleClose = () => {
    history.push(lastLocation == null ? "/" : lastLocation);
  };

  const [transactions, setTransactions] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const display = (date) => {
      const compared = data.filter((e) => {
        const today = new Date(
          date.slice(0, 4),
          date.slice(4, 6) - 1,
          date.slice(6, 8)
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
    setTransactions(display(date));
  }, []);

  useEffect(() => {
    const balanceResult = (data, date) => {
      var result = 0;

      const compared = data.filter((e) => {
        const daySelected = new Date(
          date.slice(0, 4),
          date.slice(4, 6) - 1,
          date.slice(6, 8)
        ).getTime();
        const compare = new Date(
          new Date(e.date).getFullYear(),
          new Date(e.date).getMonth(),
          new Date(e.date).getDate()
        ).getTime();
        return daySelected == compare;
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
    setBalance(balanceResult(data, date));
  }, []);

  return (
    <div className="transactionDay">
      <div className="transactionsClose">
        <p className="daySelected">{}</p>
        <i
          className="fas fa-chevron-left closeButton"
          onClick={handleClose}
        ></i>
      </div>

      <div className="transactionsContainer">
        <div className="tansactionHeader">
          <p>Transacciones</p>
        </div>
        <div className="transactions">
          {" "}
          {transactions &&
            transactions.map((e) => {
              const { description, note, amount, _id } = e;
              return (
                <Transaction
                  description={description}
                  note={note}
                  amount={amount}
                  key={_id}
                  onDelete={() => handleDelete(_id)}
                />
              );
            })}
        </div>

        <div className="balance">
          <p>Today's balance</p>
          <p>$ {balance}</p>
        </div>
        <div className="add" onClick={handleAdd}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

const mapPropsToState = (state) => ({
  item: state.item,
});

connect(mapPropsToState, { deleteItem })(Transaction);

export default connect(mapPropsToState, { deleteItem })(Transactions);
