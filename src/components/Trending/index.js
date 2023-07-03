import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  MainContainer,
  TrendingContainer,
  TrendingIcon,
  TrendingBannerContainer,
  TrendingIconContaier,
  TrendingHeading,
  TrendingMainContainer,
  TrendingVideoList,
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
    <TrendingBannerContainer>
      <TrendingIconContaier>
        <TrendingIcon />
      </TrendingIconContaier>
      <TrendingHeading>Trending</TrendingHeading>
    </TrendingBannerContainer>
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

  renderTrendingFailureView = () => <h1>Failure View</h1>

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
      <>
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
      </>
    )
  }
}

export default Trending
