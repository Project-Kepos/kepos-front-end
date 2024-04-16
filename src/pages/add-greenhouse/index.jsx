import { useState } from 'react'

import GreenhouseFound from './components/greenhouse-found'
import GreenhouseNotFound from './components/greenhouse-not-found'
import NewGreenhouse from './components/new-greenhouse'
import SearchingGreenhouse from './components/searching-greenhouse'
import styles from './styles.module.css'

const AddGreenhouse = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [greenhouseWasFound, setGreenhouseWasFound] = useState(null)
  const [errorWhileSearching, setErrorWhileSearching] = useState(null)

  function handleSearchGreenhouse(e) {
    e.preventDefault()

    setIsSubmitting(true)

    new Promise((resolve, reject) => {
      const random = Math.round(Math.random() * 10) % 2 === 0
      setTimeout(random ? resolve : reject, 2000)
    })
      .then(() => {
        setIsSubmitting(false)
        setGreenhouseWasFound(true)
      })
      .catch(() => {
        setIsSubmitting(false)
        setErrorWhileSearching(true)
      })
  }

  return (
    <div className={styles.container}>
      {isSubmitting ? (
        <SearchingGreenhouse />
      ) : greenhouseWasFound ? (
        <GreenhouseFound />
      ) : errorWhileSearching ? (
        <GreenhouseNotFound />
      ) : (
        <NewGreenhouse onSearchGreenhouse={handleSearchGreenhouse} />
      )}
    </div>
  )
}

export default AddGreenhouse
