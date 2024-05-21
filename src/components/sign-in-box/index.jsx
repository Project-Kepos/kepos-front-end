import { useNavigate } from 'react-router-dom'

import Button from '../button'
import CustomLink from '../custom-link'
import InputText from '../inputText'
import styles from './styles.module.css'
import {api} from '@libs/axios.js'

const SignInbox = () => {
  const navigate = useNavigate()

  async function handleSignIn(e) {
    e.preventDefault()
    
    try {
      const response = await api.post('/usuario/login', {
        email: email,
        snenha: password
        
      });
      localStorage.setItem('kepos-login', response.data.token)
    navigate('/dashboard', { replace: true })
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <div className={styles.box}>
      <div>
        <div className={styles.textLogin}>Fazer Login</div>
        <div className={styles.greenBox}>
          <form onSubmit={(e) => handleSignIn(e)}>
            <div className={styles.intoBox}>
              <div className={styles.boxItem}>
                <InputText
                  type="text"
                  placeholder="E-mail / Usuário"
                  id="email"
                />
              </div>
              <div className={styles.boxItem}>
                <InputText type="password" placeholder="Senha" id="senha" />
              </div>
              <div className={styles.boxItem}>
                <Button>Entrar</Button>
              </div>
              <div className={styles.boxItemLink}>
                <CustomLink to="/">Esqueci minha senha</CustomLink>
                <CustomLink to="/sign-up">Não tenho uma conta</CustomLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInbox
