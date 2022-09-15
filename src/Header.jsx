import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header(props) {
    const [get, set]=useState(false)
    function hide (e){
        e.preventDefault();
        set(true)

    }

    let rightValue = (get)?0:'-200px'
  return (
    <>
    <div className="header">
        <div className="navigation">
            <div className="logo">
                <img src="tesla images/logo.svg" alt="" />
                
                
            </div>
            <div className="right_nav">
                <ul>
                    <li><a href="">Model A</a></li>
                    <li><a href="">Model B</a></li>
                    <li><a href="">Model C</a></li>
                    <li><a href="">Model D</a></li>
                    <li><a href="">Model E</a></li>
                    <li><a href="">Model F</a></li>
                    <li><a href="">Accessories</a></li>
                    {/* <Header {dis}/> */}
                    <p>{props.name}</p>
                </ul>

            </div>
            <div className="left_nav">
                <ul>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Account</a></li>
                    <li><a href="" onClick={hide}>Menu</a></li>

                </ul>
                </div>    
        </div>
        <ul className='scroll' style={{right:rightValue}}>
        <AccessTimeIcon onClick={()=>set(false)} ></AccessTimeIcon>
            <li><a href="">Model A</a></li>
            <li><a href="">Model B</a></li>
            <li><a href="">Model C</a></li>
            <li><a href="">Model D</a></li>
            <li><a href="">Model E</a></li>
            <li><a href="">Model F</a></li>
            <li><a href="">Model G</a></li>
            <li><a href="">Accessories</a></li>
        </ul>


    </div>
    </>
  )
}

export default Header