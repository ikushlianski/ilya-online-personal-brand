"use client";
import { Footer } from "@components/footer/Footer";
import { Header } from "@components/header/Header";
import { AppShell } from "@mantine/core";
import { Personality } from "./Personality";

export default function PersonalityPage() {
  return (
    <>
      <AppShell withBorder={false} header={{ height: 70 }}>
        <AppShell.Main>
          <Personality />
        </AppShell.Main>
        <Footer />
      </AppShell>
    </>
  );
}
