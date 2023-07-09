import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  width: 280px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content:flex-start
  align-items: flex-start;
`

export const ThumbnailImage = styled.img`
  height: 150px;
  width: 280px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 10px;
`
export const ProfileLogo = styled.img`
  height: 30px;
  width: 30px;
`
export const VideoDescriptionDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5px;
`
export const VideoTitle = styled.h1`
  color: ${props => (props.isDark ? '#ebebeb' : '#383838')};
  font-size: 15px;
  font-family: 'Roboto';
  margin: 0px;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDark ? '#ebebeb' : ' #606060')};
  font-size: 15px;
  font-family: 'Roboto';

  margin: 0px;
  margin-top: 5px;
`
export const ViewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PostedDateContainer = styled(ViewsContainer)``

export const ViewCount = styled.p`
  color: ${props => (props.isDark ? '#ebebeb' : ' #606060')};
  font-size: 13px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 5px;
  margin-right: 5px;
`
export const SpanElement = styled.span`
  font-size: 13px;
`

export const Dot = styled(BsDot)`
  padding-top: 4px;
  height: 13px;
  width: 13px;
`
