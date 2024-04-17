import { SimpleGrid, Stack, Text, Title } from "@mantine/core";

export const Personal = () => {
  return (
    <>
      <Title order={2} ta={"center"}>
        Personal
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
              style={(theme) => ({ color: theme.colors.myGreenColor[3] })}
            >
              How I got into coding
            </Text>
            <Text size="lg" pb="sm">
              It all started with a Minsk tourism website I wanted to create
              back in 2015, but I did not have either money or knowledge
              required for that. I just wanted Belarus to be more famous in the
              world and get rid of stereotypes about us being ‘rural people
              without history‘.
            </Text>
            <Text size="lg">
              I started googling and stumbled into Drupal and Wordpress, but
              without coding skills those were not customizable enough for my
              idea.
            </Text>
            <Text size="lg" pb="sm">
              Despite some self-doubts I decided to give HTML/CSS and Javascript
              a try. I liked the power it gave me over the logic and styling and
              then dived into PHP and databases to learn what is going on on the
              backend. Running a Wordpress website I needed to understand the
              whole process, from frontend to backend and even some deployment.
              This is what led me to be a full-stack dev.
            </Text>
            <Text size="lg" pb="sm">
              I started doing other mini-projects trying the technologies I
              learned. I made an English version of a website for the news
              company I worked for, the first time I was paid for coding. Then
              came some freelancing and there it goes... Very soon I landed my
              first programming job and almost jumped over the junior position
              as I had almost enough knowledge to be a mid-level dev.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myGreenColor[3] })}
            >
              Preferred work conditions
            </Text>
            <Text size="lg" pb="sm">
              COVID-19 changed everything in our life. Now I do not consider any
              office jobs, even after the pandemic seems to have gone away.
            </Text>
            <Text size="lg" pb="sm">
              I prefer MacOS over Ubuntu or Windows for its developer
              friendliness and the unique eco-system.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myGreenColor[3] })}
            >
              My weaknesses
            </Text>
            <Text size="lg" pb="sm">
              I sometimes find it hard to maintain work-life balance. Sometimes
              when I couldn't make something work by the end of the day, this
              carries into my evening and I may finish that day in worse mood
              than usual.
            </Text>
            <Text size="lg" pb="sm">
              I am also too cautious and instead of failure I prefer to spend
              more time to ensure I will not fail.
            </Text>
            <Text size="lg" pb="sm">
              Talking to lots of unfamiliar people is a stress for everyone,
              myself included. However, I have successfully dealt with this in
              recent years as I was exposed to lots of calls with clients.
            </Text>
            <Text size="lg" pb="sm">
              Finally, I am not firm enough in some communications and if I face
              (passive?) aggression I may not be able to respond adequately,
              which hurts my morale. I need to learn to handle this better.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myGreenColor[3] })}
            >
              Me and the team
            </Text>
            <Text size="lg" pb="sm">
              I have always had good relations with every team member. My
              managers always noted the friendliness and good atmosphere that I
              create in each team.
            </Text>
            <Text size="lg" pb="sm">
              I never forget what I promised and always deliver whatever it
              takes. I also willingly help my teammates if they are stuck.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myGreenColor[3] })}
            >
              My hobbies
            </Text>
            <Text size="lg" pb="sm">
              I love reading about the history of the 20th century, because I
              want to understand why things happened as they did, why Belarus is
              where it is now, why we lag behind many countries.
            </Text>
            <Text size="lg" pb="sm">
              Good LoFi music to relax is the best remedy after a hard working
              day. I am fond of fiction books, especially about time travelling.
            </Text>
            <Text size="lg" pb="sm">
              Recently, I dived into urbanism. It is fascinating how people make
              their cities a much better place! Minsk can borrow a lot of ideas
              from around the globe.
            </Text>
          </div>
        </SimpleGrid>
      </Stack>
    </>
  );
};
