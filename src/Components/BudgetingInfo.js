import React from 'react';
import './BudgetingInfo.css';
import Header from './Header';
import Footer from './Footer';

const Info = () => {
    return (
        <div className="bf-div">
        <Header/>
            <div className="BudgetingInfo">
                    <h1 className="benefits">Budgeting Benefits: </h1>
                    <p className="info-text">What is a budget? <br/>According to Investopedia, a budget is an estimation of revenue and expenses over a specified future period of time and is usually compiled and re-evaluated on a periodic basis. <br/>A little complicated? Don't worry, we'll break down the pros of what all of this means. The following are only SOME of the benefits of budgeting: <br/>- Control your money, not the other way around <br/>- Ends needless spending <br/>- Creates a financial plan to help accomplish your goals <br/>- Allows preparation for emergencies or worthwhile experiences <br/>- The list goes on!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Info;