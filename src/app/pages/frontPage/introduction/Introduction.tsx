'use client'
import styles from './Introduction.module.css';
import {typeAnimationText} from '@animations/TypeAnimationText'


export const Introduction = () => {
  const frontend_text = 'Frontend developer';
  const backend_text = 'Frontend / Backend developer';
  const mentor_text = 'Frontend / Backend developer. Mentor';


  return (
    <section className={styles.introduction}>
      <div className={styles.introduction_wrapper}>
        <div className={styles.introduction_name}>
          <h1  id={'name'}>Ilya Kushlianski</h1>
        </div>
        <div className={styles.introduction_professions}>
            {typeAnimationText(frontend_text, backend_text, mentor_text)}
        </div>

      </div>

      {/*<div className={styles.introduction_photo}>*/}

      {/*</div>*/}


    </section>
  )
}
