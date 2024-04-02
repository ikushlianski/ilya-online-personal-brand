'use client';

import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';


const mainLinks = [
  { link: '#', label: 'Home' },
  { link: '#', label: 'Personality' },
  { link: '#', label: 'Code examples' },
  { link: '#', label: 'Skills' },
  { link: '#', label: 'Experience' },
  { link: '#', label: 'CV' + ' ' + '\u{1F4CE}'},

];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Box className={classes.links} visibleFrom="sm">
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="md"
          hiddenFrom="sm"
          color={'white'}
        />
      </Container>
    </header>
  );
}
