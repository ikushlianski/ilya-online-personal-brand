"use client";
import { Container } from "@mantine/core";
import { HrInformation } from "@/app/personality/HrInformation";
import { Coding } from "@/app/personality/Coding";
import { Personal } from "@/app/personality/Personal";

export default function PersonalityPage() {
  return (
    <Container size="responsive" mx={"lg"} px={0} mt={"lg"}>
      <HrInformation />
      <Coding />
      <Personal />
    </Container>
  );
}
