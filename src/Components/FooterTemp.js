import React from 'react'
import "./FooterTemp.css"

const FooterTemp = () => {
    return (
        <div className='FooterTempMain'>
            <div className='footer_below'>
                <p className='copyright_p'>Copyright © 2023, <b>Bangladesh Bank</b>, All Right Reserved</p>
                <div style={{
                    display: 'flex',

                }}>
                    <p className='copyright_p'><b>System Development</b></p>
                    <img src='/images/Dream71_logo.png' style={{ 
                        width: '80px',
                         height: '20px',
                         marginLeft: '8px',
                         marginTop: '-5px',
                        }}/>
                </div>
            </div>
        </div>
    )
}

export default FooterTemp
