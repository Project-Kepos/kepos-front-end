import styles from './styles.module.css'

const Footer = ({ authenticated = false }) => {
  return (
    <footer
      className={`${styles.footer} ${!authenticated && styles.unauthenticated}`}
    >
      
      
      <div style={!authenticated ? { justifyContent: 'center' } : null}>
        <strong>Kêpos - 2024</strong>
        <p>Todos os direitos reservados</p>
      </div>

      {authenticated && (
        <span className={styles.developers}>
          Desenvolvido por
          <br />
          Eloah Baracho / João Raposo
          <br />
          Carla Fernanda / Matheus Porto
          <br />
          Dayvid Dalton / Alberto Junior
        </span>
      )}
    </footer>
  )
}

export default Footer
