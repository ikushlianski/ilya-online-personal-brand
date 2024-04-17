import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";
import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";
import React from "react";
import { Header } from "@components/header/Header";
import style from "./Header.module.css";

export default function HeaderLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell withBorder={false} header={{ height: 84 }}>
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
