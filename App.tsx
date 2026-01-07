
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Instagram, MessageCircle, X, CheckCircle, MapPin, Globe, Users, Trophy } from 'lucide-react';
import { LINKS, FEATURES, STEPS, SectionElements } from './constants';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const GridLayer = () => (
    <div className="grid-fixed-container">
      <div className="grid-3d-pattern"></div>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white relative">
      <GridLayer />
      
      {/* Header / Logo - Absolute at the top of the page (scrolls away) */}
      <header className="absolute top-0 left-0 w-full z-[100] flex justify-center py-4">
        <motion.img 
          src={LINKS.LOGO} 
          alt="Silvio Falck Logo" 
          className="h-28 md:h-44 object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </header>

      <main className="pt-28 md:pt-40 relative z-10">
        {/* HERO SECTION */}
        <section className="relative px-6 pt-8 pb-32 overflow-hidden">
          <SectionElements intensity={3} />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Expert Images - More compact to bring headline up */}
            <motion.div 
              className="grid grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col gap-3">
                <img src={LINKS.EXPERT_2} className="rounded-[2rem] w-full h-40 md:h-56 object-cover border border-white/10 shadow-2xl" alt="Silvio Treinando" />
                <img src={LINKS.EXPERT_3} className="rounded-[2rem] w-full h-40 md:h-56 object-cover border border-white/10 shadow-2xl" alt="Silvio Treinando" />
              </div>
              <div className="h-full">
                <img src={LINKS.EXPERT_1} className="rounded-[2rem] w-full h-full object-cover border-2 border-blue-600/50 shadow-2xl" alt="Silvio Falck" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-4 px-5 py-2.5 bg-blue-600/15 rounded-full border border-blue-500/30 mb-6 text-blue-400 text-xs font-black uppercase tracking-[0.2em]"
            >
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5"/> PRESENCIAL</span>
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5"/> ONLINE</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Eu sou Silvio Falck, seu <span className="text-gradient">Personal Trainer</span> em Dourados.
            </motion.h1>

            <motion.p 
              className="text-lg md:text-2xl text-gray-300 mb-10 md:mb-14 max-w-2xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Consultoria de alto nível para resultados reais. Atendimento presencial em Dourados ou consultoria 100% online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-5"
            >
              <a 
                href={LINKS.WHATSAPP}
                className="btn-gradient w-full md:w-auto px-12 py-6 rounded-full font-black text-xl md:text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(0,102,255,0.4)] active:scale-95"
              >
                QUERO TREINAR AGORA
                <ChevronRight className="w-7 h-7" />
              </a>
              <p className="text-sm text-blue-300 font-bold flex items-center gap-2 uppercase tracking-widest">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Agende sua avaliação gratuita
              </p>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="relative px-6 py-32 border-y border-white/5 bg-zinc-950/40">
          <SectionElements intensity={2} />
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div {...fadeInUp} className="relative group">
              <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img src={LINKS.MEDAL} alt="Silvio Autoridade" className="relative rounded-[3rem] border border-white/10 shadow-2xl" />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 px-8 py-6 rounded-[2rem] shadow-2xl border-4 border-black">
                <Trophy className="text-white w-12 h-12 mb-1" />
                <span className="text-xs font-black block uppercase tracking-tighter">Expert em Performance</span>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-10">
              <h2 className="text-5xl font-black text-gradient leading-tight">Presencial ou Online: Você decide.</h2>
              <p className="text-gray-300 leading-relaxed text-2xl font-light italic">
                "Não importa onde você esteja, meu método de treinamento personalizado foca no que realmente traz resultado: biomecânica correta e intensidade controlada."
              </p>
              <div className="grid grid-cols-1 gap-5">
                {[
                  "Treinos Presenciais em Dourados/MS",
                  "Consultoria Online para todo o Brasil",
                  "Prescrição baseada em Ciência",
                  "Suporte total via WhatsApp"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 glass-card rounded-3xl">
                    <CheckCircle className="w-7 h-7 text-blue-500 shrink-0" />
                    <span className="font-bold text-lg text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="relative px-6 py-32 overflow-hidden">
          <SectionElements intensity={3} />
          <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-6xl font-black mb-8 leading-tight">Resultados de <span className="text-gradient">Quem Treina</span></motion.h2>
            <motion.p {...fadeInUp} className="text-2xl text-gray-400 font-light">Evolução constante de alunos presenciais e da consultoria online.</motion.p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8 relative z-10">
            {[LINKS.STUDENT_1, LINKS.STUDENT_2, LINKS.STUDENT_3, LINKS.STUDENT_4].map((src, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="cursor-pointer group relative overflow-hidden rounded-[3rem] border border-white/10 aspect-[3/4]"
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={`Resultado ${i+1}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/30 backdrop-blur-md">
                   <div className="bg-white text-black font-black px-8 py-4 rounded-full text-lg shadow-2xl">VER RESULTADO</div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-600 mt-12 uppercase tracking-[0.3em] font-black opacity-40">Consultoria Presencial & Digital</p>
        </section>

        {/* BENEFITS SECTION */}
        <section className="relative px-6 py-32 bg-black/50">
          <SectionElements intensity={2} />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.h2 {...fadeInUp} className="text-5xl font-black text-center mb-20">Diferenciais <span className="text-gradient">Falck</span></motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {FEATURES.map((feature, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-12 rounded-[3.5rem] hover:border-blue-500/60 transition-all group"
                >
                  <div className="bg-blue-600/20 w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-6 group-hover:text-blue-400 transition-colors tracking-tight">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-xl font-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERMEDIATE CTA */}
        <section className="relative px-6 py-28 bg-blue-600/15 border-y border-blue-500/30 overflow-hidden">
          <SectionElements intensity={1} />
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-4xl font-black mb-8 italic tracking-tight leading-tight">Quer treinar presencial em Dourados ou Online?</h3>
            <p className="text-2xl text-gray-400 mb-12 font-light">Vamos conversar agora e definir o melhor formato para a sua rotina.</p>
            <a 
              href={LINKS.WHATSAPP}
              className="btn-gradient px-14 py-6 rounded-full font-black text-2xl flex items-center justify-center gap-4 mx-auto w-full md:w-max shadow-3xl hover:shadow-blue-600/50 transition-all active:scale-95"
            >
              Começar agora
              <MessageCircle className="w-8 h-8" />
            </a>
          </motion.div>
        </section>

        {/* FINAL DECISION */}
        <section className="relative px-6 py-40">
          <SectionElements intensity={3} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div 
              {...fadeInUp}
              className="glass-card p-12 md:p-24 rounded-[5rem] relative overflow-hidden border-blue-500/20"
            >
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/30 blur-[150px] pointer-events-none"></div>
              {/* Fixed: reduced mobile size to text-5xl and changed tracking-tighter to tracking-tight to prevent cutting off the 'l' in Nível */}
              <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[1.2] tracking-tight italic">O seu <span className="text-gradient">Próximo Nível</span> é aqui.</h2>
              <p className="text-2xl md:text-3xl text-gray-400 mb-16 font-light leading-relaxed">Seja no atendimento presencial ou na consultoria digital, você terá o melhor suporte técnico.</p>
              
              <a 
                href={LINKS.WHATSAPP}
                className="btn-gradient px-16 py-8 rounded-full font-black text-3xl flex items-center justify-center gap-5 hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-blue-600/60"
              >
                COMEÇAR AGORA
                <ChevronRight className="w-12 h-12" />
              </a>
              <p className="mt-12 text-blue-400 font-black uppercase tracking-[0.4em] text-sm">Consultoria Online & Presencial em Dourados</p>
            </motion.div>
          </div>
        </section>

        {/* FOOTER - Minimalist and Smaller */}
        <footer className="relative px-6 py-12 bg-black text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto relative z-10">
            <img src={LINKS.LOGO} alt="Silvio Falck Logo" className="h-16 mx-auto mb-6 grayscale opacity-40 hover:opacity-100 transition-opacity" />
            <p className="text-xl font-black text-white mb-2">Silvio Falck</p>
            <p className="text-gray-500 text-[11px] uppercase font-black tracking-[0.3em] mb-6">Dourados/MS • Presencial & Online</p>
            
            <div className="flex justify-center gap-10 mb-8">
              <a href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href={LINKS.WHATSAPP} className="text-gray-500 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-8 h-8" />
              </a>
            </div>
            
            <p className="text-[10px] text-gray-800 uppercase font-black tracking-[0.6em]">© {new Date().getFullYear()} SILVIO FALCK PERSONAL</p>
          </div>
        </footer>
      </main>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 p-4 bg-white/10 rounded-full text-white hover:bg-blue-600 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-[80vh] rounded-[3rem] object-contain shadow-[0_0_100px_rgba(0,102,255,0.3)] border border-white/10" 
              alt="Evolução Aluno"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
