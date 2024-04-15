import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/app/theme";

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
      <body>
        <MantineProvider theme={theme}>
          {/*<Header/>*/}
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
