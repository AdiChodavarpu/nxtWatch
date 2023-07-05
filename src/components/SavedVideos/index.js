import {
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

const SavedVideos = () => {
  const TrendingBanner = () => (
    <SavedBannerContainer>
      <SavedIconContainer>
        <SavedIcon />
      </SavedIconContainer>
      <SavedHeading>Saved</SavedHeading>
    </SavedBannerContainer>
  )

  const renderSavedVideosList = () => {
    console.log('sdf')

    return (
      <SavedContext.Consumer>
        {value => {
          const {SavedItemList} = value
          console.log(SavedItemList)
          return (
            <SavedMainContainer>
              {SavedItemList.map(eachitem => (
                <SavedVideoItemDetails key={eachitem.id} SavedItem={eachitem} />
              ))}
            </SavedMainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

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
