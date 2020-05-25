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
                <p className="Income-2">Income</p>
                <p className="planned-2">Planned</p>
                <p className="received-2">Received</p>
            </div>

            <div className="donations-row-1">
                <p className="donations-1">To Donate</p>
                <Input 
                className="planned-value-donations"
                placeholder="$0.00"
                ></Input>
                <Input 
                className="received-value-donations"
                placeholder="$0.00"
                ></Input>
            </div>

        </div>
    )
}

}

export default Donations;