import 'react-toggle/style.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import Toggle from 'react-toggle'

import styles from './styles.module.css'

const AccessibilityBar = () => {
  const [colorAccessibility, setColorAccessibility] = useState(false)

  useEffect(() => {
    const storedValue = Cookies.get('toggle')
    if (storedValue === 'true') {
      setColorAccessibility(true)
      document.documentElement.classList.add('colorAccessibility')
    } else {
      setColorAccessibility(false)
      document.documentElement.classList.remove('colorAccessibility')
    }
  }, [])
  const increaseFontSize = () => {
    const currentFontSize = parseFloat(
      window.getComputedStyle(document.documentElement).fontSize,
    )
    document.documentElement.style.fontSize = `${currentFontSize + 2}px`
  }

  const decreaseFontSize = () => {
    const currentFontSize = parseFloat(
      window.getComputedStyle(document.documentElement).fontSize,
    )
    document.documentElement.style.fontSize = `${currentFontSize - 2}px`
  }

  const handleChangeColor = () => {
    const newColorAccessibility = !colorAccessibility
    setColorAccessibility(newColorAccessibility)
    Cookies.set('toggle', newColorAccessibility)
    if (newColorAccessibility) {
      document.documentElement.classList.add('colorAccessibility')
    } else {
      document.documentElement.classList.remove('colorAccessibility')
    }
  }

  return (
    <div className={styles.accessibilityBox}>
      <Link className={styles.sobreacessibilidade} to="acessibilidade">
        Sobre acessibilidade
      </Link>

      <div className={styles.contrast}>
        
      <Toggle
          className={styles.customToogle}
          checked={colorAccessibility}
          onChange={handleChangeColor}
        />
        <div className={styles.contrastText}>Alto contraste</div>
       
        <a className={styles.changeSizeText} onClick={decreaseFontSize}>
          A-
        </a>
        <a className={styles.changeSizeText} onClick={increaseFontSize}>
          A+
        </a>
        

      </div>
    </div>
  )
}

export default AccessibilityBar
