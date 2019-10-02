//Dependencies
import React from 'react';
import { Redirect } from 'react-router-dom'

class Login extends React.PureComponent {
  state = {
    username: '',
    password: '',
    logginIn: 'placeholder'
  }

  usernameOnChange = e => {
    this.setState({ username: e.target.value })
  }

  passwordOnChange = e => {
    this.setState({ password: e.target.value })
  }
  onKeyPress = e => {
    if (e.key === 'Enter'){
      this.loginHandler()
    }
  }

  loginHandler = async () => {
    console.log(this.state.username, this.state.password)
    const response = await fetch('http://localhost:25565/api/login', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ username: this.state.username, password: this.state.password })
    });
    const data = await response.json();
    this.setState({ loggedInMessage: data.message })
  }

  render() {
    let loginMessage = '';
    if (this.state.loggedInMessage === 'Logged in. Redirecting...'){
      loginMessage = <div className='goodLoginDiv'><p className='goodLoginText'>Logged in. Redirecting...</p></div>;
      return <Redirect to='/Admin/uwW7Vn3c6JMpVSsyNSfW3s5okVpup7k0IKbWmZ9mu6cMNuiZXi' />
    } else if (this.state.loggedInMessage === 'Incorrect username or password'){
      loginMessage = <div className='badLoginDiv'><p className='badLoginText'>Username or password is incorrect</p></div>;
    }
    return (
      <div className='container container-bg loginContainer'>
        <div className='card loginCard'>
          <h1>Admin Login</h1>
          <input className='loginUser' onChange={this.usernameOnChange} onKeyPress={this.onKeyPress} placeholder="Username" />
          <input className='loginPass' onChange={this.passwordOnChange} onKeyPress={this.onKeyPress} placeholder="Password" />
          <button className='loginBtn' onClick={this.loginHandler}>Login</button>
          {loginMessage}
        </div>

      </div>
    )
  }
}

//Export Login
export default Login;