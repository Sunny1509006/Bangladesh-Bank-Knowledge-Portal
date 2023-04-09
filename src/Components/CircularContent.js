import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryContentView from './Common/CategoryContentView'
import axios from './Axios/axios'
import { Helmet } from 'react-helmet'

const CircularContent = () => {
  const params = useParams()
  const [article, setArticle] = useState([])

  useEffect(() => {
    axios.get(
        `/api/notices/${params.id}/`
    )
        .then(res => {
            console.log(res)
            setArticle(res.data.success)
        })
        .catch(err => {
            console.log(err)
        })

}, [params.id])

  return (
    <>
    <Helmet>
      <title>
        Circular Details
      </title>
    </Helmet>
    <CategoryContentView article={article} category={"notices"}/>
    </>
  )
}

export default CircularContent
