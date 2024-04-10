import { Link } from 'react-router-dom'
import DendroBox from '../../components/dendro-box'
import AddDendro from '../../components/add-dendro-box'
import { MdAutorenew, MdClose } from 'react-icons/md'
import styles from './styles.module.css'
export function Home() {
  return (
    <main>
      <h2 className={styles.textMenu}>Menu com as estufas</h2>
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
        <div className={styles.oneOperation}>
          <MdClose size={46} />
          Desconectar
        </div>
      </div>
    </main>
  )
}
