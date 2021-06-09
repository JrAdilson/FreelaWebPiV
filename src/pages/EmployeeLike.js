import React, { useEffect, useState } from 'react';
import '../styles/pages/employeeLike.css';
import api from '../services/api';
import Header from '../components/Header/index';
import { useParams } from 'react-router-dom';


const EmployeeLike = () => {
    const [Lista, setLista] = useState(null);
    const employerid = 4;
    const params = useParams();
    useEffect(() => {
        async function listarDados() {
            const res = await api.get(`/employers/${employerid}/jobs/3/matches`);
            setLista(res.data);
            console.log(res.data);
        }
        listarDados();
    }, [])

  




    return (
        <>
            <Header />
            <div className='principal1'>
                <div className='secundario'>
                    <h3>Candidatos para a vaga</h3>
                    <div className='candidato1'>
                        <ul className='candidato'>
                            {Lista && Lista.map(item => (
                                <p className="p-candidato">
                                    <li className='lista-candidato'>{item.employee.name}</li>
                                </p>
                            ))}
                        </ul>     
                    </div>
                </div>
            </div>
        </>
    );
}
export default EmployeeLike;