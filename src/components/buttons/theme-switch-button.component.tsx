"use client";
import React from "react";
import { useTheme } from "next-themes";

function ThemeSwitchButtonComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default ThemeSwitchButtonComponent;
