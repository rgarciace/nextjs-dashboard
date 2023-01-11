import styles from '/styles/components/ListWebs.module.css'
import { Trash } from 'iconoir-react'

const ListWebs = ({websTrackingDB}) => {
  return (
    <ul className={styles.websList}>
      {
        websTrackingDB.map(({ name, url }) => (
          <li key={name} className={styles.webItem}>
            <h4 className={styles.webItemName}>{name}</h4>
            <span className={styles.webItemUrl}>{url}</span>
            <button className={styles.webItemDelete}><Trash /><span>Eliminar</span></button>
          </li>
        ))
      }
    </ul>
  )
}

export default ListWebs