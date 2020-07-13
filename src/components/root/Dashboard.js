import React  from 'react';
import "../root/App.css"
import BottomFooter from '../common/BottomFooter';
import { useSpring, animated } from 'react-spring'
import foto from './web-foto.png';



const LandingPage = () => {

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
            <section >
                <div class="row">
                    <div class="col-12">
                        <div id="face" class="face">
                            
                            <a href="/aboutme">
                                <div id="coder" class="coder">
                                    <div  class="description">
                                        <h1 className="coder-desc" >I'm a software developer based in Eskisehir, Turkey.
                                        I am recently working on Frontend web development.</h1>
                                        <p>Front End Developer who focuses on writing clean, elegant and efficient code.</p>
                                    </div>
                                </div>
                            </a>

                            <img id="face-img" alt="face" class="face-img" src={foto} />
                           
                           
                            
                        </div>
                    </div>
                </div>
            </section>


            <div class="header-center"><h3>Some of my latest work</h3></div>
            <div>

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
            <BottomFooter/>

         
           


        </animated.div>

    )
}
export default LandingPage;