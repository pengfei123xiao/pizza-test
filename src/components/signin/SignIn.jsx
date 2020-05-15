import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import './signin.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: '',
      password: '',
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      // automatically match email and password value
      // due to the name attribute
      [name]: value,
    })

  }

  render () {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
          <CustomButton type='submit'>SIGN IN</CustomButton>
        </form>

      </div>
    )
  }


}

export default SignIn;