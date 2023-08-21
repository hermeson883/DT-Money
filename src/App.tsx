import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/default'
import { GlobalStyle } from './styles/global'
import { Transaction } from './pages/Transaction/Index'

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyle />
      <Transaction />
    </ThemeProvider>
  )
}
