import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const CustomLink = ({ children, ...props }) => {
  return (
    <Link className={styles.link} {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
