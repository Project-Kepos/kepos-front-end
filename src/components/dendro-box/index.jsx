import React from 'react'
import styles from './styles.module.css'
import dendro from '@assets/dendro.svg'
const DendroBox = ({dendroName}) => {
  return (
    <div className={styles.dendroBox}>
        <div className={styles.dendroIcon}><img src={dendro}/></div>
        <div className={styles.dendroText}>{dendroName}</div>
    </div>
  )
}

export default DendroBox