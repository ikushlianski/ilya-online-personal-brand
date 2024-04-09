'use client'
import {Header} from '@components/header/Header';
import {AppShell, rem} from '@mantine/core';
import {FrontPage} from '@pages/frontPage/FrontPage';
import App from 'next/app';
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <AppShell header={{ height: 84 }}>
        <AppShell.Header>
          <Header/>
        </AppShell.Header>
        <AppShell.Main>
          <FrontPage/>
        </AppShell.Main>
      </AppShell>

    </>
  );
}
