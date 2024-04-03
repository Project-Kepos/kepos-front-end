import logoHorizontal from '@assets/logo-horizontal.svg'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoHorizontal} alt="Logo da plataforma Kêpos" />
      <Link className={styles.profile} to="/" aria-label="Perfil do usuário">
        <MdOutlineAccountCircle size="4rem" />
      </Link>
    </header>
  )
}
