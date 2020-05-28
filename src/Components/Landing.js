import React, {Component} from 'react';
// import './Landing.css';
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
                    <h1>CA$H cure</h1>

                    <Link to="/Auth">
                    <button className='login-button' >LOG IN / REGISTER</button> 
                    </Link>

                    </div>

                    <h2 className="call-to-action">Discover the cure for your cash</h2>

                    <p className="landing-text">We'll get you from canker to cure by giving you the tools you need to easily manage your wallet.</p>

                </div>

            </div>
        )
    }
} 

export default Landing;