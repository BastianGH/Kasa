import '../../styles/layout/footer.css';
import logo from "../../assets/imgs/logo-white.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa"/>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
