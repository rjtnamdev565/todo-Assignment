import React, { createContext, useState, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// create context
const ThemeContext = createContext({
  theme: "light" as string,
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
