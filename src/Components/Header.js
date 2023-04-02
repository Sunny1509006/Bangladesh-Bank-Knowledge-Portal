import React, { useState } from 'react'
import './Header.css'
import { Link, useMatch } from 'react-router-dom'
import SearchText from './SearchText';

const LINKS = [
    { route: '/', name: 'Home' },
    { route: '/a', name: 'About' },
    { route: '/articles', name: 'Articles' },
    { route: '/projects', name: 'Projects' },
    { route: '/research', name: 'Research' },
    { route: '/presentations', name: 'Presentations' },
    { route: '/circulars', name: 'Circulars' },
    { route: '/news', name: 'News' },
    { route: '/faq', name: 'FAQ' },
    { route: '/contact', name: 'Contact us' },

]



function LinkItem({ link }) {

    const isActiveRoute = Boolean(useMatch(`${link.route}`));

    const [showDropdown, setShowDropdown] = useState(false);

    function handleDropdownToggle() {
        setShowDropdown(!showDropdown);
    }

    {
        if (link.name === "About") {
            return (
                <div>
                    <Link to="">
                        <div onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                            <a style={{ color: isActiveRoute ? '#72D03B' : '' }}>{link.name}</a>
                        </div>

                    </Link>
                    {showDropdown && (
                        <div style={{
                            // marginTop: '-10px',
                            position: 'absolute',
                            width: '100px',
                            background: '#DEF4FF',
                            boxShadow: '0px 0px 4px #007F40',
                        }}>
                            
                                <Link to="/bangladesh"><p>Bangladesh</p></Link>
                                <Link to="/green"><p>Green</p></Link>
                                <Link to="/unops"><p>UNOPS</p></Link>
                           
                        </div>
                    )}
                </div>
            )
        }
        else {
            return (
                <Link to={link.route}>
                    <div >
                        <a style={{ color: isActiveRoute ? '#72D03B' : '' }}>{link.name}</a>
                    </div>
                </Link>
            )
        }
    }
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
