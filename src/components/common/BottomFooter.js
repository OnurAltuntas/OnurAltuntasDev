import React from 'react';
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import "../root/App.css"


function bottomBar() {
    return (
        <div className="footer">
            <Footer size="mega">
                <FooterSection type="middle">
                <div style={{ margin: '50px' }}>

                <ul style={{ display: 'flex', justifyContent: 'center' }}>
                    <a className='footer-links' href="https://onuraltuntasdev.netlify.app/">© 2020 Onur Altuntaş</a>
                    <a className='footer-links' href="http://www.adhamdannaway.com/about">about</a>
                    <a className='footer-links' href="http://www.adhamdannaway.com/featured">featured</a>
                    <a className='footer-links' href="http://www.adhamdannaway.com/portfolio">portfolio</a>
                    
                </ul>
                <div class="gradient-white">
                        <a className="back-to-top-link" href="#"><i class="fa fa-arrow-up" aria-hidden="true" style={{ fontSize: '24px', color: 'red' }}></i></a>
                    </div>
            </div>
                </FooterSection>
            </Footer>
        </div>
    )
}
const BottomFooter = (props) =>{
        return (
            <div>
            {bottomBar()}
            </div>
        )
}

export default BottomFooter;
