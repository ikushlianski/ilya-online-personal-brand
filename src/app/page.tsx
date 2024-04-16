"use client";
import { Container } from "@mantine/core";
import { InterestingProject } from "@/app/frontPage/InterestingProject";
import { Introduction } from "@/app/frontPage/Introduction";
import { MajorSkills } from "@/app/frontPage/MajorSkills";
import { MyExperience } from "@/app/frontPage/MyExperience";
import { NewApportunities } from "@/app/frontPage/NewApportunities";
import { WhyMe } from "@/app/frontPage/WhyMe";

export default function Home() {
  return (
    <>
      <Container
        fluid
        bg="var(--mantine-color-gray-9)"
        size="responsive"
        c="var(--mantine-color-white)"
      >
        <Introduction />
        <MajorSkills />
        <NewApportunities isLookingForJob={true} />
        <InterestingProject />
        <WhyMe />
        <MyExperience />
      </Container>
    </>
  );
}
