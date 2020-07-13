import React from 'react'
import { useSpring, animated } from 'react-spring'
import phone from '../../assets/res.png';
import BottomFooter from '..//common/BottomFooter';
import res from '../../assets/res.png';




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
           <img alt="phone" src={res}></img>
           <BottomFooter />
        </animated.div>
    )
}

export default Resume;