import { Stack, Title, Text, SimpleGrid } from "@mantine/core";

export const InterestingProject = () => {
  return (
    <Stack
      gap="lg"
      mb={{ base: "xl", sm: "xxxl" }}
      pr={{ base: "sm", sm: "xl" }}
      pl={{ base: "sm", sm: "xl" }}
    >
      <Title order={2} style={{ "text-align": "center" }}>
        What project i am interested in
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <div>
          <Text
            size="lg"
            style={(theme) => ({ color: theme.colors.myOrangeColor[6] })}
          >
            Domain:
          </Text>
          <Text size="lg">
            Any end-user-oriented project, preferably a project from scratch or
            very little legacy code
          </Text>
        </div>
        <div>Image</div>
        <div>Image2</div>
        <div>
          <Text
            size="lg"
            style={(theme) => ({ color: theme.colors.myOrangeColor[6] })}
          >
            Tech stack:
          </Text>
          <Text size="lg">
            A full-stack React/Node.js project, Typescript, Amazon Web Services,
            Postgres/MongoDB, GraphQL, microservices
          </Text>
        </div>
        <div>
          <Text
            size="lg"
            style={(theme) => ({ color: theme.colors.myOrangeColor[6] })}
          >
            Processes:
          </Text>
          <Text size="lg">
            Well-established planning, grooming and estimation processes (or let
            us set them up together!)
          </Text>
        </div>
        <div>Image3</div>
        <div>Image4</div>
        <div>
          <Text
            size="lg"
            style={(theme) => ({ color: theme.colors.myOrangeColor[6] })}
          >
            Testing & quality:
          </Text>
          <Text size="lg">
            I would be glad to join a team boasting high engineering culture,
            who value testing and make pipelines that allow sleeping well at
            night
          </Text>
        </div>
      </SimpleGrid>
    </Stack>
  );
};
