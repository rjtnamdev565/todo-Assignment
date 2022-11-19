import { createContext, useState, useContext } from "react";

import Controls from "./components/Controls";
import Footer from "./components/Footer";
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

              <Footer />
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
// 8. Filter
// 9. Counter
// 11. Drag and drop
// 10. Firebase
// 13. Align the input field text with the span
// 15. Move theme context to its own file
