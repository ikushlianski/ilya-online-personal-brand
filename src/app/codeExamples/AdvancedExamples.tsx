"use client";
import ClickButton from "@components/button/ClickButton";
import { Container, SimpleGrid, Title, Paper, Text, List } from "@mantine/core";
import { GETWORKS } from "@/app/api/rout";
import { Work } from "src/app/interfaces/interfaced";

export const AdvancedExamples = async () => {
  let works = await GETWORKS();

  const workItem = works.map((item: Work) => {
    return (
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: "xl" }}
        key={item._id}
      >
        <Paper shadow="sm" radius="md" p="xl">
          <Title>{item.name}</Title>
          <div>
            <Text>{item.date}</Text>
            <Text>{}</Text>
            <Text>Tech stack</Text>
          </div>
          <Text></Text>
          <ClickButton text={"Repository"} />
          <Text></Text>
          <List>
            <List.Item></List.Item>
          </List>
        </Paper>
      </SimpleGrid>
    );
  });

  return (
    <Container>
      <Title order={2} my={"lg"}>
        Advanced examples
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 10, sm: "xl" }}>
        <Paper shadow="sm" radius="md" p="xl">
          <Title></Title>
          <div>
            <Text>Date</Text>
            <Text>Difficulty</Text>
            <Text>Tech stack</Text>
          </div>
          <Text></Text>
          <ClickButton text={"Repository"} />
          <Text></Text>
          <List>
            <List.Item></List.Item>
          </List>
        </Paper>
      </SimpleGrid>
    </Container>
  );
};
