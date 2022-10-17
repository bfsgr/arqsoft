import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function Livros (): ReactElement {
  return (
    <div>
      <Link to={'/'}>Home</Link> Livros
    </div>
  )
}
