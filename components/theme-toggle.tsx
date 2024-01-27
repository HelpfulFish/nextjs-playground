"use client";

import { useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useMemo } from "react";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  const THEME = {
    DARK: "dark",
    LIGHT: "light",
  };

  return (
    <Button variant="outline" size="icon" className={className}>
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        onClick={() => setTheme(THEME.LIGHT)}
      />
      <Sun
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        onClick={() => setTheme(THEME.DARK)}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
