import {formatDistanceToNow} from 'date-fns'

import {
  TrendingItemContainer,
  TrendingImage,
  TrendingDescription,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewContainer,
  TrendingViewName,
  TrandingSpan,
  Navlink,
  Dot,
} from './styledComponents'

const TrendingVideoSection = props => {
  const {EachVideo} = props
  const {id, title, thumbnailUrl, channel, viewsCount, publishedAt} = EachVideo

  const {name} = channel

  const dateDistance = formatDistanceToNow(new Date(publishedAt))

  return (
    <Navlink to={`/videos/${id}`}>
      <TrendingItemContainer>
        <TrendingImage src={thumbnailUrl} alt={title} />
        <TrendingDescription>
          <TrendingTitle>{title}</TrendingTitle>
          <TrendingChannelName>{name}</TrendingChannelName>
          <TrendingViewContainer>
            <TrendingViewName>
              {viewsCount}
              <TrandingSpan>views</TrandingSpan>
            </TrendingViewName>
            <TrendingViewName>
              <Dot />
              {dateDistance}
            </TrendingViewName>
          </TrendingViewContainer>
        </TrendingDescription>
      </TrendingItemContainer>
    </Navlink>
  )
}

export default TrendingVideoSection
