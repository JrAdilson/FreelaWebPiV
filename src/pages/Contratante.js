import React, { useEffect, useState } from 'react';
import Header from '../components/Header/index';
import '../styles/pages/contratante.css';
import gandalf2 from '../assets/img/gandalf2.jpeg';
import mais from '../assets/img/mais.png';
import foto from '../assets/img/foto.png';
import AddVaga from '../components/Modal/AddVaga';
import VagasCurtidas from '../components/Modal/VagasCurtidas';
import api from '../services/api';


const PerfilContratante = () => {
    const [isModalCadastroVisible, setIsModalCadastroVisible] = useState(false);
    const [isModalListaVisible, setIsModalListaVisible] = useState(false);
    const [isModalCurtidasVisible, setIsModalCurtidasVisible] = useState(false);
    const [Cargo, setIsCargo] = useState("Mago");
    const [Empresa, setIsEmpresa] = useState("Sociedade do Anel™");
    const [Lista, setLista] = useState([]);
    const [vagaAtual, setVagaAtual] = useState([]);

    useEffect(() => {
        listarDados();
    }, [])

    async function listarDados() {
        const res = await api.get('/jobs/employers/4');
        setLista(res.data);
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
                    <img alt="profile" src={gandalf2} />
                    <h3>Gandalf, o Cinzento</h3>
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
                </div>
            </div>
        </>
    )
}

export default PerfilContratante;