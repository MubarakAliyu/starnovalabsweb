import { motion } from 'motion/react';
import { Heart, Users, Lightbulb, Sparkles, Target, Zap } from 'lucide-react';
import { TechDotsBackground } from '../components/TechDotsBackground';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export function AboutPage() {
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
              {lang === 'en'
                ? 'Technology, creativity, and learning working together'
                : 'Fasaha, ƙirƙira da ilimi suna aiki tare'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'StarNova Labs was founded to explore how technology, creativity, and education can solve real-world problems. We are a team of designers, developers, and educators building tools for the future.'
                : 'An kafa StarNova Labs ne don bincika yadda fasaha, ƙirƙira da ilimi za su iya magance matsalolin rayuwa. Mu ƙungiyar masu zane, masu haɓaka software da malamai ne da ke gina kayan aikin gaba.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-6">
              {lang === 'en' ? 'Who We Are' : 'Wane Ne Mu'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {lang === 'en'
                ? 'A creative technology lab delivering products, branding, and learning experiences for people, startups, schools, and enterprises.'
                : 'Dakin kirkirar fasaha ne da ke samar da kayayyakin dijital, alamomin kasuwanci da tsarin koyo ga mutane, masu farawa, makarantu da manyan kamfanoni.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              {...fadeInUp}
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

            <motion.div {...fadeInUp}>
              <h3 className="mb-6">
                {lang === 'en' ? 'Our Story' : 'Labari Namu'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {lang === 'en'
                  ? 'We started with a simple goal: build digital experiences that matter. What began in education has grown into a full-service studio delivering products, brand systems, and learning platforms.'
                  : 'Mun fara ne da buri guda: gina ƙwarewar dijital mai ma’ana. Abin da ya fara a fannin ilimi yanzu ya bunƙasa zuwa cikakken dakin aiki da ke samar da kayayyaki, alamomi da dandamalin koyo.'}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {lang === 'en'
                  ? 'Today we partner with founders, schools, and enterprises to design and develop web and mobile apps, brand identities, and education technology that is intuitive, modern, and scalable.'
                  : 'Yanzu muna aiki tare da masu fara sana’a, makarantu da manyan kamfanoni wajen zayyana da gina manhajojin yanar gizo da na waya, alamomin kasuwanci da fasahar ilimi mai sauƙin amfani kuma mai faɗaɗa aiki.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {lang === 'en'
                  ? 'Every project we take on is guided by empathy, innovation, and measurable impact.'
                  : 'Duk aikin da muke ɗauka ana jagorantar sa da tausayi, kirkira da tasirin da za a iya aunawa.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="mb-6">
                {lang === 'en' ? 'What We Build' : 'Abin da Muke Gina'}
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {lang === 'en'
                  ? 'From concept to launch, we create digital products, brands, and learning systems that empower teams and communities.'
                  : 'Daga ra’ayi zuwa ƙaddamarwa, muna gina kayayyakin dijital, alamomi da tsarin koyo da ke ƙarfafa ƙungiyoyi da al’umma.'}
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-full h-full" />,
                title: lang === 'en' ? 'Product & Platform Builds' : 'Gina Samfuri da Dandamali',
                description:
                  lang === 'en'
                    ? 'Web, mobile, and custom tools designed for launch and scale.'
                    : 'Aikace-aikacen yanar gizo, na waya da kayan aiki na musamman da aka tsara don ƙaddamarwa da girma.'
              },
              {
                icon: <Zap className="w-full h-full" />,
                title: lang === 'en' ? 'Branding & Identity' : 'Alama da Siffar Kamfani',
                description:
                  lang === 'en'
                    ? 'Logos, visual systems, and UI/UX that communicate your story.'
                    : 'Tambari, tsarin gani da UI/UX da ke bayyana labarin kasuwancinku.'
              },
              {
                icon: <Users className="w-full h-full" />,
                title: lang === 'en' ? 'Learning Experiences' : 'Ƙwarewar Koyo',
                description:
                  lang === 'en'
                    ? 'LMS, course portals, and digital classrooms built for modern learners.'
                    : 'LMS, shafukan darussa da ajujuwan dijital da aka gina domin ɗalibai na zamani.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
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

      {/* Core Values Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="mb-6">
              {lang === 'en' ? 'Our Core Values' : 'Muƙaman Gidajenmu'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {lang === 'en'
                ? 'These principles guide everything we do.'
                : 'Waɗannan ƙa’idoji ne suke jagorantar duk abin da muke yi.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-full h-full" />,
                title: lang === 'en' ? 'Human-Centered Design' : 'Zane Mai Mayar da Hankali kan Mutane',
                description:
                  lang === 'en'
                    ? 'Every product is built with empathy and deep respect for the people who use it.'
                    : 'Duk samfurinmu ana gina shi ne da tausayi da girmama masu amfani da shi.'
              },
              {
                icon: <Lightbulb className="w-full h-full" />,
                title: lang === 'en' ? 'Purpose-Driven Innovation' : 'Kirkira Mai Manufa',
                description:
                  lang === 'en'
                    ? 'We create tools that solve real problems and make meaningful impacts.'
                    : 'Muna ƙirƙirar kayan aiki da ke magance matsaloli na gaske kuma su bar tasiri mai kyau.'
              },
              {
                icon: <Users className="w-full h-full" />,
                title: lang === 'en' ? 'Community First' : 'Al’umma a Farko',
                description:
                  lang === 'en'
                    ? 'Building solutions that reflect our values and empower communities globally.'
                    : 'Muna gina mafita da ke nuna ƙimominmu tare da ƙarfafa al’ummomi a faɗin duniya.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass-card p-8 md:p-10 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="relative bg-gradient-to-br from-primary/10 to-primary/5 border border-white/10 rounded-2xl p-12 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="mb-4">
                {lang === 'en' ? "Let's work together" : 'Mu Yi Aiki Tare'}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {lang === 'en'
                  ? "Ready to bring your vision to life? We'd love to hear about your project and explore how we can help make it remarkable."
                  : 'Kana shirye ka kawo ra’ayinka fili? Muna son jin labarin aikin ka kuma mu gano yadda za mu taimaka masa ya zama abin koyi.'}
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang === 'en' ? 'Get in Touch' : 'Tuntuɓe Mu'}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
