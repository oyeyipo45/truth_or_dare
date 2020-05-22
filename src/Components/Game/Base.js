import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { GameField } from "./GameField";
import { Players } from './Players';

const Base = () => {
  return (
    <div>
      
        <Route exact path="/" component={Home} />
        <Route path="/GameField" component={GameField} />
        <Route path="/Players" component={Players} />
      
    </div>
  );
};

export default Base;
