"use client";
import React, { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const WrapperLayout = ({ children }: { children: React.ReactNode }) => {
  const session = null;

  useEffect(() => {
    if (session) {
      console.log("Hay sesión");
    } else {
      console.log("NO hay sesión");
    }
  });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <WrapperLayout>{children}</WrapperLayout>;
};

export default Wrapper;
