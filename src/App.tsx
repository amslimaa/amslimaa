import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'


import { Home } from './pages/Home'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
