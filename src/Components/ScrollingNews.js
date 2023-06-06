import React, { useState, useEffect } from 'react'
import axios from './Axios/axios';
import "./ScrollingNews.css"

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
            <div className='NewsHighlights'>
                <p><b>News Highlights</b></p>
            </div>
            <div className='NewsDiv'>
                <p><b>News</b></p>
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
                        {/* {news[0]?.title} */}
                        {news?.map((new_data, index)=> (
                            <span key={index} style={{
                                marginRight: '30px',
                            }}>
                                {new_data.title}
                            </span>
                            
                        ))}
                        {/* {news.map(news_data => news_data.toString())} */}
                    </marquee>
                </p>
            </div>

        </div>
    )
}

export default ScrollingNews
