import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import GameField from "./GameField";

const Base = () => {
  return (
    <div>
      
        <Route exact path="/" component={Home} />
        <Route path="/GameField" component={GameField} />
      
    </div>
  );
};

export default Base;
