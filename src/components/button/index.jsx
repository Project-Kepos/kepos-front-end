import React from 'react'
import styles from './styles.module.css'

const Button = ({ text, link }) => {
  if (link == null) {
    return (
      <button className={styles.button}>{text}</button>
    )
  }
  else{
    return (
      <a href={link}><button className={styles.button}>{text}</button></a>
    )
  }
}

export default Button