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
        <animated.div style={fade,{ textAlign: 'center' }}>

            <div class="container-sm">

                <iframe title="resume" style={{ textAlign: 'center' }} src={res} width="90%" height="800px">  </iframe>

            </div>

            <BottomFooter />
        </animated.div>
    )
}

export default Resume;