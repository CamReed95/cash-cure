import React, {Component} from 'react';
import axios from 'axios';
import './Expenses.css';

class Expenses extends Component {
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
        <div className="expenses-box">

            <div className="info-row-4">
                <p className="Income-4">Income</p>
                <p className="planned-4">Planned</p>
                <p className="received-4">Received</p>
            </div>

            <div className="expenses-row-1">
                <p className="expenses-1">Mortgage/Rent</p>
                <Input 
                className="planned-value-expenses"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-expenses"
                placeholder="$0.00"
                ></Input>
            </div>

            <div className="expenses-row-2">
                <p className="expenses-2">Food</p>
                <Input 
                className="planned-value-expenses-2"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-expenses-2"
                placeholder="$0.00"
                ></Input>
            </div>
            <div className="expenses-row-3">
                <p className="expenses-3">Utilities</p>
                <Input 
                className="planned-value-expenses-3"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-expenses-3"
                placeholder="$0.00"
                ></Input>
            </div>
            <div className="expenses-row-4">
                <p className="expenses-4">Transportation</p>
                <Input 
                className="planned-value-expenses-4"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-expenses-4"
                placeholder="$0.00"
                ></Input>
            </div>
            <div className="expenses-row-5">
                <p className="expenses-5">Miscellaneous</p>
                <Input 
                className="planned-value-expenses-5"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-expenses-5"
                placeholder="$0.00"
                ></Input>
            </div>

        </div>
    )
}

}

export default Expenses;