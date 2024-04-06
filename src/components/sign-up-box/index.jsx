import React from 'react'
import styles from './styles.module.css'
import InputText from '../inputText'
import Button from '../button'
import Link from '../link'


const SignUpbox = () => {
  return (
    <div className={styles.box}>
      <div>      <div className={styles.textLogin}>Criar uma conta</div>
        <div className={styles.greenBox}>
          <form onSubmit={(e) => handleSignIn(e)}>
            <div className={styles.intoBox}>
              <div className={styles.boxItem}>
                <InputText
                  type="text"
                  placeholder="Usuário"
                id="email"/>
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  placeholder="E-mail" 
                  id="senha"
                  />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  placeholder="Senha" 
                  id="senha"
                  />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  placeholder="Confirmar senha" 
                  id="Confsenha"
                  />
              </div>
              <div className={styles.boxItem}>
                <Button text="Criar Conta" />
              </div>
              <div className={styles.boxItemLink}>
                <Link text="Já possuo uma conta" url="/sign-in"/>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUpbox