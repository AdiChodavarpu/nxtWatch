import {
  GamingListItemContainer,
  GamingHeading,
  GamingImage,
  GamingViews,
  Navlink,
} from './styledComponent'

import SavedContext from '../../context/SavedContext'

const GamingVideosSection = props => (
  <SavedContext.Consumer>
    {value => {
      const {isDark} = value
      const {EachVideo} = props
      const {id, title, thumbnailUrl, viewCount} = EachVideo
      return (
        <Navlink to={`/videos/${id}`}>
          <GamingListItemContainer>
            <GamingImage src={thumbnailUrl} alt={title} />
            <GamingHeading isDark={isDark}> {title}</GamingHeading>
            <GamingViews isDark={isDark}>
              {viewCount} Watching Worldwide
            </GamingViews>
          </GamingListItemContainer>
        </Navlink>
      )
    }}
  </SavedContext.Consumer>
)

export default GamingVideosSection
