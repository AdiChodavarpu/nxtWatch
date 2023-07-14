import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import SavedContext from '../../context/SavedContext'

import {
  LoginMainContainer,
  LoginCardContainer,
  LoginFormContainer,
  LoginLogo,
  UserInputContainer,
  LabelElement,
  UserInputElement,
  CheckBoxContiner,
  CheckBoxElement,
  CheckBoxDescription,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: '',
    showErrorMessage: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSumitFailure = errorMessage => {
    this.setState({showErrorMessage: true, errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSumitFailure(data.error_msg)
    }
  }

  renderUserNameFiled = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDark} = value

        const {username} = this.state
        return (
          <UserInputContainer>
            <LabelElement htmlFor="userInput" isDark={isDark}>
              USERNAME
            </LabelElement>
            <UserInputElement
              id="userInput"
              isDark={isDark}
              type="text"
              value={username}
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
          </UserInputContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  renderPasswordField = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDark} = value

        const {password, showPassword} = this.state
        const passwordType = showPassword ? 'text' : 'password'
        return (
          <UserInputContainer>
            <LabelElement htmlFor="userPasssword" isDark={isDark}>
              PASSWORD
            </LabelElement>
            <UserInputElement
              id="userPasssword"
              isDark={isDark}
              type={passwordType}
              value={password}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </UserInputContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  onChangeCheckbox = () => {
    this.setState(prevValue => ({
      showPassword: !prevValue.showPassword,
    }))
  }

  renderCheckBoxFiled = () => (
    <SavedContext.Consumer>
      {value => {
        const {isDark} = value
        const {showPassword} = this.state
        return (
          <CheckBoxContiner>
            <CheckBoxElement
              htmlFor="checkBox"
              type="checkbox"
              value={showPassword}
              onChange={this.onChangeCheckbox}
            />
            <CheckBoxDescription id="checkBox" as="label" isDark={isDark}>
              Show Password
            </CheckBoxDescription>
          </CheckBoxContiner>
        )
      }}
    </SavedContext.Consumer>
  )

  render() {
    const {showErrorMessage, errorMessage} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value
          const LogoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginMainContainer isDark={isDark}>
              <LoginCardContainer isDark={isDark}>
                <LoginFormContainer onSubmit={this.submitForm}>
                  <LoginLogo src={LogoUrl} alt="website logo" />
                  {this.renderUserNameFiled()}
                  {this.renderPasswordField()}
                  {this.renderCheckBoxFiled()}
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMessage && (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                  )}
                </LoginFormContainer>
              </LoginCardContainer>
            </LoginMainContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default LoginForm
