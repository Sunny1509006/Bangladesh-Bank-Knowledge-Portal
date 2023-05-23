
// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// const VideoPlayer = () => {
//     const [videoChunks, setVideoChunks] = useState([]);
//     const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
//     const videoRef = useRef(null);

//     const params = useParams()
//     const [data, setData] = useState(null)
//     console.log(videoChunks)

//     useEffect(() => {
//         axios.get(
//             `http://139.59.60.50:8000/api/pptx/${params.id}/`
//         )
//             .then(res => {
//                 console.log(res.data.success.pptx)
//                 setData(res.data.success.pptx)
//             })
//             .catch(err => {
//                 console.log(err)
//             })

//     }, [params.id])
//     console.log(data)

//     const fetchVideoChunks = async () => {
//         try {
//             const response = await axios.get(`http://139.59.60.50/api/video/1684125599_This_is_Your_Period_in_2_Minutes___Glamour(2).mp4/`, {
//                 responseType: 'arraybuffer',
//             });

//             const chunkSize = 1000000; // Adjust the chunk size as per your requirement
//             const videoData = new Uint8Array(response.data);

//             // Split the video data into chunks
//             const chunks = [];
//             let i = 0;
//             while (i < videoData.length) {
//                 chunks.push(videoData.subarray(i, i + chunkSize));
//                 i += chunkSize;
//             }

//             setVideoChunks(chunks);
//         } catch (error) {
//             console.error('Error fetching video chunks:', error);
//         }
//     };

//     const playNextChunk = () => {
//         setCurrentChunkIndex((prevIndex) => prevIndex + 1);
//     };

//     useEffect(() => {
//         fetchVideoChunks();
//     }, []);

//     useEffect(() => {
//         if (videoChunks.length > 0 && videoRef.current) {
//             const videoBlob = new Blob([videoChunks[currentChunkIndex]], { type: 'video/mp4' });
//             videoRef.current.src = URL.createObjectURL(videoBlob);
//         }
//     }, [videoChunks, currentChunkIndex]);

//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.addEventListener('ended', playNextChunk);
//             videoRef.current.addEventListener('error', playNextChunk);
//         }
//         return () => {
//             if (videoRef.current) {
//                 videoRef.current.removeEventListener('ended', playNextChunk);
//                 videoRef.current.removeEventListener('error', playNextChunk);
//             }
//         };
//     }, [currentChunkIndex]);


//     return (
//         <div style={{
//             marginTop: '25vh',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '30px',
//         }}>
//             <video width="60%" height="300" controls >
//                 {/* <source src="/Video/test.mp4" type="video/mp4" /> */}
//                 <source src={videoRef.current} type='video/mp4' />
//                 {/* <source src={`http://139.59.60.50/api/video/1684125599_This_is_Your_Period_in_2_Minutes___Glamour(2).mp4/" type="video/mp4`} /> */}
//             </video>

//         </div>
//     );
// };
// export default VideoPlayer;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from './Axios/axios';

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
        <div style={{
            marginTop: '18vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px',
            width: '100%',
            minHeight: '500px',
        }}>
            {videoUrl ? (
                <video controls width={900} height={500} >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    );
};

export default VideoPlayer;







