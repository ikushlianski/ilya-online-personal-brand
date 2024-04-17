import { Container, Title, Text } from "@mantine/core";

export const CodeExamplesTitle = () => {
  return (
    <Container size="lg" px={0} my={"lg"}>
      <Title order={2} ta={"center"} pb={"sm"}>
        Pet projects
      </Title>
      <Container size={"sm"}>
        <Text ta={"center"} pb={"sm"}>
          It is hard to carve out time for coding apart from your regular job.
          But that is how you grow as a developer - working on your pet
          projects.
        </Text>
        <Text ta={"center"} pb={"sm"}>
          Most projects are tiny and might have incomplete UI, as I focus more
          on data and logic, especially in my latest projects. All these pet
          projects serve one purpose: try a particular new tech or approach I
          could not try on my production projects
        </Text>
        <Text ta={"center"} pb={"sm"}>
          Here they are: from the latest and more advanced ones to the first,
          naive projects that marked the beginning of my web dev journey.
        </Text>
      </Container>
    </Container>
  );
};
