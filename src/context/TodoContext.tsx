import React, { createContext, useState, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// create context
const TodoContext = createContext({
  todos: [] as Todo[],
  addTodo: (text: string) => {},
});

const TodoContextProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // create addTodo function
  const addTodo = (text: string) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    // the Provider gives access to the context to its children
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
