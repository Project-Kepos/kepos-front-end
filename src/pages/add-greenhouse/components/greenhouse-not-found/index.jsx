import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styles from './styles.module.css'
import { MdArrowBack, MdAutorenew, MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const GreenhouseNotFound = () => {
  return (
    <div className={styles.foundicon}>
      <MdCancel className={styles.check_circle} />  
      <h2>Estufa não encontrada</h2>
      <div className={styles.buttons}>
      <Link to="/dashboard" className={styles.foundicon}>
      <MdAutorenew size={48} className={styles.backicon}/>
              Tentar vovamente  
              </Link>
      <Link to="/dashboard" className={styles.foundicon}>    
          <MdArrowBack size={48} className={styles.backicon}/>
              Voltar
        </Link>
        </div>
    </div>
  )
}

export default GreenhouseNotFound
