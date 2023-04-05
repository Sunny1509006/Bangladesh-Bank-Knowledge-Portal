import React, { useState, useEffect, useMemo } from 'react'
import "./LatestNews.css"
import axios from './Axios/axios';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    axios.get('/api/news/')
      .then(response => {
        setLatestNews(response.data.lastFive);
      })
      .catch(error => console.error(error));
  }, []);

  const singleNews = useMemo(() => latestNews.filter((article, index) => index === 0), [latestNews]);
  const othersNews = useMemo(() => latestNews.filter((article, index) => (index >= 1 & index <= 4)), [latestNews]);
  const oneNews = singleNews.map((data) => data.image)
  const oneID = singleNews.map((data) => data.id)
  const oneTitle = singleNews.map((data) => data.title)
  const oneDate = singleNews.map((data) => data.created_at?.slice(0, 10))
  const backImagePath = `http://139.59.60.50/uploads/news/${oneNews}`

  console.log(oneNews)
  return (
    <div className='LatestNewsMain'>
      <div
        style={{
          backgroundImage: `url(${backImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '66%',
          height: '40vh',
          display: 'flex',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'white',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Link to={"/news/"+oneID} style={{textDecoration: 'none', color: 'white'}}>
            <p style={{
              marginTop: '30vh',
              padding: '4px 20px',
              fontSize: '12px',
            }}>
              <b>{oneTitle}</b>
            </p>
          </Link>
          <p style={{
            padding: '0px 20px',
            fontSize: '12px',
          }}>Published Date: {oneDate}</p>
        </div>
      </div>
      <div style={{
        width: '32%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #D9D9D9',
        paddingTop: '10px'
      }}>
        {othersNews.map((news, index) => (
          <div key={index} style={{
            display: 'flex',
            padding: '0px 10px',
            paddingBottom: '10px',
          }}>
            <Link to={"/news/" + news.id} style={{
              width: '25%',
            }}>
              <img src={"http://139.59.60.50/uploads/news/" + news.image} style={{
                width: '100%',
                height: '7.4vh',
              }} />
            </Link>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0px 10px',
              width: '75%',
            }}>
              <Link to={"/news/" + news.id} style={{ textDecoration: 'none' }}>
                <p style={{
                  fontSize: '10px',
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                }}
                >
                  <b>{news.title}</b>
                </p>
              </Link>
              <p style={{
                fontSize: '10px',
              }}>Published Date: {news.created_at.slice(0, 10)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestNews