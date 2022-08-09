import React from 'react'
import Rows from '../components/Rows/rows'
import requests from "../components/Api/request";
import Header from "../components/Header/header";
import Footer from '../components/Footer/Footer';

function Trending() {
    return (
        <div>
        <Header/>
    <Rows fetchurl={requests.fetchTrending} title="Trending Movies"/>
<Footer/>
        </div>
    )
}

export default Trending
