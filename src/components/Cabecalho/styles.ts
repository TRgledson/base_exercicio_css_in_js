import styled from 'styled-components'

export const Cabecalho = styled.header`
  background-color: ${(props) => props.theme.corSegundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 20px;
  display: flex;
  justify-content: flex-end;
`
export const Tituloh1 = styled.h1`
  margin: 0;
  flex: 1;
  text-align: center;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corPrincipal};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corSegundaria};
  cursor: pointer;
  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 8px;
    font-size: 15px;
  }
`
