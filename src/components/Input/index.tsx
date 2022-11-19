import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";

import "./index.css";

const Input = () => {
  const [text, setText] = React.useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!text) return;

    addTodo(text);
    setText("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form>
      <div className="input--wrapper">
        <span className="input--checkmark" />
        <input
          type="text"
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={text}
        />
      </div>
      <button type="submit" onClick={handleSubmit} hidden />
    </form>
  );
};

export default Input;
