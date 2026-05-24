import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { citiesList } from '../data';
import { Truck, ShieldAlert, Award, Compass, Timer, MapPin, BadgeCheck, Waypoints } from 'lucide-react';

export default function LogisticsHub() {
  const [selectedCityName, setSelectedCityName] = useState<string>(citiesList[0].name);

  const activeCity = citiesList.find((c) => c.name === selectedCityName) || citiesList[0];

  return (
    <section id="logistica" className="py-24 bg-white overflow-hidden relative border-t border-art-accent/40">
      
      {/* Decorative bg light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-art-accent/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-art-primary uppercase font-bold bg-art-accent/30 px-3 py-1 rounded-full">
            DIFERENCIAIS DE LOGÍSTICA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-art-primary mt-4 tracking-tight font-serif">
            Logística Direta & Carbono Reduzido
          </h2>
          <p className="text-art-ink/80 text-sm mt-3 leading-relaxed font-sans font-light">
            Atendemos de forma ágil a todo o estado de São Paulo. Nossa operação reduz emissões de carbono eliminando centros de distribuição intermediários redundantes.
          </p>
        </div>

        {/* Bento Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Key pillars listed in user specification with Artistic Style */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            
            {/* Agilidade Box */}
            <div className="bg-art-bg rounded-xl p-6 border border-art-accent/80 hover:border-art-primary/40 transition-all flex items-start gap-4 text-left shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-art-primary border border-art-accent/10 flex items-center justify-center text-art-accent shrink-0">
                <Timer className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-art-primary font-serif italic">Agilidade paulista</h3>
                <p className="text-xs text-art-ink/80 leading-relaxed mt-2 font-light">
                  Entrega direta saindo do nosso centro de produção estratégico integrado. Isso significa menor tempo de trânsito e máxima agilidade na expedição de carregamentos corporativos.
                </p>
              </div>
            </div>

            {/* Sustentabilidade Box */}
            <div className="bg-art-bg rounded-xl p-6 border border-art-accent/80 hover:border-art-primary/40 transition-all flex items-start gap-4 text-left shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-art-primary border border-art-accent/10 flex items-center justify-center text-art-accent shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-art-primary font-serif italic">Sustentabilidade integrada</h3>
                <p className="text-xs text-art-ink/80 leading-relaxed mt-2 font-light">
                  Planejamento de rotas algoritmicamente monitorado para garantir a menor quilometragem possível e redução expressiva nas emissões associadas de CO₂.
                </p>
              </div>
            </div>

            {/* Atendimento Local Box */}
            <div className="bg-art-bg rounded-xl p-6 border border-art-accent/80 hover:border-art-primary/40 transition-all flex items-start gap-4 text-left shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-art-primary border border-art-accent/10 flex items-center justify-center text-art-accent shrink-0">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-art-primary font-serif italic">Atendimento Local</h3>
                <p className="text-xs text-art-ink/80 leading-relaxed mt-2 font-light">
                  Suporte especializado e canais de contato de alta prioridade estruturados especificamente para as necessidades corporativas das empresas de São Paulo.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Routing Map Simulator with Editorial styling */}
          <div className="lg:col-span-7 bg-[#F2EFE9] rounded-xl p-8 border border-art-accent shadow-md flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="text-left">
                  <h3 className="text-xs font-bold text-art-primary uppercase tracking-widest font-mono">
                    CENTRO DE EXPEDIÇÃO MOVEON
                  </h3>
                  <p className="text-xs text-art-ink/70 mt-1">Estimativa de tráfego direto de Jundiaí/SP</p>
                </div>

                {/* City Selector */}
                <div>
                  <select
                    value={selectedCityName}
                    onChange={(e) => setSelectedCityName(e.target.value)}
                    className="bg-white border border-art-accent hover:border-art-primary/40 text-xs text-art-ink rounded-lg px-4 py-2.5 focus:outline-none focus:border-art-primary transition-colors cursor-pointer"
                    id="city-logistics-select"
                  >
                    {citiesList.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Graphic Simulator Plot: Shows Jundiaí, Target City, Route Path */}
              <div className="bg-white border border-art-accent/85 rounded-lg p-6 relative aspect-[2/1] flex items-center justify-center overflow-hidden mb-6 shadow-inner">
                
                {/* Simulated Grid overlay */}
                <div className="absolute inset-0 bg-[#D8C3A5]/5 bg-[linear-gradient(to_right,rgba(216,195,165,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,195,165,0.15)_1px,transparent_1px)] bg-[size:20px_20px]" />

                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/1500/svg">
                  {/* Origin hub Point Jundiaí */}
                  <g transform="translate(100, 75)">
                    <circle r="6" className="fill-art-primary/40 animate-ping" />
                    <circle r="5" className="fill-art-primary" />
                    <text x="12" y="4" className="fill-art-ink font-mono text-[9px] font-bold">JUNDIAÍ (HUB)</text>
                  </g>

                  {/* Destination City Position: responsive coordinate estimation depending on distance */}
                  {(() => {
                    const mappedX = 140 + Math.min(220, (activeCity.distanceKm / 512) * 220);
                    const mappedY = 50 + (activeCity.distanceKm % 3) * 15;
                    return (
                      <>
                        {/* Interactive dynamic Route vector inside theme */}
                        <motion.path
                          key={activeCity.name}
                          d={`M 100 75 Q ${(100 + mappedX) / 2} ${Math.min(75, mappedY) - 15} ${mappedX} ${mappedY}`}
                          fill="none"
                          stroke="#1B4332"
                          strokeWidth="2.5"
                          strokeDasharray="4,4"
                          className="opacity-80"
                          initial={{ strokeDashoffset: 100 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                        />

                        <g transform={`translate(${mappedX}, ${mappedY})`}>
                          <circle r="6" className="fill-art-primary/30 animate-pulse" />
                          <circle r="4" className="fill-art-primary" />
                          <text x="-15" y="-12" className="fill-art-ink font-mono text-[9px] font-bold">
                            {activeCity.name}
                          </text>
                        </g>
                      </>
                    );
                  })()}
                </svg>

                {/* Regional badge overlay */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#F2EFE9] border border-art-accent text-[9px] text-art-primary font-mono tracking-wider uppercase font-semibold">
                  Região: {activeCity.region}
                </div>
              </div>

              {/* Transit & Environmental stats display inside new layout */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg border border-art-accent/60 text-left">
                  <p className="text-[9px] text-art-ink/50 uppercase tracking-widest font-bold">Quilometragem</p>
                  <p className="text-sm sm:text-lg font-bold text-art-primary font-serif mt-0.5">
                    {activeCity.distanceKm} <span className="text-xs text-art-ink/50 font-sans font-light">km</span>
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-art-accent/60 text-left">
                  <p className="text-[9px] text-art-ink/50 uppercase tracking-widest font-bold">Prazo de Envio</p>
                  <p className="text-sm sm:text-lg font-bold text-art-primary font-serif mt-0.5">
                    {activeCity.transitDays} {activeCity.transitDays > 1 ? 'dias' : 'dia'}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-art-accent/60 text-left">
                  <p className="text-[9px] text-art-ink/50 uppercase tracking-widest font-bold flex items-center gap-1">
                    🌳 CO₂ Salvo
                  </p>
                  <p className="text-sm sm:text-lg font-bold text-art-primary font-serif mt-0.5">
                    {activeCity.co2SavedKg.toLocaleString('pt-BR', { minimumFractionDigits: 1 })} <span className="text-xs text-art-ink/50 font-sans font-light">kg</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Micro disclaimer */}
            <p className="text-[10px] text-art-ink/50 mt-6 md:mt-4 text-center">
              *Estimativa comparativa em relação a transportes comerciais que realizam crossdocking centralizado em múltiplos galpões interestaduais.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
