import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchQuerySubject = new BehaviorSubject<string>('');
  currentSearchQuery$ = this.searchQuerySubject.asObservable();

  //  store products inside service for now
 private products: Product[] = [
  {
    id: 1,
    name: 'Safety Jogger Shield Anti Cut Glove',
    category: 'Safety PPE',
    brand: 'Total',
    price: 12000,
    images: ['assets/img/total 3 in 1.jpg'],
    description: 'The Total 3-in-1 Combo Kit TOSLI241198 is a versatile professional toolset designed for drilling, fastening, and cutting applications. Built with durable components and high-performance motors, this combo kit is ideal for technicians, installers, and workshop professionals who need reliable tools for multiple tasks. Compact, powerful, and efficient for both home and industrial use.',
    specification:'',
    features: ''
  },
  
  {
    id: 2,
    name: 'kong hand gloves',
    category: 'Power Tools',
    brand: 'Total',
    price: 42000,
    images: ['assets/img/dakar.jpg3.jpg'],
    description: 'The Total Angle Grinder is a powerful and durable cutting and grinding tool suitable for metalwork, construction, and fabrication jobs. It features a high-speed motor, ergonomic grip, and strong protective guard for safe operation. Ideal for professionals and DIY users who require precision, strength, and long-lasting performance.',
      specification: '',
      features:''
  },
 {
  id: 3,
  name: 'Mechanix Wear Original Work Gloves',
  category: 'Hand-glove',
  brand: 'Mechanix',
  price: 42000,
  images: ['assets/img/hand gloves/mechanix gloves.webp'],
  description: 'Mechanix Wear industrial hand gloves are designed for professionals who require durability, flexibility, and high-performance hand protection. These gloves provide excellent grip and impact resistance, making them ideal for mechanical work, construction, automotive repairs, and heavy-duty industrial tasks.',
  specification: `
    - Material: Synthetic Leather & Breathable TrekDry Fabric
    - Palm Type: Reinforced Synthetic Leather
    - Closure Type: Adjustable Thermoplastic Rubber (TPR) Wrist Strap
    - Fit: Snug Performance Fit
    - Usage: Mechanical, Construction, Industrial Handling
  `,
  features: `
    - Durable synthetic leather palm for enhanced grip
    - Breathable fabric keeps hands cool during long use
    - Secure adjustable wrist closure
    - Flexible design for precision tasks
    - Machine washable
    - Suitable for heavy-duty and general-purpose work
  `
},
  {
    id: 4,
    name: 'rough coated gloves',
    category: 'Hand-glove',
    brand: 'Ansell',
    price: 42000,
    images: ['assets/img/kong-original-impact-gloves.jpg'],
    description: 'The Ansell industrial safety glove delivers reliable protection for heavy-duty tasks. Engineered for durability and performance, it shields hands from abrasions, cuts, and rough materials while maintaining dexterity. Suitable for factory workers, technicians, engineers, and anyone handling tools or machinery.',
    specification:'',
     features: ''
  },
  {
    id: 5,
    name: 'cotton hand gloves',
    category: 'Hand-glove',
    brand: 'Ansell',
    price: 42000,
    images: ['assets/img/SAFETY ANTI CUT.webp'],
    description: 'The Ansell industrial safety glove delivers reliable protection for heavy-duty tasks. Engineered for durability and performance, it shields hands from abrasions, cuts, and rough materials while maintaining dexterity. Suitable for factory workers, technicians, engineers, and anyone handling tools or machinery.',
    specification:'',
     features: ''
  },

 {
  id: 6,
  name: 'ROKK Smooth Coated Industrial Hand Gloves',
  category: 'Hand-glove',
  brand: 'ROKK',
  price: 42000,

  images: [
    'assets/img/SAFETY ANTI CUT.webp'
  ],

  description: 'ROKK smooth coated industrial hand gloves designed to provide reliable hand protection during mechanical and industrial tasks. The gloves feature a strong knitted liner with a smooth protective coating that improves grip and durability while maintaining flexibility for precise handling.',

  specification: `
  - Glove Type: Coated Industrial Safety Glove
  - Liner Material: Polyester / Nylon Knit
  - Coating: Smooth Latex / Nitrile
  - Grip Type: Anti-slip Palm Coating
  - Cuff Type: Elastic Knit Wrist
  - Application: Mechanical Work, Warehousing, Construction
  `,

  features: `
  - Smooth coated palm for improved grip
  - Flexible design for easy hand movement
  - Breathable knitted liner for comfort
  - Good resistance to abrasion
  - Lightweight and durable
  - Suitable for industrial handling tasks
  `
},
  {
    id: 7,
    name: 'Cut Resistant Glove Level 9 Stainless Steel Metal Mesh Butcher Safety , 1-Pack',
    category: 'Hand-glove',
    brand: 'Ansell',
    price: 42000,
    images: ['assets/img/kong-original-impact-gloves.jpg'],
    description: 'The Ansell industrial safety glove delivers reliable protection for heavy-duty tasks. Engineered for durability and performance, it shields hands from abrasions, cuts, and rough materials while maintaining dexterity. Suitable for factory workers, technicians, engineers, and anyone handling tools or machinery.',
    specification:'',
     features: ''
  },


  // safety boots
{
  id: 8,
  name: 'American Steel Safety Boot (Ankle) – Steel Toe Industrial Work Boot',
  category: 'Safety Boot (Ankle)',
  brand: 'American Steel',
  price: 85000,
  images: ['assets/img/-American-Safety-Boot.jpg'],
  description: 'American Steel ankle safety boot is designed to deliver reliable foot protection in tough industrial environments. Built with a reinforced steel toe cap and durable leather upper, the boot provides protection against heavy impacts, sharp objects, and slippery surfaces. Ideal for construction sites, factories, warehouses, and engineering work.',
  specification: `
    - Toe Protection: Reinforced Steel Toe Cap
    - Boot Type: Ankle Safety Boot
    - Upper Material: Premium Industrial Leather
    - Outsole Material: Heavy-Duty Rubber
    - Sole Type: Anti-Slip & Oil Resistant
    - Closure Type: Lace-Up
    - Application: Construction, Factory, Mechanical Work
  `,
  features: `
    - Heavy-duty steel toe protection
    - Slip-resistant rubber outsole
    - Oil and abrasion resistant sole
    - Comfortable inner padding for long work hours
    - Durable leather upper for harsh environments
    - Shock-absorbing heel support
  `
},
{
  id: 9,
  name: 'Premium Safety Boot (Ankle) Composite Toe Waterproof - Brown',
  category: 'Safety Boot (Ankle)',
  brand: 'TimberPro',
  price: 92000,
  images: ['assets/img/FLOWS3 SJ.webp'],
  description: 'Premium ankle safety boot designed for industrial and construction environments. Built with a lightweight composite toe cap and waterproof upper, it offers protection, durability, and all-day comfort for demanding job sites.',
  specification: `
    - Toe Type: Composite Toe
    - Boot Height: Ankle
    - Sole: Anti-slip Rubber Sole
    - Upper Material: Waterproof Leather
    - Color: Brown
    - Closure Type: Lace-up
  `,
  features: `
    - Lightweight composite toe protection
    - Waterproof upper material
    - Slip-resistant outsole
    - Oil and chemical resistant sole
    - Cushioned insole for comfort
    - Durable reinforced stitching
  `
},



{
  id: 10,
  name: 'Safety Jogger BESTBOY Steel Toe Safety Boot',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 95000,
  images: ['assets/img/safety joggers/bestboy safety joggers.webp',
     '/assets/img/safety joggers/MODULO S1PS Low Safety jogger.jpg3.jpg'],
  description: 'Safety Jogger BESTBOY safety boot is a reliable industrial footwear designed for heavy-duty work environments. It features a steel toe cap and durable leather upper to protect workers from impact, compression, and workplace hazards. Ideal for construction, engineering, and warehouse operations.',
  specification: `
    - Safety Standard: S3
    - Toe Protection: Steel Toe Cap
    - Upper Material: Leather
    - Sole: PU/PU Anti-Slip Sole
    - Midsole: Steel Plate
    - Closure: Lace-up
  `,
  features: `
    - Impact-resistant steel toe protection
    - Anti-slip PU outsole
    - Oil and fuel resistant sole
    - Durable leather upper
    - Comfortable inner lining
  `
},

{
  id: 11,
  name: ' MODULO S1PS Low Safety jogger',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 120000,
  images: ['assets/img/safety joggers/MODULO S1PS Low Safety jogger2.jpg'],
   sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],
  description: 'The Safety Jogger MODULO S1PS low safety shoe combines lightweight comfort with modern safety technology. Designed for professionals working long hours, it offers superior breathability, anti-slip performance, and reinforced toe protection.',
  specification: `
    - Safety Standard: S1PS
    - Toe Cap: Composite Toe
    - Upper Material: Breathable Textile
    - Midsole: Anti-Puncture Textile
    - Sole: PU Anti-Slip Outsole
    - Closure: Lace-up
  `,
  features: `
    - Lightweight ergonomic design
    - Breathable upper for ventilation
    - Slip resistant outsole
    - Shock absorbing heel
    - Anti-puncture protection
  `
},

