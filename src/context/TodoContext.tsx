import { createContext, useState } from "react";

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
  deleteTodo: (id: number) => {},
  clearCompletedTodos: () => {},
});

const TodoContextProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const clearCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);

    setTodos(updatedTodos);
  };

  return (
    // the Provider gives access to the context to its children
    <TodoContext.Provider
      value={{ todos, addTodo, completeTodo, deleteTodo, clearCompletedTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
