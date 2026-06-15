import { Link } from "react-router-dom";

const features = [
  {
    no: "01",
    title: "Routage",
    text: "Navigation entre plusieurs vues avec React Router et liens actifs.",
  },
  {
    no: "02",
    title: "Composants",
    text: "Une structure claire : layout partagé, pages isolées, styles cohérents.",
  },
  {
    no: "03",
    title: "Prêt à étendre",
    text: "Base minimale et lisible, conçue pour grandir avec votre projet.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow rise" style={{ animationDelay: "0ms" }}>
            Projet React · 2026
          </p>
          <h1
            className="hero__title rise"
            style={{ animationDelay: "80ms", marginTop: "1rem" }}
          >
            Un point de <em>départ</em> propre.
          </h1>
        </div>
        <p className="hero__aside rise" style={{ animationDelay: "180ms" }}>
          Une application React simple, multi-vues, pensée comme socle pour
          vos expérimentations. Explorez les pages depuis le menu.
        </p>
      </section>

      <section className="features">
        {features.map((f, i) => (
          <article
            key={f.no}
            className="feature rise"
            style={{ animationDelay: `${260 + i * 90}ms` }}
          >
            <span className="feature__no">{f.no}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </section>

      <p style={{ marginTop: "2.5rem" }}>
        <Link to="/travaux" className="btn">
          Voir les travaux →
        </Link>
      </p>
    </>
  );
}
