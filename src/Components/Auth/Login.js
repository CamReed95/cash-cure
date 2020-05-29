import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../Redux/User';
import './Login.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.loginHandler = this.loginHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }
    loginHandler(e) {
        e.preventDefault();
        console.log(this.state)
        this.props
            .login(this.state)
            .then(() => {
                this.props.redirect();
            })
            .catch((err) => console.log('Error Logging in', err));
    }
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return(
            <div className="main-div">
            <div className='Login-container'>
                
                <form onSubmit={this.loginHandler}>
                    <div>
                    <input
                        
                        className="login-email-input"
                        placeholder='email'
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={(e) => this.changeHandler(e)}
                    />
                    <input
                        placeholder="password"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.changeHandler(e)}
                    />
                    <button className="login-login-button">LOG IN</button>
                    <button className='' onClick={this.props.toggle}>Need to Register?</button>
                    </div>
                </form>
                </div>
                </div>
        );
    }
}

export default connect(null, {login})(Login);