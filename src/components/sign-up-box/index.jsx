import 'react-toastify/dist/ReactToastify.css'

import { authContext } from '@contexts/AuthContext.jsx'
import { api } from '@libs/axios.js'
import { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import Button from '../button'
import CustomLink from '../custom-link'
import InputText from '../inputText'
import styles from './styles.module.css'

const SignUpbox = () => {
  const { saveToken } = useContext(authContext)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [warning, setWarnig] = useState(false)
  const senhaRef = useRef(null)
  const navigate = useNavigate()

  async function login() {
    try {
      const response = await api.post('/usuario/login', {
        email,
        senha: password,
      })
      saveToken(response.data.token)
      navigate('/dashboard', { replace: true })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('/usuario', {
        nome,
        email,
        senha: password,
      })
      console.log(response.data)
      login()
    } catch (error) {
      console.error(error)
      if (error.code === 'ERR_NETWORK') {
        toast.error('Tente novamente mais tarde')
      } else {
        toast.error(error.response.data)
      }
    }
  }

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
                <InputText
                  required
                  type="text"
                  placeholder="Usuário"
                  id="user"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  required
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.boxItem}>
                <InputText
                  required
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
                  required
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
  )
}

export default SignUpbox
