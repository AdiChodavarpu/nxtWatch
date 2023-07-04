import Cookies from 'js-cookie'
import {HiMoon} from 'react-icons/hi'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

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
} from './styledComponents'

const Header = () => {
  const onClickConfirm = () => Cookies.remove('jwt_token')
  const renderPopUp = () => (
    <Popup modal trigger={<LogoutButton type="button">Logout</LogoutButton>}>
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
  )

  return (
    <NavContainer>
      <NavItemsContainer>
        <WebSiteLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <NavOptionsContainer>
          <MoonButton type="button">
            <HiMoon />
          </MoonButton>

          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />

          {renderPopUp()}
        </NavOptionsContainer>
      </NavItemsContainer>
    </NavContainer>
  )
}

export default Header
