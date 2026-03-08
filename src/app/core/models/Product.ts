export interface Product {

  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;

  images: string[];

  sizes?: (number | string)[];   // allow shoe sizes and clothing sizes
  colors?: string[];

  description: string;
  specification: string;
  features: string;

}