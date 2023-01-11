import styles from '/styles/components/HistoryColors.module.css'
const HistoryColors = ({first="", second="", third=""}) => {
  return (
    <div className={styles.container}>
      {first && <span className={`${styles.item} ${styles.first}`}>{first}</span>}
      {second && <span className={`${styles.item} ${styles.second}`}>{second}</span>}
      {third && <span className={`${styles.item} ${styles.third}`}>{third}</span>}
    </div>
  )
}

export default HistoryColors