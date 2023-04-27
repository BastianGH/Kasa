import '../../styles/pages/notfound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="NotFound" >
        <h1>404</h1>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/" >Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default NotFound;

