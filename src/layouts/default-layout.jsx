import Header from '@components/header'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import AccessibilityBar from '../components/accessibility-bar'
import Footer from '../components/footer'

const DefaultLayout = () => {
  const navigate = useNavigate()

  // Redirecionando para o início se não estiver logado e tentar acessar
  // rota que exige autenticação
  useEffect(() => {
    if (localStorage.getItem('kepos-login') === null) {
      navigate('/sign-in', { replace: true })
    }
  }, [navigate])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <AccessibilityBar />
      <Header authenticated />

      <div
        style={{
          flex: 1,
        }}
      >
        <Outlet />
      </div>
      <Footer authenticated />
    </div>
  )
}

export default DefaultLayout
