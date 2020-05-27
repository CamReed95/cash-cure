import React, {Component} from 'react';
// import './Landing.css';
import Auth from './Auth/Auth';
import Signin from './Auth/Login';
import Register from './Auth/Register';


class Landing extends Component {
    constructor () {
        super();
        this.state = {
            auth: false,
            login: false,
            register: false
        }
        this.toggleAuth = this.toggleAuth.bind(this)
        
    }

toggleAuth() {
    let {auth} = this.state
    this.setState({auth: !auth})
}

    render () {
        return (
            <div className="landing-base">

                <div className="landing-main">

                    <div className="landing-header">
                    <h1>CA$H cure</h1>

                    <button className='login-button' onClick={this.toggleSignin} >LOG IN</button> 
                    {this.state.auth && <Signin/>}

                    <button className='register-button' onClick={this.toggleRegister}>REGISTER</button>
                    {this.state.auth && <Register/>}

                    </div>

                    <h2 className="call-to-action">Discover the cure for your cash</h2>

                    <p className="landing-text">We'll get you from canker to cure by giving you the tools you need to easily manage your wallet.</p>

                </div>

            </div>
        )
    }
} 

export default Landing;