{
  id: 13,
  name: 'Safety Jogger BALTOR Safety Boot',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 105000,
  images: ['assets/img/safety joggers/baltor safety jogger.webp'],
     sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],
  
  description: 'Safety Jogger BALTOR safety boot is designed to offer superior protection and durability for demanding workplaces. Its reinforced construction and anti-slip sole provide excellent stability and protection on tough terrains.',
  specification: `
    - Safety Standard: S3
    - Toe Protection: Steel Toe
    - Upper Material: Leather
    - Midsole: Steel Plate
    - Sole: PU/Rubber Anti-slip Sole
    - Closure: Lace-up
  `,
  features: `
    - Strong steel toe protection
    - Slip resistant rubber sole
    - Durable leather construction
    - Oil resistant outsole
    - Shock absorbing heel
  `
},
{
  id: 28,
  name: 'X1110 S3S Safety Shoe',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 85000,

  images: [
    'assets/img/safety joggers/x1110-s3s-safety-shoe.jpg',
    
  ],

  description: 'Heavy-duty industrial safety shoe designed to provide maximum foot protection in demanding work environments such as construction, factories, warehouses and engineering works.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Orange'
  ],

  specification: `
  - Model: X1110
  - Safety Rating: S3S
  - Toe Protection: Steel Toe Cap
  - Midsole: Puncture Resistant
  - Upper Material: Leather
  - Outsole: Anti-slip PU/Rubber
  - Standard: EN ISO 20345:2022
  `,

  features: `
  - Steel toe impact protection
  - Anti-slip industrial sole
  - Oil resistant outsole
  - Shock absorbing heel
  - Water resistant upper
  - Comfortable for long working hours
  `
},
{
  id: 29,
  name: 'Safety Jogger MODULO LE S3S LOW TG Safety Boot',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 85000,

  images: [
    'assets/img/safety joggers/modulo s3s low sj.jpg',
  ],

  description: 'Premium industrial safety boot designed for professionals working in construction sites, factories, warehouses, engineering environments and other high-risk workplaces. The MODULO LE S3S LOW TG offers superior protection, durability and comfort for long working hours.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Grey'
  ],

  specification: `
  - Model: MODULO LE S3S LOW TG
  - Safety Rating: S3S
  - Toe Protection: Composite Toe Cap
  - Midsole: Puncture Resistant Textile Midsole
  - Upper Material: Premium Leather
  - Outsole: PU / Rubber Anti-Slip Sole
  - Water Resistance: Water Resistant Upper
  - Standard: EN ISO 20345:2022
  `,

  features: `
  - Lightweight composite toe protection
  - Anti-slip SRC certified outsole
  - Oil and fuel resistant sole
  - Shock absorbing heel for comfort
  - Breathable inner lining
  - Durable leather upper
  - Designed for long hours of industrial use
  `
},
{
  id: 30,
  name: 'Safety Jogger MODULO LE S3S LOW TG Safety Boot',
  category: 'Safety shoes',
  brand: 'Safety Jogger',
  price: 85000,

  images: [
    'assets/img/safety joggers/modulo s3s low sj.jpg',
  ],

  description: 'Premium industrial safety boot designed for professionals working in construction sites, factories, warehouses, engineering environments and other high-risk workplaces. The MODULO LE S3S LOW TG offers superior protection, durability and comfort for long working hours.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Grey'
  ],

  specification: `
  - Model: MODULO LE S3S LOW TG
  - Safety Rating: S3S
  - Toe Protection: Composite Toe Cap
  - Midsole: Puncture Resistant Textile Midsole
  - Upper Material: Premium Leather
  - Outsole: PU / Rubber Anti-Slip Sole
  - Water Resistance: Water Resistant Upper
  - Standard: EN ISO 20345:2022
  `,

  features: `
  - Lightweight composite toe protection
  - Anti-slip SRC certified outsole
  - Oil and fuel resistant sole
  - Shock absorbing heel for comfort
  - Breathable inner lining
  - Durable leather upper
  - Designed for long hours of industrial use
  `
},

