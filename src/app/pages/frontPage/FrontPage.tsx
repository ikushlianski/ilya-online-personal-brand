import {Introduction} from '@pages/frontPage/introduction/Introduction';
import {MajorSkills} from '@pages/frontPage/majorSkills/MajorSkills';
import styles from './FrontPage.module.css'

export const FrontPage = () => {
  return (
    <div className={styles.frontPage}>
      <Introduction/>
      <MajorSkills/>
    </div>
)}
