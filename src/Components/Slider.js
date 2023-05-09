import React, { useState, useEffect } from 'react';
import axios from './Axios/axios';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(images[0].image)
  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get('/api/slider');
      console.log(response.data.success)
      setImages(response.data.success);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 30000);

    return () => clearInterval(intervalId);
  }, [currentSlide, images.length]);

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToImage = index => {
    setCurrentSlide(index)
  }

  const leftArrowStyles = {
    position: "absolute",
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '62px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const rightArrowStyles = {
    position: "absolute",
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '62px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const slider = {
    height: '100%',
    position: 'relative',
  }

  return (
    <div style={slider}>
      {/* <button onClick={handlePrevSlide}>Prev</button> */}
      {/* <div style={ leftArrowStyles }></div>
        <div style={ rightArrowStyles }></div> */}
      <AiOutlineLeft style={leftArrowStyles} onClick={handlePrevSlide} />
      <AiOutlineRight style={rightArrowStyles} onClick={handleNextSlide} />
      <div style={{
        backgroundImage: `url(http://139.59.60.50/${images[currentSlide]?.image})`,
        // width: 'calc(100% - 60px)',
        width: '100%',
        height: '300px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        // margin: '0px 30px',
      }}>
        <div style={{
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
        }}>

        </div>

      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        {images.map((image, index) => (
          <div key={index} style={{
            margin: '3px 3px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#656d69'
          }}>
            <GoPrimitiveDot onClick={()=> goToImage(index)}/>
          </div>
        ))}
      </div>
      {/* <img src={"http://139.59.60.50/"+images[currentSlide]?.image} alt="Slider Image"  style={{
        width: '100%',
        height: '200px'
      }}/> */}
      {/* <button onClick={handleNextSlide}>Next</button> */}
    </div>
  );
};

export default Slider;