{
  id: 31,
  name: 'Safety Jogger LIGHTSTAR S1P Safety Boot',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 72000,

  images: [
    'assets/img/safety joggers/lights1ps sj.webp',
  ],

  description: 'Lightweight and durable industrial safety boot designed for workers in warehouses, logistics operations, light construction, and general industrial environments. The LIGHTSTAR S1P provides reliable protection, comfort and breathability for long working hours.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Grey'
  ],

  specification: `
  - Model: LIGHTSTAR
  - Safety Rating: S1P
  - Toe Protection: Steel Toe Cap
  - Midsole: Puncture Resistant Steel Midsole
  - Upper Material: Breathable Textile / Synthetic
  - Outsole: PU Anti-slip Sole
  - Standard: EN ISO 20345
  `,

  features: `
  - Steel toe impact protection
  - Puncture resistant midsole
  - Lightweight design for daily work
  - Anti-slip SRC certified outsole
  - Breathable upper material
  - Energy absorbing heel
  - Ideal for warehouse and logistics work
  `
},

{
  id: 32,
  name: 'Safety Jogger LIGHTSTAR S1P Safety Boot',
  category: 'Safety shoes',
  brand: 'Safety Jogger',
  price: 72000,

  images: [
    'assets/img/safety joggers/lights1ps sj.webp',
  ],

  description: 'Lightweight and durable industrial safety boot designed for workers in warehouses, logistics operations, light construction, and general industrial environments. The LIGHTSTAR S1P provides reliable protection, comfort and breathability for long working hours.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Grey'
  ],

  specification: `
  - Model: LIGHTSTAR
  - Safety Rating: S1P
  - Toe Protection: Steel Toe Cap
  - Midsole: Puncture Resistant Steel Midsole
  - Upper Material: Breathable Textile / Synthetic
  - Outsole: PU Anti-slip Sole
  - Standard: EN ISO 20345
  `,

  features: `
  - Steel toe impact protection
  - Puncture resistant midsole
  - Lightweight design for daily work
  - Anti-slip SRC certified outsole
  - Breathable upper material
  - Energy absorbing heel
  - Ideal for warehouse and logistics work
  `
},


