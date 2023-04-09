import React from 'react'
import { Helmet } from 'react-helmet'

const AboutBangladeshBank = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '400px',
        flex: '1',
        paddingTop: '25vh',
    }}>
        <Helmet>
            <title>
                bangladesh bank
            </title>
        </Helmet>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'calc(100% - 100px)',
            margin: '30px',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            padding: '20px',
        }}>
            <img src="/images/BangladeshBank_logo.png" style={{height: '100px', width: '100px'}}/>
            <h2>Bangladesh bank</h2>
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
                    }}>Establishment</h4>
                    <p style={{
                        fontSize: '12px',
                    }}>Bangladesh Bank, the central bank and apex regulatory body for the country's monetary and financial system, was established in Dhaka as a body corporate vide the Bangladesh Bank Order, 1972 (P.O. No. 127 of 1972) with effect from 16th December, 1971. At present it has ten offices located at Motijheel, Sadarghat, Chittagong, Khulna, Bogra, Rajshahi, Sylhet, Barisal, Rangpur and Mymensingh in Bangladesh; total manpower stood at 5807 (officials 3981, subordinate staff 1826) as on March 31, 2015.</p>
                <h4 style={{
                    color: 'var(--primary-color)',
                    marginBottom: '10px',
                    marginTop: '20px',
                    }}>Functions</h4>
                <p style={{
                    fontSize: '12px',
                }}>BB performs all the core functions of a typical monetary and financial sector regulator, and a number of other non core functions. The major functional areas include :</p>
                <ul style={{
                    fontSize: '12px',
                }}>
                    <li>Formulation And Implementation Of Monetary And Credit Policies.</li>
                    <li>Regulation And Supervision Of Banks And Non-Bank Financial Institutions, Promotion And Development Of Domestic Financial Markets.</li>
                    <li>Management Of The Country's International Reserves.</li>
                    <li>Issuance Of Currency Notes.</li>
                    <li>Regulation And Supervision Of The Payment System.</li>
                    <li>Acting As Banker To The Government.</li>
                    <li>Money Laundering Prevention.</li>
                    <li>Collection And Furnishing Of Credit Information.</li>
                    <li>Implementation Of The Foreign Exchange Regulation Act.</li>
                    <li>Managing a Deposit Insurance Scheme.</li>                
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default AboutBangladeshBank
