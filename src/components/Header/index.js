import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import SavedContext from '../../context/SavedContext'

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
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const Header = () => (
  <SavedContext.Consumer>
    {value => {
      const {isDark, updateTheme} = value

      const UpdatethemeLogo = () => {
        updateTheme()
      }

      const onClickConfirm = () => Cookies.remove('jwt_token')
      const renderPopUp = () => (
        <Popup
          className="popup-content"
          modal
          trigger={<LogoutButton type="button">Logout</LogoutButton>}
        >
          {close => (
            <>
              <PopDisplayContainer>
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
        </Popup>
      )

      const renderSmallDevicePopUp = () => (
        <>
          <Popup
            className="popup-contents"
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
              <PopDisplayContainer>
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
          </Popup>
        </>
      )

      const HamburgerIconPopUp = () => (
        <Popup
          className="popup-content"
          modal
          trigger={
            <HamButton type="button" isDark={isDark}>
              <HamIcon />
            </HamButton>
          }
        >
          {close => (
            <PopupItemsContainer>
              <CloseButton type="button" onClick={() => close()}>
                <CloseIcon />
              </CloseButton>
              <HamItemsContainer>
                <SideBarSD />
              </HamItemsContainer>
            </PopupItemsContainer>
          )}
        </Popup>
      )

      const ThemeLogo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavContainer isDark={isDark}>
          <NavItemsContainer>
            <a href="/">
              <WebSiteLogo src={ThemeLogo} />
            </a>

            <NavOptionsContainer>
              <MoonButton
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

            <NavOptionsSmallDevicesContainer>
              <MoonButton
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

export default Header
