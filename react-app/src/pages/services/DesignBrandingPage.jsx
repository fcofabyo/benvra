import { Link, Navigate } from 'react-router-dom';

function DesignBrandingPage() {
  const hasLead = localStorage.getItem('benvra_lead_status') === 'completed';
  if (!hasLead) return <Navigate to="/capture" replace />;

  return (
    <main className="page-shell service-detail">
      <header className="topbar compact">
        <div className="brand-wrap">
          <div className="brand-mark">B</div>
          <span>Benvra</span>
        </div>
        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
        </nav>
      </header>

      <section className="service-hero">
        <div>
          <p className="eyebrow">Design & Branding</p>
          <h1>Identidade visual pensada para ganhar percepção e relevância.</h1>
        </div>
        <div className="service-stat">Marca que parece premium, comunica com clareza e se memoriza.</div>
      </section>

      <div className="service-grid">
        <article className="service-card detail-card">
          <h3>Elementos</h3>
          <ul>
            <li>Direção visual e posicionamento</li>
            <li>Manual de identidade e linguagem</li>
            <li>Elementos que reforçam autoridade</li>
            <li>Aplicações em canais digitais e materiais</li>
          </ul>
        </article>
        <article className="service-card detail-card">
          <h3>Benefício</h3>
          <p>Marca mais consistente, mais reconhecível e com presença mais forte no mercado.</p>
        </article>
      </div>
    </main>
  );
}

export default DesignBrandingPage;
