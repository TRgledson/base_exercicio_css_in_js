import { Cabecalho as CabecalhoEstilo, BotaoTema, Tituloh1 } from './styles'

type Props = {
  trocaTema: () => void
}

const Cabecalho = (props: Props) => {
  return (
    <CabecalhoEstilo>
      <Tituloh1>EBAC Jobs</Tituloh1>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </CabecalhoEstilo>
  )
}

export default Cabecalho
