import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import SavedContext from '../../context/SavedContext'

import {
  TrendingContainerElement,
  MainContainer,
  TrendingContainer,
  TrendingIcon,
  TrendingBannerContainer,
  TrendingIconContaier,
  TrendingHeading,
  TrendingMainContainer,
  TrendingVideoList,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'
import TrendingVideoSection from '../TredingVideosSection'

const apiStatusConstants = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESSS',
}

class Trending extends Component {
  state = {
    TrendingVideosList: [],
    apiStatus: apiStatusConstants.initail,
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getChannelDetails = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
  })

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/videos/trending'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachitem => ({
        id: eachitem.id,
        title: eachitem.title,
        thumbnailUrl: eachitem.thumbnail_url,
        channel: this.getChannelDetails(eachitem.channel),
        viewsCount: eachitem.view_count,
        publishedAt: eachitem.published_at,
      }))

      this.setState({
        TrendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  TrendingBanner = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingBannerContainer isDark={isDark} data-testid="banner">
            <TrendingIconContaier isDark={isDark}>
              <TrendingIcon />
            </TrendingIconContaier>
            <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
          </TrendingBannerContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  renderTrendingSuccessView = () => {
    const {TrendingVideosList} = this.state
    return (
      <TrendingVideoList>
        {TrendingVideosList.map(eachitem => (
          <TrendingVideoSection key={eachitem.id} EachVideo={eachitem} />
        ))}
      </TrendingVideoList>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderTrendingFailureView = () => (
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

  renderTredingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingSuccessView()

      case apiStatusConstants.inProgress:
        return this.renderLoader()

      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingContainerElement data-testid="trending" isDark={isDark}>
              <Header />
              <MainContainer>
                <SideBar />
                <TrendingContainer>
                  {this.TrendingBanner()}
                  <TrendingMainContainer>
                    {this.renderTredingVideos()}
                  </TrendingMainContainer>
                </TrendingContainer>
              </MainContainer>
            </TrendingContainerElement>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Trending
