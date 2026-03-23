import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../../assets/logo-dark.png';
import logoDark from '../../assets/logo-light.png';
import { useLanguage } from '../context/LanguageContext';

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'products', href: '/products' },
  { key: 'services', href: '/services' },
  { key: 'contact', href: '/contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check theme on mount and listen for changes
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Create observer for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src={isDark ? logoDark : logoLight}
              alt="StarNova Labs"
              className="h-7 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const label =
                link.key === 'home'
                  ? lang === 'en' ? 'Home' : 'Gida'
                  : link.key === 'about'
                    ? lang === 'en' ? 'About' : 'Game da Mu'
                    : link.key === 'products'
                      ? lang === 'en' ? 'Products' : 'Kayayyakinmu'
                      : link.key === 'services'
                        ? lang === 'en' ? 'Services' : 'Ayyuka'
                        : lang === 'en' ? 'Contact' : 'Tuntuɓe Mu';
              return (
                <Link
                  key={link.key}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors group ${
                    isActive ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center rounded-full border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-sm px-1 py-0.5 text-xs font-semibold shadow-sm">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  lang === 'en'
                    ? 'bg-primary text-white'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('ha')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  lang === 'ha'
                    ? 'bg-primary text-white'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                HA
              </button>
            </div>

            <ThemeToggle />
            
            <Link
              to="/contact"
              className="hidden md:block px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              {lang === 'en' ? 'Work With Us' : 'Mu Yi Aiki Tare'}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10 bg-background/95 dark:bg-background/95 backdrop-blur-xl shadow-xl"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const label =
                link.key === 'home'
                  ? lang === 'en' ? 'Home' : 'Gida'
                  : link.key === 'about'
                    ? lang === 'en' ? 'About' : 'Game da Mu'
                    : link.key === 'products'
                      ? lang === 'en' ? 'Products' : 'Kayayyakinmu'
                      : link.key === 'services'
                        ? lang === 'en' ? 'Services' : 'Ayyuka'
                        : lang === 'en' ? 'Contact' : 'Tuntuɓe Mu';
              return (
                <Link
                  key={link.key}
                  to={link.href}
                  className={`block py-3 transition-colors ${
                    isActive ? 'text-foreground font-semibold' : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="block mt-4 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold text-center"
            >
              {lang === 'en' ? 'Work With Us' : 'Mu Yi Aiki Tare'}
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}