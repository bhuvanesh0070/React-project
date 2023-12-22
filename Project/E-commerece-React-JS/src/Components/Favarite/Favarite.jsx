import React, { useContext } from 'react'
import { favariteContext } from '../../Context/FavariteContext'
import { cartContext } from '../../Context/CartContext'
import { Helmet } from 'react-helmet'

export default function Favarite() {
    let { removeItemsFav, clearAllItems, favItems } = useContext(favariteContext)
    let { addToCart, cards } = useContext(cartContext)

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title data-rh="true">Favarite</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>


        <div className="container mt-5">
            {favItems?.length ?
                <div className='  d-flex justify-content-end w-100'><button onClick={clearAllItems} className='btn btn-danger h6  px-5'> Clear All<i className="ps-3 fa-solid fa-trash"></i></button></div> : ''}

            <div className="row g-4">

                {!favItems?.length ? <p className='h3 text-danger my-5'>No items yet !</p> : !favItems?.length ? <div className='h-100 d-flex justify-content-center align-items-center'><div className="spinner-grow  " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div></div> :
                    favItems?.map((item, index) => (
                        <div key={index} className="col-md-3 grid-box   ">

                            <div className=' bg-white  border-1 border'>
                                {item.img ? <img className='w-100' src={item.img} alt="" /> : <div className='h-100 d-flex justify-content-center align-items-center'><div className="spinner-grow  " role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div></div>
                                }

                                <div className='d-flex justify-content-between  px-3  my-3'>
                                    <h1 className='h5 ps-2 '>${item.price}</h1>
                                    <div>
                                        <div className='mb-3 ' onClick={() => { removeItemsFav(item) }}><i className="fa-regular text-danger pointer fa-xl fa-trash-can  fa-fade"></i></div>
                                        {Array.from(new Set(cards?.map((element) => element.name))).includes(item.name) ? <i className="fa-regular  fa-circle-check fa-xl text-success "></i> : <div onClick={() => { addToCart(item) }}><i className="fa-solid  pointer fa-cart-arrow-down fa-beat fa-xl "></i></div>}

                                    </div>

                                </div>
                            </div>

                        </div>

                    ))}

            </div>
        </div>
    </>
}
