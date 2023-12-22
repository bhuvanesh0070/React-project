import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext';
import { favariteContext } from '../../Context/FavariteContext';
import { Helmet } from 'react-helmet';

export default function ProductDetails() {
    let { addToCart, cards } = useContext(cartContext)
    let { addToFav, favItems } = useContext(favariteContext)

    console.log(cards);
    let { id, type } = useParams();
    console.log(id);
    const [itemdetails, setItemdetails] = useState({})
    async function getItem(type, id) {
        let { data } = await axios.get(`https://rus-digital-televisions.onrender.com/${type}/${id}`)
        setItemdetails(data)
    }
    useEffect(() => {
        getItem(type, id)
    }, [])
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Details</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>


        <section className='my-5'>
            <div className="container bg-white position-relative">
                <diw className="row">
                    <div className="col-md-4">
                        {itemdetails.img ? <img className='w-100' src={itemdetails.img} alt="" /> : <div className='h-100 d-flex justify-content-center align-items-center'><div class="spinner-grow  " role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div></div>
                        }


                    </div>
                    <div className="col-md-6 d-flex mt-5 ">
                        <div>
                            <h5 className='h2'>{itemdetails.name}.</h5>
                            <div className="d-flex">
                                <h5 className='h2 pt-3'>{itemdetails.price}$</h5>
                                <p className='ps-2 ms-5 mt-4'><span className='ps-2  color text-danger rounded-5 px-2 py-1'>-{itemdetails.discount?.slice(0, 3)}</span></p>
                            </div>

                            {Array.from(new Set(cards?.map((element) => element.name))).includes(itemdetails.name) ? <p className='h5 text-success my-3'>items is added<i className="fa-regular fa-sm  ps-2 fa-circle-check"></i></p> : <button onClick={() => { addToCart(itemdetails) }} className='btnFav bg-transparent border-0 mt-4  text-primary d-block'><h4 className='h4 fav'>Add To Cart <i className="ps-2 fa-solid fa-cart-arrow-down"></i></h4></button>}
                            {Array.from(new Set(favItems?.map((element) => element.name))).includes(itemdetails.name) ? <i className=" fa-solid text-danger m-4 fa-heart fa-2xl"></i> : <div onClick={() => { addToFav(itemdetails) }}><i className="fa-regular  pointer fa-heart fa-beat-fade m-4 fa-2xl"></i></div>}



                        </div>

                    </div>
                </diw>
            </div>

        </section>

    </>
}
