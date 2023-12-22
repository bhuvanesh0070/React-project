import React, { useContext, useState } from 'react'
import style from './Checkout.module.css'
import { cartContext } from '../../Context/CartContext'
import { Helmet } from 'react-helmet'

export default function Checkout() {
    let [done, setDone] = useState(false)
    let { clearAllItems } = useContext(cartContext)
    function dones() {
        setDone(true)
        clearAllItems()
        setTimeout(() => {
            setDone(false)
        }, 15000);
    }
    return <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Checkout</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="container  mt-4">
            {!done ? <div className={`border border-1  ${style.media}`}>
                <div id='form-wrapper'>
                    <form onSubmit={dones}>

                        <div id='header' className='text-center mb-3'>
                            <h1>Time To Square Up!</h1>
                        </div>

                        <div className='text-center'>
                            <i className="fab fa-cc-visa fa-3x   "></i>
                            <i className="fab fa-cc-mastercard ms-4 fa-3x mr-3"></i>
                            <i className="fab fa-cc-amex fa-3x ms-4 mr-3"></i>
                            <i className="fab fa-cc-discover ms-4 fa-3x mr-3"></i>
                        </div>


                        <h5 className='text-center my-3 text-primary'>Card Info</h5>

                        <hr className='mb-1' />

                        <div className='form-group mb-1'>
                            <label className='mb-1' for='nameOnCard'>Name on card</label>
                            <input required className='form-control' id='nameOnCard' placeholder='Name ...' />
                        </div>

                        <div className='form-group mb-1'>
                            <label className='mb-1' for='cardNum'>Card number </label>
                            <input type='number' maxlength='8' minLength='8' required className='form-control' id='cardNum' placeholder='0000-0000-0000-0000' />
                        </div>
                        <div className='form-group mb-1'>
                            <label className='mb-1' for='cardNum'>Expiration </label>
                            <input maxlength='5' minLength='5' required className='form-control' id='cardNum' placeholder='MM/YY' />
                        </div>

                        <div className='form-row mb-1'>
                            <div className='col'>
                                <label className='mb-0' for='ccv'>CCV</label>
                                <input type='password' maxlength='5' minLength='5' required placeholder='* * *' className='form-control' id='ccv' />
                            </div>
                            <button className='btn btn-primary mt-4' type='submit'><i className="fas fa-lock mr-2"></i>Submit Payment</button>
                        </div>
                    </form>
                </div>
            </div> : <h2 className='text-success'>Buy Done Successfully</h2>}
        </div>
    </>
}
