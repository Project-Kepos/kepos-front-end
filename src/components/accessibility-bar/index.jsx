import {React, useState} from 'react'
import "react-toggle/style.css"
import Toggle from 'react-toggle'


const AccessibilityBar = () => {
    const [colorAccessibility,setColorAccessibility] = useState(false)
    const handleChangeColor = () =>{
    
    if(colorAccessibility==true){
        document.documentElement.classList.remove('colorAccessibility');
    }
    else{      
    
        document.documentElement.classList.add('colorAccessibility');
    }
    setColorAccessibility(!colorAccessibility)
}
const handleSwitchChange = () =>{
    
    
    alert(colorAccessibility)
}

  return (
  <Toggle
    defaultChecked={colorAccessibility}
    onChange={handleChangeColor} />
  )
}

export default AccessibilityBar