{
  id: 14,
  name: 'Safety Jogger ECO FITZ Lightweight Safety Shoe',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 110000,
  images: ['assets/img/safety joggers/Safety-Jogger-ECOFITZ-S1P-ESD-Safety-Shoes-Black-1.webp'],
    sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],
  description: 'Safety Jogger ECO FITZ safety shoes are designed for comfort and sustainability while providing essential workplace protection. The lightweight construction makes it suitable for long working hours in warehouses, logistics, and factories.',
  specification: `
    - Safety Standard: S1
    - Toe Protection: Steel Toe
    - Upper Material: Breathable Textile
    - Sole: PU Anti-Slip Sole
    - Weight: Lightweight Design
    - Closure: Lace-up
  `,
  features: `
    - Lightweight safety footwear
    - Breathable upper material
    - Slip resistant outsole
    - Comfortable inner cushioning
    - Ideal for warehouse and logistics work
  `
},

{
  id: 15,
  name: 'Safety Jogger AAK Industrial Safety Boot',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 102000,
  images: ['assets/img/safety joggers/aak safety jogger ash.webp'],
   sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],
  description: 'Safety Jogger AAK safety boots are built for durability and strong protection in harsh industrial environments. With a reinforced steel toe and rugged outsole, the boots protect workers from workplace hazards while maintaining comfort.',
  specification: `
    - Safety Standard: S3
    - Toe Protection: Steel Toe
    - Upper Material: Leather
    - Sole: PU/Rubber Anti-Slip
    - Midsole: Steel Plate
    - Closure: Lace-up
  `,
  features: `
    - Reinforced steel toe protection
    - Anti-slip and oil resistant outsole
    - Durable leather upper
    - Comfortable padding for long hours
    - Shock absorbing heel support
  `
},

{
  id: 16,
  name: 'Safety Jogger YUKON Waterproof Safety Boot',
  category: 'Safety Boot (Ankle)',
  brand: 'Safety Jogger',
  price: 125000,

  images: [
    'assets/img/safety joggers/yukon safety jogger.png2.png'
  ],

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],

  description: 'Safety Jogger YUKON safety boot is designed for extreme industrial environments where durability and protection are essential. It provides waterproof protection, strong grip, and reinforced steel toe safety.',

  specification: `
  - Safety Standard: S3
  - Toe Protection: Steel Toe
  - Upper Material: Waterproof Leather
  - Sole: PU/Rubber Anti-slip
  - Midsole: Steel Plate
  - Closure: Lace-up
  `,

  features: `
  - Waterproof safety boot
  - Heavy duty steel toe protection
  - Slip resistant outsole
  - Oil resistant sole
  - Durable construction for harsh environments
  `
},
{
  id: 17,
  name: 'Anti-Fog Industrial Safety Goggle Clear Lens - Adjustable Strap',
  category: 'Safety Goggle',
  brand: 'SafePro',
  price: 25000,
  images: ['assets/img/bump cap.jpg'],
  description: 'High-quality industrial safety goggles designed to protect the eyes from dust, chemical splashes, and flying particles. Ideal for construction sites, laboratories, workshops, and industrial environments.',
  specification: `
    - Lens Type: Clear Polycarbonate
    - Coating: Anti-Fog & Scratch Resistant
    - Frame Material: Flexible PVC
    - Strap Type: Adjustable Elastic Band
    - Protection: Dust & Splash Resistant
  `,
  features: `
    - Impact-resistant lens
    - Anti-fog coating for clear visibility
    - Comfortable soft frame
    - Adjustable head strap
    - Wide field of vision
    - Suitable for industrial and laboratory use

  `
},
{
  id: 18,
  name: 'Safety Jogger SAREK Anti-Fog Safety Goggles',
  category: 'Safety Goggle',
  brand: 'Safety Jogger',
  price: 32000,
  images: ['assets/img/safety-jogger-sarek.jpg'],
  description: 'Safety Jogger SAREK anti-fog safety goggles designed for maximum eye protection in industrial, laboratory, and construction environments. Provides excellent visibility and comfort during extended use.',
  specification: `
    - Lens Material: Polycarbonate
    - Lens Coating: Anti-Fog & Anti-Scratch
    - Frame Material: Soft PVC
    - Ventilation: Indirect Vent System
    - Strap Type: Adjustable Elastic Headband
    - Standard: EN 166 Certified
  `,
  features: `
    - High-impact resistant lens
    - Advanced anti-fog technology
    - Wide panoramic field of vision
    - Comfortable and lightweight design
    - Secure adjustable head strap
    - Suitable for construction, lab, and industrial work
  `
},

