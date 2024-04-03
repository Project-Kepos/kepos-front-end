import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <main>
      <h1>Landing page</h1>
      <p>Faça Login</p>
      <Link to="/sign-in">Ir para login</Link>
    </main>
  )
}
