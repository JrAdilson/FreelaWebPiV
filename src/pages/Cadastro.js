import React, { useState } from 'react';
import Header from '../components/Header/index';
import '../styles/pages/cadastro.css';
import api from '../services/api';
import girl from '../assets/img/Girl.gif';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Cadastro = () => {
  const [empregado, setEmpregado] = useState({});
  const [empregador, setEmpregador] = useState({});
  const [usuario, setUsuario] = useState({});
  const [value, setValue] = useState('');
  const [stack, setStack] = React.useState('');

  const handleCadastro = async (event) => {
    event.preventDefault();
    if (value === 'employer') {
      await api
        .post('/employers', {
          name: usuario.nome,
          email: usuario.email,
          password: usuario.senha,
          cellphone: usuario.telefone,
          company: empregador.empresa,
          role: empregador.cargo,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
    if (value === 'employee') {
      await api
        .post('/employees', {
          name: usuario.nome,
          email: usuario.email,
          password: usuario.senha,
          cellphone: usuario.telefone,
          formation: empregado.formacao,
          dev_type: empregado.area,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleStack = (event) => {
    setStack(event.target.value);
  }

  return (
    <>
      <Header />
      <div className="conteudoCadastro">
        <form className="cadastro1">
          <div className="col-md-12">
            <label>Nome</label>
            <TextField
              type="text"
              name="nome"
              placeholder="João da Silva"
              value={usuario.nome}
              onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
            />
            <label>Email</label>
            <TextField
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              value={usuario.email}
              onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            />
            <label>Telefone</label>
            <TextField
              type="tel"
              name="telefone"
              placeholder="(xx) x xxxxxxxx"
              maxLength="11"
              value={usuario.telefone}
              onChange={(e) => setUsuario({ ...usuario, telefone: e.target.value })}
            />
            <label>Senha</label>
            <TextField
              type="password"
              name="senha"
              placeholder="********"
              value={usuario.senha}
              onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
            />
            <div className="radio">
              <RadioGroup aria-label="radiocadastro" value={value} name="radiocadastro" onChange={handleChange}>
                <FormControlLabel value="employer" control={<Radio />} label="Contratando" />
                <FormControlLabel value="employee" control={<Radio />} label="Buscando Vaga" />
              </RadioGroup>
            </div>
            {value === 'employer' && (
              <Collapse in={true}>
              <div className="col-md-12" id="empregador">
                <label>Empresa</label>
                <TextField
                  type="text"
                  name="empresa"
                  placeholder="Empresa SA"
                  value={empregador.empresa}
                  onChange={(e) =>
                    setEmpregador({ ...empregador, empresa: e.target.value })
                  }
                />
                <label>Cargo</label>
                <TextField
                  type="text"
                  name="cargo"
                  placeholder="Recrutador"
                  value={empregador.cargo}
                  onChange={(e) =>
                    setEmpregador({ ...empregador, cargo: e.target.value })
                  }
                />
              </div>
              </Collapse>
            )}
            {value === 'employee' && (
              <Collapse in={value === 'employee'}>
              <div id="empregado">
                <label>Formação</label>
                <TextField
                  type="text"
                  name="formação"
                  value={empregado.formacao}
                  placeholder="Análise e Desenvolvimento de Sistemas"
                  onChange={(e) =>
                    setEmpregado({ ...empregado, formacao: e.target.value })
                  }
                />
                <label>Stack</label>
                <Select className="select-cad" value={stack} onChange={handleStack}>
                  <MenuItem value="frontend">Frontend</MenuItem>
                  <MenuItem value="backend">Backend</MenuItem>
                  <MenuItem value="fullstack">Fullstack</MenuItem>
                </Select>
              </div>
              </Collapse>
            )}
          </div>
          <p>Ao clicar em "Cadastrar" você concorda com os Termos e Condições de uso.</p>
          <button type="submit" name="cadastrar" onClick={handleCadastro}>
            Cadastrar
          </button>
        </form>
        <img className='gifCadastro' alt="gif2" src={girl} />
      </div>
    </>
  );
};

export default Cadastro;
