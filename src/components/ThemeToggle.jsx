import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check system preference or stored preference
    return localStorage.getItem("theme") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("theme"));
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">☀️</span>
      <Switch checked={darkMode} onCheckedChange={setDarkMode} />
      <span className="text-sm text-muted-foreground">🌙</span>
    </div>
  );
}
