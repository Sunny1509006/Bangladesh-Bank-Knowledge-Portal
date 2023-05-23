import React from 'react'
import { Helmet } from 'react-helmet'

const AboutGreenClimateFund = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '400px',
            flex: '1',
            paddingTop: '18vh',
        }}>
            <Helmet>
                <title>
                    Green Climate Fund
                </title>
            </Helmet>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'calc(100% - 60px)',
                margin: '30px',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                padding: '20px',
            }}>
                <img src="/images/Green_Climate_Fund.png" style={{ height: '100px', width: '160px' }} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    alignItems: 'left',
                    marginTop: '20px',
                }}>
                    <h4 style={{
                        color: 'var(--primary-color)',
                        marginBottom: '10px',
                    }}>Overview</h4>
                    <p style={{
                        fontSize: '12px',
                    }}>There is a shrinking window of opportunity to address the climate crisis. Average global temperature is currently estimated to be 1.1°C above pre-industrial times. Based on existing trends, the world could cross the 1.5°C threshold within the next two decades and 2°C threshold early during the second half of the century. Limiting global warming to 1.5°C is still narrowly possible and will be determined by the investment decisions we make over the next decade. The Green Climate Fund (GCF) – a critical element of the historic Paris Agreement - is the world’s largest climate fund, mandated to support developing countries raise and realize their Nationally Determined Contributions (NDC) ambitions towards low-emissions, climate-resilient pathways.</p>
                    <h4 style={{
                        color: 'var(--primary-color)',
                        marginBottom: '10px',
                        marginTop: '20px',
                    }}>Our transformative approach</h4>
                    <p style={{
                        fontSize: '12px',
                    }}>We achieve our goal by investing across four transitions – built environment; energy & industry; human security, livelihoods and wellbeing; and land-use, forests and ecosystems – and employing a four-pronged approach:</p>
                    <ul style={{
                        fontSize: '12px',
                        marginLeft: '40px',

                    }}>
                        <br/>
                        <li>Transformational planning and programming: by promoting integrated strategies, planning and policymaking to maximise the co-benefits between mitigation, adaptation and sustainable development.</li>
                        <li>Catalysing climate innovation: by investing in new technologies, business models, and practices to establish a proof of concept.</li>
                        <li>De-risking investment to mobilize finance at scale: by using scarce public resources to improve the risk-reward profile of low emission climate resilient investment and crowd-in private finance, notably for adaptation, nature-based solutions, least developed countries (LDCs) and small island developing states (SIDS).</li>
                        <li>Mainstreaming climate risks and opportunities into investment decision-making to align finance with sustainable development: by promoting methodologies, standards and practices that foster new norms and values.</li>
                        <br/>
                    </ul>
                    <p style={{
                        fontSize: '12px',
                        
                    }}>Climate change offers businesses an unprecedented chance to capitalise on new growth and investment opportunities that can protect the planet as well. GCF employs part of its funds to help mobilise financial flows from the private sector to compelling and profitable climate-smart investment opportunities.</p>
                </div>
            </div>

        </div>
    )
}

export default AboutGreenClimateFund
