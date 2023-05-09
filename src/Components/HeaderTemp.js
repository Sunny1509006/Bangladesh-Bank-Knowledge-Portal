import React, {useState} from 'react'
import './HeaderTemp.css'
import { Link, useMatch } from 'react-router-dom'
import SearchText from './SearchText';

const LINKS = [
    { route: '/', name: 'Home' },
    { route: '/a', name: 'About' },
    // { route: '/articles', name: 'Articles' },
    { route: '/projects', name: 'Projects' },
    { route: '/research', name: 'Research' },
    { route: '/presentations', name: 'e-Learning' },
    // { route: '/circulars', name: 'Circulars' },
    { route: '/articles', name: 'Articles' },
    // { route: '/news', name: 'News' },
    // { route: '/faq', name: 'FAQ' },
    // { route: '/contact', name: 'Contact us' },

]

function LinkItem({ link }) {

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
                    {showDropdown && (
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
                    <img src='/images/BangladeshBank_logo.png' style={{
                        height: '80%',
                        width: '50%',
                    }} />
                </div>
                <div className='right_content'>
                    <div className='upper_content'>
                        <h1>Knowledge Hub</h1>
                        {/* <img src="/images/light.png" style={{
                            height: '60px',
                            width: '60px',
                            // marginLeft: '52%',
                            // marginTop: '-60px'
                            marginLeft: '15px'
                        }}/> */}
                    </div>
 
                    <div className='header_temp_navbar'>

                        <div className='navbar-list' style={{
                            marginTop: '30px'
                        }}>
                            {LINKS.map(link => <LinkItem key={link.route} link={link} />)}
                        </div>
                        <div className='search' style={{
                            marginTop: '15px'
                        }}>
                            <SearchText />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderTemp
