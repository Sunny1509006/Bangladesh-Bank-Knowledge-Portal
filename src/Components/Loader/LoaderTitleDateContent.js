import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoaderTitleDateContent = () => {
    return (
        <div style={{
            width: 'calc(100% - 40px)',
            margin: '20px'
        }}>
            <Skeleton />
            <Skeleton style={{
                width: '30%'
            }} />
            <div>
                <Skeleton style={{
                    float: 'left',
                    height: '30vh',
                    width: '30%',
                    marginTop: '20px'
                }} />
                <Skeleton count={10} style={{
                    float: 'right',
                    width: 'calc(70% - 20px)',
                }} />
            </div>
            <Skeleton count={10} style={{
                float: 'right',
            }} />
        </div>
    )
}

export default LoaderTitleDateContent
