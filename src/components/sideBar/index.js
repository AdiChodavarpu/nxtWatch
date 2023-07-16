import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import SavedContext from '../../context/SavedContext'
import './index.css'

import {
  SideBarContainer,
  SideBarListContainer,
  SideBarListItems,
  ListCategory,
  ListItemButton,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  ContactContainer,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaSites,
  ContactUsDescription,
} from './styledComponents'

class SideBar extends Component {
  render() {
    const {location} = this.props
    const {pathname} = location

    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value

          const homeColor = pathname === '/' ? 'active-icon' : 'inactive-icon'
          const trendingColor =
            pathname === '/trending' ? 'active-icon' : 'inactive-icon'
          const gamingColor =
            pathname === '/gaming' ? 'active-icon' : 'inactive-icon'
          const savedColor =
            pathname === '/saved-videos' ? 'active-icon' : 'inactive-icon'

          return (
            <SideBarContainer isDark={isDark}>
              <SideBarListContainer>
                <Link to="/" className="nav-link">
                  <SideBarListItems isDark={isDark} isActive={pathname === '/'}>
                    <ListItemButton type="button">
                      <HomeIcon className={homeColor} />

                      <ListCategory isDark={isDark}>Home</ListCategory>
                    </ListItemButton>
                  </SideBarListItems>
                </Link>
                <Link to="/trending" className="nav-link">
                  <SideBarListItems
                    isDark={isDark}
                    isActive={pathname === '/trending'}
                  >
                    <ListItemButton type="button">
                      <TrendingIcon className={trendingColor} />
                      <ListCategory isDark={isDark}>Trending</ListCategory>
                    </ListItemButton>
                  </SideBarListItems>
                </Link>
                <Link to="/gaming" className="nav-link">
                  <SideBarListItems
                    isDark={isDark}
                    isActive={pathname === '/gaming'}
                  >
                    <ListItemButton type="button">
                      <GamingIcon className={gamingColor} />
                      <ListCategory isDark={isDark}>Gaming</ListCategory>
                    </ListItemButton>
                  </SideBarListItems>
                </Link>
                <Link to="/saved-videos" className="nav-link">
                  <SideBarListItems
                    isDark={isDark}
                    isActive={pathname === '/saved-videos'}
                  >
                    <ListItemButton type="button">
                      <SavedIcon className={savedColor} />
                      <ListCategory isDark={isDark}>Saved videos</ListCategory>
                    </ListItemButton>
                  </SideBarListItems>
                </Link>
              </SideBarListContainer>
              <ContactContainer>
                <ContactUsHeading as="p" isDark={isDark}>
                  CONTACT US
                </ContactUsHeading>
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
  }
}

export default withRouter(SideBar)
