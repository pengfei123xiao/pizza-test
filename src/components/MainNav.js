import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './main-nav.css';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { pathname } = this.props;
    return (
      <Fragment>
        <header className="main-nav">
          <div className="main-nav__left">
            <div className="logo">
              Pizza<span className="logo__highlight"> Hub</span>
            </div>
          </div>
          <div className="main-nav__middle">
            <nav className="main-navbar">
              {/* <a href="#MENU" className="main-navbar__item main-navbar__item--active">MENU</a>
              <a href="#ABOUT_US" className="main-navbar__item">ABOUT US</a>
              <a href="#STORES" className="main-navbar__item">STORES</a> */}
              <Link to='/' className={`main-navbar__item ${pathname === '/' ? "main-navbar__item--active" : null}`}
              >MENU</Link>
              <Link to='/about' className={`main-navbar__item ${pathname === '/about' ? "main-navbar__item--active" : null}`}
              >ABOUT US</Link>
              <Link to='/stores' className={`main-navbar__item ${pathname === '/stores' ? "main-navbar__item--active" : null}`}
              >STORES</Link>
            </nav>
          </div>
          <div className="main-nav__right">
            <div className="login">
              <Link to='/account' ><i className="fa fa-user-circle"></i> My Account</Link>

            </div>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default MainNav;