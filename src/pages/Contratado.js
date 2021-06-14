import React, { useState, useEffect } from 'react';
import Header from '../components/Header/index';
import api from '../services/api';
import julius2 from '../assets/img/juliusEllipse.png';
import foto from '../assets/img/foto.png';
import mao from '../assets/img/Maozinha.png';
import maleta from '../assets/img/Maleta.png';
import DispVaga from '../components/Modal/DispVaga';
import '../styles/pages/contratado.css';

const PerfilContratado = () => {
  const [isModalDispVisible, setIsModalDispVisible] = useState(false);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    async function fetchEmployeeData() {
      await api.get('/employees/4').then(res => {
        console.log(res.data);
        setEmployee(res.data)
      })
    }

    fetchEmployeeData();
  }, [])

    return (
      <>
        <Header />
        <div className='principal2'>
          <img alt="profile" id='foto2' src={foto}></img>
        </div>
        <div className='conteudo3'>
          <div className='allBox2'>
            <div className='mostradorBlue'>
              <img alt="maleta" id='maleta2' src={maleta}></img>
              <h3>2</h3>
              <h4>Jobs contratados</h4>
            </div>
            <div className='mostradorBlue'>
              <img alt="hand" id='mao2' src={mao}></img>
              <h3>5</h3>
              <h4> Matchs </h4>
            </div>
          </div>
          <div className='allBox'>
            <h4>Informações Pessoais</h4>
            <div className='mostrador2'>
              <h4>{employee.email}</h4>
              <h4>{employee.cellphone}</h4>
            </div>
            <h4>Tecnologias</h4>
            <div className='mostrador2'>
              <h4>{employee.techs}</h4>
            </div>
          </div>
          <div className="profile2">
            <img alt="profile2" src={julius2} />
            <h3>{employee.name}</h3>
            <hr />
          </div>
          <div className='allBox1'>
            <h4>Formação</h4>
            <div className='mostrador2'>
              <h4>{employee.formation}</h4>
            </div>
            <h4>Formação</h4>
            <div className='mostrador2'>
              <h4> Em ter dois empregos. </h4>
            </div>
          </div>
          <div className='cadVaga2'>
            <button onClick={() => setIsModalDispVisible(true)}>Vagas Disponíveis</button>
            {isModalDispVisible ? (
              <DispVaga onClose={() => setIsModalDispVisible(false)} />
            ) : null}
          </div>
        </div>
      </>
    )
}

export default PerfilContratado;