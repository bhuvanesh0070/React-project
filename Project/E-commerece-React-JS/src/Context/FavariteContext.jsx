import React, { createContext, useContext, useEffect, useState } from 'react'
import { authContext } from './AuthContext';
import { cartContext } from './CartContext';

export let favariteContext = createContext('');
export default function FavariteContextProvider(props) {
    let { userData } = useContext(authContext)
    let [favItems, setfavItems] = useState(JSON.parse(localStorage.getItem("favItems")) || [])
    let [countFav, setcountFav] = useState(Array.from(new Set(favItems)).length || 0)
    let [login, setlogin] = useState(false);

    console.log();

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('favItems')) != null) {
            setfavItems(Array.from(new Set(JSON.parse(localStorage.getItem('favItems')).map(el => JSON.stringify(el)))).map(el => JSON.parse(el)))
            console.log(countFav);
        }
    }, [])


    function addToFav(productData) {
        if (localStorage.getItem('userData') != null) {

            favItems.push(productData);
            localStorage.setItem('favItems', JSON.stringify(Array.from(new Set(favItems.map(JSON.stringify))).map(JSON.parse)))
            setcountFav(Array.from(new Set(favItems)).length)





        } else {
            setlogin(true)
        }

    }
    function clearAllItems() {
        localStorage.removeItem('favItems')
        setfavItems([])
        setcountFav(0)

    }

    function removeItemsFav(item) {
        if (favItems.length == 1) {
            clearAllItems()

        } else {
            let arr = favItems.filter((ele) => { return ele != item })
            console.log(arr);
            setfavItems(arr)

            localStorage.setItem('favItems', JSON.stringify(arr))
            setcountFav(countFav - 1)

        }


    }


    return <>
        <favariteContext.Provider value={{ addToFav, setfavItems, setcountFav, setlogin, login, removeItemsFav, clearAllItems, countFav, favItems }}>
            {props.children}
        </favariteContext.Provider>

    </>
}
