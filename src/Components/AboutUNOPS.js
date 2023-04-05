import React from 'react'

const AboutUNOPS = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '400px',
            flex: '1',
            paddingTop: '25vh',
        }}>
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
                <img src="/images/UNOPS.png" style={{ height: '110px', width: '120px' }} />
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
                        marginBottom: '10px',
                    }}>UNOPS provides infrastructure, procurement and project management services for a more sustainable world.</p>
                    <p style={{
                        fontSize: '12px',
                    }}>Firmly grounded in UN values, we ensure our partners maximize the positive impact of their peace and security, humanitarian and development projects. Equality, inclusiveness, sustainability and resilience form the foundations of our work.</p>
                <h4 style={{
                        color: 'var(--primary-color)',
                        marginBottom: '10px',
                        marginTop: '20px',
                    }}>Leadership</h4>
                    <p style={{
                        fontSize: '12px',
                        marginBottom: '10px',
                    }}>What drives us is a passion to fight inequalities and to provide opportunities to those most vulnerable. We are passionate about quality: In our people and in what we do.</p>
                <h4 style={{
                        color: 'var(--primary-color)',
                        marginBottom: '10px',
                        marginTop: '20px',
                    }}>Where we work</h4>
                    <p style={{
                        fontSize: '12px',
                        marginBottom: '10px',
                    }}>With nearly three decades of experience working in fragile and conflict-affected situations, UNOPS rapidly responds to our partners' needs in some of the world’s most challenging environments.</p>
                </div>

            </div>

        </div>
    )
}

export default AboutUNOPS
