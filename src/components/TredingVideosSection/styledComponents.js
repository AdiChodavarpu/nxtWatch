import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const Dot = styled(BsDot)`
  padding-top: 4px;
  height: 15px;
  width: 19px;
`

export const TrendingItemContainer = styled.li`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`
export const TrendingImage = styled.img`
  height: 180px;
  width: 320px;
  @media screen and (max-width: 767px) {
    width: 280px;
    margin-bottom: 10px;
  }
`
export const TrendingDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
`
export const TrendingTitle = styled.h1`
  color: ${props => (props.isDark ? '#f4f4f4' : '#383838')};
  font-size: 20px;
  font-family: 'Roboto';
  margin: 0px;
  width: 90%;
`
export const TrendingChannelName = styled.p`
  color: ${props => (props.isDark ? ' #ebebeb' : '#606060')};
  font-size: 16px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 10px;
`
export const TrendingViewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const TrendingViewName = styled(TrendingChannelName)`
  margin-right: 10px;
`

export const TrandingSpan = styled.span`
  font-size: 14px;
`

export const Navlink = styled(Link)`
  text-decoration: none;
`
