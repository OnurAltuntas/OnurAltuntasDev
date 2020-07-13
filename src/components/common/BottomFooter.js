import React from 'react';
import {Footer, FooterSection } from 'react-mdl';
import "../root/App.css"

const BottomFooter = (props) =>{
        return (
            <div className="footer">
            <Footer size="mega">
                <FooterSection type="middle">
                <div style={{ margin: '50px' }}>

                <ul style={{ display: 'flex', justifyContent: 'center' }}>
                    <a className='footer-links' href="/">© 2020 Onur Altuntaş</a>
                    <a className='footer-links' href="/aboutme">about</a>
                    <a className='footer-links' href="/Projects">featured</a>
                    <a className='footer-links' href="/Projects">portfolio</a>
                    
                </ul>
               
            </div>
                </FooterSection>
            </Footer>
        </div>
        )
}

export default BottomFooter;
