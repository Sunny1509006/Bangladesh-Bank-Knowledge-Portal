import React, { useState, useEffect } from 'react'
import axios from './Axios/axios';

const ScrollingNews = () => {
    const [news, setNews] = useState([]);
    console.log(news)
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get('/api/publishnews');
            console.log(response.data.success)
            setNews(response.data.success);
        };

        fetchNews();
    }, []);

    return (
        <div style={{
            background: '#EFFFF7',
            width: '100%',
            height: '40px',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <div style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <p><b>News Highlights</b></p>
            </div>
            <div style={{
                width: '80%',
                display: 'flex',
                backgroundColor: 'none',
                borderBottom: '40px solid #208F59',
                borderLeft: '50px solid transparent',
                justifyContent: 'center',
            }}>
                <p style={{
                    padding: '10px',
                    width: '100%',
                    color: 'white',
                    fontWeight: 'bold',
                }}>
                    <marquee>
                        {news[0]?.title}
                    </marquee>
                </p>
            </div>

        </div>
    )
}

export default ScrollingNews
