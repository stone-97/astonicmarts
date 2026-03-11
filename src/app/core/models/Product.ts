export interface Product {

  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;

  images: string[];

  sizes?: (number | string)[];   // allow shoe sizes and clothing sizes
  colors?: string[];


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
}