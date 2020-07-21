import React from "react";
import "./TodaysTransactions.scss";

function TodaysTransactions() {
  return (
    <div className="transactionsSection">
      <div className="sectionHeader">
        <p>Today's transactions</p>
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
            <p>Nota:</p>
            <p className="note">No hay notas addicionales</p>
          </div>
        </div>

        <div className="transaction">
          <div className="detail">
            <div className="category">
              <i className="fas fa-align-justify"></i>
              <p>Comida</p>
            </div>
            <p className="import">$ 58.00</p>
          </div>
          <div className="notes">
            <p>Nota:</p>
            <p className="note">No hay notas addicionales</p>
          </div>
        </div>
      </div>
      <div className="balance">
        <p>Saldo de hoy</p>
        <p>$ 100.00</p>
      </div>
    </div>
  );
}

export default TodaysTransactions;
