import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import SavedContext from '../../context/SavedContext'
import 'reactjs-popup/dist/index.css'

import SideBarSD from '../SideBarSD'
import './index.css'

import {
  NavLargeContainer,
  NavSmallContainer,
  NavItemsContainer,
  WebSiteLogo,
  NavOptionsContainer,
  ProfileImage,
  LogoutButton,
  MoonButton,
  LightICon,
  PopDisplayContainer,
  PopUpHeading,
  PopUpButtonsContainer,
  CancelButton,
  ConfirmButton,
  MoonICon,
  NavOptionsSmallDevicesContainer,
  HamItemsContainer,
  HamIcon,
  HamButton,
  LogoutIcon,
  LogoutBtn,
  CloseIcon,
  CloseButton,
  PopupItemsContainer,
  ReactPopContainer,
  LogoutPopup,
  HamburgerPopup,
} from './styledComponents'

const Header = props => (
  <SavedContext.Consumer>
    {value => {
      const {isDark, updateTheme} = value

      const UpdatethemeLogo = () => {
        updateTheme()
      }

      const onClickConfirm = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const renderPopUp = () => {
        const logoutPopUp = isDark
          ? 'logout-large-dark-popup'
          : 'logout-large-light-popup'
        return (
          <LogoutPopup
            modal
            trigger={<LogoutButton type="button">Logout</LogoutButton>}
          >
            {close => (
              <>
                <PopDisplayContainer className={logoutPopUp} isDark={isDark}>
                  <PopUpHeading as="p" isDark={isDark}>
                    Are you sure, you want to logout?
                  </PopUpHeading>
                  <PopUpButtonsContainer>
                    <CancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickConfirm}>
                      Confirm
                    </ConfirmButton>
                  </PopUpButtonsContainer>
                </PopDisplayContainer>
              </>
            )}
          </LogoutPopup>
        )
      }

      const renderSmallDevicePopUp = () => {
        const logoutPop = isDark
          ? 'logout-small-dark-popup'
          : 'logout-small-light-popup'
        return (
          <>
            <LogoutPopup
              modal
              trigger={
                <ReactPopContainer>
                  <LogoutBtn type="button" isDark={isDark}>
                    <LogoutIcon />
                  </LogoutBtn>
                </ReactPopContainer>
              }
            >
              {close => (
                <PopDisplayContainer className={logoutPop}>
                  <PopUpHeading as="p" isDark={isDark}>
                    Are you sure, you want to logout?
                  </PopUpHeading>
                  <PopUpButtonsContainer>
                    <CancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickConfirm}>
                      Confirm
                    </ConfirmButton>
                  </PopUpButtonsContainer>
                </PopDisplayContainer>
              )}
            </LogoutPopup>
          </>
        )
      }

      const HamburgerIconPopUp = () => {
        const hamClassName = isDark ? 'hamburger-popup-dark' : 'hamburger-popup'
        return (
          <HamburgerPopup
            modal
            trigger={
              <HamButton type="button" isDark={isDark}>
                <HamIcon />
              </HamButton>
            }
          >
            {close => (
              <PopupItemsContainer className={hamClassName} isDark={isDark}>
                <CloseButton type="button" onClick={() => close()}>
                  <CloseIcon />
                </CloseButton>
                <HamItemsContainer isDark={isDark}>
                  <SideBarSD />
                </HamItemsContainer>
              </PopupItemsContainer>
            )}
          </HamburgerPopup>
        )
      }

      const ThemeLogo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <>
          <NavLargeContainer isDark={isDark}>
            <NavItemsContainer>
              <a href="/">
                <WebSiteLogo src={ThemeLogo} alt="website logo" />
              </a>

              <NavOptionsContainer>
                <MoonButton
                  data-testid="theme"
                  type="button"
                  isDark={isDark}
                  onClick={UpdatethemeLogo}
                >
                  {isDark ? <LightICon /> : <MoonICon />}
                </MoonButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                {renderPopUp()}
              </NavOptionsContainer>
            </NavItemsContainer>
          </NavLargeContainer>

          <NavSmallContainer isDark={isDark}>
            <NavItemsContainer>
              <a href="/">
                <WebSiteLogo src={ThemeLogo} alt="website logo" />
              </a>

              <NavOptionsSmallDevicesContainer>
                <MoonButton
                  data-testid="theme"
                  type="button"
                  isDark={isDark}
                  onClick={UpdatethemeLogo}
                >
                  {isDark ? <LightICon /> : <MoonICon />}
                </MoonButton>
                {HamburgerIconPopUp()}
                {renderSmallDevicePopUp()}
              </NavOptionsSmallDevicesContainer>
            </NavItemsContainer>
          </NavSmallContainer>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default withRouter(Header)
