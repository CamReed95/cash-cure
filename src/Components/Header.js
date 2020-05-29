import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <div className="parent-div">
                <div className='app-name-2'>
                    <Link to='/Home'>CA$Hcure</Link>
                </div>
                <div className='home-links'>
                    
                    <Link to='/BudgetingInfo' className='links'>Info</Link>
                    <Link to='/Updatepassword' className='links'>Settings</Link>
                    <Link to='/' className='links'>Log-out</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;