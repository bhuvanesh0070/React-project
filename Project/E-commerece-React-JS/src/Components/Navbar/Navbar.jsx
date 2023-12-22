import React, { useContext } from 'react'
import logo from '../../assets/logo-colored.png'
import navbar from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import { authContext } from '../../Context/AuthContext'
import { favariteContext } from '../../Context/FavariteContext'
import navbarStyle from './Navbar.module.css'
import $ from 'jquery'
export default function Navbar() {
    let { countCarts, setcards, setcountCarts, setTotalPrice } = useContext(cartContext)
    let { userData, setData } = useContext(authContext)
    let { countFav, setfavItems, setcountFav } = useContext(favariteContext)

    let navigate = useNavigate()
    function logout() {
        localStorage.removeItem('userData')
        setcountFav(0)
        setData(null)
        setfavItems([])
        setcards([])
        setTotalPrice(0)
        setcountCarts(0)
        localStorage.clear()
        navigate('/login')
    }


    return <>
        <nav className={`navbar   navbar-expand-lg bg-light  p-0`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'><img className='w-100' src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                        <li className="nav-item text-center mt-2 text-secondary me-3">
                            <Link to='/search' >
                                <i className="fa-solid fa-magnifying-glass text-dark"></i>
                                <p className='text-dark   fw-bold'>Search</p>
                            </Link>
                        </li>
                        <li className="nav-item text-center mt-2 text-secondary">
                            <Link to='/favarite' className='text-secondary' >
                                <i className="fa-solid fa-heart"></i><span className='p-1 rounded-5 bg-primary text-light'>{countFav}</span>
                                <p className='text-gray   fw-bold'>WishList</p>
                            </Link>
                        </li>
                        <li className="ms-lg-4 nav-item text-center mt-2 text-secondary">
                            <Link to='/cart' className='text-secondary'>

                                <i className="fa-solid fa-cart-shopping"></i><span className='p-1 rounded-5 bg-primary text-light'>{countCarts}</span>
                                <p className='text-gray fw-bold'>My Cart</p>

                            </Link>

                        </li>

                        {localStorage.getItem('userData') != null ? <>

                            <li className='d-flex  align-items-center'>
                                <span onClick={logout} className='nav-link btn-style pointer  text-dark cursor'>Log Out<i className=" ps-1 fa-solid fa-arrow-right-from-bracket"></i></span>

                            </li>
                        </> : <><li className='ms-lg-4 nav-item text-center pt-2 mt-4 text-secondary'>
                            <Link className=" text-secondary h6" to="/login">Login</Link>

                        </li>
                            <li className='ms-lg-4 nav-item text-center pt-2 mt-4 text-secondary'>
                                <Link className=" text-secondary h6 " to="/register">Register</Link>
                            </li></>}




                    </ul>
                </div>
            </div>
        </nav>
        <hr className='p-0 m-0' />

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link  fw-bolder" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder" to='/headphone'>Head phones</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder" to='/tvs' >Televisions</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder" to='/camera'>Cameras</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder" to='/kitchen'>Kitchen</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder" to='/computers'>Computers</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder" to='/accessories'>Accessories</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder" to='/personal'>Personal</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder" to='/phones'>Phones</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
        <hr className='p-0 m-0' />


    </>
}
