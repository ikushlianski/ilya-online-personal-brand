import styles from './InterestingProject.module.css'

export const InterestingProject = () => {
  return (
    <section className={styles.interestingProject}>
      <h2 className={styles.interestingProject_header}>What project i am interested in</h2>
      <span className={styles.interestingProject_}>Domain</span>
      <p>Any end-user-oriented project, preferably a project from scratch or very little legacy code</p>
      <span>Tech stack:</span>
      <p>A full-stack React/Node.js project, Typescript, Amazon Web Services, Postgres/MongoDB, GraphQL, microservices</p>
      <span>Processes:</span>
      <p>Well-established planning, grooming and estimation processes (or let us set them up together!)</p>
      <span>Testing & quality:</span>
      <p>I would be glad to join a team boasting high engineering culture, who value testing and make pipelines that allow sleeping well at night</p>
    </section>
  )
}
