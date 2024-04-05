import React from 'react'


const InputText = ({ value, label, placeholder, type, onChange, id }) => {
  return (
    <div>
        <input
        type={type}
        value={value}
        className={styles.input}
        placeholder={placeholder}
        id={id}
      />
    </div>
  )
}

export default InputText