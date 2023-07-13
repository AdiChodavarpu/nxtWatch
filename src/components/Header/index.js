import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import SavedContext from '../../context/SavedContext'
import 'reactjs-popup/dist/index.css'

import SideBarSD from '../SideBarSD'
import './index.css'

import {
  NavContainer,
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
        history.replace('./login')
      }

      const renderPopUp = () => (
        <LogoutPopup
          isDark={isDark}
          modal
          trigger={<LogoutButton type="button">Logout</LogoutButton>}
        >
          {close => (
            <>
              <PopDisplayContainer isDark={isDark}>
                <PopUpHeading>Are you sure you want to logout?</PopUpHeading>
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

      const renderSmallDevicePopUp = () => (
        <>
          <LogoutPopup
            isDark={isDark}
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
              <PopDisplayContainer isDark={isDark}>
                <PopUpHeading>Are you sure you want to logout?</PopUpHeading>
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

      const HamburgerIconPopUp = () => (
        <HamburgerPopup
          isDark={isDark}
          modal
          trigger={
            <HamButton type="button" isDark={isDark}>
              <HamIcon />
            </HamButton>
          }
          className="hamburger-popup"
        >
          {close => (
            <PopupItemsContainer isDark={isDark}>
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

      const ThemeLogo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavContainer isDark={isDark}>
          <NavItemsContainer>
            <a href="/">
              <WebSiteLogo src={ThemeLogo} alt="website logo" />
            </a>

            <NavOptionsContainer>
              <MoonButton
                type="button"
                isDark={isDark}
                onClick={UpdatethemeLogo}
                data-testid="theme"
              >
                {isDark ? <LightICon /> : <MoonICon />}
              </MoonButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              {renderPopUp()}
            </NavOptionsContainer>

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
        </NavContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default withRouter(Header)
