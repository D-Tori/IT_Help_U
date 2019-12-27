import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    ligtMainColor: '#4a47d5',
    mainColor: '#5457ff',
    pointColor: '#963484',
    whiteColor: '#fff',
    headFontColor: '#102A43',
    descFontColor: '#334E68',
    smalldescColor: '#80818D'
  },
  font: ['Lato', 'sans-serif'],
  fontSize: {
    xLarge: "2.5rem",   // 40px
    large: "1.8rem",    // 28.8px
    medium: "1.2rem",   // 19.2px
    small: "0.8rem"     // 12.8px
  },
  fontWeight: {
    mainTitle: "900",
    emphasis: "700",
    desc: "400"
  },
  width: {
    fullWidth: '100%',
    normalWidth: '1200px',
    formWidth: '600px',
    smallWidth: '800px'
  },

}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;


