import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import HomeVideosSection from '../HomeVideosSection'

import {
  MainContainer,
  HomeContainer,
  HomeBannerContainer,
  BannerContainer,
  BannerImage,
  BannerDescription,
  GetItNowButton,
  CloseIcon,
  CloseButton,
  HomeMainContainer,
  SearchInputContainer,
  SearchInputElement,
  SearchIcon,
  SearchIconButton,
  VideoMainConatainer,
  VideoList,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'

const apiStatusConstants = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESSS',
}

class Home extends Component {
  state = {
    closeButton: false,
    homeVideosDetails: [],
    apiStatus: apiStatusConstants.initail,
    userSearchInput: '',
    searchValue: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getChannelDetails = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
  })

  onChangeUserSearch = event => {
    this.setState({userSearchInput: event.target.value})
  }

  getHomeVideos = async () => {
    const {searchValue} = this.state

    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachitem => ({
        id: eachitem.id,
        title: eachitem.title,
        thumbnailUrl: eachitem.thumbnail_url,
        channel: this.getChannelDetails(eachitem.channel),
        viewsCount: eachitem.view_count,
        publishedAt: eachitem.published_at,
      }))
      this.setState({
        homeVideosDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickCloseButton = () => {
    this.setState({closeButton: true})
  }

  onClickSearchButton = () => {
    const {userSearchInput} = this.state
    this.setState({searchValue: userSearchInput}, this.getHomeVideos)
  }

  renderBannerContainer = () => (
    <HomeBannerContainer>
      <BannerContainer>
        <BannerImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plan with UPI
        </BannerDescription>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </BannerContainer>
      <CloseButton type="button" onClick={this.onClickCloseButton}>
        <CloseIcon />
      </CloseButton>
    </HomeBannerContainer>
  )

  renderSuccessView = () => {
    const {homeVideosDetails} = this.state
    return (
      <VideoList>
        {homeVideosDetails.map(eachitem => (
          <HomeVideosSection key={eachitem.id} EachVideo={eachitem} />
        ))}
      </VideoList>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <h1>Failure View</h1>

  renderHome = () => {
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

  renderHomeContainer = () => (
    <HomeMainContainer>
      <SearchInputContainer>
        <SearchInputElement
          type="search"
          placeholder="Search"
          onChange={this.onChangeUserSearch}
        />
        <SearchIconButton type="button" onClick={this.onClickSearchButton}>
          <SearchIcon />
        </SearchIconButton>
      </SearchInputContainer>
      <VideoMainConatainer>{this.renderHome()}</VideoMainConatainer>
    </HomeMainContainer>
  )

  render() {
    const {closeButton} = this.state

    return (
      <>
        <Header />
        <MainContainer>
          <SideBar />
          <HomeContainer>
            {closeButton ? null : this.renderBannerContainer()}
            {this.renderHomeContainer()}
          </HomeContainer>
        </MainContainer>
      </>
    )
  }
}

export default Home
