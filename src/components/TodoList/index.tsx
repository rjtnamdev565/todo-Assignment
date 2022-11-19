import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";

import "./index.css";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const { todos, completeTodo, deleteTodo } = useContext(TodoContext);

  const handleCompleteTodo = (id: number) => {
    completeTodo(id);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <span
            className={`checkmark ${todo.completed && "completed"}`}
            onClick={() => handleCompleteTodo(todo.id)}
          >
            {todo.completed && <img src={iconCheck} alt="checkmark icon" />}
          </span>
          <p>{todo.text}</p>
          <span className="cross">
            <img
              src={iconCross}
              alt="cross icon"
              onClick={() => handleDeleteTodo(todo.id)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
