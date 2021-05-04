import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="navbar-brand">
          Ben.ciné
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/films">
            Films
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/series">
            Séries
          </Link>
        </li>
      </ul>
      <form class="form-inline" action="/action_page.php">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Recherche" />
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
        </div>
      </form>
    </nav>
  );
};
export default Navigationbar;
