import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function AuthLayout() {
  const navigate = useNavigate()

  // Redirecionando para o dashboard se estiver logado e tentar acessar
  // rota de autenticação
  useEffect(() => {
    if (localStorage.getItem('kepos-login')) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate])

  return (
    <>
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}
