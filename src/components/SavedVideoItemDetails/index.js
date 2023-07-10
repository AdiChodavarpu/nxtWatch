import {formatDistanceToNow} from 'date-fns'
import SavedContext from '../../context/SavedContext'

import {
  SavedItemContainer,
  SavedImage,
  SavedDescriptionContainer,
  SavedItemHeading,
  SavedItemDescription,
  SaveViewsContainer,
  SavedViews,
  PublishedContainer,
  Dot,
  NavLinkElement,
} from './styledComponent'

const SavedVideoItemDetails = props => (
  <SavedContext.Consumer>
    {value => {
      const {isDark} = value
      const {SavedItem} = props
      const {
        id,
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = SavedItem

      const {name} = channel
      const dateDistance = formatDistanceToNow(new Date(publishedAt))

      return (
        <NavLinkElement to={`/videos/${id}`}>
          <SavedItemContainer>
            <SavedImage src={thumbnailUrl} alt={title} />
            <SavedDescriptionContainer>
              <SavedItemHeading isDark={isDark}>{title}</SavedItemHeading>
              <SavedItemDescription isDark={isDark}>
                {name}
              </SavedItemDescription>
              <SaveViewsContainer isDark={isDark}>
                <SavedViews isDark={isDark}>{viewCount} views</SavedViews>
                <PublishedContainer isDark={isDark}>
                  <Dot />
                  <SavedViews isDark={isDark}>{dateDistance}</SavedViews>
                </PublishedContainer>
              </SaveViewsContainer>
            </SavedDescriptionContainer>
          </SavedItemContainer>
        </NavLinkElement>
      )
    }}
  </SavedContext.Consumer>
)

export default SavedVideoItemDetails
