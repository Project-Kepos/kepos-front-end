import { MdOutlineWbSunny } from 'react-icons/md'
import { PiArrowLeft, PiDrop, PiPlant } from 'react-icons/pi'
import { Link, useLoaderData } from 'react-router-dom'

import styles from './styles.module.css'

const weatherMap = {
  sunny: 'Ensolarado',
}

export function Greenhouse() {
  const data = useLoaderData()

  return (
    <main className={styles.container}>
      <div className={styles.heading}>
        <h1>{data.name}</h1>
        <Link to="/dashboard">
          <PiArrowLeft size={48} />
          Voltar
        </Link>
      </div>

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
          <div>
            <MdOutlineWbSunny size={96} />
            <strong>{weatherMap[data.weather]}</strong>
          </div>
        </div>
      </section>

      <section>
        {data.modules.map((module) => (
          <div key={module.id}>
            <div>
              <PiPlant />
            </div>
            <div>
              <h3>{module.name}</h3>
              <p>
                <PiDrop />
                {module.humidity}g/m³
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
