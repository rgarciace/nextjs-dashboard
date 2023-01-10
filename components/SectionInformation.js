import styles from '/styles/components/SectionInformation.module.css'

const SectionInformation = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default SectionInformation