import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const Button = ({ children, link }) => {
  if (link == null) {
    return <button className={styles.button}>{children}</button>
  } else {
    return (
      <Link to={link}>
        <button className={styles.button}>{children}</button>
      </Link>
    )
  }
}

export default Button
