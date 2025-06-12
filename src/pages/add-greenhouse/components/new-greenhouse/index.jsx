import { MdPodcasts } from 'react-icons/md'
import { PiArrowLeft } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'

import styles from './styles.module.css'

const NewGreenhouse = ({ onSearchGreenhouse, idDendro, setIdDendro }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (idDendro.length < 12) {
      toast.error('O código deve conter 12 caracteres!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        pauseOnFocusLoss: true,
        theme: Cookies.get('toggle') === 'true' ? 'dark' : 'light',
      })
      return
    }

    onSearchGreenhouse(e)
  }

  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.title}>Adicionar estufa</div>
        <Link to="/dashboard/" className={styles.btnVoltar}>
          <PiArrowLeft size={40} />
          <div className={styles.textFormatation}>Voltar</div>
        </Link>
        <div className={styles.centerText}>
          <div className={styles.textFormatation}>Insira o código de</div>
          <p>12 dígitos da sua estufa</p>
          <input
            type="text"
            className={styles.inputCode}
            placeholder="ABCD-EFGH-IJKL-LMNP"
            maxLength={12}
            value={idDendro}
            onChange={(e) => setIdDendro(e.target.value)}
          />
        </div>

        <div className={styles.controlBtn}>
          <button className={styles.btnBuscar} type="submit">
            <MdPodcasts size={48} className={styles.icon} />
            <div className={styles.textBtn}>Buscar</div>
          </button>
        </div>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={Cookies.get('toggle') === 'true' ? 'dark' : 'light'}
      />
    </div>
  )
}

export default NewGreenhouse
