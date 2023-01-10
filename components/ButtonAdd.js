import { Plus } from 'iconoir-react'
import styles from '/styles/components/ButtonAdd.module.css'

const ButtonAdd = ({ add }) => {
  return (
    <button className={styles.button} onClick={add}>
      <Plus />
    </button>
  )
}

export default ButtonAdd