import {formatDistanceToNow} from 'date-fns'
import SavedContext from '../../context/SavedContext'

import {
  SavedItemContainer,
  SavedImage,
  SavedDescriptionContainer,
  SavedItemTitle,
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
            <SavedImage src={thumbnailUrl} alt="video thumbnail" />
            <SavedDescriptionContainer>
              <SavedItemTitle isDark={isDark}>{title}</SavedItemTitle>
              <SavedItemDescription isDark={isDark}>
                {name}
              </SavedItemDescription>
              <SaveViewsContainer isDark={isDark}>
                <SavedViews as="p" isDark={isDark}>
                  {viewCount}
                  <span>views</span>
                </SavedViews>
                <PublishedContainer isDark={isDark}>
                  <Dot />
                  <SavedViews as="p" isDark={isDark}>
                    {dateDistance}
                  </SavedViews>
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
