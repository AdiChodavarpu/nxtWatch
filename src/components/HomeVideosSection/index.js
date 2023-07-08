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
  ViewCount,
  SpanElement,
  NavLink,
} from './styledComponent'

const HomeVideosSection = props => {
  const {EachVideo} = props

  const {id, title, thumbnailUrl, channel, viewsCount, publishedAt} = EachVideo
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
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <ViewsContainer>
              <ViewCount>
                {viewsCount} <SpanElement>views</SpanElement>
              </ViewCount>
              <ViewCount>.{DatedNow}</ViewCount>
            </ViewsContainer>
          </VideoDescriptionDetailsContainer>
        </VideoDetailsContainer>
      </VideoItem>
    </NavLink>
  )
}

export default HomeVideosSection
