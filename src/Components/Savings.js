import React, {Component} from 'react';
import axios from 'axios';
// import './Savings.css';

class Savings extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            values: []
        }
    }

componentDidMount() {
    axios.get('api/values').then((res) => this.setState({values: res.data}))
}

render () {
    return (
        <div className="savings-box">

            <div className="info-row-3">
                <p className="Income-3">Savings</p>
                <p className="planned-3">Planned</p>
                <p className="received-3">Received</p>
            </div>

            <div className="savings-row-1">
                <p className="savings-1">Save</p>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                className="planned-value-savings"
                placeholder="$0.00"
                value={this.state.value}
                onChange={this.handleChange}
                />
                <input 
                type="text"
                className="received-value-savings"
                placeholder="$0.00"
                value={this.state.value}
                onChange={this.handleChange}
                />
            </form>
            </div>

        </div>
    )
}}

export default Savings;