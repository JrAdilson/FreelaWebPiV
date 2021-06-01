import React from 'react';
import Header from '../components/Header/index';
import '../styles/pages/match.css';
import api from '../services/api';
import julius from '../assets/img/juliusEllipse.png'
import maleta from '../assets/img/Group.png'
import ellipsis from '../assets/img/Ellipsis.png'
import gandalf from '../assets/img/gandalf.png'

const Match = () => {

    return (
        <>
            <Header />
            <div className='pg'>
                <div className='cont-pg'>
                    <h1>Match!</h1>
                    <p><b>Gandalf</b> está precisando de seus serviços!</p>
                </div>
                <div className="q3-freela">
                    <img src={julius}></img>
                    <div className="q3-freela2">
                        <img src={maleta}></img>
                        <img src={ellipsis}></img>
                    </div>
                    <img src={gandalf}></img>
                </div>
                <hr></hr>
                <div className='des-pg'>
                    <p>Envie uma mensagem pra ele agora!</p>
                </div>
                <div className='btn-pg'>
                    <button className='match-btn'>Continuar</button>
                </div>
            </div>
        </>
    )
}

export default Match;