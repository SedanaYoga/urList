import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardScreen from './screens/DasboardScreen/DashboardScreen'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

function App() {
  return (
    <Router>
      <GlobalStyled />
      {/* <img
        src="https://lh3.googleusercontent.com/xzIwE5j-TuwmO0fgZOiYeqOam0ME7IxaPRGygwqrj3hgdQQ_ty0tRPohtSaKxcu3uVgCslZnHgbnWUS7TWZYD6OK65LB15AztqsWk1NjUfbQ9eZXAnIy0-YrU9UwvR7jm6UiaOyujw=w2400"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      ></img> */}
      <ThemeProvider theme={theme}>
        <Route path="/" component={DashboardScreen} exact />
      </ThemeProvider>
    </Router>
  )
}

export default App

const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url('./images/final design transparent.png');
  font-family: Nunito, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
const theme = {
  color1: '#FFFFFF',
  color2: '#F4F5F7',
  color3: '#DADADA',
  color4: '#9d9d9d',
  buttonColor: '#2e4acd',
  lineColor1: '#F1F1F1',
}
GlobalStyled.defaultProps = {
  theme: theme,
}
