import { MdPodcasts } from 'react-icons/md'
import { PiArrowLeft } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const NewGreenhouse = ({ onSearchGreenhouse, idDendro, setIdDendro }) => {
  return (
    <form className={styles.container} onSubmit={onSearchGreenhouse}>
      <div className={styles.title}>Adicionar estufa</div>
      <Link to="/dashboard/" className={styles.btnVoltar}>
        <PiArrowLeft size={40} />{' '}
        <div className={styles.textFormatation}>Voltar</div>
      </Link>
      <div className={styles.centerText}>
        <div className={styles.textFormatation}>Insira o código de</div>
        <p>12 digitos da sua estufa</p>
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
        <button className={styles.btnBuscar}>
          <MdPodcasts size={48} className={styles.icon} />
          <div className={styles.textBtn}>Buscar</div>
        </button>
      </div>
    </form>
  )
}

export default NewGreenhouse
