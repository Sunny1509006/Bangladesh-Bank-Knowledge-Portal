import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./CategoryContentView.css"
import { FaShareAlt } from 'react-icons/fa'
import Skeleton from 'react-loading-skeleton'
import axios from '../Axios/axios'
import LoaderTitleDateContent from '../Loader/LoaderTitleDateContent'
import ContentInnerHeader from './ContentInnerHeader'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import { Button } from 'react-bootstrap'

const CategoryContentView = ({ category, categoryName }) => {
    const params = useParams()
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)

    const ebookURL = `https://139.59.60.50/api/${category}/${params.id}`

    const [showShare, setShowShare] = useState(false);
    const handleShareClick = () => {
        setShowShare(!showShare);
    };

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
            <div className='ArticlesInnerHeading'>
                <ContentInnerHeader title={categoryName} category={category} />
            </div>
            <div className='CategoryContentInnerView'>
                {loading ?
                    <LoaderTitleDateContent />
                    :
                    <>
                        <div className='CategoryContent'>
                            <h3 style={{ color: '#034E6F' }}><b>{article.title || <Skeleton />}</b></h3>
                            {/* </div> */}
                            <div className='CategoryContentShare'>
                                <Button style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--primary-color)',
                                    fontWeight: 'bold',
                                }}
                                    onClick={handleShareClick}>
                                    Share
                                </Button>
                                <FaShareAlt color='#034E6F' style={{ padding: '4px 0px' }} onClick={handleShareClick} fontSize={24}/>
                                {showShare && (
                                    <div style={{
                                        display: 'flex',
                                        // flexDirection: 'column',
                                        position: 'absolute',
                                        background: 'white',
                                        padding: '10px',
                                        paddingBottom: '5px',
                                        marginTop: '-50px',
                                        marginLeft: '-100px',
                                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',

                                    }}>
                                        <FacebookShareButton url={ebookURL}>
                                            <FacebookIcon size={24} style={{ marginRight: '5px' }} />
                                        </FacebookShareButton>
                                        <WhatsappShareButton url={ebookURL}>
                                            <WhatsappIcon size={24} style={{ marginRight: '5px' }} />
                                        </WhatsappShareButton>
                                        <EmailShareButton url={ebookURL}>
                                            <EmailIcon size={24} style={{ marginRight: '5px' }} />
                                        </EmailShareButton>
                                        <LinkedinShareButton url={ebookURL}>
                                            <LinkedinIcon size={24} style={{ marginRight: '5px' }} />
                                        </LinkedinShareButton>
                                        <TelegramShareButton url={ebookURL}>
                                            <TelegramIcon size={24} style={{ marginRight: '5px' }} />
                                        </TelegramShareButton>
                                        <TwitterShareButton url={ebookURL}>
                                            <TwitterIcon size={24} />
                                        </TwitterShareButton>
                                    </div>
                                )}
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
                                    {/* <img src={"http://127.0.0.1:8000/uploads/" + category + "/" + article.image} /> */}
                                    <img src={"http://139.59.60.50/uploads/" + category + "/" + article.image} style={{marginRight: '10px'}}/>
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
