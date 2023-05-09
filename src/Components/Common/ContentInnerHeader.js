import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContentInnerHeader = ({title, category}) => {
  return (
    <div style={{
        width: 'calc(100% - 72px)',
        background: '#EFFFF7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--primary-color)',

        padding: '5px',
        margin: '10px 30px',
        border: '1px solid #D9D9D9',

    }}>
      <Link to={"/"+category} style={{ color: 'var(--primary-color)' }}><h4>{title}</h4></Link>
      <MdOutlineKeyboardArrowRight fontSize={20}/>
      <h4>Details</h4>
    </div>
  )
}

export default ContentInnerHeader
