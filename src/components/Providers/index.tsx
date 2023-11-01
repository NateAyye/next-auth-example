"use client";
import React from 'react';
import { NextAuthProvider } from './next-auth-provider';
import { ThemeProvider } from './theme-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <NextAuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextAuthProvider>
  );
};

export default Providers;
