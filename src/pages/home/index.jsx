import { useEffect, useState} from 'react'
import { MdAutorenew, MdClose } from 'react-icons/md'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import AddDendro from '../../components/add-dendro-box'
import DendroBox from '../../components/dendro-box'
import { api } from '../../libs/axios'
import styles from './styles.module.css'
import { toast, ToastContainer } from 'react-toastify'
import Cookies from 'js-cookie'

const Home = () => {
  const [userDendros, setUserDendros] = useState([])
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    if (location.state?.useToast) {
      toast.success(location.state.toastMessage);
    }
    async function fetchDendros() {
      try {
        const { data } = await api.get('/dendro/usuario')
        setUserDendros(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchDendros()
  }, [location])

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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={Cookies.get('toggle')==='true'? "dark":"light"}
      />
      
    </main>
  )
}

export default Home
