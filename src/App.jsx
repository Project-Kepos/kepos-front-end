import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'
import { queryClient } from './libs/react-query'
import { router } from './routes'
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
