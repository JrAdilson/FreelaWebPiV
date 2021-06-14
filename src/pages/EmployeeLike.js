import React, { useEffect, useState } from 'react';
import '../styles/pages/employeeLike.css';
import api from '../services/api';
import { useParams } from 'react-router-dom';

const EmployeeLike = () => {
    const [Lista, setLista] = useState(null);
    const employerid = 4;
    const params = useParams();
    useEffect(() => {
        async function listarDados() {
            const res = await api.get(`/employers/${employerid}/jobs/2/matches`);
            setLista(res.data);
            console.log(res.data);
        }
        listarDados();
    }, [])




    return (
        <>
            <div className='candidato1'>
                <ul className='candidato'>
                    {Lista && Lista.map(item => (
                        <p className="p-candidato">
                            <li className='lista-candidato'>{item.name}</li>
                        </p>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default EmployeeLike;