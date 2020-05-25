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
        <div>

            <div className="info-row-4">

            </div>

            <div className="expenses-row-1">

            </div>

            <div className="expenses-row-2">

            </div>

        </div>
    )
}

}