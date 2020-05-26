import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import './Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <div className='app-name'>
                 <Link to='/Home' className='Title'>Cash Cure</Link>
            </div>
            <div className='home-links'>
                {/* <Link to='/Home' className='links'>Home</Link> */}
                <Link to='/BudgetingInfo' className='links'>Info</Link>
                <Link to='/Updatepassword' className='links'>Settings</Link>
                <Link to='/Logout' className='links'>Log-out</Link>
            </div>
        </header>
    )
}

export default Header;