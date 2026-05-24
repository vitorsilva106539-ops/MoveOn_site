import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  ExternalLink, 
  HelpCircle, 
  TrendingUp,
  Package,
  FileSpreadsheet,
  Users,
  Calendar,
  DollarSign,
  Activity,
  Sparkles,
  Layers
} from 'lucide-react';

interface QuestionInsight {
  id: string;
  question: string;
  category: 'Produção' | 'Vendas' | 'Faturamento' | 'Correlação';
  tip: string;
  icon: React.ReactNode;
}

export default function DashboardSection() {
  const dashboardUrl = "https://datastudio.google.com/reporting/002a0a4a-053c-413e-9e58-d296e88a9e82";

  // List of the 10 questions and helpful contextual tips for analyzing the dashboard
  const questions: QuestionInsight[] = [
    {
      id: "q1",
      question: "Qual foi o total de produtos produzidos pela empresa no período analisado?",
      category: "Produção",
      tip: "Verifique o scorecard de volume acumulado ou o topo da seção de manufatura no relatório do Looker Studio.",
      icon: <Package className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q2",
      question: "Qual produto apresentou o maior volume de produção?",
      category: "Produção",
      tip: "Observe o gráfico de barras verticais do ranking de produção por tipo de item.",
      icon: <TrendingUp className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q3",
      question: "Qual matéria-prima reciclada foi mais utilizada na fabricação dos produtos?",
      category: "Produção",
      tip: "Consulte o gráfico circular de balanço ecológico para identificar a maior fatia de insumos (PET reciclado, polímeros).",
      icon: <Activity className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q4",
      question: "Quais colaboradores tiveram o melhor desempenho produtivo?",
      category: "Produção",
      tip: "Confira a tabela individual de produtividade por operador com ordenação descrescente de itens finalizados.",
      icon: <Users className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q5",
      question: "Em quais meses a produção apresentou maior volume?",
      category: "Produção",
      tip: "Analise a linha temporal de produção acumulada mês a mês para encontrar os picos sazonais.",
      icon: <Calendar className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q6",
      question: "Qual foi o total de produtos vendidos pela empresa?",
      category: "Vendas",
      tip: "Localize o totalizador métrico de vendas concluídas nos indicadores de faturamento comercial.",
      icon: <FileSpreadsheet className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q7",
      question: "Qual produto gerou o maior faturamento nas vendas?",
      category: "Vendas",
      tip: "Cruze a quantidade vendida de cada produto com a receita total gerada correspondente na matriz de produtos.",
      icon: <DollarSign className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q8",
      question: "Quais cidades concentraram o maior número de vendas realizadas?",
      category: "Vendas",
      tip: "Análise o mapa de calor regional ou filtre a tabela de distribuição geográfica do estado de São Paulo.",
      icon: <TrendingUp className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q9",
      question: "Qual foi o faturamento total obtido pela empresa no período analisado?",
      category: "Faturamento",
      tip: "Verifique o painel financeiro principal, observando a métrica consolidada de receita geral líquida.",
      icon: <DollarSign className="w-5 h-5 text-art-primary" />
    },
    {
      id: "q10",
      question: "Existe relação entre os produtos mais produzidos e os mais vendidos no dashboard?",
      category: "Correlação",
      tip: "Compare os gráficos de fabricação de mercadorias com a curva de expedição para aferir a correspondência mercadológica.",
      icon: <Sparkles className="w-5 h-5 text-art-primary" />
    }
  ];

  const [activeTab, setActiveTab] = useState<'Todos' | 'Produção' | 'Vendas' | 'Faturamento' | 'Correlação'>('Todos');

  const categories = ['Todos', 'Produção', 'Vendas', 'Faturamento', 'Correlação'] as const;

  const filteredQuestions = activeTab === 'Todos' 
    ? questions 
    : questions.filter(q => q.category === activeTab);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Produção': return 'bg-emerald-50 text-emerald-800 border-emerald-150';
      case 'Vendas': return 'bg-blue-50 text-blue-800 border-blue-150';
      case 'Faturamento': return 'bg-amber-50 text-amber-800 border-amber-150';
      case 'Correlação': return 'bg-purple-50 text-purple-800 border-purple-150';
      default: return 'bg-neutral-50 text-neutral-800 border-neutral-150';
    }
  };

  return (
    <section id="dashboard" className="py-24 bg-[#F9F7F2] relative border-t border-art-accent/40">
      {/* Decorative Editorial Background Ornaments */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-art-accent/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-art-primary/5 blur-[140px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header Block representing standard artisanal style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-art-primary uppercase font-bold bg-art-accent/30 px-3 py-1 rounded-full">
            BI & INTELIGÊNCIA OPERACIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-art-primary mt-4 tracking-tight font-serif">
            Dashboard Corporativo de Performance
          </h2>
          <p className="text-art-ink/80 text-sm mt-3 leading-relaxed font-sans font-light">
            Desenvolvemos perguntas diretivas para guiar sua análise no relatório de BI do Looker Studio. Use o botão abaixo para abrir o dashboard em tela cheia e explorar todos os indicadores interativamente.
          </p>
        </div>

        {/* Prominent Call to Action Button to Open Dashboard directly */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a
            href={dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-art-primary hover:bg-[#1B4332] active:bg-art-primary text-white text-xs font-bold rounded-lg tracking-widest uppercase transition-all shadow-md group border border-transparent hover:scale-[1.01]"
            id="open-dashboard-btn"
          >
            <BarChart3 className="w-4 h-4 text-art-accent" />
            <span>Acessar Dashboard Corporativo</span>
            <ExternalLink className="w-3.5 h-3.5 text-art-accent/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Segmented Filter Control */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-art-accent/30 p-2 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === cat 
                  ? 'bg-art-primary text-white shadow-sm' 
                  : 'text-art-primary hover:bg-art-accent/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Elegant Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredQuestions.map((q, idx) => (
            <div 
              key={q.id}
              className="bg-white border border-art-accent/90 rounded-xl p-6 text-left shadow-sm hover:border-art-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              id={`insight-card-${q.id}`}
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-art-accent/40 flex items-center justify-center text-art-primary shrink-0">
                      {q.icon}
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#1B4332]/50 font-bold">
                      Insight {idx + 1}
                    </span>
                  </div>

                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryColor(q.category)}`}>
                    {q.category}
                  </span>
                </div>

                {/* Question */}
                <h3 className="text-sm font-bold text-art-primary font-serif italic mb-3 leading-snug">
                  "{q.question}"
                </h3>
              </div>

              {/* Practical Tip card footer */}
              <div className="mt-4 pt-4 border-t border-art-accent/30 flex gap-2.5 items-start">
                <HelpCircle className="w-4 h-4 text-[#1B4332]/60 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-art-primary/60 block mb-0.5">
                    Como encontrar no Dashboard:
                  </span>
                  <p className="text-[12px] text-art-ink/75 leading-relaxed font-light font-sans">
                    {q.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info box */}
        <div className="mt-12 p-5 bg-[#F2EFE9] border border-art-accent rounded-xl max-w-3xl mx-auto flex items-center gap-4 text-left">
          <Layers className="w-6 h-6 text-art-primary shrink-0" />
          <p className="text-xs text-art-ink/80 leading-relaxed font-sans font-light">
            <strong>Dica corporativa:</strong> Para um estudo de mercado completo, abra seu dashboard de Looker Studio, selecione os filtros temporais adequados, e utilize as dez perguntas organizadas acima para preencher seu relatório de diretoria.
          </p>
        </div>

      </div>
    </section>
  );
}
