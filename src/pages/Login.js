import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/index';
import '../styles/pages/login.css';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <>
            <Header />
            <div className="container">
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
                    <button type='submit' name='login'>Entrar</button>
                </form>
            </div>
        </>
    )
}

export default Login;