import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import "../root/App.css"

function bottomBar() {
    return (
        <div className="footer">
            <Footer size="mega">
                <FooterSection type="middle">
                    <FooterDropDownSection title="Features">
                        <FooterLinkList>
                            <a href="/">About</a>
                            <a href="/">Terms</a>
                            <a href="/">Partners</a>
                            <a href="/">Updates</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Details">
                        <FooterLinkList>
                            <a href="/">Specs</a>
                            <a href="/">Tools</a>
                            <a href="/">Resources</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Technology">
                        <FooterLinkList>
                            <a href="/">How it works</a>
                            <a href="/">Patterns</a>
                            <a href="/">Usage</a>
                            <a href="/">Products</a>
                            <a href="/">Contracts</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="FAQ">
                        <FooterLinkList>
                            <a href="/">Questions</a>
                            <a href="/">Answers</a>
                            <a href="/">Contact Us</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                </FooterSection>
                <FooterSection type="bottom" logo="Title">
                    <FooterLinkList>
                        <a href="/">Help</a>
                        <a href="/">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </div>
    )
}

class LandingPage extends Component {

    render() {
        return (
            <div className="landing-main">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar-img"
                            src="https://avatars0.githubusercontent.com/u/53194850?s=460&u=88ff0b9c8fe41c908d3c9b7ff43eb00dba669e66&v=4"
                            alt="avatar"
                        />
                        <div className="banner-text">
                            <h1>Web and Mobile Developer</h1>
                            <hr></hr>
                            <p>HTML/CSS | JavaScript | NodeJS | React | Android | C# | Asp.net | Firebase </p>
                            <div>
                                <a href="https://tr.linkedin.com/in/onur-altunta%C5%9F-2103a319a" rel="noopener noreferrer" target="_blank">
                                <img style={{height:"5rem"}} src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Linkedin"></img>
                                </a>
                                <a href="https://twitter.com/beyhudedolanik" rel="noopener noreferrer" target="_blank">
                                <img style={{height:"5rem"}} src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="Linkedin"></img>
                                </a>
                                <a href="https://www.youtube.com/channel/UCalJQ45NyMzMvPqK5n0xYEA/" rel="noopener noreferrer" target="_blank">
                                <img style={{height:"5rem"}} src="https://image.flaticon.com/icons/svg/174/174883.svg" alt="Linkedin"></img>
                                </a>
                                <a href="https://github.com/OnurAltuntas" rel="noopener noreferrer" target="_blank">
                                    <img style={{height:"5rem"}} src="https://image.flaticon.com/icons/png/512/733/733553.png" alt="Linkedin"></img>
                                </a>
                               
                               
                            </div>
                        </div>
                    </Cell>
                </Grid>
                {bottomBar()}
            </div>
        )
    }
}
export default LandingPage;