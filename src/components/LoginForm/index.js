import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

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

  renderUserNameFiled = () => {
    const {username} = this.state
    return (
      <UserInputContainer>
        <LabelElement>USERNAME</LabelElement>
        <UserInputElement
          type="text"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </UserInputContainer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <UserInputContainer>
        <LabelElement>PASSWORD</LabelElement>
        <UserInputElement
          type={passwordType}
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </UserInputContainer>
    )
  }

  onChangeCheckbox = () => {
    this.setState(prevValue => ({
      showPassword: !prevValue.showPassword,
    }))
  }

  renderCheckBoxFiled = () => {
    const {showPassword} = this.state
    return (
      <CheckBoxContiner>
        <CheckBoxElement
          type="checkbox"
          value={showPassword}
          onChange={this.onChangeCheckbox}
        />
        <CheckBoxDescription>Show Password</CheckBoxDescription>
      </CheckBoxContiner>
    )
  }

  render() {
    const {showErrorMessage, errorMessage} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginMainContainer>
        <LoginCardContainer>
          <LoginFormContainer onSubmit={this.submitForm}>
            <LoginLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />{' '}
            {this.renderUserNameFiled()}
            {this.renderPasswordField()}
            {this.renderCheckBoxFiled()}
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </LoginFormContainer>
        </LoginCardContainer>
      </LoginMainContainer>
    )
  }
}

export default LoginForm
