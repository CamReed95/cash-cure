import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/User'  

class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.logoutHandler = this.logoutHandler.bind(this)
    }
    logoutHandler(){
        this.props.logout().then(() => {

        }).catch(err => console.log('Error Logging out', err))
    }
    render() {
        return(
            <div>
                <button className='logout-button-2' onClick={this.logoutHandler}
                >Logout</button>
                <div className='Welcome-username'>Welcome, {this.props.user.data.email}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = {logout}

export default connect (mapStateToProps, mapDispatchToProps)(Logout);