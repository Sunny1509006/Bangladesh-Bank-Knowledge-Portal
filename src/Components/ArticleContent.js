import React from 'react'
import CategoryContentView from './Common/CategoryContentView'

const ArticleContent = () => {
  const articles = 
    {
      title: 'Sample Title Here 1',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
    }

  return (
    <CategoryContentView articles={articles} />
  )
}

export default ArticleContent
