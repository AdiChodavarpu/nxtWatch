import {HiMoon} from 'react-icons/hi'

import {
  NavContainer,
  NavItemsContainer,
  WebSiteLogo,
  NavOptionsContainer,
  ProfileImage,
  LogoutButton,
  MoonButton,
} from './styledComponents'

const Header = () => (
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
        <LogoutButton type="button">Logout</LogoutButton>
      </NavOptionsContainer>
    </NavItemsContainer>
  </NavContainer>
)

export default Header
