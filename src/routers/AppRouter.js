import React from 'react';
import { NavLink, Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import { LoginPage }  from '../components/LoginPage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <Route path='/dashboard' component={ExpenseDashboardPage} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} /> 
                <Route component={NotFoundPage} /> 
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;