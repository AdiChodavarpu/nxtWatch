import styled from 'styled-components'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'

export const VideoItemDetailsContainerElement = styled.div`
  background-color: ${props => (props.isDark ? ' #0f0f0f' : ' #f9f9f9')};
`

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
  overflow-y: auto;
  padding: 20px;
`
export const ReactPlayContainer = styled.div`
  height: 65vh;
  width: 100%;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    height: 50vh;
    width: 100%;
    margin-bottom: 30px;
  }
`

export const VideoItemDetailsTopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const VideoItemDetailsViews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`

export const LikeIcon = styled(AiOutlineLike)`
  height: 25px;
  width: 25px;
  margin-left: 2px;
`
export const LikeDescription = styled.p`
  color: ${props => (props.liked ? '#2563eb' : ' #64748b ')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 2px;
`

export const DisLikeIcon = styled(AiOutlineDislike)`
  height: 25px;
  width: 25px;
  margin-left: 2px;
`
export const DislikeDescription = styled.p`
  color: ${props => (props.disliked ? '#2563eb' : ' #64748b ')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 2px;
`

export const SaveICon = styled(MdPlaylistAdd)`
  height: 25px;
  width: 25px;
  color: #606060;
`
export const SaveDescription = styled.p`
  color: ${props => (props.saved ? '#2563eb' : ' #64748b ')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 2px;
`

export const DotElement = styled(BsDot)`
  color: #909090;
`
export const IconDescription = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 2px;
`

export const IconsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  margin: 0px;
  margin-right: 10px;
  padding: 0px;
  list-style-type: none;
`

export const IconsItemsContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ViewsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const VideoDetailsHeading = styled.h1`
  color: ${props => (props.isDark ? '#f4f4f4' : '#212121')};
  font-size: 20px;
  font-family: 'Roboto';
  margin: 8px;
  margin-top: 15px;
`
export const VideoDetailsParagraph = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#909090')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
`
export const Line = styled.hr`
  color: #909090;
  height: 1px;
  width: 100%;
  margin-top: 25px;
`
export const VideoDetailsBottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 60px;
  width: 60px;
  margin: 8px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
`
export const ChannelHeading = styled.p`
  color: ${props => (props.isDark ? '#f4f4f4' : '#212121')};
  font-size: 18px;
  font-family: 'Roboto';

  margin: 0px;
`
export const Subscribers = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;

  margin: 0px;
  margin-top: 8px;
`
export const IconButton = styled.button`
  color: ${props => (props.liked ? '#3b82f6' : ' #606060')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: #231f20;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 10px;
`

export const FailureDescription = styled.p`
  color: #231f20;
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
