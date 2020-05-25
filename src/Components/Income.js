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

    }

componentDidMount() {
    axios.get('api/values').then((res) => this.setState({values: res.data}))
}

render () {
    return (
        <div className="">

            <div className="info-row-1">
                <h1 className="Income">Income</h1>
                <p className="planned">Planned</p>
                <p className="received">Received</p>
            </div>

            <div className="income-row-1">
                <h2 className="income-1">First Income</h2>
                <Input 
                className="planned-value-1"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-1"
                placeholder="$0.00"
                ></Input>
            </div>

            <div className="income-row-2">
                <h3 className="income-2">Second Income</h3>
                <Input 
                className="planned-value-2"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-2"
                placeholder="$0.00"
                ></Input>
            </div>

        </div>
    )
}

}