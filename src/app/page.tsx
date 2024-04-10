'use client'
import {Footer} from '@components/footer/Footer';
import {Header} from '@components/header/Header';
import {AppShell} from '@mantine/core';
import {FrontPage} from '@pages/frontPage/FrontPage';

export default function Home() {
  return (
    <>
      <AppShell withBorder={false} header={{ height: 70}}>
        <AppShell.Header>
          <Header/>
        </AppShell.Header>
        <AppShell.Main>
          <FrontPage/>
        </AppShell.Main>
        <Footer/>
      </AppShell>

    </>
  );
}
