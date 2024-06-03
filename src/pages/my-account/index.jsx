import { authContext } from '@contexts/AuthContext.jsx'
import { api } from '@libs/axios'
import { useContext, useEffect, useState } from 'react'
import { FaUserTimes } from 'react-icons/fa'
import { MdAccountCircle, MdDone } from 'react-icons/md'
import { PiArrowLeft } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

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
        setUserData(response)
        setUsername(response.data.nome)
        setEmail(response.data.email)
        setPassword(response.data.password)
        console.log(response)
      } catch (e) {
        const dados = {
          name: 'Fulano cinco',
          email: 'fulano@gmail.com',
          password: '12345678',
          id: '1',
        }
        setUserData(dados)
        setUsername(dados.name)
        setEmail(dados.email)
        setPassword(dados.password)
      }
    }
    fetchData()
  }, [])

  if (userData == null) {
    return <p className={styles.center}>Carregando</p>
  }

  async function handleChangeData(e) {
    e.preventDefault()

    // mandando mudanças
    try {
      await api.put('/users/1', {
        name: username,
        email,
        password,
      })
    } catch (e) {
      console.log(e)
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
        {/* <p className={styles.cardtext}>Nome atual: {userData.name}</p> */}
        <form onSubmit={(e) => handleChangeData(e)}>
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
          {/* <p className={styles.cardtext}>E-mail atual: {userData.email}</p> */}
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
          {/* <p className={styles.cardtext}>Senha: {data.users[0].password}</p> */}
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
        <Link>
          <div className={styles.oneOperation}>
            <MdDone size={46} />
            Salvar
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MyAccount
