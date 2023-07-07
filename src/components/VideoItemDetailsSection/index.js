import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import SavedContext from '../../context/SavedContext'

import {
  MainContainer,
  VideoIemDetailsContainer,
  ReactPlayContainer,
  VideoItemDetailsTopSection,
  ViewsContainer,
  VideoItemDetailsViews,
  VideoDetailsHeading,
  VideoDetailsParagraph,
  IconsContainer,
  LikeDescription,
  DislikeDescription,
  SaveDescription,
  IconDescription,
  IconsItemsContainer,
  LikeIcon,
  DisLikeIcon,
  SaveICon,
  DotElement,
  Line,
  VideoDetailsBottomContainer,
  ProfileImage,
  ChannelContainer,
  Subscribers,
  ChannelHeading,
  IconButton,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESSS',
}

class VideoItemDetailsSection extends Component {
  state = {
    VideoItemDetailsList: [],
    apiStatus: apiStatusConstants.initial,
    Liked: false,
    Disliked: false,
    Saved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getChannelDetails = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
    subscriberCount: data.subscriber_count,
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

  onClickLikeButton = () => {
    this.setState(prevValue => ({
      Liked: !prevValue.Liked,
      Disliked: false,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevValue => ({
      Disliked: !prevValue.Disliked,
      Liked: false,
    }))
  }

  renderOnClickSaveButton = () => {
    this.setState(prevValue => ({
      Saved: !prevValue.Saved,
    }))
  }

  renderSavedSection = () => {
    const {VideoItemDetailsList, Liked, Saved} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {updatedSavedList} = value

          const onClickSaveButton = () => {
            this.renderOnClickSaveButton()
            updatedSavedList({...VideoItemDetailsList, Liked}, Saved)
          }

          return (
            <IconsItemsContainer>
              <IconButton type="button" onClick={onClickSaveButton}>
                <SaveICon color={Saved ? ' #3b82f6' : ' #606060'} />
                <SaveDescription saved={Saved}>
                  {Saved ? 'Saved' : 'Save'}
                </SaveDescription>
              </IconButton>
            </IconsItemsContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  getVideoToDescriptionSection = () => {
    const {VideoItemDetailsList, Liked, Disliked} = this.state
    const {title, publishedAt, viewCount} = VideoItemDetailsList
    const GivenDate = new Date(publishedAt)

    const DatedNow = formatDistanceToNow(
      new Date(
        GivenDate.getFullYear(),
        GivenDate.getMonth(),
        GivenDate.getDate(),
      ),
    )

    return (
      <VideoItemDetailsTopSection>
        <VideoDetailsHeading>{title}</VideoDetailsHeading>
        <VideoItemDetailsViews>
          <ViewsContainer>
            <VideoDetailsParagraph>{viewCount} views</VideoDetailsParagraph>
            <VideoDetailsParagraph>
              <DotElement />
              {DatedNow}
            </VideoDetailsParagraph>
          </ViewsContainer>

          <IconsContainer>
            <IconsItemsContainer>
              <IconButton type="button" onClick={this.onClickLikeButton}>
                <LikeIcon color={Liked ? ' #3b82f6' : ' #606060'} />
                <LikeDescription liked={Liked}>Like</LikeDescription>
              </IconButton>
            </IconsItemsContainer>

            <IconsItemsContainer>
              <IconButton type="button" onClick={this.onClickDislikeButton}>
                <DisLikeIcon color={Disliked ? ' #3b82f6' : ' #606060'} />
                <DislikeDescription disliked={Disliked}>
                  Dislike
                </DislikeDescription>
              </IconButton>
            </IconsItemsContainer>
            {this.renderSavedSection()}
          </IconsContainer>
        </VideoItemDetailsViews>
      </VideoItemDetailsTopSection>
    )
  }

  getVideoBottomDescriptionSection = () => {
    const {VideoItemDetailsList} = this.state
    const {channel, description} = VideoItemDetailsList
    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <VideoDetailsBottomContainer>
        <ProfileImage src={profileImageUrl} alt={name} />
        <ChannelContainer>
          <ChannelHeading>{name}</ChannelHeading>
          <Subscribers>{subscriberCount} subscribers</Subscribers>
          <IconDescription>{description}</IconDescription>
        </ChannelContainer>
      </VideoDetailsBottomContainer>
    )
  }

  renderVidoItemDetailsSuccessView = () => (
    <>
      {this.getVideoFromUrl()}
      {this.getVideoToDescriptionSection()}

      <Line />
      {this.getVideoBottomDescriptionSection()}
    </>
  )

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
