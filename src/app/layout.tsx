import React from 'react';
import type { Metadata } from "next";
// import {Open_Sans} from "next/font/google"
import "./globals.css";
import '@mantine/core/styles.css';


import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  rem
} from '@mantine/core';
import {Header} from '@components/header/Header';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '5rem',
  },
});

// const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ilya Kushlianski",
  description: "Personal website",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <MantineProvider theme={theme}>
        {/*<Header/>*/}
        {children}
      </MantineProvider>
      </body>
    </html>
  );
}
