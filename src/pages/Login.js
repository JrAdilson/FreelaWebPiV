import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header/index';
import '../styles/pages/login.css';
import login4 from '../assets/img/login4.png';
import login3 from '../assets/img/login3.png';
import api from '../services/api';
import {employerLogin} from '../services/employerAuth';
import {employeeLogin} from '../services/employeeAuth';

const Login = () => {
  const [isContratante, setIsContratante] = useState(false);
  const [isContratado, setIsContratado] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (isContratante) {
      await api
        .post('/employers/auth', {
          email: email,
          password: password,
        })
        .then((employer) => {
          //employerLogin(employer.data.token, employer.data.employerId);
          history.push('/contratante')
        })
        .catch((err) => console.log(err));
    }
    if (isContratado) {
      await api
        .post('/employees/auth', {
          email: email,
          password: password,
        })
        .then((employee) => {
        employeeLogin(employee.data.token, employee.data.employerId);
        //(history.push('/')
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <img className='conteudo1' alt="login3" src={login3} />
        <form className='login1'>
          <h3>Entrar</h3>
          <hr />
          <div className="radio">
            <div className="radio1">
              <input
                type="radio"
                id="contratante"
                name="radiocadastro"
                onChange={() => {
                  setIsContratante(true);
                  setIsContratado(false);
                }}
              />
                    Contratando
              </div>
            <div className="radio2">
              <input
                type="radio"
                id="contratado"
                name="radiocadastro"
                onChange={() => {
                  setIsContratante(false);
                  setIsContratado(true);
                }}
              />
                    Buscando Vaga
              </div>
            {(isContratante || isContratado) && (
              <>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder=' adriano@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Senha</label>
                <input
                  type='password'
                  name='senha'
                  placeholder=' **********'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="esqSenha">
                  <Link to="/login">Esqueceu a senha?</Link>
                </div>
                <button type='submit' name='login' onClick={handleLogin}>Entrar</button>
              </>
            )}
          </div>
        </form>
        <img className='conteudo2' alt="login4" src={login4} />
      </div>
    </>
  )
}

export default Login;