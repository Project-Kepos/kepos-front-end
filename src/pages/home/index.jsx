import { Link } from 'react-router-dom'
import DendroBox from '../../components/dendro-box'
import styles from './styles.module.css'
export function Home() {
  return (
    <main>
      <div className={styles.textMenu}>Menu com as estufas</div>
      <div className={styles.menuContainer}>
        <Link to="/dashboard/greenhouse/1"><DendroBox dendroName="Déndro 01"/></Link>
        <DendroBox dendroName="Déndro 02"/>
      </div>
    </main>
  )
}
