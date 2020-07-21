import React from "react";
import "./Transactions.scss";
import { useHistory } from "react-router-dom";

function Transactions({ lastLocation, setLastLocation }) {
  const history = useHistory();

  const handleAdd = () => {
    history.push("/add");
  };

  const handleClose = () => {
    history.push(lastLocation == null ? "/" : lastLocation);
  };

  return (
    <div className="transactionDay">
      <div className="transactionsClose">
        <p className="daySelected">10 mayo de 2020</p>
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
          <div className="transaction">
            <div className="detail">
              <div className="category">
                <i className="fas fa-align-justify"></i>
                <p>Comida</p>
              </div>
              <p className="import">$ 58.00</p>
            </div>
            <div className="notes">
              <p>Note:</p>
              <p className="note">There are not addional notes</p>
            </div>
          </div>
        </div>
        <div className="transactions">
          <div className="transaction">
            <div className="detail">
              <div className="category">
                <i className="fas fa-align-justify"></i>
                <p>Comida</p>
              </div>
              <p className="import">$ 58.00</p>
            </div>
            <div className="notes">
              <p>Note:</p>
              <p className="note">There are not addional notes</p>
            </div>
          </div>
        </div>

        <div className="balance">
          <p>Day's balance</p>
          <p>$ 100.00</p>
        </div>
        <div className="add" onClick={handleAdd}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
