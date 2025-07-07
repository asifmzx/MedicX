"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("medicx-theme");
      if (savedTheme) {
        setIsDark(savedTheme === "dark");
      } else {
        // Default to system preference
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setIsDark(systemPrefersDark);
      }
    }
  }, []);

  // Save theme to localStorage and apply to document
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("medicx-theme", isDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const setTheme = (theme) => {
    setIsDark(theme === "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        setTheme,
        theme: isDark ? "dark" : "light",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
