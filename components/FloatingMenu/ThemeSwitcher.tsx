"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import LineMdSunnyOutlineLoop from "../icon/LineMdSunnyOutlineLoop";
import LineMdSunnyOutlineToMoonLoopTransition from "../icon/LineMdSunnyOutlineToMoonLoopTransition";

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <LineMdSunnyOutlineLoop className="scale-125" />
      ) : (
        <LineMdSunnyOutlineToMoonLoopTransition className="scale-125" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
