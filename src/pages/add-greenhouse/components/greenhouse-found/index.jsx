import { MdArrowBack, MdCheckCircleOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const GreenhouseFound = () => {
  return (
    <div className={styles.foundicon}>
      <MdCheckCircleOutline className={styles.check_circle} />
      <h2>Déndro encontrada</h2>
      <div className={styles.button}>
        <Link to="/dashboard">
          <MdArrowBack size={48} className={styles.backicon} />
          Voltar
        </Link>
      </div>
    </div>
  )
}

export default GreenhouseFound
