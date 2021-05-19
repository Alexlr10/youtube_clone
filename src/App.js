import React from 'react'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'
import Home from './home';




function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3f51b5'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  )
}

export default App;