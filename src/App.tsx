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
// 1.  Responsive design
// 10. Firebase
// 13. Align the input field text with the span
// 15. Move theme context to its own file
// 11. Drag and drop in filters
