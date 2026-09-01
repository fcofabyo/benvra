import { Link, Navigate } from 'react-router-dom';

const leadKey = 'benvra_lead_status';

function LandingPage() {
  const isBrowser = typeof window !== 'undefined';
  const hasLead = isBrowser && localStorage.getItem(leadKey) === 'completed';
  const selectedService = isBrowser ? localStorage.getItem('benvra_lead_service') : null;

  if (!hasLead || selectedService !== 'toda-gestao') {
    return <Navigate to="/capture" replace />;
  }

  return (
    <main className="page-shell management-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">B</div>
          <span>Benvra</span>
        </div>
        <nav className="nav">
          <a href="#solucao">Solução</a>
          <a href="#processo">Processo</a>
          <a href="#entregaveis">Entregáveis</a>
          <a href="#contato">Contato</a>
        </nav>
        <Link className="button primary" to="/capture" replace>Solicitar proposta</Link>
      </header>

      <section className="hero management-hero">
        <div className="hero-copy">
          <p className="eyebrow">Toda a gestão</p>
          <h1>Seu marketing estratégico, visual e comercial funcionando em sincronia.</h1>
          <p className="lead-text">
            A Benvra assume a gestão completa da sua presença digital para você atrair atenção,
            fortalecer marca e transformar interesse em clientes reais.
          </p>
          <div className="cta-row">
            <Link className="button primary" to="/capture" replace>Quero essa estrutura</Link>
            <a className="button ghost" href="#solucao">Ver como funciona</a>
          </div>
          <div className="stats-row">
            <div>
              <strong>4 pilares</strong>
              <span>de crescimento</span>
            </div>
            <div>
              <strong>+200%</strong>
              <span>em clareza</span>
            </div>
            <div>
              <strong>360°</strong>
              <span>visibilidade</span>
            </div>
          </div>
        </div>

        <div className="hero-card management-card">
          <div className="mini-panel">
            <span>Modelo</span>
            <strong>Gestão completa</strong>
          </div>
          <div className="glass-box">
            <p>Resultado</p>
            <h3>Marca forte, presença consistente e conversão inteligente.</h3>
          </div>
        </div>
      </section>

      <section id="solucao" className="section split-section management-overview">
        <div>
          <div className="section-tag">Solução</div>
          <h2>Uma operação completa para sua marca crescer sem improviso.</h2>
        </div>
        <p>
          Em vez de peças isoladas, você recebe um sistema integrado de estratégico, presença visual,
          conteúdo, tráfego e posicionamento. Tudo pensado para deixar sua empresa mais clara,
          mais confiável e mais competitiva.
        </p>
      </section>

      <section id="entregaveis" className="section management-grid">
        <div className="section-head">
          <div className="section-tag">Entregáveis</div>
          <h2>O que entra na gestão completa.</h2>
        </div>

        <div className="cards management-cards">
          <article className="service-card">
            <span>01</span>
            <h3>Estratégia</h3>
            <p>Direção clara de posicionamento, oferta, público e objetivos de crescimento.</p>
          </article>
          <article className="service-card">
            <span>02</span>
            <h3>Branding</h3>
            <p>Identidade visual, mensagens e percepção que elevam a marca no mercado.</p>
          </article>
          <article className="service-card">
            <span>03</span>
            <h3>Conteúdo</h3>
            <p>Estrutura editorial, autoridade, relacionamento e presença consistente.</p>
          </article>
          <article className="service-card">
            <span>04</span>
            <h3>Performance</h3>
            <p>Campanhas e tráfego com otimização contínua para gerar aquisição real.</p>
          </article>
        </div>
      </section>

      <section id="processo" className="section">
        <div className="section-head">
          <div className="section-tag">Processo</div>
          <h2>Como funciona a gestão Benvra.</h2>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>1</span>
            <h3>Diagnóstico</h3>
            <p>Entendemos sua marca, seu mercado e os principais pontos de atrito.</p>
          </div>
          <div className="process-item">
            <span>2</span>
            <h3>Estrutura</h3>
            <p>Definimos posicionamento, comunicação e a jornada que leva ao cliente.</p>
          </div>
          <div className="process-item">
            <span>3</span>
            <h3>Execução</h3>
            <p>Atuamos em branding, tráfego, conteúdo e experiência digital em conjunto.</p>
          </div>
          <div className="process-item">
            <span>4</span>
            <h3>Otimização</h3>
            <p>Monitoramos dados, refinamos a estratégia e aceleramos o que realmente vende.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="section cta-panel management-cta">
        <h2>Quer que sua marca pare de parecer genérica e passe a vender com clareza?</h2>
        <Link className="button primary" to="/capture" replace>Falar com a Benvra</Link>
      </section>
    </main>
  );
}

export default LandingPage;
