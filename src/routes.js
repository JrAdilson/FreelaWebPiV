import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/cadastro' exact component={Cadastro}/>
        </Switch>
    </BrowserRouter>
)
export default Routes;