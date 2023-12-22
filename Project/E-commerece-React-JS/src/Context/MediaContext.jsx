import axios from 'axios';
import React from 'react'
import { createContext, useEffect, useState } from "react";

export let mediaContext = createContext('');
export function MediaContextProvider(props) {
    let [cameras, setCameras] = useState([]);;
    let [computers, setComputers] = useState([]);
    let [accessories, setAccessories] = useState([]);
    let [headPhones, setHeadPhones] = useState([]);
    let [kitchen, setKitchen] = useState([]);
    let [phonse, setPhonse] = useState([]);
    let [tvs, setTvs] = useState([]);
    let [personal, personalcare] = useState([]);

    let [allProducts, setallProducts] = useState([]);



    async function getData(type, storage) {
        const { data } = await axios.get(`https://rus-digital-televisions.onrender.com/${type}`);
        storage(data);
    }

    useEffect(() => {
        getData('cameras', setCameras);
        getData('computers', setComputers);
        getData('accessories', setAccessories);
        getData('headphones', setHeadPhones);
        getData('kitchen', setKitchen);
        getData('mobilesandtablets', setPhonse);
        getData('televisions', setTvs);
        getData('personalcare', personalcare);

        getData('allproduct', setallProducts);
    }, [])










    return <>
        <mediaContext.Provider value={{ cameras, computers, accessories, headPhones, kitchen, phonse, tvs, allProducts, personal }}>
            {props.children}
        </mediaContext.Provider>

    </>
}
