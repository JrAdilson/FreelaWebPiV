import React, { useState } from 'react';
import './style.css';
import api from '../../services/api';
const AddVaga = ({ onClose = () => { }, job = null, cadastro = null, children }) => {
    const [nome, setNome] = useState(cadastro ? '' : job.name);
    const [descricao, setDescricao] = useState(cadastro ? '' : job.description);
    const [salario, setSalario] = useState(cadastro ? '' : job.salary);
    const [area, setArea] = useState(cadastro ? '' : job.dev_type);
    const [tecnologias, setTecnologias] = useState(cadastro ? '' : job.technologies);

    const employer_id = 4;
    const handleJob = async (event) => {
        event.preventDefault();
        await api
            .post(`/jobs/employers/${employer_id}`, {
                name: nome,
                description: descricao,
                salary: salario,
                dev_type: area,
                technologies: tecnologias
            })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));

    }
    const deletarVaga = async (event) => {
        event.preventDefault();
        await api
            .delete(`/jobs/${job.id}`)
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        onClose();

    }

    const editarVaga = async (event) => {
        event.preventDefault();
        await api
            .put(`/jobs/${job.id}/update`, {
                name: nome,
                description: descricao,
                salary: salario,
                dev_type: area,
                technologies: tecnologias
            })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        onClose();

    }

    return (
        <>
            <div className='modal-backgroud'>
                <div className='modal'>
                    <div className='q1-modal'>
                        <h2>{cadastro ? 'Cadastrar nova vaga' : 'Editar Vaga'}</h2>
                    </div>
                    <hr />
                    <form className='form-modal'>
                        <div className='q2-modal'>
                            <div className='q3-modal'>
                                <label>Vaga</label>
                                <input
                                    type="text"
                                    name="vaga"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}

                                />
                                <label>Descrição</label>
                                <textarea
                                    id="description"
                                    rows="9"
                                    name="descricao"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='q4-modal'>
                            <label>Salário</label>
                            <input
                                type="text"
                                name="salario"
                                value={salario}
                                onChange={(e) => setSalario(e.target.value)}
                            />
                            <label>Área de interesse</label>
                            <select className='select-area' onChange={(e) => setArea(e.target.value)}>
                                <option value={cadastro ? 'default' : job.dev_type} >{!cadastro && job.dev_type}</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="fullstack">Fullstack</option>
                            </select>
                            <label>Tecnologias</label>
                            <input
                                type="text"
                                name="salario"
                                value={tecnologias}
                                onChange={(e) => setTecnologias(e.target.value)}
                            />
                            <div className='btn-del'>
                                {!cadastro && <button className='delete' onClick={deletarVaga}>
                                    Excluir
                                </button>}
                            </div>
                        </div>
                    </form>
                    <div className='q5-btn'>
                        <button className='cancel' onClick={onClose}>
                            Cancelar
                        </button>

                        <button type="submit" className='cad' onClick={cadastro ? handleJob : editarVaga}>
                            {cadastro ? 'Cadastrar' : 'Editar'}
                        </button>
                    </div>
                    <div className='content'>{children}</div>
                </div>
            </div>
        </>
    );
}
export default AddVaga;