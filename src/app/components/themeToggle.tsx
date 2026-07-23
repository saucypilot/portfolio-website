"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark =
    mounted && (theme === "dark" || (theme === "system" && resolvedTheme === "dark"));

  return (
    <button
      className="themeToggle"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      data-mounted={mounted}
    >
      <span>Mode</span>
      <span className="themeToggleValue">{mounted ? (isDark ? "Dark" : "Light") : "—"}</span>
      <span className="themeToggleMark" aria-hidden="true" />
    </button>
  );
}
