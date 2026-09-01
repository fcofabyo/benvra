import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const leadKey = 'benvra_lead_status';

function CapturePage() {
  const navigate = useNavigate();
  const isBrowser = typeof window !== 'undefined';
  const [form, setForm] = useState({
    name: '',
    business: '',
    service: 'toda-gestao',
  });

  const alreadyCompleted = isBrowser && localStorage.getItem(leadKey) === 'completed';

  if (alreadyCompleted) {
    return <Navigate to="/servicos" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('benvra_lead_name', form.name);
    localStorage.setItem('benvra_lead_business', form.business);
    localStorage.setItem('benvra_lead_service', form.service);
    localStorage.setItem(leadKey, 'completed');

    if (form.service === 'toda-gestao') {
      navigate('/', { replace: true });
      return;
    }

    navigate('/servicos', { replace: true });
  };

  return (
    <main className="capture-page page-shell">
      <div className="capture-panel">
        <div className="capture-copy">
          <p className="eyebrow">Benvra</p>
          <h1>Vamos criar uma presença que vende.</h1>
          <p>
            Responda rapidamente e a nossa equipe entenderá qual caminho estratégico faz mais sentido
            para o seu negócio.
          </p>
        </div>

        <form className="capture-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" required />
          </label>

          <label>
            Empresa / marca
            <input
              name="business"
              value={form.business}
              onChange={handleChange}
              placeholder="Nome da sua empresa"
              required
            />
          </label>

          <label>
            Serviço de interesse
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="toda-gestao">Toda a Gestão</option>
              <option value="web-design">Web Design</option>
              <option value="organic-content">Conteúdo Orgânico</option>
              <option value="paid-traffic">Paid Traffic</option>
              <option value="design-branding">Design & Branding</option>
            </select>
          </label>

          <button type="submit" className="button primary full">Continuar</button>
          <Link className="small-link" to="/capture" replace>Voltar ao início</Link>
        </form>
      </div>
    </main>
  );
}

export default CapturePage;
