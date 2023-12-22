import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import registerStyle from './Register.module.css'
import { Helmet } from 'react-helmet';

export default function Register() {
    let [errorList, setErrorList] = useState([])
    let navigate = useNavigate()
    let [loading, setloading] = useState(false)
    let [error, setErroe] = useState('')
    let [userData, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        rePassword: '',
    })
    function getUserData(eventinfo) {
        let userdata = { ...userData }
        userdata[eventinfo.target.name] = eventinfo.target.value
        setData(userdata);
        console.log(userData)
    }
    function validateRegister() {
        let schema = Joi.object({
            name: Joi.string().min(2).max(30).required(),
            password: Joi.string().pattern(/([a-zA-Z]|[0-9]){8,}/).required(),
            rePassword: Joi.string().pattern(/([a-zA-Z]|[0-9]){8,}/).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phone: Joi.string().min(11).max(11).required()
        })
        console.log(schema.validate(userData))
        return (schema.validate(userData, { abortEarly: false }))
    }


    async function sendDataToApi() {
        let response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData).then((response) => {

            navigate("/login")
        }).catch((error) => {
            console.log(error)
            setErroe(error.response.data.message);
            setloading(false)

        });



    }

    function submit(e) {
        setloading(true)
        e.preventDefault()

        let validator = validateRegister()
        if (validator.error) {
            setloading(false)
            setErrorList(validator.error.details)

        }
        else {
            sendDataToApi()
        }
    }

    return <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Register</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div className="firstStyle">
            <div className="container d-flex justify-content-center pt-5  align-items-center">
                <div className="loginBox">
                    {error.length > 0 ? <div className='alert alert-danger'>{error}</div> : ''}

                    <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" alt='avatar' width="100px" />
                    <h3 className='text-center subcolor'>Sign in here</h3>
                    <form onSubmit={submit}>
                        <div className="inputBox">
                            <input onChange={getUserData} id='name' name='name' type="text" placeholder="Name" />
                            <input onChange={getUserData} id="pass" name='password' type="password" placeholder="Password" />
                            <input onChange={getUserData} id='rePassword' name='rePassword' type="password" placeholder="rePassword" />
                            <input onChange={getUserData} id="email" type="email" name="email" placeholder="Email" />
                            <input onChange={getUserData} id='phone' name='phone' type='number' placeholder="Phone" />

                        </div>
                        <button className='login' >{loading == true ? <i className="fa-solid fa-spinner"></i> : "Register"}</button>

                        <Link to='/login'><button id='signup' className='mt-3' > Sign in <i className="fa-solid fa-arrow-right"></i></button></Link>


                    </form>



                    {errorList.length > 0 ? <div className='w-100 mt-3 col-md-6 border border-danger border-1 rounded-4'>
                        <ul className='p-1 text-danger'>
                            {errorList.map((error, index) => error.context.label == "password" ? <li key={index} className='p-1'>password must more than 8 letter</li> : <li className='p-1' key={index} >{error.message}</li>)}

                        </ul>
                    </div> : ""}
                </div>
            </div>

        </div>

    </>
}
