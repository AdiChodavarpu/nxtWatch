import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const VideoIemDetailsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
  background-color: #f8fafc;
`
export const ReactPlayConatiner = styled.div`
  height: 100px;
  width: 100px;
  margin: 0px;
`
export const ReactPlayerVideo = styled(ReactPlayer)`
  height: 100px;
  width: 100px;
  margin: 0px;
`
