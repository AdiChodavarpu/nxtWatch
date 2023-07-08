import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import HomeVideosSection from '../HomeVideosSection'

import SavedContext from '../../context/SavedContext'

import {
  HomeContainerElement,
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
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  NoSearchContainer,
  NoSearchImage,
  NoSearchHeading,
  NosearchDescription,
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
    <HomeBannerContainer data-testid="banner">
      <BannerContainer>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plan with UPI
        </BannerDescription>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </BannerContainer>
      <CloseButton
        data-testid="close"
        type="button"
        onClick={this.onClickCloseButton}
      >
        <CloseIcon />
      </CloseButton>
    </HomeBannerContainer>
  )

  renderSearchResultView = () => {
    const {homeVideosDetails} = this.state
    return (
      <VideoList>
        {homeVideosDetails.map(eachitem => (
          <HomeVideosSection key={eachitem.id} EachVideo={eachitem} />
        ))}
      </VideoList>
    )
  }

  renderSuccessView = () => {
    const {homeVideosDetails} = this.state
    return (
      <>
        {homeVideosDetails.length > 0
          ? this.renderSearchResultView()
          : this.renderNoSearchResults()}
      </>
    )
  }

  renderNoSearchResults = () => (
    <NoSearchContainer>
      <NoSearchImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchHeading>No Search results found</NoSearchHeading>
      <NosearchDescription>
        Try different key words or remove search filter
      </NosearchDescription>
      <RetryButton type="button">Retry</RetryButton>
    </NoSearchContainer>
  )

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
        <SearchIconButton
          data-testid="searchButton"
          type="button"
          onClick={this.onClickSearchButton}
        >
          <SearchIcon />
        </SearchIconButton>
      </SearchInputContainer>
      <VideoMainConatainer>{this.renderHome()}</VideoMainConatainer>
    </HomeMainContainer>
  )

  render() {
    const {closeButton} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainerElement data-testid="home" isDark={isDark}>
              <Header />
              <MainContainer>
                <SideBar />
                <HomeContainer>
                  {closeButton ? null : this.renderBannerContainer()}
                  {this.renderHomeContainer()}
                </HomeContainer>
              </MainContainer>
            </HomeContainerElement>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Home
