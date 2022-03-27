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
  font-family: Nunito, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .click-fx{
    :hover {
    filter: brightness(0.9);
    :active {
      filter: brightness(1);
    }
  }
}

.noscrollbar {
  overflow-y: scroll; /* Add the ability to scroll */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.noscrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.noscrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.bw-selection {
  ::-moz-selection { /* Code for Firefox */
  color: white;
  background: black;
}

::selection {
  color: white;
  background: black;
}
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
input {
  font-family: 'Nunito';
  
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
.flex-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
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
  color5: '#474747',
  color6: '#000000',
  buttonColor: '#2e4acd',
  lineColor1: '#F1F1F1',
}
GlobalStyled.defaultProps = {
  theme: theme,
}
