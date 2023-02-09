import { GlobalStyle } from './styles/global'
import { dark, light } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home'
import { ThemeButton } from './components/ThemeButtom';
import { useState } from 'react';

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

var defaultTheme = prefersColorScheme.matches ? dark : light;

function App() {
  
  const [theme, setTheme ] = useState(defaultTheme)

  const  changeTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <ThemeButton changeTheme={changeTheme} theme={theme.title}/>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
