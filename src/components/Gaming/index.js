import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import SavedContext from '../../context/SavedContext'

import {
  GamingContainerElement,
  MainContainer,
  GamingContainer,
  GamingBannerContainer,
  GamingIconContaier,
  GamingIcon,
  GamingHeading,
  GamingVideosContainer,
  GamingVideosListContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
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

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure-view-light"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request.
      </FailureDescription>
      <FailureDescription>Please try again.</FailureDescription>
      <RetryButton type="button">Retry</RetryButton>
    </FailureContainer>
  )

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
    <GamingBannerContainer data-testid="banner">
      <GamingIconContaier>
        <GamingIcon />
      </GamingIconContaier>
      <GamingHeading>Gaming</GamingHeading>
    </GamingBannerContainer>
  )

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingContainerElement data-testid="gaming" isDark={isDark}>
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
            </GamingContainerElement>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Gaming
