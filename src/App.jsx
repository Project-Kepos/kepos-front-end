import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { queryClient } from './libs/react-query'
import { router } from './routes'
import { AuthContextProvider } from './contexts/AuthContext';
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
      <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
