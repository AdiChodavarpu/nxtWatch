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

import SavedContext from '../../context/SavedContext'

const TrendingVideoSection = props => (
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

      const {name} = channel

      const dateDistance = formatDistanceToNow(new Date(publishedAt))

      return (
        <Navlink to={`/videos/${id}`}>
          <TrendingItemContainer>
            <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
            <TrendingDescription>
              <TrendingTitle isDark={isDark}>{title}</TrendingTitle>
              <TrendingChannelName isDark={isDark}>{name}</TrendingChannelName>
              <TrendingViewContainer>
                <TrendingViewName isDark={isDark}>
                  {viewsCount}
                  <TrandingSpan>views</TrandingSpan>
                </TrendingViewName>
                <TrendingViewName isDark={isDark}>
                  <Dot />
                  {dateDistance}
                </TrendingViewName>
              </TrendingViewContainer>
            </TrendingDescription>
          </TrendingItemContainer>
        </Navlink>
      )
    }}
  </SavedContext.Consumer>
)

export default TrendingVideoSection
