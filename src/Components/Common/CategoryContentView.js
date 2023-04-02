import React from 'react'
import "./CategoryContentView.css"
import { FaShareAlt } from 'react-icons/fa'

const CategoryContentView = ({articles}) => {
    return (
        <div className='CategoryContentMain'>
            <div className='CategoryContentInnerView'>
                <div className='CategoryContent'>
                    <div className='CategoryContentImageTitle'>
                        <img src="/images/BangladeshBank_logo.png" />
                        <p><b>{articles.title}</b></p>
                    </div>
                    <div className='CategoryContentShare'>
                        <p>Share</p>
                        <FaShareAlt color='#034E6F' style={{ padding: '3px' }} />
                    </div>
                </div>
                <div className='CategoryContentDate'>
                    <p>Publish Date: </p>
                </div>
                <div className='CategoryContentDescription'>
                    <p>{articles.description}</p>
                </div>
                <div className='CategoryContentImage'>
                    <img src="/images/title.png" />
                </div>

            </div>
        </div>
    )
}

export default CategoryContentView
