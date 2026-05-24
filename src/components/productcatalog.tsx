import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { productsList } from '../data';
import { Product } from '../types';
import { Search, Sparkles, Plus, CirclePlus, Check, Filter, TreePine, PackageOpen } from 'lucide-react';

interface ProductCatalogProps {
  onAddToQuote: (product: Product) => void;
  quoteQuantities: { [key: string]: number };
}

export default function ProductCatalog({ onAddToQuote, quoteQuantities }: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedFeedbackId, setAddedFeedbackId] = useState<string | null>(null);

  // Categories translation and helper
  const categories = [
    { id: 'all', label: 'Todos os Itens' },
    { id: 'drinkware', label: 'Copos & Térmicos' },
    { id: 'apparel', label: 'Bolsas & Mochilas' },
    { id: 'office', label: 'Escritório' },
    { id: 'lifestyle', label: 'Kits Corporativos' },
  ];

  const filteredProducts = useMemo(() => {
    return productsList.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.material.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleAddClick = (product: Product) => {
    onAddToQuote(product);
    setAddedFeedbackId(product.id);
    setTimeout(() => {
      setAddedFeedbackId(null);
    }, 1500);
  };

  return (
    <section id="produtos" className="py-24 bg-art-bg relative border-b border-art-accent/40">
      {/* Decorative floral/eco warm accents */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-art-accent/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <span className="text-[10px] font-mono tracking-widest text-[#1B4332] uppercase font-bold bg-art-accent/30 px-3 py-1 rounded-full">
              LINHA SUSTENTÁVEL COMPLETA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-art-primary mt-4 tracking-tight font-serif">
              Materiais Reciclados & Duráveis
            </h2>
            <p className="text-art-ink/85 font-light text-xs sm:text-sm mt-3 max-w-xl">
              Nossa linha de produtos combina sofisticação com materiais reaproveitados. Clique em "Adicionar" para testar o simulador financeiro e ambiental.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-art-primary" />
            <input
              type="text"
              placeholder="Pesquisar produto ou material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-art-accent rounded-lg text-xs text-art-ink placeholder-art-ink/40 focus:outline-none focus:border-art-primary focus:ring-1 focus:ring-art-primary/20 transition-all shadow-sm"
              id="product-search-input"
            />
          </div>
        </div>

        {/* Filter Toolbar / Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-art-accent/30">
          <Filter className="w-3.5 h-3.5 text-art-primary shrink-0 hidden sm:inline mr-2" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-all uppercase tracking-wider ${
                selectedCategory === cat.id
                  ? 'bg-art-primary text-white font-bold shadow-sm'
                  : 'bg-white border border-art-accent text-art-ink/70 hover:text-art-primary hover:border-art-primary/40'
              }`}
              id={`category-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-xl border border-dashed border-art-accent">
            <p className="text-art-ink/65 text-sm">Nenhum produto encontrado correspondendo à sua busca.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const currentQty = quoteQuantities[product.id] || 0;
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl border border-art-accent/80 p-6 flex flex-col justify-between hover:border-art-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  id={`product-card-${product.id}`}
                >
                  <div>
                    {/* Upper Badges */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="text-[10px] font-mono tracking-wider font-bold text-art-primary bg-art-accent/40 border border-art-accent/60 px-2.5 py-1 rounded">
                        {product.material}
                      </span>
                      {product.savedPETCount ? (
                        <span className="text-[10px] text-[#1B4332] font-mono font-semibold flex items-center gap-1 bg-[#1B4332]/10 px-2 py-0.5 rounded border border-[#1B4332]/15">
                          ♻️ {product.savedPETCount} PETs p/ un.
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#1B4332] font-mono font-semibold flex items-center gap-1 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                          🍃 Biodegradável
                        </span>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-art-primary font-serif group-hover:text-emerald-800 transition-colors">
                      {product.name}
                    </h3>

                    {/* Detailed descriptive text */}
                    <p className="text-art-ink/80 text-xs leading-relaxed mt-2 mb-6 font-light">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing and Action row */}
                  <div className="border-t border-art-accent/30 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-art-ink/50 uppercase tracking-widest font-bold">Preço Unitário</p>
                      <p className="text-xl font-bold text-art-primary font-serif">
                        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddClick(product)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all uppercase tracking-wider flex items-center gap-1.5 cursor-pointer ${
                        currentQty > 0
                          ? 'bg-art-accent/40 border border-art-accent text-art-primary hover:bg-art-accent/60'
                          : 'bg-art-primary hover:bg-emerald-900 text-white'
                      }`}
                      id={`add-product-btn-${product.id}`}
                    >
                      {addedFeedbackId === product.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-art-primary font-bold" />
                          <span>Adicionado!</span>
                        </>
                      ) : (
                        <>
                          {currentQty > 0 ? (
                            <>
                              <CirclePlus className="w-3.5 h-3.5" />
                              <span>Na lista ({currentQty})</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Adicionar</span>
                            </>
                          )}
                        </>
                      )}
                    </button>
                  </div>

                  {/* Item counter ribbon on card background */}
                  {currentQty > 0 && (
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                      <div className="absolute top-2 right-[-24px] bg-art-primary text-[9px] font-bold text-art-accent text-center py-0.5 w-16 transform rotate-45 border-b border-art-accent/30 shadow-sm">
                        {currentQty}x
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
