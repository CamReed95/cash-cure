import React from 'react';
import {connect} from 'react-redux';
import {register} from '../../Redux/User';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.registerHandler = this.registerHandler.bind(this);
    }
    registerHandler(e) {
        e.preventDefault();
        this.props
            .register(this.state)
            .then(() => {
                this.props.redirect();
            })
            .catch((err) => console.log('Error registering', err));
    }
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
    render() {
        return(
            <div className='register-container'>
                <form onSubmit={this.registerHandler}>
                    <input
                        className=""
                        placeholder='email'
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={(e) => this.changeHandler(e)}
                    />
                    <input
                        placeholder='password'
                        type='text'
                        name='password'
                        value={this.state.password}
                        onChange={(e) => this.changeHandler(e)}
                    />
                    <button>REGISTER</button>
                </form>
                <button className='' onClick={this.props.toggle}>Need to Login?</button>
            </div>

        );
    }
}

export default connect(null, {register})(Register);