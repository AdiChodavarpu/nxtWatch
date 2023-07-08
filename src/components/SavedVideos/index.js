import {
  SavedContainerElement,
  MainContainer,
  SavedContainer,
  SavedIcon,
  SavedBannerContainer,
  SavedIconContainer,
  SavedHeading,
  SavedMainContainer,
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
        <SavedBannerContainer data-testid="banner">
          <SavedIconContainer>
            <SavedIcon />
          </SavedIconContainer>
          <SavedHeading>Saved</SavedHeading>
        </SavedBannerContainer>
      )

      const renderSavedVideosList = () => (
        <SavedMainContainer>
          {SavedItemList.map(eachitem => (
            <SavedVideoItemDetails key={eachitem.id} SavedItem={eachitem} />
          ))}
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
