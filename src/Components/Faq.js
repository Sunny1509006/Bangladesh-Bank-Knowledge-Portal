import React, { useState, useEffect, useMemo } from 'react'
import HomePageBodyHeader from './Common/HomePageBodyHeader'
import "./Faq.css"
import axios from "./Axios/axios"
import FaqsSingle from './Common/FaqsSingle'
import { Helmet } from 'react-helmet'


const Faq = () => {

    const [faqs, setFaqs] = useState([]);
    // console.log(articles);
    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(
                "/api/faq/"
            );
            console.log(response.data.success);
            setFaqs(response.data.success);

        };

        loadPosts();
    }, []);

    const evenFaqs = useMemo(() => faqs.filter((article, index) => (index % 2 === 0)), [faqs]);
    const oddFaqs = useMemo(() => faqs.filter((article, index) => (index % 2 === 1)), [faqs]);
    return (
        <div className='FaqMain'>
            <Helmet>
                <title>
                    FAQs
                </title>
            </Helmet>
            <HomePageBodyHeader title={"FAQs"} />
            <div className='FaqInnerDiv'>
                <div className='FaqLeft'>
                    {evenFaqs.map((evenFaq, index) => (
                        <FaqsSingle key={index} question={evenFaq.question} answer={evenFaq.answer}/>
                    ))}
                </div>
                <div className='FaqRight'>
                    {oddFaqs.map((oddFaq, index) => (
                        <FaqsSingle key={index} question={oddFaq.question} answer={oddFaq.answer}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
