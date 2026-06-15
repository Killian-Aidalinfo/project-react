export default function APropos() {
  return (
    <>
      <header className="page__head">
        <p className="eyebrow">Le projet</p>
        <h2 className="page__title">À propos</h2>
      </header>

      <div className="prose">
        <p>
          <strong>Atelier</strong> est un projet React minimal monté avec Vite.
          Il sert de fondation pédagogique : un layout partagé, plusieurs vues
          reliées par un routeur, et une identité visuelle assumée.
        </p>
        <p>
          L'objectif n'est pas la complexité, mais la clarté — un code qu'on
          relit sans effort et qu'on étend sans friction.
        </p>
      </div>

      <div className="stats">
        <div>
          <div className="stat__num">7</div>
          <div className="stat__label">vues</div>
        </div>
        <div>
          <div className="stat__num">React 19</div>
          <div className="stat__label">+ Vite</div>
        </div>
        <div>
          <div className="stat__num">0</div>
          <div className="stat__label">dépendance superflue</div>
        </div>
      </div>
    </>
  );
}
