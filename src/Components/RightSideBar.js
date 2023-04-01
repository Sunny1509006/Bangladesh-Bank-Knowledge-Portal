import React from 'react'
import "./RightSideBar.css"

const RightSideBar = () => {
    return (
        <div className='RightSideBarMain'>
            <div className='LatestNotices'>
                <h5>Latest Notices/Circulars</h5>
                <div className='latestNoticesList'>
                    <img src="/images/BangladeshBank_logo.png"/>
                    <div className='latestNoticesListTitle'>
                        <p><b>Sample Title Here</b></p>
                        <p>Publish Date: </p>
                    </div>

                </div>
            </div>
            <div className='ImportantLink'>
                <h5>Important Link</h5>
                <p>Bangladesh Bank</p>
                <p>GCF</p>
                <p>UNOPS</p>
                <p>Projects</p>
                <p>Mission</p>
                <p>Vision</p>

            </div>
        </div>
    )
}

export default RightSideBar
