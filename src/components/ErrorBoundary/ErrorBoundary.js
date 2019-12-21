import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TokenService from '../../services/token-service'
import { AuthContext } from '../../contexts/AuthContext'
import astronaut_w_planet from '../../resources/astronaut_w_planet.jpg'
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  static contextType = AuthContext;

  handleClick = () => {
    TokenService.clearAuthToken();
    this.context.updateLoginStatus(false);
    this.props.history.push('/');
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='ErrorBoundary__container'>
          <div className='ErrorBoundary__div'>
              <h1 className="ErrorBoundary_headline">Uh Oh!</h1>
              <span className='ErrorBoundary__subtext'>There was an error...</span>
              <button className='ErrorBoundary__home-btn' onClick={this.handleClick}>Go Home</button>
              <img src={astronaut_w_planet} className='NotFoundPage__astronaut' alt='astronaut lost in space' />
          </div>
          <a className='attribution' href="https://www.freepik.com/free-photos-vectors/people">People vector created by grmarc - www.freepik.com</a>
        </div>
      )
    }
    return this.props.children;
  };
}

export default withRouter(ErrorBoundary)