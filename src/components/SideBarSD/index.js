import {withRouter} from 'react-router-dom'
import {AiTwotoneHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import SavedContext from '../../context/SavedContext'

import {
  SideBarContainer,
  SideBarListContainer,
  SideBarListItems,
  SideBarListItemsContainer,
  ListCategory,
  NavLinks,
} from './styledComponent'

const SideBarSD = props => {
  const {location} = props
  const {pathname} = location

  return (
    <SavedContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <SideBarContainer>
            <SideBarListContainer>
              <NavLinks to="/">
                <SideBarListItems isDark={isDark} isActive={pathname === '/'}>
                  <SideBarListItemsContainer>
                    <AiTwotoneHome />
                    <ListCategory isDark={isDark}>Home</ListCategory>
                  </SideBarListItemsContainer>
                </SideBarListItems>
              </NavLinks>
              <NavLinks to="/trending">
                <SideBarListItems
                  isDark={isDark}
                  isActive={pathname === '/trending'}
                >
                  <SideBarListItemsContainer>
                    <AiFillFire />
                    <ListCategory isDark={isDark}>Trending</ListCategory>
                  </SideBarListItemsContainer>
                </SideBarListItems>
              </NavLinks>
              <NavLinks to="/gaming">
                <SideBarListItems
                  isDark={isDark}
                  isActive={pathname === '/gaming'}
                >
                  <SideBarListItemsContainer>
                    <SiYoutubegaming />
                    <ListCategory isDark={isDark}>Gaming</ListCategory>
                  </SideBarListItemsContainer>
                </SideBarListItems>
              </NavLinks>
              <NavLinks to="/saved-videos">
                <SideBarListItems
                  isDark={isDark}
                  isActive={pathname === '/saved-videos'}
                >
                  <SideBarListItemsContainer>
                    <MdPlaylistAdd />
                    <ListCategory isDark={isDark}>Saved videos</ListCategory>
                  </SideBarListItemsContainer>
                </SideBarListItems>
              </NavLinks>
            </SideBarListContainer>
          </SideBarContainer>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default withRouter(SideBarSD)
