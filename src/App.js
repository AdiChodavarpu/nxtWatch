import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetailsSection from './components/VideoItemDetailsSection'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/trending" component={Trending} />
    <ProtectedRoute exact path="/gaming" component={Gaming} />
    <Route exact path="/videos/:id" component={VideoItemDetailsSection} />
  </Switch>
)

export default App