{
  id: 19,
  name: 'Total 2-in-1 Safety Combo Kit – Helmet & Safety Goggle Set',
  category: 'Combo Kits',
  brand: 'TOTAL Tools',
  price: 58000,
  images: ['assets/img/combo.jpg'],
  description: 'Total 2-in-1 industrial safety combo kit including a high-impact safety helmet and anti-fog protective goggles. Designed for construction sites, factory work, and general industrial use.',
  specification: `
    - Helmet Material: High-Density Polyethylene (HDPE)
    - Helmet Suspension: 6-Point Adjustable Harness
    - Goggle Lens: Clear Polycarbonate
    - Goggle Coating: Anti-Fog & Scratch Resistant
    - Strap Type: Adjustable Elastic Band
    - Application: Construction & Industrial Safety
  `,
  features: `
    - Complete head and eye protection in one package
    - Impact-resistant safety helmet
    - Anti-fog clear visibility goggles
    - Lightweight and comfortable design
    - Adjustable fit for different head sizes
    - Ideal for construction and workshop use
  `
},

{
  id: 28,
  name: 'X1110 S3S Safety Shoe',
  category: 'safety shoes',
  brand: 'Safety Jogger',
  price: 85000,

  images: [
    'assets/img/safety joggers/x1110-s3s-safety-shoe.jpg',
    
  ],

  description: 'Heavy-duty industrial safety shoe designed to provide maximum foot protection in demanding work environments such as construction, factories, warehouses and engineering works.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Orange'
  ],

  specification: `
  - Model: X1110
  - Safety Rating: S3S
  - Toe Protection: Steel Toe Cap
  - Midsole: Puncture Resistant
  - Upper Material: Leather
  - Outsole: Anti-slip PU/Rubber
  - Standard: EN ISO 20345:2022
  `,

  features: `
  - Steel toe impact protection
  - Anti-slip industrial sole
  - Oil resistant outsole
  - Shock absorbing heel
  - Water resistant upper
  - Comfortable for long working hours
  `
},
// lanyards
{
  id: 20,
  name: 'Workman Full Body Safety Harness Belt with Lanyard',
  category: 'Safety Harness & Lanyards',
  brand: 'Workman',
  price: 58000,
  images: [''],
  description: 'Workman full body safety harness belt designed to provide maximum fall protection for workers operating at heights. Built with strong polyester webbing and reinforced stitching, this harness ensures safety, comfort, and durability for construction, roofing, scaffolding, and industrial maintenance tasks.',
  specification: `
    - Material: High-Strength Polyester Webbing
    - D-Ring: Dorsal Steel D-Ring (Back Attachment)
    - Lanyard Type: Shock Absorbing Lanyard
    - Buckle Type: Adjustable Metal Buckles
    - Weight Capacity: Up to 100kg - 140kg
    - Application: Construction, Roofing, Tower Climbing
  `,
  features: `
    - Full body fall arrest protection
    - Heavy-duty steel D-ring for secure attachment
    - Adjustable straps for universal fit
    - Reinforced stitching for extra durability
    - Comfortable design for extended wear
    - Suitable for high-rise and industrial work
  `
},



// fall arrestors
// {
//   id: 21,
//   name: '15m Fall Arrester Wire Rope Safety Equipment Falling Protector',
//   category: 'Fall Arrestor',
//   brand: 'Generic',
//   price: 120000,
//   images: ['assets/img/belt/fall-arrestor-15m.jpg'],
//   description: '15 meter retractable fall arrester designed to protect workers operating at height. This safety device uses a high-strength galvanized steel wire rope with an automatic locking mechanism that instantly stops a fall. It is widely used in construction, scaffolding, tower climbing, roofing, and industrial maintenance where reliable fall protection is required.',
//   specification: `
//     - Cable Length: 15 Meters
//     - Cable Material: Galvanized Steel Wire Rope
//     - Cable Diameter: 4-5 mm
//     - Housing Material: High Strength Polymer / Alloy
//     - Hook Type: Heavy Duty Steel Snap Hook
//     - Locking System: Automatic Fall Arrest Lock
//     - Weight Capacity: Up to 140kg
//     - Application: Construction, Tower Climbing, Industrial Work
//   `,
//   features: `
//     - Automatic fall arrest locking system
//     - Durable galvanized steel wire rope
//     - Heavy duty snap hook connector
//     - High impact resistant casing
//     - Smooth retractable cable mechanism
//     - Reliable protection for working at heights
//   `
// }

// eye google

{
  id: 22,
  name: 'Safety Jogger TSAVO Protective Safety Goggle',
  category: 'Safety Goggle',
  brand: 'Safety Jogger',
  price: 32000,
  images: ['assets/img/safety eye google/TSAVO safety jogger google.webp'],
  description: 'Safety Jogger TSAVO protective safety goggles designed to provide reliable eye protection in industrial, laboratory, and construction environments. Built with a strong polycarbonate lens and anti-fog technology, these goggles ensure clear vision and comfort during extended work periods.',
  specification: `
    - Lens Material: High Impact Polycarbonate
    - Lens Type: Clear Protective Lens
    - Lens Coating: Anti-Fog & Scratch Resistant
    - Frame Material: Flexible PVC
    - Ventilation: Indirect Ventilation System
    - Strap Type: Adjustable Elastic Head Strap
    - Certification: EN166 Safety Standard
  `,
  features: `
    - Strong impact-resistant polycarbonate lens
    - Anti-fog coating for clear visibility
    - Scratch-resistant protective surface
    - Comfortable soft frame design
    - Adjustable elastic strap for secure fit
    - Wide field of vision for better protection
    - Suitable for construction, factory, and laboratory work
  `
},

