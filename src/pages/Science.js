import React from 'react'
import Rows from '../components/Rows/rows'
import requests from "../components/Api/request";
import Header from "../components/Header/header";
import Footer from '../components/Footer/Footer';
function Documentary() {
    return (
        <div>
               <Header/>
               <Rows fetchurl={requests.fetchScience} title='Science Fiction'/>   


            <Footer/>
        </div>
    )
}

export default Documentary
