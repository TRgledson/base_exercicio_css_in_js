import { ThemeProvider } from 'styled-components'
import temaLight from './themes/light'
import EstiloGlobal, { Container } from './styles'
import Header from './components/Cabecalho';
import { FormVagas } from './components/FormVagas';

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstiloGlobal />
      <Container>
        <Header />
        <FormVagas aopesquisar={(termo: string) => console.log(termo)} />
      </Container>
    </ThemeProvider>
  )
}

export default App
