import { SimpleGrid, Stack, Text, Title } from "@mantine/core";

export const HrInformation = () => {
  return (
    <>
      <Title order={2} ta={"center"}>
        HR information
      </Title>
      <Stack
        gap="lg"
        mt={{ base: "lg", sm: "xl" }}
        mb={{ base: "xl", sm: "xxxl" }}
        pr={{ base: "sm", sm: "xl" }}
        pl={{ base: "sm", sm: "xl" }}
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myOrangeColor[6] })}
            >
              Domains I am interested in
            </Text>
            <Text size="lg" pb="sm">
              I would like to develop web apps in such domains as real estate,
              e-commerce, tourism, media, lifestyle, sport, fintech, education
              or entertainment, but these are just a few areas of interest. My
              choice depends on many other project details as well.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myOrangeColor[6] })}
            >
              The project of my dream
            </Text>
            <Text size="lg" pb="sm">
              Team: ambitious devs who produce quality software, value testing
              (not for the sake of test coverage) and do real CI/CD.
            </Text>
            <Text size="lg" pb="sm">
              Product: a full-stack web application, where you can do both
              frontend and backend development. Ideally a project from scratch.
            </Text>
            <Text size="lg" pb="sm">
              Processes: Scrum or alike. No minute-by-minute time tracking (do
              you really trust your developers?). Estimations in story points
              not mapped to hours or days. I have seen a number of projects
              failing to meet the timelines and they all made the same mistake:
              estimate software development work in hours/days without properly
              breaking it up into clear subtasks
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myOrangeColor[6] })}
            >
              Overall career plans
            </Text>
            <Text size="lg" pb="sm">
              In the coming years I'm planning to keep coding and keep improving
              my hard skills (both frontend and backend). Among plans is diving
              into other front-end frameworks like Angular and Vue as well as
              developing software architecture skills. I am passionate about new
              frameworks like Next.js and Remix that make frontend and backend
              much closer and urge you to be on both sides of web development.
            </Text>
            <Text size="lg" pb="sm">
              I am gradually assuming more leadership responsibilities like
              leading other developers, interviewing and mentoring.
            </Text>
          </div>
        </SimpleGrid>
      </Stack>
    </>
  );
};
