import React from 'react'
import HomePage from '../Components/HomePage'
import Header from '../Components/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Footer from '../Components/Footer';
import RightSideBar from '../Components/RightSideBar';

const Home = () => {
    return (
        <>
            <Header />
            <div className='MainContainer'>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
                <RightSideBar />
            </div>
            <Footer />
        </>
    )
}

export default Home
