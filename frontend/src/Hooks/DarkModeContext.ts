import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext({
  dark: false,
  toggle: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    React.createElement(
      DarkModeContext.Provider,
      { value: { dark, toggle } },
      children
    )
  );
};