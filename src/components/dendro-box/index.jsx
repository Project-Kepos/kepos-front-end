import React from 'react'
import styles from './styles.module.css'
import dendro from '@assets/dendro.svg'
import { HiOutlineHome } from 'react-icons/hi';
const DendroBox = ({dendroName}) => {
  return (
    <div className={styles.dendroBox}>
        <div className={styles.dendroIcon}><HiOutlineHome size={40} /></div>
        <div className={styles.dendroText}>{dendroName}</div>
    </div>
  )
}

export default DendroBox