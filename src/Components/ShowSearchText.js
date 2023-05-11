import React, { useState } from 'react'
import useAuth from '../hooks/authHooks'
import "./ShowSearchText.css"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt, BiPlus } from 'react-icons/bi'
import HighlightedText from './HighlightedText'
import ShowSearchContent from './ShowSearchContent'
import SearchText from './SearchText'

const ShowSearchText = () => {
    const { searchData, query } = useAuth();
    // console.log(searchData);

    // const handleStr = (str) => {
    //     console.log(str);
    //     console.log(typeof(str));
    //     const newStr = str.substring(1, str.length - 1);
    //     return newStr;
    // }
    console.log(query)
    

    return (
        <div className='search_text_main'>
            <Helmet>
                <title>Search Results</title>
            </Helmet>
            <div className='search_content'>
                <div className='search_inner_content'>

                    <div className='search_loop_div'>
                        {localStorage.getItem("query") ?
                            <>
                                <p><b>You are searching for "{query}"</b></p>
                                {searchData.map((result, index) => (
                                    <div key={result.id} className="single_search">
                                        <div className='overflowDiv'>
                                            <div>
                                                {/* <Link to={"/ebook/comment/"+result.id}> */}
                                                <Link to={"/search/content/" + result.id} style={{textDecoration: 'none'}}>
                                                    <b><HighlightedText text={result.title} /></b>
                                                </Link>
                                            </div>
                                            <div>
                                                <div dangerouslySetInnerHTML={{ __html: result.description }} style={{
                                                    paddingTop: '0px',
                                                    fontSize: '12px',
                                                }} />
                                                <p className="read-more"></p>
                                                {/* <HighlightedText text={result.content} searchKey={query} /> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {searchData.length === 0 && (
                                    <p style={{ color: 'red' }}>দুঃখিত! আপনার অনুসন্ধান এর জন্য কোন ফলাফল পাওয়া যায় নাই</p>
                                )}
                            </>
                            :
                            <>
                            <p style={{ color: 'red' }}>আপনি অনুসন্ধান এর জন্য তথ্য দিতে ভুলে গিয়েছেন।</p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowSearchText
