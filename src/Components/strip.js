import React from 'react'
import "../Styles/strip.scss"
import amount from "../Images/amount.png"
import request from "../Images/request.png"
import donated from "../Images/donated.png"
import registered from "../Images/registered.png"

const Strip = () => {

    return (
        <div id='strip' className='flex'>
            <div className='flex'>
                <img src={registered} alt="/"></img>
                <p>4000</p>
                <p>Blood Donor Registered</p>
            </div>
            <div className='flex'>
                <img src={donated} alt="" />
                <p id="Donated">500</p>
                <p>Total Blood Donated</p>
            </div>
            <div className='flex'>
                <img src={request} alt="" />
                <p id="Request">1000</p>
                <p>Blood Request Raised</p>
            </div>
            <div className='flex'>
                <img src={amount} alt="" />
                <p id="Amount">100000</p>
                <p>Blessing Amount</p>
            </div>
        </div>
    )
}

export default Strip
