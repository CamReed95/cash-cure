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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

componentDidMount() {
    axios.get('api/values').then((res) => this.setState({values: res.data}))
}

// render () {
//     return (
//         <div className="savings-box">

//             <div className="info-row-3">
//                 <p className="Income-3">Income</p>
//                 <p className="planned-3">Planned</p>
//                 <p className="received-3">Received</p>
//             </div>

//             <div className="savings-row-1">
//                 <p className="savings-1">Save</p>
//                 <form onSubmit={this.handleSubmit}>
//                 <Input 
//                 type="text"
//                 className="planned-value-savings"
//                 placeholder="$0.00"
//                 value={this.state.value}
//                 onChange={this.handleChange}
//                 ></Input>
//                 <Input 
//                 type="text"
//                 className="received-value-savings"
//                 placeholder="$0.00"
//                 value={this.state.value}
//                 onChange={this.handleChange}
//                 ></Input>
//                 </form>
//             </div>

//         </div>
//     )
// }

}

export default Savings;