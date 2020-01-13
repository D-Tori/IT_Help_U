import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    ligtMainColor: '#4a47d5',
    mainColor: '#5457ff',
    pointColor: '#0489B1',
    whiteColor: '#fff',
    headFontColor: '#1a1a1a',
    descFontColor: '#334E68',
    smalldescColor: '#80818D'
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


