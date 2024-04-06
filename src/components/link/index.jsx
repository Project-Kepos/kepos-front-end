import React from 'react'
import styles from './styles.module.css'
const Link = ({text,url: to}) => {
  return (
    <a className={styles.link}href={to}>{text}</a>
  )
}

export default Link