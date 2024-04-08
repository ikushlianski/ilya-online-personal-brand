import {Introduction} from '@pages/frontPage/introduction/Introduction';
import {MajorSkills} from '@pages/frontPage/majorSkills/MajorSkills';
import {
  NewApportunities
} from '@pages/frontPage/newApportunities/NewApportunities';
import {
  InterestingProject
} from '@pages/frontPage/intrestingProgect/InterestingProject';
import styles from './FrontPage.module.css'

export const FrontPage = () => {
  return (
    <div className={styles.frontPage}>
      <Introduction/>
      <MajorSkills/>
      <NewApportunities isLookingForJob={true}/>
      <InterestingProject/>
    </div>
)}
