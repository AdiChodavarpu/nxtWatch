import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navlink = styled(Link)`
  text-decoration: none;
`

export const GamingListItemContainer = styled.li`
  margin: 20px;
  min-height: 380px;
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const GamingImage = styled.img`
  height: 330px;
  width: 260px;
`

export const GamingHeading = styled.h1`
  color: ${props => (props.isDark ? '#f4f4f4' : '#383838')};
  font-size: 21px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 10px;
  margin-bottom: 5px;
`
export const GamingViews = styled.p`
  color: ${props => (props.isDark ? ' #ebebeb' : '#606060')};
  font-size: 16px;
  font-family: 'Roboto';
  margin: 0px;
`
export const FailureContainer = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 250px;
  width: 300px;
`
export const FailureHeading = styled.h1`
  color: #231f20;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 10px;
`

export const FailureDescription = styled.p`
  color: #231f20;
  font-size: 18px;
  font-family: 'Roboto';
  margin: 5px;
`
export const RetryButton = styled.button`
  color: #ffffff;
  height: 36px;
  width: 110px;
  border-radius: 5px;
  border: none;
  background-color: #00306e;
  margin-top: 20px;
`
