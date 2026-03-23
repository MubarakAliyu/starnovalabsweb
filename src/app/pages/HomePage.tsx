import { motion } from 'motion/react';
import { ArrowRight, Heart, Users, Lightbulb, Code, BookOpen, Sparkles, Mail, Send } from 'lucide-react';
import { ParticleField } from '../components/ParticleField';
import { ProductCarousel } from '../components/ProductCarousel';
import { CompaniesSection } from '../components/CompaniesSection';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { TechDotsBackground } from '../components/TechDotsBackground';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [typedTitle, setTypedTitle] = useState('');
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const fullTitle = lang === 'en'
    ? 'Building Digital Products, Brands & Learning Platforms for the Future'
    : 'Gina Kayayyakin Dijital, Alamomi da Dandamalin Koyo na Gobe';

  useEffect(() => {
    setTypedTitle('');
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedTitle(fullTitle.slice(0, index));
      if (index >= fullTitle.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [fullTitle]);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // validation
  if (!formData.name || !formData.email || !formData.message) {
    toast.error("Please fill all fields");
    return;
  }

  const subject = encodeURIComponent(`New message from ${formData.name}`);

  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n\n` +
    `Message:\n${formData.message}`
  );

  const mailtoLink = `mailto:starnovalabs@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  toast.success("Opening your email app ✉️");

  setFormData({ name: '', email: '', message: '' });
};

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-32 overflow-hidden">
        <ParticleField />
        <TechDotsBackground />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="whitespace-pre-wrap"
          >
            {typedTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            {lang === 'en'
              ? 'StarNova Labs is a creative technology studio focused on building innovative digital products, educational platforms, and business solutions that empower people, startups, and institutions.'
              : 'StarNova Labs ɗakin binciken fasaha ne da ke ƙirƙirar kayayyakin dijital, dandamalin koyo da mafita ga kasuwanci domin taimaka wa mutane, matasa masu fara sana’a da kungiyoyi.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              type="button"
              onClick={() => navigate('/products')}
              className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {lang === 'en' ? 'View Our Products' : 'Duba Kayayyakinmu'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-white/5 dark:bg-white/5 text-foreground border border-white/20 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === 'en' ? 'Explore Our Services' : 'Binciki Ayyukanmu'}
            </motion.button>
          </motion.div>

          <ProductCarousel />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-6 lg:px-8 relative border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="mb-6">
              {lang === 'en' ? 'Why StarNova Labs Exists' : 'Dalilin Da Ya Sa StarNova Labs Take Aiki'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {lang === 'en'
                ? 'We believe technology should empower people, scale ideas, and make learning and business tools accessible.'
                : 'Muna ganin fasaha ya kamata ta ƙarfafa mutane, ta faɗaɗa ra’ayoyi, ta kuma sauƙaƙa samun kayan koyo da kayan aikin kasuwanci.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-full h-full" />,
                title: lang === 'en' ? 'Human-Centered Design' : 'Zane Mai Mayar da Hankali kan Mutane',
                description:
                  lang === 'en'
                    ? 'Every solution is built with empathy and respect for the people who use it.'
                    : 'Duk mafita da muke ginawa muna gina ta ne da tausayi da girmama masu amfani da ita.'
              },
              {
                icon: <Lightbulb className="w-full h-full" />,
                title: lang === 'en' ? 'Purpose-Driven Innovation' : 'Kirkira Mai Manufa',
                description:
                  lang === 'en'
                    ? 'We create tools that solve real problems for learners, founders, and teams.'
                    : 'Muna ƙirƙirar kayan aiki da ke magance matsaloli na gaskiya ga masu koyo, masu fara sana’a da ƙungiyoyi.'
              },
              {
                icon: <Users className="w-full h-full" />,
                title: lang === 'en' ? 'Community First' : 'Al’umma a Farko',
                description:
                  lang === 'en'
                    ? 'Building solutions that empower communities, schools, and businesses globally.'
                    : 'Muna gina mafita da ke ƙarfafa al’umma, makarantun da kasuwanci a ko’ina cikin duniya.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass-card p-8 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="mb-6">
              {lang === 'en' ? 'Our Products (MVPs)' : 'Kayayyakinmu (MVPs)'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {lang === 'en'
                ? 'Products built to solve real-world problems across education, skills, and digital learning.'
                : 'Kayayyakin da aka gina don warware matsalolin rayuwa ta fuskar ilimi, ƙwarewa da koyo ta yanar gizo.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Kids In Tech',
                description:
                  lang === 'en'
                    ? 'Teaching kids coding, digital creativity, and tech skills.'
                    : 'Shirin koyar da yara lambar kwamfuta, ƙirƙira ta dijital da ƙwarewar fasaha.',
                status: 'Live',
                gradient: 'from-purple-600 to-purple-400'
              },
              {
                title: 'NurAla Learning',
                description:
                  lang === 'en'
                    ? 'Quranic Arabic & Islamic learning platform.'
                    : 'Dandamali na koyo harshen Larabci na Alƙur’ani da ilimin Addinin Musulunci.',
                status: 'Live',
                gradient: 'from-blue-600 to-blue-400'
              },
              {
                title: 'SkillStack',
                description:
                  lang === 'en'
                    ? 'Skills-based learning & career-building platform.'
                    : 'Dandamali na koyo da gina sana’a ta hanyar ayyuka da gina ƙwarewa.',
                status: 'In Development',
                gradient: 'from-teal-600 to-teal-400'
              },
              {
                title: 'EduStack',
                description:
                  lang === 'en'
                    ? 'School-focused LMS and academic tools.'
                    : 'Dandamalin makarantu don gudanar da darussa, ɗalibai da kayan aikin karatu.',
                status: 'In Development',
                gradient: 'from-amber-600 to-amber-400'
              }
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative glass-card p-8 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/15 text-primary rounded-full border border-primary/30">
                      {product.status}
                    </span>
                  </div>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <motion.button
                    type="button"
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    {lang === 'en' ? 'View Product' : 'Duba Samfur'}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="mb-6">
              {lang === 'en' ? 'What We Do' : 'Abin da Muke Yi'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {lang === 'en'
                ? 'Full-stack capabilities to bring your vision to life.'
                : 'Dukkan matakan aiki daga ra’ayi zuwa gina cikakken samfurin dijital.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: lang === 'en' ? 'Product Design & Development' : 'Zane da Gina Samfurin Dijital',
                desc:
                  lang === 'en'
                    ? 'We design and build scalable web and mobile products.'
                    : 'Muna zayyana sannan mu gina aikace-aikacen yanar gizo da na waya masu iya fadada aiki.'
              },
              {
                title: lang === 'en' ? 'Branding & Identity Design' : 'Zanen Alama da Ginin Siffar Kamfani',
                desc:
                  lang === 'en'
                    ? 'Logos, visual systems, and brand assets.'
                    : 'Tambari, tsarin gani da dukkan kayan alamar kasuwanci.'
              },
              {
                title: lang === 'en' ? 'Web Design & Development' : 'Zane da Gina Shafukan Yanar Gizo',
                desc:
                  lang === 'en'
                    ? 'Business websites, landing pages, and custom platforms.'
                    : 'Shafukan kasuwanci, shafukan sauka da kuma dandamali na musamman.'
              },
              {
                title: lang === 'en' ? 'Educational Platforms' : 'Dandamalin Ilimi',
                desc:
                  lang === 'en'
                    ? 'LMS, learning apps, and digital classrooms.'
                    : 'LMS, manhajojin koyo da ajujuwan dijital ga malamai da ɗalibai.'
              },
              {
                title: lang === 'en' ? 'Consultation & Strategy' : 'Shawara da Tsarin Samfuri',
                desc:
                  lang === 'en'
                    ? 'Product planning, MVP validation, and digital growth.'
                    : 'Tsara samfur, gwajin MVP da dabarun haɓaka dijital.'
              },
              {
                title: lang === 'en' ? 'Custom Software Solutions' : 'Mafitocin Software na Musamman',
                desc:
                  lang === 'en'
                    ? 'Tailored tools and integrations for unique needs.'
                    : 'Kayan aiki da haɗa-haddar software bisa ga bukatar kasuwancinku.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/60"
              >
                <h3 className="text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-16">
            <motion.a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === 'en' ? 'View All Services' : 'Duba Dukkan Ayyukanmu'}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-foreground/60 text-lg px-8">
                    Innovation meets purpose
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">
                {lang === 'en'
                  ? 'A creative technology lab for products, brands, and learning'
                  : 'Dakin kirkirar fasaha don samfurori, alamomi da dandamalin koyo'}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {lang === 'en'
                  ? 'StarNova Labs is a multi-disciplinary tech company creating scalable digital products, learning platforms, and business solutions.'
                  : 'StarNova Labs kamfani ne na fasaha mai fannonin aiki da dama da ke gina kayayyakin dijital, dandamalin koyo da mafita ga kasuwanci masu iya faɗaɗa aiki.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {lang === 'en'
                  ? 'We combine design, engineering, and strategy to help ideas grow into impactful digital experiences for individuals, startups, schools, and enterprises.'
                  : 'Muna haɗa zane, injiniya da dabaru don mayar da ra’ayoyi zuwa ƙwarewar dijital mai tasiri ga mutane, masu farawa, makarantun da manyan kamfanoni.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies/Brands Section */}
      <CompaniesSection />

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4">
              {lang === 'en'
                ? "Let's build something remarkable together"
                : 'Mu gina abin koyi tare'}
            </h2>
            <p className="text-muted-foreground">
              {lang === 'en'
                ? "Ready to transform your vision into reality? Tell us about your product, brand, or learning idea and we’ll help you shape the next steps."
                : 'Shirye kake ka juya ra’ayin ka zuwa aiki? Ka gaya mana game da samfurin ka, alamar ka ko ra’ayin dandamalin koyo, mu taimaka maka tsara mataki na gaba.'}
            </p>
          </motion.div>

          <motion.form
            {...fadeInUp}
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto glass-card p-8 md:p-10 space-y-6 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={lang === 'en' ? 'Your Name' : 'Sunan ka'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="glass-input px-6 py-4 text-foreground placeholder:text-foreground/40"
              />
              <input
                type="email"
                placeholder={lang === 'en' ? 'Your Email' : 'Imel ɗinka'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="glass-input px-6 py-4 text-foreground placeholder:text-foreground/40"
              />
            </div>
            <textarea
              placeholder={lang === 'en' ? 'Your Message' : 'Saƙonka'}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full glass-input px-6 py-4 text-foreground placeholder:text-foreground/40 resize-none"
            />
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              {lang === 'en' ? 'Send Message' : 'Aika Saƙo'}
            </motion.button>
          </motion.form>

          <motion.div
            {...fadeInUp}
            className="mt-12 flex items-center justify-center gap-8"
          >
            <a href="mailto:starnovalabs@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}