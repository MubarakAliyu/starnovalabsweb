import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { MissionPage } from './pages/MissionPage';
import { ContactPage } from './pages/ContactPage';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <Toaster 
            position="top-right"
            theme="dark"
            toastOptions={{
              style: {
                background: 'rgba(13, 15, 20, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                backdropFilter: 'blur(10px)',
              },
            }}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}