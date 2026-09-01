import { Link, Navigate } from 'react-router-dom';

function WebDesignPage() {
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
          <p className="eyebrow">Web Design</p>
          <h1>Sites que unem presença premium, clareza e conversão.</h1>
        </div>
        <div className="service-stat">Estrutura visual que funciona como venda.</div>
      </section>

      <div className="service-grid">
        <article className="service-card detail-card">
          <h3>O que inclui</h3>
          <ul>
            <li>Arquitetura estratégica de páginas</li>
            <li>Design premium e storytelling visual</li>
            <li>Microcopy orientada à conversão</li>
            <li>Otimização para experiência mobile</li>
          </ul>
        </article>
        <article className="service-card detail-card">
          <h3>Resultado</h3>
          <p>Mais autoridade para a marca e maior clareza para quem está pronto para comprar.</p>
        </article>
      </div>
    </main>
  );
}

export default WebDesignPage;
