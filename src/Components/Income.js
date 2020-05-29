import React, {Component} from 'react';
import axios from 'axios';
// import './Income.css';

class Income extends Component {
    constructor() {
        super();
        this.state = {
            values: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

componentDidMount() {
    axios.get('/api/income').then((res) => this.setState({values: res.data}))
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
    console.log(this.state.values)
    return (
        <div className="income-box-1">

            <div className="info-row-1">
                <p className="Income">INCOME</p>
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
                {/* <button className="income-add-button"onClick={() => this.props.addValue( this.state.newPost )}> New Value </button>
                <button className="income-update-button"onClick={() => this.props.editValue( this.state.newPost )}> Update Value </button> */}
                <input 
                type="text"
                className="received-value-1"
                placeholder="$0.00"
                value={this.state.value}
                onChange={(e) => this.changeHandler(e)}
                />
                {/* <button className="income-add-button"onClick={() => this.props.addValue( this.state.newPost )}> New Value </button>
                <button className="income-update-button"onClick={() => this.props.editValue( this.state.newPost )}> Update Value </button> */}
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
                {/* <button className="income-add-button"onClick={() => this.props.addValue( this.state.newPost )}> New Value </button>
                <button className="income-update-button"onClick={() => this.props.editValue( this.state.newPost )}> Update Value </button> */}
                <input 
                type="text"
                className="received-value-2"
                placeholder="$0.00"
                value={this.state.value}
                onChange={(e) => this.changeHandler(e)}
                />
                {/* <button className="income-add-button"onClick={() => this.props.addValue( this.state.newPost )}> New Value </button>
                <button className="income-update-button"onClick={() => this.props.editValue( this.state.newPost )}> Update Value </button> */}
            </form>
            </div>

        </div>
        // add buttons and a div to display all the values, similar to noDB
    )
}

}

export default Income;