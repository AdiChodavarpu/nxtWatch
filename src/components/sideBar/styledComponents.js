import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 250px;
  background-color: ${props => (props.isDark ? '#181818' : ' #f9f9f9')};
  height: 100vh;
  padding-left: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SideBarListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const SideBarListItems = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ListCategory = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  margin-left: 15px;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
`
export const ContactUsHeading = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
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
export const NavLinks = styled(Link)`
  text-decoration: none;
`
