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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
      await api
        .post('/auth', {
          email: email,
          password: password,
        })
        .then((response) => {
          if(response.data.employerId){
            employerLogin(response.data.token, response.data.employerId);
            history.push('/contratante')
          }
          if(response.data.employeeId){
            employeeLogin(response.data.token, response.data.employeeId);
            //history.push('/contratado')
          }
        })
        .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className="container">
        <img className='conteudo1' alt="login3" src={login3} />
        <form className='login1'>
          <h3>Entrar</h3>
          <hr />
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
        </form>
        <img className='conteudo2' alt="login4" src={login4} />
      </div>
    </>
  )
}

export default Login;