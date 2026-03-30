export interface ProductVariation {
  size?: string;
  color?: string;
  price: number;
  inStock: boolean;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;

  images: string[];
  group?: string;

  // 👇 For simple products (clothes, shoes)
  sizes?: (number | string)[];
  colors?: string[];

  // 👇 For complex products (ladders, machines, etc.)
  variations?: ProductVariation[];

  // 👇 Keep this (good for generators, pumps, etc.)
  powerOptions?: {
    power: string;
    inStock: boolean;
  }[];

  description: string;
  specification: string;
  features: string;

  jumiaLink?: string;
  kongaLink?: string;

  model?: string;
  flowRate?: string;
  pressure?: string;
  power?: string;

  // 👇 Pricing extras
  oldPrice?: number;   // for discounts
  inStock?: boolean;

  // 👇 UI control
  showSimilar?: boolean;
}