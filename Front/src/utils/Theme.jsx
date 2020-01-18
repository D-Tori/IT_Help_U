import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    mainColor: '#FACC2E ',
    pointColor: '#0489B1',
    lightPointColor: '#01A9DB',
    whiteColor: '#fff',
    headFontColor: '#1a1a1a',
    descFontColor: '#5F4C0B',
    pointColor2: '#e87e88'
  },
  font: ['Lato', 'sans-serif'],
  fontSize: {
    xLarge: "1.5rem",   // 40px
    large: "1rem",    // 16px
    medium: "0.8rem",   // 12px
    small: "0.5rem"     // 8px
  },
  fontWeight: {
    mainTitle: "900",
    emphasis: "700",
    desc: "400"
  },
  width: {
    fullWidth: '100%',
    halfWidth: '50%',
    normalWidth: '1200px',
    formWidth: '500px',
    smallWidth: '800px'
  },

  leftPage:{
    display: 'flex',
    flexDirection: 'column',
    padding: '50px',
    margin: '0 auto',
    textAlign: 'center'
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;


