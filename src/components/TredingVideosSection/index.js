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
} from './styledComponents'

const TrendingVideoSection = props => {
  const {EachVideo} = props
  const {id, title, thumbnailUrl, channel, viewsCount, publishedAt} = EachVideo

  const {name} = channel

  const dateDistance = formatDistanceToNow(new Date(publishedAt))

  return (
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
          <TrendingViewName>.{dateDistance}</TrendingViewName>
        </TrendingViewContainer>
      </TrendingDescription>
    </TrendingItemContainer>
  )
}

export default TrendingVideoSection
