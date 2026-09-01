import { Link, Navigate } from 'react-router-dom';

function ServicesPage() {
  const hasLead = typeof window !== 'undefined' && localStorage.getItem('benvra_lead_status') === 'completed';

  if (!hasLead) {
    return <Navigate to="/capture" replace />;
  }

  return (
    <main className="page-shell service-page">
      <header className="topbar compact">
        <div className="brand-wrap">
          <div className="brand-mark">B</div>
          <span>Benvra</span>
        </div>
        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/capture">Captura</Link>
        </nav>
      </header>

      <section className="section intro-block">
        <div className="section-tag">Serviços</div>
        <h1>Estratégia feita para conectar sua marca com quem compra.</h1>
        <p>
          Cada solução da Benvra foi pensada para fortalecer percepção, confiança e conversão em
          etapas claras.
        </p>
      </section>

      <section className="cards services-list">
        <article className="service-card featured">
          <span>01</span>
          <h3>Web Design</h3>
          <p>Sites premium, narrativas fortes e páginas que orientam o lead à decisão.</p>
          <Link to="/servicos/web-design">Explorar</Link>
        </article>
        <article className="service-card featured">
          <span>02</span>
          <h3>Conteúdo Orgânico</h3>
          <p>Estratégia de presença digital para posicionamento, autoridade e relacionamento.</p>
          <Link to="/servicos/organic-content">Explorar</Link>
        </article>
        <article className="service-card featured">
          <span>03</span>
          <h3>Paid Traffic</h3>
          <p>Campanhas com foco em performance, estrutura e escala inteligente.</p>
          <Link to="/servicos/paid-traffic">Explorar</Link>
        </article>
        <article className="service-card featured">
          <span>04</span>
          <h3>Design & Branding</h3>
          <p>Identidade visual que cria diferenciação e reconhecimento mais rápido.</p>
          <Link to="/servicos/design-branding">Explorar</Link>
        </article>
      </section>
    </main>
  );
}

export default ServicesPage;
