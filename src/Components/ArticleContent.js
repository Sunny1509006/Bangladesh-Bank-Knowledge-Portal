import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryContentView from './Common/CategoryContentView'
import axios from './Axios/axios'
import { Helmet } from 'react-helmet'

const ArticleContent = () => {

  return (
    <>
    <Helmet>
      <title>
        Article Details
      </title>
    </Helmet>
    <CategoryContentView category={"articles"} />
    </>
  )
}

export default ArticleContent