{
  id: 23,
  name: 'Safety Jogger VIRUNGA Cover Protective Safety Goggle',
  category: 'Safety Goggle',
  brand: 'Safety Jogger',
  price: 34000,
  images: ['assets/img/safety eye google/VIRUNGA SJ.webp3.webp'],
  description: 'Safety Jogger VIRUNGA Cover protective goggles designed to provide full eye protection in hazardous working environments. These goggles are built with a durable polycarbonate lens that protects against dust, flying particles, and chemical splashes while maintaining excellent visibility and comfort.',
  specification: `
    - Lens Material: Polycarbonate
    - Lens Type: Clear Protective Lens
    - Lens Coating: Anti-Fog & Scratch Resistant
    - Frame Material: Flexible PVC Frame
    - Ventilation: Indirect Ventilation System
    - Strap Type: Adjustable Elastic Headband
    - Certification: EN166 Safety Standard
  `,
  features: `
    - High impact resistant protective lens
    - Anti-fog technology for clear vision
    - Scratch resistant lens surface
    - Full eye coverage design
    - Comfortable soft frame for long use
    - Adjustable elastic strap for secure fit
    - Suitable for construction, industrial and laboratory work
  `
},

// bumbcaps

{
  id: 27,
  name: 'Industrial Net Bump Cap with Reflective Strip',
  category: 'bump caps',
  brand: 'Generic',
  price: 22000,
  images: ['assets/img/bump caps/net bump cap(blue).webp'],
  description: 'Industrial net bump cap designed to provide lightweight head protection in workplaces where there is risk of minor head bumps and scrapes. The cap features breathable mesh fabric for ventilation and reflective strips for improved visibility in low-light environments. Ideal for warehouses, logistics operations, mechanical workshops, and construction sites requiring light-duty head protection.',
  
  specification: `
    - Cap Type: Industrial Bump Cap
    - Outer Material: Breathable Mesh / Cotton Fabric
    - Inner Shell: ABS Protective Shell
    - Reflector: High Visibility Reflective Strip
    - Ventilation: Mesh Net Design
    - Size Adjustment: Velcro / Adjustable Strap
    - Head Size Range: 54cm – 62cm
    - Standard: EN 812 Industrial Bump Cap Standard
  `,
  
  features: `
    - Lightweight head protection design
    - Breathable mesh fabric for improved airflow
    - Reflective strip for better visibility
    - Shock absorbing internal shell
    - Comfortable and ergonomic fit
    - Adjustable strap for universal sizing
    - Ideal for warehouses, factories, and logistics operations
  `
},


// flashlights
{
  id: 33,
  name: 'Type 1101 LED Light Flashlight - Black',
  category: 'flashlights',
  brand: 'Generic',
  price: 12000,

  images: [
    'assets/img/flashlights/1101 type flashlight.webp',
  ],

  description: 'Compact and durable LED flashlight designed for industrial work, security operations, outdoor activities and emergency situations. The Type 1101 flashlight provides bright illumination with a lightweight body that is easy to carry and operate.',


  colors: [
    'Black'
  ],

  specification: `
  - Model: Type 1101
  - Light Source: High Power LED
  - Material: Aluminum / Durable Plastic Body
  - Lighting Mode: High / Low / Flash
  - Power Source: Rechargeable Battery
  - Charging Method: USB Charging
  - Beam Distance: Up to 200 meters
  `,

  features: `
  - Bright LED illumination
  - Lightweight and portable design
  - Durable shock resistant body
  - Multiple lighting modes
  - Long battery life
  - Suitable for security, industrial work and outdoor use
  `
},

// rainwears

{
  id: 38,
  name: 'PVC Gown Raincoat - Waterproof Protective Coat',
  category: 'safety rainwears',
  brand: 'Generic',
  price: 15000,

  images: [
    'assets/img/rainwears/pvc gown raincoat(green).jpg',
  ],

  description: 'Durable waterproof PVC gown raincoat designed to protect workers from rain, water splashes, and wet environments. The long gown-style raincoat offers full-body coverage and is ideal for outdoor work, sanitation, agriculture, and industrial environments.',

  sizes: ['M','L','XL','XXL'],

  colors: [
    'Yellow',
    'Green',
    'Blue'
  ],

  specification: `
  - Product Type: PVC Gown Raincoat
  - Material: High Quality PVC
  - Design: Long Gown Style
  - Waterproof Level: 100% Waterproof
  - Closure: Front Button / Snap Closure
  - Hood: Attached Hood
  - Length: Knee-Length Protection
  - Usage: Outdoor and Industrial Protection
  `,

  features: `
  - Fully waterproof PVC material
  - Long gown design for extended body protection
  - Lightweight and comfortable
  - Durable and tear resistant
  - Attached hood for head protection
  - Easy to clean and maintain
  - Suitable for construction, sanitation, agriculture and outdoor work
  `
},

