import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Categories.css'
import axios from '../Axios/axios';
import LoaderImageTitleDateView from '../Loader/LoaderImageTitleDateView';
import HomePageBodyHeader from './HomePageBodyHeader';
import CategoryTab from './CategoryTab';

const Categories = ({ category, linkCategory }) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(
                `/api/${linkCategory}/`
            );
            console.log(response.data.success);
            setArticles(response.data.success);
            setLoading(false)

        };

        loadPosts();
    }, []);

    console.log(typeof (linkCategory))
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 12;
    const pageCount = Math.ceil(articles.length / pageSize);
    const visibleArticles = articles.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleGoToPage = (event) => {
        const newPage = parseInt(event.target.value);
        if (newPage >= 1 && newPage <= pageCount) {
            setCurrentPage(newPage);
        }
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        if (pageCount <= 3) {
            for (let i = 1; i <= pageCount; i++) {
                pageNumbers.push(i);
            }
        } else {
            let start = currentPage - 1;
            let end = currentPage + 1;
            if (start < 1) {
                start = 1;
                end = start + 2;
            }
            if (end > pageCount) {
                end = pageCount;
                start = end - 2;
            }
            if (start > 1) {
                pageNumbers.push(1, '...');
            }
            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }
            if (end < pageCount) {
                pageNumbers.push('...', pageCount);
            }
        }
        return pageNumbers;
    };

    return (
        <div className='ArticlesMain'>
            <div className='ArticlesInnerHeading'>
                {/* <h3>{category}</h3> */}
                <HomePageBodyHeader title={category} />
            </div>
            <div>
                {(() => {
                    if (category === "E-Learning") {
                        return (
                            <CategoryTab
                                articles={articles}
                                linkCategory={linkCategory}
                                loading={loading}
                            />
                        )
                    } else {
                        return (
                            <div className='ArticlesInnerDiv'>
                                {/* <div className='ArticlesInnerHeading'>
                    <h3>{category}</h3>
                </div> */}
                                {loading ?
                                    <div className='ArticlesContent'>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) =>
                                        (
                                            <div key={item} className="ArticlesContentEach">
                                                <LoaderImageTitleDateView />
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div className='ArticlesContent'>
                                        {visibleArticles.map((article, index) => (
                                            <div key={index} className="ArticlesContentEach">
                                                <Link to={"/" + linkCategory + "/" + article.id} style={{ textDecoration: 'none' }}>
                                                    <div className='ArticlesContentImageDIv'>
                                                        <img src={article.image ?
                                                            // "http://127.0.0.1:8000/uploads/" + linkCategory + "/" + article.image
                                                            "http://139.59.60.50/uploads/" + linkCategory + "/" + article.image
                                                            :
                                                            "/images/NoImageFound.png"
                                                        } />
                                                    </div>
                                                    <p style={{padding: '0px 15px'}}><b >{article.title}</b></p>
                                                    <p style={{padding: '10px 15px'}}>Published Date: {article.created_at.slice(0, 10)}</p>
                                                </Link>
                                                <div className='ArticlesContentEachViews'></div>
                                                <p style={{ color: 'rgba(0, 0, 0, .75)', padding: '0px 15px' }}>{article.count} views</p>
                                            </div>
                                        ))
                                        }
                                    </div>
                                }
                                <div className="blog-pagination__controls">
                                    <button
                                        className="blog-pagination__control"
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 1}
                                    >
                                        Prev
                                    </button>
                                    {getPageNumbers().map((pageNumber, index) => (
                                        <button
                                            key={index}
                                            className={`blog-pagination__control ${pageNumber === currentPage ? 'active' : ''
                                                }`}
                                            onClick={() => handlePageChange(pageNumber)}
                                            disabled={pageNumber === '...'}
                                        >
                                            {pageNumber}
                                        </button>
                                    ))}
                                    <button
                                        className="blog-pagination__control"
                                        onClick={handleNextPage}
                                        disabled={currentPage === pageCount}
                                    >
                                        Next
                                    </button>
                                    <div className="blog-pagination__goto">
                                        <span>Go to page: </span>
                                        <input
                                            type="number"
                                            min="1"
                                            max={pageCount}
                                            // value={currentPage}
                                            onChange={handleGoToPage}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })()}
            </div>


        </div>
    )
}

export default Categories
