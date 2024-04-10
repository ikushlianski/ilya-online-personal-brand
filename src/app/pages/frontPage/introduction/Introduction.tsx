import ClickButton from '@components/button/ClickButton';
import {Flex, Title, Text} from '@mantine/core';
import {typeAnimationText} from '@animations/TypeAnimationText';


export const Introduction = () => {
  const frontend_text = 'Frontend developer';
  const backend_text = 'Frontend / Backend developer';
  const mentor_text = 'Frontend / Backend developer. Mentor';


  return (
    <Flex direction="column" align="center" gap="lg" style={(theme) => ({marginTop: theme.spacing.xl, marginBottom: theme.spacing.xl})}>
      <Title order={1}>Ilya Kushlianski</Title>
      <Text size='sm' style={{'display': 'inline-block', 'text-align': "center", 'height': '85px'}}>{typeAnimationText(frontend_text, backend_text, mentor_text)}</Text>
      <ClickButton text={'See my CV'}/>
    </Flex>

  )
}
