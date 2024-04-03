import { Header } from '@components/header'
import { api } from '@libs/axios'
import { useNavigate } from 'react-router-dom'

export function SignIn() {
  const navigate = useNavigate()

  async function handleSignIn(e) {
    e.preventDefault()

    const email = e.target.elements.email.value
    const password = e.target.elements.senha.value

    const response = await api.get(`/users?email=${email}&password=${password}`)

    if (response.data.length > 0 && email && password) {
      localStorage.setItem('kepos-login', email)
      navigate('/dashboard', { replace: true })
    } else {
      alert(
        'Usuário não existe, utilizar:\nE-mail: fulano@gmail.com\nSenha: 12345678',
      )
    }
  }

  // Html daqui pra baixo
  return (
    <main>
      <Header />
      <form onSubmit={(e) => handleSignIn(e)}>
        <input type="email" id="email" />
        <input type="senha" id="senha" />
        <button>Logar</button>
      </form>
    </main>
  )
}
