import './style.css'
import logo from './NeolandLogo.png'

function Header(){

    return(
            <div className="header__container">
                <img className="img__container" src={logo} alt="Logo" />
                <p className="text__container   "> &#128220; Version 1.0</p>
            </div>
    )
}

export default Header