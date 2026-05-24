import { Leaf, MapPin, Mail, Phone, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-art-primary py-16 text-art-accent/90 border-t border-art-accent/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 text-left font-sans">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-art-accent flex items-center justify-center text-art-primary font-serif font-bold text-sm">
                <span>M</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-serif">
                Move<span className="text-art-accent italic font-normal">On</span>
              </span>
            </div>
            <p className="text-xs text-[#F2EFE9]/80 leading-relaxed mb-6 max-w-sm font-light">
              Operamos no conceito de economia circular pura. Produzimos nossos próprios produtos sustentáveis internamente e transportamos com frotas seguras de baixa pegada poluente de ponta a ponta no estado de São Paulo.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-white bg-white/10 px-3.5 py-1.5 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-art-accent animate-pulse"></span>
              <span>São Paulo — Operação Própria Ativa</span>
            </div>
          </div>

          {/* Column 2: Anchor lists */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-sm font-semibold text-white tracking-wider mb-4 border-b border-white/10 pb-2 font-serif italic">Explore</h4>
            <ul className="space-y-3.5 text-xs font-medium text-white/80">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Portfólio de Produtos
                </a>
              </li>
              <li>
                <a href="#logistica" className="hover:text-white transition-colors">
                  Logística SP
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Simulador de Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact information */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-sm font-semibold text-white tracking-wider mb-4 border-b border-white/10 pb-2 font-serif italic">Atendimento e Canais</h4>
            <ul className="space-y-4 text-xs text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-art-accent shrink-0 mt-0.5" />
                <span>Centro Rodoviário de Distribuição Integrada - Jundiaí/SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-art-accent shrink-0" />
                <span>contato@moveon-sp.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-art-accent shrink-0" />
                <span>+55 (11) 4002-8922</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-art-accent shrink-0" />
                <span>Segunda a Sexta, das 08h às 18h</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower row details */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-2xs text-white/50">
          <div className="text-left">
            <p>© {new Date().getFullYear()} MoveON Sustentabilidade LTDA. Todos os direitos reservados.</p>
            <p className="mt-1 font-mono text-[9px] text-[#F2EFE9]/40">CNPJ: 45.922.012/0001-89 | Atendimento focado 100% no Estado de São Paulo.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-lg transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider shrink-0"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-4 h-4" />
            Voltar ao topo
          </button>
        </div>

      </div>
    </footer>
  );
}
