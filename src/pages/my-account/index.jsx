import { authContext } from '@contexts/AuthContext.jsx'
import { api } from '@libs/axios'
import { useContext, useEffect, useState } from 'react'
import { FaUserTimes } from 'react-icons/fa'
import { MdAccountCircle, MdDone } from 'react-icons/md'
import { PiArrowLeft } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { AppError } from '@utils/AppError'
import { toast, ToastContainer } from 'react-toastify'
import styles from './styles.module.css'
import Cookies from 'js-cookie'


const MyAccount = () => {
  const { logout } = useContext(authContext)
  const navigate = useNavigate()
  function handleLogout() {
    logout()
    navigate('/', { replace: true })
  }

  const [userData, setUserData] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/usuario')
        setUsername(response.data.nome)
        setEmail(response.data.email)
        setPassword("")
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  async function handleChangeData(e) {
    e.preventDefault()
    console.log(password)
      // mandando mudanças
      try {
        await api.put("/usuario", {
          nome: username,
          email:email,
          senha:password
        })
        toast.success('Cadastro atualizado')
      } catch (error) {
        const isAppError = error instanceof AppError
        const title = isAppError ? error.message : 'Erro no servidor.'
        const description = isAppError
          ? 'Verifique os dados e tente novamente.'
          : 'Tente novamente mais tarde.'
  
        toast.error(title)
      }

    }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconcard}>
          <MdAccountCircle size="4rem" className={styles.accountIcon} />
          <h1 className={styles.accountText}>Minha Conta</h1>
        </div>
        <Link to="/dashboard/" className={styles.btnVoltar}>
          <PiArrowLeft size={40} />{' '}
          <div className={styles.textFormatation}>Voltar</div>
        </Link>
        <form autoComplete={false} onSubmit={(e) => handleChangeData(e)}>
          <div>
            <label htmlFor="username">Nome</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className={styles.button}></div>
        </form>
      </div>
      <div className={styles.operations}>
        <Link>
          <div className={styles.oneOperation} onClick={handleLogout}>
            <FaUserTimes size={46} />
            Sair
          </div>
        </Link>
        <Link  >
        <div className={styles.oneOperation}  onClick={handleChangeData}>
          <MdDone size={46} />
          Salvar
        </div>
        </Link>
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
        theme={Cookies.get('toggle')==='true'? "dark":"light"}
      />
    </div>
  )
}

export default MyAccount
