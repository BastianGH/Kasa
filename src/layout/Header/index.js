import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <img src="" alt=""/>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Acceuil</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
}

export default Header;