import React from 'react';
import { generateColors } from '@mantine/colors-generator';
import type { Metadata } from "next";
// import {Open_Sans} from "next/font/google"
import "./globals.css";
import '@mantine/core/styles.css';


import {
  ColorSchemeScript,
  createTheme, MantineColorsTuple,
  MantineProvider,
  rem
} from '@mantine/core';
import {Header} from '@components/header/Header';

export const myGreenColor: MantineColorsTuple = [
  '#e1ffff',
  '#cefefe',
  '#a1fafa',
  '#70f7f7',
  '#4cf4f4',
  '#36f2f2',
  '#24f2f2',
  '#0cd7d7',
  '#00c0c0',
  '#00a6a6'
];

const myOrangeColor: MantineColorsTuple = [
  '#fff2e3',
  '#ffe4ce',
  '#fcc99f',
  '#f8ab6b',
  '#f5913f',
  '#f48124',
  '#f47914',
  '#da6707',
  '#c35a01',
  '#aa4c00'
]

const myPurpleColor: MantineColorsTuple = [
    "#fcecff",
    "#efd6fa",
    "#dcabef",
    "#c87de6",
    "#b756dd",
    "#ac3ed9",
    "#a831d7",
    "#9224bf",
    "#831eac",
    "#721497"
]

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '5rem',
  },
  colors: {
    myGreenColor,
    myOrangeColor,
    myPurpleColor
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
