import {formatDistanceToNow} from 'date-fns'

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
  Navlink,
} from './styledComponent'

const SavedVideoItemDetails = props => {
  const {SavedItem} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = SavedItem

  const {name} = channel
  const dateDistance = formatDistanceToNow(new Date(publishedAt))

  return (
    <Navlink to={`/videos/${id}`}>
      <SavedItemContainer>
        <SavedImage src={thumbnailUrl} alt={title} />
        <SavedDescriptionContainer>
          <SavedItemHeading>{title}</SavedItemHeading>
          <SavedItemDescription>{name}</SavedItemDescription>
          <SaveViewsContainer>
            <SavedViews>{viewCount} views</SavedViews>
            <PublishedContainer>
              <Dot />
              <SavedViews>{dateDistance}</SavedViews>
            </PublishedContainer>
          </SaveViewsContainer>
        </SavedDescriptionContainer>
      </SavedItemContainer>
    </Navlink>
  )
}

export default SavedVideoItemDetails
