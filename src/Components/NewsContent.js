import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryContentView from './Common/CategoryContentView'
import axios from './Axios/axios'
import { Helmet } from 'react-helmet'

const NewsContent = () => {
  
    return (
      <>
      <Helmet>
        <title>
          News Details
        </title>
      </Helmet>
      <CategoryContentView category={"news"} categoryName={"News"} />
      </>
    )
  }

export default NewsContent
