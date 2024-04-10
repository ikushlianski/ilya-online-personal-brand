import {Stack, Title, Text, Highlight} from '@mantine/core';

export const WhyMe = () => {
  return (
    <Stack gap='lg' style={(theme) => ({paddingLeft : theme.spacing.md, marginBottom : theme.spacing.xl})}>
      <Title order={2} style={{'text-align' : 'center'}}>Why me</Title>
      <Highlight
      highlight={'building full-stack web applications from scratch'} size='lg' highlightStyles={(theme) => ({backgroundColor: theme.colors.myPurpleColor[3],
        fontWeight: 500,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'})}>Have extensive experience in building full-stack web applications from scratch</Highlight>
      <Highlight size='lg' highlight={'Leadership skills'} highlightStyles={(theme) => ({backgroundColor: theme.colors.myPurpleColor[3],
        fontWeight: 500,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'})}>Leadership skills, empathetic listener</Highlight>
      <Highlight highlight={'help build and document team processes'} size='lg' highlightStyles={(theme) => ({backgroundColor: theme.colors.myPurpleColor[3],
        fontWeight: 500,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'})} >Eager to help build and document team processes, including from the ground up</Highlight>
      <Highlight highlight={'product-centric mentality'} size='lg' highlightStyles={(theme) => ({backgroundColor: theme.colors.myPurpleColor[3],
        fontWeight: 500,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'})}>Business-facing and product-centric mentality, without sacrificing code quality and maintainability</Highlight>
      <Highlight highlight={'software development automation'} size='lg' highlightStyles={(theme) => ({backgroundColor: theme.colors.myPurpleColor[3],
        fontWeight: 500,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'})}>Promote infrastructure as code and software development automation</Highlight>
      <Highlight highlight={'Advanced written and spoken English'} size='lg' highlightStyles={(theme) => ({backgroundColor: theme.colors.myPurpleColor[3],
        fontWeight: 500,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'})}>Advanced written and spoken English helps me work efficiently with both tech and non-tech customers</Highlight>
      <Highlight highlight={'value and encourage transparency in team work'} size='lg' highlightStyles={(theme) => ({backgroundColor: theme.colors.myPurpleColor[3],
        fontWeight: 500,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'})}>Encourage proper backlog management, love clean and transparent Jira, value and encourage transparency in team work</Highlight>
    </Stack>
  )
}
