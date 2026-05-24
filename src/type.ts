export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  category: 'office' | 'drinkware' | 'apparel' | 'lifestyle';
  description: string;
  savedPETCount?: number; // Estimated equivalent PET bottles saved
  savedCO2g?: number;     // Estimated grams of CO2 saved compared to standard alternative
}

export interface SPCity {
  name: string;
  distanceKm: number; // Distance from production center (e.g., Jundiaí/SP)
  transitDays: number;
  co2SavedKg: number; // CO2 emission saved due to direct routing & optimized fleet
  region: 'Capital/Grande SP' | 'Interior' | 'Litoral';
}

export interface CircularStep {
  number: string;
  title: string;
  description: string;
}
