import { Header } from '@components/header'
import { Footer } from '@components/footer'
import styles from './styles.module.css'
import { MdAccountCircle } from 'react-icons/md'
import data from '../../../db.json'


export function MyAccount() {
  
return(

        <div>

            <div className={styles.card}>
                <div className={styles.iconcard}>
                    <MdAccountCircle size="4rem" className={styles.accountIcon} />
                    <h1 className={styles.accountText}>Minha Conta</h1>
                </div>

                <p className={styles.cardtext}>
                    Nome: {data.users[0].name}    
                </p>
                <p className={styles.cardtext}>
                    E-mail: {data.users[0].email}
                </p>
                
                <p className={styles.cardtext}>
                    Senha: {data.users[0].password}
                </p>
            </div>


        </div>
    )
}