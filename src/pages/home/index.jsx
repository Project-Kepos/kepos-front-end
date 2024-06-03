import { useEffect, useState } from 'react'
import { MdAutorenew, MdClose } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

import AddDendro from '../../components/add-dendro-box'
import DendroBox from '../../components/dendro-box'
import { api } from '../../libs/axios'
import styles from './styles.module.css'

const Home = () => {
  const [userDendros, setUserDendros] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDendros() {
      try {
        const { data } = await api.get('/dendro/usuario')
        setUserDendros(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDendros()
  }, [])

  function handleLogout() {
    localStorage.clear('kepos-login')
    navigate('/', { replace: true })
  }

  return (
    <main>
      <h2 className={styles.textMenu}>Estufas pareadas</h2>
      <div className={styles.menuContainer}>
        {userDendros.map((dendro) => (
          <DendroBox key={dendro.id} dendroName={dendro.name} id={dendro.id} />
        ))}
        <AddDendro />
      </div>
      <div className={styles.operations}>
        <Link>
          <div className={styles.oneOperation}>
            <MdAutorenew size={46} />
            Atualizar
          </div>
        </Link>
        <button className={styles.oneOperation} onClick={handleLogout}>
          <MdClose size={46} />
          Desconectar
        </button>
      </div>
    </main>
  )
}

export default Home
