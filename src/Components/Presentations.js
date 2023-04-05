import React, {useState, useEffect} from 'react'
import Categories from './Common/Categories';
import axios from './Axios/axios';

const Presentations = () => {
    const [articles, setArticles] = useState([]);
    console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
          const response = await axios.get(
            "/api/pptx/"
          );
          console.log(response.data.success);
          setArticles(response.data.success);
    
        };
    
        loadPosts();
      }, []);

    return (
        <Categories category={"Presentations"} articles={articles} linkCategory={"pptx"}/>
    )
}

export default Presentations
