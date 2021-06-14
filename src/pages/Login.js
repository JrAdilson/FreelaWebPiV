import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header/index';
import '../styles/pages/login.css';
import gif2 from '../assets/img/gif2.gif';
import api from '../services/api';
import { employerLogin } from '../services/employerAuth';
import { employeeLogin } from '../services/employeeAuth';
import TextField from '@material-ui/core/TextField';

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
        if (response.data.employerId) {
          employerLogin(response.data.token, response.data.employerId);
          history.push('/contratante')
        }
        if (response.data.employeeId) {
          employeeLogin(response.data.token, response.data.employeeId);
          history.push('/contratado')
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className="container">
        <img className='conteudo1' alt="gif2" src={gif2} />
        <form className='login1'>
          <label>Email</label>
          <TextField
            type='email'
            name='email'
            placeholder='adriano@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <TextField
            type='password'
            name='senha'
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="esqSenha">
            <Link to="/login">Esqueceu a senha?</Link>
          </div>
          <button type='submit' name='login' onClick={handleLogin}>Entrar</button>
        </form>
        <div className="conteudo2"></div>
      </div>
    </>
  )
}
export default Login;