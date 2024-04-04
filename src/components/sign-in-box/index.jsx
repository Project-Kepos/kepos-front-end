import React from 'react'
import styles from './styles.module.css'

const SignInbox = () => {
  return (
    <div className={styles.box}>
      <div>      <div className={styles.textLogin}>Fazer Login</div>
      <div className={styles.greenBox}>
      <form onSubmit={(e) => handleSignIn(e)}>
        <input type="email" id="email" />
        <input type="senha" id="senha" />
        <button>Logar</button>
      </form>
      </div>
      </div>

    </div>
  )
}

export default SignInbox