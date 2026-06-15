import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <header className="page__head">
        <p className="eyebrow">Échangeons</p>
        <h2 className="page__title">Contact</h2>
        <p className="page__lead">
          Un message, une question ? Remplissez le formulaire ci-dessous.
        </p>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="nom">Nom</label>
          <input id="nom" name="nom" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />
        </div>
        <button type="submit" className="btn">
          Envoyer
        </button>
        {sent && (
          <p className="notice">→ Merci ! Votre message a bien été pris en compte.</p>
        )}
      </form>
    </>
  );
}
