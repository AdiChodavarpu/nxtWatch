import {IoMdClose} from 'react-icons/io'
import {BiSearch} from 'react-icons/bi'
import styled from 'styled-components'

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
  background-color: #e2e8f0;
  width: 100%;
  height: 100vh;
`
export const HomeBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-size: cover;
  padding: 25px;
  width: 100%;
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
`
export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: #f4f4f4;
  height: 100vh;
  padding: 15px;
`
export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #909090;
  border-radius: 5px;
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
`
