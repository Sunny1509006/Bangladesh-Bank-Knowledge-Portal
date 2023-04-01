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

const Home = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}

export default Home
