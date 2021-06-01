import React, { useState } from 'react';
import Header from '../components/Header/index';
import '../styles/pages/contratado.css';
import julius2 from '../assets/img/juliusEllipse.png';
import foto from '../assets/img/foto.png';
import mao from '../assets/img/Maozinha.png';
import maleta from '../assets/img/Maleta.png';
import DispVaga from '../components/Modal/DispVaga';
const PerfilContratado = () => {
    const [isModalDispVisible, setIsModalDispVisible] = useState(false);
    return (
        <>
            <Header/>
            <div className='principal2'>
                <img id='foto2' src={foto}></img>
            </div>
            <div className='conteudo3'>
                <div className='allBox2'>
                    <div className='mostradorBlue'>
                        <h3>.</h3>
                        <h3>.</h3>
                        <h3>2</h3>
                        <h4>Jobs contratados</h4>
                        <img id='maleta2' src={maleta}></img>
                    </div>
                    <div className='mostradorBlue1'>
                        <h3>.</h3>
                        <h3>.</h3>
                        <h3> 5 </h3>
                        <h4> Matchs </h4>
                        <img id='mao2' src={mao}></img>
                    </div>
                </div>
                <div className='allBox'>
                    <h4>Objetivos</h4>
                    <div className='mostrador2'>
                        <h4> Ter três empregos. </h4>
                    </div>
                    <h4>Experiência</h4>
                    <div className='mostrador2'>
                        <h4> Tem dois empregos. </h4>
                    </div>
                </div>
                <div className="profile2">
                    <img alt="profile2" src={julius2} />
                    <h3>Julius, o Grande Homem</h3>
                    <hr />
                </div>
                <div className='allBox1'>
                    <h4>Aperfeiçoamento</h4>
                    <div className='mostrador2'>
                        <h4> Acumulador de empregos. </h4>
                    </div>
                    <h4>Formação</h4>
                    <div className='mostrador2'>
                        <h4> Em ter dois empregos. </h4>
                    </div>
                </div>
                <div className='cadVaga2'>
                    <button onClick={() => setIsModalDispVisible(true)}>Vagas Disponíveis</button>
                    {isModalDispVisible ? (
                        <DispVaga onClose={() => setIsModalDispVisible(false)}/>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default PerfilContratado;