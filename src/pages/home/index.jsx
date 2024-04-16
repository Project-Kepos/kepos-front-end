import { MdAutorenew, MdClose } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

import AddDendro from '../../components/add-dendro-box'
import DendroBox from '../../components/dendro-box'
import styles from './styles.module.css'

const Home = () => {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.clear('kepos-login')
    navigate('/', { replace: true })
  }

  return (
    <main>
      <h2 className={styles.textMenu}>Estufas pareadas</h2>
      <div className={styles.menuContainer}>
        <DendroBox dendroName="Déndro 01" />
        <DendroBox dendroName="Déndro 02" />
        <DendroBox dendroName="Déndro 03" />
        <DendroBox dendroName="Déndro 03" />
        <DendroBox dendroName="Déndro 04" />
        <DendroBox dendroName="Déndro 05" />
        <AddDendro />
      </div>
      <div className={styles.operations}>
        <Link>
          <div className={styles.oneOperation}>
            <MdAutorenew size={46} />
            Atualizar
          </div>
        </Link>
        <button className={styles.oneOperation} onClick={handleLogout}>
          <MdClose size={46} />
          Desconectar
        </button>
      </div>
    </main>
  )
}

export default Home
