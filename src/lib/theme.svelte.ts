// src/lib/theme.svelte.ts
import { browser } from "$app/environment";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (browser) {
    return (localStorage.getItem("theme") as Theme) ?? "light";
  }
  return "light";
};

let theme = $state(getInitialTheme());

export function getTheme() {
  return theme;
}

export function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  if (browser) {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
}
