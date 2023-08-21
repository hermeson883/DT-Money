import 'styled-components'
import { defaultThemes } from '../src/styles/default'

type ThemeType = typeof defaultThemes

declare module 'styled-components' {
  export interface defaultThemes extends ThemeType {}
}
