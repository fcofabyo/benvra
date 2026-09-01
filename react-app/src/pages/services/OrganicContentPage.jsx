import { Link, Navigate } from 'react-router-dom';

function OrganicContentPage() {
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
          <Link to="/" replace>Início</Link>
          <Link to="/servicos" replace>Serviços</Link>
        </nav>
      </header>

      <section className="service-hero">
        <div>
          <p className="eyebrow">Conteúdo Orgânico</p>
          <h1>Conteúdo que constrói autoridade antes da venda.</h1>
        </div>
        <div className="service-stat">Presença digital com consistência e relevância.</div>
      </section>

      <div className="service-grid">
        <article className="service-card detail-card">
          <h3>Estratégia</h3>
          <ul>
            <li>Posicionamento editorial para a marca</li>
            <li>Calendário de conteúdo e temas relevantes</li>
            <li>Gatilhos de relacionamento e confiança</li>
            <li>Tom de voz alinhado ao público</li>
          </ul>
        </article>
        <article className="service-card detail-card">
          <h3>Impacto</h3>
          <p>Você ganha atenção, reconhecimento e uma conversa mais consistente com clientes que já querem comprar.</p>
        </article>
      </div>
    </main>
  );
}

export default OrganicContentPage;
