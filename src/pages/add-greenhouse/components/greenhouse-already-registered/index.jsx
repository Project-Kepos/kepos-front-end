import { FiAlertCircle } from 'react-icons/fi'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const GreenhouseAlreadyRegistered = () => {
  return (
    <div className={styles.foundicon}>
      <FiAlertCircle className={styles.check_circle} />
      <h2>Déndro já associada com o usuario</h2>
      <div className={styles.button}>
        <Link to="/dashboard">
          <MdArrowBack size={48} className={styles.backicon} />
          Voltar
        </Link>
      </div>
    </div>
  )
}

export default GreenhouseAlreadyRegistered
