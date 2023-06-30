import {Component} from 'react'

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
} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'

class Home extends Component {
  state = {
    closeButton: false,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const Url = 'https://apis.ccbp.in/videos/all?search='
    const data = await fetch(Url)
    const response = await data.json()
    console.log(response)
  }

  onClickCloseButton = () => {
    this.setState({closeButton: true})
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

  renderHomeContainer = () => (
    <HomeMainContainer>
      <SearchInputContainer>
        <SearchInputElement placeholder="Search" />
        <SearchIconButton type="button">
          <SearchIcon />
        </SearchIconButton>
      </SearchInputContainer>
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
