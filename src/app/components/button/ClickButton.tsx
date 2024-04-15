"use client";
import { Button, rem } from "@mantine/core";
import style from "./Button.module.css";

interface Iprops {
  text: string;
  // size: string;
}

const ClickButton = ({ text }: Iprops) => {
  const gradient =
    "linear-gradient(45deg, var(--custom-green-color) 0%, var(--custom-purple-color) 50%, var(--custom-orange-color) 100%)";

  return (
    <Button
      // radius="md"
      className={style.button}
      styles={{
        root: {
          padding: rem(2),
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: "var(--mantine-color-gray-9)",
          color: "var(--mantine-color-white)",
          borderRadius: "calc(var(--button-radius) - 2px)",
          paddingLeft: "var(--mantine-spacing-md)",
          paddingRight: "var(--mantine-spacing-md)",
        },

        label: {
          // backgroundImage: gradient,
          // WebkitBackgroundClip: 'text',
          // WebkitTextFillColor: 'transparent',
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ClickButton;
