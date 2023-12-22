import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { mediaContext } from '../../Context/MediaContext'
import { cartContext } from '../../Context/CartContext'
import { favariteContext } from '../../Context/FavariteContext'
import { Helmet } from 'react-helmet'

export default function Computers() {
    let { computers } = useContext(mediaContext)
    let { addToCart, cards } = useContext(cartContext)

    let { favItems, addToFav } = useContext(favariteContext)

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Computers</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>


        {computers?.length ? <div className="container mt-5">

            <div className="row g-4">

                {!computers ? <div className='h-100 d-flex justify-content-center align-items-center'><div class="spinner-grow  " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div></div> :
                    computers?.map((item, index) => (
                        <div key={index} className="col-md-3 grid-box   ">
                            <div className='bg-white  border-1 border'>
                                <Link className=' text-dark  ' to={`/details/${item.id}/computers`}>
                                    <div className=' '>
                                        {item.img ? <img className='w-100' src={item.img} alt="" /> : <div className='h-100 d-flex justify-content-center align-items-center'><div class="spinner-grow  " role="status">
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
                        </div>
                    ))}
            </div>
        </div> : <div className='spinner w-100 d-flex justify-content-center vh-100 align-items-center'><div className="spinner-grow size" role="status">
            <span className="visually-hidden">Loading...</span></div></div>
        }
    </>
}
