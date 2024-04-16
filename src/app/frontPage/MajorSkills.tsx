import ClickButton from "@components/button/ClickButton";
import NextImage from "next/image";
import javascript from "/public/javascript.png";
import typescript from "/public/typescript.png";
import react from "/public/react.png";
import node from "/public/node.png";
import { Flex, Title, SimpleGrid, Image } from "@mantine/core";

export const MajorSkills = () => {
  return (
    <Flex
      direction="column"
      align="center"
      gap={{ base: "lg", sm: "xl" }}
      mb={{ base: "xl", sm: "xxxl" }}
    >
      <Title order={2}>Major skills</Title>
      <SimpleGrid
        cols={{ base: 2, sm: 4 }}
        spacing={{ base: "lg", sm: "xl" }}
        verticalSpacing={{ base: "lg", xs: "lg", sm: "xxl" }}
      >
        <Image
          component={NextImage}
          src={javascript}
          alt={"JavaScriptImage"}
          w={{ base: 100, xs: 100, sm: 160 }}
          h={{ base: 100, xs: 100, sm: 160 }}
        />
        <Image
          component={NextImage}
          src={typescript}
          alt={"TypeScriptImage"}
          w={{ base: 100, xs: 100, sm: 160 }}
          h={{ base: 100, xs: 100, sm: 160 }}
        />
        <Image
          component={NextImage}
          src={react}
          alt={"ReactImage"}
          w={{ base: 100, xs: 100, sm: 160 }}
          h={{ base: 100, xs: 100, sm: 160 }}
        />
        <Image
          component={NextImage}
          src={node}
          alt={"NodeImage"}
          w={{ base: 100, xs: 100, sm: 160 }}
          h={{ base: 100, xs: 100, sm: 160 }}
        />
      </SimpleGrid>
      <ClickButton text={"Explore all my skills"} />
    </Flex>
  );
};
