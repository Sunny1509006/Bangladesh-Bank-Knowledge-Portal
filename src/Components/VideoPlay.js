import React, { useState, useEffect } from 'react';
// import Video from 'react-html5video';
import axios from 'axios';
// import axios from './Axios/axios'
import { useParams } from 'react-router-dom'
import { useRef } from 'react';

// const VideoPlay = () => {
//   const [videoChunks, setVideoChunks] = useState([]);
//   const [currentChunkIndex, setCurrentChunkIndex] = useState(0);

//     const params = useParams()
//     const [data, setData] = useState(null)

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

//   const fetchVideoChunks = async () => {
//     try {
//       const response = await axios.get(`http://139.59.60.50/api/video/1684125599_This_is_Your_Period_in_2_Minutes___Glamour(2).mp4/`, {
//         responseType: 'arraybuffer',
//       });

//       const chunkSize = 1000000; // Adjust the chunk size as per your requirement
//       const videoData = new Uint8Array(response.data);

//       // Split the video data into chunks
//       const chunks = [];
//       let i = 0;
//       while (i < videoData.length) {
//         chunks.push(videoData.subarray(i, i + chunkSize));
//         i += chunkSize;
//       }

//       setVideoChunks(chunks);
//     } catch (error) {
//       console.error('Error fetching video chunks:', error);
//     }
//   };

//   const playNextChunk = () => {
//     setCurrentChunkIndex((prevIndex) => prevIndex + 1);
//   };

//   // Fetch the video chunks when the component mounts
//   useEffect(() => {
//     fetchVideoChunks();
//   }, []);

//   return (
//     <div style={{
//         marginTop: '25vh',
//     }}>
//       {videoChunks.length > 0 ? (
//         <Video
//           controls
//           onEnded={playNextChunk}
//           onError={playNextChunk}
//         >
//           <source src={URL.createObjectURL(new Blob([videoChunks[currentChunkIndex]]))} type="video/mp4" />
//         </Video>
//       ) : (
//         <div>Loading video...</div>
//       )}
//     </div>
//   );
// };

// export default VideoPlay;

const VideoPlay = () => {
    const [videoChunks, setVideoChunks] = useState([]);
    const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
    const videoRef = useRef(null);

    const params = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(
            `http://139.59.60.50:8000/api/pptx/${params.id}/`
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

    const fetchVideoChunks = async () => {
        try {
            const response = await axios.get(`http://139.59.60.50/api/video/1684125599_This_is_Your_Period_in_2_Minutes___Glamour(2).mp4/`, {
                responseType: 'arraybuffer',
            });

            const chunkSize = 1000000; // Adjust the chunk size as per your requirement
            const videoData = new Uint8Array(response.data);

            // Split the video data into chunks
            const chunks = [];
            let i = 0;
            while (i < videoData.length) {
                chunks.push(videoData.subarray(i, i + chunkSize));
                i += chunkSize;
            }

            setVideoChunks(chunks);
        } catch (error) {
            console.error('Error fetching video chunks:', error);
        }
    };

    const playNextChunk = () => {
        setCurrentChunkIndex((prevIndex) => prevIndex + 1);
    };

    // Fetch the video chunks when the component mounts
    useEffect(() => {
        fetchVideoChunks();
    }, []);

    useEffect(() => {
        if (videoChunks.length > 0 && videoRef.current) {
            const videoBlob = new Blob([videoChunks[currentChunkIndex]], { type: 'video/mp4' });
            videoRef.current.src = URL.createObjectURL(videoBlob);
        }
    }, [videoChunks, currentChunkIndex]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('ended', playNextChunk);
            videoRef.current.addEventListener('error', playNextChunk);
        }
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', playNextChunk);
                videoRef.current.removeEventListener('error', playNextChunk);
            }
        };
    }, [currentChunkIndex]);


    return (
        <div style={{
            marginTop: '25vh',
        }}>
            {videoChunks.length > 0 ? (
                <video
                    ref={videoRef}
                    controls
                    // onEnded={playNextChunk}
                    // onError={playNextChunk}
                >
                    {/* <source src={URL.createObjectURL(new Blob([videoChunks[currentChunkIndex]]))} type="video/mp4" /> */}
                    <source src="" type="video/mp4" />

                </video>
            ) : (
                <div>Loading video...</div>
            )}
        </div>
    );
};

export default VideoPlay
