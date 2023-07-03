import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  MainContainer,
  GamingContainer,
  GamingBannerContainer,
  GamingIconContaier,
  GamingIcon,
  GamingHeading,
  GamingVideosContainer,
  GamingVideosListContainer,
} from './styledComponents'

import GamingVideosSection from '../gamingVideosSection'

import Header from '../Header'
import SideBar from '../sideBar'

const apiStatusConstants = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESSS',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initail,
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachitem => ({
        id: eachitem.id,
        title: eachitem.title,
        thumbnailUrl: eachitem.thumbnail_url,
        viewCount: eachitem.view_count,
      }))

      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideosList} = this.state

    return (
      <GamingVideosListContainer>
        {gamingVideosList.map(eachitem => (
          <GamingVideosSection key={eachitem.id} EachVideo={eachitem} />
        ))}
      </GamingVideosListContainer>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <h1>Failure View</h1>

  renderGamingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()

      case apiStatusConstants.inProgress:
        return this.renderLoader()

      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  GamingBannerSection = () => (
    <GamingBannerContainer>
      <GamingIconContaier>
        <GamingIcon />
      </GamingIconContaier>
      <GamingHeading>Gaming</GamingHeading>
    </GamingBannerContainer>
  )

  render() {
    return (
      <>
        <Header />
        <MainContainer>
          <SideBar />
          <GamingContainer>
            {this.GamingBannerSection()}
            <GamingVideosContainer>
              {this.renderGamingView()}
            </GamingVideosContainer>
          </GamingContainer>
        </MainContainer>
      </>
    )
  }
}

export default Gaming
