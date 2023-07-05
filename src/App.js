import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetailsSection from './components/VideoItemDetailsSection'
import SavedVideos from './components/SavedVideos'
import SavedContext from './context/SavedContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    SavedVideoList: [],
  }

  updatedSavedList = (VideoDetails, Saved) => {
    this.setState(preState => ({
      SavedVideoList: [...preState.SavedVideoList, VideoDetails],
    }))
  }

  render() {
    const {SavedVideoList} = this.state

    return (
      <SavedContext.Provider
        value={{
          SavedItemList: SavedVideoList,
          updatedSavedList: this.updatedSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsSection}
          />
        </Switch>
      </SavedContext.Provider>
    )
  }
}

export default App
