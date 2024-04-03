import { Link } from 'react-router-dom'

export function Home() {
  return (
    <main>
      <h1>Menu com as estufas</h1>
      <Link to="/dashboard/greenhouse/1">Dendro 1</Link>
    </main>
  )
}
