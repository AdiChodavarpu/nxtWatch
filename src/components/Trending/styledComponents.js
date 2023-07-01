import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

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
`
export const TrendingBannerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 130px;
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
  background-color: #e2e8f0;
  height: 100vh;
  width: 100%;
`
