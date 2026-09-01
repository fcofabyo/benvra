import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CapturePage from './pages/CapturePage';
import ServicesPage from './pages/ServicesPage';
import WebDesignPage from './pages/services/WebDesignPage';
import OrganicContentPage from './pages/services/OrganicContentPage';
import PaidTrafficPage from './pages/services/PaidTrafficPage';
import DesignBrandingPage from './pages/services/DesignBrandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/capture" element={<CapturePage />} />
      <Route path="/servicos" element={<ServicesPage />} />
      <Route path="/servicos/web-design" element={<WebDesignPage />} />
      <Route path="/servicos/organic-content" element={<OrganicContentPage />} />
      <Route path="/servicos/paid-traffic" element={<PaidTrafficPage />} />
      <Route path="/servicos/design-branding" element={<DesignBrandingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
