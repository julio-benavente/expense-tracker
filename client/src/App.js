import React, { useState } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Income from "./components/income/Income";
import Expense from "./components/expense/Expense";
import Balance from "./components/balance/Balance";
import Transactions from "./components/transactions/Transactions";
import Add from "./components/Add/Add";

function App() {
  const [lastLocation, setLastLocation] = useState(null);

  return (
    <div className="App">
      <div className="project-wraper">
        <Switch>
          <Route
            path="/transactions"
            render={() => {
              return (
                <Transactions
                  lastLocation={lastLocation}
                  setLastLocation={setLastLocation}
                />
              );
            }}
          ></Route>
          <Route
            path="/add"
            render={() => {
              return (
                <Add
                  lastLocation={lastLocation}
                  setLastLocation={setLastLocation}
                />
              );
            }}
          ></Route>

          <Route
            path="/"
            render={({ match }) => {
              return (
                <React.Fragment>
                  <Navbar />
                  <Switch>
                    <Route
                      exact
                      path={`${match.path !== "/" ? match.path : ""}/income`}
                      render={() => {
                        return (
                          <Income
                            lastLocation={lastLocation}
                            setLastLocation={setLastLocation}
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

export default App;
