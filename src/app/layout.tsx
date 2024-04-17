import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";

import "./globals.css";
import { Footer } from "@components/footer/Footer";
import HeaderLayout from "@components/header/HeaderLayout";
import React from "react";
import type { Metadata } from "next";

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
          <HeaderLayout>{children}</HeaderLayout>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
