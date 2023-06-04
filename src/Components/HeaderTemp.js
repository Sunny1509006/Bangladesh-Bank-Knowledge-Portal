import React, { useState } from 'react'
import './HeaderTemp.css'
import { Link, useMatch } from 'react-router-dom'
import SearchText from './SearchText';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const LINKS = [
    { route: '/', name: 'Home' },
    { route: '/a', name: 'About' },
    // { route: '/articles', name: 'Articles' },
    { route: '/projects', name: 'Projects' },
    { route: '/research', name: 'Research' },
    { route: '/eLearning', name: 'e-Learning' },
    // { route: '/circulars', name: 'Circulars' },
    { route: '/articles', name: 'Articles' },
    // { route: '/news', name: 'News' },
    // { route: '/faq', name: 'FAQ' },
    // { route: '/contact', name: 'Contact us' },

]

function LinkItem({ link, openNavbarMenu }) {

    const isActiveRoute = Boolean(useMatch(`${link.route}`));

    const [showDropdown, setShowDropdown] = useState(false);

    function handleDropdownOpen() {
        setShowDropdown(true);
    }

    function handleDropdownClose() {
        setShowDropdown(false);

    }


    {
        if (link.name === "About") {
            return (
                <div onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}>
                    <Link to="">
                        <div >
                            <a style={{ color: isActiveRoute ? '#208F59' : '' }}>{link.name}</a>
                        </div>

                    </Link>
                    {(showDropdown && !openNavbarMenu) && (
                        <div style={{
                            marginTop: '-15px',
                            marginLeft: '50px',
                            position: 'absolute',
                            background: '#DEF4FF',
                            boxShadow: '0px 0px 4px #007F40',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'left',
                            fontSize: '12px',
                        }}
                        // onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}
                        >

                            <Link to="/bangladeshbank" onClick={handleDropdownClose}><p className='Header_menu_style_p'>Bangladesh Bank</p></Link>
                            <div style={{ border: '1px solid rgba(0, 0, 0, 0.5)' }}></div>
                            <Link to="/greenclimatefund" onClick={handleDropdownClose}><p className='Header_menu_style_p'>Green Climate Fund</p></Link>
                            <div style={{ border: '1px solid rgba(0, 0, 0, 0.5)' }}></div>
                            <Link to="/unops" onClick={handleDropdownClose}><p className='Header_menu_style_p'>UNOPS</p></Link>

                        </div>
                    )}
                    {(showDropdown && openNavbarMenu) && (
                        <div style={{
                            marginTop: '-10px',
                            position: 'absolute',
                            background: '#DEF4FF',
                            boxShadow: '0px 0px 4px #007F40',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'left',
                            fontSize: '12px',
                        }}
                        // onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}
                        >

                            <Link to="/bangladeshbank" onClick={handleDropdownClose}><p>Bangladesh Bank</p></Link>
                            <div style={{ border: '1px solid rgba(0, 0, 0, 0.5)' }}></div>
                            <Link to="/greenclimatefund" onClick={handleDropdownClose}><p>Green Climate Fund</p></Link>
                            <div style={{ border: '1px solid rgba(0, 0, 0, 0.5)' }}></div>
                            <Link to="/unops" onClick={handleDropdownClose}><p>UNOPS</p></Link>

                        </div>
                    )}
                </div>
            )
        }
        else {
            return (
                <Link to={link.route}>
                    <div >
                        <a style={{
                            color: isActiveRoute ? '#208F59' : '',
                            fontWeight: isActiveRoute ? "bold" : '',
                        }}>{link.name}</a>
                    </div>
                </Link>
            )
        }
    }
}

const HeaderTemp = () => {
    const [openNavbarMenu, setOpenNavbarMenu] = useState(false)

    const handleOpenNavbarMenu = () => {
        setOpenNavbarMenu(!openNavbarMenu)
    }
    return (
        <div className='Header_temp_main'
            style={{
                backgroundImage: 'url(/images/HeaderBack.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
            }}>
            <div className='Header_temp_inside'>
                <div className='logo'>
                    <img src='/images/BangladeshBank_logo.png' />
                </div>
                <div className='right_content'>
                    <div className='upper_content'>
                        <h1>Green Climate Fund Knowledge Hub</h1>
                    </div>
                    <div className='search_menu' style={{
                            marginTop: '6px'
                        }}>
                            <SearchText />
                        </div>

                    <div className='header_temp_navbar'>

                        <div className='navbar-list' style={{
                            marginTop: '20px'
                        }}>
                            {LINKS.map(link => <LinkItem key={link.route} link={link} openNavbarMenu={openNavbarMenu} />)}
                        </div>
                        <div className='search' style={{
                            marginTop: '6px'
                        }}>
                            <SearchText />
                        </div>
                    </div>
                </div>
                {!openNavbarMenu && (
                    <div className='Header_menu'>
                        <GiHamburgerMenu color='blue' onClick={handleOpenNavbarMenu} size={24}/>
                    </div>
                )}

                {openNavbarMenu && (
                    <div style={{
                        display: 'flex',
                        // flexDirection: 'column',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        height: '300px',
                        width: '300px',
                        justifyContent: 'center',
                        position: 'absolute',
                        right: '0px',
                        // alignItems: 'center',f
                    }}>
                        <div style={{
                            // marginRight: '0px',
                            marginTop: '50px',

                        }}>
                            {LINKS.map(link =>
                                <div key={link.route} className='Header_menu_style'>
                                    <LinkItem key={link.route} link={link} />
                                </div>
                            )}

                        </div>
                        <div className='Header_menu'>
                            <ImCross color='red' onClick={handleOpenNavbarMenu} size={20}/>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default HeaderTemp
