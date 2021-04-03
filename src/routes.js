import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Contratante from './pages/Contratante'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/cadastro' exact component={Cadastro}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/contratante' exact component={Contratante}/>
        </Switch>
    </BrowserRouter>
)
export default Routes;