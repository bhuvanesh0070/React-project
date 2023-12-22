import axios from 'axios';
import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {


    let [error, seterorr] = useState('');
    let [errorList, setErrorList] = useState([]);
    let [isloading, setloading] = useState(false);

    let navigate = useNavigate()
    let [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    function getLoginData(e) {
        let user = { ...userData };
        user[e.target.name] = e.target.value;
        setUserData(user);
    }

    async function sendLoginData() {
        let response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userData).then((response) => {

            localStorage.setItem('userData', response.data.token);
            navigate("/");
        }).catch((error) => {
            seterorr(error.response.data.message);
            setloading(false);


        })
    }

    function LoginValidator() {
        let schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(/([a-zA-Z]|[0-9]){8,}/).required(),

        })
        return schema.validate(userData, { abortEarly: false })
    }

    function submitLogin(e) {
        e.preventDefault();
        setloading(true)
        let validation = LoginValidator();
        if (validation.error) {

            setErrorList(validation.error.details);
            setloading(false);


        }
        else {
            sendLoginData()

        }

    }
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Login</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>



        <div className="firstStyle">
            <div className="container d-flex justify-content-center  vh-100 align-items-center">


                <div className="loginBox">
                    {error.length > 0 ? <div className='alert alert-danger'>{error}</div> : ''}
                    <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" alt='ahmed' />
                    <h3 className='text-center subcolor'>Sign in here</h3>
                    <form onSubmit={submitLogin}>
                        <div className="inputBox">
                            <input onChange={getLoginData} id="email" type="email" name="email" placeholder="Email" />
                            <input onChange={getLoginData} type="password" id='password' name='password' placeholder="Password" />
                        </div>
                        <button className='login' >{isloading == true ? <i className="fa-solid fa-spinner fa-spin"></i> : "Login"}</button>

                        <Link to='/register'><button id='signup' className='mt-3' > Sign Up <i className="fa-solid fa-arrow-right"></i></button></Link>

                    </form>



                    {errorList.length > 0 ? <div className=' w-100 mt-3 col-md-6 '>
                        <ul className='p-1 '>
                            {errorList.map((error, index) => error.context.label == "password" ? <li key={index} className='p-2  border  border-1 border-danger rounded-4 mt-1'>password must more than 8 letter</li> : <li className='p-1 bg-danger border border-black border-1 rounded-4 mt-1' key={index} >{error.message}</li>)}

                        </ul>
                    </div> : ""}
                </div>


            </div>
        </div>
    </>
}
