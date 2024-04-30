import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styles from './styles.module.css'
import { MdArrowBack, MdAutorenew, MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import AddGreenhouse from "../..";

const GreenhouseNotFound = () => {
  const [isRendered, setIsRendered] = useState(false);

  const handleClick = () => {
    setIsRendered(true);
  };
  if(!isRendered){
  return (
    <>
    <div className={styles.foundicon}>
      <MdCancel className={styles.check_circle} />  
      <h2>Estufa não encontrada</h2>
      <div className={styles.buttons}>
        <Link onClick={handleClick} className={styles.foundicon}>
          <MdAutorenew size={48} className={styles.backicon} />
          Tentar novamente  
        </Link>
        <Link to="/dashboard" className={styles.foundicon}>    
          <MdArrowBack size={48} className={styles.backicon}/>
          Voltar
        </Link>
      </div>
    </div>
    </>
  )
}else{
  return(
    <AddGreenhouse/>
  )
    
}

}

export default GreenhouseNotFound;
