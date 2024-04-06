import logoHorizontal from '@assets/logo-horizontal.svg'
import { PiUserCircle } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

export function Header({ authenticated = false }) {
  if (!authenticated) {
    return (
      <header className={styles.header} style={{ borderBottom: 0 }}>
        <img src={logoHorizontal} alt="Logo da plataforma Kêpos" />
      </header>
    )
  }

  return (
    <header className={styles.header}>
      <img src={logoHorizontal} alt="Logo da plataforma Kêpos" />
      <Link className={styles.profile} to="/dashboard/my-account" aria-label="Perfil do usuário">
        <PiUserCircle size="4rem" />
      </Link>
    </header>
  )
}
