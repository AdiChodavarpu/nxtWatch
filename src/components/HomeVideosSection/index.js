import {formatDistanceToNow} from 'date-fns'

import {
  VideoItem,
  ThumbnailImage,
  VideoDetailsContainer,
  ProfileLogo,
  VideoDescriptionDetailsContainer,
  VideoTitle,
  ChannelName,
  ViewsContainer,
  PostedDateContainer,
  ViewCount,
  SpanElement,
  NavLink,
  Dot,
} from './styledComponent'

import SavedContext from '../../context/SavedContext'

const HomeVideosSection = props => (
  <SavedContext.Consumer>
    {value => {
      const {isDark} = value
      const {EachVideo} = props

      const {
        id,
        title,
        thumbnailUrl,
        channel,
        viewsCount,
        publishedAt,
      } = EachVideo
      const {name, profileImageUrl} = channel

      const GivenDate = new Date(publishedAt)

      const DatedNow = formatDistanceToNow(
        new Date(
          GivenDate.getFullYear(),
          GivenDate.getMonth(),
          GivenDate.getDate(),
        ),
      )

      return (
        <NavLink to={`/videos/${id}`}>
          <VideoItem>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <ProfileLogo src={profileImageUrl} alt="channel logo" />
              <VideoDescriptionDetailsContainer>
                <VideoTitle as="p" isDark={isDark}>
                  {title}
                </VideoTitle>
                <ChannelName isDark={isDark}>{name}</ChannelName>
                <ViewsContainer>
                  <ViewCount isDark={isDark}>
                    {viewsCount}
                    <SpanElement isDark={isDark}>views</SpanElement>
                  </ViewCount>
                  <PostedDateContainer>
                    <ViewCount isDark={isDark}>
                      <Dot />
                      {DatedNow}
                    </ViewCount>
                  </PostedDateContainer>
                </ViewsContainer>
              </VideoDescriptionDetailsContainer>
            </VideoDetailsContainer>
          </VideoItem>
        </NavLink>
      )
    }}
  </SavedContext.Consumer>
)

export default HomeVideosSection
