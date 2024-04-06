import { Header } from '@components/header'
import { useNavigate } from 'react-router-dom'
import  SignInBox from "@components/sign-in-box"
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
      <SignInBox/>
     
    </main>
  )
}
