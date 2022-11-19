import { createContext, useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = "all" | "completed" | "active";

// create context
const TodoContext = createContext({
  todos: [] as Todo[],
  filteredTodos: [] as Todo[],
  filter: "all" as Filter,
  addTodo: (text: string) => {},
  completeTodo: (id: number) => {},
  deleteTodo: (id: number) => {},
  clearCompletedTodos: () => {},
  filterTodos: (filter: Filter) => {},
});

const TodoContextProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

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

  const filterTodos = (filter: Filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    }
  });

  return (
    // the Provider gives access to the context to its children
    <TodoContext.Provider
      value={{
        todos,
        filter,
        filteredTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        clearCompletedTodos,
        filterTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
