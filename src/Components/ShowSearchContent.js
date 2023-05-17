import React from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/authHooks';
import HighlightedText from "./HighlightedText"

const ShowSearchContent = () => {
    const { searchData, marginDiv } = useAuth();
    const params = useParams();

    const getSearchDataById = (id) => {
        return searchData.find((data) => data.id === id);
    };

    const data = getSearchDataById(parseInt(params.id, 10));

    return (
        < >
            <div key={params.id} style={{
                paddingTop: '25vh',
                display: 'flex',
                minHeight: '400px',
                width: '100%',
                flexDirection: 'column',
                flex: '1',
            }}>
                <Helmet>
                    <title>
                        Search content Details
                    </title>
                </Helmet>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 'calc(100% - 60px)',
                    margin: '30px',
                    padding: '20px',
                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',

                }}>
                    <b><HighlightedText text={data.title} /></b>
                    <div style={{
                        paddingTop: '10px',
                        fontSize: '12px'
                    }}>
                        <HighlightedText text={data.description} />
                        </div>
                </div>
            </div>

        </>

    )
}

export default ShowSearchContent
