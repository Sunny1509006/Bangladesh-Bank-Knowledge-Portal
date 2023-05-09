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
import Contact from '../Components/Contact';
import CircularContent from '../Components/CircularContent';
import ProjectContent from '../Components/ProjectContent';
import ResearchContent from '../Components/ResearchContent';
import PresentationContent from '../Components/PresentationContent';
import NewsContent from '../Components/NewsContent';
import Faq from '../Components/Faq';
import ShowSearchText from '../Components/ShowSearchText';
import ShowSearchContent from '../Components/ShowSearchContent';
import AboutBangladeshBank from '../Components/AboutBangladeshBank';
import AboutGreenClimateFund from '../Components/AboutGreenClimateFund';
import AboutUNOPS from '../Components/AboutUNOPS';
import HeaderTemp from '../Components/HeaderTemp';
import FooterTemp from '../Components/FooterTemp';

const Home = () => {
    return (
        <>
            <HeaderTemp />
            <div className='MainContainer'>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/articles" element={<Articles />} />
                    <Route exact path="/articles/:id" element={<ArticleContent />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/projects/:id" element={<ProjectContent />} />
                    <Route exact path="/research" element={<Research />} />
                    <Route exact path="/research/:id" element={<ResearchContent />} />
                    <Route exact path="/presentations" element={<Presentations />} />
                    <Route exact path="/pptx/:id" element={<PresentationContent />} />
                    <Route exact path="/circulars" element={<Circulars />} />
                    <Route exact path="/notices/:id" element={<CircularContent />} />
                    <Route exact path="/news" element={<News />} />
                    <Route exact path="/news/:id" element={<NewsContent />} />
                    <Route exact path="/faq" element={<Faq />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path="/search" element={<ShowSearchText />} />
                    <Route exact path="/search/content/:id" element={<ShowSearchContent />} />
                    <Route exact path="/bangladeshbank" element={<AboutBangladeshBank />} />
                    <Route exact path="/greenclimatefund" element={<AboutGreenClimateFund />} />
                    <Route exact path="/unops" element={<AboutUNOPS />} />


                </Routes>
                {/* <RightSideBar /> */}
            </div>
            {/* <Footer /> */}
            <FooterTemp />
        </>
    )
}

export default Home
