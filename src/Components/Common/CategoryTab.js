import React, { useMemo, useState } from 'react'
import "./CategoryTab.css"
import { Link } from 'react-router-dom';
import LoaderImageTitleDateView from '../Loader/LoaderImageTitleDateView';
import Presentations from '../Presentations';

const CategoryTab = ({ articles, linkCategory, loading }) => {

  const videos = useMemo(() => articles.filter((article, index) => article.ext_type === "mp4"), [articles])
  const pptx = useMemo(() => articles.filter((article, index) => article.ext_type === "pptx"), [articles])
  const pdf = useMemo(() => articles.filter((article, index) => article.ext_type === "jpeg"), [articles])
  const excel = useMemo(() => articles.filter((article, index) => article.ext_type === "xlsx"), [articles])


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 12;
  const pageCount = Math.ceil(articles.length / pageSize);
  const visibleArticles = videos.slice(
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
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Video
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          PPTX
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          PDF
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Excel
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className='ArticlesInnerDiv'>
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
              <div className='ArticlesContentVideo'>
                {visibleArticles.map((article, index) => (
                  
                  <div key={index} className="ArticlesContentEachVideo">
                    <Link to={"/" + linkCategory + "/" + article.id} style={{ textDecoration: 'none' }}>
                      <div className='ArticlesContentImageDIvVideo'>
                        <img src={article.image ?
                          "http://139.59.60.50/uploads/" + linkCategory + "/" + article.image
                          :
                          "/images/NoImageFound.png"
                        } />
                      </div>
                      <p ><b >{article.title}</b></p>
                      <p>Published Date: {article.created_at.slice(0, 10)}</p>
                    </Link>
                    <div className='ArticlesContentEachViewsVideo'></div>
                    <p style={{ color: 'rgba(0, 0, 0, .75)' }}>{article.count} views</p>
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
                  onChange={handleGoToPage}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Presentations presentations={pptx} />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Presentations presentations={pdf} />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <Presentations presentations={excel} />
        </div>
      </div>
    </div>
  )
}

export default CategoryTab
