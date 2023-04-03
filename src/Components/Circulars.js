import React, {useState, useEffect} from 'react'
import Categories from './Common/Categories';
import axios from './Axios/axios';

const Circulars = () => {

    const [articles, setArticles] = useState([]);
    console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
          const response = await axios.get(
            "/api/notices/"
          );
          console.log(response.data.success);
          setArticles(response.data.success);
    
        };
    
        loadPosts();
      }, []);

    return (
        <Categories category={"Circulars"} articles={articles}/>
    )
}

export default Circulars
