import SavedContext from '../../context/SavedContext'

import {
  SideBarContainer,
  SideBarListContainer,
  SideBarListItems,
  ListCategory,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  ContactContainer,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaSites,
  ContactUsDescription,
  NavLinks,
} from './styledComponents'

const SideBar = () => (
  <SavedContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SideBarContainer isDark={isDark}>
          <SideBarListContainer>
            <NavLinks to="/">
              <SideBarListItems>
                <HomeIcon isDark={isDark} />
                <ListCategory isDark={isDark}>Home</ListCategory>
              </SideBarListItems>
            </NavLinks>
            <NavLinks to="/trending">
              <SideBarListItems>
                <TrendingIcon isDark={isDark} />
                <ListCategory isDark={isDark}>Trending</ListCategory>
              </SideBarListItems>
            </NavLinks>
            <NavLinks to="/gaming">
              <SideBarListItems>
                <GamingIcon isDark={isDark} />
                <ListCategory isDark={isDark}>Gaming</ListCategory>
              </SideBarListItems>
            </NavLinks>
            <NavLinks to="/saved-videos">
              <SideBarListItems>
                <SavedIcon isDark={isDark} />
                <ListCategory isDark={isDark}>Saved videos</ListCategory>
              </SideBarListItems>
            </NavLinks>
          </SideBarListContainer>
          <ContactContainer>
            <ContactUsHeading isDark={isDark}>CONTACT US</ContactUsHeading>
            <SocialMediaContainer>
              <SocialMediaSites
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaSites
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaSites
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <ContactUsDescription isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactContainer>
        </SideBarContainer>
      )
    }}
  </SavedContext.Consumer>
)

export default SideBar