{
  id: 31,
  name: 'Polyester Raincoat Jacket and Trouser Set - Navy Blue',
  category: 'safety rainwears',
  brand: 'Beta',
  price: 25000,

  images: [
    'assets/img/rainwears/polyester jacket and trouser raincoat.avif',
  ],

  description: 'High-quality waterproof raincoat set consisting of a jacket and trouser designed to protect workers from rain, wind and wet conditions. Ideal for construction workers, outdoor technicians, logistics staff and industrial environments where reliable rain protection is required.',

  sizes: ['M','L','XL','XXL','XXXL'],

  colors: [
    'Navy Blue'
  ],

  specification: `
  - Product Type: Raincoat Jacket & Trouser Set
  - Material: 100% Polyester
  - Waterproof Level: Water Resistant / Rainproof
  - Design: Two-piece (Jacket and Trouser)
  - Closure: Front Zipper with Storm Flap
  - Hood: Adjustable Attached Hood
  - Seams: Heat Sealed Waterproof Seams
  - Usage: Outdoor and Industrial Protection
  `,

  features: `
  - Waterproof polyester fabric
  - Lightweight and comfortable to wear
  - Full body rain protection
  - Adjustable hood for better coverage
  - Durable stitching for long-lasting use
  - Easy to fold and carry
  - Suitable for construction, logistics, agriculture and outdoor work
  `
},

{
  id: 32,
  name: 'Trucker Safety-Waterproof PVC Rain Boot',
  category: 'Safety Rainwears',
  brand: 'Trucker',
  price: 18000,

  images: [
    'assets/img/rainwears/trucker safety rainboot.webp',
  ],

  description: 'Heavy-duty waterproof safety rainboot designed for industrial and outdoor environments. The Trucker Safety Rainboot provides reliable protection against water, mud, chemicals and slippery surfaces, making it ideal for construction sites, agriculture, cleaning operations and general industrial work.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Green'
  ],

  specification: `
  - Product Type: Industrial Safety Rain Boot
  - Material: High Quality PVC
  - Toe Protection: Reinforced Toe
  - Sole: Anti-slip PVC Outsole
  - Waterproof: 100% Waterproof Construction
  - Height: Knee Length Boot
  - Usage: Industrial and Outdoor Protection
  `,

  features: `
  - Fully waterproof PVC material
  - Anti-slip sole for wet surfaces
  - Reinforced toe protection
  - Durable for heavy-duty work
  - Comfortable inner lining
  - Easy to clean and maintain
  - Suitable for construction, agriculture, cleaning and industrial work
  `
},

{
  id: 33,
  name: 'Safety Jogger HERCULES S5 Safety Rain Boot',
  category: 'Safety Rainwears',
  brand: 'Safety Jogger',
  price: 42000,

  images: [
    'assets/img/rainwears/hercules SJ rainboot.webp',
  ],

  description: 'Heavy-duty waterproof safety boot designed for demanding industrial environments. The Safety Jogger HERCULES S5 provides superior protection against water, chemicals, impacts and punctures, making it ideal for construction sites, agriculture, mining, oil and gas, and other heavy-duty workplaces.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Yellow'
  ],

  specification: `
  - Model: HERCULES S5
  - Safety Rating: S5
  - Toe Protection: Steel Toe Cap
  - Midsole: Steel Puncture Resistant Midsole
  - Material: PVC / Nitrile Rubber
  - Outsole: Anti-slip SRC Certified Sole
  - Waterproof: 100% Waterproof
  - Standard: EN ISO 20345
  `,

  features: `
  - Steel toe impact protection
  - Puncture resistant steel midsole
  - Fully waterproof boot construction
  - Anti-slip outsole for wet environments
  - Oil and chemical resistant material
  - Shock absorbing heel for comfort
  - Ideal for agriculture, construction, mining and industrial work
  `
},


// gas detectors
{
  id: 34,
  name: 'MSA ALTAIR® 5X Multigas Detector',
  category: 'Gas Detector',
  brand: 'MSA Safety',
  price: 950000,

  images: [
    'assets/img/gas detectors/ALTAIR5XMultigasDetector.avif',
  ],

  description: 'Advanced multi-gas detector designed for industrial safety and hazardous environments. The MSA ALTAIR 5X Gas Detector is capable of monitoring up to six gases simultaneously and is widely used in oil and gas, chemical plants, confined space entry, mining and industrial maintenance operations.',

  sizes: [],

  colors: [
    'Yellow'
  ],

  specification: `
  - Model: ALTAIR 5X
  - Brand: MSA Safety
  - Gas Detection: Up to 6 gases simultaneously
  - Sensor Technology: MSA XCell Sensors
  - Display: High contrast LCD screen
  - Alarm Type: Audible, Visual and Vibrating alarms
  - Battery: Rechargeable Lithium-ion battery
  - Runtime: Up to 20 hours
  - Protection Rating: IP65 / IP67
  - Data Logging: Yes
  - Standard: ATEX / CSA / IECEx certified
  `,

  features: `
  - Detects multiple hazardous gases simultaneously
  - Fast response XCell sensor technology
  - Rugged and durable industrial design
  - Audible, visual and vibration alarm system
  - Suitable for confined space entry
  - Long battery life for extended operations
  - Ideal for oil & gas, mining, chemical plants and industrial safety monitoring
  `
},

