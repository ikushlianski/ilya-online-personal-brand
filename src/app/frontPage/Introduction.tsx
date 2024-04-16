import ClickButton from "@components/button/ClickButton";
import { Flex, Title, Text } from "@mantine/core";
import { typeAnimationText } from "@animations/TypeAnimationText";
import style from "./frontPage.module.css";

export const Introduction = () => {
  const frontend_text = "Frontend developer";
  const backend_text = "Frontend / Backend developer";
  const mentor_text = "Frontend / Backend developer. Mentor";

  return (
    <Flex
      direction="column"
      align="center"
      gap="lg"
      style={(theme) => ({
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl,
      })}
      className={style.introduction}
    >
      <Title order={1}>Ilya Kushlianski</Title>
      <Text
        size={{ base: "xs", sm: "sm" }}
        style={(theme) => ({
          color: theme.colors.myGreenColor[7],
          textAlign: "center",
          height: "85px",
        })}
      >
        {typeAnimationText(frontend_text, backend_text, mentor_text)}
      </Text>
      <ClickButton text={"See my CV"} />
    </Flex>
  );
};
