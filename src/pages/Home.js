import React from 'react';
import Header from '../components/Header/index'
import Conteudo from '../components/Conteudo/index'
import Footer from '../components/Footer/index'

const Home = () => {
    return (
        <div>
            <Header home/>
            <Conteudo/>
            <Footer/>
        </div>
    )
}

export default Home;