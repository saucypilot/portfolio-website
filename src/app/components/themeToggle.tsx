"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = theme === "dark" || (!theme && prefersDark);
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const dark = !isDark;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    setIsDark(dark);
  };

  return (
    <button
      id="themeToggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      {/* When knob is RIGHT (light mode), show "Light" on the LEFT */}
      {!isDark && <span className="tt-label tt-left">Light</span>}

      {/* Square knob stays a square, moves to the edge via flex layout */}
      <span className={`tt-knob ${isDark ? "tt-left" : "tt-right"}`} aria-hidden="true" />

      {/* When knob is LEFT (dark mode), show "Dark" on the RIGHT */}
      {isDark && <span className="tt-label tt-right">Dark</span>}
    </button>
  );
}
