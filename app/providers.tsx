"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false} 
      storageKey="eliteprize-theme"
      forcedTheme="dark"
    >
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  );
}
