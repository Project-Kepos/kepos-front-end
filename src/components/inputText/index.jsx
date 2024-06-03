import { forwardRef } from 'react'

import styles from './styles.module.css'

const InputText = forwardRef((props, ref) => {
  return (
    <div>
      <input {...props} ref={ref} className={styles.input} />
    </div>
  )
})
InputText.displayName = 'input'

export default InputText
