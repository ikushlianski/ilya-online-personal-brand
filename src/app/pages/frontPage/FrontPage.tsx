import {Container} from '@mantine/core';
import {Introduction} from '@pages/frontPage/introduction/Introduction';
import {MajorSkills} from '@pages/frontPage/majorSkills/MajorSkills';
import {
  NewApportunities
} from '@pages/frontPage/newApportunities/NewApportunities';
import {
  InterestingProject
} from '@pages/frontPage/intrestingProgect/InterestingProject';
import {WhyMe} from '@pages/frontPage/whyMe/WhyMe';
import {MyExperience} from '@pages/frontPage/myExperience/MyExperience';

export const FrontPage = () => {


  return (
    <Container fluid bg="var(--mantine-color-gray-9)" size='responsive' c='var(--mantine-color-white)'>
      <Introduction/>
      <MajorSkills/>
      <NewApportunities isLookingForJob={true}/>
      <InterestingProject/>
      <WhyMe/>
      <MyExperience/>
    </Container>
)}
