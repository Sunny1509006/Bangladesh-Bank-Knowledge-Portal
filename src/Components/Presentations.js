import React, { useState, useEffect } from 'react'
import Categories from './Common/Categories';
import axios from './Axios/axios';
import HomePageBodyHeader from './Common/HomePageBodyHeader';
import { BsDownload } from 'react-icons/bs'
import { Helmet } from 'react-helmet';
import Skeleton from 'react-loading-skeleton';

const Presentations = ({presentations}) => {
  // const [presentations, setPresentations] = useState([]);
  // const [articles, setArticles] = useState([]);
  // console.log(articles);
  // const [fileUrl, setFileUrl] = useState('');
  // useEffect(() => {
  //   const loadPosts = async () => {
  //     const response = await axios.get(
  //       "/api/pptx/"
  //     );
  //     console.log(response.data.success);
  //     setPresentations(response.data.success);
  //     setArticles(response.data.success)
  //     // setFileUrl(response.data.success.pptx);

  //   };

  //   loadPosts();
  // }, []);


  const handleDownload = (filePath) => () => {
    // const baseUrl = 'http://127.0.0.1:8000/uploads/pptx/';
    const baseUrl = 'http://139.59.60.50/uploads/pptx/';
    const downloadLink = document.createElement('a');
    downloadLink.href = `${baseUrl}${filePath}`;
    downloadLink.download = filePath.substring(filePath.lastIndexOf('/') + 1);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    // <Categories category={"Presentations"} articles={articles} linkCategory={"pptx"}/>
    <div style={{
      // paddingTop: '25vh',
      display: 'flex',
      minHeight: '400px',
      width: '100%',
      flexDirection: 'column',
      flex: '1',
    }}>
      <Helmet>
        <title>
          Presentations
        </title>
      </Helmet>
      {/* <HomePageBodyHeader title={"Presentations"} /> */}
      {presentations.length > 0 ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'calc(100% - 60px)',
          margin: '0px 30px',
          // padding: '20px',
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            background: '#208F59',
            color: 'white',
          }}>
            <div style={{
              width: '10%',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              justifyContent: 'center',
              border: '1px solid rgba(110, 110, 110, 0.580164)',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>SL No</div>
            <div style={{
              width: '70%',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              justifyContent: 'center',
              border: '1px solid rgba(110, 110, 110, 0.580164)',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>Title</div>
            <div style={{
              width: '20%',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              justifyContent: 'center',
              border: '1px solid rgba(110, 110, 110, 0.580164)',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>Download</div>
          </div>
          {presentations.map((presentation, index) => (
            <div key={presentation.id} style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
              <div style={{
                width: '10%',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                justifyContent: 'center',
                border: '1px solid rgba(110, 110, 110, 0.580164)',
                fontSize: '12px',
                fontWeight: 'bold',
              }}>{index+1}</div>
              <div style={{
                width: '70%',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                justifyContent: 'center',
                border: '1px solid rgba(110, 110, 110, 0.580164)',
                fontSize: '12px',
                fontWeight: 'bold',
              }}>{presentation.title || <Skeleton />}</div>
              <div style={{
                width: '20%',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                justifyContent: 'center',
                border: '1px solid rgba(110, 110, 110, 0.580164)',
                fontSize: '12px',
                fontWeight: 'bold',
              }}>
                {/* <button onClick={handleDownload(presentation.pptx)} style={{
                  fontSize: '9px',
                }}>Download PPTX</button> */}
                <BsDownload fontSize={16} onClick={handleDownload(presentation.pptx)} />
              </div>

            </div>
          ))}
        </div>
      ) : (
        <p>No files found.</p>
      )}
    </div>
  )
}

export default Presentations
