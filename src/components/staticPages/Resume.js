import React, { Component } from 'react'
import { useSpring, animated } from 'react-spring'
import phone from '../../assets/res.png';


const Resume = () => {

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }

    });
    return (
        <animated.div  className="resume" style={fade}>
           <img src={phone}></img>
        </animated.div>
    )
}

export default Resume;