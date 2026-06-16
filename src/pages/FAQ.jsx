import { useState } from "react";
import { getFaq } from "../api";
import { useResource } from "../useResource";

export default function FAQ() {
  const { data: questions, loading, error } = useResource(getFaq);
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

      {loading && <p className="notice">Chargement…</p>}
      {error && <p className="notice">Impossible de charger la FAQ : {error}</p>}

      <div className="faq">
        {questions.map((item, i) => {
          const isOpen = open === i;
          return (
            <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.id}>
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
