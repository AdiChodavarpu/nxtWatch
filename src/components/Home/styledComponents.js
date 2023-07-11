import {IoMdClose} from 'react-icons/io'
import {BiSearch} from 'react-icons/bi'
import styled from 'styled-components'

export const HomeContainerElement = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : ' #f9f9f9')};
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`
export const HomeBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  padding: 25px;
  width: 100%;
  min-height: 35vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`
export const BannerImage = styled.img`
  height: 35px;
  width: 150px;
`
export const BannerDescription = styled.p`
  color: #212121;
  font-size: 18px;
  font-family: 'Roboto';
`
export const GetItNowButton = styled.button`
  color: #1e293b;
  height: 35px;
  width: 120px;
  border-radius: 2px;
  border: 1px solid #1e293b;
  background-color: transparent;
`
export const CloseIcon = styled(IoMdClose)`
  height: 15px;
  width: 15px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-start;
`
export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  height: 100vh;
  padding: 20px;
`
export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #909090;
  border-radius: 5px;
  margin-left: 13px;
`
export const SearchInputElement = styled.input`
  height: 28px;
  width: 300px;
  border: none;
  background-color: transparent;
  padding-left: 15px;
  outline: none;
  color: 909090;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 250px;
  }
`
export const SearchIcon = styled(BiSearch)`
  height: 15px;
  width: 15px;
`
export const SearchIconButton = styled.button`
  background-color: #e2e8f0;
  border: none;
  height: 30px;
  width: 35px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
`
export const VideoMainConatainer = styled.div`
  height: 100vh;
  width: 100%;
`
export const VideoList = styled.ul`
  height: 100vh;
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px;
`
export const FailureContainer = styled.div`
  height: 90vh;
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
export const NoSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
`
export const NoSearchImage = styled.img`
  height: 250px;
  width: 300px;
`
export const NoSearchHeading = styled.h1`
  color: #231f20;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 10px;
`

export const NosearchDescription = styled.p`
  color: #231f20;
  font-size: 18px;
  font-family: 'Roboto';
  margin: 5px;
`
