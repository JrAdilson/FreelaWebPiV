import React, { useState, useEffect } from 'react';
import Header from '../components/Header/index';
import '../styles/pages/allvagas.css';
import api from '../services/api';
const AllVagas = ({ onClose = () => { }, children }) => {
    const [Lista, setLista] = useState([]);
    const [vagaAtual, setVagaAtual] = useState([]);
    const [vagaCompativel, setVagaCompativel] = useState([]);
    useEffect(() => {
        listarDados();
    }, [])

    async function listarDados() {
        const res = await api.get('/jobs');
        setLista(res.data);
        console.log(res.data);
    }
    function handlePressJob(job) {
        setVagaAtual(job);
    }

    return (
        <>
            <Header/>
            <div className='principalVagas'>
                <h2>Vagas Disponíveis</h2>
            </div>
            <ul className='ul-lista'>
                {Lista.map(item => (
                    <p className="p-listaVaga" onClick={() => handlePressJob(item)}>
                        <li className='lista-vaga'>{item.name}</li>
                    </p>
                ))}
            </ul>
        </>
    )
}
export default AllVagas;