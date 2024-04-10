import ClickButton from '@components/button/ClickButton';
import Image from 'next/image';
import javascript from '/public/javascript.png';
import typescript from '/public/typescript.png';
import react from '/public/react.png';
import node from '/public/node.png';
import {Flex, Title, SimpleGrid} from '@mantine/core';

export const MajorSkills = () => {

  return (
    <Flex direction="column" align="center" gap="lg" style={(theme) => ({marginBottom: theme.spacing.xl})}>
      <Title order={2}>Major skills</Title>

      <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg">
          <Image src={javascript} alt={'JavaScriptImage'} width={100}/>
          <Image src={typescript} alt={'TypeScriptImage'} width={100}/>
          <Image src={react} alt={'ReactImage'} width={100}/>
          <Image src={node} alt={'NodeImage'} width={100}/>
      </SimpleGrid>
      <ClickButton text={'Explore all my skills'}/>
    </Flex>
  )
}
