import React from 'react'
import { useSpring, animated } from 'react-spring'
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
        <animated.div style={fade, { textAlign: 'center' }}>

           
                <iframe style={{ textAlign: 'center' }} src={res} width="100%" height="500px">  </iframe>
           

            <BottomFooter />
        </animated.div>
    )
}

export default Resume;