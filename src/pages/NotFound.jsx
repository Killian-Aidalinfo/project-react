import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__code">404</div>
      <p className="page__lead" style={{ margin: "0 auto 2rem" }}>
        Cette page n'existe pas. Elle a peut-être été déplacée.
      </p>
      <Link to="/" className="btn">
        Retour à l'accueil
      </Link>
    </div>
  );
}
