import {AiTwotoneHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SideBarContainer,
  SideBarListContainer,
  SideBarListItems,
  ListCategory,
  ContactContainer,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaSites,
  ContactUsDescription,
  NavLinks,
} from './styledComponents'

const SideBar = () => (
  <SideBarContainer>
    <SideBarListContainer>
      <NavLinks to="/">
        <SideBarListItems>
          <AiTwotoneHome /> <ListCategory>Home</ListCategory>
        </SideBarListItems>
      </NavLinks>
      <NavLinks to="/trending">
        <SideBarListItems>
          <AiFillFire /> <ListCategory>Trending</ListCategory>
        </SideBarListItems>
      </NavLinks>
      <NavLinks to="/gaming">
        <SideBarListItems>
          <SiYoutubegaming /> <ListCategory>Gaming</ListCategory>
        </SideBarListItems>
      </NavLinks>
      <NavLinks to="/saved-videos">
        <SideBarListItems>
          <MdPlaylistAdd /> <ListCategory>Saved videos</ListCategory>
        </SideBarListItems>
      </NavLinks>
    </SideBarListContainer>
    <ContactContainer>
      <ContactUsHeading>CONTACT US</ContactUsHeading>
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
      <ContactUsDescription>
        Enjoy! Now to see your channels and recommendations!
      </ContactUsDescription>
    </ContactContainer>
  </SideBarContainer>
)

export default SideBar
