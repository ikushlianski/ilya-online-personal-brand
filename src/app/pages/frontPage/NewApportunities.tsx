import ClickButton from '@components/button/ClickButton';
import Image from 'next/image';
import Link from 'next/link';
import styles from './frontPage.module.css';
import github from '/public/github.svg';
import linkedin from '/public/linkedin.svg';
import {Flex, Title} from '@mantine/core';


interface Props {
  isLookingForJob: boolean
}

export const NewApportunities = ({isLookingForJob}:Props) => {
  return (
    <Flex direction="column" align="center" gap="lg" style={(theme) => ({marginBottom : theme.spacing.xl})}>
      {isLookingForJob ? (
          <>
            <div className={styles.newApportunities_liveIndicator}>
              <div className={styles.liveIndicator_waves}></div>
            </div>

              <Title order={2}>Considering new opportunities</Title>
              <ClickButton text={'See my CV'}/>
            </>) : (
            <>
              <Title order={3} style={{'text-align' : 'center'}}>I am not actively looking for new opportunities</Title>
              <Title order={3}>But we could still stay in touch!</Title>
            </>)
      }
            <Flex gap='md'>
                <Link href={'https://github.com/ikushlianski'}>
                  <Image src={github} width={40} alt={'github'}/>
                </Link>
                <Link href={'https://www.linkedin.com/in/ilya-kushlianski'}>
                  <Image src={linkedin} alt={'linkedin'} width={40}/>
                </Link>
            </Flex>
    </Flex>
  )
}
