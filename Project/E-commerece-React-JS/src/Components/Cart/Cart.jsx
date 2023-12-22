import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Cart() {
    let { setTotalPrice, totalPrice, cards, removeItemsCart, clearAllItems } = useContext(cartContext)
    setTotalPrice(cards.map((ele) => { return parseFloat(ele.price) + totalPrice }))

    let price = 0;
    for (const el of cards) {
        price += el.price.replaceAll(',', '') * 1


    }
    setTotalPrice(price)
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Cart</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>


        <div className="container mt-5">
            {cards?.length ?
                <div className='  d-flex justify-content-end w-100'><button onClick={clearAllItems} className='btn btn-danger h6  px-5'> Clear All<i class="ps-3 fa-solid fa-trash"></i></button></div> : ''}

            <div className="row g-4">

                {!cards?.length ? <p className='h3 text-danger my-5'>No items yet !</p> : !cards?.length ? <div className='h-100 d-flex justify-content-center align-items-center'><div class="spinner-grow  " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div></div> :
                    cards?.map((item, index) => (
                        <div key={index} className="col-md-3 grid-box   ">

                            <div className=' bg-white  border-1 border'>
                                {item.img ? <img className='w-100' src={item.img} alt="" /> : <div className='h-100 d-flex justify-content-center align-items-center'><div class="spinner-grow  " role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div></div>
                                }

                                <div className='d-flex justify-content-between  px-3  my-3'>
                                    <h1 className='h5 ps-2 '>${item.price}</h1>
                                    <div onClick={() => { removeItemsCart(item) }}><i className="fa-regular text-danger pointer fa-2xl fa-trash-can fa-fade"></i></div>
                                </div>

                            </div>

                        </div>

                    ))}

            </div>
            {cards?.length ?
                <div className="row justify-content-between mt-5">
                    <div className="col-md-2">
                        <p className='h2 '>Total : ${totalPrice} </p>

                    </div>
                    <div className="col-md-2">
                        <Link className='btn-success' to='/checkout'><button className='btn btn-success'> CheckOut</button></Link>
                    </div>
                </div> : ''}

        </div>

    </>
}