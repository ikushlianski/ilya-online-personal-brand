import ClickButton from "@components/button/ClickButton";
import { SimpleGrid, Stack, Text, Title } from "@mantine/core";

export const Coding = () => {
  return (
    <>
      <Title order={2} ta={"center"}>
        Coding
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
              style={(theme) => ({ color: theme.colors.myPurpleColor[3] })}
            >
              Sources I use to learn
            </Text>
            <Text size="lg" pb="sm">
              For tech overviews: email listings like Node Weekly, subscribing
              to dev blogs, YouTube channels and podcasts.
            </Text>
            <Text size="lg">
              For learning new things: documentation, specs and books.
            </Text>
            <Text size="lg" pb="sm">
              For quick bites, Stack Overflow is the standard (I do not own a
              Copy-Past button though).
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myPurpleColor[3] })}
            >
              How I learn code
            </Text>
            <Text size="lg" pb="lg">
              It is all about practice in the end. I start with guided tours of
              the new technology and try implementing some tiny project as I go
              to get more comfortable with what I have just learned. However, I
              do understand that it is web fundamentals, not new shiny
              frameworks, that should be the foundation of my programming
              knowledge. Knowing these fundamentals helps you de-mystify the new
              stuff you learn.
            </Text>
            <ClickButton text={"See my code examples"} />
            <Text size="lg" pb="sm" pt="lg">
              For theory, I use a technique called ‘spaced repetition’. This
              helps me keep my knowledge fresh on any topic I'm currently
              working with.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myPurpleColor[3] })}
            >
              Why I focus only on Javascript
            </Text>
            <Text size="lg" pb="sm">
              I believe a good engineer can switch between languages without
              much difficulty, but I believe it's just impossible to be good at
              many languages at once. I bet on good knowledge of one thing
              rather than boasting about knowing a dozen languages I hardly
              worked with.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myPurpleColor[3] })}
            >
              Dealing with difficulties
            </Text>
            <Text size="lg" pb="sm">
              Banging your head against a problem is frustrating. But as I
              gained more experience this was no more a big roadblock. Now I
              teach my mentees not to give up, read what the actual errors say,
              not be scared of red color, and google things properly.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myPurpleColor[3] })}
            >
              Using AI at work
            </Text>
            <Text size="lg" pb="sm">
              I am not sure that stuff like Github co-pilot is really helpful if
              you weigh all pros and cons. I think using some kind of AI at work
              for simple stuff like very basic unit tests saves you some time,
              but we should not fully rely on AI for true coding. So I would say
              it is good for boilerplate tasks but nothing beyond that.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myPurpleColor[3] })}
            >
              What is quality code for me
            </Text>
            <Text size="lg" pb="sm">
              Everybody thinks they write clean code, so the notion of ideal
              clean code is hard to determine. Yet I believe quality means
              understandable, easily testable, typed and maintainable code that
              can be adapted to changes in business requirements and has
              forward-looking architecture. With such code, time to add new
              features does not grow exponentially.
            </Text>
            <Text size="lg" pb="sm">
              Linters, pre-commit hooks, Github Actions and similar checks are
              of great help too.
            </Text>
          </div>
          <div>
            <Text
              size="lg"
              pb="lg"
              style={(theme) => ({ color: theme.colors.myPurpleColor[3] })}
            >
              Coding vs. business
            </Text>
            <Text size="lg" pb="sm">
              I belong to developers for whom coding is inextricably linked with
              the business side of things. I understand that our products do not
              exist in vacuum, there are users out there who have their view on
              our product and there are businesses willing return on their
              money!
            </Text>
            <Text size="lg" pb="sm">
              I strive to achieve a reasonable balance between code quality and
              changing business requirements.
            </Text>
          </div>
        </SimpleGrid>
      </Stack>
    </>
  );
};
