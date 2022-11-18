import React from "react";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";

import "./index.css";

const TodoList = () => {
  return (
    <ul>
      {[1, 2, 3].map((item) => (
        <li key={item}>
          <span className="checkmark">
            <img src={iconCheck} alt="" />
          </span>
          <p>Learn React</p>
          <span className="cross">
            <img src={iconCross} alt="" />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
