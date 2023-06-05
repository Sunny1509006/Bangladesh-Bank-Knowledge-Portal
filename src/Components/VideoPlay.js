import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from './Axios/axios';
import "./VideoPlay.css"
const VideoPlayer = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const params = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(
            // `http://139.59.60.50:8000/api/pptx/${params.id}/`
            `/api/pptx/${params.id}/`
        )
            .then(res => {
                console.log(res.data.success.pptx)
                setData(res.data.success.pptx)
            })
            .catch(err => {
                console.log(err)
            })

    }, [params.id])
    console.log(data)

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await fetch(
                    // 'http://139.59.60.50:8000/api/video/1684125599_This_is_Your_Period_in_2_Minutes___Glamour(2).mp4/'
                    `http://139.59.60.50:8000/api/video/${data}/`

                );
                const blob = await response.blob();
                const videoUrl = URL.createObjectURL(blob);
                setVideoUrl(videoUrl);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };
        if (data) {
            fetchVideo();
        }
        
    }, [data]);

    return (
        <div className='VideoPlayMain'>
            {videoUrl ? (
                // <video controls width={900} height={500} >
                    <video controls className='videoFrame' >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    );
};

export default VideoPlayer;







