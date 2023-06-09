import React from 'react'
import CategoryContentView from './Common/CategoryContentView'
import { Helmet } from 'react-helmet'

const ArticleContent = () => {

  return (
    <>
    <Helmet>
      <title>
        Article Details
      </title>
    </Helmet>
    <CategoryContentView category={"articles"} categoryName={"Article"} />
    </>
  )
}

export default ArticleContent
