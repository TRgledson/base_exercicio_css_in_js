import { ThemeProvider } from 'styled-components'
import temaLight from './themes/light';
import EstiloGlobal, { Container } from './styles';


function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstiloGlobal />
      <Container>

      </Container>
    </ThemeProvider>
  )
}

export default App
