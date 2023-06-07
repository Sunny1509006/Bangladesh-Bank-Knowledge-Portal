import React, { useState, useEffect } from 'react'
import "./RightSideBar.css"
import axios from './Axios/axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx"

const RightSideBar = () => {
    const [circulars, setCirculars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleSidebar = () => {
        setOpenSidebar(!openSidebar)
    }
    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(
                "/api/notices/"
            );
            console.log(response.data.lastFive);
            setCirculars(response.data.lastFive);
            setLoading(false)

        };

        loadPosts();
    }, []);

    return (
        <>
            <div className='RightSideBarMain'>
                <div className='LatestNotices'>
                    <h4>Latest Notices</h4>
                    {loading ?
                        <>
                            {[1, 2, 3, 4, 5].map((item) =>
                            (
                                <div key={item} className='latestNoticesList'>
                                    <div style={{
                                        width: '50px',
                                        marginBottom: '5px'
                                    }}>
                                        <Skeleton style={{
                                            height: '40px'
                                        }} />
                                    </div>
                                    <div className='latestNoticesListTitle'>
                                        <Skeleton count={2} />
                                    </div>
                                </div>
                            ))}
                        </>
                        :
                        <>
                            {circulars.map((circular, index) => (
                                <div className='latestNoticesList' key={index}>
                                    <Link to={"/notices/" + circular.id}>
                                        {/* <img src={"http://127.0.0.1:8000/uploads/notices/" + circular.image} /> */}
                                        <img src={"http://139.59.60.50/uploads/notices/" + circular.image} />
                                    </Link>
                                    <div className='latestNoticesListTitle'>
                                        <Link to={"/notices/" + circular.id} style={{
                                            textDecoration: 'none', color: 'black'
                                        }}>
                                            <p><b>{circular.title}</b></p>
                                        </Link>
                                        <p>Publish Date: {circular.created_at.slice(0, 10)}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    }

                </div>
                <div className='ImportantLink'>
                    <h4>Important Link</h4>
                    <p>Bangladesh Bank</p>
                    <p>GCF</p>
                    <p>UNOPS</p>
                    <p>Projects</p>
                    <p>Mission</p>
                    <p>Vision</p>

                </div>
            </div>
            {!openSidebar && (
                <div className='RightSidebarResponsive'>
                    <RxDoubleArrowLeft fontSize={26} onClick={handleSidebar} />
                </div>
            )}
            {openSidebar && (
                <div className='RightSidebarResponsive'>
                    <RxDoubleArrowRight fontSize={26} onClick={handleSidebar} style={{
                        marginLeft: '-12px',
                        position: 'inherit',
                        }}/>
                    <div className='RightSideBarMainDuplicate'>
                        <div className='LatestNotices'>
                            <h4>Latest Notices</h4>
                            {loading ?
                                <>
                                    {[1, 2, 3, 4, 5].map((item) =>
                                    (
                                        <div key={item} className='latestNoticesList'>
                                            <div style={{
                                                width: '50px',
                                                marginBottom: '5px'
                                            }}>
                                                <Skeleton style={{
                                                    height: '40px'
                                                }} />
                                            </div>
                                            <div className='latestNoticesListTitle'>
                                                <Skeleton count={2} />
                                            </div>
                                        </div>
                                    ))}
                                </>
                                :
                                <>
                                    {circulars.map((circular, index) => (
                                        <div className='latestNoticesList' key={index}>
                                            <Link to={"/notices/" + circular.id}>
                                                {/* <img src={"http://127.0.0.1:8000/uploads/notices/" + circular.image} /> */}
                                                <img src={"http://139.59.60.50/uploads/notices/" + circular.image} />
                                            </Link>
                                            <div className='latestNoticesListTitle'>
                                                <Link to={"/notices/" + circular.id} style={{
                                                    textDecoration: 'none', color: 'black'
                                                }}>
                                                    <p><b>{circular.title}</b></p>
                                                </Link>
                                                <p>Publish Date: {circular.created_at.slice(0, 10)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            }

                        </div>
                        <div className='ImportantLink'>
                            <h4>Important Link</h4>
                            <p>Bangladesh Bank</p>
                            <p>GCF</p>
                            <p>UNOPS</p>
                            <p>Projects</p>
                            <p>Mission</p>
                            <p>Vision</p>

                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default RightSideBar
