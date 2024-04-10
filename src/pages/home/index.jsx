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
        <div className={styles.col}><Link to="/dashboard/greenhouse/1"><DendroBox dendroName="Déndro 01" /></Link></div>
        <div className={styles.col}><DendroBox dendroName="Déndro 02" /></div>
        <div className={styles.col}><DendroBox dendroName="Déndro 03" /></div>
        <div className={styles.col}><DendroBox dendroName="Déndro 03" /></div>
        <div className={styles.col}><DendroBox dendroName="Déndro 04" /></div>
        <div className={styles.col}><DendroBox dendroName="Déndro 05" /></div>
        <AddDendro/>
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
