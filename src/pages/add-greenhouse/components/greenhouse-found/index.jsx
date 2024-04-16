import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styles from './styles.module.css'


const GreenhouseFound = () => {
  return (
    <div className={styles.foundicon}>
      <IoIosCheckmarkCircleOutline />
      <h2>Déndro encontrada</h2>
    </div>
  )
}

export default GreenhouseFound
