// themeToggle.tsx
"use client";

import { useLayoutEffect, useState } from "react";

const THEME_KEY = "theme-preference"; // "light" | "dark" | "system"

const getSystemTheme = (): "light" | "dark" =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const readStored = (): "light" | "dark" | null => {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  return null;
};

const applyTheme = (theme: "light" | "dark") => {
  document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // initialize as early as possible
  useLayoutEffect(() => {
    const stored = readStored();
    const effective = stored ?? getSystemTheme();
    setTheme(effective);
    applyTheme(effective);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!readStored()) {
        const sys = e.matches ? "dark" : "light";
        setTheme(sys);
        applyTheme(sys);
      }
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  };

  const resetToSystem = () => {
    localStorage.removeItem(THEME_KEY);
    const sys = getSystemTheme();
    setTheme(sys);
    applyTheme(sys);
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <button
        id="themeToggle"
        onClick={toggle}
        aria-label="Toggle theme"
        aria-pressed={theme === "dark"}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <button
        onClick={resetToSystem}
        style={{
          background: "transparent",
          border: "1px solid currentColor",
          padding: "0.3rem 0.6rem",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.75rem",
        }}
        aria-label="Reset to system preference"
      >
        System
      </button>
    </div>
  );
}
