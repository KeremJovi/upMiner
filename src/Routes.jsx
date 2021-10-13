import React from "react";
import Home from "./pages/Home";
import { Details } from "./pages/Details/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Details} path="/Details/:id" />
      </Switch>
    </BrowserRouter>
  );
};
