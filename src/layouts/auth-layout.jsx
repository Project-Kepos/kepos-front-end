import Footer from '@components/footer'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import AccessibilityBar from '../components/accessibility-bar'

const AuthLayout = () => {
  const navigate = useNavigate()

  // Redirecionando para o dashboard se estiver logado e tentar acessar
  // rota de autenticação
  useEffect(() => {
    if (localStorage.getItem('kepos-login')) {
      navigate('/dashboard', { replace: true })
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
      <div
        style={{
          flex: 1,
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AuthLayout
