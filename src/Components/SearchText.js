import React from 'react';
import './SearchText.css';
import {  BsChatRight, BsSearch } from 'react-icons/bs'
import useAuth from "../hooks/authHooks"
import { Button } from 'react-bootstrap';

const SearchText = () => {
    const { query, setQuery, handleSearch } = useAuth();
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <form 
            onSubmit={handleSearch} 
            style={{ display: 'flex',  width: '100%' }}>
                <input style={{
                    padding: '5px 20px',
                    fontFamily: 'Kalpurush',
                }}
                    type='text'
                    placeholder='Search...'
                    className='SearchText'
                    value={query}
                    onChange={(e) =>
                        setQuery(e.target.value)
                    }
                />
                <Button type="button"
                    onClick={handleSearch}
                    className='search_button'>
                    <BsSearch style={{ color: 'blue',
                    //  marginBottom: '-2px' 
                     }} />

                </Button>
            </form>
        </div>
    )
}

export default SearchText
