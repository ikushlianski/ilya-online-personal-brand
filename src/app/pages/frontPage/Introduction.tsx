'use client'
import {useEffect, useState} from 'react';
import {typingText} from '@scripts/typingText';
import styles from './Introduction.module.css';
import {typeAnimationText} from '@animations/TypeAnimationText'


export const Introduction = () => {
  const [frontendText, setFrontendText] = useState<string>('');
  const [backendText, setBackendText] = useState<string>('');
  const [mentorText, setMentorText] = useState<string>('');

  const frontend_text = 'Frontend developer';
  const backend_text = 'Frontend / Backend developer';
  const mentor_text = 'Frontend / Backend developer Mentor';

  useEffect(()=>{
    return typingText(frontend_text, setFrontendText)
  },[])

  useEffect(()=>{
    if(frontendText === frontend_text){
      return typingText(backend_text, setBackendText)
    }
  },[frontendText])

  useEffect(()=>{

    if(backendText === backend_text){
      return typingText(mentor_text, setMentorText)
    }
  },[backendText])

  return (
    <section className={styles.introduction}>
      <div className={styles.introduction_wrapper}>
        <div className={styles.introduction_name}>
          <h1  id={'name'}>Ilya Kushlianski</h1>
        </div>
        <span className={styles.introduction_professions}>
            {typeAnimationText(frontend_text, backend_text, mentor_text)}
          {/*Frontend developer. Backend developer. Mentor*/}
          {/*<h2 className={styles.profession_frontend} id={'frontend'}>{frontendText}</h2>*/}
          {/*<h2 className={styles.profession_backend} id={'backend'}>{backendText}</h2>*/}
          {/*<h2 className={styles.profession_mentor} id={'mentor'}>{mentorText}</h2>*/}
        </span>

      </div>

      <div className={styles.introduction_photo}>

      </div>


    </section>
  )
}
