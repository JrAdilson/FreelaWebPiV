import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';
const DispVaga = ({ onClose = () => { }, children }) => {
    const [vagaAtual, setVagaAtual] = useState([]);
    const [vagaCompativel, setVagaCompativel] = useState([]);
    useEffect(() => {
        listarDados();
    }, [])

    async function listarDados() {
        const { data } = await api
            .post('/jobs/employees/techs', {
                dev_type: 'frontend',
                technologies: [{ name: 'Python' }, { name: 'R' }],
            })
            .catch((err) => console.log(err));
        setVagaCompativel(data);
    }
    function handlePressJob(job) {
        setVagaAtual(job);
    }

    console.log(vagaAtual);
    return (
        <>
            <div className='modal-backgroud'>
                <div className='modalSuper'>
                    <div className='modalMostrador'>
                        <div className='q1-modal'>
                            <h2>Vagas Disponíveis</h2>
                        </div>
                        <hr />
                        <ul className='ul-lista'>
                            {vagaCompativel.map(item => (
                                <div className="p-listaVaga" onClick={() => handlePressJob(item)}>
                                    <li className='lista-vaga'>Vaga: {item.name} / Salário: {item.salary} / Tecnologia: {item.technologies}</li>
                                </div>
                            ))}
                        </ul>
                        <div className='q5-btn'>
                            <button className='cancel' onClick={onClose}>
                                Voltar
                        </button>
                        </div>
                        <div className='q6-btn'>
                            <Link to="/allvagas">Todas as Vagas</Link>
                        </div>
                    </div>
                    <div className='content'>{children}</div>
                </div>
            </div>
        </>
    );
}
export default DispVaga;