import React from 'react'
import logo from '../../assets/logo-colored.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return <>
        <section className="footer   pt-4 bg-white ">
            <div className="container ">
                <div className="row ">

                    <div className="col-lg-4 col-md-6 ">
                        <div className="info  ">
                            <img src={logo} alt="" />
                            <p className="pt-3">Bhuvanesh S</p>
                            <p className=" "><span className="fw-bold text">phone :</span> 9442740498</p>
                            <p className=""><span className="fw-bold">Email :</span> bhuvanesh@gmail.com</p>
                        </div>
                        <div className="social-accounts  d-flex ">
                            <a href="https://twitter.com/ahmed63g" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.facebook.com/ahmedshaltout3g" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/ahmed_shaltout_3g/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/ahmed-shaltout-015b85252/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="footer-link col-lg-2 col-md-6 pb-4">
                        <p className=" fw-bold">Useful Links</p>
                        <ul className="p-0">
                            <li>


                                <Link to="/" className="text-decoration-none "><i className="fa-solid fa-arrow-right-long text-dark"></i> Home</Link>
                            </li>
                            <li className="pt-3">

                                <Link to='/headphone'><i className="fa-solid fa-arrow-right-long  text-dark"></i>  Head phones</Link>                            </li>
                            <li className="pt-3">

                                <Link to='/tvs' ><i className="fa-solid fa-arrow-right-long  text-dark"></i> Televisions</Link>                            </li>

                            <li className="pt-3">

                                <Link to='/camera'><i className="fa-solid fa-arrow-right-long  text-dark"></i> Cameras</Link>   </li>



                        </ul>
                    </div>
                    <div className="footer-link col-lg-2 col-md-6 pb-4">
                        <p className=" fw-bold">Useful Links</p>
                        <ul className="p-0">
                            <li className="">

                                <Link to='/personal'><i className="fa-solid fa-arrow-right-long  text-dark"></i> Personal</Link>                            </li>

                            <li className="pt-3">

                                <Link to='/computers'><i className="fa-solid fa-arrow-right-long text-dark"></i> Computers</Link>                            </li>
                            <li className="pt-3">

                                <Link to='/accessories'><i className="fa-solid fa-arrow-right-long  text-dark"></i> Accessories</Link>                           </li>

                            <li className="pt-3">

                                <Link to='/camera'><i className="fa-solid fa-arrow-right-long p-1 text-dark"></i> Cameras</Link>                            </li>



                        </ul>
                    </div>
                    <div className="footer-link col-lg-2 col-md-6 pb-4">
                        <p className=" fw-bold">User Linkes</p>
                        <ul className="p-0">
                            <li className="">

                                <Link to='/login'><i className="fa-solid fa-arrow-right-long  text-dark"></i> Login</Link>                            </li>

                            <li className="pt-3">

                                <Link to='/register'><i className="fa-solid fa-arrow-right-long  text-dark"></i> Register</Link>                            </li>
                            <li className="pt-3">

                                <Link to='/favarite'><i className="fa-solid fa-arrow-right-long  text-dark"></i> Loves</Link>                           </li>

                            <li className="pt-3">

                                <Link to='/cart'><i className="fa-solid fa-arrow-right-long  text-dark"></i> My cart</Link>                            </li>



                        </ul>
                    </div>


                </div>

            </div>

        </section>

    </>
}
