import React from "react";
import "./SumaryBox.scss";

function SumaryBox() {
  return (
    <div className="section">
      <div className="acutalMonth">
        <p className="monthAndYear">Julio 2020</p>
        {/* <div className="iconContainer">
          <i class="fas fa-expand-alt"></i>
        </div> */}
      </div>

      <div className="sumarySection">
        <div className="sumaryIncome">
          <div className="categoryList">
            <div className="categoryItem">
              <p className="categoryName">Comida</p>
              <i className="fas fa-align-justify"></i>
            </div>
            <div className="categoryItem">
              <p className="categoryName">Comida</p>
              <div className="categoryIcon">
                <i className="fas fa-align-justify"></i>
              </div>
            </div>
            <div className="categoryItem">
              <p className="categoryName">Comida</p>
              <div className="categoryIcon">
                <i className="fas fa-align-justify"></i>
              </div>
            </div>
          </div>

          <div className="sumaryGraph">
            <div className="graphCategoryList">
              <div className="categoryItem">
                <div className="percentageBox">31.6%</div>
                <div className="nominal">
                  <p>$ 465.00</p>
                </div>
              </div>
              <div className="categoryItem">
                <div className="percentageBox">31.6%</div>
                <div className="nominal">
                  <p>$ 465.00</p>
                </div>
              </div>
              <div className="categoryItem">
                <div className="percentageBox">31.6%</div>
                <div className="nominal">
                  <p>$ 465.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SumaryBox;
