import {
  NotFoundContainerElement,
  MainContainer,
  NotFoundContainer,
  NotFoundMainContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import SavedContext from '../../context/SavedContext'

import Header from '../Header'
import SideBar from '../sideBar'

const NotFound = () => (
  <SavedContext.Consumer>
    {value => {
      const {isDark} = value

      const NotFoundImages = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const renderNotFound = () => (
        <NotFoundMainContainer>
          <NotFoundImage src={NotFoundImages} alt="no saved videos" />
          <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
          <NotFoundDescription isDark={isDark}>
            We are sorry,the page you requested could not be found
          </NotFoundDescription>
        </NotFoundMainContainer>
      )

      return (
        <NotFoundContainerElement isDark={isDark}>
          <Header />
          <MainContainer>
            <SideBar />
            <NotFoundContainer>{renderNotFound()}</NotFoundContainer>
          </MainContainer>
        </NotFoundContainerElement>
      )
    }}
  </SavedContext.Consumer>
)

export default NotFound
