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
        <div style={{
            display: 'flex',
            width: 'calc(100% - 20px)',
            flexWrap: 'wrap',
            margin: '0px 12px',

        }}>
            {/* <div className='ArticlesContent'> */}
            {FilterArticles.map((article, index) => (
                <div key={index} className="ArticlesContentEach">
                    {loading ?
                        // <div style={{
                        //     width: '100%'
                        // }}>
                        //     <Skeleton style={{
                        //         height: '20vh'
                        //     }}/>
                        // </div> 
                        <LoaderImageTitleDateView />
                        :
                        <>
                            <Link to={"/" + category + "/" + article.id} style={{ textDecoration: 'none' }}>

                                <img src={article.image ?
                                    "http://139.59.60.50/uploads/" + category + "/" + article.image
                                    :
                                    "/images/NoImageFound.png"
                                } />

                                <p ><b >{article.title}</b></p>
                            </Link>
                            <p>Published Date: {article.created_at.slice(0, 10)}</p>
                            <div className='ArticlesContentEachViews'></div>
                            <p style={{ color: 'rgba(0, 0, 0, .75)' }}>{article.count} views</p>


                        </>
                    }

                </div>

            ))
            }
            {/* </div> */}
        </div>
    )
}

export default HomePageCategory
