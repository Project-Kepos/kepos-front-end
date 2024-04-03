import { Header } from '@components/header'
import { useNavigate } from 'react-router-dom'

export function SignIn() {
  const navigate = useNavigate()

  async function handleSignIn(e) {
    e.preventDefault()

    localStorage.setItem('kepos-login', 'logou')
    navigate('/dashboard', { replace: true })
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
