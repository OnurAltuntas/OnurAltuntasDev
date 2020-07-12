import React, { Component } from 'react';
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
        <animated.div className="page" style={fade}>
            <section class="light nopad-t nopad-b">
                <div class="row">
                    <div class="col-12">
                        <div id="face" class="face">
                            <a href="/Resume">
                                <div id="designer" class="designer">
                                    <div id="designer-desc" class="description">
                                        <p>UI/UX Designer with a passion for designing beautiful and functional user experiences.</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/about">
                                <div id="coder" class="coder">
                                    <div  class="description">
                                        <h1 className="coder-desc" >I'm a software developer based in Eskisehir, Turkey.
                                        I am recently working on Frontend web development.</h1>
                                        <p>Front End Developer who focuses on writing clean, elegant and efficient code.</p>
                                    </div>
                                </div>
                            </a>

                            <img id="face-img" class="face-img" src={foto} />
                            <div id="designer-img" class="designer-img"></div>
                            <div id="coder-img" class="coder-img"></div>
                            <div id="designer-bg" class="designer-bg"></div>
                            <div id="coder-bg" class="coder-bg"></div>
                        </div>
                    </div>
                </div>
            </section>


            <div class="header-center"><h3>Some of my latest work</h3></div>
            <div>

            </div>

            <BottomFooter />


        </animated.div>

    )
}
export default LandingPage;