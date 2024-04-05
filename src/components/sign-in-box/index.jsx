import React from 'react'
import styles from './styles.module.css'
import InputText from '../inputText'
import Button from '../button'

const SignInbox = () => {
  return (
    <div className={styles.box}>
      <div>      <div className={styles.textLogin}>Fazer Login</div>
        <div className={styles.greenBox}>
          <form onSubmit={(e) => handleSignIn(e)}>
            {/*
            <input type="email" id="email" />
            <input type="senha" id="senha" />
            <button>Logar</button>
            */}
            <div className={styles.intoBox}>
              <div className={styles.boxItem}>
                <InputText
                  type="text"
                  placeholder="E-mail / Usuário"
                  label="Name" />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  placeholder="Senha"
                  label="Name" />
              </div>
              <div className={styles.boxItem}>
              <Button text="Entrar"/>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignInbox