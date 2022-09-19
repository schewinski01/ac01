type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string | number
  onClick?: () => void
}

export function Button({ title, onClick, ...rest }: Props) {
  return (
    <button onClick={onClick} {...rest}>
      {title}
    </button>
  )
}
