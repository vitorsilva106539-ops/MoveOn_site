import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { productsList, citiesList } from '../data';
import { Product } from '../types';
import { Trash2, Plus, Minus, FileSpreadsheet, Leaf, ClipboardCheck, Sparkles, Building, Send, RefreshCcw } from 'lucide-react';

interface QuoteSimulatorProps {
  quoteQuantities: { [key: string]: number };
  onUpdateQty: (productId: string, newQty: number) => void;
  onClearQuote: () => void;
}

export default function QuoteSimulator({ quoteQuantities, onUpdateQty, onClearQuote }: QuoteSimulatorProps) {
  // Client state for contact form
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [selectedCity, setSelectedCity] = useState(citiesList[0].name);
  const [companySegment, setCompanySegment] = useState('Outro');
  
  // Submit state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  // Computations
  const activeItems = useMemo(() => {
    return productsList
      .map((product) => ({
        product,
        qty: quoteQuantities[product.id] || 0,
      }))
      .filter((item) => item.qty > 0);
  }, [quoteQuantities]);

  const financialSummary = useMemo(() => {
    let totalValue = 0;
    let totalPETSaved = 0;
    let totalCO2SavedG = 0;

    activeItems.forEach(({ product, qty }) => {
      totalValue += product.price * qty;
      totalPETSaved += (product.savedPETCount || 0) * qty;
      totalCO2SavedG += (product.savedCO2g || 0) * qty;
    });

    // Add SP localized delivery cost estimate based on selected city criteria
    // Central hub Jundiaí delivery is free, but other regions have structured minimal custom rates
    const deliveryCityObj = citiesList.find((c) => c.name === selectedCity);
    const distance = deliveryCityObj ? deliveryCityObj.distanceKm : 50;
    const deliveryRate = totalValue > 1000 ? 0 : Math.round(distance * 0.45);

    return {
      subtotal: totalValue,
      delivery: deliveryRate,
      grandTotal: totalValue + deliveryRate,
      petSaved: totalPETSaved,
      co2SavedKg: totalCO2SavedG / 1000,
    };
  }, [activeItems, selectedCity]);

  // Handle mock submission
  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeItems.length === 0) return;

    // Generate ticket ID
    const randomTicket = 'MO-' + Math.floor(100000 + Math.random() * 900000);
    setSubmissionId(randomTicket);
    setIsSubmitted(true);
  };

  // Turn back to configuration
  const handleResetQuote = () => {
    setIsSubmitted(false);
    onClearQuote();
    setCompanyName('');
    setContactName('');
  };

  return (
    <section id="calculadora" className="py-24 bg-art-bg relative border-t border-art-accent/45">
      {/* Visual neon light */}
      <div className="absolute bottom-1/10 left-1/10 w-80 h-80 bg-art-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-art-primary uppercase font-bold bg-art-accent/30 px-3 py-1 rounded-full">
            PLATAFORMA INTEGRADA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-art-primary mt-4 tracking-tight font-serif">
            Simulador de Orçamento & Benefícios
          </h2>
          <p className="text-art-ink/80 text-sm mt-3 font-light">
            Defina as quantidades desejadas abaixo para ver instantaneamente a projeção dos valores comerciais e a sua pegada sustentável mitigada em tempo real.
          </p>
        </div>

        {isSubmitted ? (
          /* Submission success state */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-white rounded-xl p-8 border border-art-primary shadow-xl overflow-hidden text-left"
            id="quote-success-panel"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-art-[#1B4332]/5 border border-art-primary/30 text-art-primary flex items-center justify-center mx-auto mb-4 animate-bounce">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono text-art-primary tracking-widest font-bold">COTAÇÃO SIMULADA COM SUCESSO</span>
              <h3 className="text-3xl font-bold text-art-primary mt-2 font-serif">Sua Empresa na Rota Verde!</h3>
              <p className="text-xs text-art-ink/50 mt-2 font-mono uppercase tracking-wider">Registro #: {submissionId}</p>
            </div>

            <div className="bg-[#F2EFE9] rounded-xl p-6 border border-art-accent/60 mb-8 space-y-4">
              <div className="flex justify-between items-center text-xs pb-3 border-b border-art-accent/30">
                <span className="text-art-ink/60 uppercase tracking-wider font-bold text-[10px]">Empresa:</span>
                <span className="text-art-primary font-bold font-serif">{companyName || 'Empresa Local SP'}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-3 border-b border-art-accent/30">
                <span className="text-art-ink/60 uppercase tracking-wider font-bold text-[10px]">Responsável:</span>
                <span className="text-art-primary font-bold">{contactName || 'Contato'}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-3 border-b border-art-accent/30">
                <span className="text-art-ink/60 uppercase tracking-wider font-bold text-[10px]">Destino de Entrega:</span>
                <span className="text-art-primary font-bold">{selectedCity}</span>
              </div>

              {/* Eco highlights of this order */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-white border border-art-accent p-4 rounded-lg text-center shadow-sm">
                  <span className="text-[10px] text-art-primary font-bold uppercase tracking-wider block mb-1">PETs Recicladas</span>
                  <strong className="text-3xl text-art-primary font-serif italic">{financialSummary.petSaved}</strong>
                  <span className="text-[10px] text-art-ink/65 block mt-1">unidades poupadas</span>
                </div>
                <div className="bg-white border border-art-accent p-4 rounded-lg text-center shadow-sm">
                  <span className="text-[10px] text-art-primary font-bold uppercase tracking-wider block mb-1">CO₂ Evitado Estimado</span>
                  <strong className="text-3xl text-art-primary font-serif italic">
                    {financialSummary.co2SavedKg.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kg
                  </strong>
                  <span className="text-[10px] text-art-ink/65 block mt-1">de emissão evitada</span>
                </div>
              </div>

              {/* Price Details */}
              <div className="pt-4 border-t border-art-accent/40 space-y-2">
                <div className="flex justify-between text-xs text-art-ink/80">
                  <span>Subtotal itens sustentáveis:</span>
                  <span className="font-semibold text-art-primary font-mono">R$ {financialSummary.subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-xs text-art-ink/80">
                  <span>Entrega Direta (Jundiaí - {selectedCity}):</span>
                  <span className="font-semibold text-art-primary font-mono">
                    {financialSummary.delivery === 0 ? 'Grátis (Faturamento Eco)' : `R$ ${financialSummary.delivery.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-art-primary pt-2 border-t border-dashed border-art-accent">
                  <span className="font-serif">Total da Cotação:</span>
                  <span className="text-xl font-bold font-serif">R$ {financialSummary.grandTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleResetQuote}
                className="px-6 py-3 bg-white hover:bg-neutral-50 text-art-primary border border-art-primary/20 font-bold rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                id="quote-reset-btn"
              >
                <RefreshCcw className="w-4 h-4" />
                Criar Nova Cotação
              </button>
              <a
                href={`mailto:vendas@moveon-sp.com.br?subject=Cotacao%20MoveON%20${submissionId}&body=Ola,%20gostaria%20de%20confirmar%20a%20cotacao%20${submissionId}%20para%20a%20empresa%20${companyName}.`}
                className="px-6 py-3 bg-[#1B4332] hover:bg-emerald-950 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                id="quote-email-btn"
              >
                <Send className="w-4 h-4" />
                Efetivar com Especialista
              </a>
            </div>
          </motion.div>
        ) : (
          /* Live calculator state */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Added products and adjustments */}
            <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-art-accent shadow-sm">
              <h3 className="text-base font-bold text-art-primary uppercase tracking-widest font-serif mb-6 flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-art-primary" />
                Seus Itens Selecionados
              </h3>

              {activeItems.length === 0 ? (
                <div className="text-center py-16 bg-art-bg rounded-lg border border-dashed border-art-accent flex flex-col items-center justify-center">
                  <Leaf className="w-10 h-10 text-art-primary/40 mb-3" />
                  <p className="text-art-ink/80 text-xs font-semibold">Nenhum produto adicionado para simulação ainda.</p>
                  <p className="text-art-ink/65 text-[11px] mt-1 max-w-xs leading-relaxed font-light">
                    Navegue pela vitrine de produtos acima e clique em "Adicionar" para ver os custos e o retorno ambiental.
                  </p>
                  <button
                    onClick={() => {
                      const element = document.getElementById('produtos');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-6 px-4 py-2 bg-art-primary hover:bg-[#1B4332]/90 text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    Ver Produtos
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {activeItems.map(({ product, qty }) => (
                    <div
                      key={product.id}
                      className="bg-[#F2EFE9] rounded-xl p-4 border border-art-accent/40 flex items-center justify-between gap-4 text-left"
                      id={`quote-row-${product.id}`}
                    >
                      <div>
                        <h4 className="text-sm font-bold text-art-primary font-serif">{product.name}</h4>
                        <p className="text-[10px] text-art-ink/60 font-mono uppercase tracking-wide mt-0.5">{product.material}</p>
                        <p className="text-xs text-art-ink/75 mt-2 font-semibold">
                          Valor unitário: R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>

                      {/* Quantity adjustments */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-white rounded-lg p-1 border border-art-accent">
                          <button
                            onClick={() => onUpdateQty(product.id, Math.max(0, qty - 1))}
                            className="p-1.5 hover:bg-art-bg text-art-primary rounded-md transition-colors cursor-pointer"
                            aria-label="Reduce"
                            id={`qty-minus-${product.id}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-art-primary font-mono">{qty}</span>
                          <button
                            onClick={() => onUpdateQty(product.id, qty + 1)}
                            className="p-1.5 hover:bg-art-bg text-art-primary rounded-md transition-colors cursor-pointer"
                            aria-label="Increase"
                            id={`qty-plus-${product.id}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Trash Button */}
                        <button
                          onClick={() => onUpdateQty(product.id, 0)}
                          className="p-2 text-art-ink/40 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                          aria-label="Remove"
                          id={`qty-remove-${product.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Summary reset helper */}
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={onClearQuote}
                      className="text-xs text-art-ink/60 hover:text-art-primary transition-colors flex items-center gap-1.5 cursor-pointer font-semibold uppercase tracking-wider"
                      id="quote-clear-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Limpar lista
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right side: Contact and immediate live metrics */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              
              {/* Environmental real-time benefits panel inside full Artistic look */}
              {activeItems.length > 0 && (
                <div className="bg-art-primary text-white rounded-xl p-6 border border-art-accent/25 relative overflow-hidden shadow-sm">
                  <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-art-accent/15 rounded-full blur-2xl pointer-events-none" />
                  
                  <h4 className="text-[10px] font-bold text-art-accent flex items-center gap-1.5 uppercase font-mono mb-4">
                    <Sparkles className="w-4 h-4 fill-art-accent/25 text-art-accent animate-pulse" />
                    Impacto Positivo em Tempo Real
                  </h4>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                      <div>
                        <p className="text-xs font-bold text-white">Garrafas PET recicladas</p>
                        <p className="text-[10px] text-art-accent/70 font-light">Total reciclado na produção deste lote</p>
                      </div>
                      <span className="text-xl font-bold font-mono text-art-accent">-{financialSummary.petSaved}</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                      <div>
                        <p className="text-xs font-bold text-white">Pegada de Carbono Salva</p>
                        <p className="text-[10px] text-art-accent/70 font-light">Emissões evitadas em relação ao padrão</p>
                      </div>
                      <span className="text-xl font-bold font-mono text-art-accent">
                        -{financialSummary.co2SavedKg.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} <span className="text-xs font-normal">kg</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Quote form with theme attributes */}
              <div className="bg-white rounded-xl p-6 border border-art-accent shadow-sm">
                <h3 className="text-base font-bold text-art-primary uppercase tracking-widest font-serif mb-6 flex items-center gap-2 border-b border-art-accent/30 pb-3">
                  <Building className="w-5 h-5 text-art-primary" />
                  Faturamento & Entrega
                </h3>

                <form onSubmit={handleSubmitQuote} className="space-y-4">
                  <div>
                    <label className="block text-[9px] text-art-ink/65 uppercase font-bold tracking-widest mb-1.5">
                      Nome da Empresa <span className="text-art-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: MoveOn Brasil LTDA"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-[#F2EFE9] border border-art-accent rounded-lg px-4 py-2.5 text-xs text-art-ink placeholder-art-ink/40 focus:outline-none focus:border-art-primary focus:bg-white transition-all transition-colors"
                      id="quote-form-company"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] text-art-ink/65 uppercase font-bold tracking-widest mb-1.5">
                      Nome do Contato <span className="text-art-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ana Souza"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#F2EFE9] border border-art-accent rounded-lg px-4 py-2.5 text-xs text-art-ink placeholder-art-ink/40 focus:outline-none focus:border-art-primary focus:bg-white transition-all transition-colors"
                      id="quote-form-contact"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] text-art-ink/65 uppercase font-bold tracking-widest mb-1.5">
                        Destino (SP)
                      </label>
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full bg-[#F2EFE9] border border-art-accent text-[11px] text-art-ink rounded-lg px-3 py-2.5 focus:outline-none focus:border-art-primary focus:bg-white transition-colors cursor-pointer"
                        id="quote-form-city"
                      >
                        {citiesList.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[9px] text-art-ink/65 uppercase font-bold tracking-widest mb-1.5">
                        Setor da Empresa
                      </label>
                      <select
                        value={companySegment}
                        onChange={(e) => setCompanySegment(e.target.value)}
                        className="w-full bg-[#F2EFE9] border border-art-accent text-[11px] text-art-ink rounded-lg px-3 py-2.5 focus:outline-none focus:border-art-primary focus:bg-white transition-colors cursor-pointer"
                        id="quote-form-segment"
                      >
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Serviços">Serviços / Consultoria</option>
                        <option value="Educação">Educação</option>
                        <option value="Varejo">Comércio / Varejo</option>
                        <option value="Indústria">Indústria</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  {/* Immediate price calculation overview */}
                  {activeItems.length > 0 ? (
                    <div className="pt-4 border-t border-art-accent/40 space-y-2.5 text-xs">
                      <div className="flex justify-between text-art-ink/80">
                        <span>Valor total de itens:</span>
                        <span className="font-semibold text-art-primary font-mono">
                          R$ {financialSummary.subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between text-art-ink/80">
                        <span>Frete Próprio MoveON ({selectedCity}):</span>
                        <span className="font-semibold text-art-primary font-mono">
                          {financialSummary.delivery === 0 ? 'Grátis' : `R$ ${financialSummary.delivery.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-art-primary pt-2 border-t border-dashed border-art-accent">
                        <span className="font-serif">Estimativa de Cotação:</span>
                        <span className="font-serif">
                          R$ {financialSummary.grandTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-4 py-3 bg-[#1B4332] hover:bg-emerald-900 active:bg-art-primary text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                        id="quote-form-submit-btn"
                      >
                        <ClipboardCheck className="w-4 h-4" />
                        Gerar Proposta Corporativa
                      </button>
                    </div>
                  ) : (
                    <div className="pt-4 text-center">
                      <p className="text-[10px] text-art-ink/50 leading-relaxed">
                        Adicione pelo menos um produto ecológico para liberar a simulação de faturamento e taxas dísticas de São Paulo.
                      </p>
                    </div>
                  )}

                </form>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
