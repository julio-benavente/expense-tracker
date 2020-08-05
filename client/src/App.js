import React, { useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Income from "./components/income/Income";
import Expense from "./components/expense/Expense";
import Balance from "./components/balance/Balance";
import Transactions from "./components/transactions/Transactions";
import Add from "./components/Add/Add";

import { connect } from "react-redux";
import { getItems } from "../src/actions/itemActions";
import { PropTypes } from "prop-types";

function App(props) {
  const { getItems } = props;

  const [lastLocation, setLastLocation] = useState(null);
  const [value, onChange] = useState(new Date());
  const data = [...props.item.items];

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <div className="project-wraper">
        <Switch>
          <Route
            path="/transactions/:day"
            render={() => {
              return (
                <Transactions
                  lastLocation={lastLocation}
                  setLastLocation={setLastLocation}
                  data={data}
                />
              );
            }}
          ></Route>
          <Route
            path="/transactions/"
            render={() => {
              return (
                <Transactions
                  lastLocation={lastLocation}
                  setLastLocation={setLastLocation}
                  data={data}
                />
              );
            }}
          ></Route>
          <Route
            path="/add/:date"
            render={() => {
              return (
                <Add
                  lastLocation={lastLocation}
                  setLastLocation={setLastLocation}
                />
              );
            }}
          ></Route>
          <Redirect
            exact
            from="/"
            to={`/income/${new Date().getFullYear()}${(
              "0" +
              (new Date().getMonth() + 1)
            ).slice(-2)}`}
          />
          <Route
            path="/"
            render={({ match }) => {
              return (
                <React.Fragment>
                  <Navbar value={value} onChange={onChange} data={data} />
                  <Switch>
                    <Route
                      exact
                      path={`${
                        match.path !== "/" ? match.path : ""
                      }/income/:yearmonth`}
                      render={() => {
                        return (
                          <Income
                            lastLocation={lastLocation}
                            setLastLocation={setLastLocation}
                            value={value}
                            onChange={onChange}
                            data={data}
                          />
                        );
                      }}
                    ></Route>
                    <Route
                      exact
                      path={`${
                        match.path !== "/" ? match.path : ""
                      }/expense/:yearmonth`}
                      render={() => {
                        return (
                          <Expense
                            lastLocation={lastLocation}
                            setLastLocation={setLastLocation}
                            value={value}
                            onChange={onChange}
                            data={data}
                          />
                        );
                      }}
                    ></Route>
                    <Route
                      exact
                      path={`${match.path !== "/" ? match.path : ""}/expense`}
                      render={() => {
                        return (
                          <Expense
                            lastLocation={lastLocation}
                            setLastLocation={setLastLocation}
                            value={value}
                            onChange={onChange}
                            data={data}
                          />
                        );
                      }}
                    ></Route>
                    <Route
                      exact
                      path={`${
                        match.path !== "/" ? match.path : ""
                      }/balance/:yearmonth`}
                      render={() => {
                        return (
                          <Balance
                            lastLocation={lastLocation}
                            setLastLocation={setLastLocation}
                            value={value}
                            onChange={onChange}
                            data={data}
                          />
                        );
                      }}
                    ></Route>
                    <Route
                      exact
                      path={`${match.path !== "/" ? match.path : ""}/balance`}
                      render={() => {
                        return (
                          <Balance
                            lastLocation={lastLocation}
                            setLastLocation={setLastLocation}
                            value={value}
                            onChange={onChange}
                            data={data}
                          />
                        );
                      }}
                    ></Route>
                  </Switch>
                </React.Fragment>
              );
            }}
          />
        </Switch>
      </div>
    </div>
  );
}

App.protoTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(App);
