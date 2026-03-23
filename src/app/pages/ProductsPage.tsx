import { motion } from 'motion/react';
import { BookOpen, Code, Sparkles, ArrowRight, ExternalLink, Rocket, Palette } from 'lucide-react';
import { TechDotsBackground } from '../components/TechDotsBackground';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const products = [
  {
    icon: <Code className="w-full h-full" />,
    title: 'Kids In Tech',
    category: 'Learning Platform',
    description: 'Teaching kids coding, digital creativity, and tech skills through interactive projects and community-led sessions.',
    features: ['Coding tracks', 'Project-based learning', 'Mentor support', 'Community events'],
    status: 'Live',
    gradient: 'from-purple-600 to-purple-400',
    link: 'https://www.kidsintech.school'
  },
  {
    icon: <BookOpen className="w-full h-full" />,
    title: 'NurAla Learning',
    category: 'EdTech Platform',
    description: 'Quranic Arabic & Islamic learning platform with guided lessons, assessments, and progress tracking.',
    features: ['Guided lessons', 'Assessments', 'Mobile-first design', 'Progress insights'],
    status: 'Live',
    gradient: 'from-blue-600 to-blue-400',
    link: '#'
  },
  {
    icon: <Rocket className="w-full h-full" />,
    title: 'SkillStack',
    category: 'Career & Skills',
    description: 'Skills-based learning and career-building platform focused on projects, portfolios, and mentorship.',
    features: ['Skill pathways', 'Portfolio builder', 'Mentorship', 'Career resources'],
    status: 'In Development',
    gradient: 'from-teal-600 to-teal-400',
    link: '#'
  },
  {
    icon: <Palette className="w-full h-full" />,
    title: 'EduStack',
    category: 'School LMS',
    description: 'School-focused LMS with course portals, student dashboards, and academic tools for teachers and admins.',
    features: ['Course portals', 'Student dashboards', 'Teacher tools', 'Analytics'],
    status: 'In Development',
    gradient: 'from-amber-600 to-amber-400',
    link: '#'
  }
];

export function ProductsPage() {
  const { lang } = useLanguage();

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
              {lang === 'en' ? 'Our Products' : 'Kayayyakinmu'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'Our products are built to solve real-world problems across education, skills development, and digital learning.'
                : 'Kayayyakinmu sun mayar da hankali kan warware matsaloli a fannin ilimi, gina ƙwarewa da koyo ta yanar gizo.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass-card p-8 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30">
                      {product.status}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {lang === 'en'
                      ? product.description
                      : product.title === 'Kids In Tech'
                        ? 'Shirin koyo ne da ke koya wa yara lambar kwamfuta, kirkirar dijital da ƙwarewar fasaha ta hanyar ayyuka da al’umma.'
                        : product.title === 'NurAla Learning'
                          ? 'Dandamali ne na koyo Alƙur’ani da harshen Larabci tare da darussa, gwaje-gwaje da bin cigaban ɗalibi.'
                          : product.title === 'SkillStack'
                            ? 'Dandamali ne na gina ƙwarewa da sana’a ta hanyar ayyuka, jakar ayyuka da jagoranci.'
                            : 'Dandamalin makarantu ne da ke haɗa darussa, ɗalibai da kayan aikin malamai cikin wuri guda.'}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground/80 mb-3">Key Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-foreground/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      if (product.status === 'Live' && product.link) {
                        window.open(product.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    {product.status === 'Live'
                      ? lang === 'en' ? 'Visit Website' : 'Ziyarci Yanar Gizo'
                      : lang === 'en' ? 'View Product' : 'Duba Samfur'}
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
        </div>
      </section>

      {/* Custom Solutions CTA */}
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
                {lang === 'en' ? 'Need something custom?' : 'Kana Bukatar Abu na Musamman?'}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {lang === 'en'
                  ? 'We create bespoke digital products tailored to your unique needs. Let\'s collaborate on building something extraordinary together.'
                  : 'Muna ƙirƙirar kayayyakin dijital na musamman da suka dace da bukatunku. Mu yi aiki tare mu gina wani abu na musamman.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang === 'en' ? 'Start a Project' : 'Fara Aiki da Mu'}
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/about"
                  className="px-8 py-4 bg-white/5 text-foreground border border-white/20 rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang === 'en' ? 'Learn More About Us' : 'Kara Koyo Game da Mu'}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
