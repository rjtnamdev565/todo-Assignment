import React from "react";

import "./index.css";

const Input = () => {
  return (
    <form>
      <div className="input--wrapper">
        <span className="input--checkmark" />
        <input type="text" placeholder="Create a new todo..." />
      </div>
    </form>
  );
};

export default Input;
