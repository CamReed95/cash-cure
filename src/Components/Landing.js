import React, {Component} from 'react';
// import './Landing.css';
// import Auth from './Auth/Auth';
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
                    <h1>Cash Cure</h1>

                    <button className='login-button' onClick={this.toggleSignin} >LOG IN</button> 
                    {this.state.auth && <Signin/>}

                    <button className='register-button' onClick={this.toggleRegister}>REGISTER</button>
                    {this.state.auth && <Register/>}

                    </div>

                    <h2 className="call-to-action">Call to Action</h2>

                    <p className="landing-text">Place text here </p>

                    
                    
                </div>

            </div>
        )
    }
} 

export default Landing;