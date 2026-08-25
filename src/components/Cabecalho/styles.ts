import styled from 'styled-components'

import { Props } from '.'

export const Cabecalho = styled.header<Props>`
  background-color: ${(props) => props.theme.corPrincipal};
`
