import { createGlobalStyle } from 'styled-components'
import { defaultThemes } from './default'
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
      
    :focus{
        outline: 0 ;
        box-shadow: 0 0 0 2px ${defaultThemes['green-500']};
    }

    body {
        background: ${defaultThemes['gray-800']};
        color: ${defaultThemes['gray-100']};
    }

    body, input, textarea, button{ 
        font: 400 1rem Roboto, sans-serif;
    }

`
