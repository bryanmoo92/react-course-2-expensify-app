import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className='header'>
        <div className='content-container'>
            <div className="header__content">
                <Link className='header__title' to='/dashboard'>
                    <h1>Expensify</h1>
                </Link>
                <button className='button button--link' onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

//<button classname='button' onClick={startLogout}>Log Out</button>
// <NavLink to='/' activeClassName='is-active'>Login</NavLink>
//<NavLink to='/help' activeClassName='is-active'>Get Help</NavLink>
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);