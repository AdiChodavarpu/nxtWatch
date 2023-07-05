import {
  MainContainer,
  SavedContainer,
  SavedIcon,
  SavedBannerContainer,
  SavedIconContainer,
  SavedHeading,
  SavedMainContainer,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'

const SavedVideos = () => {
  const TrendingBanner = () => (
    <SavedBannerContainer>
      <SavedIconContainer>
        <SavedIcon />
      </SavedIconContainer>
      <SavedHeading>Trending</SavedHeading>
    </SavedBannerContainer>
  )

  const renderSavedVideosList = () => (
    <SavedMainContainer>dfs</SavedMainContainer>
  )

  return (
    <>
      <Header />
      <MainContainer>
        <SideBar />
        <SavedContainer>
          {TrendingBanner()}
          {renderSavedVideosList()}
        </SavedContainer>
      </MainContainer>
    </>
  )
}

export default SavedVideos
