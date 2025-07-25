import { useTheme } from "@/app/[lang]/lib/ThemeProvider";
import { useState } from "react";
import clsx from "clsx";

// Define the exact union type for themes
type Theme = "light" | "dark";

const themes: Theme[] = ["light", "dark"];

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState<Theme>((theme as Theme) || "light");

  const handleClick = (value: Theme) => {
    setTheme(value);
    setActive(value);
  };

  return (
    <div className="inline-flex items-center p-1 rounded-full bg-muted shadow-inner border w-fit">
      {themes.map((mode) => (
        <button
          key={mode}
          onClick={() => handleClick(mode)}
          className={clsx(
            "px-4 py-1 rounded-full transition-all text-sm font-medium capitalize",
            active === mode
              ? "bg-primary text-white shadow"
              : "text-muted-foreground hover:bg-muted"
          )}
        >
          {mode}
        </button>
      ))}
    </div>
  );
};
