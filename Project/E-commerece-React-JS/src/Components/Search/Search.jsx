import React, { useContext, useState } from 'react'
import searchStyle from './Search.module.css'
import { mediaContext } from '../../Context/MediaContext'
import Kitchen from './../Kitchen/Kitchen';
import { favariteContext } from '../../Context/FavariteContext'
import { cartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Search() {
    let datea;
    let { personal, phonse, headPhones, computers, cameras, accessories, tvs, kitchen, allProducts } = useContext(mediaContext)

    let [type, setType] = useState(allProducts)
    let [termSearch, settermSearch] = useState('')
    let { addToCart, cards } = useContext(cartContext)
    let { favItems, addToFav } = useContext(favariteContext);
    const dataMap = new Map();
    dataMap.set('allProducts', allProducts)
    dataMap.set('personal', personal)
    dataMap.set('headPhones', headPhones)
    dataMap.set('phone', phonse)
    dataMap.set('computers', computers)
    dataMap.set('cameras', cameras)
    dataMap.set('accessories', accessories)
    dataMap.set('tvs', tvs)
    dataMap.set('kitchen', kitchen)

    function getSelectValue(e) {
        const iterator1 = dataMap.keys();

        for (const i of iterator1) {
            if (e.target.value == i) {
                datea = dataMap.get(i)
                setType(datea)
            }

        }
        console.log(datea)
    }






    return <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Search</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>


        {allProducts?.length ? <div>
            <div className="container mt-5">
                <div className='row '>
                    <div className="col-md-8">
                        <div>
                            <label htmlFor="search" className='h3 mb-3'> Search:</label>
                            <input onChange={(event) => { settermSearch(event.target.value) }} placeholder='Search ......' type="text" name="search" id="search" className='form-control border-1 border-primary' />
                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <select onChange={(e) => { getSelectValue(e) }} className='form-control bg-info'>
                            <option value="0">select filed</option>

                            <option value="allProducts">All</option>
                            <option value="tvs">TVs</option>
                            <option value="headPhones">head Phones</option>
                            <option value="phone">Phones</option>
                            <option value="computers">Computers</option>
                            <option value="cameras">Cameras</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="personal">Personal care</option>
                            <option value="accessories">Accessories</option>

                        </select>
                    </div>
                </div>
            </div>


            <div className="container mt-5">

                <div className="row">
                    {!type.length ? <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                        type?.filter((item) => {
                            if (termSearch === '') {
                                return item;
                            } if (item.name?.toLowerCase().includes(termSearch.toLowerCase())) {
                                return item;
                            }
                        }).map((item, index) => (
                            <div key={index} className="col-md-3 grid-box   ">
                                <div className='bg-white  border-1 border'>
                                    <Link className=' text-dark  ' to={`/details/${item.id}/mobilesandtablets`}>
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
                                        <p className='ps-2'><span className='ps-2  color text-danger rounded-5 px-2 py-1'>{item.discount ? -item.discount?.slice(0, 3) : 'NO discount'}</span></p>
                                        {Array.from(new Set(cards?.map((element) => element.name))).includes(item.name) ? <i className="fa-regular  fa-circle-check fa-xl text-success "></i> : <div onClick={() => { addToCart(item) }}><i className="fa-solid pointer fa-cart-arrow-down fa-beat fa-xl "></i></div>}
                                    </div>


                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div> : <div className='spinner w-100 d-flex justify-content-center vh-100 align-items-center'><div className="spinner-grow size" role="status">
            <span className="visually-hidden">Loading...</span></div></div>
        }
    </>
}
