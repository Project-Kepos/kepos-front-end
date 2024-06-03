import { useState } from 'react'
import { api } from '@libs/axios.js'
import GreenhouseAlreadyRegistered from './components/greenhouse-already-registered'
import GreenhouseFound from './components/greenhouse-found'
import GreenhouseNotFound from './components/greenhouse-not-found'
import NewGreenhouse from './components/new-greenhouse'
import SearchingGreenhouse from './components/searching-greenhouse'
import styles from './styles.module.css'
import { AppError } from '@utils/AppError'

const AddGreenhouse = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [greenhouseWasFound, setGreenhouseWasFound] = useState(null)
  const [greenhouseAlreadyRegistered, setGreenhouseAlreadyRegistered] = useState(null)
  const [errorWhileSearching, setErrorWhileSearching] = useState(null)
  const [idDendro,setIdDendro]= useState('')
   function handleSearchGreenhouse(e) {
    e.preventDefault()

    setIsSubmitting(true)
     setTimeout(async () => {
      try {
        const response = await api.patch('/dendro/usuario', {
          id:idDendro
        })
        
        console.log(response.data)
        setIsSubmitting(false)
          setGreenhouseWasFound(true)
      } catch (error) {
        const isAppError = error instanceof AppError
        console.error(error)
        if(isAppError){        
        setGreenhouseAlreadyRegistered(true)
        }
        else{
        setErrorWhileSearching(true)
        }
        setIsSubmitting(false)
      }
    }, 2000);
    

    /*
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
      })*/
  }

  return (
    <div className={styles.container}>
      {isSubmitting ? (
        <SearchingGreenhouse />
      ) : greenhouseWasFound ? (
        <GreenhouseFound />
      ) : errorWhileSearching ? (
        <GreenhouseNotFound />
      ) : greenhouseAlreadyRegistered ? (
        <GreenhouseAlreadyRegistered/>
      ):(
        <NewGreenhouse onSearchGreenhouse={handleSearchGreenhouse} idDendro={idDendro} setIdDendro={setIdDendro}/>
      )}
    </div>
  )
}

export default AddGreenhouse
