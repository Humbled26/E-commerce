"use client";

import {
  MantineProvider,
  createTheme,
  localStorageColorSchemeManager,
} from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({});

const colorSchemeManager = localStorageColorSchemeManager({
  key: "theme",
});

export default function MantineThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
    >
      {children}
    </MantineProvider>
  );
}