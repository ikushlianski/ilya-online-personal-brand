'use client'
import styles from '@components/button/ClickButton.module.css'

interface Button {
  text:string
}

const ClickButton = ({children}:Button) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}


export default ClickButton;
