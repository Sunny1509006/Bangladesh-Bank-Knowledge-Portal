import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryContentView from './Common/CategoryContentView'
import axios from './Axios/axios'
import { Helmet } from 'react-helmet'

const ResearchContent = () => {
  const params = useParams()
  const [article, setArticle] = useState([])

  useEffect(() => {
    axios.get(
        `/api/research/${params.id}/`
    )
        .then(res => {
            console.log(res.data.success)
            setArticle(res.data.success)
        })
        .catch(err => {
            console.log(err)
        })

}, [params.id])
// console.log(article)

  return (
    <>
    <Helmet>
      <title>
        Research Details
      </title>
    </Helmet>
    <CategoryContentView article={article} category={"research"} />
    </>
  )
}

export default ResearchContent
