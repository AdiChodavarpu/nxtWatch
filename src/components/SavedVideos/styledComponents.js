import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const SavedContainerElement = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #f9f9f9')};
`

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
`
export const SavedBannerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 110px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#212121' : ' #f1f5f9')};
`

export const SavedIcon = styled(FaFire)`
  color: #ff0b37;
  height: 25px;
  width: 25px;
`
export const SavedIconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #cbd5e1')};

  border-radius: 50%;
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
`
export const SavedHeading = styled.h1`
  color: ${props => (props.isDark ? ' #f9f9f9' : '#231f20')};
  font-size: 35px;

  margin-left: 15px;
`
export const SavedMainContainer = styled.ul`
  min-height: 100vh;
  width: 100%;
  padding-top: 20px;
  padding: 30px;
  margin-top: 25px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const NoSavedContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 60vh;
    width: 100%;
  }
`
export const NoSavedImage = styled.img`
  height: 350px;
  width: 500px;

  @media screen and (max-width: 767px) {
    height: 230px;
    width: 300px;
  }
`
export const NoSavedHeading = styled.h1`
  color: ${props => (props.isDark ? ' #f9f9f9' : '#231f20')};
  font-size: 30px;
  font-family: 'Roboto';
  margin: 15px;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin: 8px;
  }
`

export const NoSavedDescription = styled.p`
  color: ${props => (props.isDark ? ' #f9f9f9' : '#231f20')};
  font-size: 18px;
  font-family: 'Roboto';
  margin: 5px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
