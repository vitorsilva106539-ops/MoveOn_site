import { motion } from 'motion/react';
import { Leaf, ArrowRight, ShieldCheck, Truck, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-art-bg"
    >
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-art-accent/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-art-primary/10 blur-[150px] pointer-events-none" />
      
      {/* Editorial grid lines background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d8c3a540_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4332] border border-art-accent/30 text-[#D8C3A5] text-[10px] font-bold tracking-wider uppercase mb-6 w-fit shadow-sm"
          >
            <Leaf className="w-3.5 h-3.5 text-art-accent fill-art-accent/20" />
            <span>EXCLUSIVO PARA O ESTADO DE SÃO PAULO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-art-primary mb-6 leading-[1.1] font-serif"
          >
            Sustentabilidade de <br />
            <span className="font-serif italic font-normal text-art-primary drop-shadow-sm">
              ponta a ponta
            </span> <br />
            em sua operação.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-art-ink/80 mb-8 max-w-2xl leading-relaxed font-sans font-light"
          >
            A <strong className="text-art-primary font-bold">MoveON</strong> integra a produção nacional própria de itens ecológicos de alta durabilidade com uma logística rápida, limpa e direta para todo o estado de SP. Reduza o CO₂ de seus brindes e rotinas corporativas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection('produtos')}
              className="px-6 py-3 bg-art-primary hover:bg-emerald-900 active:bg-art-primary text-art-bg font-semibold rounded-lg text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 group cursor-pointer"
              id="hero-view-products"
            >
              Conhecer Produtos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="px-6 py-3 bg-white hover:bg-neutral-50 text-art-primary border border-art-primary/20 font-semibold rounded-lg text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
              id="hero-learn-more"
            >
              Nossa Economia Circular
            </button>
          </motion.div>

          {/* Quick Pillars info with artistic flair numbers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 border-t border-art-accent/40 mt-12 pt-8"
          >
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-art-primary font-serif italic">100%</p>
              <p className="text-[10px] text-art-ink/65 uppercase tracking-wider font-semibold mt-1">Produção Própria</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-art-primary font-serif italic">&lt; 24h</p>
              <p className="text-[10px] text-art-ink/65 uppercase tracking-wider font-semibold mt-1">Expedição SP</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-art-primary font-serif italic">-45%</p>
              <p className="text-[10px] text-art-ink/65 uppercase tracking-wider font-semibold mt-1">Impacto de Carbono</p>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Graphic Container */}
        <div className="lg:col-span-5 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-square max-w-md bg-white rounded-2xl border border-art-accent p-8 shadow-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient subtle canvas pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#d8c3a515_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Simulated Live eco widget */}
            <div className="flex items-center justify-between relative z-10 border-b border-art-accent/45 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#1B4332] font-semibold uppercase">MOVEON LOGÍSTICA ATIVA</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-art-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-art-primary"></span>
              </span>
            </div>

            {/* Central circle graphic demonstrating Circular Economy */}
            <div className="py-6 flex flex-col items-center justify-center relative z-10">
              <div className="w-44 h-44 rounded-full border border-dashed border-art-accent flex items-center justify-center relative animate-[spin_40s_linear_infinite]">
                {/* Orbital items */}
                <div className="absolute top-0 bg-art-primary p-2 border border-art-accent/20 rounded-full text-art-bg shadow-md">
                  <Leaf className="w-5 h-5 text-art-accent" />
                </div>
                <div className="absolute right-0 bg-art-primary p-2 border border-art-accent/20 rounded-full text-art-bg shadow-md">
                  <Truck className="w-5 h-5 text-art-accent" />
                </div>
                <div className="absolute bottom-0 bg-art-primary p-2.5 border border-art-accent/20 rounded-full text-art-accent shadow-md font-bold font-mono text-2xs uppercase">
                  CO₂
                </div>
                <div className="absolute left-0 bg-art-primary p-2 border border-art-accent/20 rounded-full text-art-bg shadow-md">
                  <ShieldCheck className="w-5 h-5 text-art-accent" />
                </div>
              </div>

              {/* Central text in the orbital circle */}
              <div className="absolute flex flex-col items-center justify-center text-center mt-3">
                <span className="text-[9px] uppercase font-mono tracking-widest text-art-ink/50">Fluxo</span>
                <span className="text-2xl font-serif italic text-art-primary">Circular</span>
                <span className="text-[10px] text-[#1B4332] font-semibold tracking-wider uppercase mt-1">100% Auditado</span>
              </div>
            </div>

            {/* Bottom mini status block */}
            <div className="bg-art-bg rounded-xl p-4 border border-art-accent/50 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-art-primary text-art-accent">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-art-primary">Logística Direta Paulista</p>
                  <p className="text-[11px] text-art-ink/75">Entrega direta saindo de Jundiaí para todo o estado.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
