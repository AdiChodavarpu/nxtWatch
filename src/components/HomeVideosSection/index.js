import {formatDistanceToNow} from 'date-fns'

import {
  VideoItem,
  ThumbnaiImage,
  VideoDetailsContainer,
  ProfileLogo,
  VideoDescriptionDetailsContainer,
  VideoTitle,
  ChanneName,
  ViewsContainer,
  ViewCount,
  SpanElement,
  Navlink,
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
    <Navlink to={`/videos/${id}`}>
      <VideoItem>
        <ThumbnaiImage src={thumbnailUrl} alt={title} />
        <VideoDetailsContainer>
          <ProfileLogo src={profileImageUrl} alt={name} />
          <VideoDescriptionDetailsContainer>
            <VideoTitle>{title}</VideoTitle>
            <ChanneName>{name}</ChanneName>
            <ViewsContainer>
              <ViewCount>
                {viewsCount} <SpanElement>views</SpanElement>
              </ViewCount>
              <ViewCount>.{DatedNow}</ViewCount>
            </ViewsContainer>
          </VideoDescriptionDetailsContainer>
        </VideoDetailsContainer>
      </VideoItem>
    </Navlink>
  )
}

export default HomeVideosSection
