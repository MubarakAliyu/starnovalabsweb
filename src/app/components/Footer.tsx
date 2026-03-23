import { Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../../assets/logo-dark.png';
import logoDark from '../../assets/logo-light.png';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const [isDark, setIsDark] = useState(true);
  const { lang } = useLanguage();

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

  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'products', href: '/products' },
    { key: 'services', href: '/services' },
    { key: 'contact', href: '/contact' }
  ];

  return (
    <footer className="bg-background border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src={isDark ? logoDark : logoLight} alt="StarNova Labs" className="h-7 w-auto" />
            </div>
            <p className="text-foreground/60 mb-6 max-w-sm leading-relaxed">
              {lang === 'en'
                ? 'A creative technology lab building digital products, brands, learning platforms, and business solutions.'
                : 'Dakin kirkirar fasaha ne da ke gina kayayyakin dijital, alamomin kasuwanci, dandamalin koyo da mafita ga kasuwanci.'}
            </p>
            <p className="text-sm text-foreground/40">
              {lang === 'en' ? 'Built with ❤️ inside StarNova Labs' : 'An gina shi da ƙauna a StarNova Labs'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              {lang === 'en' ? 'Navigation' : 'Shafuka'}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => {
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
                  <li key={link.key}>
                    <Link
                      to={link.href}
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              {lang === 'en' ? 'Connect' : 'Tuntuɓa'}
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="mailto:hello@starnovalabs.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-primary transition-all"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <a
              href="mailto:hello@starnovalabs.com"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              hello@starnovalabs.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} StarNova Labs. {lang === 'en' ? 'All rights reserved.' : 'Dukkan haƙƙoƙi a tanƙwafe suke.'}
          </p>
          <div className="flex gap-6 text-sm text-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">
              {lang === 'en' ? 'Privacy Policy' : 'Manufar Sirri'}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {lang === 'en' ? 'Terms of Service' : 'Sharuddan Amfani'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}