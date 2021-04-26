import React, { component, useEffect, useState } from 'react';
import Header from '../components/Header/index';
import '../styles/pages/contratante.css';
import gandalf2 from '../assets/img/gandalf2.jpeg';
import mais from '../assets/img/mais.png';
import foto from '../assets/img/foto.png';
import AddVaga from '../components/Modal/AddVaga';
import api from '../services/api';



const PerfilContratante = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCargo, setIsCargo] = useState("Mago");
    const [isEmpresa, setIsEmpresa] = useState("Sociedade do Anel™");
    const [isLista, setLista] = useState([]);

    useEffect(() => {
        listarDados();
    }, [])

    async function listarDados() {
        const res = await api.get('/jobs');
        setLista(res.data);
        console.log(res.data);
    }


    return (
        <>
            <Header />
            <div className='principal'>
                <img id='foto' src={foto}></img>
            </div>
            <div className='conteudo'>
                <div className='vagasCadastradas'>
                    <h4>Vagas cadastradas</h4>
                    <div className='mostrador'>
                        <ul className='ul-lista'>
                            {isLista.map(item => (
                                <li className='lista-vaga'><a href="">{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="profile">
                    <img alt="profile" src={gandalf2} />
                    <h3>Gandalf, o Cinzento</h3>
                    <hr />
                </div>
                <p className='desc-emp'>{isCargo} na empresa {isEmpresa}</p>
                <div className='cadVaga'>
                    <button onClick={() => setIsModalVisible(true)}><img src={mais}></img>Adicionar nova vaga</button>
                    {isModalVisible ? (
                        <AddVaga onClose={() => setIsModalVisible(false)}>
                        </AddVaga>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default PerfilContratante;