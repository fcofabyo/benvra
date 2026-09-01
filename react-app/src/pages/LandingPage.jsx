import { Link, Navigate } from 'react-router-dom';

const leadKey = 'benvra_lead_status';

function LandingPage() {
  const hasLead = localStorage.getItem(leadKey) === 'completed';

  if (!hasLead) {
    return <Navigate to="/capture" replace />;
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">B</div>
          <span>Benvra</span>
        </div>
        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#cases">Cases</a>
          <a href="#contato">Contato</a>
        </nav>
        <Link className="button primary" to="/capture">Começar</Link>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Estratégia + identidade + conversão</p>
          <h1>Transformamos marca em demanda.</h1>
          <p className="lead-text">
            A Benvra cria presença premium, discursos que convertem e experiências que fazem
            clientes comprarem com confiança.
          </p>
          <div className="cta-row">
            <Link className="button primary" to="/servicos">Ver serviços</Link>
            <a className="button ghost" href="#contato">Falar com a equipe</a>
          </div>
          <div className="stats-row">
            <div>
              <strong>+180%</strong>
              <span>engajamento</span>
            </div>
            <div>
              <strong>3x</strong>
              <span>mais leads</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>anos de visão</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-panel">
            <span>Fase atual</span>
            <strong>Brand growth</strong>
          </div>
          <div className="glass-box">
            <p>Posicionamento</p>
            <h3>Mais autoridade. Mais resposta. Mais vendas.</h3>
          </div>
        </div>
      </section>

      <section id="sobre" className="section split-section">
        <div className="section-tag">Sobre</div>
        <h2>Marketing que combina estratégia, estética e performance.</h2>
        <p>
          A Benvra ajuda negócios a crescerem com presença clara, materiais que geram valor e
          campanhas que falam ao cliente certo, no momento certo.
        </p>
      </section>

      <section id="servicos" className="section services-grid">
        <div className="section-head">
          <div className="section-tag">Serviços</div>
          <h2>Especialistas em posicionamento e conversão.</h2>
        </div>

        <div className="cards">
          <article className="service-card">
            <span>01</span>
            <h3>Web design</h3>
            <p>Landing pages premium que orientam o cliente até a conversão.</p>
            <Link to="/servicos/web-design">Saiba mais</Link>
          </article>
          <article className="service-card">
            <span>02</span>
            <h3>Conteúdo orgânico</h3>
            <p>Estratégia de presença, autoridade e relacionamento com o público.</p>
            <Link to="/servicos/organic-content">Saiba mais</Link>
          </article>
          <article className="service-card">
            <span>03</span>
            <h3>Paid traffic</h3>
            <p>Campanhas inteligentes com estrutura clara para escalar performance.</p>
            <Link to="/servicos/paid-traffic">Saiba mais</Link>
          </article>
          <article className="service-card">
            <span>04</span>
            <h3>Design & branding</h3>
            <p>Identidade visual com foco em percepção, memória e diferenciação.</p>
            <Link to="/servicos/design-branding">Saiba mais</Link>
          </article>
        </div>
      </section>

      <section id="contato" className="section cta-panel">
        <h2>Pronto para estruturar uma presença que converte?</h2>
        <Link className="button primary" to="/capture">Quero começar</Link>
      </section>
    </main>
  );
}

export default LandingPage;
