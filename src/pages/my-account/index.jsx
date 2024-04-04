import { Header } from '@components/header'
import { Footer } from '@components/footer'
import { PiArrowLeft } from 'react-icons/pi'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function MyAccount (){
    
return (


        <div>
            <p className={styles.title}>
            Adicionar estufa
            </p>
            <Link to='/dashboard' className={styles.btnVoltar}>
               <PiArrowLeft size={48}/> Voltar               
            </Link>
        </div>

)
}
