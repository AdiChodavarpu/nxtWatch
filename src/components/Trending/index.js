import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  MainContainer,
  TrendingContainer,
  TrendingIcon,
  TrendingBannerContainer,
  TrendingIconContaier,
  TrendingHeading,
  TrendingMainContainer,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'

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

  render() {
    const {TrendingVideosList, apiStatus} = this.state
    console.log(TrendingVideosList)
    console.log(apiStatus)
    return (
      <>
        <Header />
        <MainContainer>
          <SideBar />
          <TrendingContainer>
            {this.TrendingBanner()}
            <TrendingMainContainer>sdfsf</TrendingMainContainer>
          </TrendingContainer>
        </MainContainer>
      </>
    )
  }
}

export default Trending
