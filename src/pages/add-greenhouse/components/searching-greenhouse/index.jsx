import podcastsFull from '@assets/podcasts/podcasts-full.svg'
import podcastsInitial from '@assets/podcasts/podcasts-initial.svg'
import podcastsMiddle from '@assets/podcasts/podcasts-middle.svg'
import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

const SearchingGreenhouse = ({idDendro}) => {
  const [loadingStep, setLoadingStep] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const stepChangeInterval = setInterval(() => {
      if (loadingStep < 3) setLoadingStep((state) => state + 1)
      else setLoadingStep(0)
    }, 300)

    return () => {
      clearInterval(stepChangeInterval)
    }
  }, [loadingStep])

  const currentSvg =
    loadingStep === 0
      ? podcastsInitial
      : loadingStep === 1
        ? podcastsMiddle
        : podcastsFull

  return (
    <section className={styles.container}>
      <header className={styles.heading}>
        <button onClick={() => navigate('/dashboard')}>
          <MdClose size={48} />
          Cancelar
        </button>
      </header>

      <div className={styles.iconContainer}>
        <img src={currentSvg} alt="" />
      </div>

      <div className={styles.content}>
        <h1>Buscando Estufa</h1>
        <p>{idDendro}</p>
      </div>
    </section>
  )
}

export default SearchingGreenhouse
