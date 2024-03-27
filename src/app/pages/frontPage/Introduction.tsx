'use client'
import {useEffect, useState} from 'react';
import {typingText} from '@scripts/typingText';
import styles from './Introduction.module.css'


export const Introduction = () => {
  const [frontendText, setFrontendText] = useState<string>('');
  const [backendText, setBackendText] = useState<string>('');
  const [mentorText, setMentorText] = useState<string>('');

  const frontend_text = 'Frontend developer';
  const backend_text = 'Backend developer';
  const mentor_text = 'Mentor';

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
      <div className={styles.introduction_name}>
        <h1 id={'name'}>Ilya Kushlianski</h1>
        <h2 className={styles.name_frontend} id={'frontend'}>{frontendText}</h2>
        <h2 className={styles.name_backend} id={'backend'}>{backendText}</h2>
        <h2 className={styles.name_mentor} id={'mentor'}>{mentorText}</h2>
      </div>

      <div className={styles.introduction_photo}>

      </div>


    </section>
  )
}
