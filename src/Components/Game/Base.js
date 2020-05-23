import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Home } from "./Home";
import { GameField } from "./GameField";
import { Players } from './Players';

const Base = () => {
  return (
    <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/GameField" component={GameField} />
        <Route path="/Players" component={Players} />
        </Switch>
    </div>
  );
};

export default withRouter(Base);
