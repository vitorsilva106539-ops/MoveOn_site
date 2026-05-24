import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { circularSteps } from '../data';
import { Heart, Activity, CheckCircle, ShieldCheck, Factory, Recycle, Award } from 'lucide-react';

export default function AboutSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Recycle className="w-6 h-6" />;
      case 1: return <Factory className="w-6 h-6" />;
      case 2: return <Award className="w-6 h-6" />;
      case 3: return <ShieldCheck className="w-6 h-6" />;
      default: return <CheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <section id="sobre" className="py-24 bg-[#F2EFE9] overflow-hidden border-y border-art-accent/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-art-primary uppercase font-bold bg-art-accent/30 px-3 py-1 rounded-full">
            ECONOMIA CIRCULAR EM AÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-art-primary mt-4 tracking-tight font-serif">
            Nossa Operação Sustentável
          </h2>
          <p className="text-art-ink/85 text-sm sm:text-base mt-4 leading-relaxed font-sans font-light">
            Na MoveON, sustentabilidade não é uma meta distante: é a base diária do nosso modelo de negócios. Controlamos todo o processo desde a coleta do resíduo até a entrega final paulista.
          </p>
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Info Box */}
          <div className="lg:col-span-5 bg-white rounded-xl p-8 border border-art-accent shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-art-primary flex items-center justify-center text-art-accent mb-6 text-xl">
                ♻️
              </div>
              <h3 className="text-2xl font-bold text-art-primary font-serif mb-4 italic">Sobre a MoveON</h3>
              <p className="text-art-ink/80 text-sm leading-relaxed mb-6 font-light">
                Nossa operação baseia-se no conceito de economia circular. Produzimos nossos próprios produtos internamente, garantindo o controle de qualidade e a procedência dos materiais reciclados e recuperados.
              </p>
              <p className="text-art-ink/80 text-sm leading-relaxed font-light">
                As entregas são realizadas com nossa frota própria dedicada para garantir a menor pegada de carbono possível em todo o estado de São Paulo.
              </p>
            </div>

            {/* Credibility list updated to fit theme */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-art-accent/30">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-art-primary shrink-0" />
                <span className="text-xs text-art-ink font-semibold">100% Autoral</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-art-primary shrink-0" />
                <span className="text-xs text-art-ink font-semibold font-sans">Procedência Local</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-art-primary shrink-0" />
                <span className="text-xs text-art-ink font-semibold font-sans">Embalagem Limpa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-art-primary shrink-0" />
                <span className="text-xs text-art-ink font-semibold font-sans">Baixo Carbono</span>
              </div>
            </div>
          </div>

          {/* Interactive Steps Visualizer */}
          <div className="lg:col-span-7 bg-white/60 rounded-xl p-8 border border-art-accent/80 shadow-md flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] font-mono text-art-primary uppercase tracking-widest font-bold mb-6">Etapas do Processo Circular</h4>
              
              {/* Steps Nav Row */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8">
                {circularSteps.map((step, idx) => (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx + 1)}
                    className={`flex flex-col items-center p-3 rounded-xl border transition-all text-center cursor-pointer ${
                      activeStep === idx + 1
                        ? 'bg-art-primary border-art-primary text-white shadow-md'
                        : 'bg-white border-art-accent/50 text-art-ink/50 hover:text-art-primary hover:border-art-accent'
                    }`}
                    id={`about-step-btn-${idx + 1}`}
                  >
                    <span className={`text-[11px] font-mono font-bold mb-1.5 ${activeStep === idx + 1 ? 'text-art-accent' : 'text-art-ink/40'}`}>
                      {step.number}
                    </span>
                    <div className={activeStep === idx + 1 ? 'text-white' : 'text-art-primary/70'}>
                      {getStepIcon(idx)}
                    </div>
                  </button>
                ))}
              </div>

              {/* Step info content with Animation */}
              <div className="min-h-[160px] bg-art-bg rounded-xl p-6 border border-art-accent/40 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-[10px] font-mono tracking-widest text-[#1B4332] uppercase font-bold">
                      Etapa {circularSteps[activeStep - 1].number} de 04
                    </span>
                    <h5 className="text-lg font-bold text-art-primary font-serif mt-1 mb-2">
                      {circularSteps[activeStep - 1].title}
                    </h5>
                    <p className="text-art-ink/80 text-xs leading-relaxed">
                      {circularSteps[activeStep - 1].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Environmental claim visual indicator */}
            <div className="mt-8 p-4 bg-art-primary rounded-xl border border-art-accent/25 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-left">
                <p className="text-xs font-bold text-white">Como auditamos a procedência?</p>
                <p className="text-[11px] text-[#D8C3A5]">Todos os materiais recebem um QR Code de origem que certifica as cooperativas e indústrias fornecedoras da matéria-prima paulista.</p>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-art-accent text-art-primary font-mono text-[10px] font-bold tracking-wider uppercase shrink-0 self-start sm:self-auto">
                Certificação MoveON
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
