import React, { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import styles from './styles.module.css';
import Cookies from 'js-cookie';

const AccessibilityBar = () => {
  const [colorAccessibility, setColorAccessibility] = useState(false);

  useEffect(() => {
    const storedValue = Cookies.get('toggle');
    if (storedValue === 'true') {
      setColorAccessibility(true);
      document.documentElement.classList.add('colorAccessibility');
    } else {
      setColorAccessibility(false);
      document.documentElement.classList.remove('colorAccessibility');
    }
  }, []);

  const handleChangeColor = () => {
    const newColorAccessibility = !colorAccessibility;
    setColorAccessibility(newColorAccessibility);
    Cookies.set('toggle', newColorAccessibility); 
    if (newColorAccessibility) {
      document.documentElement.classList.add('colorAccessibility');
    } else {
      document.documentElement.classList.remove('colorAccessibility');
    }
  };

  return (
    <div className={styles.accessibilityBox}>
      <span className={styles.contrastText}>Alto contraste</span>
      <div className={styles.contrast}>
        <Toggle
          className='customToggle'
          checked={colorAccessibility}
          onChange={handleChangeColor}
        />
      </div>
    </div>
  );
};

export default AccessibilityBar;
