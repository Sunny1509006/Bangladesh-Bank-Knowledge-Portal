import React, { useState, useEffect } from 'react'
import "./RightSideBar.css"
import axios from './Axios/axios';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
    const [circulars, setCirculars] = useState([]);
    // console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(
                "/api/notices/"
            );
            console.log(response.data.lastFive);
            setCirculars(response.data.lastFive);

        };

        loadPosts();
    }, []);

    return (
        <div className='RightSideBarMain'>
            <div className='LatestNotices'>
                <h5>Latest Notices/Circulars</h5>

                {circulars.map((circular, index) => (
                    <div className='latestNoticesList' key={index}>
                        <Link to={"/circulars/" + circular.id}>
                            <img src={"http://139.59.60.50/uploads/notice/" + circular.image} />
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
