import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryContentView from './Common/CategoryContentView'
import axios from './Axios/axios'

const ArticleContent = () => {
  const params = useParams()
  const [article, setArticle] = useState([])

  useEffect(() => {
    axios.get(
        `/api/articles/${params.id}/`
    )
        .then(res => {
            console.log(res)
            setArticle(res.data.success)
        })
        .catch(err => {
            console.log(err)
        })

}, [params.id])
  // const articles = 
  //   {
  //     title: 'Sample Title Here 1',
  //     description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace'
  //   }

  return (
    <CategoryContentView article={article} />
  )
}

export default ArticleContent
