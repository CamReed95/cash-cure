import React, {Component} from 'react';
import axios from 'axios';
import './Donations.css';

class Donations extends Component {
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
        <div className="donations-box">

            <div className="info-row-2">
                <h1 className="Income">Income</h1>
                <p className="planned">Planned</p>
                <p className="received">Received</p>
            </div>

            <div className="donations-row-1">
                <h2 className="donations-1">To Give</h2>
                <Input 
                className="planned-value-donations"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-donations"
                placeholder="$0.00"
                ></Input>
            </div>

            <div className="donations-row-2">
                <h3 className="income-2">Second Income</h3>
                <Input 
                className="planned-value-donations-2"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-donations-2"
                placeholder="$0.00"
                ></Input>
            </div>

        </div>
    )
}

}