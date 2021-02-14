import React, { Component } from 'react';

import '../styles/components/Footer.css';

import socialLogoGitHub from '../assets/images/socialLogoGitHub.png';
import linkedin from '../assets/images/linkedin.png';

class Footer extends Component {
    render() {
        return (
            <>
                <div id='containerFooter'>

                    <div className='social'>

                        <a href='https://www.linkedin.com/in/rafaelmarcelo08/' target='_blank' rel="noreferrer">
                            <img src={linkedin} alt='socialLogo' />
                        </a>

                        <a href='https://github.com/rafaelmarcelo08' target='_blank' rel="noreferrer">
                            <img src={socialLogoGitHub} alt='socialLogo' />
                        </a>
                    </div>

                    <div id='developer'>
                        <span>
                            © <strong>2021</strong> Copyright - Feito por <strong className='developer-color'>Rafael Marcelo</strong> -
                        </span>

                        <h5 className='logo'>Rocket<span className='dev'>Dev</span></h5>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;