import { createContext, useState } from "react";

import { TodoContextProvider } from "./context/TodoContext";

import { ThemeType } from "./types";

import Controls from "./components/Controls";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

export const ThemeContext = createContext<ThemeType>({
  theme: "",
  toggleTheme: () => null,
});

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
// - Firebase
// - Move theme context to its own file
// - Drag and drop in filters
