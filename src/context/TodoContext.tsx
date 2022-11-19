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
  completeTodo: (id: number) => {},
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

  // create completeTodo function
  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    // the Provider gives access to the context to its children
    <TodoContext.Provider value={{ todos, addTodo, completeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
