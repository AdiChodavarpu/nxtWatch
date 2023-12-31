import styled from 'styled-components'

import {AiTwotoneHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 250px;
  background-color: ${props => (props.isDark ? '#181818' : ' #f9f9f9')};
  height: 100vh;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SideBarListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 230px;
`
export const SideBarListItems = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  background-color: ${props =>
    props.isDark ? props.isActive && ' #313131' : props.isActive && '#e2e8f0'};
`
export const ListItemButton = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  cursor: pointer;
`

export const ListCategory = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  margin-left: 15px;
  color: ${props => (props.isDark ? ' #f9f9f9' : '#181818')};
`

export const HomeIcon = styled(AiTwotoneHome)``
export const TrendingIcon = styled(AiFillFire)``
export const GamingIcon = styled(SiYoutubegaming)``
export const SavedIcon = styled(MdPlaylistAdd)``

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
  padding-left: 20px;
`
export const ContactUsHeading = styled.p`
  color: ${props => (props.isDark ? ' #f9f9f9' : '#181818')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`
export const SocialMediaSites = styled.img`
  height: 30px;
  width: 30px;
`
export const ContactUsDescription = styled.p`
  color: ${props => (props.isDark ? ' #f9f9f9' : '#181818')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
