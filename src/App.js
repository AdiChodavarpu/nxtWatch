import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
)

export default App
