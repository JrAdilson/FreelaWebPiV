import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/index'
import Conteudo from '../components/Conteudo/index'
import Footer from '../components/Footer/index'

function Home() {
    return (
        <div>
        <Header home/>
        <Conteudo/>
        <Footer/>
        </div>
    )
}
export default Home;