import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
body {
  font-size: 18px;
  font-family: 'Gill Sans'; 
}
`

export default GlobalStyles
