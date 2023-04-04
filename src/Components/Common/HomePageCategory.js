import React, { useEffect, useMemo, useState } from 'react'
import axios from '../Axios/axios';
import "./Categories.css"
import { Link } from 'react-router-dom';

const HomePageCategory = ({ category }) => {

    const [articles, setArticles] = useState([]);
    console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(
                `/api/${category}/`
            );
            console.log(response.data.lastFive);
            setArticles(response.data.lastFive);

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
                        <Link to={"/" + category + "/" + article.id} style={{ textDecoration: 'none' }}>
                            <img src="/images/title.png" />
                            <p ><b >{article.title}</b></p>
                            <p>Published Date: {article.created_at.slice(0, 10)}</p>
                        </Link>
                        <div className='ArticlesContentEachViews'></div>
                        <p style={{ color: 'rgba(0, 0, 0, .75)' }}>{article.count} views</p>
                    </div>
                ))
                }
            {/* </div> */}
        </div>
    )
}

export default HomePageCategory
