import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/FREELA.png'
import './style.css';
function Header({ home }) {
    return (
        <div className='menu'>
            <Link to='/'><img className="logo" src={logo} /></Link>
            {
                home && (
                    <nav>
                        <Link to="/cadastro">Cadastrar</Link>
                        <button color="primary">Entrar</button>
                    </nav>
                )
            }
        </div>
    )
}

export default Header;