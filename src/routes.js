import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isEmployeeAuthenticated } from './services/employeeAuth';
import { isEmployerAuthenticated } from './services/employerAuth';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Match from './pages/Match'
import Contratante from './pages/Contratante'
import Contratado from './pages/Contratado'
import AllVagas from './pages/AllVagas'
import EmployeeLike from './pages/EmployeeLike';

const EmployerRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isEmployerAuthenticated()
                ? (<Component{...props} />)
                : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
        }
    />
)

const EmployeeRoutes = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props =>
        isEmployeeAuthenticated()
            ? (<Component{...props} />)
            : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cadastro' exact component={Cadastro} />
            <Route path='/login' exact component={Login} />
            <Route path='/allvagas' exact component={AllVagas}/>
            <Route path='/match' exact component={Match} />
            <EmployerRoutes path='/contratante' component={Contratante} />
            <EmployeeRoutes path= '/contratado' component={Contratado} />
            <EmployerRoutes path='/vagas/:idvaga/candidatos' component={EmployeeLike} />
        </Switch>
    </BrowserRouter>
)
export default Routes;