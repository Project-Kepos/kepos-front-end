import { Header } from '@components/header'
import { Footer } from '@components/footer'
import styles from './styles.module.css'
import { MdAccountCircle } from 'react-icons/md'

export function MyAccount () {
    return (
        <div>
            
            <div className={styles.card}>       
           <div className={styles.iconcard}>
             <MdAccountCircle size="4rem" className={styles.accountIcon}/>
             <h1 className={styles.accountText}>Minha Conta</h1>
             </div>
            
            <p className={styles.cardtext}>
                Nome
            </p>
            <p className={styles.cardtext}>
                E-mail
            </p>
            <p className={styles.cardtext}>
                Senha
            </p>
                         </div>
            
           
        </div>
    )
}