import './style.css'

interface ButtonProps {
  size: 'small' | 'big'
}

export function Button({ size = 'small' }: ButtonProps) {
  if (size === 'big') {
    return (
      <button className="font-default bg-ignite500 px-20 py-10">
        {' '}
        Hello world{' '}
      </button>
    )
  }

  return (
    <button className="font-default bg-ignite500 px-10 py-5">
      {' '}
      Hello world{' '}
    </button>
  )
}
