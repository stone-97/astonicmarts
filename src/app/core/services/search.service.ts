import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';
import { SandersComponent } from '../../pages/powertools/bycategories/sanders/sanders.component';
import { EdgebandingmachinesComponent } from '../../pages/powertools/bycategories/edgebandingmachines/edgebandingmachines.component';
import { RotaryhammerdrillsComponent } from '../../pages/powertools/bycategories/drills/rotaryhammerdrills/rotaryhammerdrills.component';

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

    inStock: true,
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

    inStock: true,
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
    
    inStock: true,
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

  
    inStock: true,
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
    
    inStock: true,
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
    
    inStock: true,

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

  
    inStock: true,
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
    
    inStock: true,
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

    inStock: true,
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

    inStock: true,
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
  images: ['assets/img/safety joggers/MODULO S1PS Low Safety jogger2.jpg',
    'assets/img/safety joggers/MODULO S1PS Low Safety jogger.jpg',
    'assets/img/safety joggers/MODULO S1PS Low Safety jogger.jpg4.jpg',
    'assets/img/safety joggers/MODULO S1PS Low Safety jogger.jpg3.jpg'
  ],
  
    inStock: true,
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
  images: [
    'assets/img/safety joggers/baltor safety jogger.webp4.jpg',
    'assets/img/safety joggers/baltor safety jogger.webp2.webp',
    'assets/img/safety joggers/baltor safety jogger.webp3.jpg',
    'assets/img/safety joggers/baltor safety jogger.webp',
  ],

  inStock: true,
  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],

  jumiaLink: '',
  kongaLink: '',

  description: `The Safety Jogger BALTOR Safety Boot is a high-performance protective footwear designed to provide reliable safety, durability, and comfort in demanding work environments. Built with premium materials and reinforced construction, the BALTOR safety boot offers strong protection against workplace hazards while maintaining long-lasting performance.
Equipped with a robust steel toe cap and puncture-resistant midsole, this boot protects the wearer from heavy impacts, compression, and sharp objects commonly found in industrial environments. The anti-slip PU/Rubber outsole provides excellent grip on wet, oily, and uneven surfaces, helping reduce the risk of slips and workplace accidents.
The durable leather upper improves resistance against abrasion and tough working conditions, while the shock-absorbing heel and ergonomic interior design help reduce foot fatigue during long working hours. This makes the BALTOR safety boot suitable for professionals who require both safety and comfort throughout the day.
The Safety Jogger BALTOR Safety Boot is ideal for workers in construction, manufacturing, engineering, warehousing, logistics, mechanical workshops, and other heavy-duty industrial environments where dependable safety footwear is essential.

Items Included in the Package:
• 1 × Pair of Safety Jogger BALTOR Safety Boots
• 1 × Factory-installed comfort insole
• 1 × Original product packaging`,

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

    inStock: true,
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

    inStock: true,
  description: 'Premium industrial safety boot designed for professionals working in construction sites, factories, warehouses, engineering environments and other high-risk workplaces. The MODULO LE S3S LOW TG offers superior protection, durability and comfort for long working hours.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Grey'
  ],
   jumiaLink: '',
  kongaLink: '',


  showSimilar: true,
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

    inStock: true,
  description: 'Premium industrial safety boot designed for professionals working in construction sites, factories, warehouses, engineering environments and other high-risk workplaces. The MODULO LE S3S LOW TG offers superior protection, durability and comfort for long working hours.',

  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black / Grey'
  ],
showSimilar: true,

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
   showSimilar: true,

  images: [
    'assets/img/safety joggers/lights1ps sj.webp',
  ],

    inStock: true,
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
showSimilar: true,
  images: [
    'assets/img/safety joggers/lights1ps sj.webp',
  ],

  
    inStock: true,
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

  
    inStock: true,
    sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],
showSimilar: true,
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
showSimilar: true,
  
    inStock: true,
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

    inStock: true,
  sizes: [40,41,42,43,44,45,46],

  colors: [
    'Black',
    'Black/Yellow'
  ],

