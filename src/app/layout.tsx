import { Footer } from "@components/footer/Footer";
import { Header } from "@components/header/Header";
import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import { AppShell, AppShellHeader, MantineProvider } from "@mantine/core";
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
          <AppShell withBorder={false} header={{ height: 70 }}>
            <AppShellHeader>
              <Header />
            </AppShellHeader>
          </AppShell>
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
