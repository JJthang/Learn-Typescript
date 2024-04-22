import React from 'react'

type Props = {
    type: string
    className?: string,
    placeholder: string,
    errorMessage: string | undefined
}

const Input = React.forwardRef<HTMLInputElement, Props>(({className, type = "text", placeholder, errorMessage, ...rest}, ref) => {
  return (
    <>
    <input type={type} placeholder={placeholder} className={className} ref={ref} {...rest}/>
    <p className='text-red-600'>{errorMessage}</p>
    </>
  )
})

export default Input