import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { TechDotsBackground } from '../components/TechDotsBackground';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <TechDotsBackground />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="mb-6">
              {lang === 'en' ? "Let's build something remarkable together" : 'Mu Gina Abu Mai Ban Mamaki Tare'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {lang === 'en'
                ? "Ready to transform your vision into reality? We'd love to hear about your project, answer your questions, or simply connect and explore possibilities."
                : 'Kana shirye ka sauya ra’ayinka zuwa aiki? Muna son jin labarin aikin ka, amsa tambayoyin ka ko mu haɗa kai don gano abubuwa masu yiwuwa.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <h3 className="mb-6">
                {lang === 'en' ? 'Send us a message' : 'Aika Mana Saƙo'}
              </h3>
              <p className="text-muted-foreground mb-8">
                {lang === 'en'
                  ? "Fill out the form below and we'll get back to you within 24 hours."
                  : 'Cika wannan fom, za mu ba ka amsa cikin awa 24 in shaa Allah.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 md:p-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {lang === 'en' ? 'Your Name *' : 'Sunan ka *'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full glass-input px-6 py-4 text-foreground placeholder:text-foreground/40"
                    placeholder={lang === 'en' ? 'John Doe' : 'Aliyu Musa'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {lang === 'en' ? 'Your Email *' : 'Imel ɗinka *'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full glass-input px-6 py-4 text-foreground placeholder:text-foreground/40"
                    placeholder={lang === 'en' ? 'john@example.com' : 'suna@misali.com'}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    {lang === 'en' ? 'Company / Organization' : 'Kamfani / Ƙungiya'}
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full glass-input px-6 py-4 text-foreground placeholder:text-foreground/40"
                    placeholder={lang === 'en' ? 'Your Company' : 'Sunan Kamfaninka'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {lang === 'en' ? 'Your Message *' : 'Saƙonka *'}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full glass-input px-6 py-4 text-foreground placeholder:text-foreground/40 resize-none"
                    placeholder={lang === 'en' ? 'Tell us about your project...' : 'Ka gaya mana game da aikin ka...'}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting
                    ? lang === 'en' ? 'Sending...' : 'Ana Aikawa...'
                    : lang === 'en' ? 'Send Message' : 'Aika Saƙo'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
              <h3 className="mb-6">
                {lang === 'en' ? 'Get in touch' : 'Tuntuɓe Mu Kai Tsaye'}
              </h3>
              <p className="text-muted-foreground mb-8">
                {lang === 'en'
                  ? "Prefer to reach out directly? Here's how you can contact us."
                  : 'Kana son tuntuɓar mu kai tsaye? Ga hanyoyin da za ka bi.'}
              </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:starnovalabs@gmail.com"
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-6 glass-card rounded-xl hover:border-primary/60 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">
                      {lang === 'en' ? 'Email Us' : 'Aika Mana Imel'}
                    </h4>
                    <p className="text-sm text-muted-foreground">starnovalabs@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-6 glass-card rounded-xl hover:border-primary/60 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">
                      {lang === 'en' ? 'Call Us' : 'Kira Mu'}
                    </h4>
                    <p className="text-sm text-muted-foreground">+234 706 783 4186</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-6 glass-card rounded-xl hover:border-primary/60 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">
                      {lang === 'en' ? 'Location' : 'Wuri'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {lang === 'en' ? 'Remote & Global' : 'Ana Aiki Daga Nesa, A Duniya Baki Ɗaya'}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-foreground font-semibold mb-4">
                  {lang === 'en' ? 'Connect with us' : 'Haɗu da Mu a Intanet'}
                </h4>
                <div className="flex items-center gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all"
                  >
                    <Twitter className="w-5 h-5 text-foreground" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                  </motion.a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl">
                <h4 className="text-foreground font-semibold mb-2">
                  {lang === 'en' ? 'Office Hours' : 'Lokutan Aiki'}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {lang === 'en'
                    ? 'Monday - Friday: 9:00 AM - 6:00 PM EST'
                    : 'Litinin - Juma’a: 9:00 AM - 6:00 PM EST'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {lang === 'en'
                    ? 'We typically respond within 24 hours'
                    : 'Yawanci muna ba da amsa cikin awa 24'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="mb-6">
              {lang === 'en' ? 'Have a question?' : 'Kana da Tambaya?'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {lang === 'en'
                ? "Whether you're interested in our products, looking to collaborate, or just want to say hello, we're here and happy to connect."
                : 'Ko kana sha’awar kayayyakinmu, kana son yin haɗin gwiwa ko kuma kawai ka gaishe mu, muna nan a shirye mu haɗu da kai.'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
