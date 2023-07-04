import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingItemContainer = styled.li`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 15px;
`
export const TrendingImage = styled.img`
  height: 180px;
  width: 320px;
`
export const TrendingDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
`
export const TrendingTitle = styled.h1`
  color: #231f20;
  font-size: 20px;
  font-family: 'Roboto';
  margin: 0px;
  width: 90%;
`
export const TrendingChannelName = styled.p`
  color: #606060;
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
