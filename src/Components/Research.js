import React, {useState, useEffect} from 'react'
import Categories from './Common/Categories';
import axios from './Axios/axios';

const Research = () => {
    const [articles, setArticles] = useState([]);
    console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
          const response = await axios.get(
            "/api/research/"
          );
          console.log(response.data.success);
          setArticles(response.data.success);
    
        };
    
        loadPosts();
      }, []);
    return (
        <Categories category={"Research"} articles={articles} linkCategory={"research"}/>
    )
}

export default Research