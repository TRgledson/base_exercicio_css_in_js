import styled from 'styled-components'

export const HeroForm = styled.form`
  display: flex;
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(${(props) => props.theme.corPrincipal});
    content: '';
    opacity: 0.7;
  }
  div {
    position: relative;
    color: ${(props) => props.theme.corTerciaria};
  }
  @media (max-width: 768px) {
    .form {
      height: auto;
      padding: 24px 0;
    }
  }
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  padding: 0 24px;
  text-shadow:
    -1px -1px 0 ${(props) => props.theme.corPrincipal},
    1px -1px 0 ${(props) => props.theme.corPrincipal},
    -1px 1px 0 ${(props) => props.theme.corPrincipal},
    1px 1px 0 ${(props) => props.theme.corPrincipal};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
