import { Link, Navigate } from 'react-router-dom';

function PaidTrafficPage() {
  const isBrowser = typeof window !== 'undefined';
  const hasLead = isBrowser && localStorage.getItem('benvra_lead_status') === 'completed';
  const selectedService = isBrowser ? localStorage.getItem('benvra_lead_service') : null;
  const isAllowed = selectedService === 'paid-traffic';

  if (!hasLead || !isAllowed) return <Navigate to="/capture" replace />;

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

      <section className="service-hero paid-traffic-hero">
        <div>
          <p className="eyebrow">Paid Traffic</p>
          <h1>Campanhas que geram tráfego com intenção e escalam conversão.</h1>
        </div>
        <div className="service-stat">
          Estratégia focada em performance e maturidade de aquisição.
        </div>
      </section>

      <div className="service-grid">
        <article className="service-card detail-card">
          <h3>Estrutura</h3>
          <ul>
            <li>Diagnóstico de funil e oferta</li>
            <li>Segmentação por intenção e comportamento</li>
            <li>Criação de anúncios com direção clara</li>
            <li>Otimização contínua por volume e conversão</li>
          </ul>
        </article>

        <article className="service-card detail-card highlight">
          <h3>Meta</h3>
          <p>Mais leads qualificados, melhor custo por aquisição e crescimento sustentável do negócio.</p>
        </article>
      </div>

      <section className="value-grid">
        <div className="value-item">
          <span>01</span>
          <h4>Diagnóstico</h4>
          <p>Entendemos oferta, público e pontos de atrito para evitar investimento em ruído.</p>
        </div>
        <div className="value-item">
          <span>02</span>
          <h4>Execução</h4>
          <p>Estratégias que sustentam anúncios e páginas em um único caminho de conversão.</p>
        </div>
        <div className="value-item">
          <span>03</span>
          <h4>Escala</h4>
          <p>Otimização guiada por dados para expandir o que já funciona e reduzir desperdício.</p>
        </div>
      </section>
    </main>
  );
}

export default PaidTrafficPage;
