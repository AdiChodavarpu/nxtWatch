import {
  GamingListItemContainer,
  GamingHeading,
  GamingImage,
  GamingViews,
  Navlink,
} from './styledComponent'

const GamingVideosSection = props => {
  const {EachVideo} = props
  const {id, title, thumbnailUrl, viewCount} = EachVideo
  return (
    <Navlink to={`/videos/${id}`}>
      <GamingListItemContainer>
        <GamingImage src={thumbnailUrl} alt={title} />
        <GamingHeading> {title}</GamingHeading>
        <GamingViews>{viewCount} Watching Worldwide</GamingViews>
      </GamingListItemContainer>
    </Navlink>
  )
}

export default GamingVideosSection
