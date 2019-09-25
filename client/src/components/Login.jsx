import React from 'react';

class Login extends React.PureComponent {
  state = {
    username: '',
    password: '',
  }

  usernameOnChange = e => {
    this.setState({username: e.target.value})
  }

  passwordOnChange = e => {
    this.setState({password: e.target.value})
  }

  loginHandler = async () => {
    console.log(this.state.username, this.state.password)
    const response = await fetch('http://localhost:25565/api/login', {
      credentials: "include", 
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    });  
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div className='container container-bg'>
        <h1>Login test</h1>
        <input onChange={this.usernameOnChange} placeholder="username" />
        <input onChange={this.passwordOnChange} placeholder="password" />
        <button onClick={this.loginHandler}>Login</button>
      </div>
    )
  }
}

export default Login;