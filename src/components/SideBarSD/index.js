import {AiTwotoneHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SideBarContainer,
  SideBarListContainer,
  SideBarListItems,
  ListCategory,
  NavLinks,
} from './styledComponent'

const SideBarSD = () => (
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
  </SideBarContainer>
)

export default SideBarSD
