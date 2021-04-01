import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/cadastro' exact component={Cadastro}/>
            <Route path='/login' exact component={Login}/>
        </Switch>
    </BrowserRouter>
)
export default Routes;