import React from 'react'
import Rows from '../components/Rows/rows'
import requests from "../components/Api/request";
import Header from "../components/Header/header";
import Footer from '../components/Footer/Footer';
function Horror() {
    return (
        <div>
               <Header/>
               <Rows fetchurl={requests.fetchHorrorMovies} title='Horror Movies'/>

            <Footer/>
        </div>
    )
}

export default Horror
