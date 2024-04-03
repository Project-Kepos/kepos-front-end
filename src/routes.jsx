import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './layouts/auth-layout'
import { DefaultLayout } from './layouts/default-layout'
import { Greenhouse } from './pages/greenhouse'
import { Home } from './pages/home'
import { LandingPage } from './pages/landing-page'
import { SignIn } from './pages/sign-in'

export const router = createBrowserRouter([
  // Rotas comuns (header e footer)
  {
    path: '/dashboard',
    element: <DefaultLayout />,
    children: [
      {
        // Menu principal com a listagem de estufa
        path: '',
        element: <Home />,
      },
      {
        // Menu da estufa (Minha tela)
        path: 'greenhouse/:id',
        element: <Greenhouse />,
      },
    ],
  },

  // Rotas login (footer)
  // A header vai precisar colocar manualmente no login e cadastro
  // Já que a tela inicial é a única que não tem
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        // Primeira página de todas
        path: '/',
        element: <LandingPage />,
      },
      {
        // Login
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
