import {
  SavedContainerElement,
  MainContainer,
  SavedContainer,
  SavedIcon,
  SavedBannerContainer,
  SavedIconContainer,
  SavedHeading,
  SavedMainContainer,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedDescription,
} from './styledComponents'

import SavedContext from '../../context/SavedContext'
import SavedVideoItemDetails from '../SavedVideoItemDetails'

import Header from '../Header'
import SideBar from '../sideBar'

const SavedVideos = () => (
  <SavedContext.Consumer>
    {value => {
      const {SavedItemList, isDark} = value

      const TrendingBanner = () => (
        <SavedBannerContainer isDark={isDark} data-testid="banner">
          <SavedIconContainer isDark={isDark}>
            <SavedIcon />
          </SavedIconContainer>
          <SavedHeading isDark={isDark}>Saved Videos</SavedHeading>
        </SavedBannerContainer>
      )

      const NoSavedItems = () => (
        <NoSavedContainer>
          <NoSavedImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedHeading isDark={isDark}>No saved videos found</NoSavedHeading>
          <NoSavedDescription isDark={isDark}>
            You can save your videos while watching them
          </NoSavedDescription>
        </NoSavedContainer>
      )

      const renderSavedVideosList = () => (
        <SavedMainContainer>
          {SavedItemList.length > 0
            ? SavedItemList.map(eachitem => (
                <SavedVideoItemDetails key={eachitem.id} SavedItem={eachitem} />
              ))
            : NoSavedItems()}
        </SavedMainContainer>
      )

      return (
        <SavedContainerElement isDark={isDark} data-testid="savedVideos">
          <Header />
          <MainContainer>
            <SideBar />
            <SavedContainer>
              {TrendingBanner()}
              {renderSavedVideosList()}
            </SavedContainer>
          </MainContainer>
        </SavedContainerElement>
      )
    }}
  </SavedContext.Consumer>
)

export default SavedVideos
