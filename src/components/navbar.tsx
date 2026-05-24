import { useState, useEffect } from 'react';
import { Leaf, Truck, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  quoteItemCount: number;
  onNavigateToQuote: () => void;
}

export default function Navbar({ quoteItemCount, onNavigateToQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-art-primary/98 backdrop-blur-md border-b border-art-accent/30 py-3 shadow-lg text-art-bg'
          : 'bg-[#1B4332]/95 md:bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 cursor-pointer group"
          id="logo-container"
        >
          <div className="w-10 h-10 rounded-lg bg-art-accent flex items-center justify-center text-art-primary font-serif font-bold text-xl shadow-inner group-hover:bg-white transition-colors">
            <span className="tracking-tighter">M</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-white font-serif">
                Move<span className="text-art-accent font-serif italic font-normal">On</span>
              </span>
              <Leaf className="w-3.5 h-3.5 text-art-accent fill-art-accent/20" />
            </div>
            <p className="text-[9px] font-mono tracking-wider uppercase text-art-accent/80">
              Logística & Eco-produção
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-200">
          <button
            onClick={() => scrollToSection('sobre')}
            className="hover:text-art-accent transition-colors cursor-pointer"
            id="nav-sobre"
          >
            Sobre nós
          </button>
          <button
            onClick={() => scrollToSection('produtos')}
            className="hover:text-art-accent transition-colors cursor-pointer"
            id="nav-produtos"
          >
            Nossos Produtos
          </button>
          <button
            onClick={() => scrollToSection('logistica')}
            className="hover:text-art-accent transition-colors cursor-pointer"
            id="nav-logistica"
          >
            Logística SP
          </button>
          <button
            onClick={() => scrollToSection('dashboard')}
            className="hover:text-art-accent transition-colors cursor-pointer text-art-accent font-bold"
            id="nav-dashboard"
          >
            Dashboard
          </button>
          <button
            onClick={() => scrollToSection('calculadora')}
            className="hover:text-art-accent transition-colors cursor-pointer"
            id="nav-calculadora"
          >
            Simulador
          </button>
        </nav>

        {/* Action Button & Menu Toggles */}
        <div className="flex items-center gap-4">
          <button
            onClick={onNavigateToQuote}
            className="relative flex items-center gap-2 px-4.5 py-2.5 bg-art-accent hover:bg-white active:bg-art-accent text-art-primary text-xs font-bold rounded-md transition-all shadow-md hover:scale-[1.02] uppercase tracking-wider"
            id="nav-quote-btn"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Simular Cotação</span>
            {quoteItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white text-art-primary border border-art-primary rounded-full font-bold flex items-center justify-center text-[10px]">
                {quoteItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-art-accent hover:text-white hover:bg-art-primary/80 rounded-lg transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-art-primary border-b border-art-accent/20 shadow-xl px-6 py-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-left py-2.5 text-neutral-200 hover:text-art-accent font-semibold border-b border-neutral-800 uppercase tracking-widest text-[11px]"
            id="mob-nav-sobre"
          >
            Sobre nós
          </button>
          <button
            onClick={() => scrollToSection('produtos')}
            className="text-left py-2.5 text-neutral-200 hover:text-art-accent font-semibold border-b border-neutral-800 uppercase tracking-widest text-[11px]"
            id="mob-nav-produtos"
          >
            Nossos Produtos
          </button>
          <button
            onClick={() => scrollToSection('logistica')}
            className="text-left py-2.5 text-neutral-200 hover:text-art-accent font-semibold border-b border-neutral-800 uppercase tracking-widest text-[11px]"
            id="mob-nav-logistica"
          >
            Logística SP
          </button>
          <button
            onClick={() => scrollToSection('dashboard')}
            className="text-left py-2.5 text-art-accent hover:text-white font-bold border-b border-neutral-800 uppercase tracking-widest text-[11px]"
            id="mob-nav-dashboard"
          >
            Dashboard
          </button>
          <button
            onClick={() => scrollToSection('calculadora')}
            className="text-left py-2.5 text-neutral-200 hover:text-art-accent font-semibold border-b border-neutral-800 uppercase tracking-widest text-[11px]"
            id="mob-nav-calculadora"
          >
            Simulador de Impacto
          </button>
        </div>
      )}
    </header>
  );
}
