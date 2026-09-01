import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { useState } from 'react'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estadoUsandoTemaLight, setEstadoUsandoTemaLight] = useState(true)

  function trocaTema() {
    setEstadoUsandoTemaLight(!estadoUsandoTemaLight)
  }
  document.title = 'EBAC Jobs'

  return (
    <ThemeProvider theme={estadoUsandoTemaLight ? temaLight : temaDark}>
      <EstiloGlobal />
      <Header trocaTema={trocaTema} />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
