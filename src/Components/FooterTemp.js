import React from 'react'
import "./FooterTemp.css"

const FooterTemp = () => {
    return (
        <div className='FooterTempMain'>
            <div className='footer_top'>
                <div style={{
                    backgroundImage: "url(/images/gcf.png)",
                    // width: 'calc(100% - 60px)',
                    width: '50%',
                    height: '120px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '300px',
                    flex: '1',

                    // margin: '0px 30px',
                }}>
                    <p>Funded by</p>
                    <img src="/images/gcf_logo.png" style={{
                        height: '80px',
                        width: '140px',
                    }} />
                </div>
                <div style={{
                    backgroundImage: "url(/images/bb.png)",
                    // width: 'calc(100% - 60px)',
                    width: '50%',
                    height: '120px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    flexDirection: 'column',
                    minWidth: '300px',
                    flex: '1',
                    // margin: '0px 30px',
                }}>
                    <p>Planning & Implementation by</p>
                    {/* <img src="/images/BangladeshBank_logo.png" style={{
                        height: '60px',
                        width: '60px',
                    }} />
                    <img src="/images/BangladeshBank_logo.png" style={{
                        height: '60px',
                        width: '60px',
                    }} /> */}
                    <p className='sustainable'>Sustainable Finance Department of Bangladesh Bank</p>

                </div>
            </div>
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
                    }} />
                </div>
            </div>
        </div>
    )
}

export default FooterTemp
