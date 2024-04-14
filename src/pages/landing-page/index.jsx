import Header from '../../components/header'
import RegisterLoginBox from '../../components/register-login-box'

const LandingPage = () => {
  return (
    <main>
      <Header landing={true} />
      <RegisterLoginBox />
    </main>
  )
}

export default LandingPage
