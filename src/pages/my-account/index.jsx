import { authContext } from '@contexts/AuthContext.jsx'
import { api } from '@libs/axios'
import { AppError } from '@utils/AppError'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { FaUserTimes } from 'react-icons/fa'
import { MdAccountCircle, MdDone, MdEdit } from 'react-icons/md'
import { PiArrowLeft } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import styles from './styles.module.css'

const MyAccount = () => {
  const [editMode, setEditMode] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { logout } = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get('/usuario')
        setUsername(response.data.nome)
        setEmail(response.data.email)
        setPassword('')
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }
    fetchUserData()
  }, [])

  async function handleUpdateUserData(e) {
    e.preventDefault()

    try {
      await api.put('/usuario', {
        nome: username,
        email,
        senha: password || null,
      })

      toast.success('Cadastro atualizado')
      setEditMode(false)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError ? error.message : 'Erro no servidor.'
      toast.error(title)
    }
  }

  function handleLogout() {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to="/dashboard/" className={styles.btnVoltar}>
          <PiArrowLeft size={40} />{' '}
          <div className={styles.textFormatation}>Voltar</div>
        </Link>

        <main className={styles.mainContent}>
          <div className={styles.iconcard}>
            <MdAccountCircle size="4rem" />
            <h1 className={styles.accountText}>Minha Conta</h1>
          </div>

          <form autoComplete={false} onSubmit={(e) => handleUpdateUserData(e)}>
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
                disabled={!editMode}
                style={
                  !editMode
                    ? {
                        border: 0,
                      }
                    : null
                }
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
                disabled={!editMode}
                style={
                  !editMode
                    ? {
                        border: 0,
                      }
                    : null
                }
              />
            </div>

            {editMode && (
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
            )}

            <div className={styles.operations}>
              <button
                className={styles.oneOperation}
                type="button"
                onClick={handleLogout}
              >
                <FaUserTimes size={46} />
                Sair
              </button>

              {editMode && (
                <button type="submit" className={styles.oneOperation}>
                  <MdDone size={46} />
                  Salvar
                </button>
              )}

              {!editMode && (
                <button
                  type="button"
                  className={styles.oneOperation}
                  onClick={() => setEditMode(true)}
                >
                  <MdEdit size={46} />
                  Editar
                </button>
              )}
            </div>
          </form>
        </main>
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
        theme={Cookies.get('toggle') === 'true' ? 'dark' : 'light'}
      />
    </div>
  )
}

export default MyAccount
