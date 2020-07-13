import React from 'react'
import { useSpring, animated } from 'react-spring'
import BottomFooter from '..//common/BottomFooter';
import res from '../../assets/res.pdf';




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
            
            <iframe src={res} frameborder="0" height="600px" width="100%"></iframe>

            <BottomFooter />
        </animated.div>
    )
}

export default Resume;