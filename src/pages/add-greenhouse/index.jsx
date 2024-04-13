import { Header } from '@components/header'
import { Footer } from '@components/footer'
import { PiArrowLeft } from 'react-icons/pi'
import { MdPodcasts } from 'react-icons/md'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function AddGreenhouse() {

   return (


      <div className={styles.container}>
         <div className={styles.title}>
            Adicionar estufa
         </div>
         <Link to='/dashboard/' className={styles.btnVoltar}>
            <PiArrowLeft size={40} /> <div className={styles.textFormatation}>Voltar</div>
         </Link>
         <div className={styles.centerText}><div className={styles.textFormatation}>Insira o código de</div>
         <p>12 digitos da sua estufa</p> 
         <input type='text' className={styles.inputCode} placeholder='ABCD-EFGH-IJKL-LMNP' />
         </div>

      <div className={styles.controlBtn}>
         <button className={styles.btnBuscar}>
            <MdPodcasts  size={48}className={styles.icon} /> 
            <div className={styles.textBtn}>Buscar</div>
         </button>
         </div>

      </div>

   )
}
