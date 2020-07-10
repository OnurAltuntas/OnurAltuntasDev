import React, { Component, useState, useEffect } from 'react'
import "../root/App.css"
import { useSpring, animated } from 'react-spring'
import "./styles.css";
import laptop from '../../assets/laptop.png';
import tablet from '../../assets/tablet.png';
import phone from '../../assets/phone.png';


const Aboutme = () => {

    const [greetingStatus, displayGreeting] = React.useState(false);
    useEffect(() => {
        displayGreeting(true);
    }, [])

    const righttoLeft = useSpring({
        opacity: greetingStatus ? 1 : 0,
        marginRight: greetingStatus ? 0 : -500
    });
    const lefttoRight = useSpring({
        opacity: greetingStatus ? 1 : 0,
        marginLeft: greetingStatus ? 0 : -500
    });
    const uptoDown = useSpring({
        opacity: greetingStatus ? 1 : 0,
        marginBottom: greetingStatus ? 0 : -500
    });

    return (
        <div className="container">
            <div>
            </div>
            {!greetingStatus ? (
                <div>Click button below</div>
            ) : (
                    <div>
                        <div >
                        <animated.img className ="phone" style={lefttoRight,{textAlign: 'left' }} src={phone}></animated.img>
                            <animated.img className ="laptop" style={uptoDown} src={laptop}></animated.img>
                            <animated.img className ="tablet" style={righttoLeft,{ textAlign: 'right' }} src={tablet}></animated.img>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Aboutme;

