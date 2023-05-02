import React, { useState } from 'react'
import "./Footer.css"
import axios from './Axios/axios'

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  console.log(email)

  const handleApi = () => {

    axios.post("/api/newsletter/",
      {
        email: email,
      },
    )
      .then(result => {
        alert(result.data.success)
        console.log(result.data.success)
        setEmail("")
      })
      .catch(error => {
        console.log(error);
        alert('Error');

      })
  }
  return (
    <div className='FooterMain'>
      <div className='footer_top'>
        <div className='Knowledge_portal'>
          <h4>Knowledge Hub Web Portal</h4>
          <p>Lorem ipsum, or lipsum as it is sometimes known,
            is dummy text used in laying out print, graphic or web designs.
            The passage is attributed to an unknown ...</p>
        </div>
        <div className='categories'>
          <h4>Categories</h4>
          <p>Articles</p>
          <p>Research</p>
          <p>Presentations</p>
          <p>Circulars</p>
          <p>News</p>
          <p>FAQ</p>
        </div>
        <div className='important_link'>
          <h4>Important Link</h4>
          <p>Bangladesh Bank</p>
          <p>GCF</p>
          <p>UNOPS</p>
        </div>
        {/* <div className='sharing_div'>
          <img src='/images/facebook.png' className='facebook_logo' />
          <img src='/images/twitter.png' className='twitter_logo' />
          <img src='/images/linkedin.png' className='linkedin_logo' />
          <form onSubmit={handleApi}>
            <input className="newsletterInput" type="text" placeholder="Newsletter"
              value={email}
              onChange={handleEmail}
            />
          </form>
        </div> */}
      </div>
      <div className='footer_middle'>
        <div className='footer_middle_each'>
          <p>Funded By</p>
          <img src='/images/Green_Climate_Fund.png' style={{ width: '85px', height: '60px', marginTop: '-5px' }} />
        </div>
        <div className='footer_middle_each'>
          <p>Planning & Implementation</p>
          <img src='/images/BangladeshBank_logo.png' />
        </div>
        {/* !Developer
        Name: MD Arif Istiake Sunny
        Gmail: sunny1509006@gmail.com
        Mobile: 01732009493 */}
        <div className='footer_middle_each'>
          <p>System Development</p>
          <img src='/images/Dream71_logo.png' style={{ width: '80px', height: '35px', marginTop: '5px' }} />
        </div>
      </div>
      <div className='footer_below'>
        <p className='copyright_p'>Copyright © 2023, <b>Bangladesh Bank</b>, All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
