import { Header } from '../../components/header'
import RegisterLoginBox from '../../components/register-login-box'
export function LandingPage() {
  return (
    <main>
      <Header landing={true} />
      <RegisterLoginBox />
    </main>
  )
}
