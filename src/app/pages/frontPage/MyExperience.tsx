import { Text, Stack, Highlight } from "@mantine/core";
import { experienceYears } from "@/app/variables/variables";

export const MyExperience = () => {
  const text = `${experienceYears} years`;

  return (
    <Stack
      align="center"
      gap="xs"
      style={(theme) => ({ marginBottom: theme.spacing.xl })}
    >
      <Highlight
        highlight={"7"}
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
      <Text size="xl">of exciting web development journey</Text>
    </Stack>
  );
};
