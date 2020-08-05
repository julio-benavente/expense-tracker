import React, { useEffect } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";

function Navbar(props) {
  const { value, onChange, data, getItems } = props;

  useEffect(() => {
    getItems();
  }, []);

  const buttonsData = [
    {
      type: "income",
      img: "https://img.icons8.com/dusk/32/000000/money-transfer.png",
      detail: "Income",
    },

    {
      type: "balance",
      img: "https://img.icons8.com/dusk/32/000000/bill.png",
      detail: "Balance",
    },
    {
      type: "expense",
      img: "https://img.icons8.com/dusk/32/000000/cash-.png",
      detail: "Expense",
    },
  ];

  const NavButton = ({ type, img, detail }) => {
    return (
      <NavLink
        to={`/${type}/${value.getFullYear()}${(
          "0" +
          (value.getMonth() + 1)
        ).slice(-2)}`}
      >
        <button id={`${type}-btn`} type="button" className="m-button">
          <img src={img} alt={`${type}_icon`} />
          {detail}
        </button>
      </NavLink>
    );
  };

  return (
    <nav className="navbar">
      {buttonsData.map(({ type, url, img, detail }, e) => {
        return (
          <NavButton key={e} type={type} url={url} img={img} detail={detail} />
        );
      })}
    </nav>
  );
}

const mapPropsToState = (state) => ({
  item: state.item,
});

export default connect(mapPropsToState, { getItems })(Navbar);
