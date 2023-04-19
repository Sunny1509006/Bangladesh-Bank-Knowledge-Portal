import React, { useState, useEffect } from 'react';
import axios from './Components/Axios/axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext({
  query: null,
  searchData: null,
  appInit: false,
  handleSearch: () => { },
  setQuery: () => { },
});


const AuthProvider = (props) => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [appInit, setAppInit] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    localStorage.setItem("query", query);

    axios.get(`/api/search/?search=${query}`)
    // axios.post("/api/search/", {
    //   q: query
    // }
    // )
      .then(response => {
        // console.log(response.data);
        setSearchData(response.data.success);
        setTimeout(() => {
          setAppInit(true);
        }, 500);
        navigate("/search")
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <AuthContext.Provider value={{
      appInit, query, searchData, handleSearch, setQuery
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
