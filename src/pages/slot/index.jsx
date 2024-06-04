import { api } from '@libs/axios'
import { useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import { PiPottedPlant } from 'react-icons/pi'
import { TbDroplets } from 'react-icons/tb'
import { Link, useParams } from 'react-router-dom'

import styles from './styles.module.css'

const Slot = () => {
  const [moduleData, setModuleData] = useState({})
  const params = useParams()

  useEffect(() => {
    async function fetchModuleData() {
      try {
        const { data } = await api.get('/modulo/' + params.id)
        setModuleData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchModuleData()
  }, [params.id])

  return (
    <>
      <div className={styles.container}>
        <Link
          to={`/dashboard/greenhouse/${moduleData.idDendro}`}
          className={styles.back}
        >
          <MdArrowBack size={48} />
          <div className={styles.backText}>Voltar</div>
        </Link>
        <div className={styles.plant}>
          <PiPottedPlant size={250} />
        </div>
        <div className={styles.firstInfos}>
          <div className={styles.plantName}>{moduleData.name}</div>
          <div className={styles.plantHumidityIcon}>
            <TbDroplets />
          </div>
          <div className={styles.plantHumidity}>{moduleData.humidity}%</div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>Descrição</div>
        <div>{moduleData.desc}</div>
      </div>
    </>
  )
}

export default Slot
