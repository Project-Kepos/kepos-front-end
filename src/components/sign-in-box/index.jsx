import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import CustomLink from '../custom-link';
import InputText from '../inputText';
import styles from './styles.module.css';
import { api } from '@libs/axios.js';

const SignInbox = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const response = await api.post('/usuario/login', {
        email: email,
        senha: password
      });
      localStorage.setItem('kepos-login', response.data.token);
      navigate('/dashboard', { replace: true });
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
          <form onSubmit={handleSignIn}>
            <div className={styles.intoBox}>
              <div className={styles.boxItem}>
                <InputText
                  type="text"
                  placeholder="E-mail / Usuário"
                  id="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  placeholder="Senha"
                  id="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className={styles.boxItem}>
                <Button type="submit">Entrar</Button>
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
  );
}

export default SignInbox;
