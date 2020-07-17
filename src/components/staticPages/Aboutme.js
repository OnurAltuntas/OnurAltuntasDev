import React, {useEffect } from 'react'
import "../root/App.css"
import { useSpring, animated } from 'react-spring'
import "./styles.css";
import laptop from '../../assets/laptop.png';
import tablet from '../../assets/tablet.png';
import phone from '../../assets/phone.png';
import BottomFooter from '../common/BottomFooter';
import { Progress } from 'reactstrap';


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

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    });

    return (
        <animated.div className=".container-fluid" style={fade}>

            {!greetingStatus ? (
                <div>Click button below</div>
            ) : (
                    <div style={{ textAlign: 'center' }}>
                        <div className="container">
                            <h3 className="about-exp">Freelance Web and Mobile Designer Developer.Highly experienced in designing developing custom React.js and Asp.net websites.</h3>
                        </div>

                        <div>
                            <animated.img className="phone" style={lefttoRight} src={phone}></animated.img>
                            <animated.img className="laptop" style={uptoDown} src={laptop}></animated.img>
                            <animated.img className="tablet" style={righttoLeft} src={tablet}></animated.img>

                            <h3 className="about-exp">Fully responsive,<br />
                            custom designed<br />
                         React.js  websites</h3>
                        </div>

                        <div class="conatiner-fluid">
                            <div class="wrap">

                                <div class="box one">
                                    <div class="date">
                                    </div>
                                    <h1>WEBSITE DESIGN DEVELOPING</h1>
                                    <div class="poster p1">
                                        <h4>✓</h4>
                                    </div>
                                </div>

                                <div class="box two">
                                    <div class="date">
                                    </div>
                                    <h1>MOBILE APP DEVOLOPING</h1>
                                    <div class="poster p2" >
                                        <h4 >✓</h4>
                                    </div>
                                </div>

                                <div class="box three">
                                    <div class="date">
                                    </div>
                                    <h1>REACT JS AND REACT NATIVE</h1>
                                    <div class="poster p3">
                                        <h4>✓</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </div>
                )}
           
            
            <h3 className="about-exp">Skills</h3>

            <div className="container-md">
            <div>
                <div className="text-center">JavaScript</div>
                <Progress value="90" />
                <div className="text-center">React.js</div>
                <Progress color="info" value="100" />
                <div className="text-center">Asp.net</div>
                <Progress color="warning" value={75} />
                <div className="text-center">Python</div>
                <Progress color="danger" value={60} />
                <div className="text-center">C#</div>
                <Progress color="info" value={90} />
                <div className="text-center">C++</div>
                <Progress value={80} />
               
                <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>



            </div>
        </div>

        

        <BottomFooter/>

        </animated.div>
    );
}

export default Aboutme;

