"use client";
import {
  createTheme,
  MantineColorsTuple,
  Button,
  mergeThemeOverrides,
  rem,
} from "@mantine/core";

const myGreenColor: MantineColorsTuple = [
  "#e1ffff",
  "#cefefe",
  "#a1fafa",
  "#70f7f7",
  "#4cf4f4",
  "#36f2f2",
  "#24f2f2",
  "#0cd7d7",
  "#00c0c0",
  "#00a6a6",
];

const myOrangeColor: MantineColorsTuple = [
  "#fff2e3",
  "#ffe4ce",
  "#fcc99f",
  "#f8ab6b",
  "#f5913f",
  "#f48124",
  "#f47914",
  "#da6707",
  "#c35a01",
  "#aa4c00",
];

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
  "#721497",
];

const colorTheme = createTheme({
  colors: {
    myGreenColor,
    myOrangeColor,
    myPurpleColor,
  },
});

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "5rem",
    xxl: "9rem",
    xxxl: "12rem",
  },

  colors: {
    myGreenColor,
    myOrangeColor,
    myPurpleColor,
  },

  other: {
    largeMargin: rem(7),
  },
});

// export const theme = mergeThemeOverrides(baseTheme, colorTheme);
