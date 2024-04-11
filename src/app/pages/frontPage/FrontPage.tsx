import {Container} from '@mantine/core';
import {Introduction} from '@pages/frontPage/Introduction';
import {MajorSkills} from '@pages/frontPage/MajorSkills';
import {
  NewApportunities
} from '@pages/frontPage/NewApportunities';
import {
  InterestingProject
} from '@pages/frontPage/InterestingProject';
import {WhyMe} from '@pages/frontPage/WhyMe';
import {MyExperience} from '@pages/frontPage/MyExperience';

export const FrontPage = () => {


  return (
    <Container fluid bg="var(--mantine-color-gray-9)" size='responsive' c='var(--mantine-color-white)' >
      <Introduction/>
      <MajorSkills/>
      <NewApportunities isLookingForJob={true}/>
      <InterestingProject/>
      <WhyMe/>
      <MyExperience/>
    </Container>
)}
