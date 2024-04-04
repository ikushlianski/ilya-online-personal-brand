import ClickButton from '@components/button/ClickButton';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NewApportunities.module.css';
import github from '/public/github.svg';
import linkedin from '/public/linkedin.svg'


interface Props {
  isLookingForJob: boolean
}

export const NewApportunities = ({isLookingForJob}:Props) => {
  return (
    <section className={styles.newApportunities}>
      {isLookingForJob ? (
          <>
            <div className={styles.newApportunities_liveIndicator}>
              <div className={styles.liveIndicator_waves}></div>
            </div>
            <div className={styles.newApportunities_headerWrapper}>
              <h2 className={styles.newApportunities_header}>Considering new opportunities</h2>
            </div>
            <div className={styles.newApportunities_button}>
              <ClickButton text={'See my CV'}/>
            </div>
            </>) : (
            <div>
              <h3 className={styles.newApportunities_header}>I am not actively looking for new opportunities</h3>
              <h3 className={styles.newApportunities_header}>But we could still stay in touch!</h3>
            </div>)
      }
            <div className={styles.newApportunities_socialLinks}>
              <div className={styles.socialMedia_item}>
                <Link href={'https://github.com/ikushlianski'}>
                  <Image src={github} width={40} alt={'github'}/>
                </Link>
              </div>
              <div className={styles.socialMedia_item}>
                <Link href={'https://www.linkedin.com/in/ilya-kushlianski'}>
                  <Image src={linkedin} alt={'linkedin'} width={40}/>
                </Link>
              </div>
            </div>
    </section>
  )
}
