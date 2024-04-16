import { createBrowserRouter } from 'react-router-dom'

import AuthLayout from './layouts/auth-layout'
import DefaultLayout from './layouts/default-layout'
import AddGreenhouse from './pages/add-greenhouse'
import Greenhouse from './pages/greenhouse'
import Home from './pages/home'
import LandingPage from './pages/landing-page'
import MyAccount from './pages/my-account'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import Slot from './pages/slot'
import Acessibilidade from './pages/acessibilidade'

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
      {
        // Menu busca da estufa
        path: 'greenhouse/:id',
        element: <Greenhouse />,
      },
      {
        // Dashboard Nova Estufa
        path: 'add-greenhouse',
        element: <AddGreenhouse />,
      },
      {
        // Dashboard Minha Conta
        path: 'my-account',
        element: <MyAccount />,
      },
      {
        // Dashboard Minha Conta
        path: 'slot',
        element: <Slot />,
      }, 
      {
        // Acessibilidade
        path: 'acessibilidade',
        element: <Acessibilidade />,
      },
      
    ],
  },

  // Rotas login
  // A header vai precisar colocar manualmente nas telas de login e cadastro <Header />
  // O footer já tem no layout
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
      {
        // Cadastro
        path: '/sign-up',
        element: <SignUp />,
      },
      
    ],
  },
])
