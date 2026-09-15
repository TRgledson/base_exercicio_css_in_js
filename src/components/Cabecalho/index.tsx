import { Cabecalho as CabecalhoEstilo } from './styles'

type Props = {
  trocaTema: () => void
}

const Cabecalho = (props: Props) => {
  return (
    <CabecalhoEstilo>
      <h1>EBAC Jobs</h1>
    </CabecalhoEstilo>
  )
}

export default Cabecalho
