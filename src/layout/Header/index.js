import { Link } from "react-router-dom";
import '../../styles/layout/header.css';
import logo from "../../assets/imgs/logo.png";

function Header() {
    return (
      <header>
        <img src={logo} alt="logo Kasa"/>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Acceuil</Link>
                </li>
                <li>
                    <Link to='/about'>À Propos</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
}

export default Header;