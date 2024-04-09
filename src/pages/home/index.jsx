import { Link } from 'react-router-dom'
import DendroBox from '../../components/dendro-box'
import AddDendro from '../../components/add-dendro-box'
import styles from './styles.module.css'
export function Home() {
  return (
    <main>
      <h2 className={styles.textMenu}>Menu com as estufas</h2>
      <div className={styles.menuContainer}>
        <Link to="/dashboard/greenhouse/1"><DendroBox dendroName="Déndro 01"/></Link>
        <DendroBox dendroName="Déndro 02"/>
        <AddDendro/>
      </div>
    </main>
  )
}
