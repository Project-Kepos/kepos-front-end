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
              <Button link="/sign-in">Entrar com e-mail</Button>
            </div>
            <div className={styles.textLine}>OU</div>
            <div className={styles.boxItem}>
              <div className={styles.text}>Cadastrar</div>
            </div>
            <div className={styles.boxItem2}>
              <Button link="/sign-up">Cadastrar com e-mail</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLoginBox
