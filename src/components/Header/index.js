import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

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
  PopDisplayContainer,
  PopUpHeading,
  PopUpButtonsContainer,
  CancelButton,
  ConfirmButton,
  MoonICon,
  NavOptionsSmallDevicesContainer,
  HamItemsContainer,
  HamIcon,
  LogoutIcon,
  LogoutBtn,
  CloseIcon,
  CloseButton,
  PopupItemsContainer,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const Header = () => {
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
          <LogoutBtn type="button">
            <LogoutIcon />
          </LogoutBtn>
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

  const ReactPopUp = () => (
    <Popup className="popup-content" modal trigger={<HamIcon />}>
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

  return (
    <NavContainer>
      <NavItemsContainer>
        <WebSiteLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <NavOptionsContainer>
          <MoonButton type="button">
            <MoonICon />
          </MoonButton>
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          {renderPopUp()}
        </NavOptionsContainer>

        <NavOptionsSmallDevicesContainer>
          <MoonButton type="button">
            <MoonICon />
          </MoonButton>
          {ReactPopUp()}

          {renderSmallDevicePopUp()}
        </NavOptionsSmallDevicesContainer>
      </NavItemsContainer>
    </NavContainer>
  )
}

export default Header
