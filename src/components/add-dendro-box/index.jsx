import React from 'react'
import styles from './styles.module.css'
import plus from '@assets/plus.svg'
import  {RiAddLine}  from 'react-icons/ri';
import { Link } from 'react-router-dom';

const AddDendro = () => {
  return (
    <Link to='./add-greenhouse' className={styles.profile}>
    <div className={styles.dendroBox}>
        <div className={styles.dendroIcon}><RiAddLine size={40}/></div>
        <div className={styles.dendroText}><p>Adicionar </p>Estufa</div>
    </div>
    </Link>
  )
}

export default AddDendro