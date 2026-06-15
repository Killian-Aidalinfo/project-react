import { useState } from "react";

const questions = [
  {
    q: "Quelles technologies sont utilisées ?",
    a: "Le site est construit avec React 19, Vite pour le bundling et React Router pour la navigation entre les vues.",
  },
  {
    q: "Le projet est-il open source ?",
    a: "Oui, le code source est public et disponible sur GitHub. Vous pouvez le cloner, l'exécuter et l'adapter librement.",
  },
  {
    q: "Comment lancer le projet en local ?",
    a: "Après avoir cloné le dépôt, exécutez « npm install » puis « npm run dev » pour démarrer le serveur de développement.",
  },
  {
    q: "Puis-je ajouter mes propres pages ?",
    a: "Bien sûr. Chaque vue est un fichier dans src/pages ; il suffit d'ajouter une route dans main.jsx et un lien dans la navigation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <header className="page__head">
        <p className="eyebrow">Questions fréquentes</p>
        <h2 className="page__title">FAQ</h2>
        <p className="page__lead">
          Les réponses aux questions les plus courantes sur le projet.
        </p>
      </header>

      <div className="faq">
        {questions.map((item, i) => {
          const isOpen = open === i;
          return (
            <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.q}>
              <button
                className="faq__q"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faq__sign">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="faq__a">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}
