import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const SavedItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 230px;
`
export const SavedImage = styled.img`
  height: 200px;
  min-width: 370px;
`
export const SavedDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 25px;
`
export const SavedItemHeading = styled.h1`
  color: #231f20;
  font-size: 28px;
  font-family: 'Roboto';
  margin: 0px;
  width: 82%;
`
export const SavedItemDescription = styled.p`
  color: #606060;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  margin-top: 10px;
`
export const SaveViewsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const SavedViews = styled(SavedItemDescription)`
  margin-right: 15px;
`
export const Dot = styled(BsDot)`
  color: #606060;
  margin-top: 11px;
  font-size: 20px;
`
export const PublishedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
