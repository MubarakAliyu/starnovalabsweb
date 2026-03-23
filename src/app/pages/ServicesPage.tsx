import { motion } from 'motion/react';
import { Rocket, Palette, Laptop, GraduationCap, Lightbulb } from 'lucide-react';
import { TechDotsBackground } from '../components/TechDotsBackground';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function ServicesPage() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

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
              {lang === 'en' ? 'Our Services' : 'Ayyukanmu'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'StarNova Labs offers a wide range of digital services tailored for startups, businesses, schools, and creators. We blend strategy, design, and engineering to build products and experiences that move ideas forward.'
                : 'StarNova Labs na ba da nau’ikan ayyukan dijital da aka tsara don masu farawa, kasuwanci, makarantu da masu ƙirƙira. Muna haɗa dabaru, zane da injiniya don gina kayayyakin da ke motsa ra’ayi zuwa aiki.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          {[
            {
              title: lang === 'en' ? 'Product & Software Development' : 'Haɓaka Samfur da Software',
              icon: <Rocket className="w-full h-full" />,
              description:
                lang === 'en'
                  ? 'End-to-end build support for web, mobile, and custom platforms.'
                  : 'Tallafi daga farko zuwa ƙarshe wajen gina manhajojin yanar gizo, na waya da dandamali na musamman.',
              items: lang === 'en'
                ? ['Web apps', 'Mobile apps', 'SaaS platforms', 'MVP development', 'Custom tools']
                : ['Manhajojin yanar gizo', 'Manhajojin waya', 'Dandamalin SaaS', 'Haɓaka MVP', 'Kayan aiki na musamman']
            },
            {
              title: lang === 'en' ? 'Design & Branding' : 'Zane da Alamar Kasuwanci',
              icon: <Palette className="w-full h-full" />,
              description:
                lang === 'en'
                  ? 'Visual systems that express your brand and delight users.'
                  : 'Tsarin gani da ke bayyana alamar ku tare da faranta ran masu amfani.',
              items: lang === 'en'
                ? ['Logo design', 'Visual identity', 'Brand systems', 'UI/UX', 'Social media design', 'Flyers, business cards, stationery']
                : ['Zanen tambari', 'Siffar gani ta alama', 'Tsarin alama', 'UI/UX', 'Zanen kafofin sada zumunta', 'Fayil, kati da kayan rubutu']
            },
            {
              title: lang === 'en' ? 'Web Solutions' : 'Mafitocin Yanar Gizo',
              icon: <Laptop className="w-full h-full" />,
              description:
                lang === 'en'
                  ? 'Sites and experiences that convert, inform, and inspire.'
                  : 'Shafukan yanar gizo da ke jan hankali, bayar da bayani da motsa masu amfani.',
              items: lang === 'en'
                ? ['Business websites', 'Portfolio websites', 'Landing pages', 'CMS solutions']
                : ['Shafukan kasuwanci', 'Shafukan ayyuka (portfolio)', 'Landing pages', 'Mafitocin CMS']
            },
            {
              title: lang === 'en' ? 'Educational Technology' : 'Fasahar Ilimi',
              icon: <GraduationCap className="w-full h-full" />,
              description:
                lang === 'en'
                  ? 'Learning experiences built for schools, teams, and communities.'
                  : 'Ƙwarewar koyo da aka gina don makarantu, ƙungiyoyi da al’umma.',
              items: lang === 'en'
                ? ['Learning platforms', 'LMS systems', 'Course portals', 'Student dashboards', 'Teacher dashboards']
                : ['Dandamalin koyo', 'Tsarin LMS', 'Shafukan darussa', 'Dashboard ɗin ɗalibai', 'Dashboard ɗin malamai']
            },
            {
              title: lang === 'en' ? 'Strategy & Consultation' : 'Dabara da Shawara',
              icon: <Lightbulb className="w-full h-full" />,
              description:
                lang === 'en'
                  ? 'Guidance to validate, launch, and scale digital products.'
                  : 'Shawara wajen gwadawa, ƙaddamarwa da haɓaka kayayyakin dijital.',
              items: lang === 'en'
                ? ['Product ideation', 'MVP validation', 'UX audits', 'Digital transformation']
                : ['Ra’ayin samfur', 'Gwajin MVP', 'Binciken UX', 'Sauya aiki zuwa dijital']
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start glass-card p-10"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 text-primary">{service.icon}</div>
                <div>
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground/70">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="relative bg-gradient-to-br from-primary/10 to-primary/5 border border-white/10 rounded-2xl p-12 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="mb-4">
                {lang === 'en' ? 'Ready to build?' : 'Kana Shirye Mu Gina Maka?'}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {lang === 'en'
                  ? 'Whether you need a product team, a brand refresh, or a strategy sprint, we’re here to help you move from idea to impact.'
                  : 'Ko kana buƙatar ƙungiyar haɓaka samfur, sabunta alama ko zaman tsara dabara, muna nan don mu taimaka maka daga ra’ayi zuwa tasiri.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang === 'en' ? 'Start a Project' : 'Fara Aiki da Mu'}
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => navigate('/products')}
                  className="px-8 py-4 bg-white/5 text-foreground border border-white/20 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang === 'en' ? 'View Our Products' : 'Duba Kayayyakinmu'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


