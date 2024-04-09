'use client'
import ClickButton from '@components/button/ClickButton';
import {Container, Title} from '@mantine/core';
import styles from './Introduction.module.css';
import {typeAnimationText} from '@animations/TypeAnimationText';


export const Introduction = () => {
  const frontend_text = 'Frontend developer';
  const backend_text = 'Frontend / Backend developer';
  const mentor_text = 'Frontend / Backend developer. Mentor';

  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };
  return (
    <Container {...demoProps}>
      <Title order={1}>Ilya Kushlianski</Title>
    </Container>

    // <section className={styles.introduction}>
    //   <div className={styles.introduction_wrapper}>
    //     <div className={styles.introduction_name}>
    //       <h1  id={'name'}>Ilya Kushlianski</h1>
    //     </div>
    //     <div className={styles.introduction_professions}>
    //         {typeAnimationText(frontend_text, backend_text, mentor_text)}
    //     </div>
    //     <div className={styles.introduction_button}>
    //       <ClickButton text={'See my CV'}/>
    //     </div>
    //
    //   </div>
    //
    //   {/*<div className={styles.introduction_photo}>*/}
    //
    //   {/*</div>*/}
    //
    // </section>
  )
}
