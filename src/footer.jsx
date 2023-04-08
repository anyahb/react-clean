import logo from "./header__logo-icon.png";
import twitter from './footer__twitter.png';
import instagram from './footer__insta.png';
import facebook from './footer__facebook.png';


const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='footer__first-column'>
                    <div className="footer__logo">
                        <div className="footer__logo-icon">
                            <img className="footer__logo-png" src={logo}/>
                        </div>
                        <div className="footer__logo-text">Live Clean</div>
                    </div>
                    <div className='footer__terms'>©2021 Dummy Terms Privacy</div>
                </div>

                <div className='footer__second-column'>
                    <div className='footer__links'>
                        <div className='footer__link'>Blog</div>
                        <div className='footer__link'>Send Feedback</div>
                        <div className='footer__link'>Dummy Link</div>
                        <div className='footer__link'>About</div>
                    </div>
                </div>


                <div className='footer__third-column'>
                    <div className='footer__socials'>
                        <div className='footer__social'>
                            <img src={facebook}/>
                        </div>

                        <div className='footer__social'>
                            <img src={instagram}/>
                        </div>

                        <div className='footer__social'>
                            <img src={twitter}/>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Footer;