import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    }

    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full transition-all duration-300 hover:scale-110"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
      )}
    </Button>
  );
};
