import React from 'react';
import "../root/App.css"
import BottomFooter from '../common/BottomFooter';
import { useSpring, animated } from 'react-spring'



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


            <section className="dasboard-box" >
                <div class="container">
                    <div class="row">
                        <div style={{ textAlign: 'center' }} class="col">
                            <img className="dasboard-img" src="http://www.adhamdannaway.com/wp-content/themes/dannaway/images/about-adham-dannaway.jpg" alt="adham dannaway ui designer"></img>
                        </div>
                        <div class="col">
                            <h1 className="coder-desc">I'm a software developer based in Eskisehir, Turkey.
                        I am recently working on Frontend web development.</h1>

                        {/*<div class="container">
                                <div class="row">
                                    <div style={{ textAlign: 'center' }} class="col">
                                    <a href="https://twitter.com/beyhudedolanik?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow twitter</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

                                    </div>
                                    <div style={{ textAlign: 'center' }} class="col">
                                    <a href="https://www.youtube.com/channel/UCalJQ45NyMzMvPqK5n0xYEA?view_as=subscriber" class="twitter-follow-button" data-show-count="false">Follow youtube</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                    </div>
                                </div>
                        </div> */}

                        </div>
                    </div>
                </div>

            </section>





            <div class="header-center"><h3 className="coder-desc">Some of my latest work</h3></div>

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

            <BottomFooter />





        </animated.div>

    )
}
export default LandingPage;