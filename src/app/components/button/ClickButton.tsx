'use client'
import styles from '@components/button/ClickButton.module.css'

interface Button {
  text:string
}

const ClickButton = ({text}:Button) => {
  return (
      <button className={styles.button}>{text}</button>
  )
}


export default ClickButton;
