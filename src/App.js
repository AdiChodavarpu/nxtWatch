import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetailsSection from './components/VideoItemDetailsSection'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import SavedContext from './context/SavedContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    SavedVideoList: [],
    isDark: false,
  }

  updatedSavedList = VideoDetails => {
    const {SavedVideoList} = this.state

    const isPresent = SavedVideoList.find(
      eachVideo => eachVideo.id === VideoDetails.id,
    )

    if (isPresent === undefined) {
      this.setState(preState => ({
        SavedVideoList: [...preState.SavedVideoList, VideoDetails],
      }))
    } else {
      const RemoveItem = SavedVideoList.filter(
        eachitem => eachitem.id !== VideoDetails.id,
      )

      this.setState({SavedVideoList: RemoveItem})
    }
  }

  updateTheme = () => {
    this.setState(prevValue => ({
      isDark: !prevValue.isDark,
    }))
  }

  render() {
    const {SavedVideoList, isDark} = this.state

    return (
      <SavedContext.Provider
        value={{
          SavedItemList: SavedVideoList,
          updatedSavedList: this.updatedSavedList,
          isDark,
          updateTheme: this.updateTheme,
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
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SavedContext.Provider>
    )
  }
}

export default App
