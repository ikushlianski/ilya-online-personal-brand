import ClickButton from '@components/button/ClickButton';
import Image from 'next/image';
import styles from './MajorSkills.module.css';
import javascript from '/public/javascript.png';
import typescript from '/public/typescript.png';
import react from '/public/react.png';
import node from '/public/node.png'

export const MajorSkills = () => {

  return (
    <section className={styles.skills}>
        <div className={styles.skills_header}>
          <h2>Major skills</h2>
        </div>
      <div className={styles.skills_box}>
        <div className={styles.box_item}>
          <Image src={javascript} alt={'JavaScriptImage'} width={100}/>
        </div>
        <div className={styles.box_item}>
          <Image src={typescript} alt={'TypeScriptImage'} width={100}/>
        </div>
        <div className={styles.box_item}>
          <Image src={react} alt={'ReactImage'} width={100}/>
        </div>
        <div className={styles.box_item}>
          <Image src={node} alt={'NodeImage'} width={100}/>
        </div>
      </div>
      <div className={styles.skills_button}>
        <ClickButton text={'Explore all my skills'}/>
      </div>
    </section>
  )
}
