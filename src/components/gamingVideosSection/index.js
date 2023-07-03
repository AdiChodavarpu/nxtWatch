import {
  GamingListItemContainer,
  GamingHeading,
  GamingImage,
  GamingViews,
} from './styledComponent'

const GamingVideosSection = props => {
  const {EachVideo} = props
  const {id, title, thumbnailUrl, viewCount} = EachVideo
  return (
    <GamingListItemContainer>
      <GamingImage src={thumbnailUrl} alt={title} />
      <GamingHeading> {title}</GamingHeading>
      <GamingViews>{viewCount} Watching Worldwide</GamingViews>
    </GamingListItemContainer>
  )
}

export default GamingVideosSection
