import React from 'react'

import styles from './styles.module.css'

const InputText = (props) => {
  return (
    <div>
      <input {...props} className={styles.input} />
    </div>
  )
}

export default InputText
