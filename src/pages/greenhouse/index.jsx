import { FaRegEdit } from 'react-icons/fa'
import { MdArrowBack, MdAutorenew, MdClose } from 'react-icons/md'
import { PiPottedPlant } from 'react-icons/pi'
import { TbDroplets } from 'react-icons/tb'
import { WiDaySunnyOvercast } from 'react-icons/wi'
import { Link, useLoaderData } from 'react-router-dom'

import styles from './styles.module.css'

const weatherMap = {
  sunny: 'Ensolarado',
}

export function Greenhouse() {
  const data = useLoaderData()

  return (
    <main className={styles.container}>
      <header className={styles.heading}>
        <h1>{data.name}</h1>
        <Link to="/dashboard">
          <MdArrowBack size={48} />
          Voltar
        </Link>
      </header>

      <section className={styles.info}>
        <div className={styles.infoCard}>
          <h2>Temperatura</h2>

          <div>
            <strong>{data.temperature}</strong>
            <span>c°</span>
          </div>
        </div>

        <div className={styles.infoCard}>
          <h2>Umidade</h2>

          <div>
            <strong> {data.humidity}</strong>
            <span>g/m³</span>
          </div>
        </div>

        <div className={`${styles.infoCard} ${styles.weather}`}>
          <h2>Clima</h2>
          <WiDaySunnyOvercast size={128} />
          <strong>{weatherMap[data.weather]}</strong>
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
          {data.modules.map((module) => (
            <Link to="/" key={module.id} className={styles.moduleItem}>
              <div className={styles.moduleItemIcon}>
                <PiPottedPlant size={64} />
              </div>
              <div className={styles.moduleItemContent}>
                <h3>{module.name}</h3>
                <p>
                  <TbDroplets size={48} />
                  {module.humidity}g/m³
                </p>
              </div>
            </Link>
          ))}

          {data.modules.length < 4 &&
            Array.from(Array(4 - data.modules.length).keys()).map(
              (_, index) => (
                <Link to="/" key={index} className={styles.moduleEmptyItem}>
                  <h3>Slot Vazio</h3>
                </Link>
              ),
            )}
        </div>
      </section>

      <section className={styles.configurations}>
        <h2>Configurações da Estufa</h2>

        <div>
          <button>
            <FaRegEdit size={48} />
            Alterar nome da estufa
          </button>
          <button>
            <MdAutorenew size={48} />
            Atualizar
          </button>
          <button>
            <MdClose size={48} />
            Desconectar Estufa
          </button>
        </div>
      </section>
    </main>
  )
}
