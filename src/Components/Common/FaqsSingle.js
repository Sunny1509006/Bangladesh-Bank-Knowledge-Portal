import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai'

const FaqsSingle = ({ question, answer }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <div style={{
                width: 'calc(100% - 30px)',
                background: '#F0FAFF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'black',
                fontWeight: 'bold',
                fontSize: '14px',
                padding: '5px 15px',
                marginTop: '10px',
                border: '1px solid rgba(110, 110, 110, 0.580164)',

            }}>
                {question}
                {open ?
                    <AiOutlineDown onClick={handleOpen} />
                    :
                    <AiOutlineRight onClick={handleOpen} />
                }

            </div>
            {open && (
                <div style={{
                    width: 'calc(100% - 30px)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'black',
                    fontSize: '12px',
                    padding: '5px 15px',
                    border: '1px solid rgba(110, 110, 110, 0.580164)',

                }}>
                    {answer}
                </div>
            )}
        </>
    )
}

export default FaqsSingle
