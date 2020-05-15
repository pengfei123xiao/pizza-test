import React, { Fragment } from 'react';
import './main-nav.css';

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { hashtag } = this.props;
    if (hashtag.length === 0) {
      hashtag = '#PIZZAS';
    }
    console.log(typeof hashtag)
    return (
      <Fragment>
        <header className="menu-nav">
          <nav className="menu-navbar">
            <a href="#PIZZAS" className={`menu-navbar__item ${hashtag === '#PIZZAS' ? "menu-navbar__item--active" : null}`}
            >PIZZAS</a>
            <a href="#DRINKS" className={`menu-navbar__item ${hashtag === '#DRINKS' ? "menu-navbar__item--active" : null}`}
            >DRINKS</a>
            <a href="#DESSERTS" className={`menu-navbar__item ${hashtag === '#DESSERTS' ? "menu-navbar__item--active" : null}`}
            >DESSERTS</a>
          </nav>
          <nav className="menu-sub-navbar">
            <a href="#NEW_PRODUCTS" className="menu-sub-navbar__item">NEW PRODUCTS</a>
            <a href="#NEW_YORK_RANGE" className="menu-sub-navbar__item">NEW YORK RANGE</a>
            <a href="#PREMIUM_PIZZAS" className="menu-sub-navbar__item">PREMIUM PIZZAS</a>
            <a href="#TRADITIONAL_PIZZAS" className="menu-sub-navbar__item">TRADITIONAL PIZZAS</a>
            <a href="#VEGETARIAN_PIZZAS" className="menu-sub-navbar__item">VEGETARIAN PIZZAS</a>
            <a href="#GLUTEN_FREE" className="menu-sub-navbar__item">GLUTEN FREE</a>
            <a href="#DIY_PIZZAS" className="menu-sub-navbar__item">DIY PIZZAS</a>
          </nav>
        </header>
      </Fragment>
    )
  }
}

export default MenuNav;