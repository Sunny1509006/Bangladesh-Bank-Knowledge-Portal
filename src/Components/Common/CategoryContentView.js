import React from 'react'
import "./CategoryContentView.css"
import { FaShareAlt } from 'react-icons/fa'

const CategoryContentView = ({ article }) => {
    return (
        <div className='CategoryContentMain'>
            <div className='CategoryContentInnerView'>
                <div className='CategoryContent'>
                    {/* <div className='CategoryContentImageTitle'> */}
                    <h3 style={{ color: '#034E6F' }}><b>{article.title}</b></h3>
                    {/* </div> */}
                    <div className='CategoryContentShare'>
                        <p>Share</p>
                        <FaShareAlt color='#034E6F' style={{ padding: '3px' }} />
                    </div>
                </div>
                <div className='CategoryContentDate'>
                    <p>Publish Date: {article.created_at?.slice(0, 10)}</p>
                </div>
                {/* <div className='CategoryContentDescription'>
                    <div dangerouslySetInnerHTML={{ __html: article.description }} />
                </div> */}
                <div className='CategoryContentImage'>
                    {article.image ?
                        <>
                            <img src={article.image ? article.image : '/images/NoImageFound.png'} />
                            <div dangerouslySetInnerHTML={{ __html: article.description }} />
                        </>
                        :
                        <div dangerouslySetInnerHTML={{ __html: article.description }} />

                    }


                </div>

            </div>
        </div>
    )
}

export default CategoryContentView
