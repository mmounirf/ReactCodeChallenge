import React from "react";
import { Route, Switch } from "react-router-dom";
import NavgationComponent from "./components/Navigation";
import HomePage from "./pages/HomePage";
import FrameworksPage from "./pages/FrameworksPage";
import ModelerPage from "./pages/ModelerPage";
import FrameworksStore from "./store/FrameworksStore";
import { observable } from "mobx";
import "styles.scss";

const store = observable({
  store: new FrameworksStore()
});

const RouteHandler = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/modeler" component={ModelerPage} />
        <Route path="/frameworks">
          <FrameworksPage frameworks={store} />
        </Route>
      </Switch>
    </div>
  );
};

export default () => (
  <div>
    {<NavgationComponent />}
    <hr />
    {RouteHandler()}
  </div>
);
