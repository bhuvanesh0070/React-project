import React, { useContext } from 'react'
import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'
import { cartContext } from './CartContext';
import { favariteContext } from './FavariteContext';
export let authContext = createContext(null);
export default function AuthContextProvider(props) {
    let [userData, setData] = useState(null);
    let [rend, setrend] = useState(false);

    let { setcountCarts, setcards } = useContext(cartContext)
    let { setfavItems, setcountFav } = useContext(favariteContext)


    function DtataToken() {
        let tokenDecode = localStorage.getItem("userData");
        let dataDecode = jwtDecode(tokenDecode);
        setData(dataDecode);
    }
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            DtataToken();
        }
    }, []);



    return <>
        <authContext.Provider value={{ userData, setData }}>
            {props.children}
        </authContext.Provider>
    </>
}
