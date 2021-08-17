import logo from "./logo.svg";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import DashboardPage from "./pages/DashboardPage";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StarShipPage from "./pages/StarShipPage";
import PeoplePage from "./pages/PeoplePage";
import VechiclesPage from "./pages/VechiclesPage";
import SpeciesPage from "./pages/SpeciesPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={SignInPage} exact />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/starships" component={StarShipPage} />
      <Route path="/people" component={PeoplePage} />
      <Route path="/vechicles" component={VechiclesPage} />
      <Route path="/species" component={SpeciesPage} />
    </Switch>
  );
}

export default App;
