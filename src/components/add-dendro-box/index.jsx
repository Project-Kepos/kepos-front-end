import { RiAddLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const AddDendro = () => {
  return (
    <Link className={styles.link} to="/dashboard/add-greenhouse">
      <div className={styles.dendroBox}>
        <div className={styles.dendroIcon}>
          <RiAddLine size={40} />
        </div>
        <div className={styles.dendroText}>
          <p>Adicionar </p>Estufa
        </div>
      </div>
    </Link>
  )
}

export default AddDendro
