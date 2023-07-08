import styled from 'styled-components'

export const NotFoundContainerElement = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : ' #f9f9f9')};
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
`
export const NotFoundMainContainer = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  height: 350px;
  width: 500px;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDark ? ' #f9f9f9' : '#0f0f0f')};
  font-size: 30px;
  font-family: 'Roboto';
  margin-top: 25px;
  margin-bottom: 15px;
`

export const NotFoundDescription = styled.p`
  color: ${props => (props.isDark ? ' #f9f9f9' : '#0f0f0f')};
  font-size: 18px;
  font-family: 'Roboto';
  margin: 5px;
`
