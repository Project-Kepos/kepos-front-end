import { MdArrowBack, MdCheckCircle, MdCheckCircleOutline } from 'react-icons/md'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'


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
