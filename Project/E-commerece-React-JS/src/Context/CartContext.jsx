import React, { createContext, useContext, useEffect, useState } from 'react'
import { authContext } from './AuthContext';

export let cartContext = createContext('');
export default function CartContextProvider(props) {
    let { userData } = useContext(authContext)
    let [cards, setcards] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])
    let [countCarts, setcountCarts] = useState(Array.from(new Set(cards)).length || 0)

    let [totalPrice, setTotalPrice] = useState(0);
    let [islogin, setislogin] = useState(false);

    console.log();

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('cartItems')) != null) {
            setcards(Array.from(new Set(JSON.parse(localStorage.getItem('cartItems')).map(el => JSON.stringify(el)))).map(el => JSON.parse(el)))
            console.log(countCarts);




        }




    }, [])


    function addToCart(productData) {
        if (localStorage.getItem('userData') != null) {

            cards.push(productData);
            localStorage.setItem('cartItems', JSON.stringify(Array.from(new Set(cards.map(JSON.stringify))).map(JSON.parse)))
            setcountCarts(Array.from(new Set(cards)).length)





        } else {
            setislogin(true)
        }

    }
    function clearAllItems() {
        localStorage.removeItem('cartItems')
        setcards([])
        setcountCarts(0)

    }

    function removeItemsCart(item) {
        if (cards.length == 1) {
            clearAllItems()

        } else {
            let arr = cards.filter((ele) => { return ele != item })
            console.log(arr);
            setcards(arr)

            localStorage.setItem('cartItems', JSON.stringify(arr))
            setcountCarts(countCarts - 1)

        }


    }


    return <>
        <cartContext.Provider value={{ addToCart, islogin, setislogin, removeItemsCart, clearAllItems, clearAllItems, setcountCarts, cards, setcards, countCarts, setTotalPrice, totalPrice }}>
            {props.children}
        </cartContext.Provider>

    </>
}
