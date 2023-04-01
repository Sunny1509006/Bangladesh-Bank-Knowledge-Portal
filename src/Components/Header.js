import React from 'react'
import './Header.css'
import { Link, useMatch } from 'react-router-dom'
import SearchText from './SearchText';

const LINKS = [
    { route: '/', name: 'Home' },
    { route: '/a', name: 'About' },
    { route: '/b', name: 'Projects' },
    { route: '/c', name: 'Research' },
    { route: '/d', name: 'Presentations' },
    { route: '/e', name: 'Circulars' },
    { route: '/f', name: 'Articles' },
    { route: '/g', name: 'News' },
    { route: '/h', name: 'FAQ' },
    { route: '/i', name: 'Contact us' },

  ]

  function LinkItem({ link }) {

    const isActiveRoute = Boolean(useMatch(`${link.route}`));
  
    return (
      <Link to={link.route}>
        <div >
            <a style={{color: isActiveRoute ? '#72D03B' : ''}}>{link.name}</a>
        </div>
      </Link>
    )
  }

const Header = () => {
    return (
        <div className='Header-main'>
            <div className='Header-images'>
                <div className="image-container">
                    <div className="image1">
                        <img src="/images/Green_Climate_Fund.png" />
                    </div>
                    <div className="image2">
                        <img src="/images/header.png" />
                    </div>
                    <div className="image3">
                        <img src="/images/BangladeshBank_logo.png" />
                    </div>

                </div>
            </div>
            <div className='Header-navbar'>
                <div className='navbar-list'>
                    {LINKS.map(link => <LinkItem key={link.route} link={link} />)}
                </div>
                <div className='search'>
                    <SearchText />
                </div>

            </div>
        </div>
    )
}

export default Header
