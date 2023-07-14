import {Link, withRouter} from 'react-router-dom'
import {AiTwotoneHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import SavedContext from '../../context/SavedContext'
import './index.css'

import {
  SideBarContainer,
  SideBarListContainer,
  SideBarListItems,
  SideBarListItemsContainer,
  ListCategory,
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
              <Link to="/" className="nav-link">
                <SideBarListItems isDark={isDark} isActive={pathname === '/'}>
                  <SideBarListItemsContainer>
                    <AiTwotoneHome />
                    <ListCategory isDark={isDark}>Home</ListCategory>
                  </SideBarListItemsContainer>
                </SideBarListItems>
              </Link>
              <Link to="/trending" className="nav-link">
                <SideBarListItems
                  isDark={isDark}
                  isActive={pathname === '/trending'}
                >
                  <SideBarListItemsContainer>
                    <AiFillFire />
                    <ListCategory isDark={isDark}>Trending</ListCategory>
                  </SideBarListItemsContainer>
                </SideBarListItems>
              </Link>
              <Link to="/gaming" className="nav-link">
                <SideBarListItems
                  isDark={isDark}
                  isActive={pathname === '/gaming'}
                >
                  <SideBarListItemsContainer>
                    <SiYoutubegaming />
                    <ListCategory isDark={isDark}>Gaming</ListCategory>
                  </SideBarListItemsContainer>
                </SideBarListItems>
              </Link>
              <Link to="/saved-videos" className="nav-link">
                <SideBarListItems
                  isDark={isDark}
                  isActive={pathname === '/saved-videos'}
                >
                  <SideBarListItemsContainer>
                    <MdPlaylistAdd />
                    <ListCategory isDark={isDark}>Saved videos</ListCategory>
                  </SideBarListItemsContainer>
                </SideBarListItems>
              </Link>
            </SideBarListContainer>
          </SideBarContainer>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default withRouter(SideBarSD)
