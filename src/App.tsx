import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Edgeline from './pages/Edgeline';
import Equipa from './pages/Equipa';
import Projectos from './pages/Projectos';
import ProjectDetail from './pages/ProjectDetail';
import Contactos from './pages/Contactos';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edgeline" element={<Edgeline />} />
          <Route path="/equipa" element={<Equipa />} />
          <Route path="/projectos" element={<Projectos />} />
          <Route path="/projectos/:id" element={<ProjectDetail />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </Layout>
    </Router>
  );
}
