import React from 'react';
import type { Metadata } from "next";
import {Open_Sans} from "next/font/google"
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import {Header} from '@components/header/Header';



const openSans = Open_Sans({ subsets: ["latin"] });

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
      <body className={openSans.className}>
      <MantineProvider>
        <Header/>
        {children}
      </MantineProvider>
      </body>
    </html>
  );
}
