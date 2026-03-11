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
  name: 'Total 3-in-1 Combo Kit TOSLI241198',
  category: 'combo kits',
  brand: 'Total',
  price: 370000,

  images: [
    'assets/img/total 3 in 1.jpg'
  ],
   jumiaLink: 'https://www.jumia.com.ng/total-3-in-1-cordless-combo-kit-tosli241198-419288503.html',
  kongaLink: '',
  description: 'The Total 3-in-1 Combo Kit TOSLI241198 is a professional cordless power tool set designed for drilling, fastening and cutting applications. The kit includes a cordless drill driver, cordless impact driver and cordless angle grinder powered by the TOTAL 20V lithium-ion battery platform. Built with durable components and efficient motors, this combo kit is suitable for construction work, installation, workshop maintenance and general repair tasks. Its cordless design provides excellent mobility and convenience for technicians, installers and DIY users.',

  specification: `
  - Product Name: TOTAL 3-in-1 Cordless Combo Kit
  - Model Number: TOSLI241198
  - Brand: TOTAL Tools
  - Power Platform: TOTAL 20V Lithium-ion System
  - Number of Tools: 3 Tools
  - Application: Drilling, fastening, grinding and cutting

  Cordless Drill Driver
  - Voltage: 20V
  - No-load Speed: 0–400 / 0–1500 RPM
  - Max Torque: 45 Nm
  - Chuck Size: 10 mm keyless chuck
  - Torque Settings: 15 + 1

  Cordless Impact Driver
  - Voltage: 20V
  - Hex Shank: 1/4 inch
  - No-load Speed: 0–2200 RPM
  - Impact Rate: 0–3300 BPM
  - Maximum Torque: 140 Nm

  Cordless Angle Grinder
  - Voltage: 20V
  - Disc Diameter: 115 mm
  - No-load Speed: 8500 RPM
  - Spindle Thread: M14

  Battery and Charger
  - Battery Type: Lithium-ion
  - Batteries Included: 2 × 20V batteries
  - Charger Input: 220–240V ~ 50/60Hz
  `,

  features: `
  - 3-in-1 cordless professional power tool combo kit
  - Includes drill driver, impact driver and angle grinder
  - Powered by TOTAL 20V lithium-ion battery system
  - Compact cordless design for mobility and convenience
  - High performance motors for efficient operation
  - Ergonomic soft grip handles for comfortable use
  - Ideal for construction, installation and maintenance work
  - Suitable for professional technicians and DIY users
  - Supplied with rechargeable batteries and charger
  `
},
  
  {
  id: 18,
  name: 'INGCO Cordless Impact Wrench Combo Kit COSLI23011',
  category: 'Combo Kits',
  brand: 'INGCO Tools',
  price: 62000,

  images: [
    'assets/img/ingco combi kits/inco combo kits- impact wrench and torch.webp2.webp'
  ],

     jumiaLink: 'https://www.jumia.com.ng/ingco-brushless-cordless-impact-wrench-combo-kit-20v-with-lamp-accessories-419334084.html',
  kongaLink: 'https://www.jumia.com.ng/ingco-brushless-cordless-impact-wrench-combo-kit-20v-with-lamp-accessories-419334084.html',

  description: 'INGCO COSLI23011 Cordless Impact Wrench Combo Kit is a professional power tool set designed for automotive repair, mechanical maintenance, construction and industrial fastening applications. The kit includes a powerful 20V cordless impact wrench, portable LED work lamp, impact socket set and screwdriver bits. Powered by the INGCO P20S lithium-ion battery system, the impact wrench delivers strong torque performance and reliable operation, allowing users to tighten and loosen bolts and nuts efficiently. The cordless design provides excellent mobility and convenience for technicians, mechanics and workshop professionals.',

  specification: `
  - Product Name: Cordless Impact Wrench Combo Kit
  - Model Number: COSLI23011
  - Brand: INGCO Tools
  - Power Platform: INGCO P20S 20V Lithium-ion system
  - Application: Automotive repair, construction and maintenance work
  - Drive Size: 1/2 inch square drive

  Impact Wrench Specifications
  - Motor Type: Brushless motor
  - Rated Voltage: 20V
  - No-load Speed: 0-1300 / 0-2300 RPM
  - Impact Rate: 0-2000 / 0-3300 BPM
  - Maximum Torque: 300 Nm
  - Fastening Capacity: M10 – M20 bolts
  - Integrated LED Work Light: Yes

  Work Lamp Specifications
  - LED Brightness: 300 lumens (high) / 75 lumens (low)
  - LED Power: 3.5W
  - Battery Type: Rechargeable Li-polymer
  - Charging: USB charging cable included

  Battery and Charger
  - Battery Type: Lithium-ion
  - Battery Capacity: 2.0Ah
  - Batteries Included: 2
  - Charger Input: 220–240V ~ 50/60Hz
  `,

  features: `
  - Powerful cordless impact wrench with up to 300 Nm torque
  - Brushless motor technology for higher efficiency and longer tool life
  - Dual speed control for different fastening applications
  - Integrated LED work light for improved visibility
  - Portable LED work lamp included for dark work environments
  - Complete socket set and screwdriver bits included
  - Powered by INGCO 20V lithium-ion battery platform
  - Cordless design for mobility and convenience
  - Ideal for automotive, workshop and industrial maintenance
  `
},
  {
    id: 2,
    name: 'kong hand gloves',
    category: 'Hand-glove',
    brand: 'Total',
    price: 42000,
    images: ['assets/img/dakar.jpg3.jpg'],
       jumiaLink: '',
  kongaLink: '',
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
 
  sizes: ['M','L','XL','XXL','XXXL'],
  colors: [
    'Navy Blue'
  ],
  images: ['assets/img/hand gloves/mechanix gloves.webp'],
     jumiaLink: '',
  kongaLink: '',
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
       jumiaLink: '',
  kongaLink: '',
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

       jumiaLink: '',
  kongaLink: '',
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
     jumiaLink: '',
  kongaLink: '',

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
       jumiaLink: '',
  kongaLink: '',
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

     jumiaLink: '',
  kongaLink: '',
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

     jumiaLink: '',
  kongaLink: '',
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
    - Lightweight composite toe protection\n
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

        jumiaLink: '',
  kongaLink: '',
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

     jumiaLink: '',
  kongaLink: '',
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
     jumiaLink: '',
  kongaLink: '',
  
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

     jumiaLink: '',
  kongaLink: '',

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
   jumiaLink: '',
  kongaLink: '',
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


     jumiaLink: '',
  kongaLink: '',
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
   jumiaLink: '',
  kongaLink: '',
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
   jumiaLink: '',
  kongaLink: '',
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

     jumiaLink: '',
  kongaLink: '',
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
  images: ['assets/img/safety joggers/aak safety jogger ash.webp',
    'assets/img/safety joggers/aak safety jogger ash.webp',
    'assets/img/safety joggers/aak safety jogger ash.webp4.jpg'
    
  ],
   sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],


     jumiaLink: '',
  kongaLink: '',
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


     jumiaLink: '',
  kongaLink: '',
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
     jumiaLink: '',
  kongaLink: '',
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

     jumiaLink: '',
  kongaLink: '',
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
  name: 'TOTAL Combo Kit TOSLI241189',
  category: 'Combo Kits',
  brand: 'TOTAL Tools',
  price: 58000,

  images: [
    'assets/img/combo.jpg'
  ],

     jumiaLink: '',
  kongaLink: '',
  description: 'TOTAL Combo Kit TOSLI241189 is a 3-piece cordless outdoor power tool kit designed for gardening, landscaping and outdoor maintenance. The kit includes a cordless chain saw, cordless grass trimmer and cordless air blower powered by the TOTAL 20V lithium-ion battery platform. This combo kit provides efficient cutting, trimming and cleaning performance, making it ideal for professional landscapers, maintenance teams and home users who require reliable cordless tools for garden and yard work.',

  specification: `
  - Product Name: TOTAL Cordless Outdoor Combo Kit
  - Model Number: TOSLI241189
  - Brand: TOTAL Tools
  - Power Platform: TOTAL 20V Lithium-ion system
  - Number of Tools: 3 Tools

  Chainsaw Specifications
  - Model: TGSLI20128
  - Voltage: 20V
  - Bar Length: 12 inch (30 cm)
  - Chain Speed: 7.9 m/s
  - Motor Type: Brushless
  - Chain Lubrication: Automatic lubrication system

  Grass Trimmer Specifications
  - Model: TGTLI20328
  - Voltage: 20V
  - No-load Speed: 8200 rpm
  - Cutting Diameter: 300 mm
  - Line Diameter: 1.6 mm
  - Line Length: 5 m

  Air Blower Specifications
  - Model: TABLI20428
  - Voltage: 20V
  - No-load Speed: 0 – 18,500 rpm
  - Average Air Volume: 8.5 m³/min
  - Maximum Air Speed: 144 km/h

  Battery & Charger
  - Batteries Included: 2 × 20V 4.0Ah Lithium-ion batteries
  - Charger: 1 × TOTAL fast charger
  - Power Supply: 220–240V
  `,

  features: `
  - 3-in-1 cordless outdoor power tool combo kit
  - Includes chainsaw, grass trimmer and air blower
  - Powered by TOTAL 20V lithium-ion battery system
  - Brushless motor technology for higher efficiency
  - Lightweight and portable cordless design
  - Ideal for cutting branches, trimming grass and clearing leaves
  - Ergonomic handles for comfortable operation
  - Suitable for landscaping, gardening and yard maintenance
  - Supplied with two batteries and charger for extended runtime
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

     jumiaLink: '',
  kongaLink: '',

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


     jumiaLink: '',
  kongaLink: '',
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

     jumiaLink: '',
  kongaLink: '',
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

     jumiaLink: '',
  kongaLink: '',
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
     jumiaLink: '',
  kongaLink: '',
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
   jumiaLink: '',
  kongaLink: '',
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

     jumiaLink: '',
  kongaLink: '',

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
   jumiaLink: '',
  kongaLink: '',
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
   jumiaLink: '',
  kongaLink: '',
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
   jumiaLink: '',
  kongaLink: '',
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
   jumiaLink: '',
  kongaLink: '',
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
   jumiaLink: '',
  kongaLink: '',
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
  id: 36,
  name: 'Stainless Steel Emergency Safety Shower and Eyewash Station',
  category: 'emergency eye wash staion',
  brand: 'Generic',
  price: 420000,

  images: [
    'assets/img/eye wash station/emergency eye wash station RYFH004.jpeg'
  ],

  description: 'The Stainless Steel Emergency Safety Shower and Eyewash Station is designed to provide immediate full body and eye flushing in workplaces exposed to hazardous chemicals, dust, or harmful liquids. The unit quickly rinses contaminants from the eyes, face and body to reduce injuries before medical treatment is available. It is commonly used in chemical plants, laboratories, factories, construction sites and other industrial environments where worker safety is critical.',

  colors: [
    'stainless steel'
  ],

  jumiaLink: '',
  kongaLink: '',

  specification: `
  - Product Type: Emergency Safety Shower and Eyewash Combination
  - Model: RYFH005
  - Main Material: SS304 Stainless Steel
  - Surface Treatment: Mirror Polished
  - Function: Eye Washing + Emergency Shower
  - Shower Flow Rate: 120 – 180 L/min
  - Eyewash Flow Rate: 9 – 16 L/min
  - Working Pressure: 0.2 – 0.4 MPa
  - Usage Temperature: 5 – 40℃
  - Inlet Size: DN25 / DN15 Thread
  - Drain Outlet: DN32 Internal Thread
  - Main Pipe Diameter: 32 mm
  - Spray Head Material: SS304 Stainless Steel
  - Wash Basin Diameter: 260 mm
  - Standard: Industrial Emergency Safety Equipment
  `,

  features: `
  - Combination emergency shower and eyewash station
  - High flow water system for rapid decontamination
  - Dual spray eyewash heads for effective rinsing
  - Hands-free activation using pull rod and push plate
  - Durable corrosion resistant stainless steel construction
  - Protective dust covers for spray nozzles
  - Designed for chemical plants, laboratories and factories
  - Essential safety equipment for hazardous workplaces
  `
},

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


  colors: [
    'stainless',
    
  ],
   jumiaLink: '',
  kongaLink: '',
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
  id: 43,
  name: 'Gravity Fed Supply 8 Gallon Portable Eyewash Station',
  category: 'emergency eye wash staion',
  brand: 'Generic',
  price: 220000,

  images: [
    'assets/img/eye wash station/portable eye wash station 8gallon.webp3.jpg',
  ],

  description: 'Portable gravity-fed eyewash station designed to provide immediate emergency eye flushing in locations without direct water supply. The 8-gallon capacity ensures continuous flow for effective eye irrigation during chemical exposure, dust contamination or hazardous material incidents in industrial workplaces.',


  colors: [
    'Green',
    'Yellow'
  ],
   jumiaLink: '',
  kongaLink: '',
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
},

// security gears
{
  id: 39,
  name: 'Garrett Super Scanner V Handheld Metal Detector',
  category: 'Security gears',
  brand: 'Garrett',
  price: 75000,

  images: [
    'assets/img/security gears/garrett-super-scanner-v-metal-detector (1).jpg',
  ],

  description: 'The Garrett Super Scanner V is one of the most widely used handheld metal detectors in the world. Designed for professional security screening, it provides high sensitivity detection for weapons and metallic objects. The device is commonly used in airports, event security, law enforcement checkpoints, and industrial facilities.',


  colors: [
    'Black'
  ],
   jumiaLink: '',
  kongaLink: '',
  specification: `
  - Model: Super Scanner V
  - Brand: Garrett
  - Detection Type: Handheld Metal Detector
  - Detection Range: Detects medium pistol up to 9 inches
  - Detection Range: Large knife up to 6 inches
  - Detection Range: Razor blades and small metal objects up to 3 inches
  - Detection Surface: Wide scan area with pinpoint tip
  - Alerts: Audible alarm, LED light and vibration alert
  - Battery: 9V battery
  - Battery Life: Up to 100 hours
  - Operating Temperature: -37°C to 70°C
  - Weight: Approximately 500 g
  `,

  features: `
  - High sensitivity metal detection
  - 360° scanning surface for quick inspections
  - Audible, visual and vibration alerts
  - Lightweight and ergonomic design
  - Durable impact-resistant construction
  - Easy one-button operation
  - Ideal for airports, events, security checkpoints and law enforcement
  `
},

{
  id: 40,
  name: 'Rope Type Stanchion Crowd Queue Control Barrier Post - 4 Poles + 2 Ropes',
  category: 'Stanchions',
  brand: 'Generic',
  price: 180000,

  images: [
    'assets/img/stanchions/Rope Type Stanchion Crowd Queue Control Barrier Post - 4 Poles + 2 Ropes.webp',
  ],

  description: 'Elegant and durable rope stanchion barrier system designed for managing crowds and organizing queues in public and commercial spaces. The set includes four sturdy posts and two velvet ropes, providing a professional solution for crowd control at events, hotels, airports, banks, and exhibition centers.',


  colors: [
    'Gold / Red Rope',
    'Silver / Red Rope',
    'Black / Red Rope'
  ],


  
   jumiaLink: '',
  kongaLink: '',
  specification: `
  - Product Type: Rope Stanchion Crowd Control Barrier
  - Set Includes: 4 Stanchion Poles + 2 Velvet Ropes
  - Material: Stainless Steel / Metal
  - Base Type: Heavy Weighted Base for Stability
  - Rope Length: Approximately 1.5 meters
  - Pole Height: Approximately 90 cm
  - Rope Type: Velvet Braided Rope with Metal Hooks
  - Usage: Indoor Crowd and Queue Management
  `,

  features: `
  - Elegant velvet rope barrier system
  - Durable stainless steel poles
  - Heavy stable base to prevent tipping
  - Easy to assemble and reposition
  - Ideal for crowd and queue control
  - Professional appearance for events and venues
  - Suitable for banks, hotels, airports and exhibitions
  `
},

// dispocables


{
  id: 21,
  name: 'Tyvek Disposable Coveralls',
  category: 'disposables',
  brand: 'Tyvek',
  price: 250,

  images: [
    'assets/img/disposables/tyvek-disposable-coveralls.jpg'
  ],
   jumiaLink: 'https://www.instagram.com/astonic_mart?utm_source=qr&igsh=MTh3dmJ1azlxejRyOA%3D%3D',
  kongaLink: '',
  description: 'Tyvek Disposable Coveralls are lightweight protective garments designed to provide reliable protection against hazardous dust, fine particles and light liquid splashes. Manufactured from flash-spun high-density polyethylene (HDPE) non-woven fabric, Tyvek coveralls combine durability, breathability and comfort for extended use. These disposable coveralls are widely used in construction, chemical handling, pharmaceutical production, spray painting, maintenance work and cleanroom environments. The single-use design helps prevent cross-contamination and ensures hygienic protection for workers in demanding environments.',

  specification: `
  - Product Name: Tyvek Disposable Coveralls
  - Material: Flash-spun High Density Polyethylene (HDPE) non-woven fabric
  - Color: White
  - Protection Type: Particle protection and limited liquid splash protection
  - Design: Full body coverall with hood
  - Closure Type: Front zipper with protective flap
  - Seams: Stitched seams
  - Wrist Cuffs: Elastic
  - Ankle Cuffs: Elastic
  - Waist: Elastic for improved fit
  - Fabric Type: Breathable and low-lint material
  - Sizes Available: S, M, L, XL, XXL, XXXL
  - Usage: Disposable single-use protective garment
  - Application: Industrial safety, chemical handling, painting and cleanroom work
  `,

  features: `
  - Lightweight and breathable protective coverall
  - Provides protection against hazardous dust and fine particles
  - Resistant to light liquid splashes and chemical spray
  - Durable Tyvek material with good tear resistance
  - Hooded design for full head and neck coverage
  - Elastic wrist, ankle and waist for secure and comfortable fit
  - Low-linting fabric suitable for cleanroom environments
  - Disposable design helps prevent contamination between tasks
  - Comfortable ergonomic design for better mobility
  - Ideal for construction, chemical handling, painting and maintenance work
  `
},

// safety coveralls
{
  id: 38,
  name: 'Supersteel Industrial Safety Coveralls',
  category: 'coveralls',
  brand: 'Supersteel',
  price: 22000,

  images: [
    'assets/img/coveralls/safety coveralls.webp',
  ],

  description: 'Superstell Industrial Safety Coveralls are designed to provide full-body protection for workers operating in industrial, construction, mechanical, and workshop environments. Made from durable and breathable fabric, these coveralls help protect against dirt, grease, minor chemical splashes, and workplace hazards while ensuring comfort during long working hours.',

  sizes: [
    'M',
    'L',
    'XL',
    'XXL'
  ],

  colors: [
    'Navy Blue',
    'Orange',
    'Khaki'
  ],

  jumiaLink: '',
  kongaLink: '',

  specification: `
  - Product Type: Industrial Safety Coveralls
  - Brand: Superstell
  - Material: Polyester & Cotton Blend
  - Fabric Weight: Heavy Duty Industrial Fabric
  - Closure Type: Front Zipper
  - Sleeve Type: Long Sleeve
  - Fit: Regular Fit
  - Pockets: Multiple Utility Pockets
  - Usage: Industrial, Construction, Mechanical Work
  - Gender: Unisex
  `,

  features: `
  - Full body industrial protection
  - Durable polyester-cotton fabric
  - Comfortable breathable design
  - Strong front zipper closure
  - Multiple pockets for tools and accessories
  - Resistant to dirt, oil, and grease
  - Ideal for factory workers, mechanics, engineers, and construction workers
  `
},

{
  id: 39,
  name: 'Dickies Fire Retardant Industrial Coverall',
  category: 'coveralls',
  brand: 'Dickies',
  price: 85000,

  images: [
    'assets/img/coveralls/dickies fireretardent coverall.webp',
  ],

  description: 'Dickies Fire Retardant Coveralls are designed to provide superior protection for workers exposed to flame, heat, and electrical arc hazards. Built with durable flame-resistant fabric, these coveralls offer long-lasting safety, comfort, and mobility for professionals working in oil and gas, welding, electrical maintenance, and heavy industrial environments.',

  sizes: [
    'M',
    'L',
    'XL',
    'XXL'
  ],

  colors: [
    'Navy Blue',
    'Khaki',
    'Dark Grey'
  ],

  jumiaLink: '',
  kongaLink: '',

  specification: `
  - Product Type: Fire Retardant Safety Coverall
  - Brand: Dickies
  - Material: Flame Resistant Cotton / FR Treated Fabric
  - Closure Type: Heavy Duty Front Zipper
  - Sleeve Type: Long Sleeve
  - Protection: Flame Resistant / Heat Resistant
  - Pockets: Multiple Utility Pockets
  - Fit: Regular Industrial Fit
  - Compliance: NFPA / Industrial Safety Standards
  - Usage: Welding, Oil & Gas, Electrical Work, Industrial Maintenance
  `,

  features: `
  - Flame resistant protective coverall
  - Durable industrial-grade fabric
  - Designed for high heat environments
  - Multiple pockets for tools and accessories
  - Comfortable fit for long working hours
  - Strong zipper closure for easy wear
  - Suitable for welding, oil & gas, and electrical maintenance
  `
},
//  reflectivejackts
{
  id: 40,
  name: 'High Visibility Safety Reflective Jacket',
  category: 'reflective vests',
  brand: 'Generic',
  price: 15000,

  images: [
    'assets/img/reflective jackets/lemon reflective jacket.webp',
  ],

  description: 'High Visibility Safety Reflective Jacket designed to improve worker visibility in low light and high-risk environments. The jacket features bright fluorescent fabric with reflective strips that enhance safety for construction workers, road traffic controllers, warehouse personnel, and industrial workers.',

  sizes: [
    'M',
    'L',
    'XL',
    'XXL'
  ],

  colors: [
    'Lime Green',
    'Orange'
  ],

  jumiaLink: '',
  kongaLink: '',

  specification: `
  - Product Type: Safety Reflective Jacket
  - Material: Polyester
  - Visibility Type: High Visibility Fluorescent Fabric
  - Reflective Strips: 360° Reflective Tape
  - Closure Type: Front Zipper
  - Sleeve Type: Long Sleeve
  - Weather Protection: Wind Resistant
  - Usage: Road Construction, Warehousing, Traffic Control, Industrial Work
  `,

  features: `
  - High visibility reflective safety jacket
  - Bright fluorescent color for improved visibility
  - 360-degree reflective tape for night safety
  - Lightweight and breathable material
  - Comfortable for long working hours
  - Suitable for construction sites, road workers, and warehouse staff
  - Durable design for industrial use
  `
},

// lab coats
{
  id: 41,
  name: 'White Cotton Laboratory Coat',
  category: 'lab coats',
  brand: 'Generic',
  price: 12000,

  images: [
    'assets/img/lab coats/lab coats(white.jpg3.jpg',
  ],

  description: 'White Cotton Laboratory Coat designed to provide protection and hygiene in laboratories, medical facilities, pharmacies, and research environments. Made from breathable cotton fabric, the lab coat offers comfort during long working hours while protecting clothing from chemical splashes, dust, and minor spills.',

  sizes: [
    'M',
    'L',
    'XL',
    'XXL'
  ],

  colors: [
    'White'
  ],

  jumiaLink: '',
  kongaLink: '',

  specification: `
  - Product Type: Laboratory Coat
  - Material: 100% Cotton
  - Color: White
  - Sleeve Type: Long Sleeve
  - Closure Type: Front Button
  - Pockets: 3 Pockets (1 Chest Pocket, 2 Lower Pockets)
  - Fit: Regular Fit
  - Usage: Laboratory, Medical, Pharmacy, Research Facilities
  `,

  features: `
  - Made from breathable cotton fabric
  - Comfortable for long laboratory work hours
  - Protects clothing from spills and contaminants
  - Multiple pockets for tools and accessories
  - Easy front button closure
  - Suitable for laboratories, hospitals, and research centers
  `
},

// fire retardent coverall
{
  id: 39,
  name: 'Dickies Fire Retardant Industrial Coverall',
  category: 'coveralls',
  brand: 'Dickies',
  price: 85000,

  images: [
    'assets/img/coveralls/dickies fireretardent coverall.webp',
  ],

  description: 'Dickies Fire Retardant Coveralls are designed to provide superior protection for workers exposed to flame, heat, and electrical arc hazards. Built with durable flame-resistant fabric, these coveralls offer long-lasting safety, comfort, and mobility for professionals working in oil and gas, welding, electrical maintenance, and heavy industrial environments.',

  sizes: [
    'M',
    'L',
    'XL',
    'XXL'
  ],

  colors: [
    'Navy Blue',
    'Khaki',
    'Dark Grey'
  ],

  jumiaLink: '',
  kongaLink: '',

  specification: `
  - Product Type: Fire Retardant Safety Coverall
  - Brand: Dickies
  - Material: Flame Resistant Cotton / FR Treated Fabric
  - Closure Type: Heavy Duty Front Zipper
  - Sleeve Type: Long Sleeve
  - Protection: Flame Resistant / Heat Resistant
  - Pockets: Multiple Utility Pockets
  - Fit: Regular Industrial Fit
  - Compliance: NFPA / Industrial Safety Standards
  - Usage: Welding, Oil & Gas, Electrical Work, Industrial Maintenance
  `,

  features: `
  - Flame resistant protective coverall
  - Durable industrial-grade fabric
  - Designed for high heat environments
  - Multiple pockets for tools and accessories
  - Comfortable fit for long working hours
  - Strong zipper closure for easy wear
  - Suitable for welding, oil & gas, and electrical maintenance
  `
},

// electric pressure washers

{
  id: 50,
  name: "Total High Pressure Washer 2000W -TGT11226",
  brand: "Total",
  model: "TGT11226",
  category: "electric pressure washers",
  power: "2000W",
  pressure: "150 Bar",
  flowRate: "6.0 L/min",
  price: 145000,

  images: [
    "assets/img/total pws/total pw-2000w-150bar-TGT11226.jpg"
  ],

  description:
    "The Total TGT11226 high pressure washer is a powerful 2000W electric cleaning machine designed for heavy duty cleaning tasks including vehicle washing, patios, walls and outdoor surfaces.   This high pressure washer is equipped with a durable motor and a high-performance pump that ensures consistent water flow for efficient cleaning. The compact and portable design makes it easy to move around while working, while the ergonomic spray gun allows for comfortable operation and precise control during use. The Total TGT11226 is ideal for car washing, motorcycle cleaning, garden furniture washing, floor cleaning and other heavy duty outdoor cleaning jobs. Built with reliability and durability in mind, it is a practical cleaning solution for both domestic and professional use.",

  specification: `
  Model: TGT11226
  Power: 2000W
  Rated Voltage: 220-240V
  Frequency: 50Hz
  Max Pressure: 150 Bar
  Water Flow Rate: 6.0 L/min
  Motor Type: Copper Motor
  Hose Length: 5m
  Application: Car washing, home cleaning, industrial cleaning
  `,

  features: `
  Powerful 2000W motor
  High pressure spray gun
  Durable water pump
  Portable design
  Ideal for home and professional cleaning
  `
},

{
  id: 51,
  name: "Total High Pressure Washer 2000W-TGT11376",
  brand: "Total",
  model: "TGT11376",
  category: "electric pressure washers",

  power: "2000W",
  pressure: "160 Bar",
  flowRate: "6.5 L/min",

  price: 155000,

  images: [
    "assets/img/total pws/total pw-2000w-160bar-TGT11376.jpg"
  ],

  description:
"The Total TGT11376 high pressure washer is a powerful and reliable 2000W cleaning machine designed for demanding cleaning applications around homes, workshops and commercial environments. With a strong high-pressure output, it effectively removes stubborn dirt, mud, grease and stains from a wide range of surfaces. Built with a durable motor and high-performance pump system, the TGT11376 delivers consistent water pressure for efficient and fast cleaning. The machine is suitable for washing cars, motorcycles, driveways, patios, walls, garden equipment and other outdoor surfaces. Its compact and portable design allows for easy movement and convenient storage, while the ergonomic spray gun provides comfortable handling and precise control during operation. The Total TGT11376 is an excellent choice for users who require a dependable pressure washer for regular and heavy-duty cleaning tasks.",
  features: `
  Powerful 2000W copper motor
  High pressure spray gun
  Automatic stop system
  Portable and compact design
  Durable high pressure hose
  `,

  specification: `
  Model: TGT11376
  Power: 2000W
  Voltage: 220-240V
  Frequency: 50Hz
  Max Pressure: 160 Bar
  Flow Rate: 6.5 L/min
  Hose Length: 5m
  Motor Type: Copper motor
  `
},

{
  id: 52,
  name: "Total High Pressure Washer",
  brand: "Total",
  model: "TGT11236",
  category: "electric pressure washers",

  power: "1400W",
  pressure: "110 Bar",
  flowRate: "5.5 L/min",

  price: 95000,

  images: [
    ""
  ],

  description:
  "The Total TGT11236 high pressure washer is a compact and efficient 1400W cleaning machine designed for everyday outdoor cleaning tasks. It delivers strong water pressure that effectively removes dirt, mud and grime from vehicles, patios, walls and garden surfaces. The machine features a durable motor and a reliable pump system that ensures steady water flow for consistent cleaning performance. Its lightweight and portable design makes it easy to move around the home, making it ideal for car washing, motorcycle cleaning, outdoor furniture cleaning and general household maintenance.",

  features: `
  Powerful 1400W motor for efficient cleaning
  Compact and lightweight design
  High pressure spray gun for better control
  Durable pump system for long life
  Suitable for cars, patios, walls and outdoor surfaces
  Easy to move and store
  `,

  specification: `
  Model: TGT11236
  Power: 1400W
  Voltage: 220-240V
  Frequency: 50Hz
  Max Pressure: 110 Bar
  Flow Rate: 5.5 L/min
  Motor Type: Copper motor
  Application: Car washing, patios, walls and outdoor cleaning
  `
},

{
  id: 53,
  name: "Ingco High Pressure Washer",
  brand: "Ingco",
  model: "HPWR20008",
  category: "electric pressure washers",

  power: "2000W",
  pressure: "150 Bar",
  flowRate: "6.0 L/min",

  price: 150000,

  images: [
    "assets/img/products/ingco-hpwr20008.jpg"
  ],

  description:
  "The Ingco HPWR20008 high pressure washer is a powerful 2000W cleaning machine designed for heavy-duty cleaning tasks in homes, workshops and commercial environments. It produces a maximum pressure of 150 bar, making it highly effective for removing stubborn dirt, grease and mud from vehicles, driveways, patios and outdoor surfaces. The washer is equipped with a durable copper wire induction motor that ensures long service life and reliable performance.",

  features: `
  Powerful 2000W copper induction motor
  High pressure output for deep cleaning
  Auto-stop system for energy efficiency
  Durable high pressure hose for extended reach
  Includes spray gun and detergent bottle
  Suitable for cars, floors, patios and outdoor equipment
  `,

  specification: `
  Model: HPWR20008
  Power: 2000W
  Voltage: 220-240V
  Frequency: 50Hz
  Max Pressure: 150 Bar (2200 PSI)
  Flow Rate: 6.0 L/min
  Motor Type: Copper wire induction motor
  Hose Length: 5m
  Accessories: Spray gun, soap bottle
  `
},


{
  id: 22,
  name: "Ingco High Pressure Washer",
  brand: "Ingco",
  model: "HPWR20018",
  category: "pressure washers",

  power: "2000W",
  pressure: "160 Bar",
  flowRate: "6.5 L/min",

  price: 165000,

  images: [
    "assets/img/products/ingco-hpwr20018.jpg"
  ],

  description:
  "The Ingco HPWR20018 high pressure washer is a robust 2000W cleaning machine built for demanding cleaning applications. With strong water pressure and efficient water flow, it quickly removes stubborn dirt, grease and grime from vehicles, floors, patios and outdoor surfaces. Its durable motor and pump system provide consistent performance while the portable design allows for easy movement during cleaning operations.",

  features: `
  Powerful 2000W motor for strong cleaning performance
  High pressure spray system
  Auto stop function for safety and energy saving
  Durable high pressure hose
  Ergonomic spray gun for better control
  Suitable for vehicles, patios, walls and industrial surfaces
  `,

  specification: `
  Model: HPWR20018
  Power: 2000W
  Voltage: 220-240V
  Frequency: 50Hz
  Max Pressure: 160 Bar
  Flow Rate: 6.5 L/min
  Motor Type: Copper motor
  Hose Length: 5m
  Application: Vehicle washing and outdoor cleaning
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


