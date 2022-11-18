import React from "react";

import "./index.css";

const Controls = () => {
  return (
    <div className="controls">
      <p>2 items left</p>
      <div className="primary--buttons">
        <button className="active">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="secondary--buttons">
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Controls;
