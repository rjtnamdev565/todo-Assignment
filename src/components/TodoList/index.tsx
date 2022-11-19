import React from "react";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";

import "./index.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <span className={`checkmark ${todo.completed && "completed"}`}>
            {todo.completed && <img src={iconCheck} alt="" />}
          </span>
          <p>{todo.text}</p>
          <span className="cross">
            <img src={iconCross} alt="" />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
