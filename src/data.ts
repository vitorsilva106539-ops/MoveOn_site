import { Product, SPCity, CircularStep } from './types';

export const productsList: Product[] = [
  {
    id: 'garrafa_termica',
    name: 'Garrafa térmica',
    material: 'PET reciclado / inox',
    price: 50.00,
    category: 'drinkware',
    description: 'Conservação térmica excepcional combinada com isolamento de parede dupla. Corpo externo revestido em PET reciclado de alta durabilidade e interno em inox escovado.',
    savedPETCount: 8,
    savedCO2g: 450
  },
  {
    id: 'copo_termico',
    name: 'Copo térmico',
    material: 'Inox reciclável / bambu',
    price: 30.00,
    category: 'drinkware',
    description: 'Design escandinavo com excelente empunhadura e tampa antivazamento. Combina o inox reciclável higiênico com detalhes em bambu natural de fonte autossustentável.',
    savedPETCount: 0,
    savedCO2g: 220
  },
  {
    id: 'ecobag',
    name: 'Ecobag',
    material: 'Tecido reciclado',
    price: 45.00,
    category: 'apparel',
    description: 'Sacola ecológica espaçosa e ultra resistente. Confeccionada inteiramente com fibras provenientes do reaproveitamento de sobras de tecidos industriais.',
    savedPETCount: 4,
    savedCO2g: 680
  },
  {
    id: 'kit_corporativo',
    name: 'Kit sustentável corporativo',
    price: 150.00,
    material: 'Mix reciclável',
    category: 'lifestyle',
    description: 'A solução perfeita para presentear seus colaboradores e clientes. Inclui Garrafa Térmica, Caderno e Canudo Reutilizável personalizados, acondicionados em embalagem de fibra ecológica.',
    savedPETCount: 12,
    savedCO2g: 1350
  },
  {
    id: 'mochila_sustentavel',
    name: 'Mochila sustentável',
    material: 'PET reciclado',
    price: 90.00,
    category: 'apparel',
    description: 'Compartimento acolchoado para notebook, bolsos organizadores e alças ergonômicas. Produzida inteiramente a partir da reciclagem de garrafas plásticas pós-consumo.',
    savedPETCount: 22,
    savedCO2g: 1800
  },
  {
    id: 'necessaire_ecologica',
    name: 'Necessaire ecológica',
    material: 'Lona reciclada',
    price: 45.00,
    category: 'apparel',
    description: 'Tamanho perfeito para organizar seus itens de cuidado pessoal em viagens. Feito de lona de algodão reciclada reforçada com fecho zíper durável de metal.',
    savedPETCount: 3,
    savedCO2g: 410
  },
  {
    id: 'caderno_reciclado',
    name: 'Caderno reciclado',
    material: 'Papel reciclado',
    price: 35.00,
    category: 'office',
    description: '90 folhas pautadas de papel 100% reciclado pós-consumo com capa dura revestida de fibras naturais. Ideal para suas anotações corporativas diárias.',
    savedPETCount: 0,
    savedCO2g: 310
  },
  {
    id: 'canudo_reutilizavel',
    name: 'Canudo reutilizável',
    material: 'Alumínio / inox reciclável',
    price: 20.00,
    category: 'drinkware',
    description: 'Kit contendo 2 canudos (curvo e reto) produzidos em inox premium, acompanhados de escova de limpeza de cerdas naturais e estojo protetor de algodão cru.',
    savedPETCount: 0,
    savedCO2g: 90
  },
  {
    id: 'organizador_sustentavel',
    name: 'Organizador sustentável',
    material: 'Plástico reciclado',
    price: 70.00,
    category: 'office',
    description: 'Mantenha sua mesa de trabalho impecável. Organizador multifuncional com divisórias inteligentes para canetas, papéis e celular, feito de plástico industrial reciclado.',
    savedPETCount: 14,
    savedCO2g: 850
  }
];

// Our central hub is Jundiaí/SP (strategically localized near major highways for SP and Interior)
export const citiesList: SPCity[] = [
  { name: 'São Paulo (Capital)', distanceKm: 58, transitDays: 1, co2SavedKg: 1.8, region: 'Capital/Grande SP' },
  { name: 'Campinas', distanceKm: 42, transitDays: 1, co2SavedKg: 1.4, region: 'Interior' },
  { name: 'Sorocaba', distanceKm: 85, transitDays: 1, co2SavedKg: 2.3, region: 'Interior' },
  { name: 'Santos', distanceKm: 135, transitDays: 1, co2SavedKg: 3.5, region: 'Litoral' },
  { name: 'São José dos Campos', distanceKm: 151, transitDays: 1, co2SavedKg: 3.9, region: 'Interior' },
  { name: 'Piracicaba', distanceKm: 110, transitDays: 1, co2SavedKg: 2.8, region: 'Interior' },
  { name: 'Ribeirão Preto', distanceKm: 265, transitDays: 2, co2SavedKg: 6.2, region: 'Interior' },
  { name: 'Bauru', distanceKm: 280, transitDays: 2, co2SavedKg: 6.8, region: 'Interior' },
  { name: 'São José do Rio Preto', distanceKm: 395, transitDays: 2, co2SavedKg: 8.9, region: 'Interior' },
  { name: 'Presidente Prudente', distanceKm: 512, transitDays: 2.5, co2SavedKg: 11.4, region: 'Interior' },
];

export const circularSteps: CircularStep[] = [
  {
    number: '01',
    title: 'Recolhimento e Triagem',
    description: 'Coletamos plásticos PET, retalhos têxteis, lona e metais descartados de parceiros locais, promovendo a limpeza de resíduos existentes.'
  },
  {
    number: '02',
    title: 'Produção Própria',
    description: 'Processamos os materiais internamente em nosso centro industrial ecológico. Sem terceirizações ocultas, garantindo 100% de controle de qualidade.'
  },
  {
    number: '03',
    title: 'Estoque Carbono Zero',
    description: 'Armazenamos os lotes com eficiência de espaço e iluminação natural, prontos para faturamento corporativo ou pedidos em escala.'
  },
  {
    number: '04',
    title: 'Entrega Direta SP',
    description: 'Utilizamos nossa frota própria dedicada para fazer as entregas de ponta a ponta sem intermediários, minimizando distâncias e resíduos de embalagens.'
  }
];
