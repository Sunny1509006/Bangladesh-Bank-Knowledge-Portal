import React from 'react'
import "./Sitemap.css"
import { Link } from 'react-router-dom'

const Sitemap = () => {
    return (
        <div className='sitemap_main'>
            <div className='sitemap_inner_div'>
                <h1>Green Climate Fund</h1>
                <div className='Sitemap_category'>
                    <Link to="/" style={{textDecoration: 'none'}}><h2>Home</h2></Link>
                    <div className='sitemap_about'>
                        <h2>About</h2>
                        <div className='sitemap_about_subcategory'>
                        <Link to="/bangladeshbank" style={{textDecoration: 'none', color: 'black'}}><h3>Bangladesh Bank</h3></Link>
                        <Link to="/greenclimatefund" style={{textDecoration: 'none', color: 'black'}}><h3>Green Climate Fund</h3></Link>
                        <Link to="/unops" style={{textDecoration: 'none', color: 'black'}}><h3>UNOPS</h3></Link>
                        </div>
                    </div>
                    <Link to="/projects" style={{textDecoration: 'none'}}><h2>Projects</h2></Link>
                    <Link to="/research" style={{textDecoration: 'none'}}><h2>Research</h2></Link>
                    <Link to="/eLearning" style={{textDecoration: 'none'}}><h2>e-Learnig</h2></Link>
                    <Link to="/articles" style={{textDecoration: 'none'}}><h2>Articles</h2></Link>
                    <div className='sitemap_Footer'>
                    <h2>Footer</h2>
                    <div className='sitemap_footer_subcategory'>
                        <a href='https://www.greenclimate.fund/' style={{textDecoration: 'none', color: 'black'}}><h3>Green Climate Fund</h3></a>
                        <a href='https://dream71.com/' style={{textDecoration: 'none', color: 'black'}}><h3>Dream71 Bangladesh Limited</h3></a>
                    </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Sitemap
