import styled from 'styled-components'
import {HiMoon} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'

export const NavContainer = styled.nav`
  height: 80px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`

export const WebSiteLogo = styled.img`
  height: 35px;
  width: 135px;
`
export const NavOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MoonButton = styled.div`
  background-color: transparent;
  border: none;
  padding-top: 8px;
`
export const MoonICon = styled(HiMoon)`
  height: 30px;
  width: 30px;
  @media screen and (max-width: 767px) {
    height: 25px;
    width: 25px;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 25px;
`
export const LogoutButton = styled.button`
  color: #3b82f6;
  height: 30px;
  width: 90px;
  border-radius: 2px;
  border: 1px solid #3b82f6;
  background-color: transparent;
  margin-left: 25px;
`

export const PopDisplayContainer = styled.div`
  min-height: 160px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    min-height: 150px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const PopUpHeading = styled.h1`
  color: #606060;
  font-size: 16px;
  font-family: 'Roboto';
`
export const PopUpButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CancelButton = styled.button`
  color: #7e858e;
  height: 35px;
  width: 100px;
  border-radius: 3px;
  border: 1px solid #7e858e;
  background-color: transparent;
  margin: 15px;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  color: #ffffff;
  height: 35px;
  width: 100px;
  border-radius: 3px;
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  margin: 15px;
  cursor: pointer;
`

export const NavOptionsSmallDevicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const HamIcon = styled(GiHamburgerMenu)`
  height: 24px;
  width: 24px;
  margin-left: 15px;
`
export const LogoutIcon = styled(FiLogOut)`
  height: 24px;
  width: 24px;
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0px;
  margin-left: 15px;
  padding: 0px;
`
export const PopupItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
`

export const HamItemsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CloseIcon = styled(IoMdClose)`
  height: 25px;
  width: 35px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`
