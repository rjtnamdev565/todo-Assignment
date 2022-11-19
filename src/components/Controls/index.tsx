import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";

import "./index.css";

const Controls = () => {
  const { todos, clearCompletedTodos } = useContext(TodoContext);

  return (
    <div className="controls">
      <p>2 items left</p>
      <div className="primary--buttons">
        <button className="active">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div className="secondary--buttons">
        <button onClick={clearCompletedTodos}>Clear Completed</button>
      </div>
    </div>
  );
};

export default Controls;
