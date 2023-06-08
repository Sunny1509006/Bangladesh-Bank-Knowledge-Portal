import React, { useEffect, useMemo, useState } from 'react'
import axios from '../Axios/axios';
import "./Categories.css"
import { Link } from 'react-router-dom';
import LoaderImageTitleDateView from '../Loader/LoaderImageTitleDateView';

const HomePageCategory = ({ category }) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(
                `/api/${category}/`
            );
            console.log(response.data.lastFive);
            setArticles(response.data.lastFive);
            setLoading(false)

        };

        loadPosts();
    }, []);

    const FilterArticles = useMemo(() => articles.filter((article, index) => (index >= 0 & index <= 2)), [articles]);
    return (
        <>
            {loading ?
                <div style={{
                    display: 'flex',
                    width: 'calc(100% - 20px)',
                    flexWrap: 'wrap',
                    margin: '0px 12px',

                }}>
                    {[1, 2, 3].map((item) =>
                    (
                        <div key={item} className="ArticlesContentEach">
                            <LoaderImageTitleDateView />
                        </div>
                    ))}
                </div>
                :

                <div style={{
                    display: 'flex',
                    width: 'calc(100% - 20px)',
                    flexWrap: 'wrap',
                    margin: '0px 12px',

                }}>
                    {FilterArticles.map((article, index) => (
                        <div key={index} className="ArticlesContentEach">
                            <Link to={"/" + category + "/" + article.id} style={{ textDecoration: 'none' }}>
                                <div className='ArticlesContentImageDIv'>
                                <img src={article.image ?
                                    // "http://127.0.0.1:8000/uploads/" + category + "/" + article.image
                                    "http://139.59.60.50/uploads/" + category + "/" + article.image
                                    :
                                    "/images/NoImageFound.png"
                                } />
                                </div>

                                <p style={{padding: '0px 15px'}}><b >{article.title}</b></p>
                            </Link>
                            <p style={{padding: '10px 15px'}}>Published Date: {article.created_at.slice(0, 10)}</p>
                            <div className='ArticlesContentEachViews'></div>
                            <p style={{ color: 'rgba(0, 0, 0, .75)', padding: '0px 15px' }}>{article.count} views</p>

                        </div>

                    ))
                    }
                </div>
            }
        </>
    )
}

export default HomePageCategory
