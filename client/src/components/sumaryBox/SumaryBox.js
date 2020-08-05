import React from "react";
import "./SumaryBox.scss";

const CategoryItemList = ({ detail }) => {
  return (
    <div className="categoryItem">
      <p className="categoryName">{detail}</p>
      <div className="categoryIcon">
        <i className="fas fa-align-justify"></i>
      </div>
    </div>
  );
};

const CategoryItemLGraph = ({ percentage, nominal, width }) => {
  return (
    <div className="categoryItem">
      <div
        className="percentageBox"
        style={{ width: `${width * 100}%` }}
      >{`${percentage}%`}</div>
      <div className="nominal">
        <p>{`$ ${nominal}`}</p>
      </div>
    </div>
  );
};

function SumaryBox({ fourMax, standard, value }) {
  const combined = fourMax.map((e, i) => {
    return [e, standard[i]];
  });

  return (
    <div className="section">
      <div className="acutalMonth">
        <p className="monthAndYear">
          {new Date(value).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
          })}
        </p>
        {/* <div className="iconContainer">
          <i class="fas fa-expand-alt"></i>
        </div> */}
      </div>

      <div className="sumarySection">
        <div className="sumaryIncome">
          <div className="categoryList">
            {fourMax.map((e) => {
              return (
                <CategoryItemList
                  detail={e[0][0].charAt(0).toUpperCase() + e[0][0].slice(1)}
                />
              );
            })}
          </div>

          <div className="sumaryGraph">
            <div className="graphCategoryList">
              {combined.map((e) => {
                return (
                  <CategoryItemLGraph
                    percentage={e[0][1]}
                    nominal={e[0][0][1]}
                    width={e[1]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SumaryBox;
