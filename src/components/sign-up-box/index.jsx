import { useRef, useState } from 'react'
import axios from 'axios';
import Button from '../button'
import CustomLink from '../custom-link'
import InputText from '../inputText'
import styles from './styles.module.css'
import {api} from '@libs/axios.js'

const SignUpbox = () => {
  const [nome,setNome] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [warning, setWarnig] = useState(false)
  const senhaRef = useRef(null)

  async function login(){
    try {
      const response = await api.post('/usuario/login', {
        email: email,
        senha: password
        
      });
      localStorage.setItem('kepos-login', response.data.token)
    navigate('/dashboard', { replace: true })
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert()
    try {
      const response = await api.post('/usuario', {
        nome: nome,
        email: email,
        senha: password
      });
      console.log(response.data);
      login()
    } catch (error) {
      console.error(error);
    }
  };


  const handleComparassion = () => {
    if (password !== confPassword) {
      setPassword('')
      setConfPassword('')
      setWarnig(true)
      senhaRef.current.focus()
    } else {
      setWarnig(false)
    }
  }
  return (
    <div className={styles.box}>
      <div>
        <div className={styles.textLogin}>Criar uma conta</div>
        <div className={styles.greenBox}>
          <form onSubmit={handleSubmit}>
            <div className={styles.intoBox}>
              <div className={styles.boxItem}>
                <InputText type="text" placeholder="Usuário" id="user" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>
              <div className={styles.boxItem}>
                <InputText type="email" placeholder="E-mail" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  ref={senhaRef}
                  placeholder="Senha"
                  id="senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setWarnig(false)
                  }}
                />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  type="password"
                  placeholder="Confirmar senha"
                  id="Confsenha"
                  value={confPassword}
                  onChange={(e) => {
                    setConfPassword(e.target.value)
                  }}
                  onBlur={handleComparassion}
                />
              </div>
              <div className={styles.warningText}>
                {warning ? 'Senhas não coincidem' : ''}
              </div>
              <div className={styles.boxItem}>
                <Button type="submit">Criar Conta</Button>
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
