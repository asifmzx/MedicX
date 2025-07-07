"use client";

import { useTheme } from "@/contexts/ThemeContext";

const QuickDebug = () => {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50">
      <div className="text-sm">
        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Theme Debug
        </p>
        <p className="text-gray-600 dark:text-gray-300">Current: {theme}</p>
        <p className="text-gray-600 dark:text-gray-300">
          isDark: {isDark.toString()}
        </p>
        <button
          onClick={toggleTheme}
          className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default QuickDebug;
