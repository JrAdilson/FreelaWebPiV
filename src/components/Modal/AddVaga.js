import React, { useState } from 'react';
import './style.css';



const AddVaga = ({ onClose = () => { }, children }) => {
    const [isVaga, setIsVaga] = useState({});
    const [isDescricao, setIsDescricao] = useState({});
    const [isSalario, setIsSalario] = useState({});
    const [isArea, setIsArea] = useState({});



 


    return (
        <>
            <div className='modal-backgroud'>
                <div className='modal'>
                    <div className='q1-modal'>
                        <h2>Cadastrar nova vaga</h2>
                    </div>
                    <hr />
                    <form className='form-modal'>
                        <div className='q2-modal'>
                            <div className='q3-modal'>
                                <label>Vaga</label>
                                <input
                                    type="text"
                                    name="vaga"
                                    value={isVaga.vaga}
                                    onChange={(e) => setIsVaga({ ...isVaga, vaga: e.target.value })}
                                />
                                <label>Descrição</label>
                                <textarea
                                    rows="9"
                                    name="descricao"
                                    value={isDescricao.descricao}
                                    onChange={(e) => setIsDescricao({ ...isDescricao, descricao: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='q4-modal'>
                            <label>Salário</label>
                            <input
                                type="text"
                                name="salario"
                                value={isSalario.salario}
                                onChange={(e) => setIsSalario({ ...isSalario, salario: e.target.value })}
                            />
                            <label>Área de interesse</label>
                            <select className='select-area'  onChange={(e) => setIsArea({ ...isArea, area: e.target.value })}>
                                <option value=""></option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="fullstack">Fullstack</option>
                            </select>
                            {isVaga.vaga}<br/>
                            {isDescricao.descricao}<br/>
                            {isSalario.salario}<br/>
                            {isArea.area}
                        </div>
                    </form>
                    <div className='q5-btn'>
                        <button className='cancel' onClick={onClose}>Cancelar</button>
                        <button className='cad'>Cadastrar</button>
                    </div>
                    <div className='content'>{children}</div>
                </div>
            </div>
        </>
    );
}
export default AddVaga;