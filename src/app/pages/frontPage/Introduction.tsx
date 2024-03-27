import styles from './Introduction.module.css'

export const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.introduction_name}>
        <h1>Ilya Kushlianski</h1>
        <h2 className={styles.name_frontend}>Frontend developer</h2>
        <h2 className={styles.name_backend}>Backend developer</h2>
        <h2 className={styles.name_mentor}>Mentor</h2>
      </div>

      <div className={styles.introduction_photo}>

      </div>


    </section>
  )
}
