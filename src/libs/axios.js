import { AppError } from '@utils/AppError'
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://lhvr2tm7-8081.brs.devtunnels.ms/api/v1',
})

api.registerInterceptTokenManager = (signOut) => {
  api.interceptors.response.use(
    (response) => response, // Nenhum erro na resposta, nada a ser feito,
    async (requestError) => {
      // Verificando se é um erro 403 (Unhautorized). Possível problema com token, deslogar usuário
      if (
        requestError.response?.status === 403 ||
        requestError.response?.data?.message ===
          'Usuário não encontrado no sistema'
      ) {
        signOut()
        return Promise.reject(requestError)
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(new AppError(requestError.response.data.message))
      } else {
        return Promise.reject(requestError)
      }
    },
  )
}
