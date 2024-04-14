import { HiOutlineHome } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'
const DendroBox = ({ dendroName }) => {
  return (
    <Link className={styles.link} to="/dashboard/greenhouse/1">
      <div className={styles.dendroBox}>
        <div className={styles.dendroIcon}>
          <HiOutlineHome size={40} />
        </div>
        <div className={styles.dendroText}>{dendroName}</div>
      </div>
    </Link>
  )
}

export default DendroBox
