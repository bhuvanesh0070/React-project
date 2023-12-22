import React, { useContext, useState } from 'react'
import homeStyle from './Home.module.css'

import header from '../../assets/Mask group.png'
import g1 from '../../assets/Group 969.png'
import g2 from '../../assets/Group 970.png'
import h1 from '../../assets/h1.webp'
import h2 from '../../assets/h2.png'
import h3 from '../../assets/h3.webp'
import h4 from '../../assets/h4.webp'
import avatar from '../../assets/Avatar.png'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import { mediaContext } from '../../Context/MediaContext'
import { cartContext } from '../../Context/CartContext'
import { favariteContext } from '../../Context/FavariteContext'
import { Helmet } from 'react-helmet'
import { authContext } from '../../Context/AuthContext'
export default function Home() {
    // counter **********************************************************
    let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    let [days, setDayes] = useState()
    let [hours, sethours] = useState()
    let [minutes, setminutes] = useState()
    let [seconds, setseconds] = useState()
    let { personal, headPhones, computers, cameras, accessories, tvs } = useContext(mediaContext)
    let { addToCart, cards } = useContext(cartContext)
    let { userData } = useContext(authContext)

    let { favItems, addToFav } = useContext(favariteContext)
    let counter = setInterval(() => {
        let dateNow = new Date().getTime();

        let dateDiff = (countDownDate - dateNow);
        setDayes(Math.floor(dateDiff / (1000 * 60 * 60 * 24)));
        sethours(Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setminutes(Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)));
        setseconds(Math.floor((dateDiff % (1000 * 60)) / 1000));

        if (dateDiff < 0) {
            clearInterval(counter);
        }
    }, 1000);
    // counter **********************************************************


    return <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Home</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        {tvs?.length ? <div>
            <header className='my-5 mx-auto'>
                <div className="container ">

                    <div className="row gy-3">

                        <div className="col-lg-10 col-md-12 ">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>

                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={h1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h3} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={h4} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden ">Next</span>
                                </button>
                            </div>

                        </div>

                        <div className="col-lg-2 col-md-12  ">
                            <div className={homeStyle.login}>
                                <div className='d-flex'>
                                    <div className='d-flex text-success align-items-center me-2'>
                                        {/* <i className="fa-solid fa-2xl fa-circle-user"></i> */}
                                        <img className='w-100' src={avatar} alt="" />
                                    </div>
                                    <p className='h6'>Hi, {userData?.name}<br /> let's get start</p>
                                </div>
                                {localStorage.getItem('userData') == null ? <div><Link to='register'><button className='btn mt-3 w-100 py-1 btn-primary'>Join Now</button></Link>
                                    <Link to='login' ><button className='btn text-primary mt-3 w-100 py-1 btn-light '>Log in</button></Link></div> : ''}

                            </div>

                            <div className={homeStyle.getReady}>
                                <p className='h6 text-white'>Get US $10 off<br /> with a new <br />supplier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            {/* section 2 discount */}

            <section className='mt-5'>
                <div className="container  ">
                    <div className="row ">
                        <div className="col-lg-3 col-md-12 bg-white  border-1 border pt-2 pb-5">
                            <p className='h6 mt-3 ps-2'>Deals and Offers</p>
                            <p className='text-secondary ps-2'>Hygiene equipments</p>
                            <div className={homeStyle.Date}>
                                <div >
                                    <p className='h5 '>{days}</p>
                                    <p className='h6'>Days</p>
                                </div>
                                <div>
                                    <p className='h5 '>{hours < 10 ? `0${hours}` : hours}</p>

                                    <p className='h6'>Hour</p>
                                </div>
                                <div>
                                    <p className='h5 '>{minutes < 10 ? `0${minutes}` : minutes}</p>

                                    <p className='h6'>Min</p>
                                </div>
                                <div>
                                    <p className='h5 '>{seconds < 10 ? `0${seconds}` : seconds}</p>

                                    <p className='h6'>Sec</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 bg-white  text-center">
                            <div className="row gy-3 ">
                                <div className="col-lg-2 col-md-12  border border-1">
                                    <Link to='/personal'>
                                        {<img className='w-100 rounded-1' src={personal[0]?.img} alt="" />}
                                        <p className='h5 mt-2'>Personal</p>
                                        <p className='my-4 h6  '><span className='color text-danger rounded-5 px-2 py-1'>-{personal[0]?.discount.slice(0, 3)}</span></p>

                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-12  border border-1">
                                    <Link to='/headphones'>
                                        {<img className='w-100 rounded-1' src={headPhones[0]?.img} alt="" />}
                                        <p className='h6 mt-2'>Head Phones</p>
                                        <p className='my-4 h6  '><span className='color text-danger rounded-5 px-2 py-1'>-{headPhones[0]?.discount.slice(0, 3)}</span></p>
                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-12  border border-1">
                                    <Link to='/camera'>
                                        {<img className='w-100 rounded-1' src={cameras[0]?.img} alt="" />}
                                        <p className='h6 mt-2'>Cameras</p>
                                        <p className='my-4 h6  '><span className='color text-danger rounded-5 px-2 py-1'>-{cameras[0]?.discount.slice(0, 2)}</span></p>

                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-12 border border-1">
                                    <Link to='/computers'>
                                        {<img className='w-100 rounded-1' src={computers[0]?.img} alt="" />}
                                        <p className='h6 mt-2'>Computers</p>
                                        <p className='my-4 h6  '><span className='color text-danger rounded-5 px-2 py-1'>-{computers[0]?.discount.slice(0, 3)}</span></p>

                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-12 border border-1">
                                    <Link to='/tvs'>
                                        {<img className='w-100 rounded-1 ' src={tvs[0]?.img} alt="" />}
                                        <p className='h6 mt-2'>tvs</p>
                                        <p className='my-4 h6  '><span className='color text-danger rounded-5 px-2 py-1'>-{tvs[0]?.discount.slice(0, 3)}</span></p>

                                    </Link>
                                </div>
                                <div className="col-lg-2 col-md-12 border border-1">
                                    <Link to='/accessories'>
                                        {<img className='w-100 rounded-1 ' src={accessories[0]?.img} alt="" />}
                                        <p className='h6 mt-2'>tvs</p>
                                        <p className='my-4 h6  '><span className='color text-danger rounded-5 px-2 py-1'>-{accessories[0]?.discount.slice(0, 3)}</span></p>

                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* section 3 */}

            <section className={`${homeStyle.movies} back w-100 mt-5`}>


                <div className="container ">
                    <div className="section-title">
                        <h2>TV</h2>
                        <p>CHECK OUR TV</p>
                    </div>

                    <div className="row gy-3">

                        {tvs?.slice(0, 8).map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-12 grid-box bg-white  border-1 border  ">
                                <Link className=' text-dark  ' to={`/details/${item.id}/televisions`}>
                                    <div className=' '>
                                        {item.img ? <img className='w-100' src={item.img} alt="" /> : <div className='h-100 d-flex justify-content-center align-items-center'><div className="spinner-grow  " role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div></div>
                                        }
                                    </div>
                                </Link>
                                <div className='d-flex justify-content-between px-3  mt-3'>
                                    <h1 className='h5 ps-2 '>{item.price}$</h1>
                                    {Array.from(new Set(favItems?.map((element) => element.name))).includes(item.name) ? <i className="fa-solid text-danger fa-heart fa-xl"></i> : <div onClick={() => { addToFav(item) }}><i className="fa-regular pointer fa-heart fa-beat-fade fa-xl"></i></div>}

                                </div>
                                <div className="d-flex justify-content-between px-3 mt-2">
                                    <p className='ps-2'><span className='ps-2  color text-danger rounded-5 px-2 py-1'>-{item.discount?.slice(0, 3)}</span></p>
                                    {Array.from(new Set(cards?.map((element) => element.name))).includes(item.name) ? <i className="fa-regular  fa-circle-check fa-xl text-success "></i> : <div onClick={() => { addToCart(item) }}><i className="fa-solid pointer fa-cart-arrow-down fa-beat fa-xl "></i></div>}

                                </div>



                            </div>

                        ))}

                    </div>

                </div>
            </section>
            <section className={`${homeStyle.movies} back w-100 mt-5`}>


                <div className="container ">
                    <div className="section-title">
                        <h2>Accessories</h2>
                        <p>CHECK OUR Accessories</p>
                    </div>

                    <div className="row gy-3">

                        {accessories?.slice(0, 8).map((item, index) => (
                            <div key={index} className="col-md-3 grid-box bg-white  border-1 border  ">
                                <Link className=' text-dark  ' to={`/details/${item.id}/accessories`}>
                                    <div className=' '>
                                        {item.img ? <img className='w-100' src={item.img} alt="" /> : <div className='h-100 d-flex justify-content-center align-items-center'><div className="spinner-grow  " role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div></div>
                                        }
                                    </div>
                                </Link>
                                <div className='d-flex justify-content-between px-3  mt-3'>
                                    <h1 className='h5 ps-2 '>{item.price}$</h1>
                                    {Array.from(new Set(favItems?.map((element) => element.name))).includes(item.name) ? <i className="fa-solid text-danger fa-heart fa-xl"></i> : <div onClick={() => { addToFav(item) }}><i className="fa-regular pointer fa-heart fa-beat-fade fa-xl"></i></div>}

                                </div>
                                <div className="d-flex justify-content-between px-3 mt-2">
                                    <p className='ps-2'><span className='ps-2  color text-danger rounded-5 px-2 py-1'>-{item.discount?.slice(0, 3)}</span></p>
                                    {Array.from(new Set(cards?.map((element) => element.name))).includes(item.name) ? <i className="fa-regular  fa-circle-check fa-xl text-success "></i> : <div onClick={() => { addToCart(item) }}><i className="fa-solid pointer fa-cart-arrow-down fa-beat fa-xl "></i></div>}

                                </div>



                            </div>

                        ))}

                    </div>

                </div>
            </section>




            <section className={`${homeStyle.movies} back w-100 mt-5`}>


                <div className="container ">
                    <div className="section-title">
                        <h2>Cameras</h2>
                        <p>CHECK OUR Cameras</p>
                    </div>

                    <div className="row gy-3">
                        {cameras?.slice(0, 8).map((item, index) => (
                            <div key={index} className="col-md-3 grid-box bg-white  border-1 border  ">
                                <Link className=' text-dark  ' to={`/details/${item.id}/cameras`}>
                                    <div className=' '>
                                        {item.img ? <img className='w-100' src={item.img} alt="" /> : <div className='h-100 d-flex justify-content-center align-items-center'><div className="spinner-grow  " role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div></div>
                                        }
                                    </div>
                                </Link>
                                <div className='d-flex justify-content-between px-3  mt-3'>
                                    <h1 className='h5 ps-2 '>{item.price}$</h1>
                                    {Array.from(new Set(favItems?.map((element) => element.name))).includes(item.name) ? <i className="fa-solid text-danger fa-heart fa-xl"></i> : <div onClick={() => { addToFav(item) }}><i className="fa-regular pointer fa-heart fa-beat-fade fa-xl"></i></div>}

                                </div>
                                <div className="d-flex justify-content-between px-3 mt-2">
                                    <p className='ps-2'><span className='ps-2  color text-danger rounded-5 px-2 py-1'>-{item.discount?.slice(0, 3)}</span></p>
                                    {Array.from(new Set(cards?.map((element) => element.name))).includes(item.name) ? <i className="fa-regular  fa-circle-check fa-xl text-success "></i> : <div onClick={() => { addToCart(item) }}><i className="fa-solid pointer fa-cart-arrow-down fa-beat fa-xl "></i></div>}

                                </div>
                            </div>

                        ))}




                    </div>

                </div>
            </section>
        </div> : <div className='spinner w-100 d-flex justify-content-center vh-100 align-items-center'><div className="spinner-grow size" role="status">
            <span className="visually-hidden">Loading...</span></div></div>
        }
    </>
}
