import {Component} from 'react'

import {MainContainer, GamingContainer} from './styledComponents'

import Header from '../Header'
import SideBar from '../sideBar'

class Gaming extends Component {
  render() {
    return (
      <>
        <Header />
        <MainContainer>
          <SideBar />
          <GamingContainer>Gaming</GamingContainer>
        </MainContainer>
      </>
    )
  }
}

export default Gaming
