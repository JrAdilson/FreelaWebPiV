import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/FREELA.png';
import './style.css';

const Header = ({ home }) => {
  return (
    <div className='menu'>
      <Link to='/'>
        <img className="logo" alt="logo" src={logo} />
      </Link>
      {
        home && (
          <nav>
            <button>
              <Link to="/login">
                <p>Entrar</p>
              </Link>
            </button>
            <button>
              <Link to="/cadastro">
                <p>Cadastrar</p>
              </Link>
            </button>
          </nav>
        )
      }
    </div>
  )
}

export default Header;