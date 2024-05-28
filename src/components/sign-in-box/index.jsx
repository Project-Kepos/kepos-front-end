import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import CustomLink from '../custom-link';
import InputText from '../inputText';
import styles from './styles.module.css';
import { api } from '@libs/axios.js';
import { authContext } from "@contexts/AuthContext.jsx";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa o CSS padrão do react-toastify

const SignInbox = () => {
  const { saveToken } = useContext(authContext)
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
      saveToken(response.data.token);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.log(data);
      if (error.code === "ERR_NETWORK") {
        toast.error("Tente novamente mais tarde");
      } else {
        toast.error("Email ou senha inválidos. Por favor, tente novamente");
      }
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
                required
                  type="text"
                  placeholder="E-mail / Usuário"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.boxItem}>
                <InputText
                required
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default SignInbox;
