import { Formulario, Botao, Input } from './styles'
import { useState, type SyntheticEvent, type ChangeEvent } from 'react'

type Props = {
  aopesquisar: (termo: string) => void
}

export function FormVagas({ aopesquisar }: Props) {
  const [termo, setTermo] = useState<string>('')

  const aoEnviar = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    aopesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviar}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Formulario>
  )
}
