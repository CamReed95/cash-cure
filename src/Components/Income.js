import React, {Component} from 'react';
import axios from 'axios';
import './Income.css';

class Income extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            values: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

componentDidMount() {
    axios.get('api/values').then((res) => this.setState({values: res.data}))
}

handleSubmit(e) {
    alert('A value was submitted: ' + this.state.value);
    e.preventDefault();
}

changeHandler(e) {
    this.setState({
      [e.target]: e.target.value, // check this line 
    });
  }


render () {
    return (
        <div className="income-box">

            <div className="info-row-1">
                <p className="Income">Income</p>
                <p className="planned">Planned</p>
                <p className="received">Received</p>
            </div>

            <div className="income-row-1">
                <p className="income-1">First Income</p>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                className="planned-value-1"
                placeholder="$0.00"
                value={this.state.value}
                onChange={(e) => this.changeHandler(e)}
                />
                <input 
                type="text"
                className="received-value-1"
                placeholder="$0.00"
                value={this.state.value}
                onChange={(e) => this.changeHandler(e)}
                />
            </form>
            </div>

            <div className="income-row-2">
                <p className="income-2">Second Income</p>
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                className="planned-value-2"
                placeholder="$0.00"
                value={this.state.value}
                onChange={(e) => this.changeHandler(e)}
                />
                <input 
                type="text"
                className="received-value-2"
                placeholder="$0.00"
                value={this.state.value}
                onChange={(e) => this.changeHandler(e)}
                />
            </form>
            </div>

        </div>
    )
}

}

export default Income;