import React from 'react';
import Header from '../components/Header/index';
import '../styles/pages/contratante.css';
import gandalf2 from '../assets/img/gandalf2.jpeg';

const PerfilContratante = () => {
    return (
        <>
            <Header />
            <div className='principal'>
                
            </div>
            <div className='conteudo'>
                <img alt="profile" src={gandalf2} />
            </div>
        </>
    )
}

export default PerfilContratante;