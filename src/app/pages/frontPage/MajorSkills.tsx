import ClickButton from '@components/button/ClickButton';
import NextImage from 'next/image';
import javascript from '/public/javascript.png';
import typescript from '/public/typescript.png';
import react from '/public/react.png';
import node from '/public/node.png';
import {Flex, Title, SimpleGrid, Image} from '@mantine/core';

export const MajorSkills = () => {

  return (
    <Flex direction="column" align="center" gap="lg" style={(theme) => ({marginBottom: theme.spacing.xl})}>
      <Title order={2}>Major skills</Title>
      <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg">
          <Image component={NextImage} src={javascript} alt={'JavaScriptImage'} w={100} h={100}/>
          <Image component={NextImage} src={typescript} alt={'TypeScriptImage'} w={100} h={100}/>
          <Image component={NextImage} src={react} alt={'ReactImage'} w={100} h={100}/>
          <Image component={NextImage} src={node} alt={'NodeImage'} w={100} h={100}/>
      </SimpleGrid>
      <ClickButton text={'Explore all my skills'}/>
    </Flex>
  )
}
