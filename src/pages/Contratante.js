import React, { useEffect, useState } from 'react';
import Header from '../components/Header/index';
import '../styles/pages/contratante.css';
import gandalf from '../assets/img/gandalf.png';
import mais from '../assets/img/mais.png';
import foto from '../assets/img/foto.png';
import AddVaga from '../components/Modal/AddVaga';
import VagasCurtidas from '../components/Modal/VagasCurtidas';
import api from '../services/api';


const PerfilContratante = () => {
    const [isModalCadastroVisible, setIsModalCadastroVisible] = useState(false);
    const [isModalListaVisible, setIsModalListaVisible] = useState(false);
    const [isModalCurtidasVisible, setIsModalCurtidasVisible] = useState(false);
    const [Cargo, setIsCargo] = useState("Gerente Geral");
    const [Empresa, setIsEmpresa] = useState("Tech S.A.");
    const [Lista, setLista] = useState([]);
    const [Lista2, setLista2] = useState([]);
    const [vagaAtual, setVagaAtual] = useState([]);
    const employerid = 4;
    useEffect(() => {
        listarDados();
        listarDados2();
    }, [])

    async function listarDados() {
        const res = await api.get('/jobs/employers/4');
        setLista(res.data);
        console.log(res.data);
    }

    async function listarDados2() {
        const res = await api.get(`/employers/${employerid}/jobs/3/matches`);
        setLista2(res.data);
        console.log(res.data);
    }

    function handlePressJob(job){
        setVagaAtual(job);
        setIsModalListaVisible(true); 
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
                            {Lista.map(item => (
                                <p className="p-listaVaga" onClick={() => handlePressJob(item)}>
                                    <li className='lista-vaga'>{item.name}</li>
                                </p>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="profile">
                    <img alt="profile" src={gandalf} />
                    <h3>Antônio Carlos</h3>
                    <hr />
                </div>
                <p className='desc-emp'>{Cargo} na empresa {Empresa}</p>
                <div className='cadVaga'>
                    <button onClick={() => setIsModalCadastroVisible(true)}><img src={mais}></img>Adicionar nova vaga</button>
                    {isModalCadastroVisible ? (
                        <AddVaga cadastro onClose={() => setIsModalCadastroVisible(false)}/>
                    ) : null}
                    {isModalListaVisible ? (
                        <AddVaga job={vagaAtual} onClose={() => setIsModalListaVisible(false)}/>
                    ) : null}
                    <button id='curtidas'  onClick={() => setIsModalCurtidasVisible(true)} >Candidatos</button>
                    {isModalCurtidasVisible ? (
                        <VagasCurtidas cadastro onClose={() => setIsModalCurtidasVisible(false)}/>
                    ) : null}
                    <p id='contador2'>{Lista2?.length}</p>
                </div>
            </div>
        </>
    )
}

export default PerfilContratante;