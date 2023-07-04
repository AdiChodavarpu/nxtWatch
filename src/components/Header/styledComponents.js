import styled from 'styled-components'

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
`
export const MoonButton = styled.div`
  background-color: transparent;
  border: none;
  font-size: 28px;
  padding-top: 10px;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 30px;
`
export const LogoutButton = styled.button`
  color: #3b82f6;
  height: 30px;
  width: 90px;
  border-radius: 2px;
  border: 1px solid #3b82f6;
  background-color: transparent;
  margin-left: 30px;
`

export const PopDisplayContainer = styled.div`
  min-height: 160px;
  min-width: 360px;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
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
