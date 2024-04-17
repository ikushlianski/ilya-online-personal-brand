"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Anchor, Group, Burger, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

const mainLinks = [
  { link: "/", label: "Home" },
  { link: "/personality", label: "Personality" },
  { link: "/codeExamples", label: "Code examples" },
  { link: "/skills", label: "Skills" },
  { link: "/experience", label: "Experience" },
  { link: "/cv", label: "CV" + " " + "\u{1F4CE}" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const router = useRouter();

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        router.push(item.link);
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
          color={"white"}
        />
      </Container>
    </header>
  );
}
