import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='FooterMain'>
       <div className='footer_top'>
          <div className='Knowledge_portal'>
            <h3>Knowledge Hub Web Portal</h3>
            <p>Lorem ipsum, or lipsum as it is sometimes known,
              is dummy text used in laying out print, graphic or web designs.
              The passage is attributed to an unknown ...</p>
          </div>
          <div className='categories'>
            <h3>Categories</h3>
            <p>Research</p>
            <p>Presentations</p>
            <p>Circulars</p>
            <p>Blogs</p>
            <p>News</p>
            <p>FAQ</p>
          </div>
          <div className='important_link'>
            <h3>Important Link</h3>
            <p>Bangladesh Bank</p>
            <p>GCF</p>
            <p>UNOPS</p>
            <p>Projects</p>
            <p>Mission</p>
            <p>Vision</p>
          </div>
          <div className='sharing_div'>
            <img src='/images/facebook.png' className='facebook_logo' />
            <img src='/images/twitter.png' className='twitter_logo' />
            <img src='/images/linkedin.png' className='linkedin_logo' />
            <form role="search">
              <input className="newsletterInput" type="text" placeholder="Newsletter" aria-label="Search" />
            </form>
          </div>
        </div>
        <div className='footer_middle'>
          <div className='footer_middle_each'>
            <p>Funded By</p>
            <img src='images/Green_Climate_Fund.png' style={{width: '85px', height: '60px'}}/>
          </div>
          <div className='footer_middle_each'>
            <p>Planning & Implementation</p>
            <img src='images/BangladeshBank_logo.png' />
          </div>
          <div className='footer_middle_each'>
            <p>System Development</p>
            <img src='images/dream71_logo.png' style={{width: '75px', height: '40px'}}/>
          </div>
        </div>
        <div className='footer_below'>
            <p className='copyright_p'>Copyright © 2023, <b>Bangladesh Bank</b>, All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
