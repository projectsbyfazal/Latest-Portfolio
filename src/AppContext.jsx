import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useThemeContext = () => {
  return useContext(AppContext);
};

function getDefaultTheme() {
  return localStorage.getItem("theme") == "true";
}

const ThemeContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getDefaultTheme());

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode)
  }, [isDarkMode])

  return (
    <AppContext.Provider
      value={{ isDarkMode, setIsDarkMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ThemeContext;
