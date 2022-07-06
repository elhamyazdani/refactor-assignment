import React from 'react'

//TODO fields need to be separated
interface TextFieldProps {
  name: string
  label?: string
  placeholder?: string
  type: string
  isRequired?: boolean
  showMessage: false
  handleChange: (e: any) => void
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder,
  type,
  isRequired,
  showMessage,
  handleChange
}) => {
  return (
    <div>
      {label && (
        <label>
          {`${label} ${isRequired && '*'} :`}
        </label>
      )}

      {type === 'text' && (
        <input
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {type === 'textarea' && (
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      <div className='message'>{showMessage && `please fill this field`}</div>
    </div>
  )
}

export default TextField
