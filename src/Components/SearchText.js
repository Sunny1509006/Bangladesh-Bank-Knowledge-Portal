import React from 'react';
import './SearchText.css';
import {  BsChatRight, BsSearch } from 'react-icons/bs'
// import useAuth from '../../hooks/authHooks';
import { Button } from 'react-bootstrap';

const SearchText = () => {
    // const { query, setQuery, handleSearch } = useAuth();

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <form 
            // onSubmit={handleSearch} 
            style={{ display: 'flex',  width: '100%' }}>
                <input style={{
                    padding: '6px 20px',
                    fontFamily: 'Kalpurush',
                }}
                    type='text'
                    placeholder='Search...'
                    className='SearchText'
                    // value={query}
                    // onChange={(e) =>
                    //     setQuery(e.target.value)
                    // }
                />
                <Button type="button"
                    // onClick={handleSearch}
                    style={{
                        marginTop: '2px',
                        // marginLeft: '20%',
                        position: 'absolute',
                        border: 'none',
                        backgroundColor: 'white',
                        paddingTop: '5px',
                        right: '50px'

                    }}>
                    <BsSearch fontSize={18} style={{ color: 'blue' }} />

                </Button>
            </form>
        </div>
    )
}

export default SearchText
