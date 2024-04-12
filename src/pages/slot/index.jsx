import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { MdArrowBack, MdAutorenew, MdClose } from 'react-icons/md'
import { PiPottedPlant } from 'react-icons/pi'
import { TbDroplets } from 'react-icons/tb'

const Slot = () => {
  return (
    <>
    <div className={styles.container}>
      <Link to="/dashboard" className={styles.back}>
        <MdArrowBack size={48} />
        <div className={styles.backText}>Voltar</div>
      </Link>
      <div className={styles.plant}><PiPottedPlant size={250} /></div>
      <div className={styles.firstInfos}>
        <div className={styles.plantName}>Salsa</div>
        <div className={styles.plantHumidityIcon}><TbDroplets /></div>
        <div className={styles.plantHumidity}>89g/m³</div>
      </div>      
    </div>
    <div className={styles.description}>
      <div className={styles.title}>Descrição</div>
        <div>Lorem ipsum dolor sit amet consectetur. Auctor ultrices molestie diam pellentesque ipsum pellentesque viverra arcu duis. Duis quam in gravida morbi adipiscing scelerisque cursus bibendum.</div>
    </div>
    </>
    
  )
}

export default Slot