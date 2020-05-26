import React, {Component} from 'react';
// import './Home.css';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Income from './Income';
import Donations from './Donations';
import Savings from './Savings';
import Expenses from './Expenses';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            
        }
        
    } 

    componentDidMount() {
        axios.get('/api/values').then((res) => this.setState({values: res.data}))
    }

    // toggleHandler() {
    //     let {greek} = this.state
    //     this.setState({greek: !greek})
    // } 

    // nextWord() {
    //     let {index} = this.state
    //     this.setState({index: index + 1})
    // }

    editValue(id) {
        axios.put(`/api/values/${id}`).then(() => console.log('Value edited!'))
    }

    render () {
        console.log(this.state.words)
        return (
            <div className="home-base">
                
                <Header/>
                <div className="main-comps">
                    <Income/>
                    <Donations/>
                    <Savings/>
                    <Expenses/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;