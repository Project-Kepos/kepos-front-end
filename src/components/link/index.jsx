import React from 'react'
import styles from './styles.module.css'
const Link = ({text,url}) => {
  return (
    <a className={styles.link}href={url}>{text}</a>
  )
}

export default Link