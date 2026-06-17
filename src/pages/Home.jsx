import { Link } from "react-router-dom";

const manifesto = [
  {
    no: "01",
    title: "Clarté d'abord",
    text: "Une structure lisible : layout partagé, pages isolées, styles cohérents — pas de magie inutile.",
  },
  {
    no: "02",
    title: "Construit pour durer",
    text: "Routage, composants, tests : les bases qui permettent à un projet de grandir sans tout casser.",
  },
  {
    no: "03",
    title: "Prêt à l'emploi",
    text: "Une fondation minimale mais complète, conçue pour être étendue selon vos besoins, pas devinée.",
  },
];

export default function Home() {
  return (
    <>
      <section className="manifesto-hero">
        <p className="eyebrow rise" style={{ animationDelay: "0ms" }}>
          Atelier · 2026
        </p>
        <h1 className="manifesto-hero__title">
          <span className="rise" style={{ animationDelay: "80ms" }}>
            On pense.
          </span>
          <span className="rise" style={{ animationDelay: "160ms" }}>
            On code.
          </span>
          <span className="rise" style={{ animationDelay: "240ms" }}>
            On <em>livre</em>.
          </span>
        </h1>
        <p className="manifesto-hero__lead rise" style={{ animationDelay: "320ms" }}>
          Atelier est un socle React pensé pour aller vite sans sacrifier la
          clarté : une base saine, des pages isolées, un style cohérent du
          premier commit à la mise en prod.
        </p>
      </section>

      <section className="manifesto-list">
        {manifesto.map((m, i) => (
          <article
            key={m.no}
            className="manifesto-row rise"
            style={{ animationDelay: `${400 + i * 100}ms` }}
          >
            <span className="manifesto-row__no">{m.no}</span>
            <div className="manifesto-row__body">
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="manifesto-cta rise" style={{ animationDelay: "700ms" }}>
        <p>Envie de voir ce que ça donne en pratique ?</p>
        <Link to="/travaux" className="btn">
          Voir les travaux →
        </Link>
      </section>
    </>
  );
}
