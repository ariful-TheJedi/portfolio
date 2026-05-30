"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  // =========================
  // THEME STATE
  // =========================
  const [theme, setTheme] =
    useState<Theme>("dark");

  // =========================
  // LOAD THEME FROM LOCAL STORAGE
  // =========================
  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // =========================
  // TOGGLE THEME
  // =========================
  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  // =========================
  // APPLY THEME + SAVE THEME
  // =========================
  useEffect(() => {
    // add/remove dark class on <html>
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// =========================
// CUSTOM HOOK
// =========================
export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}