import { forwardRef, ForwardRefRenderFunction } from 'react'

import style from './style.module.css'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string
  label?: string
  type?: string
  error?: any
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, type, ...rest },
  ref
) => {
  return (
    <div className={style.container}>
      {!!label && <label htmlFor={name}>{label}</label>}

      <input type={type ?? 'text'} id={name} name={name} ref={ref} {...rest} />

      {!!error && <p>{error.message}</p>}
    </div>
  )
}

export const Input = forwardRef(InputBase)
