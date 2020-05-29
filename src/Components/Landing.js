import React, {Component} from 'react';
import './Landing.css';
import {Link} from 'react-router-dom';


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
                    <h1>CA$Hcure</h1>
                    </div>


                    <h2 className="call-to-action">Discover the cure for your cash</h2>

                    <p className="landing-text">We'll get you from canker to cure by giving you<br/>the tools you need to easily manage your wallet.</p>

                    <Link to="/Auth">
                    <button className='login-button' >LOG IN  or  REGISTER</button> 
                    </Link>
                </div>

            </div>
        )
    }
} 

export default Landing;