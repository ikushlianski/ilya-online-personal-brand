import { Text, Stack, Highlight, Box } from "@mantine/core";
import { experienceYears } from "@/app/variables/variables";
import style from "./frontPage.module.css";

export const MyExperience = () => {
  const text = `${experienceYears} years`;

  return (
    <Stack
      align="center"
      gap="xs"
      style={(theme) => ({ marginBottom: theme.spacing.xl })}
    >
      <Box className={style.spinner}>
        <Highlight
          className={style.digit}
          highlight={"7"}
          pb="xl"
          style={(theme) => ({
            "font-size": "32px",
            color: theme.colors.myGreenColor[7],
          })}
          highlightStyles={(theme) => ({
            backgroundColor: theme.colors.myGreenColor[7],
            fontWeight: 700,
            fontSize: 76,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          })}
        >
          {text}
        </Highlight>
      </Box>

      <Text size="xl">of exciting web development journey</Text>
    </Stack>
  );
};
