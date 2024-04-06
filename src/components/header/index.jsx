import logoHorizontal from '@assets/logo-horizontal.svg'
import logoVertical from '@assets/logo-vertical.svg'
import { PiUserCircle } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

export function Header({ authenticated = false , landing}) {
  if (!authenticated && !landing==true) {
    return (
      <header className={styles.header} style={{ borderBottom: 0 }}>
        <Link to={"/"}><img src={logoHorizontal} alt="Logo da plataforma Kêpos" /></Link>
      </header>
    )
  }
  if (!authenticated && landing==true) {
    return (
      <header className={styles.headerLanding} style={{ borderBottom: 0 }}>
        <Link to={"/"}><img src={logoVertical} alt="Logo da plataforma Kêpos" /></Link>
      </header>
    )
  }

  return (
    <header className={styles.header}>
      <img src={logoHorizontal} alt="Logo da plataforma Kêpos" />
      <Link className={styles.profile} to="/" aria-label="Perfil do usuário">
        <PiUserCircle size="4rem" />
      </Link>
    </header>
  )
}
