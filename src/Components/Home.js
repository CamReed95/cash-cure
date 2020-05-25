import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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

            <div className='main-div'>

            {/* <button className='next-word-button' onClick={this.nextWord}>Next Word</button> */}
                
                <div></div>

                {/* <button className='add-word-button' onClick={() => this.addWord(this.state.words[this.state.index].word_id)}>Add Word to Study List</button> */}

                </div>   

                <Footer/>
            </div>
        )
    }
}

export default Home;