showSimilar: true,
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
  
    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,

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

    // inStock: true,
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

    inStock: true,
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

  
    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

  
    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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
  category: 'fire retardent coverall',
  brand: 'Dickies',
  price: 85000,

  images: [
    'assets/img/coveralls/dickies fireretardent coverall.webp',
  ],

    inStock: true,
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
 showSimilar: true,
  images: [
    "assets/img/total pws/total pw-2000w-150bar-TGT11226.jpg"
  ],

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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

    inStock: true,
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
},

    //  heatguns

    {
  id: 160,
  name: 'Ingco Heat Gun 2000w-HG200028',
  category: 'heat guns',
  brand: 'Ingco',
  price: 18500,

  images: [
    'assets/img/heatguns/ingco HG200028 Heat gun.jpg'
  ],

    inStock: true,
  description: 'The Ingco HG200028 Heat Gun is a high-performance electric heating tool designed for professional and DIY applications. It is ideal for paint removal, plastic bending, shrink wrapping, thawing frozen pipes, loosening rusted bolts, and drying surfaces. With its powerful motor and adjustable heat settings, it delivers reliable and consistent hot air for workshop and industrial use.',

  specification: `
  Model: HG200028
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Input Power: 2000W
  Temperature: 350°C / 550°C
  Air Flow: 300L/min – 500L/min
  `,

  features: `
  Two heat settings for different applications
  Powerful 2000W motor for fast heating
  Durable industrial design
  Comfortable ergonomic grip
  Suitable for paint stripping, plastic welding, and shrink wrapping
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

   {
  id: 12,
  name: 'Ingco Heat Gun HG200028',
  category: 'face shields',
  brand: 'Ingco',
  price: 18500,

  images: [
    'assets/img/ingco-hg200028-heatgun.jpg'
  ],

    inStock: true,
  description: 'The Ingco HG200028 Heat Gun is a high-performance electric heating tool designed for professional and DIY applications. It is ideal for paint removal, plastic bending, shrink wrapping, thawing frozen pipes, loosening rusted bolts, and drying surfaces. With its powerful motor and adjustable heat settings, it delivers reliable and consistent hot air for workshop and industrial use.',

  specification: `
  Model: HG200028
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Input Power: 2000W
  Temperature: 350°C / 550°C
  Air Flow: 300L/min – 500L/min
  `,

  features: `
  Two heat settings for different applications
  Powerful 2000W motor for fast heating
  Durable industrial design
  Comfortable ergonomic grip
  Suitable for paint stripping, plastic welding, and shrink wrapping
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// spillkits


{
  id: 13,
  name: '120L Spill Kit',
  category: 'spill kits',
  brand: 'Generic',
  price: 95000,

  images: [
    'assets/img/spill kits/120l spill kits.jpg'
  ],

    inStock: true,
  description: 'The 120L Spill Kit is a comprehensive emergency response solution designed for quick containment and clean-up of hazardous liquid spills in industrial environments. It is ideal for factories, workshops, oil and gas facilities, warehouses, laboratories, and transport operations. The kit contains highly absorbent materials capable of handling large spills efficiently while helping maintain workplace safety and environmental compliance.',

  specification: `
  Capacity: 120 Litres
  Application: Oil, chemical and general liquid spill control
  Container Type: Heavy-duty mobile bin with wheels
  Absorbent Type: High absorbency polypropylene pads and socks
  Usage Area: Industrial plants, warehouses, workshops, laboratories
  `,

  features: `
  Large 120L spill absorption capacity
  Highly absorbent pads and socks for fast spill containment
  Durable mobile bin for easy transport
  Suitable for oil, fuel, coolant and chemical spills
  Helps maintain workplace safety and environmental protection
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},





// first aid kits
{
  id: 70,
  name: '50 Persons First Aid Kit',
  category: 'first aid kits',
  brand: 'Generic',
  price: 28000,

  images: [
    'assets/img/first aids/first aid green 50 people.jpg'
  ],

    inStock: true,
  description: 'The 50 Persons First Aid Kit is a comprehensive emergency medical kit designed to provide immediate first aid treatment for workplaces, schools, construction sites, and industrial facilities. It contains essential medical supplies required to treat minor injuries such as cuts, burns, bruises, and sprains before professional medical care is available. The kit is neatly organized in a durable portable box for quick access during emergencies.',

  specification: `
  Capacity: Suitable for up to 50 persons
  Application: Workplace and industrial first aid response
  Case Type: Durable portable plastic box
  Usage Area: Offices, factories, schools, construction sites, warehouses
  Compliance: Workplace first aid safety requirements
  `,

  features: `
  Complete emergency first aid solution for workplaces
  Organized compartments for easy access to medical supplies
  Portable and durable storage box
  Ideal for treating minor injuries quickly
  Suitable for offices, workshops, factories, and construction sites
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},



// nose mask
{
  id: 90,
  name: '3M 6200 Half Face Respirator Mask',
  category: 'nose masks',
  brand: '3M',
  price: 32000,

  images: [
    'assets/img/nose mask/3m-63000-half--nose-mask.jpg'
  ],

    inStock: true,
  description: 'The 3M 6200 Half Face Respirator Mask is a high-quality reusable respirator designed to provide reliable respiratory protection in hazardous work environments. It protects workers from airborne contaminants such as dust, fumes, gases, and vapors commonly found in industrial settings. The respirator features a soft elastomeric facepiece that provides a comfortable and secure seal on the face, allowing users to wear it for extended periods without discomfort. Its lightweight and low-profile design improves visibility and allows it to be used together with other safety equipment such as safety goggles, helmets, and face shields. The mask uses a dual-filter system and is compatible with a wide range of replaceable 3M cartridges and particulate filters, making it suitable for various industrial applications including spray painting, chemical handling, sanding, grinding, construction work, and manufacturing processes. The adjustable head harness ensures a stable and secure fit, while the reusable design helps reduce long-term operational costs compared to disposable masks.',

  specification: `
  Model: 6200
  Mask Type: Half Face Respirator
  Material: Soft Elastomeric Facepiece
  Size: Medium
  Reusable: Yes
  Compatible Filters: 3M 6000 Series Cartridges and 2000/5000 Series Filters
  Application: Industrial, painting, chemical handling, construction
  `,

  features: `
  Lightweight and comfortable respirator design
  Soft elastomeric face seal for improved comfort
  Reusable mask with replaceable filters
  Secure dual-strap head harness for stable fit
  Compatible with multiple 3M cartridges and particulate filters
  Effective protection against dust, fumes, gases and vapors
  Suitable for industrial and professional use
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


{
  id: 120,
  name: '3M PELTOR Optime 105 Earmuff',
  category: 'ear muffs',
  brand: '3M',
  price: 28000,

  images: [
    'assets/img/earmuffs/peltor 105 earmuff.jpg'
  ],

    inStock: true,
  description: 'The 3M PELTOR Optime 105 Earmuff is a high-performance hearing protection device designed for extremely noisy industrial environments. Manufactured by 3M, this earmuff provides excellent noise reduction to help protect workers from harmful sound levels commonly found in factories, airports, construction sites, and heavy machinery operations. The earmuff features a comfortable padded headband and soft ear cushions that create an effective acoustic seal around the ears. Its durable design allows it to withstand tough industrial use while maintaining comfort during long working hours. The Optime 105 is ideal for professionals who require reliable hearing protection in environments with high noise exposure.',

  specification: `
  Model: Optime 105
  Product Type: Over-the-head earmuff
  Noise Reduction Rating (NRR): 30 – 31 dB
  Material: Durable plastic ear cups with foam cushions
  Headband Type: Adjustable padded headband
  Application: Industrial noise protection
  `,

  features: `
  High noise reduction for extremely loud environments
  Comfortable padded headband for extended use
  Soft ear cushions for improved acoustic seal
  Durable and lightweight design
  Ideal for construction, factories, airports, and heavy machinery areas
  Helps prevent long-term hearing damage from excessive noise
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// Earplugs
{
  id: 130,
  name: '3M UltraFit Earplug - (100 Pairs/Pack)',
  category: 'ear plugs',
  brand: '3M',
  price: 25000,

  images: [
    'assets/img/earplugs/3m ultra fit earplugs.jpg'
  ],

    inStock: true,
  description: 'The 3M UltraFit Earplug is a high-quality reusable hearing protection solution designed for workers exposed to loud industrial noise. Manufactured by 3M, this earplug features a proprietary premolded triple-flange design that comfortably fits most ear canal sizes while providing reliable noise reduction. Unlike traditional foam earplugs that require rolling before insertion, the UltraFit earplug uses a convenient “no-roll” design that allows users to simply hold the stem and insert the earplug directly into the ear for quick and hygienic use. The earplugs are made from soft elastomeric polymer material that is washable and reusable, helping reduce waste and lowering replacement costs. With a Noise Reduction Rating (NRR) of approximately 25 dB, the earplugs effectively help protect workers from harmful noise levels in industrial environments such as factories, construction sites, oil and gas facilities, workshops, and heavy equipment operations. Each pack contains 100 pairs of earplugs, making it an economical and reliable hearing protection solution for workplaces requiring multiple users or large safety stock.',

  specification: `
  Product Name: 3M UltraFit Earplug
  Pack Size: 100 Pairs
  Type: Reusable premolded earplug
  Material: Soft elastomeric polymer
  Design: Triple-flange no-roll design
  Noise Reduction Rating (NRR): 25 dB
  Fit: One size fits most ear canals
  Application: Industrial hearing protection
  `,

  features: `
  Premolded triple-flange design for comfortable fit
  No-roll insertion for quick and hygienic use
  Washable and reusable polymer material
  Effective protection against harmful industrial noise
  Durable construction for repeated use
  Economical bulk pack of 100 pairs for workplaces
  Suitable for construction, manufacturing, drilling, grinding and heavy equipment operations
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},



// fall arrestor

{
  id: 140,
  name: 'Toyo 3M Fall Arrester',
  category: 'fall arrestors',
  brand: 'Toyo',
  price: 45000,

  images: [
    'assets/img/fall arresters/fall arrester.jpg'
  ],

    inStock: true,
  description: 'The Toyo 3M Fall Arrester is a reliable height safety device designed to protect workers from falls while working at elevated positions. It is commonly used in construction, scaffolding, tower maintenance, roofing, and industrial maintenance operations. The fall arrester works as part of a personal fall protection system by automatically locking onto the lifeline when a sudden fall occurs, preventing the worker from falling further and reducing the risk of serious injury. The unit is built with durable high-strength materials to withstand demanding industrial environments and is designed for smooth movement along the lifeline during normal work activities. Its compact and lightweight design allows easy installation and operation while maintaining maximum safety for workers working at height.',

  specification: `
  Product Type: Fall Arrester
  Brand: Toyo
  Lifeline Length: 3 Meters
  Material: High-strength steel and durable components
  Application: Working at height safety protection
  Usage: Construction, tower climbing, scaffolding, roofing
  `,

  features: `
  Automatic locking system during a fall
  Durable construction for industrial use
  Smooth movement along the lifeline during operation
  Compact and lightweight safety device
  Helps prevent serious injuries from height falls
  Suitable for construction, maintenance and industrial work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'

},


// life saving equiment 
{
  id: 150,
  name: 'Safety Life Buoy Offshore Ring 2.5kg',
  category: 'life buoy',
  brand: 'Generic',
  price: 22000,

  images: [
    'assets/img/life saving eq/life buoy 2.5kg.jpg'
  ],

    inStock: true,
  description: 'The Safety Life Buoy Offshore Ring 2.5kg is a highly visible and reliable water safety device designed to assist in emergency rescue situations. It is commonly used in offshore platforms, ships, swimming pools, waterfront facilities, and marine operations to help rescue individuals who accidentally fall into the water. The life buoy ring is constructed from durable high-density polyethylene material filled with buoyant foam, allowing it to float effectively and support a person in the water until rescue is completed. Its bright orange color ensures maximum visibility even from a distance, while the attached grab lines allow the victim to hold on securely. The 2.5 kg weight provides additional stability and durability, making it suitable for both marine and industrial safety environments. This life buoy ring is an essential lifesaving device for any facility operating near water or offshore locations.',

  specification: `
  Product Type: Life Buoy Ring
  Weight: 2.5 kg
  Material: High-density polyethylene outer shell
  Filling: Buoyant foam
  Color: High-visibility orange
  Application: Marine safety and water rescue
  Usage Area: Offshore platforms, ships, swimming pools, docks, waterfront facilities
  `,

  features: `
  Highly visible orange color for easy spotting during emergencies
  Durable outer shell designed for marine environments
  Lightweight but strong flotation capability
  Grab lines around the ring for secure holding
  Essential lifesaving equipment for offshore and water safety
  Suitable for ships, oil platforms, swimming pools and marine facilities
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


{
  id: 151,
  name: 'Automatic Inflatable Life Jacket',
  category: 'life jackets',
  brand: 'Generic',
  price: 65000,

  images: [
    'assets/img/life saving eq/automatic life jacket.avif'
  ],

    inStock: true,
  description: 'The Automatic Inflatable Life Jacket is a high-performance personal flotation device designed to provide immediate buoyancy and safety during water emergencies. It is widely used in marine operations, offshore oil and gas facilities, fishing, boating, and water sports activities. The life jacket automatically inflates when it comes into contact with water using a built-in CO₂ inflation system, helping to keep the wearer afloat and safe. The lightweight and compact design ensures maximum comfort and freedom of movement during normal activities while providing reliable flotation support during emergencies. Made with durable waterproof materials, the jacket also includes adjustable straps and secure buckles to ensure a snug and comfortable fit for different body sizes.',

  specification: `
  Product Type: Automatic Inflatable Life Jacket
  Inflation Type: Automatic CO₂ Inflation System
  Buoyancy: High buoyancy support for water safety
  Material: Durable waterproof nylon fabric
  Activation: Automatic water-activated inflation
  Usage Area: Marine operations, offshore work, boating, fishing
  `,

  features: `
  Automatic inflation when submerged in water
  Lightweight and comfortable design
  Adjustable straps for secure and personalized fit
  High visibility color for emergency rescue situations
  Durable waterproof material suitable for marine environments
  Ideal for offshore workers, boaters, and marine safety operations
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},



// cutting machine

{
  id: 170,
  name: 'Ingco 2000W Cut Off Saw',
  category: 'cutting machines',
  brand: 'Ingco',
  price: 95000,

  images: [
    'assets/img/cutting machines/ingco cut off saw-2000w.webp'
  ],

    inStock: true,
  description: 'The Ingco 2000W Cut Off Saw is a powerful and durable metal cutting machine designed for professional workshops, fabrication shops, construction sites, and industrial applications. Equipped with a high-performance 2000W motor, the saw delivers strong cutting power for efficiently cutting steel, metal pipes, rods, and other tough materials. The machine is designed with a stable base and a heavy-duty vice clamp that securely holds materials during cutting, ensuring precise and accurate results. Its ergonomic handle and quick-release adjustment system allow easy operation and improved control. Built with strong industrial-grade materials, the Ingco cut off saw provides long-lasting performance and reliability for demanding metal cutting tasks.',

  specification: `
  Brand: Ingco
  Power Input: 2000W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  No-load Speed: 3800 rpm
  Disc Diameter: 355 mm (14 inches)
  Application: Metal cutting
  `,

  features: `
  Powerful 2000W motor for efficient metal cutting
  Heavy-duty base for improved stability
  Strong vice clamp for secure material holding
  Ergonomic handle for comfortable operation
  Suitable for cutting metal pipes, steel bars and rods
  Durable industrial design for professional use
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// hand mixers

{
  id: 200,
  name: 'Total 1400W Hand Mixer',
  category: 'mixers',
  brand: 'Total',
  price: 55000,

  images: [
    'assets/img/hand mixers/total hand mixer-1400w.jpg'
  ],

    inStock: true,
  description: 'The Total 1400W Hand Mixer is a powerful and reliable mixing tool designed for construction and industrial applications. It is ideal for mixing materials such as paint, mortar, cement, adhesives, plaster, and other building compounds. Powered by a durable 1400W motor, the mixer delivers consistent mixing performance while reducing manual effort. The ergonomic dual-handle design provides better control and stability during operation, making it suitable for professional builders, contractors, and maintenance workers. Its strong gearbox and heavy-duty construction ensure long service life even in demanding work environments.',


  
  specification: `
  Brand: Total
  Power Input: 1400W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  No-load Speed: 0 – 700 rpm
  Mixer Type: Electric construction mixer
  Application: Paint, mortar, plaster and cement mixing
  `,

  features: `
  Powerful 1400W motor for efficient mixing
  Ergonomic dual-handle design for better control
  Strong gearbox for heavy-duty applications
  Ideal for mixing cement, paint and adhesives
  Durable construction for long-term use
  Suitable for construction and renovation work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


{
  id: 201,
  name: 'Total Hand Mixer-1800w- Double Rod',
  category: 'mixers',
  brand: 'Total',
  price: 68000,

  images: [
    'assets/img/hand mixers/total hand mixer-1800w.jpg'
  ],

    inStock: true,
  description: 'The Total 1800W Hand Mixer is a heavy-duty electric mixing machine designed for demanding construction and industrial mixing tasks. Equipped with a powerful 1800W motor, the mixer delivers high torque and consistent performance for mixing thick materials such as cement, mortar, plaster, paint, and tile adhesives. The machine features a strong metal gearbox and an ergonomic double-handle grip that provides excellent control and stability during operation. Built for professional use, the Total 1800W Hand Mixer ensures fast, efficient mixing and long-lasting durability on construction sites and renovation projects.',

  specification: `
  Brand: Total
  Power Input: 1800W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  No-load Speed: 0 – 750 rpm
  Mixer Type: Electric construction mixer
  Application: Cement, paint, plaster and adhesive mixing
  `,

  features: `
  Powerful 1800W motor for heavy-duty mixing
  High torque performance for thick materials
  Durable gearbox for professional construction use
  Comfortable dual-handle grip for better stability
  Ideal for mixing cement, mortar, plaster and paint
  Strong and reliable design for demanding job sites
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// polishers

{
  id: 220,
  name: 'Ingco 1400W Angle Polisher',
  category: 'polishers',
  brand: 'Ingco',
  price: 52000,

  images: [
    'assets/img/polishers/ingco angle polisher -1400w.jpg'
  ],

    inStock: true,
  description: 'The Ingco 1400W Angle Polisher is a powerful and reliable polishing tool designed for professional surface finishing and polishing applications. Powered by a high-performance 1400W motor, this machine delivers strong torque and smooth rotation for polishing, buffing, waxing, and restoring surfaces. It is widely used in automotive detailing, metal finishing, furniture polishing, and industrial maintenance tasks. The polisher features an ergonomic design with a comfortable grip handle that allows better control during operation. Built with durable industrial-grade components, the Ingco 1400W Angle Polisher ensures long-lasting performance and consistent results for professionals and workshop users.',

  specification: `
  Brand: Ingco
  Power Input: 1400W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  No-load Speed: 1000 – 3000 rpm
  Disc Diameter: 180 mm
  Application: Surface polishing and finishing
  `,

  features: `
  Powerful 1400W motor for efficient polishing
  Variable speed control for different polishing tasks
  Ergonomic handle for better control
  Durable construction for professional use
  Ideal for automotive polishing, metal finishing and waxing
  Smooth and stable polishing performance
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


{
  id: 221,
  name: 'Ingco Cordless Angle Polisher',
  category: 'polishers',
  brand: 'Ingco',
  price: 78000,

  images: [
    'assets/img/ingco-cordless-angle-polisher.jpg'
  ],

    inStock: true,
  description: 'The Ingco Cordless Angle Polisher is a portable and efficient polishing tool designed for professionals who require flexibility and mobility during polishing tasks. Powered by a rechargeable lithium-ion battery, this cordless polisher allows users to work freely without the restriction of power cables. It is suitable for polishing automotive surfaces, metal parts, furniture, and painted surfaces. The lightweight design and ergonomic grip provide comfortable handling while maintaining precise control during operation. With its powerful motor and durable construction, the Ingco Cordless Angle Polisher delivers reliable performance for both professional workshops and maintenance work.',

  specification: `
  Brand: Ingco
  Power Source: Cordless Lithium-ion Battery
  Voltage: 20V
  No-load Speed: 2000 – 4500 rpm
  Disc Diameter: 125 mm
  Application: Surface polishing and finishing
  `,

  features: `
  Cordless design for maximum mobility
  Powerful motor for efficient polishing
  Lightweight and ergonomic design
  Rechargeable lithium-ion battery system
  Suitable for automotive detailing and surface finishing
  Durable construction for professional use
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// spray guns

{
  id: 240,
  name: 'Ingco 450W Electric Spray Gun',
  category: 'spray guns',
  brand: 'Ingco',
  price: 42000,

  images: [
    'assets/img/spray guns/ingco spray guns 450w.webp'
  ],

    inStock: true,
  description: 'The Ingco 450W Electric Spray Gun is a compact and efficient painting tool designed to deliver smooth and even paint coverage for a variety of applications. Powered by a 450W motor, the spray gun allows users to quickly apply paint, varnish, and other coatings on surfaces such as walls, furniture, fences, and metal structures. Its lightweight design and ergonomic handle make it easy to control during operation, reducing fatigue during long painting tasks. The adjustable spray pattern and flow control allow users to achieve professional finishing results with minimal paint wastage. The Ingco spray gun is ideal for DIY users, painters, and maintenance professionals who need a reliable and easy-to-use spraying solution.',

  specification: `
  Brand: Ingco
  Power Input: 450W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Container Capacity: 800 ml
  Spray Type: Electric paint sprayer
  Application: Painting walls, furniture, metal and wood surfaces
  `,

  features: `
  Powerful 450W motor for efficient paint spraying
  Lightweight design for comfortable handling
  Adjustable spray pattern for different surfaces
  Even paint distribution for professional finish
  Ideal for DIY painting, furniture finishing and wall painting
  Easy to clean and maintain
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


{
  id: 241,
  name: 'Total 550W Electric Spray Gun',
  category: 'spray guns',
  brand: 'Total',
  price: 47000,

  images: [
    'assets/img/total-550w-spray-gun.jpg'
  ],

    inStock: true,
  description: 'The Total 550W Electric Spray Gun is a powerful and efficient painting tool designed for smooth and uniform paint application across a wide range of surfaces. Equipped with a strong 550W motor, this spray gun delivers consistent spray performance, making it suitable for painting walls, wooden furniture, metal structures, doors, and fences. Its ergonomic design provides comfortable handling and improved control during operation, while the adjustable spray settings allow users to customize paint flow and spray pattern for different painting tasks. The Total spray gun is ideal for professional painters, renovation projects, workshops, and DIY home improvement jobs.',

  specification: `
  Brand: Total
  Power Input: 550W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Container Capacity: 800 ml
  Spray Type: Electric paint sprayer
  Application: Wall painting, furniture finishing and metal coating
  `,

  features: `
  Powerful 550W motor for strong spraying performance
  Adjustable spray pattern and paint flow
  Ergonomic grip for comfortable operation
  Even paint coverage for professional results
  Suitable for painting walls, furniture, fences and metal surfaces
  Durable construction for long-term use
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// bag closer

{
  id: 260,
  name: 'Guru Special Bag Closer Machine With Oil Pump',
  category: 'bag closers',
  brand: 'Guru',
  price: 180000,

  images: [
    'assets/img/bag closers/guru bag closer machine.jpg'
  ],

    inStock: true,
  description: 'The Guru Special Bag Closer Machine with Oil Pump is a portable industrial sewing machine designed for efficiently sealing filled bags in commercial and industrial environments. It is widely used in agriculture, food processing, manufacturing, and packaging industries to close bags containing products such as rice, flour, fertilizer, seeds, animal feed, and cement. The machine operates using a single-thread chain stitch system that creates strong and secure closures on various types of bags including paper bags, woven polypropylene (PP) sacks, HDPE bags, and textile packaging materials. Its built-in oil pump lubrication system ensures smooth operation by automatically supplying oil to internal moving parts, reducing wear and improving durability. The lightweight portable design allows operators to easily carry and use the machine in warehouses, production lines, and packaging stations. Built with durable industrial components, the Guru bag closer machine delivers reliable performance and high efficiency for businesses handling large volumes of bag packaging.',

  specification: `
  Brand: Guru
  Machine Type: Portable Bag Closing Sewing Machine
  Stitch Type: Single Thread Chain Stitch
  Stitch Length: 7.2 mm (Fixed)
  Sewing Speed: 4 – 8 seconds per bag
  Motor Power: 1/10 HP (8000 RPM)
  Voltage: 220V – 240V
  Needle Type: DBx257 #25
  Weight: Approx. 5 – 6 kg
  Lubrication System: Built-in Oil Pump
  `,

  features: `
  Portable industrial sewing machine for closing filled bags
  Built-in oil pump lubrication system for smooth operation
  High-speed sewing performance for efficient packaging
  Durable construction for heavy-duty industrial use
  Suitable for paper, woven, polypropylene and textile bags
  Easy to operate and requires minimal training
  Ideal for agricultural, food processing and manufacturing industries
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// nailer

{
  id: 270,
  name: 'Ingco Cordless Pin Nailer 20V (35mm) With 2.0Ah Battery & Charger',
  category: 'nailers',
  brand: 'Ingco',
  price: 175000,
  images: [
    'assets/img/nailers/ingco cordless brad nailers 35mm.jpg'
  ],

    inStock: true,
  description: 'The Ingco 20V Cordless Pin Nailer is a high-performance fastening tool designed for precision finishing and woodworking tasks. Powered by a 20V lithium-ion battery, the nailer provides cordless convenience and mobility without the need for air compressors or power cords. It supports pin nails up to 35mm in length, making it ideal for delicate finishing work such as furniture assembly, cabinetry installation, trim fixing, panel work, and decorative woodworking. The tool features a lightweight ergonomic design that ensures comfortable handling and improved control during operation. Built with durable industrial-grade components, the Ingco cordless pin nailer delivers consistent firing performance and accurate nail placement for clean and professional finishing results. The included 2.0Ah lithium-ion battery and charger provide reliable power and quick recharging, making it suitable for both professional carpenters and DIY users.',

  specification: `
  Brand: Ingco
  Tool Type: Cordless Pin Nailer
  Power Source: 20V Lithium-Ion Battery
  Battery Capacity: 2.0Ah
  Maximum Nail Length: 35mm
  Nail Type: Pin Nails
  Operation: Cordless Electric
  Application: Woodworking and finishing work
  `,

  features: `
  Cordless design for maximum flexibility and mobility
  Powered by a 20V lithium-ion rechargeable battery
  Supports pin nails up to 35mm for finishing applications
  Lightweight and ergonomic design for comfortable use
  Precision firing system for clean nail placement
  Ideal for furniture assembly, trim installation and cabinetry work
  Durable construction suitable for professional use
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// guns and trimmers

{
  id: 290,
  name: 'Total 100W Hot Glue Gun',
  category: 'trimmers',
  brand: 'Total',
  price: 12000,

  images: [
    'assets/img/guns and trimmers/total glue guns 100w.jpg'
  ],


 inStock:true,
  description: 'The Total 100W Hot Glue Gun is a reliable and efficient bonding tool designed for a wide range of repair, crafting, and construction applications. Powered by a 100W heating element, the glue gun quickly melts glue sticks to provide strong and durable bonding for materials such as wood, plastic, fabric, ceramics, cardboard, and metal surfaces. Its ergonomic trigger design allows precise glue flow control, ensuring neat and accurate application during use. The compact and lightweight design makes it comfortable to handle for extended periods, while the built-in heating system ensures fast heat-up time and consistent performance. The Total hot glue gun is suitable for DIY projects, furniture repairs, decoration work, packaging, and professional workshop use.',

  specification: `
  Brand: Total
  Power Input: 100W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Glue Stick Diameter: 11 mm
  Heating Time: 3 – 5 minutes
  Application: Bonding and repair tasks
  `,

  features: `
  Powerful 100W heating element for fast melting
  Smooth trigger mechanism for precise glue control
  Suitable for wood, plastic, fabric, metal and ceramics
  Quick heating system for efficient operation
  Lightweight and ergonomic design
  Ideal for DIY crafts, repairs and workshop use
  Durable construction for long service life
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// impulse sealers
{
  id: 320,
  name: 'Impulse Sealer FS-300',
  category: 'impulse sealers',
  brand: 'Generic',
  price: 35000,

  images: [
    'assets/img/impulser sealer/impulse sealers fs 300.webp'
  ],

    inStock: true,
  description: 'The FS-300 Impulse Sealer is a reliable and easy-to-use packaging machine designed for sealing plastic bags quickly and efficiently. It uses impulse heating technology that generates heat only when the sealing arm is pressed down, making it energy efficient and safe to operate. The machine provides a strong and airtight seal on various types of plastic packaging materials such as polyethylene (PE), polypropylene (PP), bubble wrap, and laminated bags. With a 300mm sealing length, it is ideal for sealing food packaging, retail products, electronics packaging, and small industrial goods. The adjustable temperature control allows users to set the appropriate sealing level based on the thickness of the packaging material. Built with durable metal construction, the FS-300 impulse sealer delivers consistent performance for shops, warehouses, packaging stations, and small manufacturing operations.',

  specification: `
  Model: FS-300
  Machine Type: Impulse Heat Sealer
  Sealing Length: 300 mm (12 inches)
  Sealing Width: 2 – 3 mm
  Power: 400W
  Voltage: 220V – 240V
  Temperature Control: Adjustable timer
  Application: Plastic bag sealing
  `,

  features: `
  300 mm sealing length for medium-sized packaging
  Energy-efficient impulse heating system
  Adjustable timer for different plastic thickness
  Strong airtight sealing performance
  Durable metal body construction
  Easy operation with manual press handle
  Suitable for food packaging, retail, and industrial use
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// planer

{
  id: 340,
  name: 'Ingco 1500W Thickness Planer (5–153mm)',
  category: 'planers',
  brand: 'Ingco',
  price: 320000,

  images: [
    'assets/img/planers/ingco 1500w thickness planer.webp',
    'assets/img/planers/ingco 1500w thickness planer.webp2.webp',
    'assets/img/planers/ingco 1500w thickness planer.webp3.webp'

  ],

    inStock: true,
  description: `
The Ingco 1500W Thickness Planer is a professional woodworking machine designed for accurately planing and smoothing wooden boards to a uniform thickness. Powered by a strong 1500W motor, this planer delivers high cutting performance and precision, making it suitable for carpentry workshops, furniture production, and woodworking projects.
The machine supports planing thickness from 5mm to 153mm, allowing users to work on a wide range of wood sizes and materials. Its durable construction and stable base provide reliable performance during operation, while the adjustable cutting depth ensures precise control for professional finishing results.
The Ingco thickness planer is ideal for carpenters, furniture manufacturers, and woodworking professionals who require efficient and accurate wood surface preparation.
Items Included in the Package:
• 1 × Ingco 1500W Thickness Planer
• 1 × Set of Planer Blades
• 1 × Push Block
• 1 × Dust Extraction Port
• 1 × Adjustment Tools / Wrench
• 1 × User Manual
`,

  specification: `
  Brand: Ingco
  Power Input: 1500W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Planing Width: 318 mm
  Planing Thickness Range: 5 – 153 mm
  Cutting Depth: Up to 2.5 mm per pass
  No-load Speed: 8500 rpm
  Application: Wood planing and thickness adjustment
  `,

  features: `
  Powerful 1500W motor for high-performance wood planing
  Adjustable thickness range from 5mm to 153mm
  Smooth and precise cutting for professional woodworking
  Durable and stable machine design
  Ideal for carpentry workshops and furniture production
  Efficient wood surface finishing and thickness leveling
  Easy-to-adjust cutting depth control
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// ppr

{
  id: 350,
  name: 'Total PPR Welding Machine TT328151',
  category: 'power tools',
  brand: 'Total',
  price: 38000,

  images: [
    'assets/img/ppr/total ppr machine.jpg2.jpg'
  ],

    inStock: true,
 description: `
The Total PPR Welding Machine TT328151 is a professional pipe fusion tool designed for installing and repairing PPR plumbing systems.
It is widely used by plumbers and construction professionals to join polypropylene pipes securely and efficiently.
The machine works by heating both the pipe and fitting to the required temperature and then fusing them together to create a strong, leak-proof joint.
Powered by a reliable heating element, the machine quickly reaches operating temperature and maintains stable heat for consistent welding results.
Its compact and lightweight design makes it easy to transport and use in homes, buildings, and construction sites.
Built with durable components, the Total PPR welding machine delivers reliable performance for everyday plumbing installation work.

Items Included in the Package:
• 1 × Total PPR Welding Machine TT328151
• 1 × Heating Plate
• 3 × Heating Dies (20mm, 25mm, 32mm)
• 1 × Metal Support Stand
• 1 × Allen Key / Adjustment Tool
• 1 × User Manual
`,

  specification: `
  Brand: Total
  Model: TT328151
  Tool Type: PPR Pipe Welding Machine
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Power Input: 800W
  Temperature Range: Up to 300°C
  Welding Pipe Sizes: 20mm, 25mm, 32mm
  Application: PPR pipe installation and plumbing work
  `,

  features: `
  Fast heating system for efficient pipe welding
  Suitable for PPR plastic pipe installation
  Durable heating plate for consistent performance
  Compact and lightweight design for easy operation
  Creates strong and leak-proof pipe connections
  Ideal for plumbing repairs and construction projects
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// routers

{
  id: 360,
  name: 'Total 1600W Router Machine',
  category: 'routers',
  brand: 'Total',
  price: 95000,

  images: [
    'assets/img/routers/total 1600w router.webp',
     'assets/img/driils/Bosch Gsr 180-li Cordless Drill Driver  10mm.webp3.webp',
      'assets/img/driils/ingco core drills 3800w.jpg',
       'assets/img/routers/total 1600w router.webp'
  ],

    inStock: true,
  description: `The Total 1600W Router Machine is a powerful woodworking tool designed for precision cutting, trimming, shaping, and decorative edge finishing on wood surfaces. Equipped with a high-performance 1600W motor, the router delivers strong and consistent power, allowing users to work on hardwood, softwood, plywood, and other wooden materials with ease. This router machine is ideal for carpenters, furniture makers, and woodworking professionals who require accurate grooves, slots, and edge profiles. The adjustable depth control enables precise cutting depth for different woodworking applications, while the ergonomic handles provide stability and comfort during operation. Its durable construction ensures long-lasting performance in workshops, carpentry shops, and construction environments.

Items Included in the Package:
• 1 × Total 1600W Router Machine
• 1 × Parallel Guide Fence
• 1 × Collet Nut
• 1 × Set of Carbon Brushes
• 1 × Wrench / Spanner
• 1 × Dust Extraction Adapter
• 1 × User Manual`,

  specification: `
  Brand: Total
  Power Input: 1600W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  No-load Speed: 22000 rpm
  Collet Size: 12 mm
  Adjustable Cutting Depth: Yes
  Application: Wood routing, trimming, grooving, and shaping
  `,

  features: `
  Powerful 1600W motor for efficient wood routing
  High-speed performance for smooth cutting
  Adjustable depth control for precise operations
  Comfortable dual-handle design for better control
  Durable construction for long-term use
  Ideal for furniture making and carpentry work
  Suitable for trimming, shaping, and grooving wood
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// Sanders
{
  id: 370,
  name: 'Ingco Drywall Sander 1050W',
  category: 'sanders',
  brand: 'Ingco',
  price: 185000,

  images: [
    'assets/img/sanders/ingco 1050w dry wall sanders.jpg'
  ],

  description: `The Ingco 1050W Drywall Sander is a professional power tool designed for sanding drywall surfaces, plaster walls, ceilings, and painted surfaces to achieve a smooth and even finish. Powered by a strong 1050W motor, the machine delivers consistent sanding performance, making it suitable for construction sites, renovation work, and interior finishing projects. The long reach design allows users to comfortably sand high walls and ceilings while maintaining good control during operation. Its efficient dust extraction system helps reduce dust in the working environment, keeping the workspace cleaner and improving visibility during sanding tasks. Built with durable materials and an ergonomic handle design, the Ingco drywall sander provides reliable performance for painters, contractors, and professional builders.

Items Included in the Package:
• 1 × Ingco 1050W Drywall Sander
• 1 × Flexible Dust Extraction Hose
• 6 × Sanding Discs
• 1 × Dust Collection Bag
• 1 × Adjustment Tool / Wrench
• 1 × User Manual`,

  specification: `
  Brand: Ingco
  Power Input: 1050W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  No-load Speed: 800 – 2300 rpm
  Sanding Pad Diameter: 225 mm
  Dust Extraction: Yes
  Application: Drywall sanding, wall finishing, and surface preparation
  `,

  features: `
  Powerful 1050W motor for efficient drywall sanding
  Adjustable speed control for different sanding applications
  Long reach design for sanding walls and ceilings
  Built-in dust extraction system for cleaner operation
  Ergonomic handle for comfortable control
  Ideal for construction, renovation, and painting preparation
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// Edge banding machines
{
  id: 390,
  name: 'Workflex Edge Binding Machine',
  category: 'edge binding machanines',
  brand: 'Workflex',
  price: 450000,

  images: [
    'assets/img/edge binding machine/edge binding machine.jpg'
  ],

  description: `The Workflex Edge Binding Machine is a professional woodworking machine designed for applying edge banding to plywood, MDF, particle board, and other furniture panels. It is widely used in carpentry workshops, furniture manufacturing, and interior design projects to give wooden boards a smooth and finished edge. The machine heats adhesive and firmly bonds edge banding tape to board edges, improving durability and giving furniture a clean, professional appearance. Its efficient heating system ensures consistent glue melting for strong bonding, while the ergonomic design allows easy operation and precise edge application. Built with durable components, the Workflex edge binding machine provides reliable performance for cabinet makers, carpenters, and furniture manufacturers.

Items Included in the Package:
• 1 × Workflex Edge Binding Machine
• 1 × Edge Banding Glue Pot
• 1 × Heating System Unit
• 1 × Edge Banding Roller
• 1 × Adjustment Tools
• 1 × User Manual`,

  specification: `
  Brand: Workflex
  Machine Type: Edge Binding Machine
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Heating System: Electric Heating
  Application: Edge banding for plywood, MDF, and wooden boards
  `,

  features: `
  Efficient heating system for strong edge bonding
  Suitable for furniture manufacturing and carpentry work
  Smooth and professional edge finishing
  Durable construction for long-term use
  Easy-to-operate design for workshop environments
  Ideal for cabinet making and wood panel finishing
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// wall chaser

{
  id: 395,
  name: 'Ingco Wall Chaser Power Tool-3000W-WLC30001',
  category: 'wall chasers',
  brand: 'Ingco',
  price: 210000,

  images: [
    'assets/img/wall chasers/ingco wall chasers 3000w.jpg'
  ],

  description: `The Ingco Wall Chaser Power Tool 3000W WLC30001 is a high-performance cutting machine designed for creating precise grooves in walls for electrical wiring, water pipes, and cable installations. Powered by a powerful 3000W motor, the machine delivers strong cutting performance suitable for concrete, brick, and plaster walls. It is widely used by electricians, plumbers, and construction professionals during building installations and renovation projects. The adjustable cutting depth and width allow users to create accurate channels for different installation requirements. Equipped with a dust extraction system, the wall chaser helps reduce dust during operation, improving visibility and maintaining a cleaner work environment. Built with durable materials and ergonomic handles, the Ingco wall chaser provides stability, safety, and reliable performance on demanding construction tasks.

Items Included in the Package:
• 1 × Ingco Wall Chaser 3000W WLC30001
• 2 × Diamond Cutting Blades
• 1 × Dust Extraction Adapter
• 1 × Auxiliary Handle
• 1 × Spanner / Adjustment Tool
• 1 × User Manual`,

  specification: `
  Brand: Ingco
  Model: WLC30001
  Power Input: 3000W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  No-load Speed: 6500 rpm
  Blade Diameter: 125 mm
  Adjustable Cutting Depth: Yes
  Application: Wall groove cutting for electrical and plumbing installations
  `,

  features: `
  Powerful 3000W motor for heavy-duty wall cutting
  Adjustable cutting depth and width for accurate grooves
  Suitable for concrete, brick, and plaster walls
  Built-in dust extraction for cleaner operation
  Ergonomic handle design for better control
  Ideal for electricians, plumbers, and construction professionals
  Durable construction for demanding job site use
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// grease guns

{
  id: 345,
  name: 'Pressol Grease Gun',
  category: 'grease guns',
  brand: 'Pressol',
  price: 22000,

  images: [
    'assets/img/grease guns/pressol grease guns.jpg2.jpeg'
  ],

  description: `The Pressol Grease Gun is a high-quality manual lubrication tool designed for applying grease to mechanical components such as bearings, joints, and moving machine parts. Manufactured with durable materials, it delivers reliable performance for automotive servicing, industrial maintenance, agricultural machinery, and construction equipment. The grease gun works by pumping lubricating grease through a nozzle directly into grease fittings, ensuring proper lubrication and reducing wear on critical machine components. Its ergonomic lever handle provides strong pressure for efficient grease delivery while maintaining comfortable operation. Pressol grease guns are widely used in workshops, garages, and maintenance operations due to their durability, precise grease flow, and long service life.

Items Included in the Package:
• 1 × Pressol Grease Gun
• 1 × High-Pressure Flexible Hose
• 1 × Steel Extension Tube
• 1 × 4-Jaw Grease Coupler
• 1 × User Manual`,

  specification: `
  Brand: Pressol
  Tool Type: Manual Grease Gun
  Capacity: 400 g grease cartridge
  Operating Pressure: Up to 400 bar
  Filling Options: Grease cartridge or bulk grease
  Application: Lubrication of machinery, vehicles, and industrial equipment
  `,

  features: `
  Durable metal body for long service life
  High pressure grease delivery for efficient lubrication
  Ergonomic lever handle for comfortable use
  Compatible with standard grease cartridges
  Suitable for automotive, industrial, and agricultural maintenance
  Reliable lubrication for moving mechanical parts
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

{
  id: 346,
  name: 'Ingco Grease Gun-GRG015001',
  category: 'grease guns',
  brand: 'Ingco',
  price: 18000,

  images: [
    'assets/img/grease guns/ingco greas gun 400cc.webp'
  ],

  description: `The Ingco Grease Gun GRG015001 is a heavy-duty manual lubrication tool designed for applying grease to mechanical components such as bearings, joints, and moving machine parts. Built with a durable 1.2mm steel tube and aluminum-cast head, it delivers strong pressure and reliable performance for automotive servicing, industrial maintenance, agricultural machinery, and construction equipment. The grease gun supports both 14oz grease cartridges and 400cc bulk filling, giving users flexibility depending on the lubrication method. Its ergonomic lever design allows smooth and controlled grease delivery, while the high-pressure pumping mechanism ensures grease reaches tight lubrication points efficiently. This tool is widely used in workshops, garages, and maintenance operations to reduce friction, prevent wear, and extend machine life.

Items Included in the Package:
• 1 × Ingco Grease Gun GRG015001
• 1 × 12" High-Pressure Flexible Nylon Hose
• 1 × Metallic Bend Spout
• 1 × User Manual`,

  specification: `
  Brand: Ingco
  Model: GRG015001
  Tool Type: Manual Grease Gun
  Capacity: 400cc / 14oz
  Loading Method: 14oz Cartridge or 400cc Bulk
  Working Pressure: 4500 psi
  Burst Pressure: 10000 psi
  Material: 1.2mm Steel Tube + Aluminum Cast
  Application: Lubrication of machinery, vehicles, and industrial equipment
  `,

  features: `
  Heavy-duty grease gun for professional lubrication
  High pressure output for effective grease delivery
  Compatible with standard grease cartridges or bulk grease
  Durable steel body with aluminum-cast head
  Flexible hose for reaching difficult lubrication points
  Ideal for automotive, industrial, and agricultural maintenance
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// drills

// electrical drills
{
  id: 360,
  name: 'Ingco 1100W Impact Drill 13mm (ID11008)',
  category: 'corded drills',
  brand: 'Ingco',
  price: 42000,
inStock:true,
  images: [
    'assets/img/driils/ingco 1100w electrical drills.jpg'
  ],

  description: `The Ingco 1100W Impact Drill 13mm (ID11008) is a powerful and versatile drilling tool designed for drilling into wood, metal, plastic, and masonry surfaces. Powered by a high-performance 1100W motor, the drill delivers strong impact force and high drilling efficiency, making it suitable for construction work, installation tasks, and general maintenance. The hammer drilling function allows users to easily drill into concrete and brick walls, while the variable speed control provides better precision for different drilling applications. Its ergonomic handle and auxiliary side handle offer improved stability and control during operation. Built with durable components, the Ingco impact drill provides reliable performance for electricians, technicians, carpenters, and construction professionals.

Items Included in the Package:
• 1 × Ingco 1100W Impact Drill (ID11008)
• 1 × Auxiliary Side Handle
• 1 × Depth Gauge Rod
• 1 × Chuck Key
• 1 × User Manual`,

  specification: `
  Brand: Ingco
  Model: ID11008
  Power Input: 1100W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Chuck Capacity: 13 mm
  No-load Speed: 0 – 2800 rpm
  Impact Rate: Up to 44800 bpm
  Function: Drilling and Hammer Drilling
  Application: Wood, metal, concrete, and masonry drilling
  `,

  features: `
  Powerful 1100W motor for efficient drilling
  Hammer drilling function for concrete and brick
  Variable speed control for better precision
  Durable 13mm keyed chuck
  Ergonomic handle design for comfortable operation
  Ideal for construction, installation, and maintenance work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// cordless drills
{
  id: 380,
  name: 'Bosch GSR 180-LI Cordless Drill Driver 3/8" (10mm) 18V',
  category: 'cordless drills',
  brand: 'Bosch',
  price: 135000,

  images: [
    'assets/img/driils/Bosch Gsr 180-li Cordless Drill Driver  10mm.webp'
  ],
inStock:true,
  description: `The Bosch GSR 180-LI Cordless Drill Driver is a reliable and high-performance power tool designed for drilling and screw driving in wood, metal, and plastic materials. Powered by an 18V lithium-ion battery system, this cordless drill provides strong torque and consistent performance for professional and DIY applications. The compact and lightweight design allows comfortable handling and improved control during extended use. It features a durable 3/8" (10mm) keyless chuck for quick and easy bit changes, while the two-speed gearbox ensures efficient drilling and fastening across different materials. Built with Bosch’s robust engineering, the GSR 180-LI delivers durability, long battery life, and dependable performance for technicians, installers, carpenters, and construction professionals.

Items Included in the Package:
• 1 × Bosch GSR 180-LI Cordless Drill Driver
• 2 × 18V Lithium-ion Batteries
• 1 × Battery Charger
• 1 × Double-Sided Screwdriver Bit
• 1 × Carrying Case
• 1 × User Manual`,

  specification: `
  Brand: Bosch
  Model: GSR 180-LI
  Battery Voltage: 18V
  Chuck Size: 3/8" (10mm)
  No-load Speed: 0 – 450 / 0 – 1700 rpm
  Max Torque: 54 Nm
  Battery Type: Lithium-ion
  Function: Drilling and Screw Driving
  Application: Wood, metal, and plastic drilling
  `,

  features: `
  Powerful 18V lithium-ion cordless drill
  Two-speed gearbox for drilling and fastening
  Durable 3/8" (10mm) keyless chuck
  Compact and lightweight ergonomic design
  Long battery life for extended working time
  Ideal for installation, maintenance, and construction work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// core drills
{
  id: 400,
  name: 'Ingco Industrial Core Diamond Drilling Machine 3800W 230mm (DDM38001)',
  category: 'core drills',
  brand: 'Ingco',
  price: 520000,

  images: [
    'assets/img/driils/ingco core drills 3800w.jpg'
  ],

  description: `The Ingco DDM38001 Industrial Core Diamond Drilling Machine is a heavy-duty drilling tool designed for creating precise holes in concrete, reinforced concrete, stone, and brick materials. Powered by a high-performance 3800W motor, this machine delivers strong drilling power suitable for demanding construction and industrial applications. It supports drilling diameters up to 230mm, making it ideal for plumbing, electrical installations, HVAC systems, and structural construction work. The machine is designed with a stable drilling stand that provides accurate vertical drilling and improved control during operation. Its durable construction ensures reliable performance on construction sites, while the powerful motor allows smooth and efficient drilling through tough building materials.

Items Included in the Package:
• 1 × Ingco Core Diamond Drilling Machine (DDM38001)
• 1 × Heavy-Duty Drilling Stand
• 1 × Water Hose Connector
• 1 × Set of Mounting Bolts
• 1 × Adjustment Tools
• 1 × User Manual`,

  specification: `
  Brand: Ingco
  Model: DDM38001
  Power Input: 3800W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Maximum Drilling Diameter: 230 mm
  No-load Speed: 700 rpm
  Application: Concrete, brick, and stone core drilling
  `,

  features: `
  Powerful 3800W motor for heavy-duty drilling
  Supports core drilling up to 230mm diameter
  Stable drilling stand for precise vertical drilling
  Suitable for concrete, brick, and stone surfaces
  Durable construction for industrial use
  Ideal for construction, plumbing, and electrical installations
  `
,
  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

//  magnetic driils

{
  id: 350,
  name: 'Eurotek 35mm Magnetic Drill',
  category: 'magnetic drills',
  brand: 'Eurotek',
  price: 280000,
  images: [
    'assets/img/drilling-machines/eurotek-35mm-magnetic-drill.jpg'
  ],
inStock:true,
  description: `The Eurotek 35mm Magnetic Drill is a powerful portable drilling machine designed for precise hole cutting in steel and other ferrous metals. It features a strong electromagnetic base that firmly attaches the machine to metal surfaces, allowing stable drilling even on vertical or overhead positions. With a drilling capacity of up to 35mm, the machine is ideal for fabrication workshops, construction sites, steel structure installation, and industrial maintenance. The drill supports annular cutters and twist drill bits, making it suitable for drilling, countersinking, and reaming operations. Its compact design improves portability while maintaining high drilling accuracy and performance for professional metalworking tasks.

Items Included in the Package:
• 1 × Eurotek 35mm Magnetic Drill
• 1 × Safety Chain
• 1 × Coolant Bottle
• 1 × Chuck Adapter
• 1 × Set of Allen Keys
• 1 × Carrying Case
• 1 × User Manual`,

  specification: `
  Brand: Eurotek
  Tool Type: Magnetic Base Drill
  Maximum Drilling Capacity: 35 mm
  Power Input: 1100W – 1500W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  No-load Speed: Up to 750 rpm
  Magnetic Adhesion: Up to 1000 kg
  Application: Steel fabrication and industrial drilling
  `,

  features: `
  Strong magnetic base for secure metal drilling
  Supports annular cutters and twist drill bits
  Drilling capacity up to 35mm
  Portable design for site and workshop use
  Accurate and stable drilling on metal surfaces
  Suitable for fabrication, construction, and engineering work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// Rotary hammer drills
{
  id: 370,
  name: 'Maxmech Multi Functional Rotary Hammer Machine 1000W',
  category: 'rotary hammers',
  brand: 'Maxmech',
  price: 65000,

  images: [
    'assets/img/driils/maxmech RM drills-1000w.jpg'
  ],
inStock:true,
  description: `The Maxmech Multi Functional Rotary Hammer Machine 1000W is a powerful drilling and demolition tool designed for professional construction and heavy-duty DIY applications. Equipped with a strong 1000W motor, the machine delivers high impact energy for efficient drilling in concrete, brick, stone, and masonry materials. It features multiple operating modes including drilling, hammer drilling, and chiseling, allowing users to perform a wide range of tasks such as wall drilling, tile removal, and light demolition work. The ergonomic handle and durable body provide improved control and stability during operation. Designed for reliability and efficiency, the Maxmech rotary hammer is suitable for builders, electricians, plumbers, and general construction professionals.

Items Included in the Package:
• 1 × Maxmech Rotary Hammer Machine 1000W
• 1 × Auxiliary Side Handle
• 1 × Depth Gauge Rod
• 1 × Set of Drill Bits
• 1 × Chisel Bit
• 1 × Carrying Case
• 1 × User Manual`,

  specification: `
  Brand: Maxmech
  Power Input: 1000W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Tool Type: Rotary Hammer Drill
  Chuck Type: SDS Plus
  Operating Modes: Drill, Hammer Drill, Chisel
  Application: Concrete drilling, masonry work, and light demolition
  `,

  features: `
  Powerful 1000W motor for heavy-duty drilling
  Multi-functional modes for drilling and chiseling
  SDS Plus chuck system for quick bit changes
  Strong impact mechanism for concrete drilling
  Ergonomic handle for improved control
  Ideal for construction, renovation, and installation work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// drill press
{
  id: 405,
  name: 'TOTAL Drill Press 350W',
  category: 'drill press',
  brand: 'Total',
  price: 180000,

  images: [
    'assets/img/driils/total 450w drill press.jpg'
  ],
 inStock:true,
  description: `The TOTAL Drill Press 350W is a precision drilling machine designed for accurate vertical drilling in wood, metal, and plastic materials. Powered by a reliable 350W motor, this drill press provides stable and controlled drilling performance for workshops, fabrication shops, and DIY projects. The machine features an adjustable worktable and multiple speed settings that allow users to handle different drilling materials and bit sizes with ease. Its solid base and column design provide excellent stability and precision, ensuring clean and accurate holes during operation. The TOTAL drill press is ideal for carpenters, metalworkers, technicians, and hobbyists who require dependable drilling accuracy for professional and workshop use.

Items Included in the Package:
• 1 × TOTAL Drill Press 350W
• 1 × Adjustable Worktable
• 1 × Drill Chuck
• 1 × Chuck Key
• 1 × Column and Base Assembly
• 1 × Installation Tools
• 1 × User Manual`,

  specification: `
  Brand: Total
  Power Input: 350W
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Chuck Capacity: Up to 13 mm
  Speed Settings: Multiple speed levels
  Tool Type: Bench Drill Press
  Application: Precision drilling for wood, metal, and plastic
  `,

  features: `
  Powerful 350W motor for stable drilling performance
  Adjustable worktable for different drilling angles
  Multiple speed settings for various materials
  Strong column and base for improved stability
  Accurate vertical drilling for workshop tasks
  Suitable for woodworking, metalworking, and DIY projects
  `,


  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},




];





getSimilarProducts(category: string, excludeId: number): Product[] {
    return this.products
      .filter(p => p.category === category)
      .filter(p => p.id !== excludeId)
      .slice(0, 6);
  }

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query.trim());
  }

  clearSearch() {
    this.searchQuerySubject.next('');
  }

  // SEARCH LOGIC
  searchProducts(term: string): Product[] {

  if (!term.trim()) {
    return this.products;
  }

  const lower = term.toLowerCase();

  return this.products.filter(p =>
    p.name.toLowerCase().includes(lower) ||
    p.category.toLowerCase().includes(lower) ||
    p.brand.toLowerCase().includes(lower)
  );
}

  // get all products unfiltered
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

  getCategories(): string[] {
  const categories = this.products.map(product => product.category);
  return [...new Set(categories)];
}
}