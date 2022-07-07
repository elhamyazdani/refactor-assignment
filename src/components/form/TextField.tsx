import React from 'react'
import styles from './text_field.module.css'

//TODO text and textarea fields need to be separated with a common parent

interface TextFieldProps {
  name: string
  label?: string
  placeholder?: string
  type: string
  isRequired?: boolean
  handleChange: (e: any) => void
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder,
  type,
  isRequired,
  handleChange
}) => {
  return (
    <div className={styles.formItem}>
      {label && (
        <label className={styles.label}>
          {`${label} ${isRequired && '*'} :`}
        </label>
      )}

      {type === 'text' && (
        <input
          name={name}
          placeholder={placeholder}
          className={styles.input}
          onChange={handleChange}
        />
      )}
      {type === 'textarea' && (
        <textarea
          name={name}
          placeholder={placeholder}
          className={styles.input}
          onChange={handleChange}
        />
      )}
    </div>
  )
}

export default TextField
