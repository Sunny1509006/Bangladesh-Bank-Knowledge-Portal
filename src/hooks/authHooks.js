import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const useAuth = () => {
  const { appInit, query, searchData,
     setQuery, handleSearch } = useContext(AuthContext);

  return {
    appInit,
    query,
    searchData,
    setQuery,
    handleSearch,
  };
};

export default useAuth;
