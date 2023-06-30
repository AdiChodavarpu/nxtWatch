import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
`
export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 2px 3px 4px #cccccc;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 290px;
  min-width: 290px;
`

export const LoginLogo = styled.img`
  height: 30px;
  width: 120px;
  align-self: center;
  margin-bottom: 40px;
`
export const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`
export const LabelElement = styled.label`
  color: #616e7c;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500px;
  padding-left: 3px;
`
export const UserInputElement = styled.input`
  height: 30px;
  width: 90%;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  background-color: transparent;
  padding-left: 15px;
  outline: none;
  color: #616e7c;
  cursor: pointer;
  margin-top: 5px;
`
export const CheckBoxContiner = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`
export const CheckBoxElement = styled.input`
  height: 16px;
  width: 16px;
  margin-right: 5px;
  outline: none;
  cursor: pointer;
`
export const CheckBoxDescription = styled.p`
  color: #0f0f0f;
  font-size: 14px;
  font-family: 'Roboto';
  margin: 0px;
`
export const LoginButton = styled.button`
  height: 30px;
  width: 90%;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #3b82f6;
  margin-top: 15px;
  align-self: flex-start;
  margin-left: 2px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 14px;
  font-family: 'Roboto';
  align-self: flex-start;
  margin-left: 2px;
`
