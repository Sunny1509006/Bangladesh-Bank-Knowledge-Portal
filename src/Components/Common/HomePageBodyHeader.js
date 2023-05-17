import React from 'react'

const HomePageBodyHeader = ({title}) => {
  return (
    <div style={{
        width: 'calc(100% - 60px)',
        background: '#EFFFF7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--primary-color)',

        padding: '5px',
        margin: '10px 30px',
        border: '1px solid #D9D9D9',

    }}>
      <h4>{title}</h4>
    </div>
  )
}

export default HomePageBodyHeader
