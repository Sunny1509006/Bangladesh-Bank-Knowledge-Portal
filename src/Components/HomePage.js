import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { FaShareAlt } from 'react-icons/fa'
import './HomePage.css'

const HomePage = () => {
  const articles = [
    {
      title: 'Sample Title Here 1',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    },
    {
      title: 'Sample Title Here 2',
      description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    },
    {
      title: 'Sample Title Here 3',
      description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    },
    {
      title: 'Sample Title Here 4',
      description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    },
    {
      title: 'Sample Title Here 5',
      description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    },
    {
      title: 'HSample Title Here 6',
      description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    },
    {
      title: 'Sample Title Here 7',
      description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    },
    {
      title: 'Sample Title Here 8',
      description: 'Second In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    },
  ];

  const FirstArticle = useMemo(() => articles.filter((article, index) => index === 0), [articles]);
  const FilterArticles = useMemo(() => articles.filter((article, index) => (index >= 1 & index <= 8)), [articles]);
  return (
    <div className='HomePageMain'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='FirstArticle'>
        {FirstArticle.map((article, index) => (
          <>
            <div className='TopContentArticle'>
              <div className='ArticleImageTitle'>
                <img src="/images/BangladeshBank_logo.png" />
                <p><b>{article.title}</b></p>
              </div>
              <div className='TopContentShare'>
                <p>Share</p>
                <FaShareAlt color='#034E6F' style={{ padding: '3px' }} />
              </div>
            </div>
            <div className='ArticleDate'>
              <p>Publish Date: </p>
            </div>
            <div className='ArticleDescription'>
              <p>{article.description}</p>
            </div>
            <div className='ArticleImage'>
              <img src="/images/title.png" />
            </div>
          </>
        ))}
      </div>
      <div className='OtherArticles'>

        {FilterArticles.map((article, index) => (
          <div className='OtherArticlesEach' >
            <div className='TopContentArticle'>
              <div className='ArticleImageTitle'>
                <img src="/images/BangladeshBank_logo.png" />
                <p><b>{article.title}</b></p>
              </div>
              <div className='TopContentShare'>
                <p>Share</p>
                <FaShareAlt color='#034E6F' style={{ padding: '3px' }} />
              </div>
            </div>
            <div className='ArticleDate'>
              <p>Publish Date: </p>
            </div>
            <div className='ArticleDescription'>
              <p>{article.description}</p>
            </div>
            <div className='ArticleImage'>
              <img src="/images/title.png" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
