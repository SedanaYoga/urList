import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardScreen from './screens/DasboardScreen/DashboardScreen'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={DashboardScreen} exact />
      </div>
    </Router>
  )
}

export default App
