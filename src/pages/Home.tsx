
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function Home (): ReactElement {
  return (
    <div>
      Home <Link to={'/livros'}>Livros</Link> <Link to={'/telacadastrofornecedor'}>Cadastro Fornecedor</Link>
    </div>
  )
}
