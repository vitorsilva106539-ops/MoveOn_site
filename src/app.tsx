import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductCatalog from './components/ProductCatalog';
import LogisticsHub from './components/LogisticsHub';
import DashboardSection from './components/DashboardSection';
import QuoteSimulator from './components/QuoteSimulator';
import Footer from './components/Footer';
import { Product } from './types';

export default function App() {
  // Global quote cart state
  const [quoteQuantities, setQuoteQuantities] = useState<{ [key: string]: number }>({});

  const quoteItemCount = Object.keys(quoteQuantities).reduce((acc, currentKey) => acc + (quoteQuantities[currentKey] || 0), 0);

  const handleAddToQuote = (product: Product) => {
    setQuoteQuantities((prev) => {
      const currentQty = prev[product.id] || 0;
      return {
        ...prev,
        [product.id]: currentQty + 1,
      };
    });
  };

  const handleUpdateQty = (productId: string, newQty: number) => {
    setQuoteQuantities((prev) => {
      const updated = { ...prev };
      if (newQty <= 0) {
        delete updated[productId];
      } else {
        updated[productId] = newQty;
      }
      return updated;
    });
  };

  const handleClearQuote = () => {
    setQuoteQuantities({});
  };

  const handleNavigateToQuote = () => {
    const element = document.getElementById('calculadora');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-emerald-500 selection:text-neutral-950 scroll-smooth">
      <Navbar
        quoteItemCount={quoteItemCount}
        onNavigateToQuote={handleNavigateToQuote}
      />
      
      <main>
        {/* Animated Hero Section with main value definition */}
        <Hero />

        {/* Circular Economy details and internal production */}
        <AboutSection />

        {/* Filterable Products Showcase */}
        <ProductCatalog
          onAddToQuote={handleAddToQuote}
          quoteQuantities={quoteQuantities}
        />

        {/* Direct Logistics with SP Route simulation */}
        <LogisticsHub />

        {/* Corporate Looker Studio Dashboard & Insights */}
        <DashboardSection />

        {/* Dynamic environmental & pricing quotation machine */}
        <QuoteSimulator
          quoteQuantities={quoteQuantities}
          onUpdateQty={handleUpdateQty}
          onClearQuote={handleClearQuote}
        />
      </main>

      {/* Structured Footer with address, certifications and details */}
      <Footer />
    </div>
  );
}
