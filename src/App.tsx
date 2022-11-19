import { createContext, useState, useContext } from "react";

import Controls from "./components/Controls";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { TodoContextProvider, TodoContext } from "./context/TodoContext";

export const ThemeContext = createContext<ThemeType>({
  theme: "",
  toggleTheme: () => null,
});

type ThemeType = {
  theme: string;
  toggleTheme: any;
};

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <TodoContextProvider>
        <div className="theme" id={theme}>
          <div className="App">
            <div className="background" />
            <div className="container">
              <Header />

              <Input />

              <div className="list">
                <TodoList />
                <Controls />
              </div>

              <footer>
                <p>Drag and drop to reorder list</p>
              </footer>
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;

// TODO
// 1. Responsive design
// 4. Add task
// 5. Delete task
// 6. Complete task
// 7. Clear completed
// 8. Filter>
// 9. Counter
// 14. Conditional render controls and footer
// 10. Firebase
// 11. Drag and drop
// 12. Add task with enter key
// 13. Align the input field text with the span
// 15. Move context to its own file
