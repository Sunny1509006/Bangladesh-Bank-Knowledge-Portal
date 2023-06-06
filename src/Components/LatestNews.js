import React, { useState, useEffect, useMemo } from 'react'
import "./LatestNews.css"
import axios from './Axios/axios';
import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
import Skeleton from 'react-loading-skeleton'

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/news/')
      .then(response => {
        setLatestNews(response.data.lastFive);
        setLoading(false)
      })
      .catch(error => console.error(error));
  }, []);

  const singleNews = useMemo(() => latestNews.filter((article, index) => index === 0), [latestNews]);
  const othersNews = useMemo(() => latestNews.filter((article, index) => (index >= 1 & index <= 4)), [latestNews]);
  const oneNews = singleNews.map((data) => data.image)
  const oneID = singleNews.map((data) => data.id)
  const oneTitle = singleNews.map((data) => data.title)
  const oneDate = singleNews.map((data) => data.created_at?.slice(0, 10))
  // const backImagePath = `http://127.0.0.1:8000/uploads/news/${oneNews}`
  const backImagePath = `http://139.59.60.50/uploads/news/${oneNews}`

  console.log(oneNews)
  return (
    <div className='LatestNewsMain'>
      {loading ?
        <div style={{
          // height: '40vh',
          width: '66%',
          // background: 'white',
        }}>
          <Skeleton style={{
            height: '40vh'
          }} />
        </div>
        :

        <div
          style={{
            backgroundImage: `url(${backImagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '66%',
            height: '40vh',
            display: 'flex',
            flex: '1',
            minWidth: '300px',
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
            <Link to={"/news/" + oneID} style={{ textDecoration: 'none', color: 'white' }}>
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
      }
      <div style={{
        width: '32%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #D9D9D9',
        paddingTop: '10px',
        minWidth: '300px',
        flex: '1',
      }}>
        {loading ?
          <>  {[1, 2, 3, 4].map((item) =>
          (
            <div key={item} style={{
              display: 'flex',
              padding: '0px 10px',
              paddingBottom: '10px',
            }}>
              <div style={{
                width: '25%',

              }}>
                <Skeleton style={{
                  height: '7.4vh',
                }} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 10px',
                width: '75%',
              }}>
                <Skeleton style={{ paddingBottom: '12px'}}/>
                <Skeleton />
              </div>

            </div>
          ))}</>
          :
          <>
            {othersNews.map((news, index) => (
              <div key={index} style={{
                display: 'flex',
                padding: '0px 10px',
                paddingBottom: '10px',
                
              }}>

                <Link to={"/news/" + news.id} style={{
                  width: '25%',
                }}>
                  <img src={news.image ?
                    // "http://127.0.0.1:8000/uploads/news/" + news.image
                    "http://139.59.60.50/uploads/news/" + news.image
                    :
                    "/images/NoImageFound.png"} style={{
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
          </>
        }
      </div>
    </div>
  )
}

export default LatestNews
