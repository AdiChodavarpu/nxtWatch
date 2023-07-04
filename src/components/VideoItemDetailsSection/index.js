import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'

import {
  MainContainer,
  VideoIemDetailsContainer,
  ReactPlayContainer,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'

const apiStatusConstants = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESSS',
}

class VideoItemDetailsSection extends Component {
  state = {
    VideoItemDetailsList: [],
    apiStatus: apiStatusConstants.initail,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getChannelDetails = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const data = fetchedData.video_details
      const updatedData = {
        id: data.id,
        description: data.description,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
        channel: this.getChannelDetails(data.channel),
      }

      this.setState({
        VideoItemDetailsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getVideoFromUrl = () => {
    const {VideoItemDetailsList} = this.state
    const {videoUrl} = VideoItemDetailsList
    return (
      <ReactPlayContainer>
        <ReactPlayer url={videoUrl} height="65vh" width="100%" controls />
      </ReactPlayContainer>
    )
  }

  renderVidoItemDetailsSuccessView = () => <h1>Success View </h1>

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoItemDetailsFailureView = () => <h1>Failure View </h1>

  renderVideoItemDetailsSectionView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVidoItemDetailsSuccessView()

      case apiStatusConstants.inProgress:
        return this.renderLoader()

      case apiStatusConstants.failure:
        return this.renderVideoItemDetailsFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <MainContainer>
          <SideBar />
          <VideoIemDetailsContainer>
            {this.renderVideoItemDetailsSectionView()}
          </VideoIemDetailsContainer>
        </MainContainer>
      </>
    )
  }
}

export default VideoItemDetailsSection
