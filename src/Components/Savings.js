import React, {Component} from 'react';
import axios from 'axios';
import './Savings.css';

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
        <div>

            <div className="info-row-3">

            </div>

            <div className="savings-row-1">

            </div>

            <div className="savings-row-2">

            </div>

        </div>
    )
}

}