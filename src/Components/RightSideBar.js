import React, { useState, useEffect } from 'react'
import "./RightSideBar.css"
import axios from './Axios/axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const RightSideBar = () => {
    const [circulars, setCirculars] = useState([]);
    const [loading, setLoading] = useState(true);
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
        <div className='RightSideBarMain'>
            <div className='LatestNotices'>
                <h5>Latest Notices/Circulars</h5>
                {loading?
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
                                    }}/>
                                </div>
                                <div className='latestNoticesListTitle'>
                                    <Skeleton count={2}/>
                                </div>
                            </div>
                        ))}
                </>
                :
                <>
                {circulars.map((circular, index) => (
                    <div className='latestNoticesList' key={index}>
                        <Link to={"/circulars/" + circular.id}>
                            <img src={"http://127.0.0.1:8000/uploads/notices/" + circular.image} />
                        </Link>
                        <div className='latestNoticesListTitle'>
                            <Link to={"/circulars/" + circular.id} style={{
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
