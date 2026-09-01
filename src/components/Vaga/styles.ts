import styled from 'styled-components'

export const VagaListItem = styled.li`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corSegundaria};
  color: ${(props) => props.theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corSegundaria};
  }

  &:hover a {
    border-color: ${(props) => props.theme.corPrincipal};
    background-color: ${(props) => props.theme.corSegundaria};
    color: ${(props) => props.theme.corPrincipal};
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.corSegundaria};
  background-color: ${(props) => props.theme.corPrincipal};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
