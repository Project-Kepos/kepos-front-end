import React from 'react'
import styles from './styles.module.css'
import plus from '@assets/plus.svg'
const AddDendro = () => {
  return (
    <div className={styles.dendroBox}>
        <div className={styles.dendroIcon}><img src={plus}/></div>
        <div className={styles.dendroText}><p>Adicionar </p>Estufa</div>
    </div>
  )
}

export default AddDendro