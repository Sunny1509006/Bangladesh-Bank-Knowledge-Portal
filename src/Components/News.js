import React, {useState, useEffect} from 'react'
import Categories from './Common/Categories';
import axios from './Axios/axios';

const News = () => {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  useEffect(() => {
      const loadPosts = async () => {
        const response = await axios.get(
          "/api/news/"
        );
        console.log(response.data.success);
        setArticles(response.data.success);
  
      };
  
      loadPosts();
    }, []);

  return (
      <Categories category={"News"} articles={articles}/>
  )
}

export default News
