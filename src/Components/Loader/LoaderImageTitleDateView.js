import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoaderImageTitleDateView = () => {
    return (
        <div style={{
            width: 'calc(100% - 20px)'
        }}>
            <Skeleton style={{
                height: '20vh',
                margin: '10px',
            }} />
            <Skeleton style={{
                margin: '5px 10px',
            }} />
            <Skeleton style={{
                marginTop: '5px',
                margin: '10px',
            }} />
            <Skeleton style={{
                margin: '5px 10px',
            }} />
            <Skeleton style={{
                margin: '10px 10px',
            }} />
        </div>
    )
}

export default LoaderImageTitleDateView
