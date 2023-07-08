import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const TrendingContainerElement = styled.div`
  background-color: ${props => (props.isDark ? ' #0f0f0f' : ' #f9f9f9')};
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const TrendingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
`
export const TrendingBannerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 110px;
  width: 100%;
  background-color: #f1f5f9;
`

export const TrendingIcon = styled(FaFire)`
  color: #ff0b37;
  height: 25px;
  width: 25px;
`
export const TrendingIconContaier = styled.div`
  background-color: #cbd5e1;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
`
export const TrendingHeading = styled.h1`
  color: #231f20;
  font-size: 35px;
  font-family: 'Roboto';
  margin-left: 15px;
`
export const TrendingMainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 20px;
`
export const TrendingVideoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  list-style-type: none;
`
export const FailureContainer = styled.div`
  height: 100vh;
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
