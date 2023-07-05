import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const SavedContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  background-color: #f8fafc;
`
export const SavedBannerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 110px;
  width: 100%;
  background-color: #f1f5f9;
`

export const SavedIcon = styled(FaFire)`
  color: #ff0b37;
  height: 25px;
  width: 25px;
`
export const SavedIconContainer = styled.div`
  background-color: #cbd5e1;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
`
export const SavedHeading = styled.h1`
  color: #231f20;
  font-size: 35px;
  font-family: 'Roboto';
  margin-left: 15px;
`
export const SavedMainContainer = styled.ul`
  min-height: 100vh;
  width: 100%;
  padding-top: 20px;
  background-color: #f8fafc;
  padding: 30px;
  margin-top: 25px;
`
