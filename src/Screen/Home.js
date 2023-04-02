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
import Articles from '../Components/Articles';
import Projects from '../Components/Projects';
import Research from '../Components/Research';
import Presentations from '../Components/Presentations';
import Circulars from '../Components/Circulars';
import News from '../Components/News';
import ArticleContent from '../Components/ArticleContent';

const Home = () => {
    return (
        <>
            <Header />
            <div className='MainContainer'>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/articles" element={<Articles />} />
                    <Route exact path="/articles/:id" element={<ArticleContent />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/research" element={<Research />} />
                    <Route exact path="/presentations" element={<Presentations />} />
                    <Route exact path="/circulars" element={<Circulars />} />
                    <Route exact path="/news" element={<News />} />

                </Routes>
                <RightSideBar />
            </div>
            <Footer />
        </>
    )
}

export default Home
