import React, { useState, useEffect } from 'react'
import './Contact.css'
import { HiMail } from 'react-icons/hi'
import { FaPhone } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button } from 'react-bootstrap';
import axios from './Axios/axios'
import { formControlClasses } from '@mui/material'
import { Helmet } from 'react-helmet'

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }


    const handleApi = () => {
        console.log(name, phone, email, title, description)

        axios.post("/api/query/",
            {
                name: name,
                mobile: phone,
                email: email,
                title: title,
                description: description
            },
        )
            .then(result => {
                alert("success")
                setName("")
                setEmail("")
                setPhone("")
                setTitle("")
                setDescription("")
            })
            .catch(error => {
                console.log(error);
                alert('Error');

            })
    }
    return (
        <div className='ContactMain'>
            <Helmet>
                <title>
                    Contact us
                </title>
            </Helmet>
            <div className='ContactInnerDiv'>
                <h4>Contact with us</h4>
                <div className='ContactTop'>
                    <div className='ContactMail'>
                        <HiMail fontSize={30} />
                        <p style={{ color: 'black', padding: '5px', fontSize: '12px' }}><b>Info@knowledgehub.com</b></p>
                    </div>
                    <div className='ContactMail'>
                        <FaPhone fontSize={30} />
                        <p style={{ color: 'black', padding: '5px', fontSize: '12px' }}><b>+880 1XXXXXXXXXX</b></p>
                    </div>
                    <div className='ContactMail'>
                        <MdLocationPin fontSize={30} />
                        <p style={{ color: 'black', padding: '5px', fontSize: '12px' }}><b>Office 1</b></p>
                    </div>
                </div>
                <form className='ContactQuery' onSubmit={handleApi}>
                    <h5>Submit your queries</h5>
                    <div className='ContactQueryDivide'>
                        <TextField required={true} fullWidth label="Name" variant="outlined"
                           value={name} onChange={handleName} inputProps={{ style: { height: '15px' } }} />
                        <TextField required={true} fullWidth label="Phone" variant="outlined"
                           value={phone} onChange={handlePhone} inputProps={{ style: { height: '15px' } }} />
                    </div>

                    <TextField fullWidth label="Email ID" type='email' variant="outlined"
                       value={email} onChange={handleEmail} inputProps={{ style: { height: '15px' } }} />
                    <TextField required={true} fullWidth label="Title" variant="outlined"
                        value={title} onChange={handleTitle} inputProps={{ style: { height: '15px' } }} />
                    <TextareaAutosize
                        aria-label="description"
                        placeholder="Description"
                        rowsMin={3}
                        value={description}
                        onChange={handleDescription}
                        style={{ padding: '10px', fontSize: '12px', height: '100px', fontFamily: 'Segoe UI' }}
                    />
                    <Button variant='contained' className='ContactQuerySend'
                        onClick={handleApi}
                    >Send</Button>
                </form>
            </div>

        </div>
    )
}

export default Contact
