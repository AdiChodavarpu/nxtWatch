import {Component} from 'react'
import {
  MainContainer,
  VideoIemDetailsContainer,
  ReactPlayerVideo,
  ReactPlayConatiner,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'

class VideoItemDetailsSection extends Component {
  render() {
    return (
      <>
        <Header />
        <MainContainer>
          <SideBar />
          <VideoIemDetailsContainer>
            <ReactPlayConatiner>
              {' '}
              <ReactPlayerVideo url="https://youtu.be/YE7VzlLtp-4" controls />
            </ReactPlayConatiner>
          </VideoIemDetailsContainer>
        </MainContainer>
      </>
    )
  }
}

export default VideoItemDetailsSection
