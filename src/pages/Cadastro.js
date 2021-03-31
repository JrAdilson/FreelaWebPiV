import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/index'
import '../styles/pages/cadastro.css';
function Cadastro() {
    const [isContratante, setIsContratante] = useState(false);
    return (
        <>
            <Header />
            <div className='conteudoCadastro'>
                <form className='cadastro1'>

                    <div className="col-md-12">
                        <h3>Cadastre - se</h3>

                        <hr />
                        
                        <label>Nome</label>
                        <input type='text' name='nome' placeholder=' Junin' />

                        <label>Sobrenome</label>
                        <input type='text' name='sobrenome' placeholder=' Junior' />

                        <label>Email</label>
                        <input type='email' name='email' placeholder=' adriano@gmail.com' />

                        <label>Telefone</label>
                        <input type='tel' name='telefone' placeholder=' (xx) x xxxxxxxx' maxLength='11' />

                        <label>Senha</label>
                        <input type='password' name='senha' placeholder=' **************' />

                        <div className='radio'>
                            <div className='radio1'>
                                <input type='radio' id='cantratante' name='radiocadastro' onChange={() => setIsContratante(!isContratante)} /> Contratando
                            </div>

                            <div className='radio2'>
                                <input type='radio' id='contratado' name='radiocadastro' onChange={() => setIsContratante(!isContratante)} /> Buscando Vaga
                             </div>
                        </div>
                        {isContratante && (
                            <div className='col-md-12' id='empregador'>
                                <label>Empresa</label>
                                <input type='text' name='empresa' />

                                <label>Área de Interesse</label>
                                <select className="selectName">
                                    <option value="front">--------</option>
                                    <option value="front">Front End</option>
                                    <option value="back">Back End</option>
                                    <option value="full">FullStack</option>
                                    <option value="arq">Arquiteto de Software</option>
                                </select>
                            </div>
                        )}
                        {!isContratante && (
                            <div id='empregado'>
                                <label>Formação</label>
                                <input type='text' name='formação' />
                            </div>
                        )}
                    </div>
                    <p>Ao clicar em "Cadastrar" você concorda com os  <a href=''>  Termos e Condições de uso.</a></p>
                    <button type='submit' name='cadastrar'>Cadastrar</button>
                </form>

            </div>
        </>
    )
}
export default Cadastro;