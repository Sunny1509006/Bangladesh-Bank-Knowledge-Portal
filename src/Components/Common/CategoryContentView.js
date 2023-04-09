import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./CategoryContentView.css"
import { FaShareAlt } from 'react-icons/fa'
import Skeleton from 'react-loading-skeleton'
import axios from '../Axios/axios'
import LoaderTitleDateContent from '../Loader/LoaderTitleDateContent'

const CategoryContentView = ({ category }) => {
    const params = useParams()
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(
            `/api/${category}/${params.id}/`
        )
            .then(res => {
                console.log(res)
                setArticle(res.data.success)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                
            })

    }, [params.id])
    return (
        <div className='CategoryContentMain'>
            <div className='CategoryContentInnerView'>
                {loading ?
                    <LoaderTitleDateContent />
                    :
                    <>
                        <div className='CategoryContent'>
                            <h3 style={{ color: '#034E6F' }}><b>{article.title || <Skeleton />}</b></h3>
                            {/* </div> */}
                            <div className='CategoryContentShare'>
                                <p>Share</p>
                                <FaShareAlt color='#034E6F' style={{ padding: '3px' }} />
                            </div>
                        </div>
                        <div className='CategoryContentDate'>
                            <p>Publish Date: {article.created_at?.slice(0, 10) || <Skeleton />}</p>
                        </div>
                        {/* <div className='CategoryContentDescription'>
                    <div dangerouslySetInnerHTML={{ __html: article.description }} />
                </div> */}
                        <div className='CategoryContentImage'>
                            {article.image ?
                                <>
                                    <img src={"http://139.59.60.50/uploads/" + category + "/" + article.image} />
                                    <div dangerouslySetInnerHTML={{ __html: article.description }} />
                                </>
                                :
                                <div dangerouslySetInnerHTML={{ __html: article.description }} />

                            }


                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default CategoryContentView
