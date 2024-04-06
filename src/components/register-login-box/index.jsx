import React from 'react'
import Button from '../button'
import styles from './styles.module.css'

const RegisterLoginBox = () => {
    return (
        <div className={styles.box}>
            <div>
                <div className={styles.greenBox}>
                    <div className={styles.intoBox}>
                        <div className={styles.boxItem}>
                            <div className={styles.text}>Fazer login</div>
                        </div>
                        <div className={styles.boxItem2}>
                            <Button text="Entrar com e-mail" link={"/sign-in"}/>
                        </div>
                        <div className={styles.textLine}>OU</div>
                        <div className={styles.boxItem}>
                            <div className={styles.text}>Criar uma conta</div>
                        </div>
                        <div className={styles.boxItem2}>
                            <Button text="Cadastrar com e-mail"  link={"/sign-up"}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegisterLoginBox