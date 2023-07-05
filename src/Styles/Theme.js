import { ThemeProvider,createGlobalStyle } from "styled-components";

const theme = {
    fontFamily: 'Roboto, sans-serif',
    mainColors: {
      blue: '#008DFF',
      gray: '#c6c6c6',
      dark: '#353535',
      yellow:'#FFE63D',
      orange:'#FD9914',
      green:'#A6FB04',
      teal:'#0EA99A',
     

    },
  };

const GlobalStyles = createGlobalStyle`
body {
font-family: ${({ theme }) => theme.fontFamily};
font-size: 18px;
margin: 0;
padding-top: 40px;
padding-left: 15px;
padding-right: 15px;
width:auto;
background: black;
}`
;
export const GlobalTheme = ({children})=>{
    return <ThemeProvider theme={theme} >
    <GlobalStyles/>
    {children} 
    </ThemeProvider>
}