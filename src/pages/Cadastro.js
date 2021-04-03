import React, { useState } from 'react';
import Header from '../components/Header/index';
import '../styles/pages/cadastro.css';
import api from '../services/api';

const Cadastro = () => {
    const [isContratante, setIsContratante] = useState(false);
    const [isContratado, setIsContratado] = useState(false);
    const [empregado, setEmpregado] = useState({});
    const [empregador, setEmpregador] = useState({});
    const [usuario, setUsuario] = useState({});

    const handleContratante = () => {
        isContratante === true ? setIsContratante(false) : setIsContratante(true);
    }

    const handleCadastro = async (event) => {
        event.preventDefault()
        if (isContratante) {
            await api.post('/employer', {
                name: usuario.nome,
                email: usuario.email,
                password: usuario.senha,
                cellphone: JSON.stringify(usuario.telefone),
                company: empregador.empresa,
                role: empregador.cargo
            })
                .then(result => console.log(result))
                .catch(err => console.log(err))
        } else {
            await api.post('/employee', {
                name: usuario.nome,
                email: usuario.email,
                password: usuario.senha,
                cellphone: JSON.stringify(usuario.telefone),
                formation: empregado.formacao
            }).then(result => console.log(result))
        }
    }

    return (
        <>
            <Header />
            <div className='conteudoCadastro'>
                <form className='cadastro1'>

                    <div className="col-md-12">
                        <h3>Cadastre - se</h3>
                        <hr />
                        <label>Nome</label>
                        <input
                            type='text'
                            name='nome'
                            placeholder=' Junin'
                            value={usuario.nome}
                            onChange={(e) => setUsuario({ name: e.target.value })}
                        />
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            placeholder=' adriano@gmail.com'
                            value={usuario.email}
                            onChange={(e) => setUsuario({ email: e.target.value })}
                        />
                        <label>Telefone</label>
                        <input
                            type='tel'
                            name='telefone'
                            placeholder=' (xx) x xxxxxxxx'
                            maxLength='11'
                            value={usuario.telefone}
                            onChange={(e) => setUsuario({ telefone: e.target.value })}
                        />
                        <label>Senha</label>
                        <input
                            type='password'
                            name='senha'
                            placeholder='**************'
                            value={usuario.senha}
                            onChange={(e) => setUsuario({ senha: e.target.value })}
                        />
                        <div className='radio'>
                            <div className='radio1'>
                                <input type='radio'
                                    id='cantratante'
                                    name='radiocadastro'
                                    onChange={() => {
                                        setIsContratante(true)
                                        setIsContratado(false)
                                    }}
                                />
                                Contratando
                            </div>
                            <div className='radio2'>
                                <input
                                    type='radio'
                                    id='contratado'
                                    name='radiocadastro'
                                    onChange={() => {
                                        setIsContratante(false)
                                        setIsContratado(true)
                                    }}
                                />
                                Buscando Vaga
                             </div>
                        </div>
                        {isContratante && (
                            <div className='col-md-12' id='empregador'>
                                <label>Empresa</label>
                                <input
                                    type='text'
                                    name='empresa'
                                    value={empregador.empresa}
                                    onChange={(e) => setEmpregador({ empresa: e.target.value })}
                                />
                                <label>Cargo</label>
                                <input
                                    type='text'
                                    name='cargo'
                                    value={empregador.cargo}
                                    onChange={(e) => setEmpregador({ cargo: e.target.value })}
                                />

                            </div>)}
                        {isContratado && (<div id='empregado'>
                            <label>Formação</label>
                            <input
                                type='text'
                                name='formação'
                                value={empregado.formacao}
                                onChange={(e) => setEmpregado({ formacao: e.target.value })}
                            />
                        </div>)}
                    </div>
                    <p>Ao clicar em "Cadastrar" você concorda com os Termos e Condições de uso.</p>
                    <button
                        type='submit'
                        name='cadastrar'
                        onClick={handleCadastro}
                    >
                        Cadastrar
                        </button>
                </form>
            </div >
        </>
    )
}

export default Cadastro;