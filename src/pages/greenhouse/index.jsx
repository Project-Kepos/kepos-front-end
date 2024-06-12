import 'react-responsive-modal/styles.css'

import { api } from '@libs/axios'
import { AppError } from '@utils/AppError'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdArrowBack, MdAutorenew, MdClose } from 'react-icons/md'
import { PiPottedPlant } from 'react-icons/pi'
import { TbDroplets } from 'react-icons/tb'
import { WiDaySunnyOvercast } from 'react-icons/wi'
import { Modal } from 'react-responsive-modal'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer, useToast } from 'react-toastify'

import styles from './styles.module.css'

const weatherMap = {
  sunny: 'Ensolarado',
}

const Greenhouse = () => {
  const navigate = useNavigate()
  const [greenHouseData, setGreenHouseData] = useState({})
  const params = useParams()

  const [campoNome, setCampoNome] = useState('')
  const [campoNomeModulo, setCampoNomeModulo] = useState('')
  const [campoDescModulo, setcampoDescModulo] = useState('')

  const [openUpdate, setOpenUpdate] = useState(false)
  const [openDisconnect, setOpenDisconnect] = useState(false)
  const [openNewModule, setNewModule] = useState(false)

  const onOpenUpdateNameModal = () => setOpenUpdate(true)
  const onCloseUpdateNameModal = () => setOpenUpdate(false)

  const onOpenDisconnectModal = () => setOpenDisconnect(true)
  const onCloseDisconnectModal = () => setOpenDisconnect(false)

  const onOpenNewModuleModal = () => setNewModule(true)
  const onCloseNewModuleModal = () => setNewModule(false)

  async function fetchGreenHouseData() {
    try {
      const greenhouse = await api.get('/dendro/' + params.id)
      const modules = await api.get('/modulo?dendro_id=' + params.id)
      setGreenHouseData({
        ...greenhouse.data,
        modules: [...modules.data],
      })
      setCampoNome(greenhouse.data.name)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGreenHouseData()
  }, [params.id])

  async function handleChangeData(e) {
    e.preventDefault()
    try {
      await api.patch('/dendro/' + params.id, {
        name: campoNome,
      })
      setGreenHouseData({
        ...greenHouseData,
        name: campoNome,
      })
      onCloseUpdateNameModal()
      toast.success('nome atualizado')
    } catch (error) {
      console.log(error)
      const isAppError = error instanceof AppError
      const title = isAppError ? error.message : 'Erro no servidor.'
      const description = isAppError
        ? 'Verifique os dados e tente novamente.'
        : 'Tente novamente mais tarde.'

      toast.error(title)
    }
  }

  async function handleDisconnect(e) {
    e.preventDefault()
    try {
      await api.patch('/dendro/usuario/desassociar', {
        id: params.id,
      })
      console.error(e)
      navigate('/dashboard', {
        replace: true,
        state: {
          useToast: true,
          toastMessage: 'Estufa desconectada com sucesso',
        },
      })
    } catch (error) {
      console.log(error)
      const isAppError = error instanceof AppError
      const title = isAppError ? error.message : 'Erro no servidor.'
      const description = isAppError
        ? 'Verifique os dados e tente novamente.'
        : 'Tente novamente mais tarde.'

      toast.error(title)
    }
  }

  async function handleInsertModule(e) {
    e.preventDefault()
    try {
      const response = await api.post('/modulo', {
        name: campoNomeModulo,
        desc: campoDescModulo,
        idDendro: params.id,
      })
      setGreenHouseData({
        ...greenHouseData,
        modules: [...greenHouseData.modules, response.data],
      })
      toast.success('Modulo cadastrado')
      onCloseNewModuleModal()
      setCampoNomeModulo('')
      setcampoDescModulo('')
    } catch (error) {
      console.log(error)
      const isAppError = error instanceof AppError
      const title = isAppError ? error.message : 'Erro no servidor.'
      const description = isAppError
        ? 'Verifique os dados e tente novamente.'
        : 'Tente novamente mais tarde.'

      toast.error(title)
    }
  }

  return (
    <main className={styles.container}>
      <header className={styles.heading}>
        <h1>{greenHouseData.name}</h1>
        <Link to="/dashboard">
          <MdArrowBack size={48} />
          Voltar
        </Link>
      </header>

      <section className={styles.info}>
        <div className={styles.infoCard}>
          <h2>Temperatura</h2>

          <div>
            <strong>{Number(greenHouseData.temperature).toFixed()}</strong>
            <span>c°</span>
          </div>
        </div>

        <div className={styles.infoCard}>
          <h2>Umidade</h2>

          <div>
            <strong> {Number(greenHouseData.humidity).toFixed()}</strong>
            <span>%</span>
          </div>
        </div>

        <div className={`${styles.infoCard} ${styles.weather}`}>
          <h2>Clima</h2>
          <WiDaySunnyOvercast size={128} />
          <strong>{weatherMap[0]}</strong>
        </div>
      </section>

      <section>
        <div className={styles.modulesHeading}>
          <h2>Módulos</h2>
          <button>
            <MdAutorenew size={48} />
            Atualizar
          </button>
        </div>

        <div className={styles.modulesGrid}>
          {greenHouseData.modules?.map((module) => (
            <Link
              to={`/dashboard/slot/${module.id}`}
              key={module.id}
              className={styles.moduleItem}
            >
              <div className={styles.moduleItemIcon}>
                <PiPottedPlant size={64} />
              </div>
              <div className={styles.moduleItemContent}>
                <h3>{module.name}</h3>
                <p>
                  <TbDroplets size={48} />
                  {module.humidity}%
                </p>
              </div>
            </Link>
          ))}

          {greenHouseData.modules?.length < 4 &&
            Array.from(Array(4 - greenHouseData.modules.length).keys()).map(
              (_, index) => (
                <button
                  to="/dashboard"
                  key={index}
                  className={styles.moduleEmptyItem}
                  onClick={onOpenNewModuleModal}
                >
                  <h3>Slot Vazio</h3>
                </button>
              ),
            )}
        </div>
      </section>

      <section className={styles.configurations}>
        <h2>Configurações da Estufa</h2>

        <div>
          <button onClick={onOpenUpdateNameModal}>
            <FaRegEdit size={48} />
            Alterar nome da estufa
          </button>
          <button onClick={fetchGreenHouseData}>
            <MdAutorenew size={48} />
            Atualizar
          </button>
          <button>
            <MdClose size={48} onClick={onOpenDisconnectModal} />
            Desconectar Estufa
          </button>
        </div>
        <Modal
          open={openUpdate}
          onClose={onCloseUpdateNameModal}
          center
          classNames={{
            modal: styles.modalContainer,
          }}
        >
          <h2>Digite um novo nome ao dendro</h2>
          <form autoComplete={false} onSubmit={(e) => handleChangeData(e)}>
            <p>
              <input
                type="text"
                id="username"
                value={campoNome}
                onChange={(e) => {
                  setCampoNome(e.target.value)
                }}
              />
            </p>
            <button>Atualizar</button>
          </form>
        </Modal>

        <Modal
          open={openDisconnect}
          onClose={onCloseDisconnectModal}
          center
          classNames={{
            modal: styles.modalContainer,
          }}
        >
          <h2>Deseja realmente desconectar a estufa?</h2>
          <p className={styles.margin}>
            Caso haja arrependimento, será possível reconectar!
          </p>
          <button className={styles.cancelButton} onClick={handleDisconnect}>
            Confirmar
          </button>
          <button onClick={onCloseDisconnectModal}>Cancelar</button>
        </Modal>

        <Modal
          open={openNewModule}
          onClose={onCloseNewModuleModal}
          center
          classNames={{
            modal: styles.modalContainer,
          }}
        >
          <h2>Cadastro de Modulo</h2>
          <form autoComplete={false} onSubmit={(e) => handleInsertModule(e)}>
            <p>
              <input
                type="text"
                id="username"
                value={campoNomeModulo}
                placeholder="Nome do modulo"
                onChange={(e) => {
                  setCampoNomeModulo(e.target.value)
                }}
                required
              />
              <textarea
                type="text"
                id="username"
                placeholder="Descrição"
                value={campoDescModulo}
                className={styles.description}
                onChange={(e) => {
                  setcampoDescModulo(e.target.value)
                }}
                required
              />
            </p>
            <button>Cadastrar modulo</button>
          </form>
        </Modal>
      </section>
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
        theme={Cookies.get('toggle') === 'true' ? 'dark' : 'light'}
      />
    </main>
  )
}

export default Greenhouse
