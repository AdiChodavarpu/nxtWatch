import {SiYoutubegaming} from 'react-icons/si'
import styled from 'styled-components'

export const GamingContainerElement = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #f9f9f9')};
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const GamingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
`
export const GamingBannerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 110px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#212121' : ' #f1f5f9')};
`

export const GamingIcon = styled(SiYoutubegaming)`
  color: #ff0b37;
  height: 25px;
  width: 25px;
`
export const GamingIconContaier = styled.div`
  border-radius: 50%;
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #cbd5e1')};
`
export const GamingHeading = styled.h1`
  color: ${props => (props.isDark ? ' #f9f9f9' : '#231f20')};
  font-size: 35px;
  font-family: 'Roboto';
  margin-left: 15px;
`
export const GamingVideosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
`
export const GamingVideosListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 5px;
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
  color: ${props => (!props.isDark ? '#231f20' : ' #f9f9f9')};
  font-size: 30px;
  font-family: 'Roboto';
  margin: 10px;
`

export const FailureDescription = styled.p`
  color: ${props => (!props.isDark ? '#231f20' : ' #f9f9f9')};
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
