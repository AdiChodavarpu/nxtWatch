import {SiYoutubegaming} from 'react-icons/si'
import styled from 'styled-components'

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
  background-color: #f1f5f9;
`

export const GamingIcon = styled(SiYoutubegaming)`
  color: #ff0b37;
  height: 25px;
  width: 25px;
`
export const GamingIconContaier = styled.div`
  background-color: #cbd5e1;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
`
export const GamingHeading = styled.h1`
  color: #231f20;
  font-size: 35px;
  font-family: 'Roboto';
  margin-left: 15px;
`
export const GamingVideosContainer = styled.div`
  background-color: red;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  background-color: #f8fafc;
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
