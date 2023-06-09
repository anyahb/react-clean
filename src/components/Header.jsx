import logo from "../assets/img/header__logo-icon.png";


const Header = () => {


return (
    <div className="header">
        <div className="header__logo">
            <div className="header__logo-icon">
                <img className="header__logo-png" src={logo}/>
            </div>
            <div className="header__logo-text">Live Clean</div>
        </div>

        <div className="header__burger">
            <span className="header__burger-line header__burger-line_center"></span>
        </div>

        <div className="header__buttons">
            <div className="header__register">Register</div>
            <div className="header__sign-in">Sign-in</div>
            <div className="header__links">
                <div className="header__link">Block</div>
                <div className="header__link">Send Feedback</div>
                <div className="header__link">About</div>
            </div>
        </div>
    </div>
)
}


export default Header;