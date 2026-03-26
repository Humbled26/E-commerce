"use client";
import {
  createTheme,
  MantineProvider,
  ColorSchemeScript,
  useMantineColorScheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useEffect, useState } from "react";

export function MantineThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setColorScheme("dark");
    }
  }, []);

  const toggleColorScheme = () => {
    const newScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newScheme);
    localStorage.setItem("theme", newScheme);
  };

  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider>{children}</MantineProvider>
    </>
  );
}
export default MantineThemeProvider;
