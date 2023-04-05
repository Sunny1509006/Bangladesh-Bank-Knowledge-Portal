import React, { useEffect, useState} from 'react'
import Categories from './Common/Categories'
import axios from './Axios/axios';

const Projects = () => {

    const [articles, setArticles] = useState([]);
    console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
          const response = await axios.get(
            "/api/projects/"
          );
          console.log(response.data.success);
          setArticles(response.data.success);
    
        };
    
        loadPosts();
      }, []);

    return (
        <Categories category={"Projects"} articles={articles} linkCategory={"projects"} />
    )
}

export default Projects