{
  id: 35,
  name: 'MSA ALTAIR® 4X Multigas Detector',
  category: 'Gas Detector',
  brand: 'MSA Safety',
  price: 650000,

  images: [
    'assets/img/gas detectors/MSA_Multi-Gas_Detector_MSA_Alstair_4X.jpg',
  ],

  description: 'Portable and rugged multigas detector designed for reliable monitoring of hazardous gases in industrial environments. The MSA ALTAIR 4X uses advanced XCell sensor technology to provide fast response times and accurate gas detection for improved worker safety in confined spaces and hazardous workplaces.',

  sizes: [],

  colors: [
    'Black'
  ],

  specification: `
  - Model: ALTAIR 4X
  - Brand: MSA Safety
  - Gas Detection: Up to 4 gases simultaneously
  - Detectable Gases: O2, CO, H2S, LEL
  - Sensor Technology: MSA XCell Sensors
  - Display: High contrast LCD display
  - Alarm Type: Audible, Visual and Vibrating alarms
  - Battery Type: Rechargeable Lithium-ion
  - Runtime: Up to 24 hours
  - Protection Rating: IP67
  - Drop Test: 6 meters drop tested
  - Standard: ATEX / IECEx certified
  `,

  features: `
  - Detects up to four hazardous gases simultaneously
  - Fast response MSA XCell sensor technology
  - Rugged industrial design for harsh environments
  - Audible, visual and vibrating alarm system
  - Long battery life for extended field operations
  - Ideal for confined space monitoring
  - Suitable for oil & gas, mining, chemical plants and industrial maintenance
  `
},

// eyewashs station

{
  id: 37,
  name: 'Emergency Eyewash and Safety Combination Shower',
  category: 'emergency eye wash staion',
  brand: 'Generic',
  price: 350000,

  images: [
    'assets/img/eye wash station/emergency eye wash station.jpg2.webp',
  ],

  description: 'Industrial emergency eyewash and safety shower designed to provide immediate decontamination in case of chemical splashes, hazardous liquids or dust exposure. The unit allows workers to quickly rinse eyes and body to reduce injury and contamination in laboratories, factories and hazardous work environments.',

  sizes: [],

  colors: [
    'stainless',
    
  ],

  specification: `
  - Product Type: Emergency Eyewash & Safety Shower Combination
  - Material: Stainless Steel / Galvanized Steel
  - Operation: Pull Rod for Shower / Push Plate for Eyewash
  - Water Flow: High Volume Flushing System
  - Eyewash Type: Dual Spray Nozzles with Dust Covers
  - Mounting Type: Floor Mounted
  - Standard: ANSI Z358.1 Emergency Equipment Standard
  - Usage: Industrial Emergency Decontamination
  `,

  features: `
  - Dual function emergency eyewash and safety shower
  - High flow water system for rapid decontamination
  - Easy activation with pull rod and push plate
  - Corrosion resistant durable construction
  - Protective dust covers on eyewash nozzles
  - Suitable for chemical plants, laboratories and factories
  - Essential emergency safety equipment for hazardous workplaces
  `
},

{
  id: 38,
  name: 'Gravity Fed Supply 8 Gallon Portable Eyewash Station',
  category: 'emergency eye wash staion',
  brand: 'Generic',
  price: 220000,

  images: [
    'assets/img/eye wash station/portable eye wash station 8gallon.webp3.jpg',
  ],

  description: 'Portable gravity-fed eyewash station designed to provide immediate emergency eye flushing in locations without direct water supply. The 8-gallon capacity ensures continuous flow for effective eye irrigation during chemical exposure, dust contamination or hazardous material incidents in industrial workplaces.',

  sizes: [],

  colors: [
    'Green',
    'Yellow'
  ],

  specification: `
  - Product Type: Portable Emergency Eyewash Station
  - Capacity: 8 Gallons (30 Liters)
  - Water Supply: Gravity Fed System
  - Material: High Density Polyethylene (HDPE)
  - Activation: Push Plate / Pull Down Tray
  - Flow Time: Approximately 15 minutes continuous flow
  - Mounting Type: Wall Mounted or Stand Mounted
  - Standard: ANSI Z358.1 Emergency Eyewash Standard
  `,

  features: `
  - Portable emergency eyewash unit
  - Gravity-fed water flow system
  - Large 8-gallon water capacity
  - Easy push activation for immediate use
  - Durable corrosion resistant tank
  - Suitable for locations without plumbing
  - Ideal for laboratories, workshops, construction sites and factories
  `
}
];

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query.trim());
  }

  clearSearch() {
    this.searchQuerySubject.next('');
  }

  //  SEARCH LOGIC

  searchProducts(term: string): Product[] {
    const lower = term.toLowerCase();

    return this.products.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      p.brand.toLowerCase().includes(lower)
    );
  }




 // get all product unfuiltered 

getProducts(): Product[] {
  return this.products;
}

getProductById(id: number): Product | undefined {
  return this.products.find(p => p.id === id);
}

getProductsByCategory(category: string): Product[] {
  return this.products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );
}

};


