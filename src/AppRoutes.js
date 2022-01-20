import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CoinSearch from "./components/CoinSearch/CoinSearch";
import CoinDetails from "./components/CoinDetails/CoinDetails";

const AppRoutes = (props) => (
  <Router>
    <Switch>
      <Route
        exact
        path="/coin/:id"
        render={(routeProps) => (
          <CoinDetails {...routeProps}  />
        )}
      />

      <Route path="/">
        <CoinSearch />
      </Route>
    </Switch>
  </Router>
);

export default AppRoutes;
