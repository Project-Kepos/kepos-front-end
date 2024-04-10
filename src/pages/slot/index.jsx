import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { MdArrowBack, MdAutorenew, MdClose } from 'react-icons/md'
import { FaLeaf } from 'react-icons/fa';

const Slot = () => {
  return (
    <div className={styles.container}>
        <Link to="/dashboard" className={styles.back}>
          <MdArrowBack size={48} />
          <div className={styles.backText}>Voltar</div>
        </Link>
        <div><FaLeaf size={75}/></div>
    </div>
  )
}

export default Slot