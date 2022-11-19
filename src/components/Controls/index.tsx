import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";

import "./index.css";

const Controls = () => {
  const { todos, clearCompletedTodos, filterTodos, filter, filteredTodos } =
    useContext(TodoContext);

  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="controls">
      <p>{filteredTodos.length} items left</p>
      <div className="primary--buttons">
        <button
          onClick={() => filterTodos("all")}
          className={`${filter === "all" && "active"}`}
        >
          All
        </button>
        <button
          onClick={() => filterTodos("active")}
          className={`${filter === "active" && "active"}`}
        >
          Active
        </button>
        <button
          onClick={() => filterTodos("completed")}
          className={`${filter === "completed" && "active"}`}
        >
          Completed
        </button>
      </div>
      <div className="secondary--buttons">
        <button onClick={clearCompletedTodos}>Clear Completed</button>
      </div>
    </div>
  );
};

export default Controls;
