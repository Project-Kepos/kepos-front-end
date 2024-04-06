import Button from '../button'
import CustomLink from '../custom-link'
import InputText from '../inputText'
import styles from './styles.module.css'

const SignUpbox = () => {
  return (
    <div className={styles.box}>
      <div>
        {' '}
        <div className={styles.textLogin}>Criar uma conta</div>
        <div className={styles.greenBox}>
          <form onSubmit={() => {}}>
            <div className={styles.intoBox}>
              <div className={styles.boxItem}>
                <InputText type="text" placeholder="Usuário" id="email" />
              </div>
              <div className={styles.boxItem}>
                <InputText type="password" placeholder="E-mail" id="senha" />
              </div>
              <div className={styles.boxItem}>
                <InputText type="password" placeholder="Senha" id="senha" />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  placeholder="Confirmar senha"
                  id="Confsenha"
                />
              </div>
              <div className={styles.boxItem}>
                <Button>Criar Conta</Button>
              </div>
              <div className={styles.boxItemLink}>
                <CustomLink to="/sign-in">Já possuo uma conta</CustomLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpbox
