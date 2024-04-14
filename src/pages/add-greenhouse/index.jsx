import { Header } from '@components/header'
import { Footer } from '@components/footer'
import { PiArrowLeft } from 'react-icons/pi'
import { MdPodcasts } from 'react-icons/md'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function AddGreenhouse() {

   return (
      <div>
         <div className={styles.card}>
            <p className={styles.title}>
               Adicionar Estufa
            </p>
            <Link to='/dashboard' className={styles.btnVoltar}>
               <PiArrowLeft size={48} /> Voltar
            </Link>
         </div>
         <div className={styles.codigo}>
            <p></p>
            
            <div>         
               <form>
               <label for="fname">Insira o código de <br></br>12 dígitos da sua estufa:</label><br></br>
               <input type="text" id="form" name="form" placeholder='ABCD-EFGH-IJKL'  className={styles.form}/><br></br>
            </form>
            </div>   
         </div>
      </div>

   )
}
