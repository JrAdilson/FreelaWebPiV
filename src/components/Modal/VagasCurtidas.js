import React, { useEffect, useState } from 'react';
import './vagasCurtidas.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
const VagasCurtidas = ({ onClose = () => { }, children }) => {
    const [Lista, setLista] = useState([]);
    const history = useHistory();
    const employerid = 4;
    useEffect(() => {
        listarDados();
    }, [])

    async function listarDados() {
        const res = await api.get(`/jobs/employers/${employerid}`);
        setLista(res.data);
        console.log(res.data);
    }

    function handlePressJob(job){
        history.push(`/vagas/${job.id}/candidatos`);
    }


    return (
        <>
            <div className='modal-backgroud'>
                <div className='like-modal'>
                    <button id='like-close' onClick={onClose}>X</button>
                    <div className='like-title'>
                        <h3>Curtidas</h3>
                    </div>
                    <div className='like-mostrador'>
                         <ul className='like-lista'>
                            {Lista.map(item => (
                                <p className="p-listaVaga" onClick={() => handlePressJob(item)}>
                                    <li className='lista-vagaCurtida'>{item.name}</li>
                                </p>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='content'>{children}</div>
            </div>
        </>
    );
}
export default VagasCurtidas;