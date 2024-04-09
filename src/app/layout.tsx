import React from 'react';
import type { Metadata } from "next";
// import {Open_Sans} from "next/font/google"
import "./globals.css";
import '@mantine/core/styles.css';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  rem
} from '@mantine/core';
import {Header} from '@components/header/Header';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',

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
