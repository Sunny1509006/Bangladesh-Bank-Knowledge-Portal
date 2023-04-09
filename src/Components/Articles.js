import React, { useState, useEffect } from 'react'
import Categories from './Common/Categories';
import axios from './Axios/axios';
import { Helmet } from 'react-helmet';

const Articles = () => {

  const [articles, setArticles] = useState([]);
  console.log(articles);
  useEffect(() => {
    const loadPosts = async () => {
      const response = await axios.get(
        "/api/articles/"
      );
      console.log(response.data.success);
      setArticles(response.data.success);

    };

    loadPosts();
  }, []);

  return (
    <>
    <Helmet>
      <title>
        Articles
      </title>
    </Helmet>
      <Categories category={"Articles"} articles={articles} linkCategory={"articles"} />
    </>
  )
}

export default Articles
