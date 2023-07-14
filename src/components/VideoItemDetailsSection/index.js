import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import SavedContext from '../../context/SavedContext'

import {
  VideoItemDetailsContainerElement,
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
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
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
        <ReactPlayer url={videoUrl} height="50vh" width="100%" controls />
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
    const {VideoItemDetailsList, Liked, Disliked, Saved} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {updatedSavedList, SavedItemList} = value

          const isPresent = SavedItemList.find(
            eachVideo => eachVideo.id === VideoItemDetailsList.id,
          )

          const savedText = isPresent === undefined ? 'Save' : 'Saved'
          const saveColor = isPresent === undefined ? false : {Saved}

          const onClickSaveButton = () => {
            this.renderOnClickSaveButton()
            updatedSavedList({
              ...VideoItemDetailsList,
              isLiked: Liked,
              isDisliked: Disliked,
            })
          }

          return (
            <IconsItemsContainer>
              <IconButton type="button" onClick={onClickSaveButton}>
                <SaveICon color={saveColor ? '#2563eb' : ' #64748b '} />
                <SaveDescription saved={saveColor}>{savedText}</SaveDescription>
              </IconButton>
            </IconsItemsContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  getVideoToDescriptionSection = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDark, SavedItemList} = value

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

        const isPresent = SavedItemList.find(
          eachVideo => eachVideo.id === VideoItemDetailsList.id,
        )

        const PreviouslySaved = SavedItemList.filter(
          eachVideo => eachVideo.id === VideoItemDetailsList.id,
        )

        const LikedColor =
          isPresent === undefined ? Liked : PreviouslySaved[0].isLiked

        const DislikedColor =
          isPresent === undefined ? Disliked : PreviouslySaved[0].isDisliked

        return (
          <VideoItemDetailsTopSection>
            <VideoDetailsHeading as="p" isDark={isDark}>
              {title}
            </VideoDetailsHeading>
            <VideoItemDetailsViews>
              <ViewsContainer>
                <VideoDetailsParagraph isDark={isDark}>
                  {viewCount} views
                </VideoDetailsParagraph>
                <VideoDetailsParagraph isDark={isDark}>
                  <DotElement />
                  {DatedNow}
                </VideoDetailsParagraph>
              </ViewsContainer>

              <IconsContainer>
                <IconsItemsContainer>
                  <IconButton type="button" onClick={this.onClickLikeButton}>
                    <LikeIcon color={LikedColor ? '#2563eb' : ' #64748b '} />
                    <LikeDescription liked={LikedColor}>Like</LikeDescription>
                  </IconButton>
                </IconsItemsContainer>

                <IconsItemsContainer>
                  <IconButton type="button" onClick={this.onClickDislikeButton}>
                    <DisLikeIcon
                      color={DislikedColor ? '#2563eb' : ' #64748b '}
                    />
                    <DislikeDescription disliked={DislikedColor}>
                      Dislike
                    </DislikeDescription>
                  </IconButton>
                </IconsItemsContainer>
                {this.renderSavedSection()}
              </IconsContainer>
            </VideoItemDetailsViews>
          </VideoItemDetailsTopSection>
        )
      }}
    </SavedContext.Consumer>
  )

  getVideoBottomDescriptionSection = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDark} = value
        const {VideoItemDetailsList} = this.state
        const {channel, description} = VideoItemDetailsList
        const {name, profileImageUrl, subscriberCount} = channel

        return (
          <VideoDetailsBottomContainer>
            <ProfileImage src={profileImageUrl} alt="channel logo" />
            <ChannelContainer>
              <ChannelHeading isDark={isDark}>{name}</ChannelHeading>
              <Subscribers isDark={isDark}>
                {subscriberCount} subscribers
              </Subscribers>
              <IconDescription isDark={isDark}>{description}</IconDescription>
            </ChannelContainer>
          </VideoDetailsBottomContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  renderVideoItemDetailsSuccessView = () => (
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

  onClickRetry = () => {
    this.getVideoItemDetails()
  }

  renderVideoItemDetailsFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>

      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderVideoItemDetailsSectionView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccessView()

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
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <VideoItemDetailsContainerElement
              isDark={isDark}
              data-testid="videoItemDetails"
            >
              <Header />
              <MainContainer>
                <SideBar />
                <VideoIemDetailsContainer>
                  {this.renderVideoItemDetailsSectionView()}
                </VideoIemDetailsContainer>
              </MainContainer>
            </VideoItemDetailsContainerElement>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default VideoItemDetailsSection
