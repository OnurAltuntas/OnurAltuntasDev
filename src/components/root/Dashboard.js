import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import "../root/App.css"
import BottomFooter from '../common/BottomFooter';

class LandingPage extends Component {

    render() {
        return (

            <div className="main">
                <section class="light nopad-t nopad-b">
                    <div class="row">
                        <div class="col-12">
                            <div id="face" class="face">
                                <a href="/Resume">
                                    <div id="designer" class="designer">
                                        <div id="designer-desc" class="description">
                                            <h1>mobile dev</h1>
                                            <p>UI/UX Designer with a passion for designing beautiful and functional user experiences.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/about">
                                    <div id="coder" class="coder">
                                        <div id="coder-desc" class="description">
                                            <h1>web dev</h1>
                                            <p>Front End Developer who focuses on writing clean, elegant and efficient code.</p>
                                        </div>
                                    </div>
                                </a>

                                <img id="face-img" class="face-img" src="http://www.adhamdannaway.com/wp-content/themes/dannaway/images/adham-dannaway-designer-coder.jpg" alt="adham dannaway ui designer" />
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
            </div>
            
        )
    }
}
export default LandingPage;