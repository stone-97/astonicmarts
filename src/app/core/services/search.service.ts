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


  
// powertools 
// combokits
// starts at 1 to 1000 
// ends at 2000
 {
  id: 1,
  name: 'Total 3-in-1 Combo Kit TOSLI241198',
  group: 'power-tools',
  category: 'combo-kits',  
  brand: 'Total',
  price: 370000,

  images: [
    'assets/img/total combo kits/total-3-in-1.jpg',
  
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
  id: 2,
  name: 'INGCO Cordless Impact Wrench Combo Kit COSLI23011',
    group: 'power-tools',
    category: 'combo-kits',
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
  id: 3,
  name: 'TOTAL Combo Kit TOSLI241189',
  group: 'power-tools',
  category: 'combo-kits',
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

// glue guns
{
  id: 4,
  name: 'INGCO Glue Gun 100W',
  category: 'glue-guns',
   group: 'power-tools',
  brand: 'INGCO',
  price: 7500,

  images: [
    'assets/img/glue guns/ingco glue guns.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: 'INGCO Glue Gun 100W is a high-performance hot melt adhesive tool designed for fast and efficient bonding across a wide range of materials. It is ideal for crafts, repairs, packaging, woodworking and light industrial applications. With its 100W heating power, the glue gun heats up quickly and delivers a consistent glue flow for strong and durable adhesion. Suitable for both professionals and DIY users, it ensures precision and ease of use in various bonding tasks.',

  specification: `
  - Product Name: INGCO Hot Melt Glue Gun
  - Power: 100W
  - Voltage: 220–240V
  - Frequency: 50/60Hz
  - Heating Time: 3 – 5 minutes
  - Glue Stick Diameter: 11 mm
  - Nozzle Type: Precision metal nozzle
  - Temperature Control: Automatic temperature regulation
  - Body Material: Heat-resistant plastic
  - Cable Length: Standard power cable
  `,

  features: `
  - High power 100W for fast heating and strong bonding
  - Quick heat-up time for immediate use
  - Compatible with standard 11mm glue sticks
  - Smooth and consistent glue flow
  - Ergonomic trigger design for controlled application
  - Insulated nozzle for safe operation
  - Lightweight and easy to handle
  - Ideal for crafts, repairs, packaging and DIY projects
  - Built-in stand for safe resting during use
  `
},
// planer

{
  id: 5,
  name: 'Ingco 1500W Thickness Planer (5–153mm)',
  category: 'planers',
   group: 'power-tools',
  brand: 'Ingco',
  price: 320000,

  images: [
    'assets/img/planers/ingco-1500w-thickness-planer.webp',
    
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
  id: 6,
  name: 'Total PPR Welding Machine TT328151',
  group: 'power-tools',
  category: 'ppr',
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
  id: 7,
  name: 'Total 1600W Router Machine',
  category: 'routers',
  brand: 'Total',
  price: 95000,

  images: [
    'assets/img/routers/total-1600w-router.webp',
   
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
  id: 8,
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
  id: 9,
  name: 'Workflex Edge Binding Machine',
  category: 'edge-binding-machines',
  brand: 'Workflex',
  group: 'power-tools',
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
  id: 10,
  name: 'Ingco Wall Chaser Power Tool-3000W-WLC30001',
  category: 'wall-chasers',
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
  id: 11,
  name: 'Pressol Grease Gun',
  category: 'grease-guns',
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
  id: 12,
  name: 'Ingco Grease Gun-GRG015001',
  category: 'grease-guns',
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
  id: 13,
  name: 'Ingco 1100W Impact Drill 13mm (ID11008)',
  category: 'corded-drills',
  group: 'power-tools',
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
  id: 14,
  name: 'Bosch GSR 180-LI Cordless Drill Driver 3/8" (10mm) 18V',
  category: 'cordless-drills',
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
  id: 15,
  name: 'Ingco Industrial Core Diamond Drilling Machine 3800W 230mm (DDM38001)',
  category: 'core-drills',
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
  id: 16,
  name: 'Eurotek 35mm Magnetic Drill',
  category: 'magnetic-drills',
  brand: 'Eurotek',
  price: 280000,
  images: [
    'assets/img/driils/Eurotek-35mm-Magnetic-Drill.jpg'
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
  id: 17,
  name: 'Maxmech Multi Functional Rotary Hammer Machine 1000W',
  category: 'rotary-hammers',
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
  id: 18,
  name: 'TOTAL Drill Press 350W',
  category: 'drill-press',
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


// shop press
{
  id: 19,
  name: 'Hydraulic Shop Press 30 Ton',
  category: 'hydraulic-shop-press',
  brand: 'Generic',
  price: 850000,

  images: [
    'assets/img/shop press/Hydraulic-Workshop-ress-20ton.webp'
  ],

  inStock: true,

  colors: [
    'Blue',
    'Red'
  ],

  showSimilar: true,
  jumiaLink: '',
  kongaLink: '',

  description: 'The 30 Ton Hydraulic Shop Press is a robust and versatile industrial machine engineered for heavy-duty pressing, bending, straightening, and assembly operations. Built with a reinforced H-frame steel structure, this press ensures maximum stability and durability even under high-pressure workloads. Designed for use in automotive workshops, fabrication shops, and industrial maintenance environments, it is ideal for tasks such as removing and installing bearings, bushings, gears, pulleys, and other tightly fitted components. The powerful hydraulic system delivers consistent and controlled force up to 30 tons, making complex pressing operations safer and more efficient. The adjustable working table allows operators to accommodate different workpiece sizes with ease, while the integrated pressure gauge provides accurate force monitoring for precision work. Its user-friendly manual hydraulic mechanism ensures smooth operation without the need for external power sources, making it both cost-effective and reliable. With its heavy-duty construction, high load capacity, and versatile functionality, the 30T Hydraulic Shop Press is an essential tool for professionals who require strength, accuracy, and long-term performance in demanding workshop conditions.',

  specification: `- Capacity: 30 Ton
- Frame Type: H-Frame Steel Construction
- Hydraulic System: Manual / Bottle Jack
- Working Range: Adjustable Bed Height
- Stroke Length: Approx. 150mm
- Pressure Gauge: Included
- Power Source: Manual Hydraulic Operation`,

  features: `- High 30-ton pressing capacity
- Heavy-duty steel frame for durability
- Adjustable working table for flexibility
- Equipped with pressure gauge for accuracy
- Suitable for bearing, bushing, and gear pressing
- Easy to operate and maintain`
},

// cutting machine

{
  id: 20,
  name: 'Ingco 2000W Cut Off Saw',
  category: 'cutting-machines',
  brand: 'Ingco',
  price: 95000,

  images: [
    'assets/img/cutting machines/ingco-cut-off-saw-2000w.webp'
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
  id: 21,
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
  id: 22,
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
  id: 23,
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
     id: 24,
     name: 'INGCO Cordless Polishing Machine-20V-APLI20181',
     category: 'polishers',
     brand: 'INGCO',
     price: 185000,

     images: [
       'assets/img/polishers/INGCO Cordless-Polishing-Machine-APLI20181.png'
     ],

     inStock: true,

     description: `The INGCO Cordless Polishing Machine APLI20181 is a high-performance power tool designed for polishing, buffing, and surface finishing on a wide range of materials including metal, wood, and plastic. Powered by a reliable lithium-ion battery system, this cordless polisher delivers consistent speed and smooth operation without the limitations of power cords. Its 180mm polishing pad ensures wide surface coverage, making it ideal for automotive detailing, furniture finishing, and industrial surface maintenance.

Built with durability and user comfort in mind, the machine features an ergonomic handle design for better control and reduced fatigue during extended use. The variable speed control allows users to adjust the polishing intensity based on the material and application, ensuring professional results every time. This tool is suitable for technicians, auto-detailers, carpenters, and DIY users looking for efficiency and convenience in polishing tasks.

Items Included in the Package:
• 1 × INGCO Cordless Polishing Machine
• 1 × 180mm Polishing Pad
• 1 × 4.0Ah Lithium-ion Battery
• 1 × Charger
• 1 × Auxiliary Handle
• 1 × User Manual`,

     specification: `
  Brand: INGCO
  Model Number: APLI20181
  Tool Type: Cordless Polishing Machine
  Pad Diameter: 180 mm
  Battery Type: Lithium-ion
  Battery Capacity: 4.0Ah
  Voltage: 20V
  No-load Speed: 0 – 3000 RPM (Variable Speed)
  Speed Control: Yes
  Application: Polishing, buffing, surface finishing
  Suitable Materials: Metal, wood, plastic, painted surfaces
  `,

     features: `
  Cordless design for flexibility and mobility
  Powerful motor for efficient polishing performance
  Large 180mm pad for wider surface coverage
  Variable speed control for different applications
  Ergonomic handle for comfort and control
  Durable construction for long-term use
  Ideal for car detailing, furniture polishing, and workshop use
  Suitable for professional and DIY applications
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },

// spray guns

{
  id: 25,
  name: 'Ingco 450W Electric Spray Gun',
  category: 'spray-guns',
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
  id: 26,
  name: 'Total Electric HVLP Floor Based Paint Spray Gun 550W-TT5006',
  category: 'spray-guns',
  brand: 'Total',
  price: 47000,

  images: [
    'assets/img/spray guns/total-spray-gun-550w.jpg2.webp',
    'assets/img/spray guns/total-spray-gun-550w.jpg'
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
  id: 27,
  name: 'Guru Special Bag Closer Machine With Oil Pump',
  category: 'bag-closers',
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
  id: 28,
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



{
  id: 29,
  name: 'Total 100W Hot Glue Gun',
  category: 'glue-guns',
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


{
  id: 30,
  name: 'Impulse Sealer FS-300',
  category: 'impulse-sealers',
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

// electric pressure washers

{
  id: 31,
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
  id: 32,
  name: "Total High Pressure Washer 2000W-TGT11376",
  brand: "Total",
  model: "TGT11376",
  category: "electric-pressure-washers",

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
     id: 33,
     name: 'INGCO High Pressure Washer HPWR16008',
     category: 'electric-pressure-washers',
     brand: 'INGCO',
     price: 120000,

     images: [
       'assets/img/pressure and water pumps/High-pressure-washer-1600w-HPWR16008.jpg'
     ],

     inStock: true,

     description: `The INGCO High Pressure Washer HPWR16008 is a powerful and efficient cleaning machine designed for removing stubborn dirt, grease, mud, and grime from various surfaces. Equipped with a high-performance 1600W motor, this pressure washer delivers strong water pressure of up to 140 bar, making it ideal for cleaning cars, driveways, patios, machinery, and outdoor surfaces.
Built with a durable carbon brush motor and pure copper wire system, the machine ensures reliable performance and long service life. Its compact and ergonomic design makes it easy to handle, store, and transport. The auto stop system enhances safety and energy efficiency by automatically shutting off the motor when the trigger is released.
This pressure washer is suitable for both domestic and light industrial use, offering convenience, efficiency, and professional cleaning results.

Items Included in the Package:
• 1 × INGCO High Pressure Washer
• 1 × Water Spray Gun
• 1 × 5m High Pressure Hose
• 1 × Water Inlet Connector
• 1 × User Manual`,

     specification: `
  Brand: INGCO
  Model Number: HPWR16008
  Voltage: 220–240V ~ 50/60Hz
  Input Power: 1600W
  Motor Type: Carbon Brush Motor
  Max Pressure: 140 Bar (2030 PSI)
  Flow Rate: 5.5 L/min
  Auto Stop System: Yes
  Application: High-pressure cleaning
  Suitable Use: Cars, floors, walls, machinery, outdoor surfaces
  `,

     features: `
  Powerful 1600W motor for strong cleaning performance
  High pressure output of up to 140 bar
  Efficient water flow for faster cleaning
  Auto stop system for safety and energy saving
  Durable copper wire motor for long-lasting use
  Compact and portable design
  Easy to operate and maintain
  Ideal for car wash, home cleaning, and workshop use
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },

   {
     id: 34,
     name: 'INGCO High Pressure Washer HPWR15028',
     category: 'electric-pressure-washers',
     brand: 'INGCO',
     price: 105000,

     images: [
       'assets/img/pressure and water pumps/High-pressure-washer-HPWR15028.jpg'
     ],

     inStock: true,

     description: `The INGCO High Pressure Washer HPWR15028 is a reliable and efficient cleaning machine designed for domestic and light industrial cleaning applications. Powered by a durable 1500W copper wire induction motor, this pressure washer delivers consistent performance and long-lasting durability.

With a maximum pressure of 100 bar, it is suitable for washing cars, motorcycles, driveways, walls, outdoor floors, and equipment. The machine provides a strong and steady water flow that effectively removes dirt, grease, and stubborn stains.

Its compact design and ergonomic structure make it easy to operate and store, while the extended 8-meter high-pressure hose allows greater flexibility and reach during cleaning tasks. This pressure washer is ideal for homeowners, car wash operators, and workshop use.

Items Included in the Package:
• 1 × INGCO High Pressure Washer
• 1 × Water Spray Gun
• 1 × 8m High Pressure Metal Hose
• 1 × 1.5m Water Inlet Hose
• 1 × Quick Connector
• 1 × Water Inlet Screw
• 1 × Self-absorbing Water Filter
• 1 × User Manual`,

     specification: `
  Brand: INGCO
  Model Number: HPWR15028
  Voltage: 220–240V ~ 50Hz
  Input Power: 1500W
  Motor Type: Copper Wire Induction Motor
  Max Pressure: 100 Bar (1450 PSI)
  Flow Rate: 6.7 L/min
  Hose Length: 8 meters
  Inlet Hose Length: 1.5 meters
  Application: High-pressure cleaning
  Suitable Use: Cars, walls, floors, driveways, machinery
  `,

     features: `
  Powerful 1500W motor for efficient cleaning
  High pressure output of 100 bar for tough dirt removal
  Durable copper induction motor for long lifespan
  Strong and stable water flow for better performance
  Long 8m high-pressure hose for extended reach
  Compact and portable design for easy handling
  Easy to assemble and operate
  Ideal for home, car wash, and workshop cleaning
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },

    //  heatguns

    {
  id: 36,
  name: 'Ingco 2000w Heat Gun 2000w-HG200028',
  category: 'heat-guns',
  group: 'power-tools',
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
     id: 37,
     name: 'Bosch GWS 24-230 H Professional Angle Grinder-2400w',
     category: 'angle-grinders',
     brand: 'Bosch',
     price: 285000,

     images: [
       'assets/img/grinders/Bosch GWS 24-230 H Professional Angle grinder.jpg'
     ],

     inStock: true,
     description: 'The Bosch GWS 24-230 H Professional is a high-performance 230mm (9-inch) angle grinder built for heavy-duty industrial and construction applications. Powered by a robust 2400W Champion motor, it delivers exceptional material removal rates for cutting, grinding, and polishing metal, concrete, stone, and other tough materials. Its lightweight design combined with advanced safety features like restart protection and vibration control makes it ideal for professional users who demand power, durability, and comfort during prolonged use.',

     specification: `
  Model: GWS 24-230 H
  Rated Input Power: 2400W
  Voltage: 220V – 240V
  Frequency: 50/60 Hz
  No-load Speed: 6500 rpm
  Disc Diameter: 230 mm (9")
  Grinding Spindle Thread: M14
  Main Handle: Barrel / Straight
  Switch: Tri-Control / Lockable Switch
  Weight: 5.1 kg
  Protection Class: II
  `,

     features: `
  Powerful 2400W Champion motor with high overload capacity for fast and efficient material removal
  Lightweight design (only 5.1 kg) for improved handling and reduced user fatigue
  Restart protection prevents accidental start-up after power interruption
  Soft start for smooth and controlled operation
  Vibration control on main and auxiliary handle for increased comfort during extended use
  Robust metal gear housing for long service life and durability in tough conditions
  Armoured coils protect the motor against abrasive dust
  Suitable for heavy-duty cutting, grinding, roughing, and surface preparation on metal, masonry, and concrete
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },



   {
     id: 38,
     name: 'Bosch Professional Double-Wheeled Bench Grinder GBG 60-20-600w',
     category: 'bench-grinders',
     brand: 'Bosch',
     price: 245000,

     images: [
       'assets/img/grinders/bosch-bench grinders.webp'
     ],

     inStock: true,
     description: 'The Bosch GBG 60-20 Professional is a powerful and robust double-wheeled bench grinder designed for continuous heavy-duty use in workshops and industrial environments. With its strong 600W motor and two large 200mm grinding wheels, it delivers excellent performance for sharpening tools, deburring, rust removal, polishing, and general metalworking tasks. The grinder features adjustable eye protection shields, spark deflectors, and a solid cast-iron base for maximum stability and safety during prolonged operation.',

     specification: `
  Model: GBG 60-20
  Rated Input Power: 600 W
  Voltage: 220V – 240V
  Frequency: 50/60 Hz
  No-load Speed: 3000 rpm
  Grinding Wheel Diameter: 200 mm
  Grinding Wheel Width: 25 mm
  Grinding Wheel Bore: 32 mm
  Weight: 14.8 kg
  Protection Class: II
  `,

     features: `
  Powerful 600W induction motor for continuous heavy-duty operation
  Two large 200mm grinding wheels (coarse and fine) for versatile sharpening and finishing tasks
  Robust cast-iron base provides excellent stability and reduces vibration
  Adjustable spark deflectors and transparent eye protection shields for increased safety
  Large adjustable tool rests for precise and comfortable grinding
  Dust-protected motor windings for longer service life
  Maintenance-free motor with long lifetime bearings
  Ideal for sharpening drills, chisels, knives, axes, garden tools, and removing rust or burrs from metal parts
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },



   {
     id: 39,
     name: 'Total Mini Grinder With 149pcs Accessories - 200W',
     category: 'die-mini-grinders',
     brand: 'Total',
     price: 125000,

     images: [
       'assets/img/grinders/Total Mini Grinder With 149pcs - 200watts.webp'
     ],

     inStock: true,
     description: 'The Total TG2006 Mini Grinder is a versatile 200W rotary tool kit designed for precision work and DIY projects. With variable speed control from 10,000 to 40,000 RPM and a large set of 149 accessories, it is perfect for grinding, cutting, sanding, polishing, engraving, drilling, and cleaning on materials such as metal, wood, plastic, glass, and ceramics. The kit includes a flexible shaft for hard-to-reach areas, making it ideal for detailed craftsmanship, hobby work, jewelry making, electronics repair, and general workshop tasks.',

     specification: `
  Model: TG2006
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Input Power: 200W
  No-load Speed: 10,000 – 40,000 rpm
  Collet Size: 3.2mm / 2.3mm
  Features: LCD display, Variable speed control
  Accessories: 149pcs + 1 flexible shaft + 1 safe guard + 1 cutting guide + 1 set extra carbon brushes
  `,

     features: `
  Powerful 200W motor with variable speed control (10,000 - 40,000 RPM) for different materials and applications
  Digital LCD display for easy speed monitoring
  Compact and ergonomic design for comfortable prolonged use
  Includes 149pcs high-quality accessories for grinding, sanding, cutting, polishing, engraving, and more
  Comes with a flexible shaft for accessing tight and difficult areas
  Safety guard and cutting guide for improved control and protection
  Extra set of carbon brushes for extended tool life
  Ideal for DIY enthusiasts, craftsmen, jewelers, and light professional work on metal, wood, plastic, and other materials
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },


   {
     id: 40,
     name: 'Ingco Cordless Brushless Impact Wrench 600Nm - 42V',
     category: 'cordless-impact-wrenches',
     brand: 'Ingco',
     price: 185000,

     images: [
       'assets/img/impact-wrench/ngco Cordless brushless Impact Wrench 600nm - 42v.webp'
     ],

     inStock: true,
     description: 'The Ingco CIWLI42602 is a powerful 42V cordless brushless impact wrench designed for heavy-duty fastening and loosening applications. Delivering up to 600Nm of fastening torque and even higher nut-busting power, this tool is ideal for professional mechanics, automotive workshops, construction sites, and industrial maintenance. The brushless motor ensures longer runtime, higher efficiency, and reduced maintenance. It features three-speed settings for better control and comes with a 1/2" square drive compatible with standard impact sockets.',

     specification: `
  Model: CIWLI42602
  Voltage: 42V
  Motor Type: Brushless
  Square Drive: 1/2"
  No-load Speed: 0-1700 / 0-2100 / 0-2300 rpm
  Impact Rate: 0-2400 / 0-2800 / 0-3300 bpm
  Fastening Torque: 600 Nm
  Nut-busting Torque: Up to 750 Nm (approx.)
  Protection Class: II
  `,

     features: `
  High-performance brushless motor for superior efficiency, longer lifespan, and more power
  Massive 600Nm fastening torque with up to 750Nm nut-busting power for tough seized bolts and nuts
  Three-speed settings for precise control across different applications
  1/2" square drive for compatibility with standard impact sockets
  Compact and ergonomic design with soft grip for comfortable handling during prolonged use
  LED work light for better visibility in dark or confined spaces
  Ideal for automotive repair, tire changing, heavy equipment maintenance, construction, and industrial fastening tasks
  Part of Ingco's powerful 42V cordless platform for extended runtime
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },



   {
     id: 41,
     name: 'TOTAL 1/2" Electric Impact Wrench With Case 1050W',
     category: 'electric-impact-wrenches',
     brand: 'Total',
     price: 135000,

     images: [
       'assets/img/impact-wrench/TOTAL half innch Electric Impact Wrench With Case 1050W-2.jpg'
     ],

     inStock: true,
     description: 'The TOTAL 1/2" Electric Impact Wrench is a powerful 1050W corded impact tool designed for fast and efficient tightening and loosening of bolts and nuts. With its high torque output and robust build quality, it is ideal for automotive repair shops, tire service centers, construction sites, and general heavy-duty maintenance work. The tool comes complete with a sturdy carrying case for easy storage and transportation, making it a practical choice for both professional technicians and serious DIY users.',

     specification: `
  Model: TIW10501
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Input Power: 1050W
  Square Drive: 1/2"
  No-load Speed: 0 - 2200 rpm
  Impact Rate: 0 - 3000 bpm
  Max Torque: 450 Nm
  Protection Class: II
  `,

     features: `
  Powerful 1050W motor delivers high performance for demanding applications
  High torque output of 450 Nm for fast bolt tightening and loosening
  1/2" square drive compatible with standard impact sockets
  Variable speed trigger for better control during operation
  Robust and durable metal gear housing for long service life
  Forward and reverse rotation with hammer action for maximum efficiency
  Includes heavy-duty carrying case for convenient storage and portability
  Ideal for automotive workshops, tire changing, truck maintenance, construction, and industrial fastening tasks
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },



   {
  id: 42,
  name: 'TOTAL AIR IMPACT WRENCH 3/4" - 1,600Nm (TAT40342)',
  category: 'pnuematic-wrenches',
  brand: 'Total',
  price: 95000,

  images: [
    'assets/img/impact-wrench/TOTAL AIR IMPACT WRENCH 3 quarter - 1.600Nm (TAT40342).jpg'
  ],

  inStock: true,
  description: 'The TOTAL TAT40342 is a heavy-duty 3/4" pneumatic (air) impact wrench designed for professional use in automotive workshops, tire service centers, truck and bus maintenance, and industrial applications. Delivering up to 1,600Nm of maximum torque, this powerful air tool excels at quickly tightening and loosening large bolts and nuts. Its twin hammer mechanism ensures high performance and durability, while the ergonomic handle with trigger provides excellent control and reduced operator fatigue during prolonged use.',

  specification: `
  Model: TAT40342
  Drive Size: 3/4"
  Max Torque: 1600 Nm
  Air Pressure: 90 PSI (6.2 bar)
  Air Consumption: 7.5 CFM (212 L/min)
  No-load Speed: 4500 rpm
  Impact Rate: 1000 bpm
  Air Inlet: 1/4"
  Weight: 7.2 kg
  `,

  features: `
  Extremely high torque output of 1600 Nm for heavy-duty applications
  3/4" square drive ideal for large bolts and truck wheels
  Twin hammer impact mechanism for maximum power and durability
  Lightweight yet robust aluminum alloy housing
  Ergonomic soft grip handle for comfortable operation
  Forward and reverse rotation with power regulator
  High impact rate for fast bolt removal
  Ideal for truck, bus, heavy equipment maintenance, and industrial fastening tasks
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},



   {
     id: 43,
     name: 'Demolition Hammer and Breaker INGCO PDB17008',
     category: 'demolition-breakers',
     brand: 'Ingco',
     price: 195000,

     images: [
       'assets/img/demolition breakers/ingco demo breaker-pdb17008.jpg'
     ],

     inStock: true,
     description: 'The Ingco PDB17008 is a powerful 1700W heavy-duty demolition hammer and breaker designed for tough breaking and demolition tasks. With a high impact energy of 45J and a robust HEX chuck system, it efficiently breaks concrete, asphalt, bricks, and other tough materials. This 16kg demolition breaker is ideal for professional construction sites, renovation projects, roadworks, and industrial demolition. It comes with two chisels and delivers reliable performance with its strong motor and durable build.',

     specification: `
  Model: PDB17008
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Input Power: 1700W
  Impact Rate: 1400 bpm
  Impact Force: 45J
  Chuck System: HEX
  Weight: 16 kg
  Included: 2 pcs chisels + 1 set extra carbon brushes
  `,

     features: `
  Powerful 1700W motor for heavy-duty demolition work
  High impact energy of 45J for fast and efficient breaking of concrete, masonry, and stone
  HEX chuck system for quick and secure accessory changes
  1400 blows per minute (bpm) for maximum productivity
  Robust and durable design with 16kg weight for stability and powerful hammering
  Ergonomic handles with vibration damping for reduced operator fatigue
  Suitable for breaking concrete slabs, foundations, walls, asphalt, and tiles
  Ideal for professional construction, renovation, road maintenance, and demolition tasks
  Comes complete with 2 chisels for immediate use
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },


   {
  id: 45,
  name: 'Air Jackhammer - 32mm',
  category: 'pneumatic-jack-hammers',
  brand: 'Total',
  price: 225000,

  images: [
    'assets/img/demolition breakers/air-jackhammers.avif'
  ],

  inStock: true,
  description: 'The Air Jackhammer 32mm is a powerful pneumatic demolition breaker designed for heavy-duty breaking and demolition work. Featuring a standard 32mm hex shank, it is compatible with a wide range of moil points, chisels, and spade bits. This air-powered tool delivers high impact energy for efficiently breaking concrete, asphalt, reinforced masonry, rock, and frozen ground. It is ideal for professional construction sites, road maintenance, foundation excavation, bridge work, and industrial demolition projects. Requires a high-capacity air compressor (minimum 90 PSI and sufficient CFM) for optimal performance.',

  specification: `
  Model: Generic / TAT Air Jackhammer 32mm
  Shank Size: 32mm Hex (1-1/4" x 6")
  Working Pressure: 90 PSI (6.2 bar)
  Air Consumption: 35 - 40 CFM (990 - 1130 L/min)
  Impact Rate: 1200 - 1400 bpm
  Impact Energy: High (approx. 60 - 80 J class)
  Weight: Approx. 30 - 37 kg
  Length: Approx. 650 - 720 mm
  Air Inlet: 1/2" or 3/4"
  `,

  features: `
  32mm hex shank for secure and quick attachment of standard demolition accessories
  Powerful pneumatic impact mechanism for fast material breaking
  Heavy-duty alloy body construction built for rugged job site conditions
  High impact rate for maximum productivity on concrete, asphalt, and stone
  Ergonomic handle design for better control and reduced operator fatigue
  Forward operation with robust retainer for safe chisel holding
  Requires industrial air compressor with adequate air flow and pressure
  Ideal for breaking concrete slabs, foundations, roads, trenches, and rock excavation
  Suitable for professional contractors, road crews, demolition teams, and heavy construction work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},



{
  id: 46,
  name: 'INGCO 20V BRUSHLESS CIRCULAR SAW 185MM 1X5.0AH + CHARGER-CSLI18513',
  category: 'circular-saws',
  brand: 'Ingco',
  price: 185000,

  images: [
    'assets/img/circular and mitre saws/Ingco 185mm Cordless Circular Saw - CSLI18513.jpeg'
  ],

  inStock: true,
  description: 'The Ingco CSLI18513 is a powerful 20V brushless cordless circular saw designed for both wood cutting and marble/tile applications. With a large 185mm (7-1/4") blade, high no-load speed of 4800 rpm, and maximum cutting depth of 65mm at 90°, it delivers clean, precise, and efficient cuts. The brushless motor provides longer runtime, higher efficiency, and reduced maintenance. It features adjustable cutting depth and bevel angle (up to 45°), making it ideal for professional carpenters, tilers, fabricators, and DIY enthusiasts working on wood, plywood, marble, granite, ceramic tiles, and other sheet materials.',

  specification: `
  Model: CSLI18513
  Voltage: 20V
  Motor Type: Brushless
  No-load Speed: 4800 rpm
  Blade Diameter: 185mm (7-1/4")
  Arbor Size: 20mm
  Cutting Capacity: 90° - 65mm / 45° - 45mm
  Adjustable Cutting Depth: Yes
  Adjustable Bevel Cutting: Yes (0° - 45°)
  Weight: Approx. 3.5 - 4.0 kg (with battery)
  `,

  features: `
  High-performance brushless motor for longer runtime, more power, and less maintenance
  Fast 4800 rpm no-load speed for smooth and clean cuts on wood and marble
  Large 185mm blade diameter with 65mm max cutting depth at 90°
  Adjustable cutting depth and bevel angle (up to 45°) for versatile applications
  Ergonomic soft grip handle for comfortable and controlled operation
  Compact and lightweight cordless design for excellent portability and maneuverability
  Suitable for cutting wood, plywood, marble, granite, ceramic tiles, and other materials
  Includes 185mm saw blade, hex key, 5.0Ah battery pack, and fast charger
  Ideal for carpentry, tiling, renovation, furniture making, and general construction work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


{
  id: 47,
  name: 'Bosch GST 650 Professional Jigsaw',
  category: 'jig-saws',
  brand: 'Bosch',
  price: 125000,

  images: [
    'assets/img/jig saws and recip saws/Bosch Jigsaw GST 650 Professional.jpg'
  ],

  inStock: true,
  description: 'The Bosch GST 650 Professional is a reliable and powerful 450W jigsaw designed for precise and efficient cutting in wood, aluminum, and steel. With variable speed control (800 – 3,100 strokes per minute) and an 18mm stroke length, it delivers clean, accurate cuts for both straight and curved lines. Its lightweight design (only 1.9 kg) combined with ergonomic handling makes it ideal for professional carpenters, installers, and DIY enthusiasts working on furniture making, renovation, cabinetry, and general construction tasks. The tool offers excellent control with adjustable cutting depth and bevel capabilities.',

  specification: `
  Model: GST 650 Professional
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Rated Input Power: 450 W
  Stroke Rate at No Load: 800 – 3,100 spm
  Stroke Length: 18 mm
  Cutting Depth in Wood: 65 mm
  Cutting Depth in Aluminium: 10 mm
  Cutting Depth in Non-Alloyed Steel: 3 mm
  Weight: 1.9 kg
  Protection Class: II
  `,

  features: `
  Powerful 450W motor for fast and clean cutting performance
  Variable speed control (800 – 3,100 strokes per minute) for optimal speed selection according to material
  18 mm stroke length for efficient material removal
  Lightweight and compact design (1.9 kg) for excellent maneuverability and reduced fatigue
  Tool-free blade change system for quick and easy blade replacement
  Adjustable cutting depth and bevel cutting angle (0° - 45°)
  Ergonomic soft-grip handle for comfortable handling during prolonged use
  Dust extraction port for cleaner working environment (when connected to a vacuum)
  Ideal for straight cuts, curve cuts, and bevel cuts in wood, plywood, aluminum, and thin steel sheets
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
   },


   {
     id: 48,
     name: 'TOTAL Reciprocating Saw 750W (TS100806)',
     category: 'reciprocating-saws',
     brand: 'Total',
     price: 95000,

     images: [
       'assets/img/jig saws and recip saws/TOTAL RECIPROCATING SAW 750W (TS100806).jpg'
     ],

     inStock: true,
     description: 'The TOTAL TS100806 Reciprocating Saw is a powerful 750W corded tool designed for fast and efficient cutting in wood, metal, plastic, and construction materials. With its variable speed control and 28mm stroke length, it excels at demolition work, pruning, cutting pipes, drywall, and making straight or plunge cuts. The tool-less blade change system allows quick swapping between wood and metal blades, making it a versatile choice for professional contractors, renovation teams, and serious DIY users who need a reliable all-purpose saw for tough cutting tasks.',

     specification: `
  Model: TS100806
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Input Power: 750W
  No-load Speed: 0 – 2800 spm
  Stroke Length: 28 mm
  Cutting Capacity Wood: 115 mm
  Cutting Capacity Pipe (Steel): 20 mm
  Weight: 3.2 kg
  `,

     features: `
  Powerful 750W motor for demanding cutting applications
  Variable speed trigger for precise speed control according to material
  Long 28mm stroke length for faster and more efficient cutting
  Tool-less blade change system for quick and easy blade replacement
  Ergonomic soft grip handle with anti-vibration design for comfortable operation
  Robust metal gear housing for durability and long service life
  Suitable for cutting wood, metal pipes, plastic, drywall, branches, and demolition work
  Ideal for construction, renovation, plumbing, electrical installation, and general maintenance tasks
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },


   {
  id: 49,
  name: 'INGCO TS150078 Table Saw 10 Inch 430X640mm 1500W',
  category: 'table-saws',
  brand: 'Ingco',
  price: 245000,

  images: [
    'assets/img/table and band saws/INGCO TS150078 Table saw 10 Inch 430X640mm 1500W.webp'
  ],

  inStock: true,
  description: 'The Ingco TS150078 is a powerful 1500W 10-inch table saw designed for professional and serious DIY woodworking. With a large 430x640mm table surface (including extension), it provides excellent stability and support for ripping and cross-cutting sheet materials. The 254mm (10") blade spins at 4500 rpm, delivering clean and precise cuts in wood, plywood, MDF, and other materials. It features adjustable blade height and bevel angle up to 45°, making it ideal for furniture making, cabinetry, carpentry, and general construction projects.',

  specification: `
  Model: TS150078
  Voltage: 220V – 240V
  Frequency: 50/60Hz
  Input Power: 1500W
  No-load Speed: 4500 rpm
  Blade Diameter: 254mm (10")
  Arbor Size: 16mm
  Table Size: 430 x 640 mm
  Max Cutting Capacity: 85mm at 90° / 60mm at 45°
  Blade Tilting Range: 0° - 45°
  Weight: Approx. 20 - 25 kg (with stand)
  `,

  features: `
  Powerful 1500W motor for smooth and efficient cutting performance
  10-inch (254mm) blade with high 4500 rpm no-load speed
  Spacious 430 x 640 mm table with extension for better material support
  Adjustable cutting depth and bevel angle (0° - 45°) for versatile angled cuts
  Robust rip fence for accurate and parallel ripping
  Stable metal base with foldable stand (on most versions) for portability
  Safety features including blade guard and push stick
  Ideal for ripping, cross-cutting, bevel cutting, and mitering in wood, plywood, MDF, and similar materials
  Suitable for professional carpenters, furniture workshops, and serious DIY users
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


   {
     id: 50,
     name: 'TOTAL 8" 20V Mitre Saw + 2 x 4Ah Batteries + Charger (TMSLI20212)',
     category: 'mitre-saws',
     brand: 'Total',
     price: 285000,

     images: [
       'assets/img/circular and mitre saws/TOTAL 8 inch 20V Mitre Saw + 2 x 4Ah Batteries + Charger Total TMSLI20212.jpg'
     ],

     inStock: true,
     description: 'The TOTAL TMSLI20212 is a powerful 20V cordless 8-inch mitre saw complete with 2 x 4Ah batteries and a fast charger. It delivers smooth, precise crosscuts, mitre cuts, and bevel cuts in wood, plywood, MDF, and moldings. With a no-load speed of 4500 rpm and a 210mm blade, it offers excellent cutting capacity for both straight and angled cuts. The compact and portable design, combined with the included high-capacity batteries, makes it ideal for professional carpenters, installers, and DIY users working on-site or in the workshop without the need for a power outlet.',

     specification: `
  Model: TMSLI20212
  Voltage: 20V
  No-load Speed: 4500 rpm
  Blade Diameter: 210mm (8-1/4") x 25.4mm bore
  Cutting Capacity:
    • 0° x 0°: 120 x 60 mm
    • 45° x 0°: 83 x 60 mm
    • 0° x 45°: 120 x 34 mm
    • 45° x 45°: 83 x 34 mm
  Battery: 2 x 4.0Ah Li-ion
  Charger: Included (fast charger)
  Weight: Approx. 8 - 9 kg (with battery)
  `,

     features: `
  Powerful 20V brushless or high-efficiency motor with 4500 rpm no-load speed for fast and clean cuts
  Large 210mm (8-1/4") blade for excellent cutting capacity
  Precise mitre and bevel adjustments for compound cutting
  Compact and lightweight cordless design for excellent portability and job-site mobility
  Comes complete with 2 x 4.0Ah batteries and fast charger for extended runtime
  Ergonomic handle with safety trigger for comfortable and controlled operation
  Dust extraction port for cleaner working environment
  Ideal for cutting baseboards, crown molding, door frames, skirting, furniture parts, and general woodworking
  Perfect for professional carpenters, renovation teams, and serious DIY enthusiasts
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },



{
  id: 51,
  name: 'TOTAL Combo Set 20V Mini Chainsaw + Branch Cutter (TOSLI23012)',
  category: 'chain-saws',
  brand: 'Total',
  price: 180000,

  images: [
    'assets/img/chain and  band saws/Total Combo kit- Cutters and Mini chain saws with 20V TOSLI23012.avif'
  ],

  inStock: true,
  description: 'The TOTAL TOSLI23012 Combo Set includes a powerful 20V mini chainsaw and a cordless branch cutter, designed for efficient pruning, trimming, and light cutting tasks. This versatile kit is ideal for gardeners, landscapers, and DIY users who need portable and precise cutting tools. The mini chainsaw handles small logs and branches with ease, while the branch cutter delivers clean and effortless pruning. Powered by a 20V lithium-ion battery, this combo ensures mobility, convenience, and reliable performance without the need for cords.',

  specification: `
  Model: TOSLI23012
  Voltage: 20V
  Tool Type: Mini Chainsaw + Branch Cutter
  Battery: 20V Li-ion (included)
  Chain Length (Mini Chainsaw): Approx. 4" – 6"
  Charging: Included charger
  Application: Wood cutting, pruning, trimming
  `,

  features: `
  2-in-1 combo set: mini chainsaw and branch cutter for versatile use
  Powerful 20V battery system for cordless convenience
  Lightweight and compact design for easy handling
  Sharp and durable cutting system for efficient performance
  Ideal for pruning trees, cutting branches, and garden maintenance
  Ergonomic grip for comfort during extended use
  Portable and perfect for outdoor and on-site work
  Suitable for gardeners, homeowners, and professionals
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


{
  id: 52,
  name: 'BOSCH 18V Cordless Band Saw (GCB 18V-127) - 06012B7000',
  category: 'band-saws',
  brand: 'Bosch',
  price: 650000,

  images: [
    'assets/img/chain and  band saws/BOSCH 06012B7000 - GCB 18V-127 - 18V cordless band saw.webp'
  ],

  inStock: true,
  description: 'The BOSCH GCB 18V-127 cordless band saw is a high-performance cutting tool designed for precise and spark-free cutting of metal, pipes, and profiles. Powered by an 18V lithium-ion battery, it delivers strong cutting performance with excellent control and minimal vibration. Its compact and ergonomic design makes it ideal for overhead and tight-space applications, while the durable build ensures reliability for professional use on construction sites and workshops.',

  specification: `
  Model: GCB 18V-127 (06012B7000)
  Voltage: 18V
  No-load Speed: Variable speed control
  Cutting Capacity: Up to 127mm
  Blade Length: Approx. 733mm
  Blade Width: 12.7mm
  Weight: Approx. 6.5 - 7.0 kg (with battery)
  Application: Metal cutting, pipes, profiles
  `,

  features: `
  Powerful 18V motor for efficient and consistent cutting performance
  Large 127mm cutting capacity for pipes and structural materials
  Spark-free cutting ideal for safe metal work environments
  Variable speed control for precision on different materials
  Low vibration design for improved user comfort
  Compact and ergonomic build for tight spaces and overhead work
  Durable construction for professional and industrial use
  Compatible with Bosch Professional 18V battery system
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

   {
     id: 53,
     name: 'TOTAL 20V Cordless Blower (TABLI20323) Lithium-Ion Portable Air Blower',
     category: 'cordless-blowers',
     brand: 'Total',
     price: 95000,

     images: [
       'assets/img/blowers/TOTAL 20V Cordless Blower – TABLI20323 Lithium-Ion Portable Air Blower.jpg3.jpg'
     ],

     inStock: true,
     description: 'The TOTAL TABLI20323 20V Cordless Blower is a lightweight and portable air blower designed for efficient cleaning and dust removal. Powered by a 20V lithium-ion battery, it delivers strong airflow suitable for clearing debris, dust, leaves, and workshop waste. Its compact cordless design ensures easy handling and mobility, making it perfect for both indoor and outdoor use including workshops, construction sites, and home maintenance.',

     specification: `
  Model: TABLI20323
  Voltage: 20V
  Power Source: Lithium-ion battery
  No-load Speed: High-speed airflow system
  Function: Blowing / dust cleaning
  Application: Dust removal, leaf blowing, workshop cleaning
  `,

     features: `
  Powerful 20V cordless blower for efficient cleaning performance
  Lightweight and compact design for easy handling
  Strong airflow for dust, debris, and leaf removal
  Cordless convenience for mobility and flexibility
  Ergonomic handle for comfortable use
  Ideal for workshops, garages, outdoor spaces, and home cleaning
  Durable construction for long-lasting performance
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },



   {
  id: 54,
  name: 'Powervent 200mm (8 Inch) Portable Air Blower 180W - 2900 RPM',
  category: 'electric-blowers',
  brand: 'Powervent',
  price: 55000,

  images: [
    'assets/img/blowers/Powervent 200 mm (8 Inch) 2900 rpm Portable Air Blower 180 W.webp'
  ],

  inStock: true,
  description: 'The Powervent 200mm (8-inch) Portable Air Blower is a reliable and efficient solution for ventilation, cooling, and dust extraction. Powered by a 180W motor, it delivers strong airflow at 2900 RPM, making it suitable for workshops, warehouses, and industrial environments. Its compact and portable design allows easy movement and installation, while the durable construction ensures long-lasting performance for continuous use.',

  specification: `
  Brand: Powervent
  Power: 180W
  Fan Size: 200mm (8 Inch)
  Speed: 2900 RPM
  Type: Portable Air Blower / Ventilation Fan
  Application: Ventilation, cooling, dust extraction
  `,

  features: `
  Powerful 180W motor for consistent airflow performance
  200mm (8-inch) fan for wide air coverage
  High-speed operation at 2900 RPM
  Portable and compact design for easy use and installation
  Ideal for workshops, factories, warehouses, and garages
  Suitable for ventilation, cooling, and dust removal
  Durable build for long-term industrial use
  Energy-efficient operation
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},



{
  id: 55,
  name: '2-Cycle Gas Powered Handheld Leaf Blower 25.4CC (Petrol)',
  category: 'gasoline-blowers',
  brand: 'Generic',
  price: 120000,

  images: [
    'assets/img/blowers/Gasoline Blower for Lawn Care (25.4CC Handheld).jpg'
  ],

  inStock: true,
  description: 'The 2-Cycle Gas Powered Handheld Leaf Blower (25.4CC) is a high-performance outdoor tool designed for efficient lawn care and debris clearing. Powered by a 25.4CC petrol engine, it delivers strong airflow for blowing leaves, dust, and dirt from gardens, driveways, and work areas. Its lightweight handheld design ensures ease of use, while the fuel-powered system provides greater mobility and power compared to electric alternatives, making it ideal for professional landscapers and homeowners.',

  specification: `
  Engine Type: 2-Stroke (2-Cycle)
  Engine Capacity: 25.4CC
  Fuel Type: Petrol (Gasoline)
  Starting System: Recoil start
  Function: Leaf blowing / debris clearing
  Application: Lawn care, garden cleaning, outdoor maintenance
  `,

  features: `
  Powerful 25.4CC petrol engine for strong airflow performance
  Cordless operation with no dependency on electricity
  Lightweight and portable handheld design
  Easy recoil start system
  Ideal for clearing leaves, dust, and debris quickly
  Suitable for gardens, lawns, driveways, and construction areas
  Durable build for outdoor and professional use
  Greater power output compared to electric blowers
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


   {
     id: 56,
     name: 'DeWALT 68V XR FLEXVOLT Axial Blower',
     category: 'cordless-blowers',
     brand: 'DeWALT',
     price: 180000,

     images: [
       'assets/img/blowers/Dewalt-Cordless-Blower-Dewalt-Leaf-Blower-20v-Max-Cordless-Leaf-3.jpg'
     ],

     inStock: true,

     description: `The DeWALT 68V XR FLEXVOLT Axial Blower is a high-performance cordless blower designed for powerful and efficient cleaning of outdoor spaces. Built with advanced brushless motor technology, this blower delivers superior airflow and extended runtime, making it ideal for professional and heavy-duty applications.
De Astonic Technical Tools + This blower features a low-noise design, making it suitable for use in residential areas, offices, and noise-sensitive environments without causing disturbance. It provides strong air velocity and volume, allowing users to clear leaves, dust, debris, and light waste quickly and efficiently.
With its ergonomic and lightweight construction, the blower ensures maximum comfort during prolonged use. The axial fan design enhances airflow efficiency, delivering consistent and powerful performance across various cleaning tasks.
De Astonic Technical Tools + Whether you are maintaining gardens, workshops, construction sites, or warehouses, this blower offers unmatched convenience with cordless mobility and reliable battery-powered operation.

Items Included in the Package:
• 1 × DeWALT Axial Blower
• 1 × FLEXVOLT Battery
• 1 × Battery Charger
• 1 × Blower Tube
• 1 × User Manual`,

     specification: `
  Brand: DeWALT
  Model: XR FLEXVOLT Axial Blower
  Voltage: 54V / 68V MAX
  Motor Type: Brushless Motor
  Air Speed: Up to 200 km/h
  Air Volume: High airflow axial fan system
  Noise Level: Low-noise operation
  Power Source: Cordless (Battery Powered)
  Battery Type: FLEXVOLT Lithium-ion
  Application: Outdoor cleaning and debris removal
  Suitable Use: Gardens, workshops, warehouses, construction sites
  `,

     features: `
  High-efficiency brushless motor for longer runtime and durability
  Powerful airflow for fast and effective debris clearing
  Advanced axial fan technology for maximum air output
  Low-noise design suitable for residential and commercial use
  Cordless operation for mobility and convenience
  Lightweight and ergonomic design for user comfort
  Compatible with FLEXVOLT battery system
  Ideal for professional and domestic outdoor cleaning
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },


   {
  id: 57,
  name: 'TOTAL Lithium-Ion Hedge Trimmer 20V Green (THTLI20461)',
  category: 'trimmers',
  brand: 'TOTAL',
  price: 120000,

  images: [
    'assets/img/guns and trimmers/total cordless edge trimmers-thli20461.jpeg 2.webp',
    'assets/img/guns and trimmers/total cordless edge trimmers-thli20461.jpeg 3.webp',
    'assets/img/guns and trimmers/total cordless edge trimmers-thli20461.jpeg 7.jpg',
    'assets/img/guns and trimmers/total cordless edge trimmers-thli20461.jpeg 4.jpeg',
    'assets/img/guns and trimmers/total cordless edge trimmers-thli20461.jpeg 4.webp',
    'assets/img/guns and trimmers/total cordless edge trimmers-thli20461.jpeg 6.jpg'
  ],

  inStock: true,
  description: 'The TOTAL THTLI20461 Lithium-Ion Hedge Trimmer is a powerful cordless garden tool designed for trimming, shaping, and maintaining hedges, shrubs, and bushes with precision. Powered by a 20V lithium-ion battery, it delivers consistent performance without the limitations of cables, making it ideal for both residential and light professional landscaping work.\n\nEquipped with a long 460mm laser-cut blade, this trimmer ensures clean and accurate cuts across wide hedge surfaces, reducing working time and improving efficiency. Its high-speed operation (up to 2800 strokes per minute) allows smooth trimming even on dense vegetation. :contentReference[oaicite:0]{index=0}\n\nThe tool is designed for comfort and ease of use, featuring an ergonomic handle and lightweight structure that minimizes fatigue during extended use. The dual-action blade system reduces vibration while improving cutting performance, making it safer and more comfortable to operate. :contentReference[oaicite:1]{index=1}\n\nWith a maximum cutting diameter of 18mm, the trimmer can handle moderately thick branches, making it suitable for regular garden maintenance. The package typically includes a battery, charger, safety goggles, and gloves, providing everything needed to get started immediately. :contentReference[oaicite:2]{index=2}\n\nThis hedge trimmer is an excellent choice for homeowners, gardeners, and maintenance professionals looking for a reliable, efficient, and easy-to-use cordless trimming solution.',

  specification: `
  Model: THTLI20461
  Power Source: Lithium-Ion Battery
  Voltage: 20V
  Battery Capacity: 2.0Ah (included)
  Blade Length: 460mm (18 inches)
  Max Cutting Diameter: 18mm
  Speed: Up to 2800 strokes per minute
  Blade Type: Laser-cut, dual-action
  Weight: Approx. 2.3 – 2.5 kg
  Charging Voltage: 220–240V ~ 50/60Hz
  Application: Hedge trimming, shrub shaping, garden maintenance
  `,

  features: `
  Cordless 20V lithium-ion power for mobility and convenience
  Long 460mm blade for faster and wider cutting coverage
  High-speed cutting performance (up to 2800spm)
  Dual-action blades reduce vibration and improve efficiency
  Laser-cut blades for precise and clean trimming
  Ergonomic and lightweight design for user comfort
  Capable of cutting branches up to 18mm thick
  Includes battery, charger, gloves, and safety goggles
  Low maintenance and eco-friendly compared to petrol tools
  Ideal for residential and light commercial landscaping
  `,

  jumiaLink: 'https://www.jumia.com.ng/catalog/?q=total+hedge+trimmer',
  kongaLink: 'https://www.konga.com/search?search=total+hedge+trimmer'
},

   {
     id: 58,
     name: 'Professional Silicone Sealant Gun 400ml',
     category: 'general-gun-tools',
     brand: 'Generic',
     price: 8500,

     images: [
       'assets/img/guns and trimmers/Professional Silicone Sealant Gun 400ml.jpg',
      
     ],

     inStock: true,

     description: 'The Professional Silicone Sealant Gun 400ml is a durable and easy-to-use hand tool designed for applying sealants, adhesives, and caulking materials with precision. Built with a strong metal frame and smooth trigger mechanism, it ensures consistent flow control for clean and professional results.\n\nThis sealant gun is compatible with standard 400ml cartridges, making it suitable for a wide range of applications including construction, plumbing, glazing, and general maintenance. Its ergonomic handle design reduces hand fatigue, allowing for extended use without discomfort.\n\nThe anti-drip mechanism helps prevent material wastage and mess, while the sturdy push rod ensures efficient dispensing of thick sealants. It is ideal for both professionals and DIY users who require accuracy and reliability in sealant application.',

     specification: `
  Capacity: 400ml
  Material: Heavy-duty metal frame
  Handle Type: Ergonomic grip
  Operation: Manual trigger mechanism
  Rod Type: Smooth push rod
  Compatibility: Standard sealant and silicone cartridges
  Application: Sealing, bonding, filling gaps and joints
  `,

     features: `
  Compatible with standard 400ml sealant cartridges
  Strong and durable metal construction
  Smooth trigger action for controlled application
  Anti-drip design to reduce mess and waste
  Ergonomic handle for comfortable use
  Ideal for silicone, adhesives, and caulking jobs
  Suitable for construction, plumbing, and DIY tasks
  Lightweight and easy to handle
  `
   },


// power tools end
//  stop at 2000w

// ppe start
// hand gloves
// 2000 to 4000


   {
     id: 2000,
     name: 'Large Black Sturdy Elegant Umbrella – 24 Ribs Windproof',
     category: 'Hand-glove',
     brand: 'Generic',
     price: 18000,

     images: [
       'assets/img/hand gloves/welders_hand_glove__red.jpg',
     ],

     inStock: true,
     description: 'This Large Black Sturdy Elegant Umbrella is a premium-quality rain protection accessory designed for durability, style, and maximum coverage. Built with a strong 24-rib (spoke) structure, it offers superior resistance against strong winds, making it highly reliable during heavy rain and stormy conditions.\n\nThe umbrella features a wide canopy that provides excellent coverage for one or two users, keeping you dry even in intense rainfall. Its classic black design gives it a professional and elegant look, making it suitable for business use, daily commuting, and outdoor activities.\n\nConstructed with high-quality waterproof fabric and reinforced metal ribs, the umbrella is both durable and long-lasting. The sturdy central shaft ensures stability, while the ergonomic handle provides a comfortable grip for extended use.\n\nDesigned for convenience, the umbrella opens smoothly and is easy to carry, making it an essential accessory for both personal and professional use during rainy seasons.',

     specification: `
  Product Type: Umbrella
  Design: Large canopy, classic black
  Frame: 24 ribs (wind-resistant structure)
  Material: Waterproof polyester fabric
  Shaft: Reinforced metal
  Opening Mechanism: Manual / automatic (varies by model)
  Coverage: Suitable for 1 – 2 persons
  Handle: Ergonomic grip
  Application: Rain protection, outdoor use, commuting
  `,

     features: `
  Strong 24-rib construction for wind resistance
  Large canopy for maximum coverage
  Elegant black design for professional appearance
  Durable waterproof fabric for effective rain protection
  Sturdy shaft for enhanced stability
  Comfortable handle for easy grip
  Suitable for heavy rain and windy conditions
  Long-lasting and reliable build quality
  Easy to open and close
  Ideal for daily and business use
  `,

     jumiaLink: 'https://www.jumia.com.ng/catalog/?q=large+umbrella+24+ribs',
     kongaLink: 'https://www.konga.com/search?search=large+umbrella+24+ribs'
   },

 {
  id: 2001,
  name: 'Mechanix Wear Original Work Gloves',
  category: 'Hand-glove',
    group: 'ppe',
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
    id: 2002,
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
    id: 254,
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
  id: 2003,
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
    id: 2004,
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
// lanyards
{
  id: 2005,
  name: 'Workman Full Body Safety Harness Belt with Lanyard',
  category: 'Safety-Harness-Lanyards',
  brand: 'Workman',
  price: 58000,
  images: ['assets/img/belt/workman harness belt.jpg'],

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



  // safety boots
{
  id: 2006,
  name: 'American Steel Safety Boot (Ankle) – Steel Toe Industrial Work Boot',
  category: 'Safety-Boot-(Ankle)',
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
  id: 2007,
  name: 'Premium Safety Boot (Ankle) Composite Toe Waterproof - Brown',
  category: 'Safety-Boot-(Ankle)',
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
  id: 2008,
  name: 'Safety Jogger BESTBOY Steel Toe Safety Boot',
  category: 'Safety-Boot-(Ankle)',
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
  id: 2009,
  name: ' MODULO S1PS Low Safety jogger',
  category: 'Safety-Boot-(Ankle)',
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
  id: 2010,
  name: 'Safety Jogger BALTOR Safety Boot',
  category: 'Safety-Boot(Ankle)',
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
  id: 2011,
  name: 'X1110 S3S Safety Shoe',
  category: 'Safety-Boot-(Ankle)',
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
  id: 2012,
  name: 'Safety Jogger MODULO LE S3S LOW TG Safety Boot',
  category: 'Safety-Boot-(Ankle)',
  brand: 'Safety Jogger',
  price: 85000,


  images: [
    'assets/img/safety joggers/modulo s3s low sj.jpg',
  ],

   sizes: [40,41,42,43,44,45,46],

    inStock: true,
  description: 'Premium industrial safety boot designed for professionals working in construction sites, factories, warehouses, engineering environments and other high-risk workplaces. The MODULO LE S3S LOW TG offers superior protection, durability and comfort for long working hours.',

 

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
  id: 2013,
  name: 'Safety Jogger MODULO LE S3S LOW TG Safety Boot',
  category: 'Safety-shoes',
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
  id: 2014,
  name: 'Safety Jogger LIGHTSTAR S1P Safety Boot',
  category: 'Safety-Boot-(Ankle)',
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
  id: 2015,
  name: 'Safety Jogger LIGHTSTAR S1P Safety Boot',
  category: 'Safety-shoes',
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
  id: 2016,
  name: 'Safety Jogger ECO FITZ Lightweight Safety Shoe',
  category: 'Safety-Boot-(Ankle)',
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
  id: 2017,
  name: 'Safety Jogger AAK Industrial Safety Boot',
  category: 'Safety-Boot-(Ankle)',
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
  id: 2018,
  name: 'Safety Jogger YUKON Waterproof Safety Boot',
  category: 'Safety-Boot-(Ankle)',
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
// eye google
{
  id: 2019,
  name: 'Anti-Fog Industrial Safety Goggle Clear Lens - Adjustable Strap',
  category: 'Safety-Goggle',
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
  id: 2020,
  name: 'Safety Jogger SAREK Anti-Fog Safety Goggles',
  category: 'Safety-Goggle',
  brand: 'Safety Jogger',
  price: 32000,
  images: ['/assets/img/safety eye google/Safety-Jogger-SAREK-Anti-Fog-Safety-Goggles-2.webp',
    'sassets/img/safety eye google/Safety-Jogger-SAREK-Anti-Fog-Safety-Goggles.webp',
      'assets/img/safety eye google/Safety-Jogger-SAREK-Anti-Fog-Safety-Goggles.webp-3.png'

  ],
          

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
  id: 2021,
  name: 'X1110 S3S Safety Shoe',
  category: 'safety-shoes',
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

// fall arrestors
{
  id: 2022,
  name: '15m Fall Arrester Wire Rope Safety Equipment Falling Protector',
  category: 'fall-arresters',
  brand: 'Generic',
  price: 120000,
  images: ['assets/img/fall arresters/fall-arrester-15mm.jpg'

  ],

    inStock: true,
  description: '15 meter retractable fall arrester designed to protect workers operating at height. This safety device uses a high-strength galvanized steel wire rope with an automatic locking mechanism that instantly stops a fall. It is widely used in construction, scaffolding, tower climbing, roofing, and industrial maintenance where reliable fall protection is required.',
  specification: `
    - Cable Length: 15 Meters
    - Cable Material: Galvanized Steel Wire Rope
    - Cable Diameter: 4-5 mm
    - Housing Material: High Strength Polymer / Alloy
    - Hook Type: Heavy Duty Steel Snap Hook
    - Locking System: Automatic Fall Arrest Lock
    - Weight Capacity: Up to 140kg
    - Application: Construction, Tower Climbing, Industrial Work
  `,
  features: `
    - Automatic fall arrest locking system
    - Durable galvanized steel wire rope
    - Heavy duty snap hook connector
    - High impact resistant casing
    - Smooth retractable cable mechanism
    - Reliable protection for working at heights
  `
},

// eye google

{
  id: 2023,
  name: 'Safety Jogger TSAVO Protective Safety Goggle',
  category: 'Safety-Goggle',
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
  id: 2024,
  name: 'Safety Jogger VIRUNGA Cover Protective Safety Goggle',
  category: 'Safety-Goggle',
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
  id: 2025,
  name: 'Industrial Net Bump Cap with Reflective Strip',
  category: 'bump-caps',
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
  id: 2026,
  name: 'Type 1101 LED Light Flashlight - Black',
  category: 'flash-lights',
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
  id: 2027,
  name: 'PVC Gown Raincoat - Waterproof Protective Coat',
  category: 'safety-rainwears',
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
  id: 2028,
  name: 'Polyester Raincoat Jacket and Trouser Set - Navy Blue',
  category: 'safet rainwears',
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
  id: 2029,
  name: 'Trucker Safety-Waterproof PVC Rain Boot',
  category: 'Safety-Rainwears',
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
  id: 2030,
  name: 'Safety Jogger HERCULES S5 Safety Rain Boot',
  category: 'Safety-Rainwears',
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
  id: 2031,
  name: 'MSA ALTAIR® 5X Multigas Detector',
  category: 'Gas-Detector',
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
  id: 2032,
  name: 'MSA ALTAIR® 4X Multigas Detector',
  category: 'Gas-Detector',
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
  id: 2033,
  name: 'Stainless Steel Emergency Safety Shower and Eyewash Station',
  category: 'emergency-eye-wash-staion',
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
  id: 2034,
  name: 'Emergency Eyewash and Safety Combination Shower',
  category: 'emergency-eye-wash-staion',
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
  id: 2035,
  name: 'Gravity Fed Supply 8 Gallon Portable Eyewash Station',
  category: 'emergency-eye-wash-staion',
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
  id: 2036,
  name: 'Garrett Super Scanner V Handheld Metal Detector',
  category: 'Security-gears',
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
  id: 2037,
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
  id: 2038,
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
  id: 2039,
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
  id: 2040,
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
  id: 2041,
  name: 'High Visibility Safety Reflective Jacket',
  category: 'reflective-vests',
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
  id: 2042,
  name: 'White Cotton Laboratory Coat',
  category: 'lab-coats',
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

{
  id: 2043,
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


// spillkits
{
  id: 2044,
  name: '120L Spill Kit',
  category: 'spill-kits',
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
  id: 2045,
  name: '50 Persons First Aid Kit',
  category: 'first-aid-kits',
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
  id: 2046,
  name: '3M 6200 Half Face Respirator Mask',
  category: 'nose-masks',
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
  id: 2047,
  name: '3M PELTOR Optime 105 Earmuff',
  category: 'ear-muffs',
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
  id: 2048,
  name: '3M UltraFit Earplug - (100 Pairs/Pack)',
  category: 'ear-plugs',
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


{
  id: 2049,
  name: 'Toyo 3M Fall Arrester',
  category: 'fall-arresters',
  brand: 'Toyo',
  price: 45000,

  images: [
    'assets/img/fall arresters/Toyo-3m-retractable-all-arrestor.jpg'
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
  id: 2050,
  name: 'Safety Life Buoy Offshore Ring 2.5kg',
  category: 'life-buoy',
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
  id: 2051,
  name: 'Automatic Inflatable Life Jacket',
  category: 'life-jackets',
  brand: 'Generic',
  price: 65000,

  images: [
    'assets/img/life saving eq/automatic life jacket.avif',
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



{
  id: 2052,
  name: 'TOTAL Auto Darkening Welding Helmet (TSP9103)',
  category: 'welding-helmets',
  brand: 'TOTAL',
  price: 105000,

  images: [
    'assets/img/helmets and faceshield/1TOTAL TSP9103-Auto-Darkening-Welding-Helmet.jpg',
  ],

  inStock: true,
  description: 'The TOTAL TSP9103 Auto Darkening Welding Helmet is a high-performance safety solution designed to protect welders during demanding welding operations. Built with advanced auto-darkening technology, the helmet automatically adjusts its lens shade in milliseconds when an arc is struck, allowing for continuous work without the need to lift or adjust the helmet manually.\n\nFeaturing a large 100 × 67 mm viewing area, this helmet provides a clear and wide field of vision, improving accuracy and efficiency during welding tasks. Its premium optical clarity rating of 1/1/1/1 ensures minimal distortion, giving users a sharp and consistent view of their workpiece.\n\nThe helmet supports multiple welding processes including MIG, TIG (≥2A), arc welding, and plasma cutting, making it suitable for both professional welders and workshop use. With adjustable sensitivity, delay control, and shade levels (DIN 5–9 / 9–13), users can customize settings based on the job requirements.\n\nConstructed from durable nylon material, the helmet is lightweight and comfortable for extended use. It also includes a grinding mode, allowing it to double as protective gear during grinding operations.\n\nPowered by a combination of solar energy and replaceable lithium batteries, the helmet ensures long-lasting performance and reliability in various working environments. :contentReference[oaicite:0]{index=0}',

  specification: `
  Model: TSP9103
  Optical Class: 1/1/1/1
  Viewing Area: 100 × 67 mm
  Light State: DIN 3
  Dark State: DIN 5–9 / 9–13
  UV/IR Protection: Up to DIN 16
  Sensors: 4
  Switching Time: < 0.04 ms
  Delay Time: 0.15 – 0.80 s (adjustable)
  Sensitivity Control: Adjustable (stepless)
  Shade Control: Adjustable (internal)
  TIG Rating: ≥ 2A
  Grind Mode: Yes
  Material: Nylon
  Weight: Approx. 560 g
  Operating Temperature: -5°C to +55°C
  Power Supply: Solar panel + replaceable lithium batteries (CR2032)
  `,

  features: `
  Auto-darkening lens for instant eye protection
  Large viewing window for improved visibility
  High optical clarity (1/1/1/1 rating)
  Adjustable shade, sensitivity, and delay settings
  Fast switching response (<0.04 ms)
  Suitable for MIG, TIG, arc welding, and plasma cutting
  Built-in grinding mode for multi-purpose use
  Lightweight and comfortable for long working hours
  Durable nylon construction for industrial use
  Solar-powered with backup battery for reliability
  `,
  
  jumiaLink: 'https://www.jumia.com.ng/catalog/?q=total+welding+helmet',
  kongaLink: 'https://www.konga.com/search?search=total+welding+helmet'
},


{
  id: 2053,
  name: 'Safety Jogger AJUSCO Chinstrap Safety Helmet (AJUSCOWS)',
  category: 'safety-helmets',
  brand: 'Safety Jogger',
  price: 26000,

  images: [
    'assets/img/helmets and faceshield/AJUSCO CHINSTRAP safety jogger helmets.webp',
  ],

  inStock: true,
  description: 'The Safety Jogger AJUSCO Chinstrap Safety Helmet is a high-quality personal protective equipment (PPE) designed to provide reliable head protection in construction sites, industrial environments, and maintenance operations. Built with a durable ABS shell, the helmet offers strong impact resistance while remaining lightweight for all-day comfort.\n\nOne of its standout features is the detachable 4-point chinstrap with a soft rubber chin protector, which ensures the helmet stays securely in place even during active movement or working at heights. This makes it especially suitable for construction workers, engineers, and technicians who require stable head protection in dynamic work conditions.\n\nThe helmet is equipped with a comfortable 6-point textile suspension harness that distributes weight evenly across the head, reducing pressure and enhancing comfort during extended use. Its ventilation design allows proper airflow, helping to reduce heat buildup in hot environments.\n\nAdditionally, the adjustable wheel ratchet system allows users to easily customize the fit for maximum stability and comfort. The helmet is also compatible with accessories such as earmuffs, making it a versatile safety solution for various industrial applications.\n\nDesigned to meet international safety standards, the AJUSCO helmet combines durability, comfort, and advanced safety features, making it an excellent choice for professionals who prioritize protection and performance on the job.',

  specification: `
  Model: AJUSCOWS
  Product Type: Safety Helmet / Hard Hat
  Material: ABS (Acrylonitrile Butadiene Styrene)
  Suspension: 6-point textile harness
  Chinstrap: Detachable 4-point with soft rubber protector
  Adjustment: Wheel ratchet system
  Ventilation: Yes (vented shell)
  Weight: Approx. 350 - 360g
  Temperature Resistance: Suitable down to -30°C
  Slot Size: 30mm (for accessories like earmuffs)
  Standards: EN 397 / ANSI compliant
  `,

  features: `
  Strong and lightweight ABS shell for impact protection
  Detachable 4-point chinstrap for secure fit
  Soft rubber chin protector for added comfort
  6-point suspension system for even weight distribution
  Adjustable wheel ratchet for easy size fitting
  Ventilated design for improved airflow and comfort
  Compatible with earmuffs and other accessories
  Reflective stickers for increased visibility
  Suitable for construction, industrial, and engineering use
  Durable and reliable for daily professional use
  `,

  jumiaLink: 'https://www.jumia.com.ng/catalog/?q=ajusco+helmet',
  kongaLink: 'https://www.konga.com/search?search=ajusco+helmet'
},



   {
     id: 2054,
     name: 'Aluminized Fireman Proximity Suit (Complete Set)',
     category: 'fire-resistance-wears',
     brand: 'Generic',
     price: 950000,

     images: [
       'assets/img/fire/aluminized fire suit.avif',
     ],

     inStock: true,
     description: 'The Fireman Proximity Suit is a high-performance thermal protective ensemble designed for firefighters and industrial workers operating in extreme heat environments. Engineered with advanced aluminized materials, the suit reflects up to 90–95% of radiant heat, allowing users to safely approach intense heat sources such as fires, furnaces, molten metal, and petrochemical hazards.\n\nThis suit is specifically built for proximity firefighting, meaning it is intended for close-range operations near high-temperature zones rather than direct entry into flames. It provides critical protection against radiant heat, convection heat, sparks, molten metal splashes, and hot gases, making it essential for rescue missions and industrial safety operations. :contentReference[oaicite:0]{index=0}\n\nConstructed using aluminized fiberglass or aramid-based fabric with multi-layer insulation, the suit combines heat reflection, thermal resistance, and wearer comfort. The outer reflective layer minimizes heat absorption, while inner layers provide insulation and moisture resistance.\n\nThe complete set includes a hood with visor, jacket, trousers, gloves, and boots, ensuring full-body protection. It is widely used in fire services, airports (ARFF), steel plants, foundries, refineries, and emergency rescue operations where exposure to extreme heat is unavoidable. :contentReference[oaicite:1]{index=1}\n\nDesigned for durability and safety, the suit meets international standards for high-temperature protective clothing and is suitable for short-duration exposure to intense heat conditions.',

     specification: `
  Product Type: Fire Proximity Suit (Aluminized)
  Material: Aluminized Fiberglass / Aramid Fabric
  Layers: 2 – 4 Layer Thermal Protection System
  Heat Reflection: Up to 90–95% radiant heat reflection
  Radiant Heat Resistance: Up to 1000°C – 1650°C (short duration)
  Components: Hood with visor, jacket, trousers, gloves, boots
  Stitching: Kevlar thread for high heat resistance
  Inner Lining: Flame-retardant wool / cotton insulation
  Weight: Approx. 7 – 10 kg (depending on layers)
  Application: Firefighting, industrial heat protection, rescue operations
  `,

     features: `
  Reflects up to 90–95% of radiant heat for maximum protection
  Multi-layer construction for insulation and durability
  Full-body protection including head, hands, and feet
  مقاوم to flames, molten metal splash, and high-temperature gases
  High-strength aluminized outer layer for heat reflection
  Comfortable inner lining for extended wear
  Designed for proximity firefighting and industrial heat environments
  Includes visor for eye and face protection
  Durable Kevlar stitching for long-lasting performance
  Suitable for fire services, refineries, foundries, and emergency rescue
  `,

     jumiaLink: 'https://www.jumia.com.ng/catalog/?q=fire+proximity+suit',
     kongaLink: 'https://www.konga.com/search?search=fire+proximity+suit'
   },


   {
     id: 2055,
     name: 'Firefighter Turnout Gear (Non-Aluminized Full Set)',
     category: 'fire-resistance-wears',
     brand: 'Generic',
     price: 750000,

     images: [
       'assets/img/fire/fireman suit.jpg',
     ],

     inStock: true,
     description: 'This Firefighter Turnout Gear (also known as bunker gear) is a complete non-aluminized protective clothing set designed for structural firefighting and emergency response operations. It provides reliable protection against flames, heat, water, smoke, and physical hazards commonly encountered during fire incidents.\n\nThe suit is constructed using advanced flame-resistant materials such as Nomex and Kevlar, which do not melt or drip when exposed to high temperatures. Instead, they char and form a protective barrier, enhancing firefighter safety during operations. :contentReference[oaicite:0]{index=0}\n\nThis gear features a multi-layer protection system, including an outer shell for flame resistance, a moisture barrier to prevent water and chemicals from penetrating, and a thermal liner that insulates the body from extreme heat. :contentReference[oaicite:1]{index=1}\n\nDesigned for comfort and mobility, the suit allows firefighters to move freely while maintaining high levels of protection. Reflective stripes improve visibility in low-light and smoky conditions, making it suitable for both day and night operations.\n\nIt is ideal for use by fire service personnel, industrial emergency teams, oil & gas workers, and rescue units requiring dependable fire-resistant clothing.',

     specification: `
  Product Type: Firefighter Turnout Gear (Bunker Suit)
  Material: Nomex / Kevlar / Flame-resistant fabric
  Layers: 3-layer system (Outer shell, moisture barrier, thermal liner)
  Heat Resistance: Up to 300°C – 400°C (continuous exposure)
  Flame Resistance: Yes (non-melting, self-extinguishing)
  Visibility: Reflective stripes
  Closure Type: Zipper with storm flap / Velcro
  Application: Structural firefighting, rescue, industrial safety
  `,

     features: `
  Complete full-body firefighter protection set
  Non-aluminized design for insulation-based heat protection
  Made from flame-resistant Nomex and Kevlar materials
  Multi-layer construction for heat, moisture, and flame protection
  Reflective stripes for high visibility in dark environments
  Comfortable and breathable for extended use
  Durable and tear-resistant outer shell
  Water-resistant and chemical-resistant barrier layer
  Designed for mobility and flexibility during operations
  Suitable for firefighters, rescue teams, and industrial workers
  `,

     jumiaLink: 'https://www.jumia.com.ng/catalog/?q=firefighter+turnout+gear',
     kongaLink: 'https://www.konga.com/search?search=firefighter+turnout+gear'
   },

   {
  id: 2056,
  name: 'Multi-Use Chemical Protective Suit (Full Set) – Ship Repair & Pesticide Spraying',
  category: 'chemical-wears',
  brand: 'Generic',
  price: 45000,

  images: [
    'assets/img/chemical wears/chemical suit.avif',
  ],

  inStock: true,
  description: 'The Multi-Use Chemical Protective Suit is a full-body personal protective equipment (PPE) designed to safeguard workers from hazardous chemical exposure during industrial, marine, and agricultural operations. It is widely used for ship repair, pesticide spraying, chemical handling, and general maintenance tasks involving liquids, splashes, and harmful substances.\n\nConstructed from high-quality PVC or coated chemical-resistant fabric, the suit provides a reliable barrier against chemical splashes, acids, alkalis, and pesticide sprays. The material prevents penetration of hazardous liquids, reducing the risk of skin contact and chemical burns during operations. :contentReference[oaicite:0]{index=0}\n\nThis suit comes as a complete set, typically including a jacket (or coverall), trousers, and a hood, ensuring full-body protection from head to toe. Its loose-fitting design allows for easy movement and can be worn over regular clothing, making it suitable for long working hours in demanding environments.\n\nThe suit is lightweight, flexible, and easy to wear, allowing users to perform tasks efficiently while maintaining safety. It is also easy to clean and reusable, making it a cost-effective solution for professionals in agriculture, marine engineering, chemical industries, and sanitation services.',

  specification: `
  Product Type: Chemical Protective Suit (Full Set)
  Material: PVC / Coated Chemical-Resistant Fabric
  Design: Two-piece (Jacket & Trouser) or Coverall with Hood
  Protection Type: Splash, spray, and light chemical resistance
  Coverage: Full body (excluding hands, feet, and face)
  Thickness: Approx. 0.4 – 0.8 mm
  Fit: Free size / adjustable
  Reusability: Yes (washable and reusable)
  Application: Ship repair, pesticide spraying, chemical handling, sanitation
  `,

  features: `
  Full-body protection against chemical splashes and sprays
  Made from durable and chemical-resistant PVC material
  Includes jacket, trousers, and hood for complete coverage
  Lightweight and flexible for ease of movement
  Resistant to acids, alkalis, and pesticide chemicals
  Easy to wear, remove, and clean after use
  Suitable for marine, agricultural, and industrial environments
  Cost-effective and reusable PPE solution
  Designed for long working hours with minimal discomfort
  Provides reliable barrier against hazardous liquid exposure
  `,

  jumiaLink: 'https://www.jumia.com.ng/catalog/?q=chemical+protective+suit',
  kongaLink: 'https://www.konga.com/search?search=chemical+protective+suit'
},



{
  id: 2057,
  name: 'Safety Face Shield – Clear Anti-Fog Industrial Protective Visor (Adjustable)',
  category: 'face-shields',
  brand: 'Generic',
  price: 18000,

  images: [
    'assets/img/helmets and faceshield/face sheilds.jpg',
  ],

  inStock: true,
  description: 'The Safety Face Shield is a high-quality personal protective equipment (PPE) designed to provide full-face protection in industrial, medical, and general work environments. It features a clear, impact-resistant visor that covers the entire face from forehead to below the chin, protecting against flying debris, chemical splashes, dust, and hazardous particles.\n\nMade from durable polycarbonate or PETG material, the shield offers excellent optical clarity and high impact resistance, ensuring safety without compromising visibility. Many models meet ANSI Z87.1 safety standards, which certify protection against high-impact hazards in industrial environments. :contentReference[oaicite:0]{index=0}\n\nThe anti-fog and scratch-resistant coating ensures clear vision even during long working hours, reducing the need for constant adjustment. Its adjustable headband or helmet-mounted design allows for a secure and comfortable fit for different users.\n\nThis face shield is widely used in construction, welding support tasks, grinding, laboratory work, healthcare, and cleaning operations. It can also be worn together with safety goggles or respirators for enhanced protection in high-risk environments.',

  specification: `
  Product Type: Safety Face Shield / Protective Visor
  Material: Polycarbonate / PETG
  Coverage: Full face (forehead to chin)
  Coating: Anti-fog & scratch-resistant
  Thickness: Approx. 0.04" – 0.08"
  Protection Standard: ANSI Z87.1 compliant (varies by model)
  Mount Type: Headband or helmet-mounted
  UV Protection: Up to 99% UVA/B/C (polycarbonate models)
  Application: Industrial, medical, construction, laboratory
  `,

  features: `
  Full-face protection against debris, splashes, and particles
  High-impact resistant polycarbonate construction
  Anti-fog coating for clear visibility
  Lightweight and comfortable for extended use
  Adjustable headband for secure fit
  Compatible with helmets, goggles, and respirators
  Scratch-resistant surface for durability
  Reusable and easy to clean
  Suitable for industrial, medical, and general safety use
  Provides better coverage than standard safety goggles
  `,

  jumiaLink: 'https://www.jumia.com.ng/catalog/?q=safety+face+shield',
  kongaLink: 'https://www.konga.com/search?search=safety+face+shield'
},


{
  id: 2058,
  name: 'Large Black Sturdy Elegant Umbrella – 24 Ribs Windproof',
  category: 'umbrellas',
  brand: 'Generic',
  price: 18000,

  images: [
    'assets/img/umbrella/Large umbrella black-24 stroke.jpg',
  ],

  inStock: true,
  description: 'This Large Black Sturdy Elegant Umbrella is a premium-quality rain protection accessory designed for durability, style, and maximum coverage. Built with a strong 24-rib (spoke) structure, it offers superior resistance against strong winds, making it highly reliable during heavy rain and stormy conditions.\n\nThe umbrella features a wide canopy that provides excellent coverage for one or two users, keeping you dry even in intense rainfall. Its classic black design gives it a professional and elegant look, making it suitable for business use, daily commuting, and outdoor activities.\n\nConstructed with high-quality waterproof fabric and reinforced metal ribs, the umbrella is both durable and long-lasting. The sturdy central shaft ensures stability, while the ergonomic handle provides a comfortable grip for extended use.\n\nDesigned for convenience, the umbrella opens smoothly and is easy to carry, making it an essential accessory for both personal and professional use during rainy seasons.',

  specification: `
  Product Type: Umbrella
  Design: Large canopy, classic black
  Frame: 24 ribs (wind-resistant structure)
  Material: Waterproof polyester fabric
  Shaft: Reinforced metal
  Opening Mechanism: Manual / automatic (varies by model)
  Coverage: Suitable for 1 – 2 persons
  Handle: Ergonomic grip
  Application: Rain protection, outdoor use, commuting
  `,

  features: `
  Strong 24-rib construction for wind resistance
  Large canopy for maximum coverage
  Elegant black design for professional appearance
  Durable waterproof fabric for effective rain protection
  Sturdy shaft for enhanced stability
  Comfortable handle for easy grip
  Suitable for heavy rain and windy conditions
  Long-lasting and reliable build quality
  Easy to open and close
  Ideal for daily and business use
  `,

  jumiaLink: 'https://www.jumia.com.ng/catalog/?q=large+umbrella+24+ribs',
  kongaLink: 'https://www.konga.com/search?search=large+umbrella+24+ribs'
},
// ppe ends
//  stop at 4000


// Pumping machines
// 4001 to 5000
{
  id: 4001,
  name: 'Electric Oil Fuel Diesel Transfer Pump 16GPM with Meter & Manual Nozzle',
  category: 'fuel-transfer-pump',
  brand: 'Generic',
  price: 320000,

  images: [
    'assets/img/pumping machines/electric fuel desiel transfer oil pump.webp'
  ],
  inStock: true,

  description: 'The Electric Oil Fuel Diesel Transfer Pump is a high-efficiency fuel dispensing solution designed for fast and accurate transfer of diesel, kerosene, and light oils. Equipped with a powerful 110V motor, this pump delivers a strong flow rate of up to 16 gallons per minute (60L/min), making it ideal for industrial, agricultural, and workshop applications. It features a built-in mechanical flow meter for precise measurement and a manual nozzle for controlled dispensing. The self-priming rotary vane system ensures easy operation, while the heavy-duty cast iron construction guarantees durability and long-term performance in demanding environments.',

  specification: `
  Product Type: Electric Fuel Transfer Pump
  Voltage: 110V / 60Hz
  Power: 550W
  Max Flow Rate: 60 L/min (16 GPM)
  Pump Type: Self-Priming Rotary Vane
  Meter Type: Mechanical Flow Meter (±1% accuracy)
  Inlet/Outlet Size: 1 inch (25mm)
  Max Pressure: 3 Bar
  Max Suction Height: 5 meters
  Max Head: 10–15 meters
  Suitable Fluids: Diesel, Kerosene, Light Oils
  `,

  features: `
  High flow rate for fast fuel transfer (16 GPM)
  Built-in mechanical meter for accurate fuel measurement
  Durable cast iron construction for long-lasting use
  Self-priming pump for easy startup
  Manual nozzle for controlled fuel dispensing
  Compact and portable design for flexible use
  Ideal for industrial, farm, and workshop applications
  Not suitable for gasoline or highly flammable fuels
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
   },


{
  id: 4002,
  name: 'Quantitative Fuel Dispenser Diesel Transfer Pump Kit (12V DC / 220V)',
  category: 'fuel-transfer-pump',
  brand: 'Generic',
  price: 320000,

  images: [
    'assets/img/pumping machines/Quantitative 12 v dc 220v diesel transfer fuel pump.jpg'
  ],

  inStock: true,

  description: 'The Quantitative Fuel Dispenser Diesel Transfer Pump Kit is a complete fuel dispensing solution designed for accurate and efficient transfer of diesel, kerosene, and light oils. It is equipped with a high-performance self-priming pump, a precise flow meter, and an automatic or manual nozzle for controlled dispensing. Available in both 12V DC and 220V AC configurations, this pump is suitable for mobile and fixed installations such as fuel stations, farms, construction sites, and industrial operations. The system allows users to dispense fuel by volume or preset quantity, making it ideal for professional fuel management and monitoring.',

  specification: `
  Product Type: Quantitative Diesel Fuel Dispenser Pump Kit
  Voltage Options: 12V DC / 220V AC
  Power: 150W – 550W (depending on model)
  Max Flow Rate: 20 – 60 L/min
  Pump Type: Self-Priming Rotary Vane Pump
  Meter Type: Mechanical or Digital Flow Meter
  Measurement Accuracy: ±0.3% – ±1%
  Inlet/Outlet Size: 1 inch (25mm)
  Suction Height: 5 – 6 meters
  Hose Length: 2m (inlet), 4m (outlet)
  Suitable Fluids: Diesel, Kerosene, Light Oils
  `,

  features: `
  Quantitative dispensing (preset fuel volume or amount)
  Available in both battery-powered (12V) and electric (220V) versions
  High accuracy flow meter for precise measurement
  Self-priming pump for easy operation
  Durable metal body for industrial use
  Manual or automatic fuel nozzle with swivel joint
  Built-in bypass valve and strainer for safe operation
  Portable or wall-mountable design
  Suitable for fuel stations, farms, construction, and workshops
  Not suitable for gasoline (unless explosion-proof model)
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

{
  id: 4003,
  name: '2 Inch LC Flow Meter for Diesel Fuel (Positive Displacement)',
  category: 'fuel-transfer-pump',
  brand: 'Generic',
  price: 250000,

  images: [
    'assets/img/pumping machines/2 inches liquid control flow meter.jpg'
  ],

  inStock: true,

  description: 'The 2 Inch LC Flow Meter is a high-precision positive displacement (oval gear) meter designed for accurate measurement of diesel, fuel oils, kerosene, and other industrial liquids. Built for heavy-duty applications, it delivers consistent and reliable readings even under varying flow conditions and pressure levels. This flow meter is widely used in fuel dispensing systems, tanker trucks, fuel depots, and industrial pipelines where precise fuel accountability is critical. Its robust construction, combined with advanced metering technology, ensures minimal measurement error and long-term stability. The meter features a low-pressure drop design for efficient flow, easy integration with mechanical or digital registers, and compatibility with automated fuel management systems. It is engineered for durability, offering excellent resistance to wear, corrosion, and harsh working environments, making it a dependable choice for continuous industrial operations.',

  specification: `
  Product Type: LC Positive Displacement Flow Meter
  Size: 2 Inch (DN50 / 50mm)
  Flow Range: 38 – 380 L/min
  Accuracy: ±0.2% – ±0.5%
  Repeatability: ≤0.05%
  Max Pressure: 10 – 18 Bar
  Measurement Units: Liters / Gallons
  Material: Aluminum / Cast Iron
  Connection Type: Flange / NPT / BSP
  Application: Diesel, Fuel Oil, Kerosene, Industrial Fluids
  `,

  features: `
  High accuracy fuel measurement with stable performance
  Positive displacement (oval gear) technology for precise metering
  Suitable for large flow rate applications
  Durable construction for industrial and outdoor use
  Low pressure drop for efficient fuel transfer systems
  Easy installation with flange or threaded connections
  Compatible with mechanical or digital registers
  Long service life with minimal maintenance
  Ideal for tanker trucks, fuel depots, and dispensing systems
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},
// pumping machine ends
// stop at 5000



// Silicone and adhesives starts
// 5001 to 7000


// silicone sealant
{
  id: 6001,
  name: 'Abro 2000 RTV Silicone Sealant (310g)',
  category: 'silicone-sealants',
  brand: 'ABRO',
  price: 9000,

  images: [
    'assets/img/silicone and adhesives/abro 2000 silicone sealant.webp',
      // 'assets/img/pumping machines/electric fuel desiel transfer oil pump.webp2.webp'
  ],

  inStock: true,

  description: 'Abro 2000 RTV Silicone Sealant is a high-quality, general-purpose adhesive sealant designed for sealing, bonding, and insulating a wide range of materials. It cures into a flexible, durable silicone rubber that provides excellent resistance to moisture, temperature changes, and weather conditions. Suitable for both indoor and outdoor use, this sealant is widely used in automotive, construction, marine, and household applications. It adheres effectively to surfaces such as glass, metal, wood, ceramic, porcelain, rubber, and painted materials, making it a versatile solution for sealing joints, repairing leaks, and forming gaskets.',

  specification: `
  Product Type: RTV Silicone Sealant
  Model: Abro 2000 (SS-2000)
  Size: 310g Cartridge
  Color Options: Clear, White, Black, Grey
  Cure Type: Moisture Cure (RTV - Room Temperature Vulcanizing)
  Application Type: Manual or Caulking Gun
  Temperature Resistance: High & Low Temperature Resistant
  Usage: Indoor and Outdoor Applications
  `,

  features: `
  General-purpose sealant for sealing, bonding, and insulating
  Cures into flexible and durable silicone rubber
  Waterproof and weather-resistant
  Strong adhesion to glass, metal, wood, ceramic, rubber, and painted surfaces
  Suitable for automotive gasket making and repairs
  Ideal for windows, panels, doors, and equipment sealing
  Resistant to moisture, chemicals, and environmental conditions
  Can be used for both indoor and outdoor applications
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// pu foam sealants
{
  id: 6002,
  name: 'Asmaco PU Foam Sealant (Polyurethane Expanding Foam)',
  category: 'pu-foam-sealant',
  brand: 'Asmaco',
  price: 12000,

  images: [
    'assets/img/silicone and adhesives/asmaco pu foam sealant.jpg'
  ],

  inStock: true,

  description: 'Asmaco PU Foam Sealant is a high-performance one-component polyurethane expanding foam designed for sealing, filling, and insulating gaps, joints, and cavities in construction and industrial applications. It expands upon application to effectively fill irregular spaces, providing excellent thermal and acoustic insulation. Once cured, the foam forms a strong, durable, and airtight bond that adheres to a wide range of materials including concrete, brick, wood, metal, and PVC. It is ideal for installing doors and windows, sealing pipe penetrations, fixing panels, and preventing air or water leakage. The foam is moisture-cured and offers long-lasting performance with resistance to weathering, aging, and environmental conditions, making it suitable for both indoor and outdoor use. Its easy-to-use spray application ensures precise control, reduces material waste, and improves overall efficiency on site.',

  specification: `
  Product Type: Polyurethane Expanding Foam Sealant
  Brand: Asmaco
  Application Type: Aerosol Spray Can
  Cure Type: Moisture Cure
  Expansion: High Expansion Foam
  Color: Light Yellow / Cream
  Coverage: Fills gaps, cracks, and cavities
  Temperature Resistance: Suitable for varying weather conditions
  Usage: Indoor and Outdoor Applications
  `,

  features: `
  Expands to fill gaps, cracks, and voids effectively
  Excellent thermal and sound insulation properties
  Strong adhesion to concrete, brick, wood, metal, and PVC
  Moisture-cured for durable and long-lasting performance
  Helps prevent air, water, and dust infiltration
  Easy-to-use spray application with controlled expansion
  Suitable for door and window installation, sealing and fixing
  Resistant to weathering and aging
  Ideal for construction, maintenance, and repair work
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// epoxy adhesives
{
  id: 6003,
  name: 'Araldite Epoxy Adhesive (Strong Multi-Purpose Bonding Glue)',
  category: 'epoxy-adhesives',
  brand: 'Araldite',
  price: 7500,

  images: [
    'assets/img/silicone and adhesives/araldite epoxy adhesive.webp'
  ],

  inStock: true,

  description: 'Araldite Epoxy Adhesive is a high-strength, two-component adhesive system designed for permanent bonding of a wide range of materials. It consists of a resin and hardener that, when mixed, form a tough, durable bond capable of withstanding heavy loads, impact, and environmental stress. Known for its superior bonding strength, Araldite is widely used in industrial, automotive, construction, and household applications. It provides excellent adhesion to metal, wood, glass, ceramic, plastic, and concrete surfaces. Once cured, the adhesive becomes rigid, waterproof, and resistant to chemicals, heat, and vibration, making it ideal for both indoor and outdoor use. It is perfect for repairs, fabrication, maintenance work, and structural bonding where reliability and long-lasting performance are essential.',

  specification: `
  Product Type: Epoxy Adhesive (Two-Part System)
  Brand: Araldite
  Components: Resin + Hardener
  Cure Type: Chemical Cure (Room Temperature)
  Setting Time: 5 minutes to several hours (depending on variant)
  Full Cure Time: 24 hours (approx.)
  Bond Strength: High-strength permanent bonding
  Color: Clear / Amber (varies by type)
  Application: Manual mixing and application
  Usage: Industrial, Automotive, Household, Construction
  `,

  features: `
  Strong and permanent bonding for multiple materials
  Two-component system for high durability and performance
  Resistant to water, chemicals, heat, and impact
  Suitable for metal, wood, glass, ceramic, plastic, and concrete
  Can be used for repairs, filling, and structural bonding
  Excellent gap-filling properties
  Ideal for indoor and outdoor applications
  Easy to mix and apply with reliable results
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},


// construction adhesives
{
  id: 6004,
  name: 'Soudal PRO 40P Polyurethane Wood Adhesive 750g',
  category: 'construction-adhesives',
  brand: 'Soudal',
  price: 18000,

  images: [
    'assets/img/silicone and adhesives/soudal wood glue.webp'
  ],

  inStock: true,

  description: 'Soudal PRO 40P is a professional-grade, one-component polyurethane adhesive designed for high-strength bonding of wood and construction materials. This ready-to-use adhesive offers excellent water resistance (D4 classification), making it suitable for both interior and exterior applications exposed to moisture and harsh weather conditions. It features a unique foaming expansion action that penetrates and fills gaps, pores, and uneven surfaces, ensuring maximum bonding strength and durability. The adhesive cures through moisture reaction, forming a tough and long-lasting bond that can withstand heavy loads, environmental stress, and temperature variations. Ideal for joinery, carpentry, furniture production, and structural wood bonding, it is especially effective on damp or humid wood surfaces and provides reliable performance in demanding industrial and construction environments.',

  specification: `
  Product Type: Polyurethane Wood Adhesive
  Model: PRO 40P
  Size: 750g
  Cure Type: Moisture Cure (PU Adhesive)
  Water Resistance: D4 (EN 204 Standard)
  Open Time: Approx. 15 minutes
  Pressing Time: Minimum 3 hours
  Temperature Resistance: -30°C to +100°C
  Application: Brush, spatula, or direct application
  Suitable Materials: Wood, timber, construction materials
  `,

  features: `
  One-component ready-to-use polyurethane adhesive
  High-strength bonding for wood and construction materials
  D4 water-resistant (suitable for indoor and outdoor use)
  Foaming action fills gaps and uneven surfaces
  Strong adhesion even on damp or humid wood
  Durable and resistant to weather, moisture, and temperature changes
  Professional-grade performance for carpentry and construction
  Easy application with reliable long-term results
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// glues
{
  id: 6005,
  name: 'Loctite 406 Instant Adhesive (Fast Bonding Cyanoacrylate)',
  category: 'glues',
  brand: 'Loctite',
  price: 15000,

  images: [
    'assets/img/silicone and adhesives/loctite 406 glue.webp'
  ],

  inStock: true,

  description: 'Loctite 406 is a high-performance instant adhesive specifically formulated for fast bonding of plastics and rubber materials. This low-viscosity cyanoacrylate adhesive provides rapid curing within seconds, making it ideal for precision assembly and quick repairs. It delivers strong, reliable bonds on a wide range of substrates including plastics, elastomers, metals, and other smooth surfaces. Loctite 406 is particularly effective when used with primers for difficult-to-bond plastics, ensuring enhanced adhesion and long-term durability. Its quick-setting nature, combined with excellent strength and resistance to environmental factors, makes it suitable for industrial, automotive, electronics, and maintenance applications where speed and performance are critical.',

  specification: `
  Product Type: Instant Adhesive (Cyanoacrylate)
  Brand: Loctite
  Model: 406
  Viscosity: Low (for tight-fitting parts)
  Cure Time: 2 – 10 seconds (initial bond)
  Full Cure Time: 24 hours
  Color: Clear
  Temperature Resistance: Up to 120°C
  Application: Drop-wise precision bonding
  Suitable Materials: Plastics, Rubber, Metal, Elastomers
  `,

  features: `
  Fast curing within seconds for quick repairs
  Specially formulated for plastics and rubber bonding
  Low viscosity for tight-fitting surfaces
  Strong and durable bonding performance
  Clear finish for neat and invisible joints
  Works on a variety of materials including metal and elastomers
  Suitable for industrial, automotive, and electronics use
  Ideal for precision assembly and maintenance tasks
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

{
  id: 6006,
  name: 'Abro 99 Multi-Purpose Contact Adhesive (Strong Bond Glue)',
  category: 'contact-adhesives',
  brand: 'Abro',
  price: 12000,

  images: [
    'assets/img/silicone and adhesives/abro 99 contact adhesives.jpg'
  ],

  inStock: true,

  description: 'Abro 99 Contact Adhesive is a high-strength, multi-purpose bonding solution designed for durable and long-lasting adhesion across a wide range of materials. Formulated for both industrial and household use, this solvent-based adhesive delivers an instant, firm bond when applied to surfaces such as leather, rubber, wood, foam, laminate, fabric, and certain plastics. Its contact bonding mechanism ensures superior grip once both surfaces are coated and allowed to become tacky before joining. Abro 99 is ideal for upholstery work, shoe repairs, furniture manufacturing, automotive interior fixes, and general maintenance tasks. The adhesive provides excellent resistance to heat, moisture, and aging, ensuring reliability even in demanding environments. With its easy application and fast bonding capability, Abro 99 is a trusted choice for professionals and DIY users who require strong, flexible, and permanent bonds.',

  specification: `
  Product Type: Contact Adhesive
  Brand: Abro
  Model: 99
  Base: Solvent-based
  Viscosity: Medium
  Bonding Method: Contact (apply on both surfaces)
  Tack Time: 5 – 15 minutes (depending on conditions)
  Full Cure Time: 24 hours
  Color: Yellowish / Light Brown
  Temperature Resistance: Moderate heat resistance
  Application: Brush or spread evenly on surfaces
  Suitable Materials: Leather, Rubber, Wood, Foam, Fabric, Laminate
  `,

  features: `
  Strong and durable multi-purpose bonding
  Ideal for leather, rubber, wood, and upholstery applications
  Contact bonding system for maximum adhesion strength
  مقاFast setting with reliable long-term performance
  مقاResistant to heat, moisture, and aging
  Flexible bond that withstands stress and movement
  Easy to apply using brush or spreader
  Suitable for industrial, automotive, and home repairs
  Perfect for shoe repairs, furniture work, and DIY projects
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// Waterproofsealants
{
  id: 6007,
  name: 'Waterproof Leak Filler Spray 450ml (Black Roof & Crack Sealant)',
  category: 'waterproof-sealants',
  brand: 'Generic',
  price: 6500,

  images: [
    'assets/img/silicone and adhesives/waterproof leak filler 450ml black.jpg'
  ],

  inStock: true,

  description: 'This Waterproof Leak Filler Spray is a fast-acting sealing solution designed to instantly stop water leaks and seal cracks on a wide range of surfaces. Formulated with a rubberized waterproof coating containing asphalt, petroleum resin, and sealing compounds, it creates a tough, flexible, and weather-resistant barrier that prevents further leakage. The spray penetrates deep into cracks and joints, forming a durable protective layer that withstands extreme weather conditions including heavy rain, heat, and moisture. It is ideal for emergency repairs and long-term maintenance on roofs, walls, gutters, pipes, and drainage systems. Its easy spray application allows it to reach difficult areas without tools, making it perfect for both professionals and DIY users. Once cured, it provides a smooth, black waterproof coating that can last for several years without cracking or peeling.',

  specification: `
  Product Type: Waterproof Leak Filler Spray
  Volume: 450ml
  Color: Black
  Form: Aerosol Spray
  Base Material: Rubberized Asphalt / Petroleum Resin
  Drying Time: 20 – 30 minutes (touch dry)
  Full Cure Time: 24 hours
  Finish: Flexible waterproof coating
  Coverage: Approx. 8 – 10 sq.ft (depending on surface)
  Application Method: Spray
  Suitable Surfaces: Concrete, Metal, PVC, Tiles, Roof Sheets
  `,

  features: `
  Instantly seals leaks and cracks
  Forms a strong waterproof and airtight barrier
  Quick drying with smooth finish
  Elastic and crack-resistant coating
  Withstands extreme weather conditions
  Adheres to multiple surfaces including metal and concrete
  Easy spray application for hard-to-reach areas
  Long-lasting protection (up to 3–5 years)
  Ideal for roof repair, pipes, gutters, and wall cracks
  `,


  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// spray paints and leak fillers
{
  id: 6008,
  name: 'Waterproof Leak Filler Spray 450ml (Black Roof & Crack Sealant)',
  category: 'leak-fillers and spray-paint',
  brand: 'Generic',
  price: 6500,

  images: [
    'assets/img/silicone and adhesives/waterproof leak filler 450ml black.jpg'
  ],

  inStock: true,

  description: 'This Waterproof Leak Filler Spray is a fast-acting sealing solution designed to instantly stop water leaks and seal cracks on a wide range of surfaces. Formulated with a rubberized waterproof coating containing asphalt, petroleum resin, and sealing compounds, it creates a tough, flexible, and weather-resistant barrier that prevents further leakage. The spray penetrates deep into cracks and joints, forming a durable protective layer that withstands extreme weather conditions including heavy rain, heat, and moisture. It is ideal for emergency repairs and long-term maintenance on roofs, walls, gutters, pipes, and drainage systems. Its easy spray application allows it to reach difficult areas without tools, making it perfect for both professionals and DIY users. Once cured, it provides a smooth, black waterproof coating that can last for several years without cracking or peeling.',

  specification: `
  Product Type: Waterproof Leak Filler Spray
  Volume: 450ml
  Color: Black
  Form: Aerosol Spray
  Base Material: Rubberized Asphalt / Petroleum Resin
  Drying Time: 20 – 30 minutes (touch dry)
  Full Cure Time: 24 hours
  Finish: Flexible waterproof coating
  Coverage: Approx. 8 – 10 sq.ft (depending on surface)
  Application Method: Spray
  Suitable Surfaces: Concrete, Metal, PVC, Tiles, Roof Sheets
  `,

  features: `
  Instantly seals leaks and cracks
  Forms a strong waterproof and airtight barrier
  Quick drying with smooth finish
  Elastic and crack-resistant coating
  Withstands extreme weather conditions
  Adheres to multiple surfaces including metal and concrete
  Easy spray application for hard-to-reach areas
  Long-lasting protection (up to 3–5 years)
  Ideal for roof repair, pipes, gutters, and wall cracks
  `,


  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

// sealants and adhesives ends
//  stop at 7000




// fire and traffic safety starts at 70001
//  ends at 9000

// fire safety
// fire blankets
{
  id: 7001,
  name: '1.2m x 1.8m Fire Blanket',
  category: 'fire-blankets',
  brand: 'Generic',
  price: 12000,

  images: [
    'assets/img/fireblanketsandextinguishers/1.2m X 1.8m (4ft X 6ft) Fire Blanket.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: '1.2m x 1.8m Fire Blanket is a high-quality fire safety tool designed to quickly extinguish small fires by cutting off oxygen supply. Made from durable, heat-resistant fiberglass material, it is ideal for use in homes, kitchens, offices, workshops, laboratories and industrial environments. This fire blanket is especially effective for grease fires, electrical fires and clothing fires, providing a fast and safe emergency response solution without creating a mess like traditional fire extinguishers.',

  specification: `
  - Product Name: Fire Blanket
  - Size: 1.2m x 1.8m
  - Material: Woven fiberglass fabric
  - Temperature Resistance: Up to 550°C
  - Standard: Complies with fire safety standards
  - Packaging: Wall-mounted storage pouch
  - Color: White blanket with red container
  - Reusable: Single-use recommended for safety
  `,

  features: `
  - Quickly smothers fires by cutting off oxygen
  - Made from flame-resistant fiberglass material
  - Ideal for kitchen, home, office and industrial use
  - No maintenance required unlike fire extinguishers
  - Easy to deploy in emergency situations
  - Suitable for grease, electrical and small fire outbreaks
  - Compact and wall-mountable for quick access
  - Safe for wrapping around a person in case of clothing fire
  `
},


// fire extinguishers
{
  id: 7002,
  name: 'AFO Automatic Fire Ball Extinguisher',
  category: 'fire-extinguisher',
  brand: 'AFO',
  price: 25000,

  images: [
    'assets/img/fireblanketsandextinguishers/AFO Automatic Fire Ball Extinguisher2.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
AFO Automatic Fire Ball Extinguisher is a smart and highly effective fire suppression solution designed to provide immediate response to fire outbreaks without the need for human intervention. Unlike traditional fire extinguishers that require training and manual operation, this fire ball automatically activates when it comes into contact with flames, typically within 3 to 5 seconds, dispersing a powerful dry chemical powder that quickly suppresses the fire by cutting off the oxygen supply and interrupting the combustion process.
This innovative device is ideal for both residential and commercial environments, including homes, kitchens, offices, warehouses, generator rooms, fuel storage areas and electrical panels. It can be strategically placed or mounted in high-risk areas to provide 24/7 passive fire protection. In emergency situations, it can also be thrown directly into the fire, making it extremely user-friendly even for individuals with no firefighting experience.
The AFO Fire Ball is lightweight, compact and maintenance-free, with a long shelf life of up to 5 years. Upon activation, it produces a loud alert sound to notify occupants, ensuring quick awareness and response. The extinguishing agent used is non-toxic and environmentally friendly, making it safe for use around people, equipment and sensitive environments.
Overall, the AFO Automatic Fire Ball Extinguisher is a reliable, easy-to-use and cost-effective fire safety device that enhances protection, reduces fire damage risk and provides peace of mind in any setting.
`,

  specification: `
  - Product Name: Automatic Fire Ball Extinguisher
  - Brand: AFO
  - Activation Time: 3 – 5 seconds when in contact with flame
  - Weight: Approx. 1.3 kg
  - Effective Coverage Area: Up to 3 – 5 square meters
  - Extinguishing Agent: Dry chemical powder
  - Sound Level: Loud alert upon activation
  - Shelf Life: Up to 5 years
  - Operation: Automatic (no pin, no training required)
  `,

  features: `
  - Automatic activation when exposed to fire
  - No need for manual operation or training
  - Lightweight and easy to install or place
  - Provides 24/7 fire protection
  - Non-toxic and environmentally friendly extinguishing agent
  - Emits a loud noise to alert occupants during activation
  - Ideal for electrical fires, kitchens, vehicles and storage areas
  - Maintenance-free with long shelf life
  - Can be thrown into fire or mounted for automatic use
  `
},


{
  id: 7003,
  name: 'Fire Alarm Smoke Detector',
  category: 'somke and fire alarm',
  brand: 'Generic',
  price: 8500,

  images: [
    'assets/img/fireblanketsandextinguishers/smoke alarms.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Fire Alarm Smoke Detector is a reliable safety device designed to detect smoke and alert occupants at the early stage of a fire outbreak. It provides fast and effective warning through a loud audible alarm, helping to prevent property damage and save lives. Ideal for use in homes, offices, shops, warehouses and industrial environments, this smoke detector continuously monitors the air for signs of smoke or fire.

The device is easy to install and operates automatically, offering 24/7 protection without the need for constant supervision. It is especially useful in high-risk areas such as kitchens, electrical rooms and storage spaces. With its compact design and high sensitivity sensor, the fire alarm ensures quick detection and immediate response, giving occupants enough time to evacuate or take action.

This fire alarm is an essential part of any fire safety system, providing peace of mind and enhanced protection against unexpected fire hazards.
`,

  specification: `
  - Product Name: Smoke Detector Fire Alarm
  - Sensor Type: Photoelectric smoke sensor
  - Power Source: 9V battery (or DC power depending on model)
  - Alarm Sound Level: ≥ 85 dB at 3 meters
  - Detection Type: Smoke detection
  - Installation: Ceiling or wall mounted
  - Operating Temperature: -10°C to 50°C
  - Humidity Range: ≤ 95% RH (non-condensing)
  - Indicator: LED light for status and alarm
  `,

  features: `
  - Detects smoke quickly and accurately
  - Loud alarm sound for immediate alert
  - Easy installation and maintenance
  - Compact and lightweight design
  - Suitable for homes, offices and industrial use
  - Provides 24/7 continuous monitoring
  - LED indicator for power and alarm status
  - Low battery warning function
  - Enhances overall fire safety and protection
  `
},


{
  id: 7004,
  name: 'Fire Hose Reel Cabinet',
  category: 'fire-hose-cabinet',
  brand: 'Generic',
  price: 95000,

  images: [
    'assets/img/fireblanketsandextinguishers/firehosereelcabinet.webp4.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Fire Hose Reel Cabinet is a durable and protective enclosure designed to house fire hose reels and related firefighting equipment. It ensures that fire hoses are safely stored, easily accessible and well-organized for quick deployment during emergency situations. Commonly installed in commercial buildings, factories, warehouses, shopping complexes and public facilities, the cabinet plays a critical role in fire safety systems.
Constructed from high-quality mild steel or stainless steel, the cabinet is built to withstand harsh environments and protect internal components from dust, damage and tampering. It is typically wall-mounted or recessed into walls, with a front glass or metal door that allows quick access in case of fire emergencies.
The fire hose reel cabinet is designed to accommodate standard hose reels, valves and nozzles, ensuring efficient water delivery for fire suppression. Its bright red finish enhances visibility, making it easy to locate during emergencies. This cabinet is an essential component of any firefighting system, providing both protection and readiness.
`,

  specification: `
  - Product Name: Fire Hose Reel Cabinet
  - Material: Mild steel / Stainless steel
  - Mounting Type: Wall-mounted or recessed
  - Door Type: Glass or solid metal door
  - Color: Red (standard fire safety color)
  - Compatibility: Standard fire hose reels and accessories
  - Locking System: Key lock or latch system
  - Finish: Powder-coated for corrosion resistance
  - Usage: Indoor and outdoor (depending on model)
  `,

  features: `
  - Protects fire hose reel and accessories from damage
  - Ensures quick and easy access during emergencies
  - Strong and durable construction for long-term use
  - Corrosion-resistant coating for extended lifespan
  - Bright red color for high visibility
  - Suitable for commercial, industrial and residential buildings
  - Can be wall-mounted or recessed for space efficiency
  - Secure locking system to prevent tampering
  - Essential component of fire protection systems
  `
},

{
  id: 7005,
  name: 'Fire Hose Reel',
  category: 'fire-hose',
  brand: 'Generic',
  price: 120000,

  images: [
    'assets/img/fireblanketsandextinguishers/firehosereelcabinet.webp5.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Fire Hose Reel is an essential firefighting equipment designed to deliver a continuous and controlled supply of water for extinguishing fires. It consists of a semi-rigid hose wound on a rotating reel, allowing easy handling and quick deployment during emergency situations. Commonly installed in commercial buildings, factories, warehouses and public facilities, the fire hose reel provides an immediate response to fire outbreaks before they escalate.

The hose reel is typically connected to a reliable water source and is equipped with a control valve and nozzle, enabling users to direct water accurately to the fire. Its design ensures smooth unwinding and rewinding of the hose, making it user-friendly even for untrained individuals.

Constructed from high-quality materials, the fire hose reel is durable, corrosion-resistant and built for long-term use. It is mounted on walls or within cabinets for easy accessibility and protection. This equipment plays a critical role in fire safety systems, offering a dependable and effective firefighting solution.
`,

  specification: `
  - Product Name: Fire Hose Reel
  - Hose Length: 20m / 25m / 30m (depending on model)
  - Hose Diameter: 19mm (3/4 inch)
  - Material: Rubber or PVC hose with steel reel
  - Mounting Type: Wall-mounted
  - Nozzle Type: Adjustable spray/jet nozzle
  - Operating Pressure: Standard fire system pressure
  - Color: Red
  - Application: Indoor fire protection systems
  `,

  features: `
  - Provides continuous water supply for firefighting
  - Easy to deploy and operate during emergencies
  - Durable and corrosion-resistant construction
  - Smooth hose winding and unwinding mechanism
  - Adjustable nozzle for controlled water flow
  - Suitable for commercial and industrial environments
  - Can be installed inside cabinets or directly on walls
  - Reliable and effective fire suppression solution
  - Essential component of fire safety systems
  `
},


{
  id: 7006,
  name: 'PVC Safety Cone 100cm with Black Base',
  category: 'traffic-cone',
  brand: 'Generic',
  price: 18000,

  images: [
    'assets/img/traffic safety/100cm traffic cones with base.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
PVC Safety Cone 100cm with Black Base is a high-visibility traffic control device designed to enhance safety and manage movement in various environments. It is commonly used on roads, construction sites, parking areas, warehouses and public spaces to warn, guide and restrict access to hazardous or restricted zones.
Made from durable and flexible PVC material, the cone is resistant to impact, weather conditions and fading, ensuring long-lasting performance even in harsh outdoor environments. The heavy black rubber base provides excellent stability, preventing the cone from tipping over due to wind, vehicle movement or minor impacts.
With its bright color and optional reflective bands, the safety cone ensures maximum visibility during both day and night operations. It is lightweight, portable and easy to stack, making it convenient for transportation and storage. This safety cone is an essential tool for traffic management, hazard marking and workplace safety.
`,

  specification: `
  - Product Name: PVC Safety Cone
  - Height: 100 cm
  - Material: Flexible PVC
  - Base: Heavy black rubber base
  - Color: Bright orange (standard)
  - Reflective: Optional reflective collar
  - Weather Resistance: UV and weather resistant
  - Weight: Heavy-duty base for stability
  - Usage: Indoor and outdoor applications
  `,

  features: `
  - High visibility for effective hazard warning
  - Durable and flexible PVC construction
  - Heavy base for improved stability
  - Resistant to weather, impact and fading
  - Lightweight and easy to carry
  - Stackable design for easy storage
  - Suitable for road safety, construction and industrial use
  - Optional reflective bands for night visibility
  - Ideal for traffic control and restricted area marking
  `
},


{
  id: 7007,
  name: 'Wet Floor Caution Sign',
  category: 'warning-signs',
  brand: 'Generic',
  price: 6500,

  images: [
    'assets/img/traffic safety/wet floor caution sign.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Wet Floor Caution Sign is a highly visible safety warning tool designed to alert people of slippery surfaces and prevent accidents such as slips and falls. It is commonly used in public places such as offices, shopping malls, hospitals, schools, hotels, warehouses and industrial facilities where floors may become wet due to cleaning, spills or weather conditions.
Made from durable plastic material, the sign is lightweight yet sturdy, allowing it to be easily positioned and moved as needed. Its bright yellow color and bold warning text ensure maximum visibility, while the universal caution symbol helps communicate the message clearly even without reading the text.
The foldable A-frame design allows for easy storage and portability, making it convenient for janitors, cleaners and maintenance staff to deploy quickly. This safety sign is an essential tool for maintaining workplace safety and reducing the risk of accidents in both commercial and residential environments.
`,

  specification: `
  - Product Name: Wet Floor Caution Sign
  - Material: Durable plastic (PP/PE)
  - Design: Foldable A-frame
  - Color: Bright yellow
  - Message: "Caution Wet Floor"
  - Height: Approx. 60 cm (varies by model)
  - Usage: Indoor and outdoor
  - Portability: Lightweight and easy to carry
  `,

  features: `
  - Highly visible warning sign for wet or slippery floors
  - Bright yellow color for maximum attention
  - Foldable design for easy storage and transport
  - Lightweight yet durable construction
  - Clear text and universal caution symbol
  - Helps prevent slips, falls and accidents
  - Suitable for commercial, industrial and residential use
  - Easy to deploy and reposition
  - Essential for workplace and public safety compliance
  `
},


{
  id: 7008,
  name: 'Yellow & Black Caution Tape 500m',
  category: 'caution-tape',
  brand: 'Generic',
  price: 9000,

  images: [
    'assets/img/traffic safety/yellow and black caution tape.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Yellow & Black Caution Tape 500m is a highly visible safety marking tape designed to warn, restrict and control access to hazardous or restricted areas. It is widely used in construction sites, road works, industrial environments, warehouses, events and public spaces to clearly mark off danger zones and guide movement.

Made from durable polyethylene material, the tape is lightweight, flexible and resistant to tearing, making it suitable for both indoor and outdoor use. The bold yellow and black stripe pattern ensures maximum visibility, even from a distance, helping to effectively communicate caution and prevent accidents.

With a long length of 500 meters, this caution tape provides extended coverage, making it cost-effective for large areas or multiple applications. It is easy to install, wrap or tie around cones, poles and barriers, offering a quick and efficient safety solution.
`,

  specification: `
  - Product Name: Caution Tape
  - Length: 500 meters
  - Width: Standard (varies by model)
  - Material: Polyethylene (PE)
  - Color: Yellow and Black
  - Pattern: Diagonal stripes
  - Thickness: Durable and tear-resistant
  - Usage: Indoor and outdoor applications
  `,

  features: `
  - High visibility yellow and black warning design
  - Long 500m roll for extended coverage
  - Lightweight and easy to handle
  - Durable and tear-resistant material
  - Suitable for construction, road safety and industrial use
  - Easy to install and remove
  - Helps restrict access to hazardous areas
  - Cost-effective safety solution for large spaces
  - Ideal for temporary safety marking and crowd control
  `
},

  
{
  id: 7009,
  name: 'PVC Expandable Barrier Mobile Barricade (Water-Filled, Yellow/Black)',
  category: 'road-barriers',
  brand: 'Generic',
  price: 85000,

  images: [
    'assets/img/traffic safety/pvc expandable barrier.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
PVC Expandable Barrier Mobile Barricade is a versatile and highly visible traffic control solution designed for crowd management, hazard restriction and site safety. This retractable barrier can be easily expanded or collapsed, allowing flexible coverage of different areas depending on the need. It is commonly used in construction sites, road works, parking areas, warehouses, events and public spaces to block off restricted zones and guide movement.
Constructed from durable, high-quality PVC material, the barrier is lightweight yet strong enough to withstand outdoor conditions. The bright yellow and black color combination ensures maximum visibility, making it effective for both day and night use. The barrier features a water-fillable base that provides added stability, preventing it from being easily moved by wind or minor impact.
Equipped with smooth-rolling wheels, this mobile barricade is easy to transport and reposition, making it ideal for dynamic environments where safety zones frequently change. Its expandable scissor design allows quick deployment and compact storage, making it a practical and efficient safety solution.
`,

  specification: `
  - Product Name: PVC Expandable Barrier / Mobile Barricade
  - Material: High-quality PVC plastic
  - Color: Yellow and Black
  - Design: Expandable / Retractable (scissor design)
  - Base Type: Water-fillable for added stability
  - Mobility: Equipped with wheels for easy movement
  - Length: Expandable (varies depending on extension)
  - Usage: Indoor and outdoor applications
  - Application: Traffic control, crowd control, hazard marking
  `,

  features: `
  - Expandable and retractable for flexible coverage
  - High visibility yellow and black design
  - Durable and weather-resistant PVC construction
  - Water-fillable base for enhanced stability
  - Mobile design with wheels for easy transport
  - Quick setup and compact storage
  - Suitable for traffic control, construction and events
  - Helps restrict access to hazardous or restricted areas
  - Ideal for temporary safety and crowd management
  `
},

// convex mirrors
{
  id: 7010,
  name: 'Convex Safety Mirror 100cm',
  category: 'convex-mirrors',
  brand: 'Generic',
  price: 75000,

  images: [
    'assets/img/traffic safety/convex mirrors-100cm.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Convex Safety Mirror 100cm is a wide-angle visibility mirror designed to improve safety and eliminate blind spots in high-risk areas. It is commonly used on roads, driveways, parking lots, warehouses, factories and intersections to provide a clear, expanded field of view, helping to prevent accidents and collisions.
The mirror features a high-quality reflective surface that delivers a clear and distortion-free image, allowing users to monitor approaching vehicles or pedestrians from different angles. Its large 100cm diameter ensures maximum coverage, making it ideal for both indoor and outdoor applications.
Constructed with a durable and weather-resistant housing, the convex mirror is built to withstand harsh environmental conditions such as rain, sunlight and dust. It is easy to install and comes with a mounting bracket for secure positioning on walls, poles or ceilings.
This safety mirror is an essential tool for enhancing visibility, improving traffic management and ensuring safety in both commercial and industrial environments.
`,

  specification: `
  - Product Name: Convex Safety Mirror
  - Diameter: 100 cm
  - Mirror Type: Convex (wide-angle)
  - Material: Acrylic / Polycarbonate mirror surface
  - Backing: Durable ABS plastic housing
  - Mounting: Wall or pole mounting bracket included
  - Usage: Indoor and outdoor
  - Weather Resistance: UV and impact resistant
  - Viewing Angle: Wide-angle visibility
  `,

  features: `
  - Provides wide-angle view to eliminate blind spots
  - Large 100cm size for maximum coverage
  - Clear and high-quality reflective surface
  - Durable and weather-resistant construction
  - Easy to install with adjustable mounting bracket
  - Suitable for roads, warehouses and parking areas
  - Improves safety and reduces accident risk
  - Lightweight yet strong design
  - Ideal for both indoor and outdoor use
  `
},

{
  id: 7011,
  name: 'Lemon Reflective Stripe Tape 2" x 50m',
  category: 'reflectors',
  brand: 'Generic',
  price: 12000,

  images: [
    'assets/img/traffic safety/lemon reflective stripes.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Lemon Reflective Stripe Tape 2" x 50m is a high-visibility safety tape designed to enhance visibility and improve safety in low-light and nighttime conditions. It is widely used on vehicles, construction sites, warehouses, barriers, poles and equipment to clearly mark edges, hazards and restricted areas.
The tape features a bright lemon (fluorescent yellow) color combined with reflective technology that ensures strong light reflection when exposed to headlights or other light sources. This makes it highly effective for preventing accidents and improving awareness in dark or poorly lit environments.
Made from durable, weather-resistant material, the reflective tape is designed for both indoor and outdoor use. It has a strong adhesive backing that allows easy application on various surfaces such as metal, plastic, wood and concrete. With a length of 50 meters, it provides ample coverage for multiple safety marking applications.
`,

  specification: `
  - Product Name: Reflective Stripe Tape
  - Color: Lemon (Fluorescent Yellow)
  - Width: 2 inches (approx. 50 mm)
  - Length: 50 meters
  - Material: Reflective PVC / PET
  - Adhesive Type: Strong self-adhesive backing
  - Visibility: High reflectivity in low light
  - Usage: Indoor and outdoor applications
  `,

  features: `
  - High visibility reflective surface for night safety
  - Bright lemon color for daytime visibility
  - Strong adhesive for secure application
  - Weather-resistant and durable material
  - Easy to apply on multiple surfaces
  - Suitable for vehicles, barriers and hazard marking
  - Long 50m roll for extended use
  - Helps prevent accidents and improve awareness
  - Ideal for road safety and industrial environments
  `
},


{
  id: 7012,
  name: 'Rubber Speed Bump 50m',
  category: 'speed-bumps',
  brand: 'Generic',
  price: 350000,

  images: [
    'assets/img/traffic safety/speed bump-50m.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Rubber Speed Bump 50m is a heavy-duty traffic calming solution designed to reduce vehicle speed and enhance safety in high-traffic areas. It is widely used in residential areas, parking lots, schools, hospitals, warehouses and industrial facilities to control traffic flow and prevent accidents.
Constructed from high-quality durable rubber, the speed bump is designed to withstand heavy loads, harsh weather conditions and continuous vehicle impact. Its modular design allows multiple sections to be connected, forming a total length of up to 50 meters, making it suitable for large areas or long stretches of road.
The speed bump features a high-visibility design with embedded reflective strips that ensure clear visibility during both day and night. It can be securely fixed to the ground using bolts, providing a stable and long-lasting installation.
This speed bump is an effective and reliable solution for enforcing speed limits, improving road safety and protecting pedestrians and property.
`,

  specification: `
  - Product Name: Rubber Speed Bump
  - Total Length: 50 meters (modular sections)
  - Material: Heavy-duty rubber
  - Color: Black with yellow reflective sections
  - Height: Standard traffic calming height
  - Installation: Bolt-down installation
  - Reflective: Built-in reflective strips
  - Load Capacity: Suitable for cars and heavy vehicles
  - Usage: Indoor and outdoor applications
  `,

  features: `
  - Reduces vehicle speed effectively
  - Durable rubber construction for long-term use
  - Modular design for flexible length installation
  - High visibility with reflective markings
  - Weather-resistant and impact-resistant
  - Easy installation with bolt-down system
  - Suitable for residential, commercial and industrial areas
  - Enhances pedestrian and traffic safety
  - Ideal for parking lots, schools and roadways
  `
},

{
  id: 7013,
  name: 'Heavy Duty Rubber Wheel Chocks (Non-Slip Tire Stopper)',
  category: 'wheel-chocks',
  brand: 'Generic',
  price: 15000,

  images: [
    'assets/img/traffic safety/heavy duty wheel chokes.webp5.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Heavy Duty Rubber Wheel Chocks are essential safety devices designed to prevent vehicles from rolling or moving unintentionally when parked or under maintenance. These non-slip tire stoppers are ideal for use with cars, trucks, trailers, forklifts and other heavy-duty vehicles in garages, warehouses, construction sites and loading bays.
Made from high-quality, durable rubber, the wheel chocks provide excellent grip on both the ground and tire surface, ensuring maximum stability even on inclined or uneven surfaces. Their rugged construction allows them to withstand heavy loads and harsh working conditions without cracking or slipping.
The chocks feature a compact and portable design, making them easy to carry, position and store. Some models include a built-in handle or rope for convenient handling. This makes them a reliable and practical solution for improving vehicle safety during parking, loading or servicing operations.
`,

  specification: `
  - Product Name: Rubber Wheel Chock
  - Material: Heavy-duty rubber
  - Design: Wedge-shaped non-slip stopper
  - Surface: Textured for enhanced grip
  - Load Capacity: Suitable for cars, trucks and heavy vehicles
  - Color: Black (may include reflective strips)
  - Portability: Lightweight with handle (model dependent)
  - Usage: Indoor and outdoor applications
  `,

  features: `
  - Prevents unwanted vehicle movement
  - Strong non-slip grip for enhanced stability
  - Durable and heavy-duty rubber construction
  - Suitable for a wide range of vehicles
  - Easy to position and remove
  - Compact and portable design
  - Weather-resistant for outdoor use
  - Ideal for garages, warehouses and construction sites
  - Enhances safety during parking and maintenance
  `
},


{
  id: 7014,
  name: 'Garrett Handheld Metal Detector',
  category: 'metal-detectors',
  group: 'safety-traffic',
  
  brand: 'Garrett',
  price: 45000,

  images: [
    'assets/img/traffic safety/metal dectectors-garret.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Garrett Handheld Metal Detector is a high-performance security screening device designed for detecting metallic objects quickly and accurately. It is widely used in security checkpoints such as airports, schools, event venues, government facilities and industrial sites to enhance safety and prevent unauthorized items from being carried into restricted areas.
Engineered with advanced detection technology, the device is capable of identifying both small and large metal objects with high sensitivity. It provides instant alerts through audible sound, vibration or LED indicators, ensuring efficient and discreet screening operations.
The metal detector features an ergonomic and lightweight design, making it comfortable for prolonged use by security personnel. Its durable construction ensures reliable performance in demanding environments, while its simple operation requires minimal training.
This handheld metal detector is an essential tool for modern security operations, offering fast, reliable and non-invasive screening for improved safety and control.
`,

  specification: `
  - Product Name: Handheld Metal Detector
  - Brand: Garrett
  - Detection Type: Ferrous and non-ferrous metals
  - Alert Modes: صوت (audio), vibration and LED indicator
  - Sensitivity: Adjustable sensitivity control
  - Power Source: 9V battery or rechargeable battery
  - Operating Frequency: Standard detection frequency
  - Material: Durable ABS plastic
  - Usage: Security screening and inspection
  `,

  features: `
  - High sensitivity for accurate metal detection
  - Audio, vibration and LED alert system
  - Lightweight and ergonomic design
  - Easy to operate with minimal training required
  - Durable construction for long-term use
  - Suitable for airports, events and security checkpoints
  - Adjustable sensitivity for different detection needs
  - Fast response for efficient screening
  - Reliable performance in various environments
  `
},


{
  id: 7015,
  name: 'Convex Undercarriage Inspection Mirror 30cm with Wheels',
  category: 'inspection-mirrors',
  brand: 'Generic',
  price: 65000,

  images: [
    'assets/img/traffic safety/inspection mirror-30cm.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Convex Undercarriage Inspection Mirror 30cm with Wheels is a specialized security inspection tool designed for checking the underside of vehicles for hidden objects, contraband or potential threats. It is widely used at security checkpoints such as airports, government facilities, military zones, event venues, border control points and industrial sites.

The mirror features a high-quality convex reflective surface that provides a wide-angle view, allowing security personnel to inspect hard-to-reach areas quickly and effectively. Its 30cm diameter ensures sufficient coverage while maintaining portability and ease of use.

Equipped with smooth-rolling wheels and an adjustable handle, the inspection mirror can be easily maneuvered under vehicles without requiring the operator to bend excessively. The lightweight yet durable construction ensures long-term performance, while optional LED lighting enhances visibility in low-light conditions.

This undercarriage inspection mirror is an essential tool for improving security, preventing unauthorized transport of dangerous items and ensuring thorough vehicle inspections in sensitive environments.
`,

  specification: `
  - Product Name: Undercarriage Inspection Mirror
  - Mirror Type: Convex (wide-angle)
  - Mirror Diameter: 30 cm
  - Material: Acrylic / Polycarbonate mirror surface
  - Frame: Durable protective housing
  - Mobility: Equipped with wheels for easy movement
  - Handle: Adjustable handle for user comfort
  - Lighting: Optional LED light (model dependent)
  - Usage: Vehicle undercarriage inspection
  `,

  features: `
  - Wide-angle convex mirror for clear visibility
  - Easy movement with built-in wheels
  - Adjustable handle for comfortable operation
  - Lightweight and portable design
  - Durable construction for long-term use
  - Ideal for security checkpoints and inspections
  - Optional LED light for low-light environments
  - Allows quick and efficient vehicle inspection
  - Enhances safety and security operations
  `
},


{
  id: 7016,
  name: 'Reflective Safety Vest FN 500',
  category: 'safety-vests',
  brand: 'Generic',
  price: 4500,

  images: [
    'assets/img/reflective jackets/REFLECTIVE SAFETY VEST FN 500.jpg',
    'assets/img/safety wear/reflective vest fn 500 2.jpg',
    'assets/img/safety wear/reflective vest fn 500 3.jpg'
  ],

  inStock: true,

  description: 'The Reflective Safety Vest FN 500 is a high-visibility personal protective equipment designed to enhance worker safety in low-light and high-risk environments. Made from durable fluorescent fabric with 360° reflective strips, it ensures maximum visibility both during the day and at night.\n\nThis vest is ideal for construction workers, road safety personnel, traffic controllers, and industrial workers. It features multiple functional pockets for tools and accessories, along with a secure front zipper closure for convenience and durability.\n\nLightweight and breathable, the FN 500 vest is comfortable for long hours of use and can be easily worn over regular work clothing. It complies with standard safety visibility requirements, making it suitable for professional use.',

  specification: `
  Model: FN 500
  Material: Polyester / Fluorescent fabric
  Visibility: 360° reflective strips (2-inch width)
  Closure Type: Front zipper
  Pockets: Multiple utility pockets + ID holder
  Sizes: M, L, XL, XXL, XXXL
  Color: Fluorescent yellow / orange
  Application: Construction, road safety, industrial work
  `,

  features: `
  High-visibility fluorescent material for safety
  360° reflective tape for day and night visibility
  Durable and lightweight design for comfort
  Multiple pockets for tools and accessories
  Secure zipper closure for easy wear
  Breathable fabric for extended use
  Suitable for construction, traffic control, and industrial environments
  Meets standard safety visibility requirements
  `
},


// fire and traffic safety
// ends at 9000


// workshop and garage
// start at 9001 and ends at 11000

{
  id: 9001,
  name: 'Ingco Tool Set 328pcs Professional Hand Tool Kit',
  category: 'tools-cabinets',
  brand: 'Ingco',
  price: 180000,

  images: [
    'assets/img/tools sets/ingco tools set-328.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Ingco Tool Set 328pcs Professional Hand Tool Kit is a comprehensive and versatile toolkit designed for professionals, technicians, engineers, and DIY enthusiasts. It contains a wide range of essential hand tools suitable for mechanical repairs, maintenance work, construction tasks, and home improvement projects.

This complete tool kit is neatly organized in a durable and portable carry case, making it easy to store, transport, and access tools when needed. Each tool is manufactured with high-quality materials to ensure strength, durability, and long-lasting performance even under heavy use.

The 328-piece set includes sockets, spanners, screwdrivers, pliers, hex keys, ratchets, bits, and other essential accessories, making it an all-in-one solution for various repair and installation tasks. Its ergonomic designs provide comfort and efficiency during use, reducing fatigue and improving productivity.

Whether for workshop use, automotive repairs, industrial applications, or household maintenance, the Ingco 328pcs tool set delivers reliability, convenience, and professional-grade performance.
`,

  specification: `
  - Product Name: Ingco Tool Set
  - Total Pieces: 328 pcs
  - Material: Chrome Vanadium Steel (Cr-V)
  - Finish: Polished / Anti-rust coating
  - Case Type: Heavy-duty plastic carry case
  - Tool Types: Sockets, ratchets, spanners, screwdrivers, pliers, bits, hex keys, etc.
  - Handle Type: Ergonomic, anti-slip handles
  - Usage: Mechanical, automotive, industrial, and home repairs
  - Portability: Compact and easy to carry
  `,

  features: `
  - Complete 328-piece professional tool kit
  - Made from durable chrome vanadium steel
  - Anti-rust coating for long-lasting performance
  - Organized storage case for easy access and transport
  - Ergonomic handles for comfort and control
  - Suitable for automotive, industrial, and home use
  - Wide range of tools for multiple applications
  - Strong, reliable, and heavy-duty construction
  - Ideal for professionals and DIY users
  `
},


{
  id: 9002,
  name: 'Record 8" Bench Vice Heavy Duty Cast Iron',
  category: 'work-bench-vices',
  brand: 'Record',
  price: 95000,

  images: [
    'assets/img/benchvice/bench vice 8 inch.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Record 8" Bench Vice is a heavy-duty workshop tool designed for securely holding workpieces during cutting, drilling, filing, welding, and assembly operations. It is widely used in mechanical workshops, fabrication shops, construction sites, and industrial environments.
Constructed from high-quality cast iron, this bench vice provides excellent strength, durability, and resistance to heavy pressure. The 8-inch wide jaws offer a firm and stable grip on a variety of materials including metal, wood, and plastic, ensuring precision and safety during work.
The vice features a smooth screw mechanism for easy jaw adjustment and strong clamping force. Its anvil surface allows for light hammering and shaping tasks, making it a versatile addition to any workspace. The base is designed for secure mounting to workbenches, providing stability during operation.
This Record bench vice is ideal for professionals, technicians, and DIY users who require reliable and long-lasting performance in demanding applications.
`,

  specification: `
  - Product Name: Bench Vice
  - Brand: Record
  - Jaw Width: 8 inches (200mm)
  - Material: Heavy-duty cast iron
  - Jaw Type: Hardened steel jaws
  - Opening Capacity: Approx. 200mm (model dependent)
  - Base Type: Fixed / swivel base (varies by model)
  - Finish: Powder-coated / painted for rust resistance
  - Anvil: Built-in flat anvil surface
  - Mounting: Bolt-on bench mounting
  - Usage: Clamping, holding, shaping, and assembly work
  `,

  features: `
  - Strong cast iron body for heavy-duty use
  - Wide 8-inch jaws for firm grip
  - Smooth screw mechanism for easy adjustment
  - High clamping force for secure holding
  - Built-in anvil for hammering tasks
  - Durable and rust-resistant finish
  - Suitable for workshops, garages, and industrial use
  - Stable base for secure bench mounting
  - Ideal for metalwork, woodworking, and repairs
  `
},

{
  id: 9003,
  name: 'TOTAL TC202416 Air Compressor 24L Oil Lubricated',
  category: 'air-compressors',
  brand: 'TOTAL',
  price: 165000,

  images: [
    'assets/img/air compressors/TOTAL TC202416 Air Compressor-24L-1.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
TOTAL TC202416 Air Compressor 24L is a reliable and efficient air compressor designed for light to medium-duty applications in workshops, garages, construction sites, and home use. It is ideal for powering pneumatic tools, inflating tires, spray painting, cleaning, and general maintenance tasks.
Equipped with a 24-liter tank, this air compressor provides a steady and consistent air supply, allowing users to work efficiently without frequent interruptions. The oil-lubricated pump system ensures smooth operation, reduced wear, and longer service life.
Its compact and portable design, combined with sturdy wheels and a handle, makes it easy to move around the workspace. The compressor features a powerful motor that delivers reliable performance while maintaining energy efficiency.
Built with durable materials and safety features such as pressure control and thermal protection, the TOTAL TC202416 air compressor is a dependable choice for both professionals and DIY users.
`,

  specification: `
  - Product Name: Air Compressor
  - Model: TC202416
  - Brand: TOTAL
  - Tank Capacity: 24 Liters
  - Power: 2.0HP (1.5kW)
  - Voltage: 220-240V ~ 50Hz
  - Speed: 2850 rpm
  - Max Pressure: 8 bar (116 psi)
  - Air Delivery: Approx. 150-180 L/min (model dependent)
  - Lubrication: Oil-lubricated
  - Motor Type: Copper wire motor
  - Mobility: Wheels and handle for easy movement
  - Usage: Inflation, spray painting, pneumatic tools, cleaning
  `,

  features: `
  - 24L tank for consistent air supply
  - Powerful 2.0HP motor for efficient performance
  - Oil-lubricated pump for durability and long life
  - Portable design with wheels and handle
  - Stable and low vibration operation
  - Pressure control system for safe usage
  - Suitable for workshops, garages, and home use
  - Ideal for inflating, painting, and light industrial tasks
  - Durable construction for long-term reliability
  `
},


{
  id: 9004,
  name: 'Extension Cable Wire 2.5mm x 50m Heavy Duty (Generic)',
  category: 'extenstion-and-reels',
  brand: 'Generic',
  price: 65000,

  images: [
    'assets/img/cablewires/extension cable wire-2.5mm by 50m.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Extension Cable Wire 2.5mm x 50m is a heavy-duty electrical cable designed for reliable power transmission over long distances. It is suitable for residential, commercial, and industrial applications including construction sites, workshops, events, and general electrical installations.
With a thickness of 2.5mm, this cable provides efficient current flow, reducing the risk of overheating and voltage drop even when powering high-load equipment. The 50-meter length makes it ideal for situations where extended reach is required without compromising performance.
Constructed with high-quality copper conductors and durable PVC insulation, the cable offers excellent flexibility, strength, and resistance to wear and environmental conditions. It can be used to make extension boxes, reels, or direct wiring connections.
This cable is an essential solution for electricians, technicians, and DIY users who need a dependable and long-lasting power extension option.
`,

  specification: `
  - Product Name: Extension Cable Wire
  - Cable Size: 2.5mm²
  - Length: 50 meters
  - Core Type: Single / 2-core / 3-core (varies by model)
  - Conductor Material: Copper
  - Insulation Material: PVC
  - Voltage Rating: 220-240V
  - Current Capacity: Up to 16A (approx.)
  - Usage: Power extension, wiring, construction, workshops
  - Application: Indoor and outdoor (with proper protection)
  `,

  features: `
  - Heavy-duty 2.5mm cable for high power loads
  - 50m length for long-distance connections
  - High-quality copper for efficient conductivity
  - Durable PVC insulation for protection and longevity
  - Flexible and easy to handle during installation
  - Suitable for extension reels and wiring projects
  - Reduces overheating and voltage drop over distance
  - Ideal for industrial, commercial, and home use
  - Reliable performance in demanding environments
  `
},


{
  id: 9005,
  name: '499 PCS Professional Tool Set Complete Mechanic Kit',
  category: 'tools-sets',
  brand: 'Generic',
  price: 220000,

  images: [
    'assets/img/tools sets/499pcs tools set.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
499 PCS Professional Tool Set is a complete and versatile toolkit designed for professionals, technicians, mechanics, and DIY users. This all-in-one set contains a wide range of essential tools required for automotive repairs, mechanical work, construction tasks, and general household maintenance.
The tool set is neatly organized in a durable and portable storage case, ensuring easy access, proper arrangement, and convenient transportation. Each tool is made from high-quality materials to provide strength, durability, and long-lasting performance even in demanding environments.
This comprehensive 499-piece kit includes sockets, ratchets, spanners, screwdrivers, pliers, bits, hex keys, and other accessories, making it suitable for a wide variety of applications. Its ergonomic design ensures comfort and efficiency during use, helping reduce fatigue and improve productivity.
Whether for workshop use, garage repairs, industrial work, or home improvement, this professional tool set delivers reliability, convenience, and excellent value.
`,

  specification: `
  - Product Name: Professional Tool Set
  - Total Pieces: 499 pcs
  - Material: Chrome Vanadium Steel (Cr-V)
  - Finish: Polished / Anti-rust coating
  - Case Type: Heavy-duty carry case
  - Tool Types: Sockets, ratchets, spanners, screwdrivers, pliers, bits, hex keys, etc.
  - Handle Type: Ergonomic, anti-slip handles
  - Usage: Automotive, mechanical, industrial, and home repairs
  - Portability: Compact and easy to carry
  `,

  features: `
  - Complete 499-piece professional tool kit
  - Durable chrome vanadium steel construction
  - Anti-rust finish for long-lasting use
  - Organized storage case for easy access
  - Ergonomic handles for comfort and control
  - Suitable for workshop, garage, and home use
  - Wide range of tools for multiple applications
  - Strong and reliable for heavy-duty tasks
  - Ideal for professionals and DIY enthusiasts
  `
},

{
  id: 9006,
  name: '40" Plastic Car Creeper Automotive Repair Board',
  category: 'car-creepers',
  brand: 'Generic',
  price: 45000,

  images: [
  
    'assets/img/car creepers/Plastic car creeper-40inch.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
40" Plastic Car Creeper is a practical automotive tool designed to provide comfort and mobility when working underneath vehicles. It is widely used by mechanics, technicians, and DIY users for vehicle inspection, repairs, and maintenance tasks.
Constructed from high-impact durable plastic, this creeper offers excellent strength while remaining lightweight for easy handling. Its ergonomic design allows users to lie comfortably while accessing hard-to-reach areas beneath cars, reducing strain during extended work periods.
Equipped with smooth-rolling swivel caster wheels, the creeper ensures easy movement in all directions, allowing users to glide effortlessly under vehicles. The low-profile design makes it suitable for use with most cars and light-duty trucks.
This 40-inch car creeper is an essential addition to any workshop or garage, improving efficiency, comfort, and safety during automotive work.
`,

  specification: `
  - Product Name: Car Creeper
  - Length: 40 inches
  - Material: High-impact plastic
  - Frame Type: One-piece molded body
  - Wheels: 6 swivel caster wheels
  - Design: Low-profile ergonomic design
  - Weight Capacity: Approx. 120–150 kg (model dependent)
  - Mobility: Smooth rolling for easy movement
  - Usage: Automotive repair, inspection, maintenance
  `,

  features: `
  - Durable high-impact plastic construction
  - Lightweight and easy to carry
  - 6 smooth-rolling caster wheels for mobility
  - Comfortable ergonomic design for long use
  - Low-profile design fits under most vehicles
  - Reduces strain during under-car work
  - Easy to clean and maintain
  - Ideal for garages, workshops, and home use
  - Improves efficiency and convenience
  `
},


{
  id: 9007,
  name: 'Ingco Air Grease Lubricator 30L AGL02301',
  category: 'grease-buckets',
  brand: 'Ingco',
  price: 45000,

  images: [
    
    'assets/img/grease buckets/ingco grease buckets.webp5.webp',
     'assets/img/grease buckets/ingco grease buckets.webp3.webp',
    'assets/img/car creepers/Plastic car creeper-40inch.jpg',
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Ingco Air Grease Lubricator AGL02301 is a high-performance pneumatic lubrication system designed for efficient and heavy-duty greasing of machinery, vehicles, and industrial equipment. It is widely used in automotive workshops, factories, construction sites, and maintenance facilities.
With a large 30-liter capacity tank, this grease lubricator allows continuous operation without frequent refilling, making it ideal for servicing trucks, heavy machinery, and industrial components. The air-powered system delivers grease at high pressure, ensuring deep penetration into hard-to-reach lubrication points.
The unit is equipped with wheels and a handle for easy movement, while the durable steel construction ensures long-lasting performance in demanding environments. It also features a pressure regulator and filtration system to maintain consistent and clean air supply.
This grease lubricator improves efficiency, reduces manual effort, and ensures proper lubrication for extending the lifespan of mechanical parts.
`,

  specification: `
  - Product Name: Air Grease Lubricator
  - Model: AGL02301
  - Brand: Ingco
  - Tank Capacity: 30 Liters
  - Pressure Ratio: 50:1
  - Working Pressure: 6 – 8 bar
  - Max Grease Pressure: 400 bar
  - Max Flow Rate: 850 g/min
  - Air Consumption: 250 L/min @ 6.2 bar
  - Cylinder Diameter: 70 mm
  - Hose Length: 5 meters
  - Air Inlet/Outlet: 1/4 inch with regulator & filter
  - Mobility: Equipped with wheels
  - Weight: Approx. 15–16 kg
  `,

  features: `
  - Large 30L tank for extended operation
  - High-pressure output for effective lubrication
  - Air-powered system reduces manual effort
  - Durable steel construction for heavy-duty use
  - Equipped with wheels for easy mobility
  - Includes 5m hose for flexible operation
  - Built-in air regulator with water filter
  - Suitable for trucks, machinery, and industrial equipment
  - Improves maintenance efficiency and equipment lifespan
  `
},


{
  id: 9008,
  name: 'Hydraulic Pressure Testing Pump 50 Bar Bucket Type',
  category: 'testing-buckets',
  brand: 'Generic',
  price: 120000,

  images: [
    'assets/img/testing buckets/manual hand testing buckets.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Hydraulic Pressure Testing Pump 50 Bar is a manual bucket-type testing device designed for checking the strength, leak resistance, and integrity of pipelines, water systems, and pressure vessels. It is widely used in plumbing, construction, fire protection systems, and industrial maintenance.
This testing pump operates manually using a lever mechanism to generate pressure, allowing precise control during testing. With a maximum pressure of 50 bar, it is suitable for most residential and commercial water systems, ensuring accurate detection of leaks or pressure drops.
The unit features a durable tank (bucket) that holds water or oil used for testing, along with a high-pressure hose and pressure gauge for monitoring output. Its robust construction ensures long-lasting performance, even in demanding environments.
This hydraulic testing pump is essential for engineers, plumbers, and technicians who require reliable and efficient pressure testing equipment.
`,

  specification: `
  - Product Name: Hydraulic Pressure Testing Pump
  - Type: Manual Bucket Pump
  - Max Pressure: 50 Bar (725 PSI)
  - Tank Capacity: Approx. 10 – 12 Liters
  - Operation: Manual lever type
  - Medium: Water / Oil
  - Hose: High-pressure reinforced hose
  - Gauge: Analog pressure gauge (0–50 bar)
  - Connection Size: 1/2 inch (typical)
  - Usage: Pipeline testing, plumbing, leak detection
  `,

  features: `
  - Generates pressure up to 50 bar for accurate testing
  - Manual operation for controlled pressure application
  - Built-in tank for water or oil testing medium
  - Durable construction for long-term use
  - Easy-to-read pressure gauge for monitoring
  - Suitable for plumbing and industrial systems
  - Detects leaks and pressure drops effectively
  - Portable and easy to use on-site
  - Ideal for technicians, plumbers, and engineers
  `
},


{
  id: 9009,
  name: 'Hand Rotary Pump Manual Oil & Fuel Transfer Pump',
  category: 'rotary-pumps',
  brand: 'Generic',
  price: 35000,

  images: [
    'assets/img/rotary hand pump/Hand-Rotary-Oil-Pump.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Hand Rotary Pump is a manually operated transfer pump designed for dispensing liquids such as diesel, oil, kerosene, and light chemicals from drums or containers. It is widely used in workshops, farms, construction sites, fuel storage facilities, and industrial environments.
The pump operates using a rotary hand crank mechanism that allows smooth and controlled fluid transfer without the need for electricity or power supply. This makes it ideal for remote locations or situations where power is unavailable.
Constructed from durable materials, the rotary pump is built to withstand regular use and harsh working conditions. It is easy to install on standard drums and provides efficient liquid flow with minimal effort.
This hand rotary pump is a reliable and cost-effective solution for safe and convenient liquid transfer operations.
`,

  specification: `
  - Product Name: Hand Rotary Pump
  - Operation: Manual rotary crank
  - Material: Cast iron / steel (varies by model)
  - Flow Rate: Approx. 20–30 L/min (depending on use)
  - Compatible Liquids: Diesel, oil, kerosene, light chemicals
  - Mounting: Fits standard 200L drums
  - Inlet Tube: Adjustable suction tube
  - Outlet: Curved spout / discharge pipe
  - Usage: Fuel and oil transfer
  `,

  features: `
  - Manual operation, no electricity required
  - Smooth rotary crank for easy pumping
  - Durable and heavy-duty construction
  - Efficient liquid transfer with steady flow
  - Easy installation on standard drums
  - Suitable for diesel, oil, and kerosene
  - Portable and ideal for field use
  - Low maintenance and long-lasting
  - Safe and reliable for everyday use
  `
},

{
  id: 9010,
  name: '5 Ton Wide Hand Hydraulic Pallet Truck 685x1150mm',
  category: 'pallet-trucks',
  brand: 'Generic',
  price: 650000,

  images: [
    'assets/img/pallete trucks and stackers/pallete truck-5t.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
5 Ton Wide Hand Hydraulic Pallet Truck is a heavy-duty material handling equipment designed for lifting and transporting palletized goods efficiently in warehouses, factories, supermarkets, and logistics operations.
With a high load capacity of up to 5 tons, this pallet truck is ideal for handling heavy loads with ease. The wide fork design (685mm width and 1150mm length) ensures stability and compatibility with standard pallets, making loading and unloading operations smooth and safe.
The hydraulic system allows effortless lifting through a manual pump handle, while the durable steel construction ensures long-lasting performance even in demanding industrial environments. Its ergonomic handle provides comfortable control, including lifting, lowering, and maneuvering functions.
Equipped with strong wheels for smooth movement, this pallet truck enhances productivity and reduces manual strain, making it an essential tool for efficient material handling.
`,

  specification: `
  - Product Name: Hand Pallet Truck
  - Capacity: 5 Ton (5000 kg)
  - Fork Width: 685 mm (wide)
  - Fork Length: 1150 mm
  - Fork Height (Min/Max): Approx. 85 mm / 200 mm
  - Material: Heavy-duty steel
  - Operation: Manual hydraulic
  - Wheel Type: Nylon / PU wheels (model dependent)
  - Steering: 180° handle rotation
  - Usage: Warehouses, factories, logistics, supermarkets
  `,

  features: `
  - High 5-ton load capacity for heavy-duty use
  - Wide fork design for better stability
  - Strong hydraulic system for smooth lifting
  - Durable steel construction for long service life
  - Ergonomic handle for easy control and operation
  - Smooth-rolling wheels for easy movement
  - Low-profile forks for easy pallet entry
  - Suitable for industrial and commercial environments
  - Improves efficiency and reduces manual labor
  `
},

{
  id: 9011,
  name: '3 Ton Hydraulic Floor Jack Heavy Duty Steel Car Lifting Jack',
  category: 'jack-and-lifts',
  brand: 'Generic',
  price: 85000,

  images: [
    'assets/img/jack  and lifts/hydraulic floor jack 3T.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
3 Ton Hydraulic Floor Jack is a reliable and heavy-duty lifting tool designed for raising cars, SUVs, and light trucks during maintenance and repair work. It is widely used in automotive workshops, garages, tire service centers, and by car owners for personal use.
Built with strong steel construction, this floor jack provides durability and stability when handling heavy loads. The hydraulic lifting system allows smooth and effortless operation, enabling users to lift vehicles quickly with minimal effort.
The jack features a low-profile design for easy access under vehicles, along with a wide base for enhanced stability during operation. Its swivel caster wheels ensure easy positioning and mobility around the workspace.
This 3-ton floor jack is an essential tool for safe and efficient vehicle lifting, offering both strength and convenience for professional and DIY use.
`,

  specification: `
  - Product Name: Hydraulic Floor Jack
  - Capacity: 3 Ton (3000 kg)
  - Material: Heavy-duty steel
  - Lifting Range: Approx. 130 mm – 500 mm (varies by model)
  - Operation: Hydraulic manual pump
  - Handle: Long handle for easy lifting
  - Wheels: Swivel caster wheels for mobility
  - Base: Wide and stable base design
  - Usage: Vehicle lifting, tire change, repairs
  `,

  features: `
  - High 3-ton lifting capacity
  - Durable heavy-duty steel construction
  - Smooth hydraulic lifting system
  - Low-profile design for easy access
  - Wide base for improved stability
  - Easy mobility with caster wheels
  - Long handle for comfortable operation
  - Suitable for cars, SUVs, and light trucks
  - Ideal for workshops and home garages
  `
},


{
  id: 9012,
  name: 'Vital Chain Hoist 3 Ton Manual Chain Block',
  category: 'Chain-blocks-and-hoists',
  brand: 'Vital',
  price: 180000,

  images: [
    'assets/img/chainhoist/vital chain  hoist-3T.avif'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Vital Chain Hoist 3 Ton is a heavy-duty manual lifting device designed for safely lifting, lowering, and positioning heavy loads in industrial and commercial environments. It is widely used in construction sites, warehouses, workshops, factories, and engineering operations.
Built with high-strength alloy steel, this chain hoist delivers reliable performance and durability under demanding conditions. The manual chain operation allows precise load control without the need for electricity, making it ideal for both indoor and outdoor use.
The hoist features a compact and portable design, allowing easy installation on beams, gantries, or cranes. Its load chain is engineered for strength and wear resistance, while the mechanical braking system ensures safe and secure lifting operations.
This 3-ton Vital chain hoist is an essential lifting tool for professionals handling heavy materials, offering efficiency, safety, and long-lasting performance.
`,

  specification: `
  - Product Name: Chain Hoist / Chain Block
  - Brand: Vital
  - Capacity: 3 Ton (3000 kg)
  - Lifting Height: 3 meters (standard, varies by model)
  - Operation: Manual chain operation
  - Load Chain Material: Alloy steel
  - Hook: Forged steel safety hooks
  - Safety System: Mechanical load brake
  - Usage: Lifting heavy loads in industrial environments
  `,

  features: `
  - High 3-ton lifting capacity
  - Strong alloy steel load chain
  - Manual operation, no electricity required
  - Compact and portable design
  - Reliable braking system for safety
  - Durable construction for heavy-duty use
  - Smooth lifting and lowering operation
  - Easy installation on beams or cranes
  - Ideal for construction, warehouses, and workshops
  `
},


{
  id: 9013,
  name: 'Forklift Drum Grab 500kg Heavy Duty Drum Lifter',
  category: 'drum-handling-equipments',
  brand: 'Generic',
  price: 120000,

  images: [
    'assets/img/drum grab/forklift drum grabber.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Forklift Drum Grab 500kg is a heavy-duty attachment designed for safely lifting, transporting, and positioning drums using a forklift. It is ideal for handling steel drums, oil barrels, and chemical containers in warehouses, factories, construction sites, and industrial facilities.
This drum grab features a strong clamping mechanism that securely grips the drum during lifting, ensuring stability and safety throughout operation. With a load capacity of up to 500kg, it is suitable for standard 200-liter drums commonly used in industrial applications.
Constructed from high-quality steel, the drum grab is built to withstand heavy use and harsh working environments. Its simple yet effective design allows for quick attachment to forklifts, improving efficiency and reducing manual handling risks.
This forklift drum grab is an essential tool for improving workplace safety, productivity, and ease of drum handling operations.
`,

  specification: `
  - Product Name: Forklift Drum Grab
  - Capacity: 500 kg
  - Material: Heavy-duty steel
  - Drum Compatibility: Standard 200L steel drums
  - Operation: Automatic clamping mechanism
  - Attachment: Forklift-mounted
  - Grip Type: Mechanical clamp
  - Finish: Powder-coated for rust resistance
  - Usage: Lifting and transporting drums
  `,

  features: `
  - 500kg load capacity for heavy drums
  - Strong and secure clamping mechanism
  - Durable steel construction for long-term use
  - Easy attachment to forklift forks
  - Improves safety by reducing manual handling
  - Suitable for oil, chemical, and industrial drums
  - Quick and efficient drum lifting
  - Rust-resistant finish for durability
  - Ideal for warehouses and industrial environments
  `
},


{
  id: 9014,
  name: '2 Ton Hydraulic Workshop Crane Engine Hoist',
  category: 'engine-cranes',
  brand: 'Generic',
  price: 320000,

  images: [
    
    'assets/img/engine crane/engine crane-2T.webp2.jpg',
    'assets/img/engine crane/engine crane-2T.webp',
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
2 Ton Workshop Crane is a heavy-duty hydraulic lifting equipment designed for lifting and positioning engines, machinery, and heavy components in automotive workshops, garages, and industrial environments.
This engine hoist features a strong steel frame construction that ensures durability and stability when handling loads up to 2 tons. The hydraulic ram system provides smooth and controlled lifting with minimal effort, making it easy for operators to handle heavy equipment safely.
Designed with an extendable boom, the crane offers adjustable lifting positions and capacities to suit different load requirements. It is also foldable, allowing easy storage when not in use, which is ideal for workshops with limited space.
Equipped with swivel caster wheels, the crane provides excellent mobility, enabling easy movement around the workspace. This 2-ton workshop crane is an essential tool for efficient and safe heavy lifting operations.
`,

  specification: `
  - Product Name: Workshop Crane / Engine Hoist
  - Capacity: 2 Ton (2000 kg)
  - Material: Heavy-duty steel
  - Lifting Mechanism: Hydraulic ram
  - Boom: Adjustable / extendable
  - Lifting Positions: Multiple levels (e.g., 0.5T / 1T / 1.5T / 2T)
  - Height Range: Approx. 0 – 2 meters (varies by model)
  - Mobility: Swivel caster wheels
  - Design: Foldable for storage
  - Usage: Engine lifting, machinery handling, workshop use
  `,

  features: `
  - High 2-ton lifting capacity
  - Strong and durable steel construction
  - Hydraulic system for smooth lifting
  - Adjustable boom for flexible operation
  - Foldable design for easy storage
  - Swivel wheels for easy movement
  - Stable and safe lifting performance
  - Ideal for engine removal and installation
  - Suitable for workshops, garages, and industrial use
  `
},

{
  id: 9015,
  name: 'A&S Manual Forklift Stacker 2 Ton Hydraulic Hand Stacker',
  category: 'pallete-stackers',
  brand: 'A&S',
  price: 750000,

  images: [
    'assets/img/pallete trucks and stackers/pallete stackers-12T.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
A&S Manual Forklift Stacker 2 Ton is a heavy-duty material handling equipment designed for lifting, stacking, and transporting palletized goods in warehouses, factories, and retail storage environments.
This manual stacker combines a hydraulic lifting system with a robust steel frame, allowing operators to lift loads up to 2 tons safely and efficiently without the need for electricity. It is ideal for operations where forklifts are not practical due to space or budget constraints.
The stacker features adjustable forks that can accommodate different pallet sizes, along with a stable mast structure that ensures safe vertical lifting. Its ergonomic handle allows easy control of lifting, lowering, and maneuvering functions.
Equipped with durable wheels for smooth movement, this manual stacker is perfect for loading, unloading, and organizing goods at various heights. It is an essential solution for improving productivity and reducing manual labor in material handling tasks.
`,

  specification: `
  - Product Name: Manual Forklift Stacker
  - Brand: A&S
  - Capacity: 2 Ton (2000 kg)
  - Lifting Height: Approx. 1.6m – 3m (varies by model)
  - Operation: Manual hydraulic
  - Fork Width: Adjustable
  - Material: Heavy-duty steel
  - Mast Type: Single / double mast (model dependent)
  - Wheels: Nylon / PU wheels
  - Usage: Lifting, stacking, and pallet handling
  `,

  features: `
  - High 2-ton lifting capacity
  - Manual hydraulic system (no electricity required)
  - Strong and durable steel construction
  - Adjustable forks for different pallet sizes
  - Stable mast for safe vertical lifting
  - Smooth lifting and lowering control
  - Easy mobility with durable wheels
  - Ideal for warehouses and storage facilities
  - Reduces manual effort and increases efficiency
  `
},

{
  id: 9016,
  name: '3 Ton 6m Polyester Webbing Lifting Sling',
  category: 'lifting-belts',
  brand: 'Generic',
  price: 25000,

  images: [
    'assets/img/lifting belts/Lifting Sling-3ton X 6meters.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
3 Ton 6m Lifting Sling is a high-strength polyester webbing sling designed for safe lifting, handling, and securing of heavy loads in industrial and commercial environments. It is widely used in construction sites, warehouses, factories, shipping yards, and rigging operations.
Made from durable polyester material, this lifting sling offers excellent strength, flexibility, and resistance to wear, making it suitable for repeated heavy-duty use. Its soft webbing design helps protect loads from damage while providing a secure grip during lifting.
With a load capacity of 3 tons and a length of 6 meters, the sling is ideal for lifting medium to heavy loads such as machinery, equipment, and construction materials. It can be used with cranes, hoists, and other lifting equipment.
This lifting sling is an essential accessory for safe and efficient load handling, ensuring reliability and performance in demanding work environments.
`,

  specification: `
  - Product Name: Lifting Sling
  - Type: Webbing Sling
  - Material: Polyester
  - Capacity: 3 Ton (3000 kg)
  - Length: 6 meters
  - Safety Factor: 5:1 or 6:1 (varies by model)
  - Color Code: Yellow (standard for 3 ton)
  - Ends: Reinforced loop eyes
  - Usage: Lifting, rigging, securing loads
  `,

  features: `
  - High 3-ton lifting capacity
  - Strong and durable polyester webbing
  - Soft material prevents load damage
  - Flexible and easy to handle
  - Reinforced lifting loops for strength
  - Lightweight compared to chain slings
  - Color-coded for easy identification
  - Suitable for cranes and hoists
  - Ideal for construction and industrial use
  `
},



{
  id: 9017,
  name: '24" Tire Changer Machine Wheel Changer & Tyre Stripping Machine',
  category: 'tire-changers',
  brand: 'Generic',
  price: 1850000,

  images: [
    'assets/img/tire changers and aligments/Tire-Changer-Wheel-Changers-Machine.avif'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
24" Tire Changer Machine is a professional-grade automotive equipment designed for mounting, demounting, and replacing tyres on various types of vehicles including cars, SUVs, and light trucks. It is widely used in tyre service centers, auto workshops, and garages.
This machine supports wheel sizes up to 24 inches, making it suitable for a wide range of tyre applications. It features a powerful motor and pneumatic system that ensures efficient and smooth operation during tyre removal and installation.
The tire changer is built with a heavy-duty steel frame for durability and stability, even under continuous use. It includes a rotating turntable, bead breaker, and adjustable clamping jaws to securely hold and handle wheels without damage.
Designed for professional use, this machine improves speed, accuracy, and safety in tyre servicing operations, making it an essential investment for automotive businesses.
`,

  specification: `
  - Product Name: Tire Changer Machine
  - Max Wheel Size: 24 inches
  - Operation: Semi-automatic / automatic (model dependent)
  - Power Supply: 220-240V
  - Motor Power: Approx. 1.1kW – 1.5kW
  - Air Pressure Requirement: 8 – 10 bar
  - Clamping System: 4-jaw self-centering chuck
  - Bead Breaker: Pneumatic side shovel
  - Turntable: High-torque rotating platform
  - Material: Heavy-duty steel construction
  - Usage: Tyre mounting, demounting, replacement
  `,

  features: `
  - Supports up to 24" wheel size
  - Powerful motor for efficient operation
  - Pneumatic bead breaker for easy tyre removal
  - Strong clamping system for secure wheel holding
  - Durable steel body for long-term use
  - Improves speed and efficiency in tyre service
  - Suitable for cars, SUVs, and light trucks
  - User-friendly controls for smooth operation
  - Ideal for professional workshops and tyre centers
  `
},

{
  id: 9018,
  name: 'Heavy Duty Folding Platform Trolley 300kg Load Capacity',
  category: 'trolleys',
  brand: 'Generic',
  price: 75000,

  images: [
    'assets/img/trolleys/platform trolley-300kg.webp',
    'assets/img/trolleys/platform trolley-300kg-2.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Heavy Duty Folding Platform Trolley 300kg is a versatile material handling tool designed for transporting goods efficiently in warehouses, supermarkets, offices, and industrial environments.
With a load capacity of up to 300kg, this trolley is ideal for moving heavy items such as cartons, equipment, and supplies with ease. The flat platform design provides a stable surface for carrying different types of loads safely.
Constructed from high-quality steel, the trolley offers strength and durability for long-term use. The anti-slip platform surface ensures that goods remain secure during movement, while the foldable handle allows for compact storage when not in use.
Equipped with smooth-rolling wheels, this platform trolley provides excellent mobility and maneuverability, reducing manual effort and improving productivity in everyday operations.
`,

  specification: `
  - Product Name: Platform Trolley
  - Capacity: 300 kg
  - Material: Heavy-duty steel frame
  - Platform Type: Flat with anti-slip surface
  - Handle: Foldable handle
  - Wheels: 4 caster wheels (2 fixed, 2 swivel)
  - Platform Size: Approx. 90 x 60 cm (varies by model)
  - Usage: Transporting goods and materials
  `,

  features: `
  - High 300kg load capacity
  - Durable steel construction
  - Foldable handle for easy storage
  - Anti-slip platform for safety
  - Smooth and quiet wheel movement
  - Easy maneuverability
  - Suitable for warehouse and commercial use
  - Reduces manual lifting effort
  - Compact and space-saving design
  `
},


{
  id: 9019,
  name: 'Manual Wheel Balancer Portable Tyre Balancing Stand',
  category: 'wheel-balancers',
  brand: 'Generic',
  price: 95000,

  images: [
    'assets/img/tire changers and aligments/wheel balancers-manual.webp'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Manual Wheel Balancer is a cost-effective and reliable tool designed for balancing vehicle wheels without the need for electricity. It is ideal for tyre shops, mobile mechanics, small garages, and DIY users who need accurate wheel balancing for cars, motorcycles, and light trucks.
This wheel balancer operates using a precision spindle and bubble level system that detects imbalances in the wheel. It allows technicians to manually adjust and add weights until proper balance is achieved, ensuring smooth driving and reduced tyre wear.
Constructed with a durable steel frame, the balancer provides stability and long-term use. Its compact and portable design makes it easy to transport and use in different locations, especially in areas without power supply.
The manual wheel balancer is an essential tool for improving vehicle performance, extending tyre life, and ensuring safer driving conditions.
`,

  specification: `
  - Product Name: Manual Wheel Balancer
  - Type: Portable balancing stand
  - Operation: Manual (bubble level system)
  - Material: Steel frame construction
  - Compatibility: Cars, motorcycles, light trucks
  - Spindle: Precision shaft for accurate balancing
  - Base: Stable heavy-duty base
  - Power Supply: Not required
  - Usage: Wheel and tyre balancing
  `,

  features: `
  - No electricity required
  - Accurate bubble level balancing system
  - Durable steel construction
  - Portable and easy to use
  - Suitable for multiple vehicle types
  - Cost-effective alternative to automatic machines
  - Improves tyre life and driving stability
  - Ideal for small workshops and mobile mechanics
  - Low maintenance and long-lasting
  `
},

{
  id: 9020,
  name: 'Tyre Service Equipment Package – Tire Changer + Manual Wheel Balancer + Accessories',
  category: 'tire-changers',
  brand: 'Generic',
  price: 2100000,

  images: [
    'assets/img/tire changers and aligments/Tire-Combo-Tyre-Balancer-Tyre-Changer-and-Wheel-Balancing-Machines.avif'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Tyre Service Equipment Package is a complete solution for setting up a professional or semi-professional tyre service workshop. This package combines essential tyre handling and balancing tools, making it ideal for new businesses, mechanics, and garage owners.
The package includes a 24" Tire Changer Machine for efficient tyre mounting and removal, along with a Manual Wheel Balancer for accurate wheel balancing without the need for electricity. It also comes with essential accessories required for daily tyre servicing operations.
Designed for performance and convenience, this setup enables technicians to handle tyre replacement, repairs, and balancing efficiently. It is perfect for workshops looking to start or expand their tyre service operations with a cost-effective investment.
This bundle offers excellent value, helping users save costs compared to purchasing each item separately while ensuring all necessary tools are available.
`,

  specification: `
  - Package Includes:
    • 24" Tire Changer Machine
    • Manual Wheel Balancer
    • Wheel Weights (starter pack)
    • Tyre Lever Tools
    • Air Hose & Fittings (basic set)

  - Tire Changer Capacity: Up to 24"
  - Balancer Type: Manual (bubble system)
  - Power Supply: 220-240V (Tire Changer)
  - Air Requirement: 8 – 10 bar (compressor needed)
  - Usage: Tyre mounting, demounting, balancing
  `,

  features: `
  - Complete tyre service startup package
  - Includes both tyre changer and wheel balancer
  - Cost-effective bundle compared to individual purchase
  - Suitable for new and growing workshops
  - Improves efficiency and service capability
  - Easy to operate and maintain
  - Ideal for cars, SUVs, and light trucks
  - Scalable setup (can upgrade to computerized balancer)
  - High return on investment for tyre service businesses
  `
},

{
  id: 9021,
  name: 'Heavy-Duty Car Wheel Lock Clamp Anti-Theft Tire Clamp',
  category: 'wheel-lockers',
  brand: 'Generic',
  price: 35000,

  images: [
    'assets/img/tire changers and aligments/wheel lockers-anti theft.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
Heavy-Duty Car Wheel Lock Clamp is a reliable anti-theft security device designed to immobilize vehicles and prevent unauthorized movement. It is commonly used by car owners, law enforcement agencies, property managers, and security personnel to secure vehicles.
This tire clamp is constructed from high-strength steel, providing durability and resistance against tampering, cutting, and forced removal. Its bright visible color acts as a strong deterrent to potential thieves.
The adjustable design allows it to fit a wide range of tire sizes, making it suitable for cars, SUVs, vans, and light trucks. It features a secure locking mechanism with keys, ensuring only authorized users can remove the clamp.
Easy to install and remove, this wheel lock clamp provides an effective and convenient solution for vehicle security in parking areas, homes, offices, and public spaces.
`,

  specification: `
  - Product Name: Wheel Lock Clamp
  - Type: Anti-theft tire clamp
  - Material: Heavy-duty steel
  - Lock Type: Key lock system
  - Adjustable Size: Fits various tire widths
  - Color: Yellow / Red (high visibility)
  - Compatibility: Cars, SUVs, vans, light trucks
  - Usage: Vehicle immobilization and security
  `,

  features: `
  - Strong anti-theft protection
  - Durable steel construction
  - Bright color for high visibility deterrence
  - Adjustable to fit different tire sizes
  - Secure locking system with keys
  - Easy installation and removal
  - Resistant to cutting and tampering
  - Suitable for personal and commercial use
  - Ideal for parking enforcement and vehicle security
  `
},

{
  id: 9022,
  name: '4x4 – 4x7 Fibreglass Multipurpose Ladder Non-Conductive',
  category: 'folding-ladders',
  brand: 'Generic',
  price: 150000,
  
  variations: [
  { size: '4x4', price: 150000, inStock: true },
  { size: '4x5', price: 170000, inStock: true },
  { size: '4x6', price: 185000, inStock: true },
  { size: '4x7', price: 210000, inStock: true }
],

  images: [
    'assets/img/ladders/fibre ladder-4by4.webp',
    'assets/img/ladders/fibreglass-4x5.jpg',
    'assets/img/ladders/fibreglass-4x6.jpg',
    'assets/img/ladders/fibreglass-4x7.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
4x4, 4x5, 4x6, and 4x7 Fibreglass Multipurpose Ladders are versatile and durable access solutions designed for both professional and domestic use. They are ideal for electrical work, construction, maintenance, painting, and general household tasks.
Constructed from high-quality fibreglass, these ladders are non-conductive, making them safe for use around electrical installations. The strong and lightweight design ensures easy handling while maintaining excellent load-bearing capacity.
The multipurpose design allows the ladder to be configured into different positions such as A-frame, extension, straight ladder, and scaffold support, providing flexibility for various applications.
Each size offers different height levels to suit specific working needs, while maintaining the same safety and performance standards. The ladders are equipped with anti-slip rungs and secure locking hinges to ensure stability and user safety.
The foldable structure allows for easy transportation and convenient storage, making them suitable for both indoor and outdoor use.
These fibreglass multipurpose ladders are reliable, durable, and essential tools for working safely at height.
`,

  specification: `
  - Product Name: Multipurpose Ladder
  - Type: 4x4 / 4x5 / 4x6 / 4x7
  - Material: Fibreglass (Non-Conductive)
  - Design: Foldable / Multi-position
  - Configurations: A-frame, Extension, Straight, Scaffold
  - Number of Sections: 4
  - Steps per Section: Varies (4, 5, 6, 7)
  - Load Capacity: Approx. 150 kg
  - Rungs: Anti-slip steps
  - Locking System: Heavy-duty hinge locks
  - Usage: Construction, electrical, maintenance, home use
  `,

  features: `
  - Non-conductive fibreglass for electrical safety
  - Multi-position design for versatile applications
  - Strong and lightweight construction
  - Anti-slip rungs for added safety
  - Secure locking hinges for stability
  - Foldable and easy to store
  - Suitable for indoor and outdoor use
  - Durable and long-lasting performance
  - Ideal for professionals and DIY users
  `
},

{
  id: 9023,
  name: '4x4 – 4x7 Multipurpose Aluminium Ladder',
  category: 'folding-ladders',
  brand: 'Generic',
  price: 130000,

  variations: [
    { size: '4x4', price: 130000, inStock: true },
    { size: '4x5', price: 150000, inStock: true },
    { size: '4x6', price: 170000, inStock: true },
    { size: '4x7', price: 195000, inStock: true }
  ],

  images: [
    'assets/img/ladders/4x4 – 4x7 Multipurpose-Aluminium-Ladder.avif-5.webp',
    'assets/img/ladders/4x4 – 4x7 Multipurpose-Aluminium-Ladder.avif',
    'assets/img/ladders/4x4 – 4x7 Multipurpose-Aluminium-Ladder-4.avif',
    'assets/img/ladders/4x4 – 4x7 Multipurpose-Aluminium-Ladder.avif-2.jpg',
    'assets/img/ladders/4x4 – 4x7 Multipurpose-Aluminium-Ladder.avif-3.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
4x4, 4x5, 4x6, and 4x7 Multipurpose Aluminium Ladders are strong, lightweight, and highly versatile tools designed for both professional and household use. They are ideal for construction, maintenance, painting, installation, and general access tasks.
Constructed from high-grade aluminium, these ladders offer excellent strength while remaining lightweight for easy handling and transportation. The aluminium body is resistant to rust and corrosion, making it suitable for both indoor and outdoor environments.
The multipurpose design allows the ladder to be configured into multiple positions such as A-frame, extension ladder, straight ladder, and scaffold support. This flexibility makes it suitable for a wide range of working conditions.
Each size provides different working heights while maintaining durability and stability. The ladder features anti-slip rungs and strong locking hinges to ensure user safety during operation.
The foldable design allows for easy storage and transport, making it convenient for professionals and DIY users alike.
`,

  specification: `
  - Product Name: Multipurpose Aluminium Ladder
  - Type: 4x4 / 4x5 / 4x6 / 4x7
  - Material: Aluminium
  - Design: Foldable / Multi-position
  - Configurations: A-frame, Extension, Straight, Scaffold
  - Number of Sections: 4
  - Steps per Section: Varies (4, 5, 6, 7)
  - Load Capacity: Approx. 150 kg
  - Rungs: Anti-slip steps
  - Locking System: Heavy-duty hinge locks
  - Usage: Construction, maintenance, home use, painting
  `,

  features: `
  - Lightweight aluminium construction for easy handling
  - Rust-resistant and durable material
  - Multi-position functionality for versatility
  - Anti-slip rungs for added safety
  - Strong locking hinges for stability
  - Foldable and portable design
  - Suitable for indoor and outdoor use
  - High load-bearing capacity
  - Ideal for professionals and DIY users
  `
},


{
  id: 9024,
  name: '12ft – 40t Aluminium Extension Ladder',
  category: 'extension-ladders',
  brand: 'Generic',
  price: 90000,

  variations: [
    { size: '40ft', price: 90000, inStock: true },
    { size: '16ft', price: 120000, inStock: true },
    { size: '20ft', price: 150000, inStock: true },
    { size: '24ft', price: 185000, inStock: true }
  ],

  images: [
    'assets/img/ladders/24ft-extension-Ladder.webp',
    'assets/img/ladders/40 Feet Extension Ladder - 20 By 2.jpg',
    'assets/img/ladders/extension-16ft.jpg',
    'assets/img/ladders/extension-20ft.jpg',
    'assets/img/ladders/extension-24ft.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
12ft, 16ft, 20ft, and 24ft Aluminium Extension Ladders are designed for reaching elevated work areas safely and efficiently. They are ideal for construction, electrical work, building maintenance, painting, and outdoor tasks such as roofing and installations.
Constructed from high-quality aluminium, these ladders are lightweight yet strong, allowing for easy transportation and reliable performance. The corrosion-resistant material ensures long-lasting use even in outdoor environments.
The extension design allows the ladder to slide and lock securely at different height levels, making it adaptable to various job requirements. The ladder is equipped with heavy-duty locking mechanisms and stabilizing feet for enhanced safety during use.
Each size provides different maximum working heights, giving users flexibility based on their specific needs. The anti-slip rungs ensure firm footing, reducing the risk of accidents.
These extension ladders are essential tools for professionals and homeowners who require safe access to high places.
`,

  specification: `
  - Product Name: Extension Ladder
  - Type: 12ft / 16ft / 20ft / 24ft
  - Material: Aluminium
  - Design: Extendable / Straight Ladder
  - Sections: 2 (Extendable)
  - Extension Mechanism: Slide and lock system
  - Load Capacity: Approx. 150 kg
  - Rungs: Anti-slip steps
  - Base: Non-slip stabilizing feet
  - Usage: Construction, maintenance, roofing, painting
  `,

  features: `
  - Extendable design for adjustable height
  - Lightweight aluminium for easy handling
  - Strong and durable construction
  - Anti-slip rungs for safety
  - Secure locking mechanism
  - Stable base with non-slip feet
  - Suitable for indoor and outdoor use
  - Ideal for high-reach tasks
  - Easy to transport and store
  `
},


{
  id: 9025,
  name: '3 Step – 8 Step Aluminium Step Ladder',
  category: 'step-ladders',
  brand: 'Generic',
  price: 35000,

  variations: [
    { size: '3 Step', price: 35000, inStock: true },
    { size: '4 Step', price: 45000, inStock: true },
    { size: '5 Step', price: 55000, inStock: true },
    { size: '6 Step', price: 70000, inStock: true },
    { size: '7 Step', price: 85000, inStock: true },
    { size: '8 Step', price: 100000, inStock: true }
  ],

  images: [
    'assets/img/ladders/aluminium-step-ladders-1.jpg',
    'assets/img/ladders/aluminium step ladders-1.jpg2.jp',
    'assets/img/ladders/aluminium-step-ladders-1.jpg3.jpg',
    'assets/img/ladders/step-6.jpg',
    'assets/img/ladders/step-7.jpg',
    'assets/img/ladders/step-8.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
3 Step to 8 Step Aluminium Step Ladders are compact, stable, and easy-to-use access tools designed for both home and professional use. They are ideal for indoor tasks such as cleaning, painting, fixing lights, reaching shelves, and general maintenance.
Made from high-quality aluminium, these ladders are lightweight yet strong, making them easy to carry and move around. The corrosion-resistant material ensures durability and long-lasting performance.
The step ladder features a self-supporting A-frame design, eliminating the need for wall support. Wide anti-slip steps provide comfort and safety while climbing, and the top platform offers additional stability for standing.
Each size provides different height levels to suit various needs, from low-reach household tasks to higher indoor and light outdoor applications. The ladder also includes non-slip rubber feet to prevent movement during use.
The foldable design allows for easy storage in tight spaces, making it a convenient solution for homes, offices, shops, and workplaces.
`,

  specification: `
  - Product Name: Step Ladder
  - Type: 3 Step / 4 Step / 5 Step / 6 Step / 7 Step / 8 Step
  - Material: Aluminium
  - Design: A-frame / Self-supporting
  - Structure: Foldable
  - Steps: Wide anti-slip steps
  - Top Platform: Yes (for standing support)
  - Load Capacity: Approx. 150 kg
  - Base: Non-slip rubber feet
  - Usage: Home, office, shop, maintenance
  `,

  features: `
  - Lightweight and portable aluminium design
  - Self-supporting A-frame structure
  - Wide anti-slip steps for safety
  - Stable top platform for support
  - Non-slip rubber feet for firm grip
  - Foldable for easy storage
  - Durable and rust-resistant
  - Suitable for indoor and light outdoor use
  - Ideal for household and professional tasks
  `
},


{
  id: 9026,
  name: '4 Step – 8 Step Fibreglass Step Ladder (Non-Conductive)',
  category: 'step-ladders',
  brand: 'Generic',
  price: 60000,

  variations: [
    { size: '4 Step', price: 60000, inStock: true },
    { size: '5 Step', price: 75000, inStock: true },
    { size: '6 Step', price: 90000, inStock: true },
    { size: '7 Step', price: 110000, inStock: true },
    { size: '8 Step', price: 130000, inStock: true }
  ],

  images: [
    'assets/img/ladders/8-Steps-fiberglass-Double-A-Ladder.jpeg',
    'assets/img/ladders/fibreglass-step-5.jpg',
    'assets/img/ladders/fibreglass-step-6.jpg',
    'assets/img/ladders/fibreglass-step-7.jpg',
    'assets/img/ladders/fibreglass-step-8.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
4 Step to 8 Step Fibreglass Step Ladders are heavy-duty, non-conductive access tools designed for electrical, industrial, and professional use. They are ideal for electricians, maintenance engineers, construction workers, and technicians working around power sources.
Constructed from high-quality fibreglass, these ladders provide excellent insulation against electricity, making them safe for use near live wires and electrical installations. The material is also resistant to weather, moisture, chemicals, and extreme temperatures, ensuring long-lasting durability.
The ladder features a self-supporting A-frame design with wide anti-slip steps for maximum stability and comfort. A top platform allows secure standing for longer working periods, while strong locking hinges ensure safety during use.
Each size offers different working heights to suit various applications, from indoor maintenance to industrial site work. The ladder also includes non-slip rubber feet for firm grip on different surfaces.
These fibreglass step ladders are reliable, durable, and essential for safe working in environments where electrical hazards are present.
`,

  specification: `
  - Product Name: Fibreglass Step Ladder
  - Type: 4 Step / 5 Step / 6 Step / 7 Step / 8 Step
  - Material: Fibreglass (Non-Conductive)
  - Design: A-frame / Self-supporting
  - Structure: Foldable
  - Steps: Wide anti-slip steps
  - Top Platform: Yes
  - Load Capacity: Approx. 150 kg
  - Safety Rating: Suitable for electrical work
  - Base: Non-slip rubber feet
  - Usage: Electrical, industrial, maintenance, home use
  `,

  features: `
  - Non-conductive for electrical safety
  - Strong and durable fibreglass construction
  - Resistant to weather and corrosion
  - Anti-slip steps for safety
  - Stable A-frame design
  - Secure locking mechanism
  - Foldable and easy to store
  - Suitable for indoor and outdoor use
  - Ideal for electricians and professionals
  `
},


   {
     id: 9027,
     name: 'Hydraulic Workshop Press 20ton',
     category: 'hydraulic-presses',
     brand: 'Generic',
     price: 450000, // Current market price in Nigeria (around ₦400,000 - ₦550,000 depending on manual or pneumatic model and seller)
     images: [
       'assets/img/shop press/Hydraulic-Workshop-press-30ton.webp',
       'assets/img/tools/hydraulic-press-20ton-2.jpg',
       'assets/img/tools/hydraulic-press-20ton-3.jpg'
     ],
     inStock: true,
     jumiaLink: '',
     kongaLink: 'https://www.konga.com/product/hydraulic-workshop-press-20ton-6654939',
     description: `The Hydraulic Workshop Press 20ton is a heavy-duty H-frame shop press designed for pressing, bending, straightening, stamping, and assembling metal parts. It is widely used in automobile garages, fabrication workshops, steel fixing workshops, and general engineering for tasks such as bearing removal/installation, U-joint pressing, bushings, and straightening shafts or metal sheets. This robust manual or air-assisted press features a strong steel frame, adjustable working height, and a powerful hydraulic ram for reliable high-force operations.`,
     specification: `
  - Product Name: Hydraulic Workshop Press 20ton
  - Capacity: 20 Tons (40,000 lbs / approx. 18,144 kg)
  - Type: Manual hydraulic (bottle jack operated) or pneumatic/air-assisted variants
  - Ram Stroke: 7 - 8.5 inches (approx. 180 - 215 mm)
  - Working Range: 0" to 38" (0 - 965 mm) adjustable bed height
  - Bed Width / Throat Depth: Approx. 19 - 22 inches
  - Frame: Heavy-duty welded H-frame steel construction
  - Operation: Hand pump or air hydraulic
  - Included: Press plates / arbor plates, pressure gauge on some models
  - Weight: Approx. 150 - 280 kg (depending on exact model)
  - Dimensions: Approx. 60 - 74" Height x 27 - 33" Width x 25 - 30" Depth
  - Usage: Auto repair garages, metal fabrication, construction workshops, bearing & gear pressing, straightening rebar or metal components
  `,
     features: `
  - Massive 20-ton pressing force for heavy-duty workshop tasks
  - Adjustable working height and bed position for versatility
  - Strong H-frame design ensures stability and safety under load
  - Smooth hydraulic ram operation with good stroke length
  - Suitable for pressing bearings, removing/installing pins, bending metal, and straightening parts
  - No electricity required on manual models – ideal for remote workshops in Nigeria
  - Durable powder-coated steel frame for long service life and corrosion resistance
  - Comes with multiple press plates for different workpiece sizes
  - Essential equipment for mechanics, fabricators, and steel workshops
  - Cost-effective solution for medium to heavy pressing needs on construction and auto sites
  `
   },

// work shop ends at 11000


// Electricalequipments
// starts at 11001 
// ends at 13000

{
  id: 11001,
  name: 'Ingco Lithium Battery FBLI2002 – 4Ah 20V (P20S)',
  category: 'batteries',
  brand: 'Ingco',
  price: 50000,



  images: [
    'assets/img/battery and battery chargers/Ingco  Battery - 4ah - 20v.webp',
    'assets/img/batteries/ingco-fbli2002-2.jpg',
    'assets/img/batteries/ingco-fbli2002-3.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `
The Ingco FBLI2002 20V 4.0Ah Lithium-Ion Battery is a high-performance power source designed for use with all Ingco P20S cordless tools. It provides reliable and long-lasting energy, making it ideal for both professional and DIY applications.
With a 4.0Ah capacity, this battery delivers extended runtime, allowing users to work longer without frequent recharging. It is suitable for tools such as drills, angle grinders, saws, and other cordless equipment.
The battery features advanced lithium-ion technology with no memory effect, ensuring consistent performance and longer lifespan. It also includes built-in protection against overcharging, overheating, and overload, enhancing safety during use.
An LED battery level indicator allows users to easily monitor remaining power, improving efficiency on the job. This battery is a reliable and essential accessory for anyone using Ingco 20V cordless tools.
`,

  specification: `
  - Product Name: Lithium-Ion Battery
  - Model: FBLI2002
  - Voltage: 20V
  - Capacity: 4.0Ah
  - Battery Type: Lithium-Ion
  - Compatibility: Ingco P20S Tools
  - Indicator: LED battery level indicator
  - Protection: Overcharge, overheat, overload protection
  - Weight: Approx. 0.6 – 0.7 kg
  - Usage: Power supply for cordless tools
  `,

  features: `
  - High-capacity 4.0Ah for longer runtime
  - Compatible with all Ingco P20S tools
  - No memory effect for efficient charging
  - LED battery indicator for power monitoring
  - Built-in safety protection system
  - Durable and long-lasting performance
  - Lightweight and easy to handle
  - Fast charging capability (with compatible charger)
  - Ideal for professional and DIY use
  `
},


   {
     id: 11002,
     name: 'Maxmech Battery Charger BC650 – 12V/24V Heavy Duty Booster',
     category: 'battery-chargers',
     brand: 'Maxmech',
     price: 150000,


     images: [
       'assets/img/battery and battery chargers/maxmech cd 650-battery tester.jpg',
       'assets/img/chargers/maxmech-bc650-2.jpg',
       'assets/img/chargers/maxmech-bc650-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `
The Maxmech BC650 Battery Charger is a heavy-duty professional charger designed for charging and boosting 12V and 24V lead-acid batteries. It is suitable for cars, trucks, agricultural equipment, and industrial applications.
This charger features a powerful boost function that allows for quick charging and engine starting support, making it ideal for workshops, mechanics, and fleet operators.
Built with a durable and portable design, it comes with wheels and handles for easy movement, especially in workshop environments. The charger includes an ampere meter for monitoring charging levels and a selector switch for normal or fast charging modes.
With support for both 12V and 24V systems, the BC650 is versatile enough to handle a wide range of vehicles, from small cars to heavy-duty trucks. It also features strong insulated clamps for secure and safe battery connection.
This charger is reliable, efficient, and essential for automotive and industrial battery maintenance.
`,

     specification: `
  - Product Name: Battery Charger Booster
  - Model: BC650
  - Voltage: 12V / 24V
  - Input Voltage: 230V
  - Frequency: 50Hz
  - Charging Capacity: Up to 1000Ah
  - Charging Current: Approx. 60–75A
  - Boost Function: Yes (engine start support)
  - Display: Analog ampere meter
  - Mobility: Wheels and handle
  - Battery Type: Lead-acid / Sealed lead-acid
  - Usage: Cars, trucks, industrial batteries
  `,

     features: `
  - Dual voltage (12V/24V) compatibility
  - Heavy-duty charging and boost function
  - Fast and efficient battery charging
  - Built-in ampere meter for monitoring
  - Durable and portable with wheels
  - Strong insulated clamps for safety
  - Suitable for cars, trucks, and heavy equipment
  - Reliable for workshop and industrial use
  - Easy-to-use control system
  `
   },


  //  {
  //    id: 11003,
  //    name: 'Guru Special Bag Closer Machine With Oil Pump',
  //    category: 'bag-closers',
  //    brand: 'Guru',
  //    price: 180000,

  //    images: [
  //      'assets/img/bag closers/guru bag closer machine.jpg'
  //    ],

  //    inStock: true,
  //    description: 'The Guru Special Bag Closer Machine with Oil Pump is a portable industrial sewing machine designed for efficiently sealing filled bags in commercial and industrial environments. It is widely used in agriculture, food processing, manufacturing, and packaging industries to close bags containing products such as rice, flour, fertilizer, seeds, animal feed, and cement. The machine operates using a single-thread chain stitch system that creates strong and secure closures on various types of bags including paper bags, woven polypropylene (PP) sacks, HDPE bags, and textile packaging materials. Its built-in oil pump lubrication system ensures smooth operation by automatically supplying oil to internal moving parts, reducing wear and improving durability. The lightweight portable design allows operators to easily carry and use the machine in warehouses, production lines, and packaging stations. Built with durable industrial components, the Guru bag closer machine delivers reliable performance and high efficiency for businesses handling large volumes of bag packaging.',

  //    specification: `
  // Brand: Guru
  // Machine Type: Portable Bag Closing Sewing Machine
  // Stitch Type: Single Thread Chain Stitch
  // Stitch Length: 7.2 mm (Fixed)
  // Sewing Speed: 4 – 8 seconds per bag
  // Motor Power: 1/10 HP (8000 RPM)
  // Voltage: 220V – 240V
  // Needle Type: DBx257 #25
  // Weight: Approx. 5 – 6 kg
  // Lubrication System: Built-in Oil Pump
  // `,

  //    features: `
  // Portable industrial sewing machine for closing filled bags
  // Built-in oil pump lubrication system for smooth operation
  // High-speed sewing performance for efficient packaging
  // Durable construction for heavy-duty industrial use
  // Suitable for paper, woven, polypropylene and textile bags
  // Easy to operate and requires minimal training
  // Ideal for agricultural, food processing and manufacturing industries
  // `,

  //    jumiaLink: 'https://www.jumia.com.ng/',
  //    kongaLink: 'https://www.konga.com/'
  //  },

   {
     id: 11004,
     name: 'Maxmech Air Compressor BA 1500-80 – 80L 1500W',
     category: 'air-compressors',
     brand: 'Maxmech',
     price: 450000,

     images: [
       'assets/img/air compressors/maxmech air compressor-80l.jpg',
       'assets/img/aircompressors/maxmech-80l-2.jpg',
       'assets/img/aircompressors/maxmech-80l-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `
The Maxmech BA 1500-80 Air Compressor is a heavy-duty 80-litre air compressor designed for professional and industrial applications. It is ideal for workshops, automotive repair, spray painting, tyre inflation, and powering pneumatic tools.
Powered by a 1500W motor, this compressor delivers reliable and consistent air pressure for continuous operation. The large 80-litre tank ensures sufficient air storage, reducing the need for frequent refilling and improving work efficiency.
It features a maximum pressure of 8 bar, making it suitable for a wide range of tasks including spray painting, air tools operation, and cleaning applications.
The compressor is built with a durable metal tank and comes with wheels for easy mobility within workshops. It also includes a pressure gauge and control system for monitoring and adjusting air output.
This air compressor is a reliable and essential machine for mechanics, technicians, and industrial users who require steady and powerful air supply.
`,

     specification: `
  - Product Name: Air Compressor
  - Model: BA 1500-80
  - Power: 1500W
  - Voltage: 220–240V
  - Frequency: 50/60Hz
  - Tank Capacity: 80 Litres
  - Maximum Pressure: 8 Bar
  - Speed: Approx. 1050 rpm
  - Air Delivery: Approx. 170 L/min
  - Mobility: Wheels for easy movement
  - Usage: Workshop, automotive, spray painting, industrial
  `,

     features: `
  - Large 80L tank for longer operation
  - Powerful 1500W motor
  - High air delivery for pneumatic tools
  - Durable and heavy-duty construction
  - Easy mobility with wheels
  - Stable and reliable performance
  - Suitable for professional and industrial use
  - Pressure control and monitoring system
  - Ideal for spray painting and tyre inflation
  `
   },

   {
     id: 11005,
     name: 'Ingco Car Air Compressor AAC2508 – 12V Twin Cylinder',
     category: 'auto-compressors',
     brand: 'Ingco',
     price: 45000,

   

     images: [
       'assets/img/air compressors/Ingco auto compressor-120psi.jpg',
       'assets/img/aircompressors/ingco-aac2508-2.jpg',
       'assets/img/aircompressors/ingco-aac2508-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Ingco AAC2508 12V Car Air Compressor is a portable and high-performance twin cylinder air compressor designed for fast and efficient tyre inflation.It is ideal for cars,SUVs,and light trucks,making it perfect for emergency roadside use and everyday convenience.The powerful dual-cylinder motor delivers faster airflow and higher efficiency compared to single-cylinder compressors,allowing you to inflate tyres quickly and easily.It connects directly to your vehicle battery using heavy-duty clamps,ensuring stable power supply during operation.The compressor is built with a durable metal body for long-lasting performance and features a pressure gauge for accurate monitoring.It also comes with an air hose and nozzle accessories,making it suitable for inflating tyres,sports equipment,and other inflatables.This compact and portable compressor is an essential tool for every vehicle owner.`,

     specification: `
  - Product Name: Car Air Compressor
  - Model: AAC2508
  - Voltage: 12V DC
  - Type: Twin Cylinder
  - Power Source: Car Battery (Crocodile Clamps)
  - Max Pressure: Approx. 150 PSI
  - Air Flow: High-speed inflation
  - Hose: Heavy-duty air hose
  - Accessories: Nozzles included
  - Usage: Car tyres, SUV, light truck, inflatables
  `,

     features: `
  - Twin cylinder for faster inflation
  - Portable and easy to carry
  - Connects directly to car battery
  - Durable metal construction
  - High pressure output
  - Accurate pressure gauge
  - Multi-purpose use
  - Easy to operate
  - Ideal for emergency situations
  `
   },


   {
     id: 11006,
     name: 'KW600 Car Battery Tester – 12V 100–2000CCA Diagnostic Tool',
     category: 'battery-testers',
     brand: 'Generic',
     price: 35000,

  

     images: [
       'assets/img/battery and battery chargers/KW600 Car Battery Tester 12V 100 To 2000CCA.jpg',
       'assets/img/automotive/kw600-2.jpg',
       'assets/img/automotive/kw600-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The KW600 Car Battery Tester is a professional diagnostic tool designed to test 12V automotive batteries quickly and accurately.It supports a wide testing range from 100 to 2000CCA,making it suitable for cars,SUVs,and light trucks.This tester provides detailed battery analysis including voltage,cranking performance,and charging system status,helping users identify battery health and potential issues.The device connects directly to the battery using strong clamps and delivers instant results through a clear digital display.It is capable of testing battery condition,starter motor performance,and alternator charging output,ensuring complete system diagnostics.With its compact and portable design,the KW600 is easy to use for mechanics,technicians,and vehicle owners.This tool is essential for preventing unexpected battery failures and maintaining optimal vehicle performance.`,

     specification: `
  - Product Name: Car Battery Tester
  - Model: KW600
  - Voltage: 12V
  - CCA Range: 100–2000CCA
  - Display: Digital LCD
  - Test Functions: Battery, Cranking, Charging system
  - Compatibility: Cars, SUVs, light trucks
  - Connection: Battery clamps
  - Usage: Battery diagnostics and testing
  `,

     features: `
  - Wide testing range (100–2000CCA)
  - Accurate and fast diagnostics
  - Digital display for easy reading
  - Tests battery, cranking, and charging system
  - Easy connection with strong clamps
  - Compact and portable design
  - Suitable for professional and DIY use
  - Helps prevent battery failure
  - Reliable performance
  `
   },


   {
     id: 11007,
     name: 'Ingco Booster Cable HBTCP2001 – Heavy Duty Jump Starter Cable',
     category: 'cable-wires',
     brand: 'Ingco',
     price: 18000,

     variations: [
       { size: '200A', price: 18000, inStock: true }
     ],

     images: [
       'assets/img/cablewires/ingco booster cable HBTCP2001.jpg3.jpg',
       'assets/img/automotive/hbtcp2001-2.jpg',
       'assets/img/automotive/hbtcp2001-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Ingco HBTCP2001 Booster Cable is a heavy-duty jump starter cable designed for transferring power from one vehicle battery to another in emergency situations.It is ideal for cars,SUVs,and light vehicles with low or dead batteries.The cable is made with high-quality copper-clad aluminum wires to ensure efficient conductivity and reliable performance.It features strong insulated clamps that provide a secure grip on battery terminals,ensuring safe and stable connections during use.The thick insulation protects against heat and wear,making it durable for repeated use.This booster cable is compact,flexible,and easy to store in your vehicle,making it an essential emergency tool for every driver.`,

     specification: `
  - Product Name: Booster Cable
  - Model: HBTCP2001
  - Current Rating: 200A
  - Cable Length: Approx. 2.5–3 meters
  - Material: Copper-clad aluminum
  - Clamp Type: Heavy-duty insulated clamps
  - Voltage: 12V systems
  - Usage: Jump starting vehicles
  `,

     features: `
  - Heavy-duty 200A capacity
  - Strong insulated clamps for secure connection
  - High conductivity cable
  - Durable and heat-resistant insulation
  - Flexible and easy to handle
  - Compact and portable design
  - Ideal for emergency use
  - Suitable for cars and light vehicles
  - Reliable performance
  `
   },


   {
     id: 11008,
     name: 'Maxmech Plasma Cutter CUT-100 – 100A Industrial Cutting Machine',
     category: 'plasma-cutters',
     brand: 'Maxmech',
     price: 650000,

     images: [
       'assets/img/welding machines/maxmech cut 100 plasma cutter.jpg',
       'assets/img/welding/maxmech-cut100-2.jpg',
       'assets/img/welding/maxmech-cut100-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Maxmech CUT-100 Plasma Cutter is a heavy-duty industrial cutting machine designed for precise and efficient cutting of various conductive metals including steel,stainless steel,and aluminium.It delivers up to 100A output power,making it suitable for professional fabrication,construction,and workshop applications.The machine uses advanced inverter technology to ensure stable arc performance,high efficiency,and reliable operation even under demanding conditions.It features high-frequency arc ignition for smooth and contactless cutting,improving accuracy and reducing material damage.The CUT-100 is capable of cutting thick metal materials up to approximately 30mm depending on usage conditions,making it ideal for heavy-duty tasks.It is built with overload and thermal protection systems to enhance safety and durability.The compact and portable design allows easy movement within the workshop,while maintaining strong performance for continuous operation.`,

     specification: `
  - Product Name: Plasma Cutter
  - Model: CUT-100
  - Output Current: Up to 100A
  - Input Voltage: 3 Phase 380V
  - Technology: IGBT Inverter
  - Cutting Thickness: Up to 30mm (approx.)
  - Arc Start: High-frequency (HF)
  - Duty Cycle: Approx. 60%
  - Cooling: Air cooling system
  - Usage: Industrial cutting, fabrication, construction
  `,

     features: `
  - Powerful 100A cutting performance
  - Cuts steel, stainless steel, and aluminium
  - High-frequency arc start for smooth cutting
  - Advanced inverter technology for efficiency
  - Stable arc and precise cutting results
  - Overload and thermal protection
  - Heavy-duty industrial design
  - Portable and easy to handle
  - Suitable for professional workshop use
  `
   },


   {
     id: 11009,
     name: 'Maxmech 7.5KVA Welding Generator WG350 – 350A Dual Function',
     category: 'petrol-generators',
     brand: 'Maxmech',
     price: 750000,

   

     images: [
       'assets/img/generators/MAXMECH_7.5KVA_Welding_Generator_WG350.jpg',
       'assets/img/welding/maxmech-wg350-2.jpg',
       'assets/img/welding/maxmech-wg350-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Maxmech WG350 7.5KVA Welding Generator is a powerful dual-purpose machine designed for both welding and electricity generation.It is ideal for construction sites,workshops,and industrial applications where reliable power and welding capability are required.This generator delivers strong welding performance while also supplying stable electrical output for tools and equipment.It is built with 100% copper coil for durability and efficient conductivity,ensuring long-lasting performance even under heavy use.The machine features a manual start system and a rugged design suitable for outdoor and site operations.With its high output capacity and fuel-efficient engine,it provides consistent power for welding,cooling fans,grinders,and other essential tools.This welding generator is a dependable solution for professionals who need mobility,performance,and versatility in one machine.`,

     specification: `
  - Product Name: Welding Generator
  - Model: WG350
  - Capacity: 7.5KVA
  - Rated Power: Approx. 5.0KW
  - Max Power: Approx. 5.5KW
  - Voltage: 230V
  - Frequency: 50–60Hz
  - Welding Output: Up to 350A
  - Coil: 100% Copper
  - Start System: Manual
  - Function: Welding + Power Generation
  - Usage: Construction, workshop, industrial
  `,

     features: `
  - Dual function (generator + welding machine)
  - High 350A welding output
  - Strong 7.5KVA power capacity
  - 100% copper coil for durability
  - Fuel-efficient engine
  - Rugged and portable design
  - Stable power output for tools
  - Suitable for heavy-duty use
  - Ideal for construction and workshops
  `
   },

   {
     id: 11010,
     name: 'TOTAL Silent Diesel Generator 8.0KW TP280001 – 8KVA',
     category: 'desiel-generators',
     brand: 'Total',
     price: 1800000,

     

     images: [
       'assets/img/generators/TOTAL Silent diesel generator 8.000W (TP280001).jpg',
       'assets/img/generators/total-tp280001-2.jpg',
       'assets/img/generators/total-tp280001-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The TOTAL TP280001 Silent Diesel Generator is a high-performance 8.0KW power generator designed for reliable and quiet operation in homes,offices,and industrial environments.It features a powerful diesel engine that delivers stable output power of up to 8KW with a rated output of 7.5KW,making it suitable for running multiple appliances and equipment efficiently.The generator is built with a soundproof enclosure to minimize noise during operation,ensuring a quieter working environment.It is equipped with an electric start system and a maintenance-free battery for easy operation.The unit includes an AVR voltage regulator for stable power supply and protection of sensitive devices.With a large 25-litre fuel tank,it provides long runtime and improved efficiency.The durable construction with copper coil alternator ensures long-lasting performance and reliability,while wheels and handles allow easy movement.This generator is ideal for backup power,construction sites,and commercial use.`,

     specification: `
  - Product Name: Diesel Generator
  - Model: TP280001
  - Power Output (Max): 8.0KW
  - Rated Output: 7.5KW
  - Voltage: 220–240V
  - Frequency: 50Hz
  - Phase: Single Phase
  - Engine: 4-Stroke Diesel
  - Engine Power: Approx. 13HP
  - Displacement: 668cc
  - Starting System: Electric Start
  - Fuel Tank Capacity: 25 Litres
  - Noise Level: Approx. 76dB
  - Cooling System: Air-cooled
  - Alternator: Copper Coil
  - Weight: Approx. 236 kg
  - Usage: Home, office, industrial backup
  `,

     features: `
  - Silent operation with soundproof enclosure
  - Powerful 8KW output capacity
  - Fuel-efficient diesel engine
  - Electric start for easy operation
  - AVR for stable voltage output
  - Large fuel tank for long runtime
  - Durable copper coil alternator
  - Strong and heavy-duty construction
  - Wheels and handles for mobility
  - Suitable for home and industrial use
  `
   },


   {
     id: 11011,
     name: 'TOTAL Inverter Generator 2.2KW TP530001 – Portable Silent Petrol',
     category: 'inverter-generators',
     brand: 'Total',
     price: 450000,

     variations: [
       { size: '2.2KW', price: 450000, inStock: true }
     ],

     images: [
       'assets/img/generators/TOTAL INVERTER GASOLINE GENERATOR 2.200W (TP530001.jpg',
       'assets/img/generators/total-tp530001-2.jpg',
       'assets/img/generators/total-tp530001-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The TOTAL TP530001 Inverter Generator is a compact and fuel-efficient 2.2KW gasoline generator designed for portable and quiet power supply.It uses advanced inverter technology to produce clean and stable electricity,making it safe for sensitive electronics such as laptops,TVs,and mobile devices.The generator features a low-noise operation system,ideal for home use,camping,outdoor activities,and small business applications.It is equipped with an easy recoil start system and an eco-mode function that adjusts engine speed based on load,improving fuel efficiency and reducing noise.The lightweight and portable design with a carry handle makes it easy to transport and store.With reliable performance and modern inverter technology,this generator is perfect for users who need clean,powerful,and quiet electricity in a compact form.`,

     specification: `
  - Product Name: Inverter Generator
  - Model: TP530001
  - Max Power Output: 2.2KW
  - Rated Power: Approx. 2.0KW
  - Voltage: 220–240V
  - Frequency: 50Hz
  - Fuel Type: Petrol (Gasoline)
  - Starting System: Recoil Start
  - Technology: Inverter (Clean Power)
  - Noise Level: Low noise operation
  - Fuel Tank Capacity: Approx. 4–5 Litres
  - Runtime: Varies based on load
  - Portability: Lightweight with handle
  - Usage: Home, camping, electronics, small business
  `,

     features: `
  - Inverter technology for clean and stable power
  - Safe for sensitive electronics
  - Quiet operation for home and outdoor use
  - Fuel-efficient eco mode system
  - Compact and lightweight design
  - Easy recoil start
  - Portable with carry handle
  - Reliable performance
  - Ideal for backup and mobile power needs
  `
   },


   {
     id: 11012,
     name: 'Maxmech TIG/MMA-250 Welding Machine – 250A Inverter Dual Function',
     category: 'tig-welding-machines',
     brand: 'Maxmech',
     price: 320000,

 

     images: [
       'assets/img/welding machines/maxmech tigmma 250.jpg',
       'assets/img/welding/maxmech-tigmma250-2.jpg',
       'assets/img/welding/maxmech-tigmma250-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Maxmech TIG/MMA-250 Welding Machine is a powerful dual-function inverter welder designed for both TIG and MMA welding applications.It uses advanced IGBT inverter technology to deliver stable arc performance,high efficiency,and reliable operation for professional and workshop use.The machine supports a wide current range up to 250A,making it suitable for welding stainless steel,carbon steel,iron,copper,and other metals.It features high-frequency arc start for smooth ignition and precise welding results.The compact and portable design allows easy movement while maintaining strong performance.The welder is equipped with multiple protection systems including overheat,overload,and voltage protection to ensure durability and safety during operation.With its dual functionality and strong output,this welding machine is ideal for fabrication,construction,and maintenance work.`,

     specification: `
  - Product Name: Welding Machine
  - Model: TIG/MMA-250
  - Output Current: Up to 250A
  - Input Voltage: 220–240V
  - Technology: IGBT Inverter
  - Welding Type: TIG / MMA (Stick)
  - Duty Cycle: Approx. 60%
  - No-load Voltage: Approx. 56–66V
  - Arc Start: High-frequency (HF)
  - Cooling: Fan-cooled system
  - Weight: Approx. 6–10 kg
  - Usage: Fabrication, construction, workshop
  `,

     features: `
  - Dual function TIG and MMA welding
  - Powerful 250A output
  - Advanced inverter technology for efficiency
  - Smooth and stable arc performance
  - High-frequency arc start
  - Lightweight and portable design
  - Overheat and overload protection
  - Suitable for multiple metals
  - Ideal for professional and DIY use
  `
   },

   {
     id: 11013,
     name: 'Maxmech MMA-500T Welding Machine – 500A Heavy Duty Inverter',
     category: 'mma-welding-machines',
     brand: 'Maxmech',
     price: 300000,

     

     images: [
       'assets/img/welding machines/maxmech MMA-500T.jpg',
       'assets/img/welding/maxmech-mma500t-2.jpg',
       'assets/img/welding/maxmech-mma500t-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Maxmech MMA-500T Welding Machine is a heavy-duty inverter arc welder designed for industrial and professional welding applications.It delivers powerful output up to 500A,making it suitable for welding thick metals and handling demanding fabrication tasks.The machine uses advanced inverter technology to ensure stable arc performance,efficient power consumption,and consistent welding results.It is ideal for welding steel,iron,and other ferrous materials in construction,workshops,and fabrication environments.The rugged and durable design allows it to withstand tough working conditions while remaining portable for easy movement.It features built-in protection systems including overheat,overload,and voltage protection to enhance safety and durability.This welding machine is a reliable choice for professionals who require strong performance and efficiency in heavy-duty operations.`,

     specification: `
  - Product Name: Welding Machine
  - Model: MMA-500T
  - Output Current: Up to 500A
  - Input Voltage: 220–240V / 380V (varies by model)
  - Technology: Inverter
  - Welding Type: MMA (Arc/Stick)
  - Duty Cycle: Approx. 60%
  - No-load Voltage: Approx. 60–75V
  - Cooling: Fan-cooled system
  - Usage: Industrial welding, fabrication, construction
  `,

     features: `
  - Powerful 500A output capacity
  - Suitable for heavy-duty welding
  - Stable arc performance
  - Energy-efficient inverter technology
  - Durable and rugged construction
  - Overheat and overload protection
  - Portable design
  - Ideal for thick metal welding
  - Reliable for industrial use
  `
   },

   {
     id: 11014,
     name: 'Maxmech MIG/MMA-250 Welding Machine – 250A Dual Function Inverter',
     category: 'mig-welding-machines',
     brand: 'Maxmech',
     price: 350000,


     images: [
       'assets/img/welding machines/maxmech migmma-250.jpg',
       'assets/img/welding/maxmech-migmma250-2.jpg',
       'assets/img/welding/maxmech-migmma250-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Maxmech MIG/MMA-250 Welding Machine is a versatile dual-function inverter welder designed for both MIG and MMA welding applications.It delivers up to 250A output,making it suitable for light to medium-duty fabrication,automotive work,and general welding tasks.The machine uses advanced inverter technology to provide stable arc performance,efficient energy consumption,and consistent welding results.It supports MIG welding for clean and fast welding with minimal spatter,as well as MMA welding for strong and reliable joints on various metals including steel and iron.The compact and portable design allows easy movement in workshops and job sites.It is equipped with built-in protection systems such as overheat,overload,and voltage protection to ensure safe and durable operation.This welding machine is ideal for professionals and DIY users who need flexibility and performance in one unit.`,

     specification: `
  - Product Name: Welding Machine
  - Model: MIG/MMA-250
  - Output Current: Up to 250A
  - Input Voltage: 220–240V
  - Technology: IGBT Inverter
  - Welding Type: MIG / MMA (Stick)
  - Duty Cycle: Approx. 60%
  - No-load Voltage: Approx. 50–60V
  - Wire Feed: Automatic (MIG)
  - Cooling: Fan-cooled system
  - Usage: Fabrication, automotive, workshop
  `,

     features: `
  - Dual function MIG and MMA welding
  - Clean MIG welding with less spatter
  - Powerful 250A output
  - Stable arc performance
  - Energy-efficient inverter technology
  - Portable and compact design
  - Built-in safety protection systems
  - Suitable for multiple metal types
  - Ideal for workshop and automotive use
  `
   },


   {
     id: 11015,
     name: 'Maxmech Arc Welding Machine 500A – Heavy Duty MMA Inverter',
     category: 'arc-welding-machines',
     brand: 'Maxmech',
     price: 300000,

     images: [
       'assets/img/welding machines/arc welding 500.png',
       'assets/img/welding/maxmech-arc500-2.jpg',
       'assets/img/welding/maxmech-arc500-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Maxmech Arc Welding 500A Machine is a heavy-duty inverter welding machine designed for professional and industrial applications.It delivers powerful output up to 500A,making it suitable for welding thick metals and handling demanding fabrication work.The machine uses advanced inverter technology to ensure stable arc performance,efficient power usage,and consistent welding results.It is ideal for welding steel,iron,and other ferrous materials in construction sites,workshops,and fabrication industries.The rugged design ensures durability in tough working environments while maintaining portability for easy movement.It is equipped with multiple protection systems including overheat,overload,and voltage protection to ensure safety and long service life.This welding machine is reliable,efficient,and built for heavy-duty performance.`,

     specification: `
  - Product Name: Arc Welding Machine
  - Model: ARC 500
  - Output Current: Up to 500A
  - Input Voltage: 220–240V / 380V (varies by model)
  - Technology: Inverter
  - Welding Type: MMA (Arc/Stick)
  - Duty Cycle: Approx. 60%
  - No-load Voltage: Approx. 60–75V
  - Cooling: Fan-cooled system
  - Usage: Industrial welding, fabrication, construction
  `,

     features: `
  - Powerful 500A output for heavy-duty welding
  - Stable arc and smooth performance
  - Energy-efficient inverter technology
  - Durable and rugged construction
  - Overheat and overload protection
  - Portable design for easy handling
  - Suitable for thick metal welding
  - Reliable for industrial use
  - Ideal for professional welders
  `
   },

  //  electrical equipments end at 13000


// testing and measuring
// starts at 13001
// ends at 16000                

   {
     id: 13001,
     name: '2 Inch LC Flow Meter for Diesel Fuel (Positive Displacement)',
     category: 'flow-meters',
     brand: 'Generic',
     price: 250000,

     images: [
       'assets/img/pumping machines/2 inches liquid control flow meter.jpg'
     ],

     inStock: true,

     description: 'The 2 Inch LC Flow Meter is a high-precision positive displacement (oval gear) meter designed for accurate measurement of diesel, fuel oils, kerosene, and other industrial liquids. Built for heavy-duty applications, it delivers consistent and reliable readings even under varying flow conditions and pressure levels. This flow meter is widely used in fuel dispensing systems, tanker trucks, fuel depots, and industrial pipelines where precise fuel accountability is critical. Its robust construction, combined with advanced metering technology, ensures minimal measurement error and long-term stability. The meter features a low-pressure drop design for efficient flow, easy integration with mechanical or digital registers, and compatibility with automated fuel management systems. It is engineered for durability, offering excellent resistance to wear, corrosion, and harsh working environments, making it a dependable choice for continuous industrial operations.',

     specification: `
  Product Type: LC Positive Displacement Flow Meter
  Size: 2 Inch (DN50 / 50mm)
  Flow Range: 38 – 380 L/min
  Accuracy: ±0.2% – ±0.5%
  Repeatability: ≤0.05%
  Max Pressure: 10 – 18 Bar
  Measurement Units: Liters / Gallons
  Material: Aluminum / Cast Iron
  Connection Type: Flange / NPT / BSP
  Application: Diesel, Fuel Oil, Kerosene, Industrial Fluids
  `,

     features: `
  High accuracy fuel measurement with stable performance
  Positive displacement (oval gear) technology for precise metering
  Suitable for large flow rate applications
  Durable construction for industrial and outdoor use
  Low pressure drop for efficient fuel transfer systems
  Easy installation with flange or threaded connections
  Compatible with mechanical or digital registers
  Long service life with minimal maintenance
  Ideal for tanker trucks, fuel depots, and dispensing systems
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },


   {
     id: 13002,
     name: 'Petrol Engine Compression Tester – 8pcs Kit',
     category: 'fuel-testing-kits',
     brand: 'Generic',
     price: 25000,



     images: [
       'assets/img/fuel testing and measuring/petrol compression kit-8pcs.jpg',
       'assets/img/automotive/compression-tester-2.jpg',
       'assets/img/automotive/compression-tester-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Petrol Engine Compression Tester 8pcs Kit is a professional diagnostic tool designed to measure the compression pressure of petrol engines quickly and accurately.It is ideal for mechanics,technicians,and car owners to diagnose engine condition and detect issues such as worn piston rings,valve leakage,and cylinder problems.The kit includes a pressure gauge with clear readings and multiple adapters to fit different spark plug sizes,making it compatible with a wide range of petrol vehicles.The durable construction ensures long-lasting use,while the flexible hose allows easy access to hard-to-reach engine areas.It is simple to use and provides reliable results for engine testing and maintenance.This compression tester kit is an essential tool for automotive diagnostics and repair.`,

     specification: `
  - Product Name: Engine Compression Tester
  - Type: Petrol Engine Tester
  - Pieces: 8pcs Kit
  - Gauge Range: Approx. 0–300 PSI
  - Compatibility: Petrol engines
  - Adapters: Multiple spark plug adapters
  - Hose: Flexible high-pressure hose
  - Usage: Engine diagnostics and testing
  `,

     features: `
  - Accurate compression testing
  - Includes 8pcs complete kit
  - Easy-to-read pressure gauge
  - Multiple adapters for compatibility
  - Durable and long-lasting design
  - Flexible hose for easy access
  - Suitable for professional and DIY use
  - Helps detect engine faults
  - Essential automotive diagnostic tool
  `
   },

   {
     id: 13003,
  name: 'AGO Hydrometer with 250ml Cylinder Tube – Battery Acid Tester',
  category: 'hydrometers',
  brand: 'AGO',
  price: 12000,



  images: [
    'assets/img/fuel testing and measuring/hydrometer.jpg',
    'assets/img/automotive/hydrometer-2.jpg',
    'assets/img/automotive/hydrometer-3.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `The AGO Hydrometer with 250ml Cylinder Tube is a reliable tool used for measuring the specific gravity of battery electrolyte solutions,helping to determine the state of charge and condition of lead-acid batteries.It is ideal for automotive workshops,technicians,and battery maintenance applications.The hydrometer comes with a transparent 250ml cylinder tube that allows easy observation of readings and liquid levels.The floating scale inside the hydrometer provides accurate measurements,helping users quickly assess battery health and performance.It is made from durable materials that resist chemical corrosion from battery acid,ensuring long-lasting use.The tool is simple to operate and essential for maintaining and testing batteries in vehicles and equipment.`,

  specification: `
  - Product Name: Hydrometer
  - Brand: AGO
  - Capacity: 250ml
  - Type: Battery Acid Tester
  - Measurement: Specific gravity
  - Material: Acid-resistant plastic and glass
  - Application: Lead-acid batteries
  - Usage: Battery testing and maintenance
  `,

  features: `
  - Accurate specific gravity measurement
  - Transparent 250ml cylinder for easy reading
  - Durable and chemical-resistant design
  - Simple and easy to use
  - Suitable for battery maintenance
  - Lightweight and portable
  - Reliable performance
  - Ideal for automotive and workshop use
  - Helps monitor battery condition
  `
},



   {
     id: 13004,
     name: 'Steel 20L Diesel Gasoline Gauge Measuring Can – Fuel Measuring Container',
     category: 'measuring-cans',
     brand: 'Generic',
     price: 35000,

   

     images: [
       'assets/img/fuel testing and measuring/Measuring Can-20l.avif',
       'assets/img/measuring/fuel-can-20l-2.jpg',
       'assets/img/measuring/fuel-can-20l-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Steel 20L Diesel Gasoline Gauge Measuring Can is a durable and reliable container designed for accurate measurement and safe handling of fuel.It is ideal for diesel and petrol storage,measurement,and transfer in workshops,filling stations,and industrial environments.The can is constructed from high-quality steel,providing strength and resistance to impact,corrosion,and fuel chemicals.It features a built-in gauge or calibrated markings that allow users to easily measure fuel levels for precise dispensing.The secure lid and spout design help prevent leakage and ensure safe pouring during use.The compact and portable structure makes it easy to carry and transport.This measuring can is an essential tool for fuel management,testing,and storage applications.`,

     specification: `
  - Product Name: Fuel Measuring Can
  - Capacity: 20 Litres
  - Material: Steel
  - Fuel Type: Diesel / Petrol (Gasoline)
  - Measurement: Calibrated gauge markings
  - Design: Portable with handle and spout
  - Usage: Fuel storage, measurement, transfer
  `,

     features: `
  - Strong and durable steel construction
  - 20L capacity for fuel handling
  - Built-in gauge for accurate measurement
  - Leak-resistant lid and spout
  - Easy to carry and transport
  - Resistant to fuel and corrosion
  - Suitable for diesel and petrol
  - Ideal for workshop and industrial use
  - Reliable and long-lasting
  `
   },


   {
     id: 13005,
     name: 'Mitutoyo Digital Caliper 12" – 300mm Precision Measuring Tool',
     category: 'digital-calipers',
     brand: 'Mitutoyo',
     price: 650000,

  
     images: [
       'assets/img/fuel testing and measuring/mitutoyo Digital Calliper 12inch.webp',
       'assets/img/measuring/mitutoyo-12-2.jpg',
       'assets/img/measuring/mitutoyo-12-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Mitutoyo 12 inch Digital Caliper is a high-precision measuring tool designed for professional engineering,manufacturing,and workshop applications.It provides accurate measurement of internal,external,depth,and step dimensions with a measuring range of up to 300mm.The caliper features advanced ABSOLUTE scale technology which retains the origin position even after power is turned off,eliminating the need for repeated zero setting.It is constructed from hardened stainless steel for durability and long service life.The large LCD display allows clear and easy reading of measurements in both metric and imperial units.With smooth sliding operation and high accuracy,this caliper is ideal for machinists,engineers,and quality control professionals who require reliable and precise measurement.`,

     specification: `
  - Product Name: Digital Caliper
  - Brand: Mitutoyo
  - Measuring Range: 0–300mm (0–12")
  - Resolution: 0.01mm / 0.0005"
  - Accuracy: ±0.03mm
  - Material: Hardened stainless steel
  - Display: LCD digital screen
  - Measurement Types: Internal, external, depth, step
  - Technology: ABSOLUTE scale
  - Units: mm / inch
  - Usage: Engineering, machining, inspection
  `,

     features: `
  - High precision measurement
  - ABSOLUTE scale technology (no reset needed)
  - Durable stainless steel construction
  - Large and clear LCD display
  - Smooth sliding operation
  - Multi-measurement functionality
  - Long battery life
  - Easy unit conversion (mm/inch)
  - Ideal for professional use
  `
   },


   {
     id: 13006,
     name: 'KOLOR KUT Gasoline Gauging Paste – Fuel Level Indicator (2.25oz)',
     category: 'testing-paste',
     brand: 'Kolor Kut',
     price: 18000,

     images: [
       'assets/img/fuel testing and measuring/KOLOR KUT Gasoline Gauging Paste.jpg',
       'assets/img/measuring/kolorkut-2.jpg',
       'assets/img/measuring/kolorkut-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `KOLOR KUT Gasoline Gauging Paste is a professional fuel testing paste used to accurately determine the level of gasoline and other petroleum products in storage tanks.It works by changing color when it comes into contact with fuel,providing a clear and instant visual indication of fuel depth.The paste is light pink in color and turns bright red upon contact with gasoline,diesel,kerosene,and other hydrocarbons,making it easy to read measurements quickly and accurately.It is widely used in fuel stations,industrial facilities,and maintenance operations for tank gauging and fuel management.The paste is applied to a dipstick or gauging tape and lowered into the tank where it reacts instantly at the fuel level.This product is reliable,easy to use,and does not require any electronic equipment,making it a simple and effective solution for fuel measurement.`,

     specification: `
  - Product Name: Gasoline Gauging Paste
  - Brand: Kolor Kut
  - Size: 2.25oz (Approx. 64g)
  - Type: Fuel Level Indicator Paste
  - Color Change: Pink to Red
  - Compatibility: Gasoline, diesel, kerosene, hydrocarbons
  - Application: Dipstick / Gauging tape
  - Usage: Fuel tank measurement
  `,

     features: `
  - Instant color change for easy reading
  - Accurate fuel level detection
  - Works with multiple fuel types
  - Simple and easy to use
  - No electronics required
  - Compact and portable
  - Reliable and widely used in industry
  - Long shelf life
  - Ideal for fuel stations and workshops
  `
   },


   {
     id: 13007,
     name: 'Mitutoyo Analogue Caliper 12" – 300mm Vernier Precision Tool',
     category: 'vernier-calipers',
     brand: 'Mitutoyo',
     price: 180000,

    

     images: [
       'assets/img/fuel testing and measuring/mitutoyo vernier Calliper 12inch.webp',
       'assets/img/measuring/mitutoyo-analogue-12-2.jpg',
       'assets/img/measuring/mitutoyo-analogue-12-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Mitutoyo 12 inch Analogue Vernier Caliper is a high-precision measuring tool designed for professional engineering,workshop,and inspection applications.It provides accurate measurement of internal,external,depth,and step dimensions with a measuring range of up to 300mm.The caliper features a dual-scale vernier system for reading both metric and imperial measurements without the need for batteries,making it highly reliable in all working conditions.It is constructed from hardened stainless steel with a satin chrome finish for durability and easy readability.The smooth sliding mechanism ensures precise measurement and comfortable operation.The tool also includes a locking screw to hold measurements securely during use.This vernier caliper is ideal for machinists,engineers,and technicians who require dependable and precise manual measurement.`,

     specification: `
  - Product Name: Vernier Caliper
  - Brand: Mitutoyo
  - Measuring Range: 0–300mm (0–12")
  - Graduation: 0.02mm / 0.001"
  - Accuracy: ±0.04mm
  - Material: Hardened stainless steel
  - Finish: Satin chrome
  - Measurement Types: Internal, external, depth, step
  - Scale Type: Dual scale (mm/inch)
  - Locking System: Thumb lock screw
  - Usage: Engineering, machining, inspection
  `,

     features: `
  - High precision analogue measurement
  - No battery required
  - Durable stainless steel construction
  - Clear dual-scale readings
  - Smooth sliding movement
  - Lock screw for stable measurement
  - Multi-purpose measurement capability
  - Long-lasting and reliable
  - Ideal for professional use
  `
   },


   {
     id: 13008,
     name: 'Bosch Professional Measuring Wheel Bosch GWM 32',
     category: 'measuring-wheels',
     brand: 'Bosch',
     price: 220000,

     images: [
       'assets/img/measuring wheels/bosch measuring wheels.webp',
       'assets/img/measuring/bosch-gwm32-2.jpg',
       'assets/img/measuring/bosch-gwm32-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Bosch Professional GWM 32 Measuring Wheel is a high-precision distance measuring tool designed for outdoor and long-distance measurements.It is ideal for road construction,land surveying,real estate assessment,and general site measurements.The large 32cm wheel ensures smooth and accurate rolling even on rough surfaces such as gravel and uneven terrain.It features a robust and weather-resistant design,making it suitable for tough job site conditions.The device includes an easy-to-read mechanical counter and a foldable handle for convenient storage and transport.`,

     specification: `
  - Product Name: Measuring Wheel
  - Brand: Bosch Professional
  - Model: GWM 32
  - Wheel Diameter: 32 cm
  - Measurement Range: Up to 10,000 meters
  - Accuracy: High precision mechanical counting
  - Display: Analog counter
  - Handle: Foldable
  - Material: Heavy-duty construction
  - Usage: Road work, surveying, construction, outdoor measurements
  `,

     features: `
  - Large 32cm wheel for smooth rolling on rough surfaces
  - Accurate long-distance measurement
  - Durable and weather-resistant design
  - Easy-to-read mechanical counter
  - Foldable handle for easy transport and storage
  - Suitable for outdoor and industrial use
  - Ideal for surveyors, engineers, and construction professionals
  `
   },


   {
     id: 13009,
     name: 'DUOYI Digital Earth Ground Resistance Tester DY4100 – Soil Resistivity Meter',
     category: 'general-testers',
     brand: 'Duoyi',
     price: 120000,


     images: [
       'assets/img/general meters/DUOYI Digital Earth Ground Resistance Tester - DY4100-2.jpg',
       'assets/img/measuring/duoyi-dy4100-2.jpg',
       'assets/img/measuring/duoyi-dy4100-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The DUOYI DY4100 Digital Earth Ground Resistance Tester is a professional instrument designed to measure earth resistance and soil resistivity for electrical grounding systems.It is widely used in power installations,telecommunication systems,and industrial environments to ensure proper grounding and safety.The device provides accurate and reliable readings using advanced digital measurement technology and supports multiple testing methods including 2-wire and 3-wire testing.It features a clear digital display for easy reading of measurement values and a user-friendly interface for efficient operation.The tester is compact and portable,making it suitable for field work and on-site testing.It is built with durable materials to withstand tough working conditions and ensure long-term performance.This ground resistance tester is essential for electricians,engineers,and technicians involved in grounding system testing and maintenance.`,

     specification: `
  - Product Name: Earth Resistance Tester
  - Brand: Duoyi
  - Model: DY4100
  - Measurement Range: Up to 2000Ω (varies by range)
  - Test Methods: 2-wire / 3-wire
  - Display: Digital LCD
  - Power Supply: Battery operated
  - Accuracy: High precision measurement
  - Application: Ground resistance and soil resistivity
  - Usage: Electrical, industrial, telecom systems
  `,

     features: `
  - Accurate earth resistance measurement
  - Supports multiple testing methods
  - Clear and easy-to-read digital display
  - Portable and lightweight design
  - Durable for field use
  - Simple and user-friendly operation
  - Reliable performance
  - Suitable for professional applications
  - Essential for grounding system testing
  `
   },


   {
     id: 13010,
     name: 'Mastech MS2101 AC/DC Digital Clamp Meter – 4000 Counts',
     category: 'clamp-meters',
     brand: 'Mastech',
     price: 55000,


     images: [
       'assets/img/general meters/Mastech MS2101 AC DC Digital Clamp Meter.jpg',
       'assets/img/measuring/mastech-ms2101-2.jpg',
       'assets/img/measuring/mastech-ms2101-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Mastech MS2101 AC/DC Digital Clamp Meter is a versatile electrical testing tool designed for measuring current without direct contact with live wires.It supports both AC and DC current measurement,making it suitable for a wide range of electrical applications including household,industrial,and automotive diagnostics.The clamp design allows safe and easy measurement by simply clamping around a conductor without disconnecting the circuit.It features a 4000 counts digital display that provides clear and accurate readings for voltage,current,resistance,and continuity testing.The meter also includes data hold function for easy reading and a compact ergonomic design for comfortable handling.It comes with a storage bag for protection and portability,making it ideal for electricians,technicians,and DIY users who require reliable and efficient electrical measurements.`,

     specification: `
  - Product Name: Digital Clamp Meter
  - Brand: Mastech
  - Model: MS2101
  - Display: 4000 counts LCD
  - Current Measurement: AC/DC
  - Voltage Measurement: AC/DC
  - Resistance Measurement: Yes
  - Continuity Test: Yes
  - Data Hold: Yes
  - Clamp Type: Non-contact current measurement
  - Power Supply: Battery operated
  - Accessories: Storage bag
  - Usage: Electrical testing and diagnostics
  `,

     features: `
  - Measures both AC and DC current
  - Non-contact clamp measurement for safety
  - 4000 counts digital display
  - Multi-function testing capability
  - Data hold function
  - Compact and ergonomic design
  - Comes with storage bag
  - Reliable and accurate performance
  - Ideal for professionals and DIY users
  `
   },


   {
     id: 13011,
     name: 'Food Thermometer Probe Digital Cooking Kitchen BBQ',
     category: 'digital-thermometers',
     brand: 'Generic',
     price: 12000,

     images: [
       'assets/img/thermometers/Food Thermometer Probe Digital Cooking Food Kitchen BBQ.jpg',
       'assets/img/thermometers/food-thermometer-2.jpg',
       'assets/img/thermometers/food-thermometer-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Food Thermometer Probe Digital Cooking Kitchen BBQ is a practical and reliable tool designed for accurate temperature measurement in food preparation.It features a stainless steel probe that quickly measures the internal temperature of meat,fish,liquids,and baked goods,helping ensure proper cooking and food safety.The digital display provides clear and fast readings,making it ideal for home kitchens,BBQ grilling,and professional cooking environments.Its compact and lightweight design allows easy handling and storage,making it a must-have tool for chefs,grillers,and home cooks.`,

     specification: `
  - Product Name: Digital Food Thermometer
  - Type: Probe Thermometer
  - Display: Digital LCD
  - Temperature Range: -50°C to 300°C
  - Accuracy: ±1°C
  - Probe Material: Stainless Steel
  - Response Time: Fast (2–5 seconds)
  - Power Supply: Battery operated
  - Usage: Cooking, BBQ, baking, food safety
  `,

     features: `
  - Fast and accurate temperature readings
  - Stainless steel probe for durability
  - Easy-to-read digital display
  - Wide temperature range
  - Suitable for meat, liquids, and baking
  - Portable and lightweight design
  - Ideal for kitchen and BBQ use
  - Helps ensure proper food safety
  `
   },

   {
     id: 13012,
     name: 'Fluke 62 MAX Infrared Thermometer (Non-Contact Temperature Gun)',
     category: 'infrared-thermometers',
     brand: 'Fluke',
     price: 180000,

     images: [
       'assets/img/thermometers/fluke-62-max-infrared-thermometer2.jpg',
       'assets/img/thermometers/fluke-62-max-2.jpg',
       'assets/img/thermometers/fluke-62-max-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Fluke 62 MAX Infrared Thermometer is a rugged and highly accurate non-contact temperature measurement tool designed for industrial and professional use.It allows users to safely measure surface temperature without direct contact,making it ideal for electrical maintenance,HVAC systems,mechanical inspections,and industrial diagnostics.It features single laser targeting for precise measurements and a durable construction that can withstand harsh environments,including drops,dust,and moisture.With its compact design and easy operation,it is widely used by technicians and engineers who require reliable and fast temperature readings.`,

     specification: `
  - Product Name: Infrared Thermometer (Temperature Gun)
  - Brand: Fluke
  - Model: 62 MAX
  - Temperature Range: -30°C to 500°C
  - Accuracy: ±1.5°C or ±1.5% of reading
  - Distance to Spot Ratio: 10:1
  - Laser: Single laser targeting
  - Display: Backlit LCD
  - Response Time: < 500 ms
  - Emissivity: Adjustable (0.10 – 1.00)
  - IP Rating: IP54 (dust and water resistant)
  - Power Supply: 1 x AA Battery
  - Drop Test: Up to 3 meters
  - Usage: Industrial, electrical, HVAC, mechanical diagnostics
  `,

     features: `
  - Non-contact temperature measurement for safety
  - Wide temperature range for industrial applications
  - High accuracy and fast response time
  - Single laser targeting for precise aiming
  - Durable design with IP54 protection
  - Withstands drops up to 3 meters
  - Backlit display for low-light environments
  - Compact and easy-to-use design
  - Suitable for professionals and technicians
  `
   },


   {
     id: 13013,
     name: 'Glass Petrol/Diesel Thermometer',
     category: 'liquid-glass-thermometers',
     brand: 'Generic',
     price: 15000,

     images: [
       'assets/img/thermometers/petrol and desiel thermometer.webp',
       'assets/img/thermometers/glass-petrol-thermometer-2.jpg',
       'assets/img/thermometers/glass-petrol-thermometer-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Glass Petrol/Diesel Thermometer is a traditional liquid-in-glass thermometer designed for measuring the temperature of petroleum products such as petrol and diesel.It is commonly used in fuel storage tanks, laboratories, and industrial environments to monitor temperature changes that may affect fuel density and volume.The thermometer is made of durable glass with a clearly marked scale for accurate readings.It operates without batteries, making it reliable and suitable for field and on-site applications where electronic devices may not be ideal.`,

     specification: `
  - Product Name: Glass Fuel Thermometer
  - Type: Liquid-in-glass thermometer
  - Application: Petrol and diesel temperature measurement
  - Measurement Range: Typically -10°C to 110°C
  - Material: Glass tube
  - Filling: Mercury or alcohol-based liquid
  - Display: Analog scale
  - Power Supply: Not required
  - Usage: Fuel testing, storage monitoring, industrial use
  `,

     features: `
  - Designed for petrol and diesel temperature measurement
  - No battery required for operation
  - Clear and easy-to-read analog scale
  - Suitable for field and industrial use
  - Durable glass construction
  - Reliable and consistent readings
  - Ideal for fuel storage and testing applications
  `
   },

   {
     id: 13014,
     name: 'Ingco 50m Laser Distance Meter',
     category: 'laser-distance-meters',
     brand: 'Ingco',
     price: 65000,

     images: [
       'assets/img/general meters/Ingco 50m Laser Distance Meter.jpg',
       'assets/img/measuring/ingco-laser-distance-50m-2.jpg',
       'assets/img/measuring/ingco-laser-distance-50m-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Ingco 50m Laser Distance Meter is a precision measuring tool designed for fast and accurate distance measurements in construction,engineering,and interior applications.It uses laser technology to measure distances up to 50 meters with high accuracy,making it more efficient than traditional measuring tapes.The device features a clear digital display and supports multiple measurement functions including distance,area,and volume calculations.Its compact and ergonomic design makes it easy to handle and carry,while its durable construction ensures reliability for both professional and DIY use.`,

     specification: `
  - Product Name: Laser Distance Meter
  - Brand: Ingco
  - Measurement Range: Up to 50 meters
  - Accuracy: ±2mm
  - Measurement Units: m / ft / in
  - Functions: Distance, Area, Volume, Continuous Measurement
  - Display: Digital LCD
  - Laser Type: Class II
  - Power Supply: Battery operated
  - Usage: Construction, interior design, engineering measurements
  `,

     features: `
  - Accurate laser measurement up to 50 meters
  - Faster and more efficient than tape measure
  - Multiple measurement modes (distance, area, volume)
  - Clear and easy-to-read digital display
  - Compact and portable design
  - Simple one-button operation
  - Suitable for indoor and outdoor use
  - Ideal for professionals and DIY users
  `
   },


   {
     id: 13015,
     name: 'Fiberglass Measuring Tape - INGCO HFMT8250',
     category: 'measuring-tapes',
     brand: 'Ingco',
     price: 18000,

     images: [
       'assets/img/measuring tapes/ingco fibreglass measuring tape-50m.jpeg',
       'assets/img/measuring/ingco-hfmt8250-2.jpg',
       'assets/img/measuring/ingco-hfmt8250-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO HFMT8250 Fiberglass Measuring Tape is a durable and flexible measuring tool designed for accurate long-distance measurements in construction,surveying,and general field work.It features a strong fiberglass tape that is resistant to stretching,moisture,and corrosion,making it ideal for both indoor and outdoor use.The open reel design allows smooth winding and unwinding,while the ergonomic handle ensures comfortable handling during extended use.It is suitable for professionals and DIY users who require reliable and precise measurement over longer distances.`,

     specification: `
  - Product Name: Fiberglass Measuring Tape
  - Brand: Ingco
  - Model: HFMT8250
  - Tape Length: 50 meters
  - Tape Material: Fiberglass
  - Measurement Units: Metric (meters)
  - Reel Type: Open reel
  - Handle: Ergonomic grip
  - Usage: Construction, surveying, outdoor measurement
  `,

     features: `
  - Strong fiberglass tape for durability
  - Resistant to moisture and corrosion
  - Accurate long-distance measurement
  - Smooth winding mechanism
  - Lightweight and portable design
  - Comfortable ergonomic handle
  - Suitable for indoor and outdoor use
  - Ideal for professionals and DIY users
  `
   },

   {
     id: 13016,
     name: 'INGCO Tape Measure Steel 5Mx19mm-HSMT08519',
     category: 'measuring-tapes',
     brand: 'Ingco',
     price: 7000,

     images: [
       'assets/img/measuring tapes/INGCO  Tape Measure Steel 5Mx19mm.avif',
       'assets/img/measuring/ingco-hsmt08519-1-2.jpg',
       'assets/img/measuring/ingco-hsmt08519-1-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO HSMT08519-1 Steel Tape Measure is a compact and reliable measuring tool designed for everyday use in construction,carpentry,and general household tasks.It features a durable steel blade with clear and easy-to-read markings,ensuring accurate measurements up to 5 meters.The tape is housed in a strong impact-resistant casing with a comfortable grip,making it suitable for both professional and DIY applications.It also includes a locking mechanism to hold measurements securely during use.`,

     specification: `
  - Product Name: Steel Tape Measure
  - Brand: Ingco
  - Model: HSMT08519-1
  - Tape Length: 5 meters
  - Tape Width: 19 mm
  - Blade Material: Steel
  - Measurement Units: Metric
  - Locking Mechanism: Yes
  - Case Material: Durable plastic
  - Usage: Construction, carpentry, general measurement
  `,

     features: `
  - Durable steel blade for long-lasting use
  - Compact and portable design
  - Clear and easy-to-read markings
  - Strong and impact-resistant casing
  - Secure locking mechanism
  - Comfortable grip for easy handling
  - Suitable for professional and DIY use
  - Ideal for indoor measurements
  `
   },


   {
     id: 13017,
     name: 'Mitutoyo Dial Indicator 2046S with Magnetic Base 7011S',
     category: 'dial-indicators',
     brand: 'Mitutoyo',
     price: 95000,

     images: [
       'assets/img/general guages/mitutoyo dial guage indicator with base.webp',
       'assets/img/measuring/mitutoyo-magnetic-base-7011s-2.jpg',
       'assets/img/measuring/mitutoyo-dial-indicator-set-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Mitutoyo Dial Indicator 2046S with Magnetic Base 7011S is a precision measuring instrument used for accurately measuring small linear distances and detecting deviations in mechanical components.It is widely used in machining,engineering,and quality control applications to check alignment,runout,and flatness.The dial indicator features a clear analog display with high sensitivity,while the magnetic base provides a stable and adjustable mounting on metal surfaces for hands-free operation.This combination ensures reliable and precise measurements in workshop and industrial environments.`,

     specification: `
  - Product Name: Dial Indicator with Magnetic Base
  - Brand: Mitutoyo
  - Model: 2046S (Dial Indicator), 7011S (Magnetic Base)
  - Measurement Range: 0 – 10 mm
  - Graduation: 0.01 mm
  - Display: Analog dial
  - Mounting: Magnetic base stand
  - Base Type: Switchable magnetic base
  - Usage: Precision measurement, alignment, machining inspection
  `,

     features: `
  - High-precision measurement capability
  - Clear and easy-to-read analog dial
  - Stable magnetic base for hands-free use
  - Ideal for alignment and runout checks
  - Durable industrial-grade construction
  - Flexible positioning with adjustable arm
  - Suitable for workshop and engineering applications
  - Reliable and accurate performance
  `
   },



   {
     id: 13018,
     name: 'Total TMT47503 Digital Multimeter',
     category: 'multimeters',
     brand: 'Total',
     price: 25000,

     images: [
       'assets/img/multimeters/total multimeters.webp',
       'assets/img/measuring/total-tmt47503-2.jpg',
       'assets/img/measuring/total-tmt47503-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Total TMT47503 Digital Multimeter is a reliable and multifunctional electrical testing device designed for accurate measurement of voltage,current,and resistance.It is suitable for household repairs,industrial maintenance,and automotive diagnostics.The device features a clear digital display and supports multiple testing functions including AC/DC voltage,current,resistance,continuity,and diode testing.Its compact and durable design ensures ease of use and portability,making it ideal for electricians,technicians,and DIY users who require precise and efficient electrical measurements.`,

     specification: `
  - Product Name: Digital Multimeter
  - Brand: Total
  - Model: TMT47503
  - Display: Digital LCD
  - DC Voltage Range: 200mV – 600V
  - AC Voltage Range: 200V – 600V
  - DC Current Range: 200µA – 10A
  - AC Current Range: 200µA – 10A
  - Resistance Range: 200Ω – 20MΩ
  - Continuity Test: Yes (with buzzer)
  - Diode Test: Yes
  - Data Hold: Yes
  - Overload Protection: Yes
  - Power Supply: 9V Battery
  - Usage: Electrical testing, troubleshooting, maintenance
  `,

     features: `
  - Wide voltage measurement range (AC/DC up to 600V)
  - Accurate current measurement up to 10A
  - Multi-function testing (voltage, current, resistance, diode, continuity)
  - Clear digital display for easy reading
  - Built-in buzzer for continuity testing
  - Data hold function for convenience
  - Compact and portable design
  - Overload protection for safety
  - Suitable for professionals and DIY users
  `
   },


   {
     id: 13019,
     name: 'Maxmech Battery Charger BC650 – 12V/24V Heavy Duty Booster',
     category: 'battery-chargers',
     brand: 'Maxmech',
     price: 150000,


     images: [
       'assets/img/battery and battery chargers/maxmech cd 650-battery tester.jpg',
       'assets/img/chargers/maxmech-bc650-2.jpg',
       'assets/img/chargers/maxmech-bc650-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `
The Maxmech BC650 Battery Charger is a heavy-duty professional charger designed for charging and boosting 12V and 24V lead-acid batteries. It is suitable for cars, trucks, agricultural equipment, and industrial applications.
This charger features a powerful boost function that allows for quick charging and engine starting support, making it ideal for workshops, mechanics, and fleet operators.
Built with a durable and portable design, it comes with wheels and handles for easy movement, especially in workshop environments. The charger includes an ampere meter for monitoring charging levels and a selector switch for normal or fast charging modes.
With support for both 12V and 24V systems, the BC650 is versatile enough to handle a wide range of vehicles, from small cars to heavy-duty trucks. It also features strong insulated clamps for secure and safe battery connection.
This charger is reliable, efficient, and essential for automotive and industrial battery maintenance.
`,

     specification: `
  - Product Name: Battery Charger Booster
  - Model: BC650
  - Voltage: 12V / 24V
  - Input Voltage: 230V
  - Frequency: 50Hz
  - Charging Capacity: Up to 1000Ah
  - Charging Current: Approx. 60–75A
  - Boost Function: Yes (engine start support)
  - Display: Analog ampere meter
  - Mobility: Wheels and handle
  - Battery Type: Lead-acid / Sealed lead-acid
  - Usage: Cars, trucks, industrial batteries
  `,

     features: `
  - Dual voltage (12V/24V) compatibility
  - Heavy-duty charging and boost function
  - Fast and efficient battery charging
  - Built-in ampere meter for monitoring
  - Durable and portable with wheels
  - Strong insulated clamps for safety
  - Suitable for cars, trucks, and heavy equipment
  - Reliable for workshop and industrial use
  - Easy-to-use control system
  `
   },


   



   {
     id: 13020,
     name: 'Digital Outside Micrometer Screw Gauge 0-25mm',
     category: 'digital-micrometers',
     brand: 'Generic',
     price: 45000,

     images: [
       'assets/img/general guages/Instruments Digital Outside Micrometer Screw Gauge 0-25mm.jpg',
       'assets/img/measuring/digital-micrometer-0-25-2.jpg',
       'assets/img/measuring/digital-micrometer-0-25-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Digital Outside Micrometer Screw Gauge 0-25mm is a high-precision measuring instrument designed for accurately measuring the external dimensions of small objects such as shafts,wires,and mechanical components.It features a digital display that provides quick and easy readings with high accuracy,eliminating the need for manual scale interpretation.The device is widely used in machining,engineering,and quality control applications where precise measurements are critical.Its robust construction and ergonomic design ensure durability and ease of use in professional and workshop environments.`,

     specification: `
  - Product Name: Digital Outside Micrometer
  - Type: Screw Gauge (External Measurement)
  - Measurement Range: 0 – 25 mm
  - Resolution: 0.001 mm
  - Accuracy: ±0.002 mm
  - Display: Digital LCD
  - Units: mm / inch (switchable)
  - Measuring Faces: Hardened steel
  - Spindle: Precision ground
  - Ratchet Stop: Yes (for consistent pressure)
  - Power Supply: Button cell battery
  - Usage: Precision external measurement, machining, inspection
  `,

     features: `
  - High precision measurement up to 0.001 mm resolution
  - Clear digital display for easy reading
  - Switchable units (mm/inch)
  - Ratchet stop for consistent measurement force
  - Durable hardened steel measuring faces
  - Smooth spindle movement for accuracy
  - Compact and ergonomic design
  - Ideal for engineering, machining, and quality control
  - Reliable and repeatable measurements
  `
   },


   {
     id: 13021,
     name: 'Micrometer Screw Gauge 0-25mm Accuracy 0.01mm (Analogue)',
     category: 'analogue-micrometers',
     brand: 'Generic',
     price: 25000,

     images: [
       'assets/img/general guages/Micrometer Screw Gauge 25mm Accuracy 0.01mm analogue.jpg',
       'assets/img/measuring/analogue-micrometer-0-25-2.jpg',
       'assets/img/measuring/analogue-micrometer-0-25-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Micrometer Screw Gauge 0-25mm Analogue is a precision measuring instrument designed for accurately measuring the external dimensions of small components such as rods,wires,and mechanical parts.It features a finely graduated scale that allows precise readings without the need for batteries,making it highly reliable for workshop and industrial use.This tool is commonly used in machining,engineering,and quality control applications where consistent and repeatable measurements are essential.The durable construction and smooth spindle mechanism ensure long-lasting performance and accuracy.`,

     specification: `
  - Product Name: Outside Micrometer Screw Gauge
  - Type: Analogue (Manual Reading)
  - Measurement Range: 0 – 25 mm
  - Accuracy: 0.01 mm
  - Graduation: 0.01 mm
  - Display: Sleeve and thimble scale
  - Measuring Faces: Hardened steel
  - Spindle: Precision ground
  - Ratchet Stop: Yes
  - Lock Nut: Yes
  - Power Supply: Not required
  - Usage: External measurement, machining, inspection
  `,

     features: `
  - High precision analogue measurement
  - No battery required (fully mechanical)
  - Durable hardened steel measuring faces
  - Smooth spindle movement for accuracy
  - Ratchet stop ensures consistent measuring force
  - Lock nut for holding measurement position
  - Compact and rugged design
  - Ideal for workshops, engineering, and quality control
  - Reliable and long-lasting performance
  `
   },

   {
     id: 13022,
     name: 'Single Phase Non-Contact AC Voltage Tester Pen AC-8 (12–1000V)',
     category: 'general-testers',
     brand: 'Generic',
     price: 8000,

     images: [
       'assets/img/generaltesters/Single Phase Non-Contact AC Voltage Tester Pen AC-8 (12–1000V).jpg',
       'assets/img/testers/ac-voltage-tester-pen-2.jpg',
       'assets/img/testers/ac-voltage-tester-pen-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The AC-8 Non-Contact Voltage Tester Pen is a compact and reliable tool designed for safely detecting AC voltage without direct contact with electrical conductors.It is capable of detecting voltage in the range of 12V to 1000V,making it suitable for household,commercial,and industrial electrical testing.The device provides visual and audible alerts when voltage is present,ensuring user safety during operation.Its pen-style design makes it easy to carry and use,while the non-contact feature eliminates the risk of electric shock,making it ideal for electricians,technicians,and DIY users.`,

     specification: `
  - Product Name: Non-Contact Voltage Tester Pen
  - Model: AC-8
  - Voltage Detection Range: AC 12V – 1000V
  - Frequency Range: 50/60 Hz
  - Detection Type: Non-contact
  - Indicator: LED light + buzzer alarm
  - Sensitivity: Adjustable (varies by model)
  - Safety Category: CAT II / CAT III (varies by manufacturer)
  - Power Supply: 2 x AAA batteries
  - Usage: Electrical testing, live wire detection, troubleshooting
  `,

     features: `
  - Non-contact voltage detection for safety
  - Wide detection range (12V to 1000V AC)
  - Audible and visual alerts
  - Pen-style compact and portable design
  - Easy one-button operation
  - Suitable for quick live wire testing
  - Ideal for electricians and DIY users
  - Helps prevent electrical hazards
  `
   },

   {
     id: 13023,
     name: 'HVAC Manifold Gauge Set (Refrigeration Pressure Gauge Kit)',
     category: 'general-guage',
     brand: 'Generic',
     price: 85000,

     images: [
       'assets/img/general guages/manifold guga.jpg',
       'assets/img/hvac/manifold-gauge-set-2.jpg',
       'assets/img/hvac/manifold-gauge-set-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The HVAC Manifold Gauge Set is a professional diagnostic tool used for measuring pressure in refrigeration and air conditioning systems.It is essential for servicing,charging,and troubleshooting HVAC systems.The set typically includes dual pressure gauges for high and low pressure readings,along with color-coded hoses for easy connection to the system.It is widely used by HVAC technicians for refrigerant charging,leak detection,and system performance evaluation.The durable construction ensures reliable operation in demanding work environments.`,

     specification: `
  - Product Name: Manifold Gauge Set
  - Type: HVAC Refrigeration Pressure Gauge Kit
  - Gauges: Dual (High Pressure & Low Pressure)
  - Pressure Range: 
      Low Side: -30 inHg to 120 psi
      High Side: 0 to 500 psi
  - Refrigerant Compatibility: R134a / R22 / R410a (varies by model)
  - Hose Length: Approx. 90 cm (3 hoses)
  - Hose Colors: Blue (low), Red (high), Yellow (charging)
  - Connection Type: Standard 1/4" SAE fittings
  - Display: Analog dial gauges
  - Usage: HVAC servicing, refrigerant charging, diagnostics
  `,

     features: `
  - Dual gauge system for high and low pressure readings
  - Suitable for multiple refrigerants
  - Color-coded hoses for easy identification
  - Durable and heavy-duty construction
  - Accurate pressure measurement
  - Ideal for AC and refrigeration maintenance
  - Easy connection and operation
  - Widely used by HVAC professionals
  `
   },


   {
     id: 13024,
     name: 'Water Quality Tester(pH/TDS/EC/Salinity/Temperature)',
     category: 'water-testers',
     brand: 'Generic',
     price: 65000,

     images: [
       'assets/img/generaltesters/water testers.webp',
       'assets/img/testers/water-quality-tester-2.jpg',
       'assets/img/testers/water-quality-tester-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 5-in-1 Water Quality Tester is a multifunctional digital device designed for accurate measurement of key water parameters including pH,TDS (Total Dissolved Solids),EC (Electrical Conductivity),salinity,and temperature.It is widely used in drinking water testing,aquariums,swimming pools,hydroponics,and industrial water analysis.The device features a clear digital display and provides fast and reliable readings,making it suitable for both professional and home use.Its portable design allows easy handling and on-site testing.`,

     specification: `
  - Product Name: 5-in-1 Water Quality Tester
  - Type: Digital Water Tester
  - Parameters Measured: pH, TDS, EC, Salinity, Temperature
  - pH Range: 0.00 – 14.00 pH
  - TDS Range: 0 – 9990 ppm
  - EC Range: 0 – 9990 µS/cm
  - Salinity Range: 0.01% – 25%
  - Temperature Range: 0°C – 60°C
  - Accuracy: ±0.01 pH / ±2% (varies by parameter)
  - Display: Digital LCD
  - Calibration: Automatic or manual (model dependent)
  - Power Supply: Battery operated
  - Usage: Water testing, aquariums, pools, hydroponics, laboratories
  `,

     features: `
  - 5-in-1 multifunction water testing
  - Accurate and fast measurement
  - Easy-to-read digital display
  - Portable and lightweight design
  - Suitable for multiple water applications
  - Simple calibration process
  - Durable and reliable performance
  - Ideal for home and professional use
  `
   },


   {
     id: 13025,
     name: 'Digital Alcohol Breath Tester (Breathalyzer)',
     category: 'alcohol-testers',
     brand: 'Generic',
     price: 18000,

     images: [
       'assets/img/generaltesters/alcohol tester.jpg',
       'assets/img/testers/alcohol-tester-2.jpg',
       'assets/img/testers/alcohol-tester-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Digital Alcohol Breath Tester is a portable device designed to measure blood alcohol content (BAC) through breath analysis.It provides quick and reliable results,making it suitable for personal use,workplace safety checks,and law enforcement screening.The device features a clear digital display and simple one-button operation,allowing users to easily test alcohol levels before driving or performing safety-sensitive tasks.Its compact and lightweight design makes it convenient to carry and use anywhere.`,

     specification: `
  - Product Name: Digital Alcohol Breath Tester
  - Type: Breathalyzer
  - Measurement Method: Breath analysis
  - BAC Range: 0.00% – 0.19% BAC
  - Accuracy: ±0.01% BAC
  - Sensor Type: Semiconductor sensor
  - Display: Digital LCD
  - Warm-up Time: 10 – 20 seconds
  - Response Time: < 5 seconds
  - Alert: Audible and visual warning
  - Power Supply: Battery operated (AAA)
  - Usage: Personal testing, workplace safety, screening
  `,

     features: `
  - Fast and accurate BAC measurement
  - Easy-to-read digital display
  - Quick response and warm-up time
  - Compact and portable design
  - Audible alert for high alcohol levels
  - Simple one-button operation
  - Suitable for personal and professional use
  - Helps promote safety and responsible behavior
  `
   },


   {
     id: 13026,
     name: 'ATC Pocket Electric Digital pH Meter',
     category: 'water-testers',
     brand: 'Generic',
     price: 12000,

     images: [
       'assets/img/welding machines/arc welding 500.png',
       'assets/img/testers/ph-meter-2.jpg',
       'assets/img/testers/ph-meter-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The ATC Pocket Electric Digital pH Meter is a compact and portable device designed for accurate measurement of pH levels in liquids.It is widely used for water quality testing in applications such as drinking water,aquariums,hydroponics,swimming pools,and laboratories.The device features Automatic Temperature Compensation (ATC),which ensures accurate readings even when the temperature of the liquid changes.With a clear digital display and simple operation,it provides fast and reliable results for both professionals and home users.`,

     specification: `
  - Product Name: Digital pH Meter
  - Type: Pocket pH Tester
  - Measurement Range: 0.00 – 14.00 pH
  - Resolution: 0.01 pH
  - Accuracy: ±0.01 pH
  - Temperature Compensation: Automatic (ATC)
  - Operating Temperature: 0°C – 60°C
  - Display: Digital LCD
  - Calibration: Manual (using buffer solutions)
  - Power Supply: Battery operated (button cells)
  - Usage: Water testing, aquariums, hydroponics, pools, laboratories
  `,

     features: `
  - High accuracy pH measurement
  - Automatic Temperature Compensation (ATC)
  - Compact and portable design
  - Easy-to-read digital display
  - Fast and reliable results
  - Simple calibration process
  - Suitable for various water testing applications
  - Ideal for home and professional use
  `
   },



   {
     id: 13027,
     name: 'Digital Concrete Test Hammer (Rebound Hammer)',
     category: 'concrete-testers',
     brand: 'Generic',
     price: 180000,

     images: [
       'assets/img/generaltesters/concrete testers.webp',
       'assets/img/testers/concrete-test-hammer-2.jpg',
       'assets/img/testers/concrete-test-hammer-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Digital Concrete Test Hammer,also known as a rebound hammer,is a non-destructive testing device used to assess the compressive strength and surface hardness of concrete.It is widely used in construction,engineering,and structural inspection to evaluate the quality and uniformity of concrete structures without causing damage.The digital version provides more accurate and easy-to-read results compared to analogue models,with data storage and automatic calculation features.Its rugged design ensures reliable performance on construction sites and in field conditions.`,

     specification: `
  - Product Name: Digital Concrete Test Hammer
  - Type: Rebound Hammer (Non-destructive testing)
  - Measuring Range: 10 – 60 MPa (compressive strength)
  - Impact Energy: 2.207 Nm
  - Display: Digital LCD
  - Accuracy: ±1.5 MPa (typical)
  - Data Storage: Yes (model dependent)
  - Calibration: Factory calibrated / adjustable
  - Power Supply: Rechargeable or battery operated
  - Usage: Concrete strength testing, structural inspection
  `,

     features: `
  - Non-destructive concrete testing
  - Digital display for easy and accurate readings
  - Measures compressive strength and surface hardness
  - Portable and easy to use on-site
  - Durable construction for field work
  - Data storage and analysis (model dependent)
  - Faster and more reliable than analogue models
  - Ideal for engineers, inspectors, and construction professionals
  `
   },

   {
     id: 13028,
     name: 'Digital Grain Moisture Meter',
     category: 'moisture-testers',
     brand: 'Generic',
     price: 95000,

     images: [
       'assets/img/general meters/grain moisture meter.jpg',
       'assets/img/testers/grain-moisture-meter-2.jpg',
       'assets/img/testers/grain-moisture-meter-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Digital Grain Moisture Meter is a specialized testing device designed to measure the moisture content of grains such as maize,rice,wheat,and beans.It is widely used in agriculture,storage facilities,and food processing to ensure proper drying and prevent spoilage or mold growth.The device provides fast and accurate readings through a digital display,making it easy to monitor grain quality during harvesting,storage,and trading.Its portable design allows for convenient field use by farmers and agricultural professionals.`,

     specification: `
  - Product Name: Grain Moisture Meter
  - Type: Digital Moisture Tester
  - Measurement Range: 5% – 40% (varies by grain type)
  - Accuracy: ±0.5% (typical)
  - Resolution: 0.1%
  - Supported Grains: Maize, rice, wheat, beans, etc.
  - Display: Digital LCD
  - Sampling Method: Probe or cup type (model dependent)
  - Temperature Compensation: Yes (ATC)
  - Power Supply: Battery operated
  - Usage: Agriculture, grain storage, food processing
  `,

     features: `
  - Fast and accurate moisture measurement
  - Suitable for multiple grain types
  - Easy-to-read digital display
  - Portable and lightweight design
  - Helps prevent spoilage and mold
  - Temperature compensation for better accuracy
  - Simple operation for field use
  - Ideal for farmers, traders, and agricultural professionals
  `
   },



   {
     id: 13029,
     name: 'INGCO Spirit Level 30cm HSL08030',
     category: 'spirit-levels',
     brand: 'INGCO',
     price: 12000, // adjust based on your selling price

     images: [
       'assets/img/lasers and measurement tools/ingco spirit level 30cm.jpg',
       'assets/img/measuring/spirit-level-30cm-2.jpg',
       'assets/img/measuring/spirit-level-30cm-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Spirit Level 30cm HSL08030 is a precision measuring tool designed to check and ensure accurate horizontal and vertical alignment during construction, installation, and DIY tasks. Built with a durable aluminum frame, it provides strength and long-lasting performance on job sites. The level features clear, high-visibility vials for easy reading, making it suitable for both professionals and home users. Its compact 30cm size makes it convenient for tight spaces and portable for everyday use.`,

     specification: `
  - Product Name: Spirit Level
  - Model: HSL08030
  - Brand: INGCO
  - Length: 30cm (300mm)
  - Material: Aluminum body
  - Vials: 3 (Horizontal, Vertical, 45°)
  - Accuracy: ±1.0mm/m
  - Surface: Smooth milled measuring surface
  - Design: Lightweight and durable
  - Usage: Construction, carpentry, installation, DIY
  `,

     features: `
  - High accuracy leveling measurement
  - Durable aluminum construction
  - 3 easy-to-read bubble vials
  - Compact and portable 30cm size
  - Smooth measuring surface for precise contact
  - Shock-resistant design for job site use
  - Ideal for carpenters, builders, and technicians
  - Suitable for both professional and home use
  `
   },


   {
     id: 13030,
     name: 'PRO GOL 32 D Optical Level',
     category: 'dumpy-levels',
     brand: 'Bosch',
     price: 280000, // adjust based on your market price

     images: [
       'assets/img/lasers and measurement tools/BOSCH PRO GOL 32 D.webp',
       'assets/img/measuring/optical-level-2.jpg',
       'assets/img/measuring/optical-level-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The PRO GOL 32 D Optical Level is a high-precision surveying instrument designed for accurate leveling, height measurement, and alignment tasks in construction and engineering projects. Built with a robust and durable housing, it is ideal for outdoor use, offering reliable performance even in harsh environments. With its powerful 32x magnification and clear optics, the device ensures sharp and precise readings over long distances. It is widely used by surveyors, builders, and civil engineers for professional leveling applications.`,

     specification: `
  - Product Name: Optical Level
  - Model: GOL 32 D
  - Brand: Bosch Professional
  - Magnification: 32x
  - Accuracy: ±1.0 mm at 30 m
  - Working Range: Up to 120 m
  - Unit of Measure: 360° horizontal circle
  - Tripod Mount: 5/8" thread
  - Protection Rating: IP54 (dust & splash resistant)
  - Operating Temperature: -10°C to +50°C
  - Storage Temperature: -20°C to +70°C
  - Weight: Approx. 1.5 kg
  - Image Type: Erect image
  - Minimum Focusing Distance: ~0.3 m
  - Application: Surveying, construction leveling, civil engineering
  `,

     features: `
  - High 32x magnification for long-distance precision measurements
  - Accurate leveling with ±1.0 mm accuracy at 30 m
  - Durable and rugged design for outdoor job sites
  - IP54 protection against dust and water splashes
  - Clear and sharp optics for easy target viewing
  - Compensator lock for safe transport and stability
  - Large focusing knob for smooth and easy adjustment
  - Horizontal circle for angle measurement (360°)
  - Compatible with standard 5/8" tripods
  - Ideal for surveyors, engineers, and construction professionals
  `
   },


   {
     id: 13031,
     name: 'Bosch BT160 Lightweight Tripod',
     category: 'survey-tripod',
     brand: 'Bosch',
     price: 110000, // adjust to your selling price

     images: [
       'assets/img/lasers and measurement tools/Bosch BT160 Lightweight tripod.webp',
       'assets/img/measuring/bosch-bt160-2.jpg',
       'assets/img/measuring/bosch-bt160-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Bosch BT160 Lightweight Tripod is a durable and stable support accessory designed for use with optical levels, laser levels, and other surveying instruments. Built with a strong aluminum construction, it provides excellent stability on job sites while remaining lightweight for easy transportation. Its adjustable height and quick-locking legs allow for fast setup and precise positioning. Ideal for construction, surveying, and engineering applications, the BT160 ensures reliable performance in both indoor and outdoor environments.`,

     specification: `
  - Product Name: Tripod Stand
  - Model: BT160
  - Brand: Bosch Professional
  - Material: Aluminum
  - Working Height: 97 cm – 160 cm
  - Maximum Height: 160 cm
  - Closed Height: 97 cm
  - Thread Mount: 5/8" - 11
  - Weight: Approx. 4.1 kg
  - Head Type: Flat head
  - Compatibility: Optical levels, laser levels, rotary lasers
  - Usage: Surveying, construction, leveling applications
  `,

     features: `
  - Lightweight aluminum design for easy transport
  - Strong and durable construction for job site use
  - Adjustable height for flexible working positions
  - Quick-locking legs for fast and secure setup
  - High stability on different surfaces
  - Standard 5/8" thread for wide compatibility
  - Shoulder strap for convenient carrying
  - Suitable for both indoor and outdoor applications
  - Ideal for surveyors, engineers, and construction professionals
  `
   },


   {
     id: 13032,
     name: 'PRO GLL 3-80 Line Laser',
     category: 'laser-levels',
     brand: 'Bosch',
     price: 550000, // adjust based on your market

     images: [
       'assets/img/lasers and measurement tools/BOSCH PRO GLL 3-80  Laser.webp',
       'assets/img/measuring/gll-3-80-2.jpg',
       'assets/img/measuring/gll-3-80-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The PRO GLL 3-80 Line Laser is a high-performance professional leveling tool designed for precise alignment, layout, and installation tasks. It projects three full 360° laser lines (one horizontal and two vertical), allowing simultaneous leveling across an entire room for maximum efficiency. Built for construction and interior finishing work, it delivers high accuracy and excellent visibility using powerful laser diodes. Its self-leveling system ensures quick setup, while the rugged IP54-rated design makes it suitable for tough job site conditions.`,

     specification: `
  - Product Name: Line Laser
  - Model: GLL 3-80
  - Brand: Bosch Professional
  - Laser Type: Red laser (630 – 650 nm)
  - Laser Class: Class 2
  - Projection: 3 x 360° lines (1 horizontal, 2 vertical)
  - Working Range: Up to 30 m
  - Working Range with Receiver: Up to 120 m
  - Accuracy: ±0.3 mm/m
  - Self-Levelling Range: ±4°
  - Levelling Time: Approx. 4 seconds
  - Tripod Mount: 1/4" and 5/8"
  - Protection Rating: IP54 (dust & splash resistant)
  - Power Supply: 4 x 1.5V AA batteries
  - Operating Time: Up to 4 hours (3-line mode)
  - Operating Temperature: -10°C to +40°C
  - Weight: Approx. 0.82 kg
  `,

     features: `
  - Projects 3 x 360° laser lines for full-room coverage
  - High accuracy of ±0.3 mm/m for precise alignment
  - Self-leveling system for quick and easy setup
  - Extended range up to 120 m with receiver
  - Durable IP54 design for job site conditions
  - Bright and clear laser lines for improved visibility
  - Dual tripod compatibility (1/4" & 5/8")
  - Compact and lightweight for easy transport
  - Ideal for tiling, drywall, ceiling installation, and framing
  - Suitable for professionals in construction and interior finishing
  `
   },


   {
     id: 13033,
     name: '50KG Pocket Spring Balance Hook Weighing Scale (Kg & Lbs)',
     category: 'spring-balances',
     brand: 'Generic',
     price: 8500, // adjust to your selling price

     images: [
       'assets/img/scales/Spring Balance Hook Weighing Scale Kilo & LBS.jpg',
       'assets/img/measuring/spring-balance-2.jpg',
       'assets/img/measuring/spring-balance-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 50KG Pocket Spring Balance Hook Weighing Scale is a compact and reliable mechanical weighing tool designed for quick and easy weight measurement. It uses a durable internal spring mechanism to provide accurate readings without the need for batteries. Featuring a sturdy metal hook and clear dual-scale markings in kilograms (kg) and pounds (lbs), it is ideal for weighing luggage, farm produce, fishing catches, and general household items. Its lightweight and portable design makes it perfect for everyday use both at home and in the field.`,

     specification: `
  - Product Name: Spring Balance Weighing Scale
  - Capacity: 50kg / 110lbs
  - Measurement Units: Kilograms (kg) and Pounds (lbs)
  - Type: Mechanical (Spring-based)
  - Accuracy: ±1% (approx.)
  - Material: Metal body with steel hook
  - Display: Analog scale (dual marking)
  - Hook Type: Heavy-duty hanging hook
  - Power Supply: Not required (no batteries)
  - Design: Portable and handheld
  - Usage: Luggage, fishing, farming, market use
  `,

     features: `
  - Measures up to 50kg / 110lbs capacity
  - Dual unit display (kg & lbs)
  - No battery required – fully mechanical operation
  - Strong and durable metal hook
  - Compact and lightweight for portability
  - Easy-to-read analog scale markings
  - Reliable for outdoor and field use
  - Ideal for travel, fishing, farming, and household tasks
  `
   },



   {
     id: 13034,
     name: 'Triple Beam Balance Mechanical Weighing Scale',
     category: 'beam-balances',
     brand: 'Generic',
     price: 75000, // adjust based on your selling price

     images: [
       'assets/img/scales/Triple Beam Balance.webp',
       'assets/img/measuring/triple-beam-balance-2.jpg',
       'assets/img/measuring/triple-beam-balance-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Triple Beam Balance is a precision mechanical weighing instrument designed for accurate mass measurement in laboratories, schools, and industrial environments. It operates without electricity, using a system of three calibrated beams and sliding weights to determine the mass of an object. Known for its reliability and durability, this balance provides highly accurate readings and is ideal for scientific experiments, educational use, and quality control applications. Its sturdy construction ensures long-term performance and consistent results.`,

     specification: `
  - Product Name: Triple Beam Balance
  - Type: Mechanical weighing scale
  - Capacity: 610g (with auxiliary weights up to 2610g depending on model)
  - Readability: 0.1g
  - Accuracy: ±0.1g
  - Beam Type: Triple beam with sliding riders
  - Material: Metal base with stainless steel pan
  - Calibration: Manual (zero adjustment knob)
  - Display: Analog (graduated scale)
  - Power Supply: Not required
  - Usage: Laboratory, schools, industrial measurement
  `,

     features: `
  - High precision measurement up to 0.1g readability
  - Triple beam design for accurate mass determination
  - No electricity required – fully mechanical operation
  - Durable metal construction for long-term use
  - Easy manual calibration with zero adjustment knob
  - Clear graduated scale for easy reading
  - Stable base reduces measurement errors
  - Suitable for laboratory experiments and educational use
  - Ideal for schools, labs, and quality control environments
  `
   },


   {
     id: 13035,
     name: 'Analog Platform Mechanical Scale – 300kg Capacity',
     category: 'mechanical-platform-scale',
     brand: 'Generic',
     price: 180000, // adjust based on your market price

     images: [
       'assets/img/scales/Analog Platform Mechanical Scale - 300kg.avif',
       'assets/img/measuring/platform-scale-300kg-2.jpg',
       'assets/img/measuring/platform-scale-300kg-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Analog Platform Mechanical Scale – 300kg is a heavy-duty weighing solution designed for industrial, commercial, and agricultural use. Built with a strong steel platform and a reliable mechanical weighing system, it delivers accurate weight measurements without the need for electricity. The large analog dial ensures easy reading of measurements, while the wide platform accommodates bulky and heavy items. Ideal for warehouses, markets, farms, and logistics operations, this scale offers durability, stability, and consistent performance in demanding environments.`,

     specification: `
  - Product Name: Platform Weighing Scale
  - Type: Mechanical (Analog)
  - Capacity: 300kg
  - Measurement Units: Kilograms (kg)
  - Accuracy: ±0.5% (approx.)
  - Platform Material: Heavy-duty steel
  - Display: Large analog dial
  - Base: Reinforced metal frame
  - Power Supply: Not required
  - Operation: Manual
  - Usage: Industrial, warehouse, farm, market
  `,

     features: `
  - High capacity up to 300kg for heavy loads
  - Durable steel platform for long-lasting use
  - No electricity required – fully mechanical
  - Large easy-to-read analog display
  - Stable and sturdy base for accurate measurements
  - Suitable for bulky and oversized items
  - Reliable performance in tough environments
  - Low maintenance and easy to operate
  - Ideal for warehouses, farms, and commercial use
  `
   },



   {
     id: 13036,
     name: 'Electronic Analytical Laboratory Balance – 220g x 0.0001g (0.1mg)',
     category: 'analytical-balances',
     brand: 'Generic',
     price: 950000, // adjust based on your market

     images: [
       'assets/img/scales/Electronic Analytical Lab Weighing Balance - 220g X 0.0001mg.webp',
       'assets/img/measuring/analytical-balance-2.jpg',
       'assets/img/measuring/analytical-balance-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Electronic Analytical Laboratory Balance – 220g x 0.0001g is a high-precision weighing instrument designed for laboratories, research facilities, and quality control environments. It delivers ultra-accurate measurements with a readability of 0.1mg, making it ideal for sensitive applications such as chemical analysis, pharmaceutical work, and scientific experiments. Equipped with a draft shield to eliminate air interference and a digital display for clear readings, this balance ensures stable and reliable results. Its advanced calibration system and precision sensors provide consistent accuracy for professional use.`,

     specification: `
  - Product Name: Analytical Balance
  - Capacity: 220g
  - Readability: 0.0001g (0.1mg)
  - Accuracy: ±0.0002g (typical)
  - Calibration: Internal or external (model dependent)
  - Display: Digital LCD
  - Pan Size: Approx. 80–90mm diameter
  - Draft Shield: Yes (glass enclosure)
  - Response Time: 2–5 seconds
  - Units: g, mg, ct, oz (varies by model)
  - Power Supply: AC adapter
  - Operating Environment: Stable lab conditions required
  - Usage: Laboratory, research, pharmaceuticals, quality control
  `,

     features: `
  - Ultra-high precision measurement (0.1mg readability)
  - Glass draft shield reduces air interference
  - Fast stabilization and accurate results
  - Digital display for clear and easy reading
  - Advanced calibration system for consistent accuracy
  - Multiple weighing units for flexibility
  - Compact and professional laboratory design
  - Stable weighing performance for sensitive samples
  - Ideal for chemical, pharmaceutical, and research applications
  `
   },



   {
     id: 13037,
     name: 'A-12 Digital Platform Scale – 500KG Capacity',
     category: 'platform-scales',
     brand: 'Generic',
     price: 220000, // adjust based on your market price

     images: [
       'assets/img/scales/A-12 Digital Platform Scale - 500KG.webp',
       'assets/img/measuring/a12-platform-scale-2.jpg',
       'assets/img/measuring/a12-platform-scale-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The A-12 Digital Platform Scale – 500KG is a high-capacity electronic weighing solution designed for industrial, warehouse, and commercial applications. It features a strong metal platform combined with a precision load cell system to deliver fast and accurate weight measurements. The digital indicator provides clear readings and supports multiple functions such as tare, zero, and unit conversion. Built for durability and heavy-duty performance, this scale is ideal for weighing large and bulky goods in markets, logistics operations, and storage facilities.`,

     specification: `
  - Product Name: Digital Platform Scale
  - Model: A-12
  - Capacity: 500kg
  - Accuracy: ±0.1% (typical)
  - Display: Digital LED/LCD indicator (model dependent)
  - Units: kg (primary), optional lb
  - Platform Material: Heavy-duty steel
  - Sensor Type: High-precision load cell
  - Functions: Tare, Zero, Unit conversion
  - Power Supply: Rechargeable battery & AC power
  - Battery Backup: Yes
  - Indicator: External display with control panel
  - Usage: Warehouse, logistics, market, industrial
  `,

     features: `
  - High weighing capacity up to 500kg
  - Accurate digital measurement with load cell technology
  - Clear and easy-to-read digital display
  - Rechargeable battery for portable use
  - Durable steel platform for heavy loads
  - Tare and zero functions for convenience
  - Stable performance for industrial applications
  - Suitable for bulky and large items
  - Ideal for warehouses, shops, and logistics operations
  `
   },

   {
     id: 13038,
     name: '20KG Mechanical Weighing Scale with Stainless Steel Bowl – Heavy-Duty',
     category: 'analogue-kitchen-scales',
     brand: 'Generic',
     price: 35000, // adjust based on your market price

     images: [
       'assets/img/scales/20kg Mechanical Weighing Scale –.jpg',
       'assets/img/measuring/mechanical-scale-20kg-2.jpg',
       'assets/img/measuring/mechanical-scale-20kg-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 20KG Mechanical Weighing Scale with Stainless Steel Bowl is a reliable and durable weighing solution designed for everyday commercial and household use. It features a strong mechanical spring system that delivers accurate measurements without the need for electricity. The included stainless steel bowl is ideal for weighing food items such as grains, vegetables, meat, and other produce. With a clear analog dial for easy reading and a sturdy construction, this scale is perfect for markets, kitchens, and small businesses.`,

     specification: `
  - Product Name: Mechanical Weighing Scale
  - Capacity: 20kg
  - Measurement Units: Kilograms (kg)
  - Type: Mechanical (Spring-based)
  - Accuracy: ±1% (approx.)
  - Bowl Material: Stainless steel
  - Body Material: Metal with plastic dial cover
  - Display: Analog dial
  - Power Supply: Not required
  - Operation: Manual
  - Usage: Kitchen, market, food processing
  `,

     features: `
  - Weighs up to 20kg capacity
  - Durable stainless steel bowl for food items
  - No electricity required – fully mechanical
  - Easy-to-read analog dial display
  - Strong and stable construction
  - Ideal for food weighing and market use
  - Low maintenance and long-lasting performance
  - Portable and easy to use
  - Suitable for home kitchens and small businesses
  `
   },



   {
     id: 13039,
     name: 'High Precision Electronic Digital Kitchen Scale – 10KG Capacity',
     category: 'kitchen-scales',
     brand: 'Generic',
     price: 18000, // adjust based on your market price

     images: [
       'assets/img/scales/High Precision Electronic Digital Kitchen Scale - 10kg Capacity.jpg',
       'assets/img/measuring/digital-kitchen-scale-2.jpg',
       'assets/img/measuring/digital-kitchen-scale-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The High Precision Electronic Digital Kitchen Scale – 10KG is a versatile and accurate weighing device designed for home kitchens, bakeries, and small food businesses. It uses advanced sensor technology to deliver precise weight measurements, making it ideal for cooking, baking, and portion control. The clear digital display ensures easy reading, while the compact design allows for convenient storage. With multiple unit options and a tare function, this scale offers flexibility and efficiency for everyday use.`,

     specification: `
  - Product Name: Digital Kitchen Scale
  - Capacity: 10kg
  - Accuracy: ±1g
  - Minimum Weight: 1g
  - Display: Digital LCD
  - Units: g, kg, lb, oz
  - Sensor Type: High-precision load sensor
  - Functions: Tare, Auto-zero, Unit conversion
  - Platform Material: ABS plastic / tempered glass (model dependent)
  - Power Supply: Battery (AA or AAA)
  - Auto-Off: Yes (energy saving)
  - Usage: Kitchen, baking, food prep, small business
  `,

     features: `
  - High precision measurement with 1g accuracy
  - Weighs up to 10kg capacity
  - Clear LCD display for easy reading
  - Multiple unit conversion (g, kg, lb, oz)
  - Tare function for net weight measurement
  - Compact and lightweight design
  - Auto-off feature to save battery
  - Easy to clean surface
  - Ideal for cooking, baking, and portion control
  `
   },


   {
     id: 13040,
     name: 'Digital Crane Scale – 1 Ton (1000KG Heavy-Duty)',
     category: 'crane-scales',
     brand: 'Generic',
     price: 180000, // adjust based on your market price

     images: [
       'assets/img/scales/crane-scale-500x500-1ton.webp2.webp',
       'assets/img/measuring/crane-scale-1ton-2.jpg',
       'assets/img/measuring/crane-scale-1ton-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Digital Crane Scale – 1 Ton is a heavy-duty industrial weighing solution designed for lifting and measuring loads up to 1000kg with high accuracy. Built with a strong metal housing, reinforced hook, and secure shackle, it is ideal for use with cranes, hoists, and forklifts. The bright LED/LCD display ensures clear visibility of readings even from a distance, while the included remote control allows for convenient operation. This scale is perfect for warehouses, construction sites, factories, and logistics operations where reliable heavy-load weighing is required.`,

     specification: `
  - Product Name: Crane Scale
  - Capacity: 1000kg (1 Ton)
  - Accuracy: ±0.1% (typical)
  - Display: LED/LCD digital display
  - Units: kg, lb
  - Material: Heavy-duty metal housing
  - Hook Type: High-strength steel hook
  - Shackle: Reinforced steel shackle
  - Functions: Tare, Zero, Hold
  - Control: Remote control operation
  - Power Supply: Rechargeable battery
  - Battery Backup: Yes
  - Safety Factor: High load-bearing safety design
  - Usage: Industrial, warehouse, construction, logistics
  `,

     features: `
  - High capacity up to 1 ton (1000kg)
  - Strong and durable heavy-duty construction
  - Bright display for easy long-distance reading
  - Remote control for convenient operation
  - Accurate digital measurement system
  - Rechargeable battery for continuous use
  - Secure hook and shackle for safe lifting
  - Suitable for cranes, hoists, and forklifts
  - Reliable performance in industrial environments
  - Ideal for warehouses, factories, and construction sites
  `
   },


   {
     id: 13041,
     name: '300KG Digital Hanging Scale (Heavy-Duty Hook Weighing Scale)',
     category: 'hanging-scales',
     brand: 'Generic',
     price: 45000, // adjust based on your market price

     images: [
       'assets/img/scales/hanging scales-300kg 2.webp',
       'assets/img/measuring/hanging-scale-300kg-2.jpg',
       'assets/img/measuring/hanging-scale-300kg-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 300KG Digital Hanging Scale is a durable and portable weighing solution designed for medium-duty applications. It features a high-precision load sensor that delivers accurate weight readings up to 300kg. Built with a strong metal hook and sturdy casing, this scale is ideal for weighing farm produce, goods, and other items in markets, warehouses, and small industrial settings. The bright digital display ensures easy readability, while the rechargeable battery allows for convenient use without constant power supply.`,

     specification: `
  - Product Name: Digital Hanging Scale
  - Capacity: 300kg
  - Accuracy: ±0.1% (typical)
  - Display: LED/LCD digital display
  - Units: kg, lb
  - Material: Metal body with steel hook
  - Sensor Type: High-precision load cell
  - Functions: Tare, Zero, Hold
  - Power Supply: Rechargeable battery
  - Battery Backup: Yes
  - Hook Type: Heavy-duty hanging hook
  - Usage: Market, farm, warehouse, general weighing
  `,

     features: `
  - Measures up to 300kg capacity
  - Accurate digital weighing system
  - Strong and durable metal hook
  - Bright and easy-to-read display
  - Rechargeable battery for portability
  - Compact and easy to carry
  - Tare and hold functions for convenience
  - Suitable for medium-duty applications
  - Ideal for traders, farmers, and small businesses
  `
   },




   {
     id: 13042,
     name: 'Digital Hanging Crane Scale – 200KG (Portable Hook Weighing Scale)',
     category: 'hanging-scales',
     brand: 'Generic',
     price: 35000, // adjust based on your market price

     images: [
       'assets/img/scales/hanging scales-200kg.jpg',
       'assets/img/measuring/hanging-scale-200kg-2.jpg',
       'assets/img/measuring/hanging-scale-200kg-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Digital Hanging Crane Scale – 200KG is a compact and reliable weighing device designed for everyday commercial and light industrial use. It features a high-precision load sensor that provides accurate readings up to 200kg. Built with a strong metal hook and durable casing, it is suitable for weighing goods in markets, farms, and small warehouses. The bright digital display ensures easy visibility, while the rechargeable battery allows for convenient and portable operation without constant power supply.`,

     specification: `
  - Product Name: Digital Hanging Scale
  - Capacity: 200kg
  - Accuracy: ±0.1% (typical)
  - Display: LED/LCD digital display
  - Units: kg, lb
  - Material: Metal body with steel hook
  - Sensor Type: High-precision load cell
  - Functions: Tare, Zero, Hold
  - Power Supply: Rechargeable battery
  - Battery Backup: Yes
  - Hook Type: Heavy-duty hanging hook
  - Usage: Market, farm, shop, light warehouse use
  `,

     features: `
  - Weighs up to 200kg capacity
  - Accurate digital measurement system
  - Strong and durable metal hook
  - Bright display for easy reading
  - Rechargeable battery for portability
  - Compact and lightweight design
  - Tare and hold functions for convenience
  - Suitable for daily commercial use
  - Ideal for traders, farmers, and small businesses
  `
   },


   {
     id: 13043,
     name: 'CAMRY Digital Electronic Pricing Scale – 30KG Capacity',
     category: 'pricing-scales',
     brand: 'CAMRY',
     price: 65000, // adjust based on your market price

     images: [
       'assets/img/scales/CAMRY Digital Electronic Pricing Scale 30KG Capacity.jpg',
       'assets/img/measuring/camry-pricing-scale-30kg-2.jpg',
       'assets/img/measuring/camry-pricing-scale-30kg-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The CAMRY Digital Electronic Pricing Scale – 30KG is a reliable and efficient weighing solution designed for retail shops, markets, and small businesses. It combines accurate weight measurement with built-in price calculation, allowing users to quickly determine the total cost based on unit price and weight. Equipped with a clear dual display (for vendor and customer), it ensures transparency during transactions. The scale features a durable platform, rechargeable battery, and user-friendly keypad, making it ideal for daily commercial use.`,

     specification: `
  - Product Name: Digital Pricing Scale
  - Brand: CAMRY
  - Capacity: 30kg
  - Accuracy: ±1g / ±2g (model dependent)
  - Display: Dual LED/LCD (front & rear)
  - Units: kg
  - Functions: Price calculation, Tare, Zero, Memory keys
  - Keypad: Numeric input for price setting
  - Platform Material: Stainless steel
  - Power Supply: Rechargeable battery & AC power
  - Battery Backup: Yes
  - Usage: Retail shops, markets, food sales
  `,

     features: `
  - Weighs up to 30kg with high accuracy
  - Built-in price calculation for fast sales
  - Dual display for seller and customer visibility
  - Durable stainless steel weighing platform
  - Rechargeable battery for continuous operation
  - Easy-to-use keypad with memory function
  - Clear and bright digital display
  - Ideal for shops, supermarkets, and market traders
  - Enhances speed and efficiency in transactions
  `
   },


   {
     id: 13044,
     name: 'Glass Digital Bathroom Weighing Scale – 150KG Capacity',
     category: 'bathroom-scales',
     brand: 'Generic',
     price: 12000, // adjust based on your market price

     images: [
       'assets/img/scales/Glass Bathroom Scale - 150kg.webp',
       'assets/img/measuring/bathroom-scale-2.jpg',
       'assets/img/measuring/bathroom-scale-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Glass Digital Bathroom Weighing Scale – 150KG is a sleek and modern personal weighing device designed for home use. It features a tempered glass platform that combines durability with an elegant design, making it suitable for any bathroom or bedroom. Equipped with high-precision sensors, it provides accurate body weight measurements up to 150kg. The large digital display ensures easy readability, while the compact and slim design allows for convenient storage.`,

     specification: `
  - Product Name: Digital Bathroom Scale
  - Capacity: 150kg
  - Accuracy: ±0.1kg
  - Display: Digital LCD
  - Units: kg, lb (model dependent)
  - Platform Material: Tempered glass
  - Sensor Type: High-precision sensors
  - Power Supply: Battery (AAA)
  - Auto-On/Off: Yes
  - Design: Slim and lightweight
  - Usage: Home, personal weight monitoring
  `,

     features: `
  - Measures body weight up to 150kg
  - Sleek tempered glass design
  - Accurate digital measurement
  - Large and easy-to-read display
  - Auto-on and auto-off function
  - Compact and space-saving design
  - Lightweight and easy to use
  - Ideal for home and personal use
  `
   },


   {
     id: 13045,
     name: 'Digital Pocket Scale – 500g x 0.01g High Precision',
     category: 'pocket-scales',
     brand: 'Generic',
     price: 15000, // adjust based on your market price

     images: [
       'assets/img/scales/Digital Pocket Scale 500g 0.01g.jpg',
       'assets/img/measuring/pocket-scale-500g-2.jpg',
       'assets/img/measuring/pocket-scale-500g-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Digital Pocket Scale – 500g x 0.01g is a compact and highly accurate weighing device designed for precision measurements. With a fine readability of 0.01g, it is ideal for weighing small items such as jewelry, gold, herbs, powders, and laboratory samples. Its portable pocket-size design makes it easy to carry anywhere, while the clear digital display ensures accurate and easy reading. Built with a protective cover and durable platform, this scale is perfect for both personal and professional use.`,

     specification: `
  - Product Name: Digital Pocket Scale
  - Capacity: 500g
  - Readability: 0.01g
  - Accuracy: ±0.02g (typical)
  - Display: Digital LCD
  - Units: g, oz, ct, gn
  - Platform Material: Stainless steel
  - Calibration: Manual calibration supported
  - Power Supply: Battery (AAA)
  - Auto-Off: Yes
  - Design: Compact, pocket-size
  - Usage: Jewelry, gold, herbs, lab use
  `,

     features: `
  - High precision measurement (0.01g accuracy)
  - Compact and portable pocket design
  - Clear and easy-to-read LCD display
  - Multiple unit conversion options
  - Durable stainless steel weighing platform
  - Protective flip cover for safety
  - Auto-off function to save battery
  - Easy calibration for consistent accuracy
  - Ideal for jewelry, gold, herbs, and small items
  `
   },

   {
     id: 13046,
     name: 'FRC-1/2-MIDI G1/2" Air Filter Oil Water Separator Trap with Regulator & Gauge',
     category: 'water-separators',
     brand: 'Generic',
     price: 28000, // adjust based on your market price

     images: [
       'assets/img/fuel testing and measuring/FRC-1 2-MIDI G1 2inch Air Filter Oil Water Separator.jpg',
       'assets/img/airtools/frc-1-2-midi-2.jpg',
       'assets/img/airtools/frc-1-2-midi-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The FRC-1/2-MIDI G1/2" Air Filter Oil Water Separator Trap with Regulator & Gauge is a high-performance compressed air treatment unit designed to remove moisture, oil particles, and contaminants from air systems while maintaining stable pressure output. This 3-in-1 unit combines an air filter, water separator, and pressure regulator to ensure clean, dry, and regulated air supply for pneumatic tools and industrial applications. It features a transparent bowl for easy monitoring, an adjustable regulator knob for precise pressure control, and a built-in gauge for real-time pressure reading. Ideal for workshops, spray painting, and air compressor systems.`,

     specification: `
  - Product Name: Air Filter Regulator Water Separator
  - Model: FRC-1/2-MIDI
  - Port Size: G1/2" (1/2 inch)
  - Type: Filter + Regulator + Water Separator (FR Unit)
  - Working Medium: Compressed Air
  - Operating Pressure: 0.5 – 9.5 bar
  - Max Pressure: 10 bar
  - Filtration Precision: 40 microns (approx.)
  - Body Material: Aluminum alloy
  - Bowl Material: Polycarbonate (transparent)
  - Drain Type: Manual drain valve
  - Pressure Display: Analog gauge included
  - Temperature Range: 5°C – 60°C
  `,

     features: `
  - 3-in-1 design: filter, regulator, and water separator
  - Removes moisture, oil, and air contaminants effectively
  - Built-in pressure gauge for easy monitoring
  - Adjustable pressure regulator knob
  - Transparent bowl for quick water level inspection
  - Durable and corrosion-resistant construction
  - Easy installation and maintenance
  - Protects pneumatic tools and improves performance
  - Suitable for compressors, spray guns, and air systems
  `
   },


   {
     id: 13047,
     name: 'Lab 1000ml Plastic Measuring Cylinder',
     category: 'measuring-cylinders',
     brand: 'Generic',
     price: 6500,

     images: [
       'assets/img/fuel testing and measuring/measuring cylinder-1000ml.jpg',
       'assets/img/measuring tools/plastic measuring cylinder 1000ml 2.jpg',
       'assets/img/measuring tools/plastic measuring cylinder 1000ml 3.jpg'
     ],

     inStock: true,

     description: 'The Lab 1000ml Plastic Measuring Cylinder is a precision tool designed for accurate measurement of liquids in laboratories, workshops, and industrial environments. Made from high-quality transparent plastic, it allows easy visibility of contents and measurement markings.\n\nIt features clearly graduated markings for precise readings, making it suitable for educational, scientific, and general-purpose liquid measurement. The wide base provides excellent stability, reducing the risk of tipping during use.\n\nLightweight and durable, this measuring cylinder is resistant to breakage compared to glass alternatives, making it ideal for both professional and everyday applications.',

     specification: `
  Capacity: 1000ml (1 litre)
  Material: High-quality plastic (Polypropylene)
  Graduations: Clear, easy-to-read markings
  Base Type: Wide stable base
  Transparency: Semi-clear / transparent body
  Measurement Type: Liquid volume
  Application: Laboratory, industrial, educational use
  `,

     features: `
  Accurate 1000ml liquid measurement capacity
  Clear graduated markings for easy reading
  Durable and break-resistant plastic construction
  Lightweight and easy to handle
  Stable wide base to prevent tipping
  Suitable for laboratory, school, and industrial use
  Easy to clean and maintain
  `
   },


   {
     id: 13048,
     name: 'ATC Pocket Electric Digital pH Meter',
     category: 'ph-meters',
     brand: 'Generic',
     price: 12000,

     images: [
       'assets/img/welding machines/arc welding 500.png',
       'assets/img/testers/ph-meter-2.jpg',
       'assets/img/testers/ph-meter-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The ATC Pocket Electric Digital pH Meter is a compact and portable device designed for accurate measurement of pH levels in liquids.It is widely used for water quality testing in applications such as drinking water,aquariums,hydroponics,swimming pools,and laboratories.The device features Automatic Temperature Compensation (ATC),which ensures accurate readings even when the temperature of the liquid changes.With a clear digital display and simple operation,it provides fast and reliable results for both professionals and home users.`,

     specification: `
  - Product Name: Digital pH Meter
  - Type: Pocket pH Tester
  - Measurement Range: 0.00 – 14.00 pH
  - Resolution: 0.01 pH
  - Accuracy: ±0.01 pH
  - Temperature Compensation: Automatic (ATC)
  - Operating Temperature: 0°C – 60°C
  - Display: Digital LCD
  - Calibration: Manual (using buffer solutions)
  - Power Supply: Battery operated (button cells)
  - Usage: Water testing, aquariums, hydroponics, pools, laboratories
  `,

     features: `
  - High accuracy pH measurement
  - Automatic Temperature Compensation (ATC)
  - Compact and portable design
  - Easy-to-read digital display
  - Fast and reliable results
  - Simple calibration process
  - Suitable for various water testing applications
  - Ideal for home and professional use
  `
   },

   {
  id: 13049,
  name: 'RJ11 & RJ45 Network Cable Tester',
  category: 'general-testers',
  brand: 'Generic',
  price: 15000,

  images: [
    'assets/img/generaltesters/Rj11 and Rj 45 Network Cable Tester-2.jpg',
    'assets/img/measuring tools/network cable tester rj11 rj45 2.jpg',
    'assets/img/measuring tools/network cable tester rj11 rj45 3.jpg'
  ],

  inStock: true,

  description: 'The RJ11 & RJ45 Network Cable Tester is a reliable diagnostic tool used to test and troubleshoot telephone and network cables. It is designed to quickly identify wiring faults such as open circuits, short circuits, miswiring, and reversed connections in RJ11 (telephone) and RJ45 (Ethernet) cables.\n\nThis tester consists of a main unit and a remote unit, allowing users to test cables installed across long distances with ease. LED indicator lights provide clear and accurate status readings for each wire pair, ensuring quick fault detection and efficient maintenance.\n\nCompact and lightweight, the device is ideal for network engineers, technicians, and DIY users working on LAN installations, telecommunications, and cable maintenance.',

  specification: `
  Supported Ports: RJ11 (telephone), RJ45 (LAN/Ethernet)
  Power Supply: 9V battery (not always included)
  Test Functions: Open, short, miswire, reverse detection
  Display: LED indicator lights
  Design: Main tester + remote unit
  Material: Durable plastic casing
  Application: Network installation, cable testing, maintenance
  `,

  features: `
  Tests both RJ11 and RJ45 cables
  Detects wiring faults (open, short, miswire, reverse)
  LED indicators for easy and quick diagnosis
  Includes remote unit for long-distance cable testing
  Compact and portable design
  Durable build for professional and DIY use
  Easy to operate with simple interface
  Ideal for network technicians and installers
  `
},


{
  id: 13050,
  name: 'Quality Gas Cylinder Regulator Meter',
  category: 'general-meters',
  brand: 'Generic',
  price: 18000,

  images: [
    'assets/img/general meters/Quality Meter Regulator For Gas Cylinder.webp',
    'assets/img/tools/gas regulator meter 2.jpg',
    'assets/img/tools/gas regulator meter 3.jpg'
  ],

  inStock: true,

  description: 'The Quality Gas Cylinder Regulator Meter is a reliable device designed to control and monitor the flow of gas from cylinders for safe and efficient usage. It is commonly used with LPG cylinders for cooking, industrial heating, and other gas-powered applications.\n\nEquipped with a built-in pressure gauge, this regulator allows users to easily monitor gas levels and detect leaks or pressure irregularities. The durable construction ensures long-lasting performance, while the secure fitting mechanism provides a tight and leak-resistant connection to the gas cylinder.\n\nThis regulator is easy to install and operate, making it suitable for both household and commercial use. It enhances safety by maintaining consistent gas pressure and reducing the risk of accidents.',

  specification: `
  Type: Gas regulator with meter (gauge)
  Application: LPG gas cylinders
  Material: Metal and high-quality plastic components
  Pressure Gauge: Yes (built-in meter)
  Connection Type: Standard cylinder fitting
  Usage: Domestic and commercial gas control
  Safety Feature: Leak-resistant design
  `,

  features: `
  Controls and regulates gas flow efficiently
  Built-in pressure gauge for monitoring gas levels
  Strong and durable construction
  Easy installation and secure cylinder connection
  Leak-resistant design for enhanced safety
  Suitable for LPG cylinders (home and commercial use)
  Provides stable and consistent gas pressure
  User-friendly and reliable performance
  `
},


// ends at 16000

   
   
  //  Hand tools and accessories

  // starts at 16001
  // ends at 19000

   {
     id: 16001,
     name: 'INGCO Combination Spanner Set 12pcs 6–32mm HKSPA1143',
     category: 'spanners-wrenches',
     brand: 'INGCO',
     price: 55000, // adjust based on your market price

     images: [
       'assets/img/spanners and wrenches/Ingco Combination spanner set 12pc 6-32mm HKSPA1143.jpg',
       'assets/img/tools/ingco-spanner-set-2.jpg',
       'assets/img/tools/ingco-spanner-set-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Combination Spanner Set 12pcs (HKSPA1143) is a high-quality toolset designed for professional mechanics, technicians, and DIY users. Made from durable chrome vanadium steel, each spanner offers excellent strength, corrosion resistance, and long-lasting performance. The combination design features an open-end and a ring-end on each spanner, providing versatility for tightening and loosening nuts and bolts in various applications. This 12-piece set covers a wide range of sizes from 6mm to 32mm, making it ideal for automotive, mechanical, and general repair tasks.`,

     specification: `
  - Product Name: Combination Spanner Set
  - Model: HKSPA1143
  - Brand: INGCO
  - Number of Pieces: 12 pcs
  - Size Range: 6mm – 32mm
  - Material: Chrome Vanadium Steel (Cr-V)
  - Finish: Polished / anti-corrosion coating
  - Type: Combination (Open-end + Ring-end)
  - Standard: Metric sizes
  - Packaging: Carry pouch / holder (model dependent)
  - Usage: Automotive, mechanical, maintenance, DIY
  `,

     features: `
  - Complete 12-piece set covering 6mm to 32mm
  - Durable chrome vanadium steel construction
  - Combination design for versatile use
  - Strong and resistant to wear and corrosion
  - Polished finish for professional appearance
  - Comfortable grip and easy handling
  - Suitable for tight and hard-to-reach spaces
  - Ideal for mechanics, technicians, and DIY users
  - Comes with storage pouch for organization
  `
   },


   {
     id: 16002,
     name: '1/2 Inch Drive Socket Wrench Set – 24 Pcs Professional Tool Kit',
     category: 'sockets-ratchets',
     brand: 'Generic',
     price: 65000, // adjust based on your market price

     images: [
       'assets/img/spanners and wrenches/half Inch Drive Tools Socket Wrench Set - 24 Pcs.jpg',
       'assets/img/tools/socket-set-24pcs-2.jpg',
       'assets/img/tools/socket-set-24pcs-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 1/2 Inch Drive Socket Wrench Set – 24 Pcs is a complete and versatile tool kit designed for automotive repair, mechanical work, and general maintenance. Built with durable chrome vanadium steel, the set offers strength, durability, and resistance to corrosion. It includes a variety of socket sizes along with a ratchet handle and essential accessories, making it suitable for tightening and loosening nuts and bolts with ease. The 1/2" drive size provides high torque capability, ideal for heavy-duty applications. Supplied in a sturdy storage case, it ensures easy organization and portability.`,

     specification: `
  - Product Name: Socket Wrench Set
  - Drive Size: 1/2 inch
  - Number of Pieces: 24 pcs
  - Material: Chrome Vanadium Steel (Cr-V)
  - Finish: Polished / anti-rust coating
  - Ratchet Type: Reversible ratchet handle
  - Socket Type: Metric sockets
  - Accessories: Extension bars, universal joint (model dependent)
  - Storage: Blow-molded carry case
  - Usage: Automotive, mechanical, workshop, DIY
  `,

     features: `
  - Complete 24-piece socket set for various applications
  - Strong chrome vanadium steel construction
  - 1/2" drive for high torque performance
  - Reversible ratchet for easy operation
  - Wide range of socket sizes included
  - Durable and corrosion-resistant finish
  - Comes with organized storage case
  - Suitable for professional and home use
  - Ideal for mechanics, technicians, and DIY users
  `
   },


   {
     id: 16003,
     name: 'INGCO Claw Hammer 8oz (220g) HCH80808',
     category: 'hammers-mallets',
     brand: 'INGCO',
     price: 8000, // adjust based on your market price

     images: [
       'assets/img/hammers and mallets/ingco-claw-hammer-Hammer (HCH80808).jpg',
       'assets/img/tools/ingco-hammer-2.jpg',
       'assets/img/tools/ingco-hammer-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Claw Hammer (HCH80808) is a durable and reliable hand tool designed for driving and removing nails in construction, carpentry, and general repair work. Built with a drop-forged carbon steel head, it delivers strong impact and long-lasting performance. The ergonomic fiberglass handle provides a comfortable grip while reducing vibration during use. Its curved claw design allows easy nail removal, making it an essential tool for both professionals and DIY users.`,

     specification: `
  - Product Name: Claw Hammer
  - Model: HCH80808
  - Brand: INGCO
  - Weight: 220g (8oz)
  - Head Material: 45# Carbon Steel (drop-forged)
  - Handle Material: Fiberglass with rubber grip
  - Hammer Type: Claw hammer (curved claw)
  - Finish: Heat-treated & corrosion-resistant
  - Color: Yellow & Black
  - Usage: Carpentry, construction, general repairs
  `,

     features: `
  - Strong drop-forged carbon steel hammerhead
  - Lightweight 220g design for easy handling
  - Ergonomic fiberglass handle reduces vibration
  - Curved claw for easy nail removal
  - Comfortable non-slip grip
  - Durable and long-lasting construction
  - Suitable for professional and DIY use
  - Ideal for carpentry, woodworking, and repairs
  `
   },


   {
     id: 16004,
     name: 'INGCO 6pcs Screwdriver Set HKSDO628',
     category: 'screw-rivers',
     brand: 'INGCO',
     price: 12000, // adjust based on your market price

     images: [
       'assets/img/screw drivers/Ingco 6 pcs Screwdriver set - (HKSDO628).jpg',
       'assets/img/tools/ingco-screwdriver-set-2.jpg',
       'assets/img/tools/ingco-screwdriver-set-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO 6pcs Screwdriver Set (HKSDO628) is a reliable and versatile tool kit designed for tightening and loosening screws in various applications. Made from high-quality chrome vanadium steel, the screwdrivers offer durability, strength, and resistance to wear. The set includes both flat-head (slotted) and Phillips screwdrivers, making it suitable for electrical work, repairs, and general maintenance. Each screwdriver features an ergonomic handle with a non-slip grip for comfort and better control during use.`,

     specification: `
  - Product Name: Screwdriver Set
  - Model: HKSDO628
  - Brand: INGCO
  - Number of Pieces: 6 pcs
  - Types: Flat (Slotted) & Phillips
  - Material: Chrome Vanadium Steel (Cr-V)
  - Handle: Ergonomic rubberized grip
  - Tip Type: Magnetic tips (model dependent)
  - Finish: Anti-corrosion coating
  - Usage: Electrical work, maintenance, repairs, DIY
  `,

     features: `
  - Complete 6-piece screwdriver set
  - Includes both flat and Phillips types
  - Durable chrome vanadium steel shafts
  - Ergonomic non-slip handles for comfort
  - Strong and wear-resistant tips
  - Easy handling and control
  - Suitable for professional and home use
  - Ideal for technicians, electricians, and DIY users
  `
   },


   {
     id: 16005,
     name: 'INGCO Combination Pliers 8" (200mm) HCP28208',
     category: 'pliers-cutters',
     brand: 'INGCO',
     price: 9000, // adjust based on your market price

     images: [
       'assets/img/pliers and cutter/Combination Pliers INGCO HCP28208.jpg',
       'assets/img/tools/ingco-pliers-2.jpg',
       'assets/img/tools/ingco-pliers-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Combination Pliers 8" (200mm) HCP28208 is a versatile and durable hand tool designed for gripping, cutting, bending, and twisting wires and materials. Made from high-quality chrome vanadium steel, it offers excellent strength, durability, and resistance to wear. The pliers feature sharp cutting edges for efficient wire cutting and a serrated jaw for a firm grip. Its ergonomic handle with a non-slip grip ensures comfort and control during use, making it ideal for electricians, technicians, and DIY users.`,

     specification: `
  - Product Name: Combination Pliers
  - Model: HCP28208
  - Brand: INGCO
  - Size: 8" (200mm)
  - Material: Chrome Vanadium Steel (Cr-V)
  - Handle Material: Rubberized ergonomic grip
  - Jaw Type: Serrated gripping jaws
  - Cutting Edge: Hardened for wire cutting
  - Finish: Anti-corrosion coating
  - Usage: Electrical work, repairs, maintenance, DIY
  `,

     features: `
  - Multi-purpose tool for gripping, cutting, and bending
  - Strong chrome vanadium steel construction
  - Sharp and durable cutting edges
  - Serrated jaws for firm grip
  - Ergonomic non-slip handle for comfort
  - Long-lasting and wear-resistant design
  - Suitable for professional and home use
  - Ideal for electricians, technicians, and DIY users
  `
   },


   {
     id: 16006,
     name: 'INGCO Bolt Cutter 48" (1200mm) Heavy-Duty HBC0848',
     category: 'pliers-cutters',
     brand: 'INGCO',
     price: 95000, // adjust based on your market price

     images: [
       'assets/img/pliers and cutter/Bolt Cutter 48 inches Ingco HBC0848.jpg',
       'assets/img/tools/ingco-bolt-cutter-48-2.jpg',
       'assets/img/tools/ingco-bolt-cutter-48-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Bolt Cutter 48" (HBC0848) is a heavy-duty cutting tool designed for cutting thick metal rods, bolts, chains, and padlocks with ease. Built with high-strength alloy steel jaws, it delivers exceptional cutting performance and durability. The long 48-inch handles provide maximum leverage, allowing users to apply greater force with less effort. Its ergonomic grips ensure comfort and control during operation, making it ideal for industrial use, construction, and security applications.`,

     specification: `
  - Product Name: Bolt Cutter
  - Model: HBC0848
  - Brand: INGCO
  - Length: 48" (1200mm)
  - Material: Alloy steel jaws
  - Handle Material: Steel with rubber grips
  - Cutting Capacity: Suitable for thick bolts, rods, and chains
  - Jaw Hardness: Heat-treated for durability
  - Design: Heavy-duty, high leverage
  - Usage: Industrial, construction, maintenance, security
  `,

     features: `
  - Heavy-duty cutting capacity for tough materials
  - Long 48" handles for maximum leverage
  - High-strength alloy steel cutting jaws
  - Heat-treated blades for durability
  - Ergonomic anti-slip handles for comfort
  - Efficient cutting with less effort
  - Strong and durable construction
  - Suitable for industrial and professional use
  - Ideal for cutting chains, bolts, rods, and padlocks
  `
   },


   {
     id: 16007,
     name: 'INGCO Industrial Pipe Wrench 8" (200mm)',
     category: 'spanners-wrenches',
     brand: 'INGCO',
     price: 9500, // adjust based on your market price

     images: [
       'assets/img/spanners and wrenches/Ingco Industrial Pipe Wrench 8 inch (200mm).jpeg',
       'assets/img/tools/ingco-pipe-wrench-8-2.jpg',
       'assets/img/tools/ingco-pipe-wrench-8-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Industrial Pipe Wrench 8" (200mm) is a compact and durable hand tool designed for gripping and turning pipes and fittings with ease. Built from high-strength materials, it features hardened serrated jaws that provide a firm, non-slip grip on round surfaces. The adjustable jaw allows for flexibility when working with different pipe sizes, while the ergonomic handle ensures comfort and control. Its compact 8-inch size makes it ideal for use in tight spaces, making it a perfect choice for plumbers, technicians, and maintenance professionals.`,

     specification: `
  - Product Name: Pipe Wrench
  - Brand: INGCO
  - Size: 8" (200mm)
  - Type: Adjustable pipe wrench
  - Material: High-strength steel
  - Jaw Type: Serrated hardened jaws
  - Adjustment: Knurled adjustment nut
  - Handle: Ergonomic design
  - Finish: Anti-corrosion coating
  - Usage: Plumbing, maintenance, repair work
  `,

     features: `
  - Strong and durable construction
  - Hardened serrated jaws for firm grip
  - Adjustable jaw for different pipe sizes
  - Compact 8" size for tight spaces
  - Easy adjustment with knurled nut
  - Comfortable and secure handling
  - Corrosion-resistant finish
  - Ideal for plumbers, technicians, and DIY users
  `
   },


   {
     id: 16008,
     name: 'Fiberglass Measuring Tape - INGCO HFMT8250',
     category: 'handtools-measuring-tapes',
     brand: 'Ingco',
     price: 18000,

     images: [
       'assets/img/measuring tapes/ingco fibreglass measuring tape-50m.jpeg',
       'assets/img/measuring/ingco-hfmt8250-2.jpg',
       'assets/img/measuring/ingco-hfmt8250-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO HFMT8250 Fiberglass Measuring Tape is a durable and flexible measuring tool designed for accurate long-distance measurements in construction,surveying,and general field work.It features a strong fiberglass tape that is resistant to stretching,moisture,and corrosion,making it ideal for both indoor and outdoor use.The open reel design allows smooth winding and unwinding,while the ergonomic handle ensures comfortable handling during extended use.It is suitable for professionals and DIY users who require reliable and precise measurement over longer distances.`,

     specification: `
  - Product Name: Fiberglass Measuring Tape
  - Brand: Ingco
  - Model: HFMT8250
  - Tape Length: 50 meters
  - Tape Material: Fiberglass
  - Measurement Units: Metric (meters)
  - Reel Type: Open reel
  - Handle: Ergonomic grip
  - Usage: Construction, surveying, outdoor measurement
  `,

     features: `
  - Strong fiberglass tape for durability
  - Resistant to moisture and corrosion
  - Accurate long-distance measurement
  - Smooth winding mechanism
  - Lightweight and portable design
  - Comfortable ergonomic handle
  - Suitable for indoor and outdoor use
  - Ideal for professionals and DIY users
  `
   },



   {
     id: 16009,
     name: 'TOTAL Ratchet Handle 1/4" (THT106146) Wrench',
     category: 'sockets-ratchets',
     brand: 'TOTAL',
     price: 8500, // adjust based on your market price (prices vary widely by region, often equivalent to $4–15 USD)

     images: [
       'assets/img/sockets and ratchets/Total Ratchet Wrench  1 by 4 inch.webp',
       'assets/img/tools/total-ratchet-1-4-tht106146-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The TOTAL Ratchet Handle 1/4" (THT106146) is a compact and durable ratchet wrench designed for tight spaces and precision fastening tasks. Made from high-quality Chromium-Vanadium (Cr-V) and Chromium-Molybdenum (Cr-Mo) steel, it offers excellent strength and torque. With a fine-tooth ratcheting mechanism (typically 45T or 72T depending on variant), it allows smooth operation with minimal swing angle, making it ideal for automotive repair, machinery maintenance, assembly work, and general mechanical applications.`,

     specification: `
  - Product Name: Ratchet Handle / Ratchet Wrench
  - Model: THT106146
  - Brand: TOTAL
  - Drive Size: 1/4"
  - Length: 158mm
  - Material: Cr-V + Cr-Mo (Chromium-Vanadium + Chromium-Molybdenum steel)
  - Teeth: 45T or 72T (fine ratcheting mechanism)
  - Finish: Heat-treated, polished, corrosion-resistant
  - Handle: Ergonomic grip with anti-slip design
  - Mechanism: Reversible (forward & reverse switch)
  - Packaging: Packed by plastic hanger
  - Usage: Automotive, mechanical, assembly, maintenance
  `,

     features: `
  - Compact 1/4" drive size for precision work in tight spaces
  - Durable Cr-V + Cr-Mo steel construction for high torque and longevity
  - Fine-tooth ratchet (45T/72T) for smooth and efficient operation
  - Quick-release reversible mechanism for easy direction change
  - Heat-treated for enhanced strength and wear resistance
  - Ergonomic anti-slip handle for comfortable grip and control
  - Lightweight yet robust design
  - Corrosion-resistant finish
  - Ideal for professional mechanics, DIY enthusiasts, and industrial use
  - Suitable for sockets, extensions, and various 1/4" drive accessories
  `
   },



   {
     id: 16010,
     name: 'INGCO 6 Pcs Screwdriver Set (HKSD0628)',
     category: 'screw-drivers',
     brand: 'INGCO',
     price: 9675, // adjust based on your market price (commonly around ₦9,000 - ₦15,000 in Nigeria)

     images: [
       'assets/img/drivers/Ingco 6 pcs Screwdriver set - (HKSDO628).jpg',
       'assets/img/tools/ingco-screwdriver-set-hksd0628-2.jpg',
       'assets/img/tools/ingco-screwdriver-set-hksd0628-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO 6 Pcs Screwdriver Set (HKSD0628) is a versatile and durable toolkit designed for both professional and DIY use. It features high-quality CR-V (Chrome Vanadium) steel blades with round shanks for excellent strength and torque resistance. The set includes a mix of slotted (flathead) and Phillips screwdrivers in different sizes, making it ideal for general repairs, electrical work, furniture assembly, and maintenance tasks. The new design ergonomic handles provide a comfortable grip, reducing hand fatigue during prolonged use.`,

     specification: `
  - Product Name: 6 Pcs Screwdriver Set
  - Model: HKSD0628
  - Brand: INGCO
  - Material: CR-V (Chrome Vanadium) steel blades
  - Blade Type: Round shank
  - Handle: New design ergonomic PP + TPR grip
  - Contents:
    • 1 pc Slotted (SL) 5.5 x 5 x 75mm
    • 1 pc Slotted (SL) 5.5 x 5 x 100mm
    • 1 pc Slotted (SL) 6.5 x 6 x 150mm
    • 1 pc Phillips (PH) 1 x 5 x 75mm
    • 1 pc Phillips (PH) 1 x 5 x 100mm
    • 1 pc (additional size as per standard set)
  - Finish: Heat-treated blades for higher hardness and durability
  - Usage: General purpose, DIY, electrical, mechanical, and household repairs
  `,

     features: `
  - High-quality CR-V steel blades for superior strength and torque
  - Round blade design for smooth operation and durability
  - Ergonomic new design handles with comfortable anti-slip grip
  - Heat-treated tips for longer service life and higher hardness
  - Versatile mix of slotted and Phillips sizes for multiple applications
  - Magnetic tips on some variants for easy screw handling (model dependent)
  - Lightweight and compact set for easy storage and portability
  - Ideal for professionals, technicians, and home users
  - Resistant to wear and corrosion
  `
   },


   {
     id: 16011,
     name: '8PCS Magnetic Nut Driver Set, 6 Inches Long Nut Drivers, Nut Drivers for Impact Drill, Long Shank Nut Driver Bits, Nut Setter | 1/4"Hex Shank | SAE | Cr-V Steel',
     category: 'drivers',
     brand: 'Generic',
     price: 18500, // adjust based on your market price (commonly ₦15,000 - ₦25,000 in Nigeria for similar 8-piece long sets)

     images: [
       'assets/img/drivers/8PCS-Magnetic-Nut-Driver.jpg',
       'assets/img/tools/magnetic-nut-driver-set-6-inch-2.jpg',
       'assets/img/tools/magnetic-nut-driver-set-6-inch-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 8PCS Magnetic Nut Driver Set features extra-long 6-inch (150mm) shanks designed for impact drills and drivers. Made from high-quality Chrome Vanadium (Cr-V) steel, these nut setters provide excellent durability, torque, and magnetic hold to securely retain nuts and fasteners. The 1/4" hex shank makes them compatible with most impact drivers, quick-change chucks, and drill/drivers. This SAE set is perfect for automotive repair, machinery maintenance, construction, electrical work, and general assembly tasks, especially in hard-to-reach or deep areas.`,

     specification: `
  - Product Name: 8PCS Magnetic Nut Driver Set
  - Length: 6 Inches (150mm) overall / Long shank
  - Shank Type: 1/4" Hex Shank
  - Material: Cr-V (Chrome Vanadium) Steel
  - Finish: Heat-treated for strength and wear resistance
  - Magnetic: Strong rare-earth or built-in magnet for secure nut retention
  - Set Type: SAE (Imperial)
  - Typical Sizes: 1/4", 5/16", 3/8", 7/16", 1/2", 9/16" and additional common SAE sizes (exact set may vary slightly by manufacturer)
  - Design: Extra long for extended reach in tight spaces
  - Usage: Impact driver, drill, screw gun, automotive, mechanical repair, assembly
  `,

     features: `
  - Extra-long 6-inch length for deep and hard-to-reach applications
  - Strong magnetic tip securely holds nuts and fasteners
  - Durable Cr-V steel construction with high torque capacity
  - 1/4" hex shank for quick compatibility with impact drivers and drills
  - Heat-treated for enhanced strength and longevity
  - Ideal for professional mechanics, technicians, and DIY users
  - Reduces time spent on fastening tasks in confined spaces
  - Corrosion-resistant finish
  - Great value 8-piece set covering most common SAE nut sizes
  - Suitable for automotive, HVAC, machinery, and general maintenance
  `
   },



   {
     id: 16012,
     name: '4-120mm Hydraulic Cable Lug Crimping Tool',
     category: 'crimping-tools',
     brand: 'Generic',
     price: 65000, // adjust based on your market price (commonly ₦55,000 - ₦120,000 in Nigeria depending on brand and dies included)

     images: [
       'assets/img/crimping tools/4-120mm Hydraulic Cable Lug Crimping Tools.webp',
       'assets/img/tools/hydraulic-crimper-4-120mm-2.jpg',
       'assets/img/tools/hydraulic-crimper-4-120mm-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 4-120mm Hydraulic Cable Lug Crimping Tool is a heavy-duty manual hydraulic crimper designed for securely attaching copper and aluminum cable lugs, terminals, and connectors to power cables. It delivers powerful crimping force through its hydraulic mechanism, making it ideal for electrical installations, battery cables, welding cables, industrial wiring, and solar/power distribution projects. The tool comes with a set of interchangeable hexagonal crimping dies covering the 4-120mm² range, ensuring precise and reliable hexagonal crimps.`,

     specification: `
  - Product Name: Hydraulic Cable Lug Crimping Tool
  - Crimping Range: 4-120mm² (copper & aluminum lugs)
  - Crimping Force: 8 Ton (approx. 80kN)
  - Crimping Stroke: 12mm
  - Overall Dimension: 300 x 95 x 65 mm
  - Head Rotation: 180° for easy operation in tight spaces
  - Dies Included: Typically 8 sets - 4, 6, 10, 16, 25, 35, 50, 70, 95, 120mm² (hexagonal dies)
  - Material: High-strength steel with hydraulic cylinder
  - Handle: Two-hand operation with release valve
  - Packaging: Plastic carrying case / box
  - Usage: Electrical contracting, power distribution, automotive, solar installations, industrial maintenance
  `,

     features: `
  - Wide crimping range from 4mm² to 120mm² for versatile cable lug applications
  - Powerful 8-ton hydraulic force for strong, secure, and professional crimps
  - Hexagonal crimping dies for uniform and reliable compression
  - 180° rotatable head for convenient use in confined spaces
  - Built-in safety release valve to prevent over-crimping
  - Durable construction with heat-treated components for long service life
  - Ergonomic two-hand handles for reduced operator fatigue
  - Comes complete with die sets and sturdy carrying case
  - Ideal for electricians, contractors, and heavy electrical work
  - Suitable for copper and aluminum cable lugs and terminals
  `
   },



   {
     id: 16013,
     name: 'INGCO 4 Pcs Wood Chisel Set (HKTWC0401)',
     category: 'chisels-punches',
     brand: 'INGCO',
     price: 9500, // adjust based on your market price (commonly ₦7,500 - ₦12,000 in Nigeria)

     images: [
       'assets/img/chisels and punches/4PCS Wood Chisel - INGCO HKTWC0401.webp',
       'assets/img/tools/ingco-wood-chisel-set-hktwc0401-2.jpg',
       'assets/img/tools/ingco-wood-chisel-set-hktwc0401-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO 4 Pcs Wood Chisel Set (HKTWC0401) is a professional-grade woodworking tool kit designed for carpenters, woodworkers, and DIY enthusiasts. It features four bevel-edge chisels made from high-quality Chrome Vanadium (Cr-V) steel for superior strength, sharpness, and durability. The set includes popular widths of 6mm, 12mm, 19mm, and 25mm, making it ideal for precise carving, mortising, dovetailing, chopping, and general wood shaping tasks. The ergonomic handles provide a comfortable grip, while the Cr-V blades hold a sharp edge longer and resist wear.`,

     specification: `
  - Product Name: 4 Pcs Wood Chisel Set
  - Model: HKTWC0401
  - Brand: INGCO
  - Sizes / Widths: 6mm (1/4"), 12mm (1/2"), 19mm (3/4"), 25mm (1")
  - Overall Length: 140mm each
  - Blade Material: Cr-V (Chrome Vanadium) steel
  - Handle Material: Ergonomic rubber / plastic grip
  - Edge Type: Bevel edge
  - Design: Heat-treated blades for hardness and toughness
  - Packaging: Sliding card / blister pack
  - Usage: Woodworking, carpentry, carving, furniture making, cabinetry, DIY projects
  `,

     features: `
  - High-quality Cr-V steel blades for excellent edge retention and durability
  - Four essential sizes (6mm, 12mm, 19mm, 25mm) for versatile woodworking tasks
  - Bevel-edge design for precise cutting and clean finishes
  - Compact 140mm length suitable for detailed and general work
  - Ergonomic handles for comfortable, non-slip grip and reduced fatigue
  - Heat-treated construction for increased strength and long service life
  - Ideal for professionals and hobbyists alike
  - Great value 4-piece set for carving, mortising, paring, and chiseling
  - Resistant to wear and suitable for soft and hard woods
  `
   },


   {
     id: 16014,
     name: 'Bosch Allen Key Hex 9pcs Professional (1 600 A01 TH5)',
     category: 'allen-keys',
     brand: 'Bosch Professional',
     price: 14500, // adjust based on your market price (commonly ₦12,000 - ₦18,000 in Nigeria)

     images: [
       'assets/img/allen keys and hand riveters/bosc-allen-keys-9pcs.webp',
       'assets/img/tools/bosch-hex-key-set-9pcs-1600a01th5-2.jpg',
       'assets/img/tools/bosch-hex-key-set-9pcs-1600a01th5-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Bosch Professional Allen Key Hex 9pcs Set (1 600 A01 TH5) is a high-quality metric hex key set designed for professional use. Made from premium S2 hardened steel, these L-shaped hex keys offer excellent durability, torque transmission, and resistance to rounding. The set features ball ends on the long arms, allowing easy access to screws in hard-to-reach or angled positions. This versatile 9-piece set covers a wide range of common metric sizes, making it ideal for furniture assembly, machinery maintenance, bicycle repair, electronics, and general mechanical tasks.`,

     specification: `
  - Product Name: Allen Key Hex Set 9pcs
  - Model: 1 600 A01 TH5
  - Brand: Bosch Professional
  - Material: S2 hardened steel
  - Sizes: 1.5mm, 2mm, 2.5mm, 3mm, 4mm, 5mm, 6mm, 8mm, 10mm
  - Design: L-shaped with ball end on long arm
  - Features: Color-coded or easy identification, robust and flexible
  - Finish: Precision-ground for optimal fit
  - Packaging: Practical holder / clip for organized storage
  - Usage: Professional assembly, maintenance, repair work, DIY
  `,

     features: `
  - Premium S2 steel construction for high torque and long-lasting performance
  - Ball-end design allows angled insertion in hard-to-reach areas
  - S2 hardened steel prevents rounding off and ensures precise fit
  - Complete 9-piece metric set covering most common hex fastener sizes
  - Robust yet flexible design for professional and heavy-duty use
  - Easy-to-identify sizes with practical storage holder
  - Ideal for furniture assembly, machinery, bicycles, electronics, and more
  - High durability and wear resistance
  - Trusted Bosch Professional quality
  `
   },


   {
     id: 16015,
     name: 'INGCO Hand Riveter 10.5" (265mm) HRS108',
     category: 'hand-riveters',
     brand: 'INGCO',
     price: 14000, // adjust based on your market price

     images: [
       '/assets/img/allen keys and hand riveters/ingco Hand Riveter 10.5 Inch HRS108 ING-HT.webp2.webp',
       'assets/img/tools/ingco-riveter-2.jpg',
       'assets/img/tools/ingco-riveter-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Hand Riveter 10.5" (HRS108) is a durable and efficient fastening tool designed for joining metal sheets, plastics, and other materials using blind rivets. Built with a strong steel body, it delivers reliable performance and long service life. The ergonomic handles provide a comfortable grip and reduce hand fatigue during use. It comes with multiple interchangeable nose pieces to accommodate different rivet sizes, making it ideal for automotive work, construction, metal fabrication, and general repairs.`,

     specification: `
  - Product Name: Hand Riveter
  - Model: HRS108
  - Brand: INGCO
  - Length: 10.5" (265mm)
  - Material: Steel body construction
  - Handle: Ergonomic rubber grip
  - Nozzle Sizes: Multiple interchangeable nose pieces
  - Rivet Types: Blind (pop) rivets
  - Operation: Manual hand operation
  - Usage: Metal work, repairs, fabrication, construction
  `,

     features: `
  - Strong and durable steel construction
  - Comfortable ergonomic handles
  - Supports multiple rivet sizes
  - Easy and efficient fastening operation
  - Interchangeable nose pieces included
  - Lightweight and easy to handle
  - Suitable for various materials
  - Ideal for professionals and DIY users
  - Perfect for metal, plastic, and repair applications
  `
   },


   {
     id: 16016,
     name: 'INGCO Utility Knife 61x19mm (HUK615)',
     category: 'utility-knives',
     brand: 'INGCO',
     price: 6500, // adjust based on your market price (commonly ₦4,200 - ₦8,000 in Nigeria)

     images: [
       'assets/img/putty, utility knives and blades/INGCO_utility_knife_HUK615.jpg',
       'assets/img/tools/ingco-utility-knife-huk615-2.jpg',
       'assets/img/tools/ingco-utility-knife-huk615-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Utility Knife 61x19mm (HUK615) is a sturdy and reliable cutter designed for professional and everyday use. It features a durable zinc alloy body with a 65MN steel tool carrier and comes with a sharp SK5 blade measuring 61mm x 19mm x 0.6mm. The auto-lock mechanism ensures the blade stays securely in place during cutting, making it ideal for cutting cardboard, carpet, wallpaper, vinyl, leather, plastic, and other materials. Its compact design and solid construction provide excellent control and safety for tasks in construction, packaging, DIY projects, and general maintenance.`,

     specification: `
  - Product Name: Utility Knife / Snap-off Knife Cutter
  - Model: HUK615
  - Brand: INGCO
  - Blade Size: 61mm (L) x 19mm (W) x 0.6mm (T)
  - Blade Material: SK5 steel
  - Body Material: Zinc alloy
  - Tool Carrier Material: 65MN steel
  - Locking Mechanism: Auto-Lock
  - Weight: 110g
  - Blade Included: 1 pc SK5 blade (compatible with HUKB61001)
  - Packaging: Sliding card / double blister
  - Usage: Cutting cardboard, carpet, wallpaper, vinyl, leather, plastic, and general purpose cutting
  `,

     features: `
  - Robust zinc alloy body for durability and long service life
  - Sharp SK5 blade for clean and precise cutting
  - Auto-lock mechanism for safe and secure blade retention
  - Standard 61x19mm blade size (widely compatible with replacement blades)
  - Ergonomic design for comfortable grip and better control
  - Lightweight yet heavy-duty construction (110g)
  - Ideal for professionals, contractors, and DIY enthusiasts
  - Suitable for construction, packaging, flooring, upholstery, and craft work
  - Easy blade replacement and retraction
  `
   },




   {
     id: 16017,
     name: 'Putty Knife Set 3-Pack, Putty Knife 2 Inch 3 Inch 5 Inch Drywall Taping Knife Knives Set Sheetrock Puttyknife Flexible Scraper',
     category: 'putty-knives',
     brand: 'Generic',
     price: 12500, // adjust based on your market price (commonly ₦10,000 - ₦18,000 in Nigeria for similar 3-piece sets)

     images: [
       'assets/img/putty, utility knives and blades/Putty Knife Scraper 2 and 3 inch.jpg',
       'assets/img/tools/putty-knife-set-2-3-5-inch-2.jpg',
       'assets/img/tools/putty-knife-set-2-3-5-inch-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `This 3-Pack Putty Knife Set includes flexible 2-inch, 3-inch, and 5-inch blades, making it perfect for drywall repair, taping joints, spackling, patching holes, scraping old paint or wallpaper, and applying joint compound or plaster. The blades are made from high-quality flexible alloy steel or stainless steel (CR-V in many premium variants), offering excellent flexibility for smooth finishes without damaging surfaces. Ergonomic handles provide a comfortable, non-slip grip, reducing fatigue during extended use. This versatile set is ideal for both professional contractors and DIY homeowners working on home improvement projects.`,

     specification: `
  - Product Name: Putty Knife / Taping Knife Set 3-Pack
  - Sizes: 2 Inch, 3 Inch, 5 Inch
  - Blade Material: Flexible CR-V alloy steel or stainless steel
  - Handle Material: Ergonomic plastic with rubberized grip
  - Blade Type: Flexible for smooth application and scraping
  - Set Includes:
    • 1 pc 2" Putty Knife – ideal for small patches, tight corners, and detail work
    • 1 pc 3" Putty Knife – versatile for general spreading, filling, and scraping
    • 1 pc 5" Putty Knife – perfect for larger surfaces, drywall taping, and smoothing
  - Design: Strong blade-to-handle connection (full tang in quality sets)
  - Usage: Drywall repair, sheetrock finishing, plaster work, paint scraping, wallpaper removal, adhesive application
  `,

     features: `
  - Three essential sizes (2", 3", 5") for a complete range of drywall and repair tasks
  - Flexible blades that conform perfectly to surfaces for professional smooth finishes
  - Durable CR-V alloy steel or stainless steel construction for strength and rust resistance
  - Ergonomic comfortable handles with anti-slip grip to reduce hand fatigue
  - Lightweight and easy to clean after use
  - Great value 3-piece set suitable for professionals and DIY users
  - Versatile for home improvement, construction, painting, patching, and maintenance
  - High flexibility prevents gouging or damaging the work surface
  `
   },



   {
     id: 16018,
     name: '5 Piece Flat Wood Bit Set',
     category: 'drill-bits',
     brand: 'Generic',
     price: 8500, // adjust based on your market price (commonly ₦6,000 - ₦12,000 in Nigeria)

     images: [
       'assets/img/driil bits and screws/5 PieceFlat-Wood-Bit-Set.jpg',
       'assets/img/tools/5-piece-flat-wood-bit-set-2.jpg',
       'assets/img/tools/5-piece-flat-wood-bit-set-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 5 Piece Flat Wood Bit Set (also known as Spade Bits or Paddle Bits) is designed for fast and efficient drilling of large diameter holes in softwood, hardwood, chipboard, and plywood. These flat wood bits feature a precision-ground central point for accurate starting and double cutting spurs for clean, splinter-free holes. The hex shank ensures a secure grip in drill chucks. This versatile set is ideal for electricians, plumbers, carpenters, and DIY enthusiasts for tasks such as running cables, installing pipes, door hardware, and general woodworking projects.`,

     specification: `
  - Product Name: 5 Piece Flat Wood Bit Set (Spade / Paddle Bits)
  - Sizes: 13mm, 16mm, 19mm, 25mm, 32mm (metric set - most common in Nigeria)
  - Shank Type: Quick-change hex shank (6.35mm / 1/4")
  - Material: High Carbon Steel, heat-treated
  - Working Length: Approx. 115mm - 150mm
  - Design: Flat spade with brad point and side spurs
  - Packaging: Plastic case or blister pack for easy storage
  - Usage: Wood drilling, cable routing, plumbing, furniture making, construction
  `,

     features: `
  - Five popular sizes (13mm to 32mm) for a wide range of hole diameters
  - Precision central point for accurate positioning and fast starting
  - Double cutting spurs for clean edges with minimal splintering
  - Heat-treated high carbon steel for durability and long life
  - Hex shank for secure fit and quick bit changes in cordless drills
  - Suitable for soft and hard woods, plywood, and chipboard
  - Ideal for electricians running cables, plumbers installing pipes, and general woodworking
  - Lightweight and easy to use with standard power drills
  - Great value 5-piece set for professionals and DIY users
  `
   },


   {
     id: 16019,
     name: 'TOTAL Rubber Hammer Mallet 16oz (THT761616)',
     category: 'hammers-mallets',
     brand: 'TOTAL',
     price: 12500, // adjust based on your market price (commonly ₦9,000 - ₦15,000 in Nigeria)

     images: [
       'assets/img/hammers and mallets/Total Rubber Hammer Mallet 16oz - THT761616.avif',
       'assets/img/tools/total-rubber-hammer-tht761616-2.jpg',
       'assets/img/tools/total-rubber-hammer-tht761616-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The TOTAL Rubber Hammer Mallet 16oz (THT761616) is a versatile non-marring hammer designed for tasks where a metal hammer would damage the surface. It features a soft rubber head weighing 450g (16oz) that delivers controlled strikes without leaving marks on wood, tile, metal, or delicate materials. The fiberglass handle with ergonomic TPR (Thermoplastic Rubber) grip provides excellent shock absorption, comfort, and durability. Ideal for carpentry, tiling, assembly, flooring installation, automotive work, and general maintenance where precision and surface protection are essential.`,

     specification: `
  - Product Name: Rubber Hammer / Mallet
  - Model: THT761616
  - Brand: TOTAL
  - Head Weight: 16oz / 450g
  - Head Material: Soft rubber
  - Handle Material: Fiberglass with PP + TPR grip
  - Handle Design: Two-color ergonomic anti-shock handle
  - Total Weight: Approx. 640g
  - Grip Type: Non-slip TPR
  - Packaging: Label / blister pack
  - Usage: Carpentry, tiling, flooring, assembly, automotive body work, furniture making, general maintenance
  `,

     features: `
  - Soft rubber head prevents damage to work surfaces
  - 16oz (450g) head weight for balanced striking force
  - Fiberglass handle with shock-absorbing TPR grip for comfort and durability
  - Ergonomic two-color design reduces vibration and hand fatigue
  - Non-marring strikes ideal for delicate materials like wood, tile, and sheet metal
  - High-quality construction for professional and heavy-duty use
  - Excellent for installing flooring, setting tiles, assembling furniture, and more
  - Durable and long-lasting performance
  - Trusted TOTAL tool quality
  `
   },



   {
     id: 16020,
     name: 'Bosch CYL-3 Concrete Drill Bit 8 x 80 x 120 mm',
     category: 'drill-bits',
     brand: 'Bosch',
     price: 4500, // adjust based on your market price (commonly ₦3,500 - ₦6,000 in Nigeria for single piece)

     images: [
       'assets/img/driil bits and screws/Bosch-CYL-3-Concrete-drill-bit-8 x 80 x 120 mm.jpg',
       'assets/img/tools/bosch-cyl-3-8x80x120-2.jpg',
       'assets/img/tools/bosch-cyl-3-8x80x120-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Bosch CYL-3 Concrete Drill Bit (8 x 80 x 120 mm) is a professional-grade masonry drill bit engineered for lasting performance in concrete, masonry, limestone, natural stone, and artificial stone. It features a high-quality carbide tip with a unique 2-cutter design and an effective U-shaped 2-flute geometry that ensures excellent dust removal, reduced friction, and lower heat buildup. This results in faster drilling, less wear, and extended bit life. The cylindrical shank makes it compatible with standard three-jaw chucks in both corded and cordless hammer drills.`,

     specification: `
  - Product Name: Concrete Drill Bit
  - Model: CYL-3
  - Brand: Bosch Professional
  - Diameter: 8 mm
  - Working Length: 80 mm
  - Total Length: 120 mm
  - Shank Type: Cylindrical (round) shank
  - Tip Material: High-quality carbide (Bosch-developed blend)
  - Flute Design: U-shaped 2-flute for optimal dust extraction
  - Cutter Type: 2-cutter tip
  - Standard: PGM approved for precise hole dimensions
  - Usage: Concrete, masonry, brick, stone, fixing holes for anchors and plugs
  `,

     features: `
  - Superior wear resistance thanks to Bosch's advanced carbide blend
  - U-shaped 2-flute design for fast and efficient dust removal
  - Reduced friction and heat for longer bit lifetime
  - Precise drilling with PGM guarantee for accurate hole sizes
  - Cylindrical shank compatible with all standard hammer drills
  - Ideal for professional electricians, plumbers, and construction workers
  - Excellent performance in abrasive materials like concrete and stone
  - High bend resistance and durability for demanding jobs
  - Trusted Bosch Professional quality for reliable results
  `
   },




   {
     id: 16021,
     name: 'Buffing Polishing Pads - 3 Inch 31 Pieces Premium Material Car Foam Drill Polishing Pad Kit Sponge Pads Buffer Polisher Kit Headlight Restoration Kit with Wool',
     category: 'polishing-pads',
     brand: 'Generic',
     price: 18500, // adjust based on your market price (commonly ₦12,000 - ₦25,000 in Nigeria for 31-piece kits)

     images: [
       'assets/img/sand papers and disc/Buffing Polishing Pads - 3 Inch 31 Pieces.jpg',
       'assets/img/tools/3-inch-31pcs-polishing-pad-kit-2.jpg',
       'assets/img/tools/3-inch-31pcs-polishing-pad-kit-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `This 31-Piece 3-Inch Buffing and Polishing Pad Kit is a complete professional set designed for car detailing, paint correction, waxing, polishing, and headlight restoration. The kit includes a variety of high-density foam sponge pads in different colors and firmness levels (for cutting, compounding, polishing, and finishing), plus wool buffing pads for heavy cutting and final shine. It comes with drill adapters, backing plates, and suction cups, allowing easy attachment to any cordless or corded drill. Ideal for removing swirl marks, scratches, oxidation, and restoring clarity to headlights and painted surfaces.`,

     specification: `
  - Product Name: 3 Inch 31 Pieces Car Polishing Pad Kit
  - Pad Diameter: 3 Inch (75mm)
  - Total Pieces: 31
  - Typical Contents:
    • 24-25 pcs Foam Sponge Polishing Pads (various colors: orange/heavy cut, yellow/fine cut, white/finishing, black/ultra-fine)
    • 2 pcs Wool Buffing Pads
    • 1-2 pcs Hook & Loop Backing Plate / Drill Adapter
    • 2 pcs Suction Cups or additional accessories
  - Material: Premium foam sponge + natural or synthetic wool
  - Backing: Hook & Loop (Velcro) system
  - Shank: 1/4" hex drill adapter for standard drills
  - Usage: Car polishing, waxing, headlight restoration, paint correction, boat detailing, stainless steel, glass
  `,

     features: `
  - Complete 31-piece kit with everything needed for professional-level detailing
  - Multiple foam densities and colors for all stages: heavy cutting, compounding, polishing, and final finishing
  - High-quality wool pads for aggressive cutting and deep cleaning
  - Strong hook & loop backing for secure attachment and quick pad changes
  - Includes drill adapters for easy use with cordless drills
  - Versatile for car paint correction, swirl removal, wax application, and headlight restoration
  - Reusable and washable foam pads for long-lasting performance
  - Great value set for professional detailers, auto shops, and DIY car enthusiasts
  - Suitable for painted surfaces, headlights, clear coat, gel coat, and more
  `
   },


   {
     id: 16022,
     name: 'Stanley 16 Inch Tool Box',
     category: 'tool-boxes',
     brand: 'Stanley',
     price: 18500, // adjust based on your market price (commonly ₦15,000 - ₦28,000 in Nigeria)

     images: [
       'assets/img/tools box and bags/Stanley 16 Inch Tools Box-2.webp',
       'assets/img/tools/stanley-16-inch-toolbox-2.jpg',
       'assets/img/tools/stanley-16-inch-toolbox-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Stanley 16 Inch Tool Box is a durable and portable storage solution designed for organizing and transporting hand tools, power tools, and accessories. Made from tough impact-resistant plastic, it features a spacious main compartment with a removable tote tray for smaller tools and parts. The lid includes built-in organizers for screws, nails, and small components, allowing quick access without opening the entire box. Its one-hand operation latch provides convenient and secure closure, while the padlock eye adds security. Compact yet sturdy, this toolbox is ideal for professionals, technicians, mechanics, and DIY enthusiasts.`,

     specification: `
  - Product Name: 16 Inch Tool Box
  - Brand: Stanley
  - Dimensions: Approx. 16" (L) x 8" (W) x 7-8" (H) / 40.6 x 20.5 x 19.5 cm
  - Material: High-impact resistant plastic
  - Capacity: Approx. 8 Liters / 2.1 Gallons
  - Weight: Approx. 1.0 - 1.2 kg (empty)
  - Features: Removable tote tray, lid organizers, one-hand latch, padlock eye
  - Handle: Molded plastic carrying handle
  - Design: Black/Yellow classic Stanley color scheme
  - Packaging: Individual carton
  - Usage: Tool storage, workshop, job site, home garage, automotive, electrical work
  `,

     features: `
  - Spacious 16-inch size perfect for medium tool collections
  - Removable tote tray with handle for flexible small tool/parts storage
  - Lid organizers for quick access to screws, nails, and small items
  - One-hand operation geometric lock latch for easy and secure opening/closing
  - Padlock eye for added security with a small padlock
  - Lightweight yet rugged impact-resistant construction
  - Comfortable carrying handle for easy transportation
  - Stackable design for space-saving storage
  - Trusted Stanley durability for professional and everyday use
  - Ideal for mechanics, carpenters, electricians, and DIY users
  `
   },



   {
     id: 16023,
     name: 'INGCO Tool Bag Backpack Industrial 8kg Load (HBP01028)',
     category: 'tool-bags',
     brand: 'INGCO',
     price: 24500, // adjust based on your market price (commonly ₦18,000 - ₦32,000 in Nigeria)

     images: [
       'assets/img/tools box and bags/ingco-tool-bag-backpack-industrial-8kg.webp',
       'assets/img/tools/ingco-tool-backpack-hbp01028-2.jpg',
       'assets/img/tools/ingco-tool-backpack-hbp01028-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Tool Bag Backpack Industrial 8kg Load (HBP01028) is a heavy-duty tool backpack designed for professionals who need to carry tools comfortably on their back. Made from tough 1680D Polyester Oxford fabric, it offers excellent durability and water resistance. The rigid internal frame keeps the bag open for easy access to tools, while multiple internal and external pockets provide organized storage for hand tools, power tools, accessories, and even a laptop. With a maximum load capacity of 8kg, padded shoulder straps, and a reinforced back, it ensures comfort during long workdays on construction sites, electrical jobs, or maintenance tasks.`,

     specification: `
  - Product Name: Tool Backpack / Industrial Tool Bag
  - Model: HBP01028
  - Brand: INGCO
  - Dimensions: L38cm x W17cm x H46cm
  - Max Load Capacity: 8kg
  - Material: 1680D Polyester Oxford fabric
  - Frame: Rigid internal frame for easy opening and access
  - Design: Padded shoulder straps + reinforced back panel
  - Pockets: Multiple internal and external pockets + quick access compartments
  - Color: Black with yellow accents (typical INGCO design)
  - Usage: Tool storage and transport for electricians, plumbers, mechanics, carpenters, and general contractors
  `,

     features: `
  - High-strength 1680D Polyester Oxford material for durability and wear resistance
  - Rigid frame keeps the backpack open for convenient tool access
  - Maximum load capacity of 8kg suitable for daily professional use
  - Multiple internal and external pockets for excellent organization
  - Padded shoulder straps and back panel for comfortable carrying
  - Quick-access compartments for frequently used tools
  - Spacious main compartment with room for power tools and larger items
  - Water-resistant fabric protects tools from light rain and dust
  - Ideal for construction sites, workshops, electrical, and HVAC work
  - Compact yet highly functional design trusted by professionals
  `
   },


   {
     id: 16024,
     name: 'TOTAL Tile Cutter 1200mm (THT571201)',
     category: 'tile-cutters',
     brand: 'TOTAL',
     price: 85000, // adjust based on your market price (commonly ₦65,000 - ₦110,000 in Nigeria for 1200mm models)

     images: [
       'assets/img/tiles cutters/total tile cutter 120mm THT571201.jpg',
       'assets/img/tools/total-tile-cutter-tht571201-2.jpg',
       'assets/img/tools/total-tile-cutter-tht571201-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The TOTAL Tile Cutter 1200mm (THT571201) is a heavy-duty manual tile cutter designed for professional tilers and contractors. With a maximum cutting length of 1200mm and thickness up to 16mm, it handles large-format ceramic, porcelain, and floor tiles with precision and ease. It features a robust steel base, extra-long aluminum sliders, and a high-quality tungsten carbide ball-bearing cutting wheel for clean, accurate straight and diagonal cuts. The aluminum die-cast handle provides smooth operation and durability, making it ideal for flooring projects, wall tiling, and large construction jobs where speed and accuracy are essential.`,

     specification: `
  - Product Name: Manual Tile Cutter
  - Model: THT571201
  - Brand: TOTAL
  - Max Cutting Length: 1200mm (48 inches / 4 feet)
  - Max Cutting Thickness: 16mm
  - Blade Size: 22 x 6 x 2mm
  - Blade Type: Tungsten carbide ball bearing cutting wheel
  - Base Material: Heavy-duty steel base (size approx. 1420 x 200mm)
  - Handle Material: Aluminum die-cast
  - Sliders: Extra-long aluminum sliders for smooth gliding
  - Net Weight: 15kg
  - Features: Direct line cutting and diagonal (45°) cutting capability
  - Packaging: Comes with carrying bag
  - Usage: Ceramic tiles, porcelain tiles, floor tiles, wall tiles, large-format tiles
  `,

     features: `
  - Extra-long 1200mm cutting capacity for large format tiles
  - Powerful tungsten carbide ball-bearing blade for clean and precise cuts
  - Heavy-duty steel base ensures stability and durability during operation
  - Aluminum die-cast handle for smooth scoring and breaking action
  - Extra-long aluminum sliders for effortless gliding and accurate alignment
  - Supports both straight and diagonal (45°) cutting
  - Robust construction with 15kg weight for professional stability
  - Includes convenient carrying bag for easy transport and storage
  - Ideal for professional tilers, contractors, and large flooring projects
  - Excellent value heavy-duty tool for high-volume tiling work
  `
   },



   {
     id: 16025,
     name: 'VEVOR Bearing Puller Kit 14-Piece, 5 Ton',
     category: 'bearing-pullers',
     brand: 'VEVOR',
     price: 65000, // adjust based on your market price (commonly ₦45,000 - ₦85,000 in Nigeria)

     images: [
       'assets/img/bearing pullers/VEVOR Bearing Puller Kit 14-Piece, 5 Ton.jpg',
       'assets/img/tools/vevor-14pcs-bearing-puller-kit-5ton-2.jpg',
       'assets/img/tools/vevor-14pcs-bearing-puller-kit-5ton-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The VEVOR Bearing Puller Kit 14-Piece, 5 Ton is a heavy-duty professional bearing separator and puller set designed for removing bearings, gears, pulleys, pinions, steering wheels, and other press-fit components without damage. With a maximum pulling force of 5 tons, it handles most automotive, ATV, and light truck applications. The kit includes two adjustable bearing separators (small and large jaws) with tapered knife-edge design for secure gripping behind bearings, along with multiple extension rods, puller legs, a lead screw, and a yoke. All components are made from high-strength 45# steel with rust-resistant coating and come in a sturdy carrying case for organized storage and transport.`,

     specification: `
  - Product Name: Bearing Puller Kit / Bearing Separator Set
  - Brand: VEVOR
  - Pieces: 14-Piece Complete Set
  - Pulling Capacity: 5 Ton (approx. 10,000 lbs / 50 kN)
  - Material: 45# Steel (high-strength carbon steel)
  - Separator Jaws:
    • Small Jaw: Adjustable 1.2" - 2.0" (Ø30-50mm)
    • Large Jaw: Adjustable 2.0" - 2.8" (Ø50-70mm)
  - Components Included:
    • 2 x Bearing Separators (splitters)
    • 4 x Hex Push-Puller Legs
    • 4 x Extension Screws/Rods
    • 1 x Lead Screw (center forcing screw)
    • 2 x Puller Legs / Yoke
    • 1 x Yoke
  - Surface Treatment: Anti-rust coating
  - Design: Tapered knife-edge jaws for easy insertion
  - Packaging: Heavy-duty plastic carrying case
  - Usage: Automotive repair, wheel bearings, transmission, differential, machinery maintenance, gear and pulley removal
  `,

     features: `
  - Powerful 5-ton pulling capacity for demanding automotive and industrial jobs
  - Two adjustable separator sizes for wide compatibility with various bearings and components
  - Tapered knife-edge design allows secure gripping in tight spaces behind bearings
  - Complete 14-piece set with multiple extension rods for different reach requirements
  - High-strength 45# steel construction with rust-resistant finish for durability
  - Versatile configurations: 2-jaw and 3-jaw puller setups possible
  - Sturdy carrying case for easy storage and on-site transport
  - Ideal for professional mechanics, auto repair shops, and heavy equipment maintenance
  - Reduces risk of damage to expensive bearings and shafts compared to hammers or presses
  - Great value heavy-duty kit for removing wheel bearings, pinions, gears, and pulleys
  `
   },





   {
     id: 16026,
     name: 'Bosch 10 Inch Circular Saw Blade (254mm)',
     category: 'saw-blades',
     brand: 'Bosch',
     price: 18500, // adjust based on your market price (commonly ₦12,000 - ₦28,000 in Nigeria depending on tooth count)

     images: [
       'assets/img/saw blades/bosch-circular-saw-blade-0-inch.webp',
       'assets/img/tools/bosch-10-inch-circular-saw-blade-2.jpg',
       'assets/img/tools/bosch-10-inch-circular-saw-blade-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Bosch 10 Inch (254mm) Circular Saw Blade is a high-performance carbide-tipped blade designed for smooth, precise, and efficient cutting of wood, plywood, MDF, and other soft/hard materials. Available in various tooth counts (e.g., 24T for fast ripping, 40T for general purpose, 60T for fine finish, or 80T+ for ultra-fine crosscuts), these blades feature premium micrograin carbide teeth, expansion slots to reduce vibration and heat, and a thin kerf design for less material waste and reduced load on the saw. Ideal for use with table saws, miter saws, and portable circular saws in carpentry, furniture making, cabinetry, and construction projects.`,

     specification: `
  - Product Name: Circular Saw Blade
  - Brand: Bosch (Edge Series or Professional)
  - Diameter: 10 Inch / 254mm
  - Arbor Size: 5/8" (15.88mm) with reduction ring options (common 25.4mm or 30mm variants)
  - Typical Tooth Counts:
    • 24T - Fast ripping / rough cuts
    • 40T - General purpose wood cutting
    • 60T - Fine finish crosscuts
    • 72T/80T - Laminate, melamine, ultra-fine finish
  - Kerf (Cutting Width): Approx. 2.5 - 3.2mm (thin kerf design)
  - Plate Thickness: Approx. 1.8 - 2.2mm
  - Tooth Material: Brute Carbide / C3 or C4 micrograin carbide
  - Features: ATB (Alternate Top Bevel) or TCG grind, anti-vibration slots, non-stick coating on premium models
  - Max RPM: Up to 6000 RPM
  - Usage: Wood, plywood, MDF, softwood, hardwood, laminates (tooth count dependent)
  `,

     features: `
  - Premium carbide teeth for long life and sharp, clean cuts
  - Thin kerf design reduces material waste and requires less power
  - Expansion slots minimize vibration, noise, and heat buildup
  - Precision ground for accurate and smooth performance
  - Compatible with most 10" table saws, miter saws, and circular saws
  - Available in multiple tooth configurations for ripping to fine finishing
  - Robust body resists bending and delivers consistent results
  - Ideal for professional carpenters, woodworkers, and construction sites
  - Trusted Bosch quality with excellent durability and cutting speed
  - Great for crosscutting, ripping, and general woodworking tasks
  `
   },



   {
     id: 16027,
     name: 'INGCO Hand Saw 22" (550mm) (HHAS08550)',
     category: 'hand-saws',
     brand: 'INGCO',
     price: 12500, // adjust based on your market price (commonly ₦8,000 - ₦18,000 in Nigeria)

     images: [
       'assets/img/hand saws/INGCO Hand Saw 22 inch 550mm (HHAS08550).jpg',
       'assets/img/tools/ingco-hand-saw-hhas08550-2.jpg',
       'assets/img/tools/ingco-hand-saw-hhas08550-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Hand Saw 22" (550mm) (HHAS08550) is a high-quality general-purpose handsaw designed for fast and efficient cutting of wood, plywood, chipboard, and three-ply boards. Made from premium 65Mn steel with heat-treated teeth, it delivers excellent sharpness, durability, and cutting performance. With 7 Teeth Per Inch (7 TPI), it provides a good balance between speed and smooth cuts. The blade has a thickness of 0.9mm and comes with a protective teeth guard for safety during storage and transport. The ergonomic handle ensures comfortable grip and control, making it ideal for carpenters, woodworkers, construction workers, and DIY enthusiasts.`,

     specification: `
  - Product Name: Hand Saw
  - Model: HHAS08550
  - Brand: INGCO
  - Blade Length: 550mm (22 inches)
  - Blade Thickness: 0.9mm
  - Teeth Per Inch (TPI): 7 TPI
  - Blade Material: 65Mn high-carbon steel
  - Tooth Design: Extra sharp heat-treated teeth
  - Handle: Ergonomic two-color soft grip handle
  - Features: With teeth protector / guard
  - Heat Treatment: Yes (for hardness and durability)
  - Packaging: Packed by color sleeve / paper card
  - Usage: Wood, plywood, chipboard, three-ply board, general carpentry and construction cutting
  `,

     features: `
  - 22-inch (550mm) blade length for versatile general-purpose cutting
  - 7 TPI tooth configuration for fast yet clean cuts in wood
  - Premium 65Mn steel blade with heat treatment for long-lasting sharpness
  - 0.9mm blade thickness provides the right balance of flexibility and rigidity
  - Extra sharp teeth for efficient cutting with less effort
  - Includes protective teeth guard to prevent damage and ensure safety
  - Ergonomic soft-grip handle reduces hand fatigue during prolonged use
  - Ideal for professional carpenters, woodworkers, and DIY projects
  - Durable construction suitable for daily use on construction sites
  - Great value high-performance handsaw from INGCO
  `
   },



   {
     id: 16028,
     name: 'HVAC Copper Tube Flaring & Swaging Tool Kit with Pipe Cutter (Professional Refrigeration Tool Set)',
     category: 'flaring-tools',
     brand: 'Generic / Professional',
     price: 45000, // adjust based on your market price (commonly ₦35,000 - ₦80,000 in Nigeria depending on quality and brand)

     images: [
       'assets/img/flaringtools and saws/hvac flaring tool kit.jpg',
       'assets/img/tools/hvac-flaring-swaging-kit-with-cutter-2.jpg',
       'assets/img/tools/hvac-flaring-swaging-kit-with-cutter-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `This Professional HVAC Copper Tube Flaring & Swaging Tool Kit is a complete set designed for air conditioning, refrigeration, and HVAC technicians. It allows precise 45° flaring and swaging (expanding) of soft copper, aluminum, and brass tubing for leak-proof connections. The kit includes a heavy-duty flaring tool with multiple dies, swaging adapters, a mini tube cutter for clean cuts (up to 1-1/8"), a reamer/deburring tool, and often a ratchet wrench. Packed in a sturdy carrying case, it is ideal for installing and repairing split AC units, refrigerators, freezers, and commercial refrigeration systems. The tools produce professional, uniform flares and swages that ensure strong, reliable joints when brazed or connected with flare nuts.`,

     specification: `
  - Product Name: HVAC Copper Tube Flaring & Swaging Tool Kit with Pipe Cutter
  - Flaring Type: 45° Single Flare (eccentric cone or bar type)
  - Tube Sizes (Flaring): 1/8", 3/16", 1/4", 5/16", 3/8", 1/2", 5/8", 3/4" O.D. (3-19mm approx.)
  - Swaging Adapters: 5 or 7 pieces including 3-in-1 (3/16", 1/4", 3/8"), 5/16", 1/2", 5/8", 3/4"
  - Pipe Cutter Capacity: 1/8" to 1-1/8" (3-28mm)
  - Material: High-strength alloy steel, chrome-plated swivel and dies
  - Included Tools:
    • Flaring Tool (with yoke and cone)
    • Swaging Punch/Adapters set
    • Mini Tube Cutter (rolling blade)
    • Reamer / Deburring Tool
    • Ratchet Wrench (for some kits)
  - Packaging: Heavy-duty plastic carrying case
  - Usage: Air conditioning installation, refrigeration repair, HVAC maintenance, plumbing
  `,

     features: `
  - Complete professional kit for both flaring and swaging copper tubes
  - Wide size range covering most common HVAC and refrigeration tubing
  - Produces clean, precise 45° flares for secure leak-free connections
  - Swaging adapters allow expanding tube ends for slip-fit brazed joints
  - Sharp tube cutter delivers burr-free straight cuts
  - Deburring tool ensures smooth tube ends before flaring
  - Durable alloy steel construction with corrosion-resistant finish
  - Compact carrying case for easy storage and job-site portability
  - Ideal for professional HVAC technicians, refrigeration engineers, and installers
  - Saves time and ensures high-quality workmanship on split AC, refrigerators, and commercial systems
  - Great value all-in-one refrigeration tool set
  `
   },


   {
     id: 16029,
     name: 'INGCO 30-Piece Cutting & Grinding Disc Set (MCD07630)',
     category: 'cutting-grinding-discs',
     brand: 'INGCO',
     price: 12500, // adjust based on your market price (commonly ₦8,000 - ₦18,000 in Nigeria)

     images: [
       'assets/img/cutting and grinding disc/Ingco 30-Piece Cutting & Grinding Disc Set – MCD076302.webp',
       'assets/img/tools/ingco-mcd07630-30pcs-disc-set-2.jpg',
       'assets/img/tools/ingco-mcd07630-30pcs-disc-set-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO 30-Piece Cutting & Grinding Disc Set (MCD07630) is a versatile and economical assortment designed for mini angle grinders (76mm / 3"). It includes a complete mix of abrasive cutting discs, grinding discs, wet diamond discs for tile/stone, and flap discs for polishing/sanding. This set is perfect for metal fabrication, steel cutting, grinding welds, tile and stone work, and general maintenance tasks. All discs feature a 10mm arbor (25/64") and are compatible with INGCO and most other 76mm mini angle grinders. The set comes packed in a convenient color box for easy storage.`,

     specification: `
  - Product Name: 30-Piece Cutting & Grinding Disc Set
  - Model: MCD07630
  - Brand: INGCO
  - Disc Diameter: 76mm (3 inches)
  - Arbor Size: 10mm (25/64")
  - Total Pieces: 30 pcs
  - Set Contents:
    • 20 pcs Abrasive Metal Cutting Discs: 76mm × 1.2mm × 10mm (thin for fast, clean cuts on metal, steel, inox)
    • 4 pcs Abrasive Metal Grinding Discs: 76mm × 4.0mm × 10mm (thicker for grinding and smoothing metal)
    • 4 pcs Wet Diamond Discs: 76mm, blade width 7mm (for cutting ceramic tile, porcelain, stone)
    • 2 pcs Flap Discs: 76mm, Grit P80 (for sanding, rust removal, and surface finishing)
  - Material: High-quality abrasive grains with fiberglass reinforcement
  - Max RPM: Suitable for mini angle grinders (typically up to 12,000 - 15,000 RPM)
  - Packaging: Color box
  - Usage: Metal cutting/grinding, tile & stone cutting, weld preparation, rust removal, polishing
  `,

     features: `
  - Complete 30-piece variety pack for multiple applications in one set
  - 20 thin cutting discs for fast and precise metal cutting with minimal material loss
  - 4 thick grinding discs for effective weld removal and surface smoothing
  - 4 wet diamond discs ideal for clean cuts on tiles, ceramics, and stone
  - 2 flap discs (P80 grit) for sanding and finishing metal surfaces
  - Standard 76mm (3") size with 10mm arbor – fits most mini angle grinders
  - Reinforced construction for safety and longer disc life
  - Great value for professional mechanics, fabricators, tilers, and DIY users
  - Compact and convenient storage in color box
  - Compatible with INGCO CAGLI7601 and similar 76mm mini grinders
  `
   },


   {
     id: 16030,
     name: 'Dewalt Screwdriver Bit and Holder Set 32 Piece (DT7969)',
     category: 'screwdriver-bits',
     brand: 'Dewalt',
     price: 18500, // adjust based on your market price (commonly ₦12,000 - ₦25,000 in Nigeria)

     images: [
       'assets/img/driil bits and screws/dewalt-32-piece-screwdriver-bit-set-dt7969m-1-800x800.jpeg',
       'assets/img/tools/dewalt-dt7969-32pcs-bit-set-2.jpg',
       'assets/img/tools/dewalt-dt7969-32pcs-bit-set-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Dewalt Screwdriver Bit and Holder Set 32 Piece (DT7969 / DT7969-QZ) is a professional-grade compact bit assortment designed for a wide range of screwdriving applications in wood, metal, and plastic. It features high-performance 25mm S2 steel bits with excellent durability and torque resistance. The set includes the most common Phillips, Pozi, Slotted, Hex, Torx, and Security Torx bits, along with a magnetic quick-change bit holder and a socket adapter. All bits are housed in a tough, extra-small impact-resistant case with a belt clip for convenient on-the-job access. Ideal for professionals, mechanics, carpenters, electricians, and DIY enthusiasts using impact drivers or screwdrivers.`,

     specification: `
  - Product Name: Screwdriver Bit Set 32 Piece
  - Model: DT7969 / DT7969-QZ
  - Brand: Dewalt
  - Bit Length: 25mm
  - Material: High-quality S2 steel (shock-resistant)
  - Set Contents (32 pcs total):
    • Phillips (PH): PH1, PH2 (x2), PH3 → 4 pcs
    • Pozi (PZ): PZ1, PZ2 (x2), PZ3 → 4 pcs
    • Slotted (SL): 3mm, 4mm, 5mm, 6.5mm → 4 pcs
    • Hex (H): 3mm, 4mm, 5mm, 6mm → 4 pcs
    • Torx (T): T10, T15, T20, T25, T27, T30, T40 → 7 pcs
    • Security Torx (TH / TPX): T10H, T15H, T20H, T25H, T27H, T30H, T40H → 7 pcs
    • 1 pc Magnetic Quick-Change Bit Holder (ClicFix style)
    • 1 pc 1/4" Socket Adapter
  - Case: Extra small tough case with belt clip
  - Usage: Impact drivers, drill/drivers, manual screwdrivers, assembly, maintenance, furniture, electronics
  `,

     features: `
  - Comprehensive 32-piece set covering all popular screw types including security Torx
  - High-performance S2 steel bits for superior strength and long service life
  - Magnetic quick-change bit holder for fast and secure bit retention
  - Includes 1/4" socket adapter for added versatility
  - Compact, durable storage case with belt clip for easy portability
  - Colour-coded or clearly marked bits for quick identification
  - Ideal for professional tradespeople and everyday screwdriving tasks
  - Works with impact drivers and standard drill/drivers
  - Reduces downtime with a wide range of bits in one small case
  - Trusted Dewalt professional quality
  `
   },



   {
     id: 16031,
     name: 'Round Sanding Paper 225mm 100 Grit',
     category: 'sand-papers',
     brand: 'Generic',
     price: 5000,

     images: [
       'assets/img/sand papers and disc/982-ROUND SANDING PAPER 225 mm 100 GRIT.jpg',
       'assets/img/tools/round sanding paper 225mm 100 grit 2.jpg',
       'assets/img/tools/round sanding paper 225mm 100 grit 3.jpg'
     ],

     inStock: true,

     description: 'The Round Sanding Paper 225mm 100 Grit is a high-quality abrasive disc designed for smooth sanding and surface preparation. It is ideal for removing rough surfaces, old paint, and imperfections from wood, metal, and drywall.\n\nWith a 100 grit rating, it provides a medium-coarse finish, making it suitable for both material removal and surface leveling. The 225mm diameter makes it compatible with large sanding machines such as drywall sanders, ensuring faster coverage and efficiency.\n\nBuilt with durable abrasive material, this sanding paper offers long-lasting performance and consistent results, making it suitable for both professional and DIY applications.',

     specification: `
  Type: Round sanding disc
  Diameter: 225mm
  Grit: 100 (medium-coarse)
  Material: Aluminum oxide abrasive
  Compatibility: Drywall sanders / sanding machines
  Application: Wood, metal, paint removal, surface preparation
  `,

     features: `
  225mm large diameter for wide surface coverage
  100 grit for effective material removal and smoothing
  Durable abrasive material for long-lasting use
  Provides consistent and even sanding results
  Suitable for wood, metal, and drywall surfaces
  Ideal for professional and DIY use
  Compatible with most drywall sanding machines
  Easy to install and replace
  `
   },
  //  ends at 19000



  // construction tools
   // start from 19001
  // ends at 21000
   {
     id: 19001,
     name: 'Poker Vibrator Machine Robin Engine Gasoline 5HP',
     category: 'concrete-vibrators',
     brand: 'Robin',
     price: 285000, // adjust based on your market price (commonly ₦220,000 - ₦380,000 in Nigeria with 6m hose)

     images: [
       'assets/img/poker vibrator and plate compactor/Poker Vibrator Machine Robin Engine Gasoline.webp',
       'assets/img/tools/robin-5hp-poker-vibrator-2.jpg',
       'assets/img/tools/robin-5hp-poker-vibrator-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Poker Vibrator Machine with Robin 5HP Gasoline Engine is a powerful and reliable concrete vibrator designed for effective compaction of concrete on construction sites. Powered by the famous Robin EY20 5HP (maximum) air-cooled 4-stroke gasoline engine, it delivers strong vibration to remove air pockets, voids, and honeycombs from fresh concrete, ensuring dense and high-strength structures. The set typically includes the engine mounted on a sturdy frame with coupling, flexible shaft (usually 6 meters), and poker head (38mm or 45mm). It is widely used for foundations, columns, beams, slabs, and large pours where high-frequency vibration is required.`,

     specification: `
  - Product Name: Poker Vibrator Machine / Concrete Vibrator
  - Engine Brand: Robin EY20 (or EY20D)
  - Engine Type: Air-cooled, 4-stroke, single cylinder, side valve
  - Engine Power: Max 5HP / 3.6kW @ 3600 rpm (Rated ~3.5HP)
  - Displacement: 183 cm³
  - Fuel Tank Capacity: 3.8 Liters
  - Starting System: Recoil starter
  - Vibration Frequency: 9800 - 12000 VPM (vibrations per minute)
  - Flexible Shaft Length: 6 meters (standard)
  - Poker Head Diameter: 38mm or 45mm (common sizes)
  - Poker Head Length: Approx. 470mm
  - Amplitude: ~1.2 mm
  - Frame: Heavy-duty steel base with coupling
  - Fuel Consumption: Approx. 313g/kWh
  - Usage: Concrete compaction for foundations, columns, beams, slabs, and general construction
  `,

     features: `
  - Robust Robin EY20 5HP gasoline engine for reliable high performance
  - High vibration frequency (up to 12,000 VPM) for excellent concrete consolidation
  - Long 6-meter flexible shaft for deep reach in formwork
  - Available with 38mm or 45mm poker head for different applications
  - Sturdy steel frame with easy coupling system for quick setup
  - Recoil start with efficient air-cooled design
  - Portable yet powerful – ideal for medium to large construction projects
  - Low maintenance and durable components
  - Widely used by professional contractors in Nigeria for quality concrete work
  - Reduces voids and improves concrete strength and finish
  `
   },



   {
     id: 19002,
     name: '4 Wheels 500L Portable Concrete Cement Mixer',
     category: 'concrete-mixers',
     brand: 'Generic',
     price: 1850000, // adjust based on your market price (commonly ₦1,200,000 - ₦2,500,000 in Nigeria for 500L 4-wheel diesel models)

     images: [
       'assets/img/concrete mixers and drum trucks/concrete-mixers-500l.webp',
       'assets/img/tools/500l-4-wheel-concrete-mixer-2.jpg',
       'assets/img/tools/500l-4-wheel-concrete-mixer-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The 4 Wheels 500L Portable Concrete Cement Mixer is a heavy-duty mobile concrete mixing machine designed for construction sites, block production, and small to medium building projects. With a 500-liter drum capacity and four large wheels, it offers excellent mobility and can be easily moved around the site by hand or towed. Most versions are powered by a reliable diesel engine (typically 6-10HP), providing strong mixing performance for cement, sand, gravel, and water. The drum rotates for efficient mixing and reverses for easy discharge. Its robust steel construction and large wheels make it ideal for daily use in Nigeria's construction industry.`,

     specification: `
  - Product Name: 4 Wheels Portable Concrete Cement Mixer
  - Drum Capacity: 500 Liters
  - Mixing Capacity: Approx. 350-400 kg per batch (about 2 bags of 50kg cement)
  - Drum Material: Thickened steel (usually 2.5-4mm)
  - Wheels: 4 heavy-duty wheels for easy mobility
  - Power Source: Diesel Engine (common 6HP - 10HP water-cooled or air-cooled)
  - Drum Speed: 20 - 30 RPM
  - Productivity: 6 - 10 m³/hour (theoretical)
  - Discharge Method: Manual tilting / drum reverse
  - Water Supply: Manual or optional pump
  - Max Aggregate Size: 60mm
  - Dimensions: Approx. 2300 x 1100 x 1300 mm (varies by model)
  - Weight: Approx. 400 - 600 kg
  - Usage: Mixing concrete, mortar, plaster for foundations, blocks, slabs, and general construction
  `,

     features: `
  - Large 500L drum capacity for higher output per batch
  - Four large wheels for smooth movement on rough construction sites
  - Powerful diesel engine for reliable performance even in tough conditions
  - Heavy-duty steel drum and frame for long service life
  - Efficient mixing with good homogeneity in short time
  - Easy tilting mechanism for fast and clean discharge
  - Portable design – can be moved manually or towed
  - Suitable for block making, building projects, road works, and small concrete pours
  - Low maintenance with widely available spare parts in Nigeria
  - Great value for contractors and block manufacturers
  `
   },



   {
     id: 19003,
     name: 'Robin Engine EY20 Vibratory Plate Compactor C90 (90kg)',
     category: 'plate-compactors',
     brand: 'Robin',
     price: 320000, // adjust based on your market price (commonly ₦250,000 - ₦420,000 in Nigeria for 90kg model)

     images: [
       'assets/img/poker vibrator and plate compactor/Robin Engine Ey15 Ey20 Excavator Viber Plate Compactor.webp',
       'assets/img/tools/robin-ey20-c90-plate-compactor-2.jpg',
       'assets/img/tools/robin-ey20-c90-plate-compactor-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Robin Engine EY20 Vibratory Plate Compactor C90 (90kg) is a heavy-duty gasoline-powered plate compactor designed for efficient compaction of soil, sand, gravel, backfill, and asphalt. Powered by the reliable Robin EY20 5HP air-cooled 4-stroke gasoline engine, it delivers strong centrifugal force and consistent vibration for excellent compaction results. With a 90kg operating weight and approximately 15 kN centrifugal force, it is ideal for medium to large construction projects including road base preparation, foundation work, trench backfilling, and paving. The robust steel plate, foldable handle, and efficient design make it durable and easy to operate on job sites.`,

     specification: `
  - Product Name: Vibratory Plate Compactor C90
  - Engine Brand: Robin EY20
  - Engine Type: Air-cooled, 4-stroke, single cylinder gasoline
  - Engine Power: 5.0 HP (max) / approx. 3.6 kW
  - Vibration Frequency: 5600 VPM (vibrations per minute)
  - Centrifugal Force: 15 kN
  - Compaction Depth: Up to 30 cm (in soil)
  - Plate Size: Approx. 550 x 420 mm to 600 x 470 mm
  - Travel Speed: 15 - 25 m/min
  - Operating Weight: 90 kg
  - Fuel Tank Capacity: 3.8 Liters
  - Starting System: Recoil starter
  - Features: Foldable handle, heavy-duty steel base plate, open self-cleaning design
  - Usage: Soil compaction, gravel, sand, asphalt paving, foundation preparation, road construction, trench backfill
  `,

     features: `
  - Powerful Robin EY20 5HP gasoline engine for reliable performance
  - 90kg operating weight provides optimal balance between maneuverability and compaction force
  - Strong 15 kN centrifugal force for deep and uniform compaction
  - High vibration frequency (5600 VPM) ensures excellent density in granular materials
  - Heavy-duty steel plate for durability and long service life
  - Foldable handle for easy transport and compact storage
  - Efficient air-cooled engine with low fuel consumption
  - Suitable for both forward compaction and light asphalt finishing
  - Ideal for professional contractors working on foundations, roads, and landscaping projects
  - Proven reliability in tough construction environments
  - Easy maintenance and widely available spare parts in Nigeria
  `
   },



   {
     id: 19004,
     name: 'TOTAL Gasoline Tamping Rammer 196cc / 6.5HP (TP880-2)',
     category: 'jumping-rammers',
     brand: 'TOTAL',
     price: 285000, // adjust based on your market price (commonly ₦220,000 - ₦380,000 in Nigeria)

     images: [
       'assets/img/concrete mixers and drum trucks/TOTAL GASOLINE TAMPING RAMMER 196cc  6.5HP TP880-2.jpg',
       'assets/img/tools/total-tamping-rammer-tp880-2-2.jpg',
       'assets/img/tools/total-tamping-rammer-tp880-2-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The TOTAL Gasoline Tamping Rammer 196cc / 6.5HP (TP880-2) is a powerful and durable compaction tool designed for tight spaces and narrow trenches where plate compactors cannot reach. Powered by a robust 196cc 4-stroke gasoline engine delivering 6.5HP, it provides strong impact force for effective compaction of cohesive soils, backfill, gravel, and asphalt. Its high jumping frequency and heavy-duty shoe plate make it ideal for foundation work, road construction, pipeline trenches, and landscaping projects. The ergonomic handle with vibration dampening system ensures operator comfort during prolonged use.`,

     specification: `
  - Product Name: Gasoline Tamping Rammer
  - Model: TP880-2
  - Brand: TOTAL
  - Engine Type: 196cc, 4-stroke, single cylinder, air-cooled gasoline engine
  - Engine Power: 6.5 HP
  - Impact Force: 13 - 15 kN
  - Jumping Height: 40 - 65 mm
  - Impact Frequency: 600 - 700 times/min
  - Plate / Shoe Size: Approx. 330 x 285 mm
  - Fuel Tank Capacity: 3.6 Liters
  - Starting System: Recoil starter
  - Operating Weight: Approx. 85 - 95 kg
  - Features: Anti-vibration handle, heavy-duty polyurethane bellows, reinforced base plate
  - Usage: Trench compaction, foundation backfill, road shoulder, asphalt patching, landscaping, narrow areas
  `,

     features: `
  - Powerful 196cc 6.5HP gasoline engine for strong compaction performance
  - High impact force (13-15 kN) and jumping frequency for excellent soil density
  - Heavy-duty shoe plate for durability and effective compaction in tight spaces
  - Ergonomic anti-vibration handle reduces operator fatigue
  - Robust construction with reinforced bellows for long service life
  - Easy recoil starting and simple maintenance
  - Ideal for compacting cohesive soils, gravel, sand, and asphalt in confined areas
  - Widely used by contractors for pipeline trenches, foundations, and road works
  - Portable and efficient for jobs where larger compactors cannot access
  - Trusted TOTAL quality with good after-sales support in Nigeria
  `
   },




   {
     id: 19006,
     name: 'INGCO Industrial Soft Grip Handle Wheelbarrow 90L (HHWB64018G)',
     category: 'wheel-barrows',
     brand: 'INGCO',
     price: 45000, // adjust based on your market price (commonly ₦35,000 - ₦65,000 in Nigeria)

     images: [
       'assets/img/wheel barrows and marine ropes/INGCO Industrial Soft Grip Handle Wheelbarrow 90kg.webp',
       'assets/img/tools/ingco-wheelbarrow-90l-hhwb64018g-2.jpg',
       'assets/img/tools/ingco-wheelbarrow-90l-hhwb64018g-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO Industrial Soft Grip Handle Wheelbarrow 90L (HHWB64018G) is a heavy-duty construction wheelbarrow built for tough daily use on construction sites, farms, and gardens. It features a strong steel tray with 90L water capacity (approx. 6 cubic feet sand capacity) and a maximum load of 150kg. The two-tone soft grip handles provide excellent comfort and control, reducing hand fatigue during long hours of work. Equipped with a 16" x 4.00-8 pneumatic wheel with bearings and diamond tread pattern for smooth rolling on rough surfaces. Its robust steel frame and reinforced legs make it highly durable for transporting sand, cement, gravel, bricks, and other materials.`,

     specification: `
  - Product Name: Industrial Wheelbarrow
  - Model: HHWB64018G
  - Brand: INGCO
  - Tray Capacity: 90 Liters (Water)
  - Sand Capacity: 6 CBF (Cubic Feet)
  - Max Load Capacity: 150 kg
  - Wheel Size: 16" x 4.00-8 pneumatic wheel with bearing
  - Tyre Type: Pneumatic with diamond tread pattern (4PR)
  - Handle Type: Two-tone soft grip ergonomic handles
  - Tray Thickness: Heavy-duty steel (approx. 0.8 - 1.0mm)
  - Frame/Leg: Reinforced steel tube (Handle: 1.2 x 32mm, Leg: 1.2 x 28mm)
  - Dimensions (LxHxCxAxBxh): Approx. 1400 x 610 x 595 x 860 x 600 x 280 mm
  - Weight: Approx. 15 - 18 kg (empty)
  - Usage: Construction sites, block making, farming, gardening, material transport
  `,

     features: `
  - Large 90L capacity ideal for heavy loads of sand, cement, gravel, and bricks
  - Maximum load capacity of 150kg for industrial and construction use
  - Comfortable two-tone soft grip handles reduce fatigue and improve control
  - Pneumatic 16" wheel with bearings for smooth and easy rolling on uneven terrain
  - Diamond tread tyre provides excellent grip and durability
  - Heavy-duty steel tray and reinforced frame for long-lasting performance
  - Robust leg design for stability when loaded or parked
  - Suitable for professional contractors, builders, farmers, and landscapers
  - Trusted INGCO industrial quality with good resistance to rust and wear
  - Easy to maneuver and maintain
  `
   },


   {
     id: 19007,
     name: 'TOTAL Vibrator Poker 45mm / 6m (TPVP1451)',
     category: 'poker-hose',
     brand: 'TOTAL',
     price: 95000, // adjust based on your market price (commonly ₦75,000 - ₦120,000 in Nigeria)

     images: [
       'assets/img/poker vibrator and plate compactor/total vibrator poker 45mm by 6m.jpg',
       'assets/img/tools/total-vibrator-poker-tpvp1451-2.jpg',
       'assets/img/tools/total-vibrator-poker-tpvp1451-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The TOTAL Vibrator Poker 45mm / 6m (TPVP1451) is a high-performance concrete vibrator head designed for effective compaction of concrete. With a 45mm diameter poker head and 6-meter flexible shaft, it delivers strong vibration to remove air pockets and voids from fresh concrete, resulting in dense, high-strength structures. It is commonly paired with gasoline engines (such as TOTAL or Robin 5HP) or electric motors. The 45mm head size offers a good balance between compaction power and maneuverability, making it ideal for columns, beams, slabs, foundations, and general construction work.`,

     specification: `
  - Product Name: Concrete Vibrator Poker
  - Model: TPVP1451
  - Brand: TOTAL
  - Poker Head Diameter: 45mm
  - Flexible Shaft Length: 6 meters
  - Vibration Frequency: 10,000 - 12,000 VPM (vibrations per minute)
  - Amplitude: Approx. 1.2 - 1.4 mm
  - Hose Material: High-quality rubber with steel reinforcement
  - Poker Head Material: Hardened steel with eccentric rotor
  - Connection Type: Standard coupling (compatible with TOTAL and most common engines)
  - Weight: Approx. 12 - 15 kg (complete with 6m hose)
  - Usage: Compaction of concrete in columns, beams, slabs, foundations, walls, and floor slabs
  `,

     features: `
  - 45mm diameter poker head for powerful and effective vibration
  - Extra-long 6-meter flexible shaft for deep reach in formwork
  - High vibration frequency (up to 12,000 VPM) for excellent concrete consolidation
  - Durable rubber hose with internal steel reinforcement for long service life
  - Hardened steel poker head with eccentric design for strong amplitude
  - Compatible with TOTAL gasoline engines and most 5HP engines
  - Ideal for professional contractors and construction companies
  - Reduces voids, honeycombs, and improves concrete strength and finish
  - Easy to couple and operate on job sites
  - Reliable TOTAL quality at an affordable price
  `
   },


   {
     id: 19008,
     name: 'Rod Bender - 50mm',
     category: 'rod-benders',
     brand: 'Generic',
     price: 185000, // adjust based on your market price (commonly ₦150,000 - ₦250,000 in Nigeria)

     images: [
       'assets/img/rod benders and cutters/rod benders 50mm.webp',
       'assets/img/tools/rod-bender-50mm-2.jpg',
       'assets/img/tools/rod-bender-50mm-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Rod Bender 50mm is a heavy-duty manual rebar bending machine designed for bending mild steel reinforcement bars (rebar) up to 50mm diameter. It is widely used on construction sites for accurate bending of rods for columns, beams, slabs, foundations, and other structural elements. This robust bender features a strong steel frame, long leverage arms for reduced effort, and multiple bending angles (0° to 180°). The machine allows precise and consistent bends without damaging the rebar, making it essential for steel fixers, fabricators, and civil engineering contractors.`,

     specification: `
  - Product Name: Manual Rod Bender / Rebar Bender
  - Max Bending Capacity: 50mm (mild steel rebar)
  - Bending Angle: 0° - 180°
  - Frame Material: Heavy-duty cast iron and steel
  - Lever Arms: Long steel handles for maximum leverage
  - Bending Pins: Multiple interchangeable pins and rollers
  - Design: Manual operation with gear-assisted mechanism in some models
  - Weight: Approx. 120 - 180 kg (depending on exact model)
  - Dimensions: Approx. 1200 x 800 x 900 mm
  - Usage: Construction sites, rebar fabrication, column stirrups, beam hooks, foundation work
  `,

     features: `
  - Bends rebar up to 50mm diameter with ease
  - Heavy-duty construction for durability and long service life
  - Long leverage arms reduce operator effort significantly
  - Precise bending with consistent angles (0° to 180°)
  - Multiple bending pins for different rod sizes and bend radii
  - Suitable for mild steel and high-yield reinforcement bars
  - No electricity required – ideal for remote sites
  - Robust frame ensures stability during heavy bending
  - Essential tool for steel fixers and construction companies
  - Cost-effective solution for medium to large rebar bending needs
  `
   },




   {
     id: 19009,
     name: 'Steel Rod Cutter - 40mm',
     category: 'rod-cutters',
     brand: 'Generic',
     price: 165000, // adjust based on your market price (commonly ₦130,000 - ₦220,000 in Nigeria)

     images: [
       'assets/img/rod benders and cutters/Steel-Rod-Cutting-Machine-40mm.webp',
       'assets/img/tools/rod-cutter-40mm-2.jpg',
       'assets/img/tools/rod-cutter-40mm-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Steel Rod Cutter 40mm is a heavy-duty manual rebar cutting machine designed for cutting mild steel reinforcement bars (rebar) up to 40mm diameter. It is widely used on construction sites, fabrication yards, and engineering projects for fast, clean, and accurate cutting of steel rods. Built with a strong steel frame and high-strength cutting blades, this cutter delivers efficient performance with minimal effort. Its long handle design provides excellent leverage, allowing operators to cut thick rods smoothly without electricity. This machine is an essential tool for steel fixers, contractors, and construction professionals who require reliable and precise cutting operations.`,

     specification: `
  - Product Name: Manual Steel Rod Cutter / Rebar Cutter
  - Max Cutting Capacity: 40mm (mild steel rebar)
  - Cutting Type: Manual shear cutting
  - Blade Material: Hardened alloy steel
  - Frame Material: Heavy-duty steel construction
  - Operation: Manual with long leverage handle
  - Cutting Speed: Fast and efficient manual cutting
  - Weight: Approx. 100 - 160 kg (depending on model)
  - Dimensions: Approx. 1000 x 700 x 800 mm
  - Usage: Construction sites, steel fabrication, reinforcement work, engineering projects
  `,

     features: `
  - Cuts rebar up to 40mm diameter efficiently
  - Heavy-duty steel frame ensures durability and stability
  - Sharp, hardened blades provide clean and precise cuts
  - Long handle design reduces operator effort
  - No electricity required – perfect for remote job sites
  - Fast manual cutting improves work productivity
  - Suitable for mild steel and reinforced bars
  - Compact and rugged design for site use
  - Reliable performance for continuous heavy-duty operations
  - Essential tool for builders, contractors, and steel fabricators
  `
   },


{
  id: 19010,
     name: 'SGT KNOTS Twisted ProManila Rope – 1.25" x 10ft (Tan)',
     category: 'ropes',
     brand: 'SGT KNOTS',
     price: 28000, // adjust based on your market (commonly ₦25,000 - ₦45,000 in Nigeria depending on import cost)

     images: [
       'assets/img/wheel barrows and marine ropes/marine manila ropes.jpg',
       'assets/img/ropes/sgt-knots-promanila-rope-2.jpg',
       'assets/img/ropes/sgt-knots-promanila-rope-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The SGT KNOTS Twisted ProManila Rope is a high-quality synthetic alternative to traditional Manila rope, designed for superior strength, durability, and resistance to harsh weather conditions. Measuring 1.25 inches in diameter and 10 feet in length, this tan-colored rope offers the natural look of manila while outperforming it in longevity and performance. Unlike natural fibers, ProManila rope resists rot, mold, moisture, and UV damage, making it ideal for both indoor and outdoor applications. It is perfect for construction, landscaping, marine use, lifting, pulling, and decorative purposes.`,

     specification: `
  - Product Name: Twisted ProManila Rope
  - Brand: SGT KNOTS
  - Diameter: 1.25 inches (approx. 32mm)
  - Length: 10 feet (approx. 3 meters)
  - Material: Synthetic polypropylene (UnManila)
  - Color: Tan (natural manila appearance)
  - Construction: 3-strand twisted rope
  - مقاومت: High resistance to moisture, UV, and chemicals
  - Weight: Lightweight and easy to handle
  - Usage: General-purpose, marine, construction, landscaping, decor
  `,

     features: `
  - Synthetic alternative to natural Manila rope with enhanced durability
  - Resistant to rot, mildew, moisture, and UV exposure
  - Strong and flexible for heavy-duty applications
  - Lightweight and easy to handle compared to natural fiber ropes
  - Maintains shape and strength even in wet conditions
  - Ideal for indoor and outdoor use
  - Natural tan color for aesthetic and decorative purposes
  - Suitable for tying, pulling, lifting, and general utility work
  - Long-lasting performance with minimal maintenance
  - Trusted quality from SGT KNOTS brand
  `
   },



{
     id: 19011,
     name: 'Total Power Trowel – 6.5HP Concrete Finishing Machine',
     category: 'power-trowels',
     brand: 'Total',
     price: 950000, // adjust based on your market (commonly ₦850,000 - ₦1,200,000 in Nigeria)

     images: [
       'assets/img/power trowel/total power trowels 6,5hp.jpeg',
       'assets/img/tools/power-trowel-6-5hp-2.jpg',
       'assets/img/tools/power-trowel-6-5hp-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Total Power Trowel 6.5HP is a high-performance concrete finishing machine designed for smoothing and polishing freshly poured concrete surfaces. Powered by a reliable 6.5 horsepower petrol engine, this walk-behind trowel delivers excellent power and efficiency for professional finishing of floors, slabs, and pavements. It is widely used on construction sites for achieving a smooth, level, and durable concrete surface. The machine features adjustable blades, a sturdy protective ring, and an ergonomic handle for easy control, making it ideal for contractors, builders, and flooring professionals.`,

     specification: `
  - Product Name: Power Trowel / Concrete Finishing Machine
  - Brand: Total
  - Engine Power: 6.5HP petrol engine
  - Engine Type: Air-cooled, 4-stroke engine
  - Blade Diameter: Approx. 900mm (36 inches)
  - Blades: 4 finishing blades (adjustable pitch)
  - Rotation Speed: Approx. 60 - 120 RPM
  - Fuel Type: Petrol (Gasoline)
  - Fuel Tank Capacity: Approx. 3.6L
  - Operation: Walk-behind
  - Weight: Approx. 80 - 100 kg
  - Usage: Concrete floor finishing, slab smoothing, surface polishing
  `,

     features: `
  - Powerful 6.5HP engine for efficient concrete finishing
  - Produces smooth, level, and professional surface finish
  - Adjustable blade pitch for different finishing stages
  - Durable steel guard ring for operator safety
  - Ergonomic handle for easy control and maneuverability
  - Heavy-duty construction for long-lasting performance
  - Ideal for large floor areas and construction projects
  - Stable operation with minimal vibration
  - Easy to maintain and operate
  - Trusted Total brand quality for construction professionals
  `
   },



   {
     id: 19012,
     name: '15m Fall Arrester Wire Rope Safety Equipment Falling Protector',
     category: 'Fall-Arresters',
     brand: 'Generic',
     price: 120000,
     images: ['assets/img/fall arresters/15m-Safety-Rope-Fall-Protection-Equipment-150kg-Capacity-Arrester.webp'
       
     ],

   inStock: true,
     description: '15 meter retractable fall arrester designed to protect workers operating at height. This safety device uses a high-strength galvanized steel wire rope with an automatic locking mechanism that instantly stops a fall. It is widely used in construction, scaffolding, tower climbing, roofing, and industrial maintenance where reliable fall protection is required.',
     specification: `
       - Cable Length: 15 Meters
       - Cable Material: Galvanized Steel Wire Rope
       - Cable Diameter: 4-5 mm
       - Housing Material: High Strength Polymer / Alloy
       - Hook Type: Heavy Duty Steel Snap Hook
       - Locking System: Automatic Fall Arrest Lock
       - Weight Capacity: Up to 140kg
       - Application: Construction, Tower Climbing, Industrial Work
     `,
     features: `
       - Automatic fall arrest locking system
       - Durable galvanized steel wire rope
       - Heavy duty snap hook connector
       - High impact resistant casing
       - Smooth retractable cable mechanism
       - Reliable protection for working at heights
     `
   },



   {
     id: 19013,
     name: 'Portable Drum Carrier – Strong Steel & Iron Wheel Roll',
     category: 'drum-trucks',
     brand: 'Generic',
     price: 180000, // adjust based on your market (commonly ₦150,000 - ₦250,000 in Nigeria)

     images: [
       'assets/img/drum trucks/drum truck.jpg',
       'assets/img/tools/drum-carrier-2.jpg',
       'assets/img/tools/drum-carrier-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Portable Drum Carrier is a heavy-duty material handling tool designed for lifting, transporting, and tilting industrial drums with ease. Built with strong steel and iron construction, this drum trolley provides excellent durability and stability when moving 200L (55-gallon) drums in warehouses, factories, construction sites, and workshops. It features smooth-rolling wheels and a secure gripping mechanism that firmly holds the drum during transport, reducing the risk of spills and accidents. This portable drum handler improves efficiency and safety when handling heavy barrels of oil, chemicals, water, and other liquids.`,

     specification: `
  - Product Name: Portable Drum Carrier / Drum Trolley
  - Material: Heavy-duty steel and iron
  - Capacity: Suitable for 200L (55-gallon) drums
  - Load Capacity: Approx. 300 - 450 kg
  - Wheel Type: Solid rubber or pneumatic wheels
  - Design: Wheel roll with drum gripping mechanism
  - Operation: Manual
  - Frame: Reinforced steel structure
  - Finish: Anti-rust coated paint
  - Usage: Warehouses, factories, oil handling, construction sites
  `,

     features: `
  - Strong steel and iron construction for maximum durability
  - Easily lifts and transports heavy drums with minimal effort
  - Secure grip mechanism prevents slipping during movement
  - Smooth-rolling wheels for easy maneuverability
  - Reduces manual lifting and risk of workplace injuries
  - Suitable for oil drums, chemical drums, and water barrels
  - Compact and portable design for convenient storage
  - Stable frame ensures safe handling of heavy loads
  - Ideal for industrial and commercial use
  - Improves efficiency in material handling operations
  `
   },


   {
     id: 19014,
     name: 'Toyo 6m Retractable Fall Arrestor',
     category: 'fall-arresters',
     brand: 'Toyo',
     price: 144000, // Current price range on Jumia Nigeria (around ₦144,000 - ₦150,000)
     images: [
       'assets/img/fall arresters/Toyo-6m-retractable-fall-arrestor.jpg',
       'assets/img/fall arresters/Toyo-3m-retractable-all-arrestor.jpg',
       'assets/img/tools/toyo-fall-arrestor-6m-2.jpg',
       'assets/img/tools/toyo-fall-arrestor-6m-3.jpg'
     ],
     inStock: true,
     jumiaLink: 'https://www.jumia.com.ng/toyo-6m-retractable-fall-arrestor',
     kongaLink: '',
     description: `The Toyo 6m Retractable Fall Arrestor is a self-retracting lifeline (also known as a yo-yo or fall arrest block) designed for height safety and fall protection. It provides workers with freedom of movement while automatically locking in the event of a fall. Ideal for construction sites, roofing, scaffolding, steel fixing, maintenance work, and other elevated tasks. The 6-meter cable length offers a good working radius while maintaining high safety standards. It features a durable housing, galvanized steel cable, and energy-absorbing mechanism to reduce impact forces.`,
     specification: `
  - Product Name: Toyo 6m Retractable Fall Arrestor
  - Model: Toyo 6m Fall Arrest Block
  - Length: 6 meters
  - Cable: Galvanized steel rope (typically 4-5mm diameter)
  - Housing: High-impact ABS plastic or sturdy polymer casing
  - Anchorage: Swivel hook or eye with connector
  - Harness End: Snap hook with load indicator
  - Standards: Compliant with EN 360 (common for retractable fall arrestors)
  - Max User Weight: Up to 140 kg (typical for this class)
  - Arresting Distance: Limited fall distance with quick lock-up
  - Weight: Approx. 3 - 5 kg (depending on exact variant)
  - Usage: Vertical and limited horizontal use on construction sites, high-rise buildings, bridges, and industrial maintenance
  `,
     features: `
  - Self-retracting 6m cable for automatic tension and easy movement
  - Instant locking mechanism activates during a fall for immediate arrest
  - Integrated energy absorber reduces impact force on the user
  - Durable galvanized steel lifeline resistant to corrosion
  - Swivel anchorage point prevents twisting of the cable
  - Lightweight yet robust design for portability on site
  - No electricity or external power required
  - Essential personal protective equipment (PPE) for workers at height
  - Cost-effective safety solution for steel fixers, scaffolders, and civil contractors in Nigeria
  - Compatible with full body safety harnesses
  `
   },

// ends at 21000


   //  pumping machines
   

  //  start at 21001
  // ends at 22000
{
    id: 21001,
     name: 'INGCO Centrifugal Water Pump 0.75HP (CPM5508)',
     category: 'pressure-pumps',
     brand: 'INGCO',
     price: 95000, // adjust based on your market (commonly ₦80,000 - ₦120,000 in Nigeria)

     images: [
       'assets/img/pressure and water pumps/Centrifugal Water Pump 0.75HP INGCO CPM5508.jpg',
       'assets/img/tools/ingco-cpm5508-2.jpg',
       'assets/img/tools/ingco-cpm5508-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO CPM5508 Centrifugal Water Pump is a reliable and efficient 0.75HP electric pump designed for domestic and light industrial water transfer applications. Built with a durable copper motor and corrosion-resistant pump body, it delivers strong water flow for homes, farms, gardens, and small-scale irrigation systems. This pump is ideal for boosting water pressure, transferring clean water, and supplying water from wells, tanks, and reservoirs. With stable performance, low noise operation, and energy efficiency, it is a dependable solution for everyday water pumping needs.`,

     specification: `
  - Product Name: Centrifugal Water Pump
  - Brand: INGCO
  - Model: CPM5508
  - Power: 0.75HP (550W)
  - Voltage: 220V - 240V / 50Hz
  - Motor Type: Copper winding motor
  - Max Flow Rate: Approx. 50 - 60 L/min
  - Max Head (Lift Height): Approx. 30 - 35 meters
  - Suction Depth: Up to 8 meters
  - Inlet/Outlet Diameter: 1 inch x 1 inch
  - Speed: Approx. 2850 RPM
  - Protection Class: IP44
  - Duty: Continuous operation
  - Usage: Domestic water supply, irrigation, water transfer, pressure boosting
  `,

     features: `
  - Efficient 0.75HP motor for steady water flow
  - Strong suction and high lift capability
  - Durable copper winding ensures long motor life
  - Corrosion-resistant pump body for extended durability
  - Low noise and energy-efficient operation
  - Compact and lightweight design for easy installation
  - Ideal for homes, farms, and small irrigation systems
  - Stable performance for continuous use
  - Easy maintenance and user-friendly design
  - Trusted INGCO quality for reliability and durability
  `
   },
   




   {
     id: 21002,
     name: 'INGCO Submersible Clean Water Pump 0.5HP (SPC3702)',
     category: 'submersible-pumps',
     brand: 'INGCO',
     price: 70000, // adjust based on your market (commonly ₦60,000 - ₦95,000 in Nigeria)

     images: [
       'assets/img/pressure and water pumps/ingco Submersible_Clean_Water_Pump_0.5HP 2.jpg',
       'assets/img/tools/ingco-spc3702-2.jpg',
       'assets/img/tools/ingco-spc3702-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The INGCO SPC3702 Submersible Clean Water Pump is a compact and efficient 0.5HP electric pump designed for draining and transferring clean or slightly dirty water. It operates fully submerged in water, making it ideal for removing water from tanks, wells, basements, ponds, and flooded areas. Equipped with a durable motor and corrosion-resistant housing, this pump ensures reliable performance and long service life. Its lightweight design and easy operation make it perfect for domestic use, light commercial applications, and emergency drainage.`,

     specification: `
  - Product Name: Submersible Clean Water Pump
  - Brand: INGCO
  - Model: SPC3702
  - Power: 0.5HP (370W)
  - Voltage: 220V - 240V / 50Hz
  - Motor Type: Copper winding motor
  - Max Flow Rate: Approx. 90 - 110 L/min
  - Max Head (Lift Height): Approx. 6 - 8 meters
  - Max Submersion Depth: Up to 7 meters
  - Outlet Diameter: 1 inch
  - Cable Length: Approx. 9 - 10 meters
  - Protection Class: IPX8 (fully submersible)
  - Duty: Continuous operation
  - Usage: Drainage, water transfer, wells, tanks, flooded areas
  `,

     features: `
  - Efficient 0.5HP motor for reliable water pumping
  - Fully submersible design for direct operation in water
  - High flow rate for fast drainage and water removal
  - Durable, corrosion-resistant body for long life
  - Lightweight and portable for easy handling
  - Low noise operation compared to surface pumps
  - Ideal for clean and slightly dirty water applications
  - Easy installation and maintenance
  - Suitable for homes, farms, and light commercial use
  - Trusted INGCO quality for durability and performance
  `
   },


   {
     id: 21003,
     name: 'Value Single Stage Vacuum Pump 1C – 1/4" SAE Port (3 CFM)',
     category: 'vacuum-pumps',
     brand: 'Value',
     price: 180000, // adjust based on your market (commonly ₦150,000 - ₦250,000 in Nigeria)

     images: [
       'assets/img/pressure and water pumps/Single Stage Value 1C Vacuum Pump.webp',
       'assets/img/tools/value-1c-2.jpg',
       'assets/img/tools/value-1c-3.jpg'
     ],

     inStock: true,
     jumiaLink: '',
     kongaLink: '',

     description: `The Value 1C Single Stage Vacuum Pump is a compact and efficient HVAC service pump designed for basic evacuation of air and moisture from refrigeration and air conditioning systems. With a flow rate of approximately 3 CFM (85 L/min), it is ideal for small to medium AC units, refrigerators, and maintenance work. Its single-stage rotary vane design offers reliable performance for general-purpose vacuum applications. Equipped with a standard 1/4" SAE inlet port, it is compatible with most manifold gauge sets and service hoses. Lightweight and portable, the Value 1C is perfect for technicians who require a dependable and cost-effective vacuum pump for everyday servicing tasks.`,

     specification: `
  - Product Name: Single Stage Vacuum Pump
  - Brand: Value
  - Model: 1C

  - Pump Type: Single Stage Rotary Vane
  - Flow Rate: 85 L/min (≈ 3 CFM)
  - Ultimate Vacuum: Approx. 150 microns (≈ 20 Pa)

  - Power: Approx. 1/4HP – 1/3HP
  - Voltage: 220V - 240V / 50Hz
  - Motor Type: Copper winding motor
  - Speed: Approx. 2800 RPM

  - Inlet Port:
      • 1/4" SAE

  - Oil Capacity: Approx. 250 ml
  - Oil Type: Vacuum pump oil (required)

  - Dimensions: Approx. 290 x 120 x 220 mm
  - Weight: Approx. 5 - 7 kg

  - Cooling System: Air-cooled
  - Operation: Electric

  - Usage:
      • Small air conditioning systems
      • Refrigerator servicing
      • HVAC maintenance work
      • General vacuum applications
  `,

     features: `
  - Compact and lightweight design for easy portability
  - Efficient single-stage operation for basic vacuum tasks
  - 3 CFM flow rate suitable for small to medium systems
  - Standard 1/4" SAE port for universal compatibility
  - Durable construction for long-lasting performance
  - Low noise and smooth operation
  - Easy oil filling and monitoring system
  - Energy-efficient motor for reduced power consumption
  - Ideal for technicians, workshops, and maintenance jobs
  - Cost-effective solution for entry-level HVAC servicing
  `
   },



   {
  id: 21004,
  name: 'INGCO Gasoline Water Pump 2" (GWP202) – 6.5HP Petrol Engine',
  category: 'water-pumps',
  brand: 'INGCO',
  price: 185000, // adjust based on your market (commonly ₦160,000 - ₦250,000 in Nigeria)

  images: [
    'assets/img/pressure and water pumps/INGCO Gasoline Water Pump 2inch GWP202.jpg',
    'assets/img/tools/ingco-gwp202-2.jpg',
    'assets/img/tools/ingco-gwp202-3.jpg'
  ],

  inStock: true,
  jumiaLink: '',
  kongaLink: '',

  description: `The INGCO GWP202 Gasoline Water Pump is a powerful 2-inch petrol-powered pump designed for high-volume water transfer in farms, construction sites, and industrial applications. Equipped with a reliable 6.5HP engine, it delivers strong suction and discharge performance, making it ideal for irrigation, drainage, and flood control. Its 2-inch (50mm) inlet and outlet allow for fast water movement, while the rugged steel frame ensures durability and stability in tough working conditions. This pump operates independently of electricity, making it perfect for remote locations and heavy-duty outdoor use.`,

  specification: `
  - Product Name: Gasoline Water Pump
  - Brand: INGCO
  - Model: GWP202

  - Engine Power: 6.5HP
  - Engine Type: 4-stroke petrol engine
  - Fuel Type: Petrol (Gasoline)
  - Fuel Tank Capacity: Approx. 3.6L

  - Inlet Diameter: 2" (50mm)
  - Outlet Diameter: 2" (50mm)

  - Max Flow Rate: Approx. 500 - 600 L/min
  - Max Head (Lift Height): Approx. 26 - 30 meters
  - Suction Depth: Up to 7 - 8 meters

  - Starting System: Recoil (manual start)
  - Frame: Heavy-duty steel protective frame

  - Dimensions: Approx. 500 x 380 x 420 mm
  - Weight: Approx. 23 - 28 kg

  - Usage:
      • Farm irrigation
      • Construction site water transfer
      • Flood control and drainage
      • Pond and reservoir pumping
  `,

  features: `
  - Powerful 6.5HP engine for high-volume water transfer
  - Large 2-inch inlet and outlet for fast pumping
  - Strong suction and high lift capability
  - Petrol-powered – works without electricity
  - Durable steel frame for protection and stability
  - Easy recoil start system
  - Suitable for heavy-duty outdoor use
  - Efficient fuel consumption for extended operation
  - Portable design for easy movement on site
  - Trusted INGCO quality for reliability and performance
  `
},



// ends at 22000


// cleaning and garden supplies

// starts at 22001



   {
     id: 22001,
  name: 'Maxmech Gasoline Brush Cutter BC430 (2-Stroke)',
  category: 'gasoline-brushcutters',
  brand: 'Maxmech',
  price: 160000,

  images: [
    'assets/img/brushcutters/Maxmech GASOLINE BRUSH CUTTER bc430.jpg'
  ],

  inStock: true,
  description: 'The Maxmech BC430 Gasoline Brush Cutter is a powerful and reliable 2-stroke machine designed for cutting grass, weeds, and clearing overgrown vegetation. Equipped with a 43cc engine, it delivers strong cutting performance for farms, gardens, and landscaping work. Its ergonomic design with shoulder strap ensures comfort during extended use, while its compatibility with both nylon trimmer heads and metal blades makes it versatile for different cutting tasks.',

  specification: `
  Model: BC430
  Engine Type: Air-cooled 2-Stroke
  Displacement: 43cc
  Rated Power: 1.25kW (1.7HP)
  No-load Speed: Up to 8200 RPM
  Fuel Tank Capacity: 1.0L
  Power Source: Petrol + Oil mix
  Weight: Approx. 6 - 7 kg
  `,

  features: `
  Powerful 43cc 2-stroke engine for heavy-duty cutting
  High speed up to 8200 RPM for efficient grass and weed clearing
  Dual cutting options: metal blade and nylon trimmer head
  Ergonomic handle and shoulder strap for comfort and balance
  Durable construction for farm and industrial use
  Large 1.0L fuel tank for longer working time
  Ideal for agriculture, landscaping, roadside clearing, and large compounds
  Easy maintenance with available spare parts
  `,

  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

   {
     id: 22002,
     name: 'TOTAL 20V Cordless Grass Trimmer (TGTLI20301)',
     category: 'cordless-brushcutters',
     brand: 'Total',
     price: 95000,

     images: [
       'assets/img/brushcutters/TOTALLithium-IongrassTrimmerTGTLI20301SD-2.jpg',
       'assets/img/brushcutters/TOTALLithium-IongrassTrimmerTGTLI20301SD.mp4'
     ],

   

     inStock: true,
     description: 'The TOTAL TGTLI20301 20V Cordless Grass Trimmer is a lightweight and efficient tool designed for trimming grass, edging lawns, and maintaining outdoor spaces. Powered by a 20V lithium-ion battery, it delivers strong performance with a no-load speed of 8200 rpm and a wide 300mm cutting diameter. Its cordless design ensures easy mobility, making it ideal for home gardens, landscaping, and quick maintenance tasks without the need for fuel or power cables.',

     specification: `
  Model: TGTLI20301
  Voltage: 20V
  No-load Speed: 8200 rpm
  Cutting Diameter: 300mm 
  Line Diameter: 1.6mm twisted
  Line Length: 5m
  Battery: 20V 2.0Ah Li-ion (included)
  Charger: Included
  `,

     features: `
  Powerful 20V cordless grass trimmer for efficient lawn maintenance
  High-speed motor delivering up to 8200 rpm for clean cuts
  Wide 300mm cutting path for faster coverage
  Lightweight and ergonomic design for easy handling
  Edging function for neat lawn borders
  Cordless operation for maximum mobility and convenience
  Includes battery, charger, safety goggles, and gloves
  Ideal for trimming grass, weeds, and garden edges
  `,
    jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },


   {
     id: 22003,
     name: 'Brush Cutter Carbide Blade 40 Teeth (255mm / 10")',
     category: 'brush-cutter-accessories',
     brand: 'Generic',
     price: 25000,

     images: [
       'assets/img/brushcutters/brusch cutter blade-40T.webp',
       'assets/img/brushcutters/brusch cutter blade-40T.webp2.webp'
     ],

     inStock: true,
     description: 'The 40 Teeth Carbide Blade for brush cutters is a heavy-duty cutting accessory designed for tackling tough vegetation, thick grass, shrubs, and small trees. Built with tungsten carbide-tipped teeth, it offers superior durability, sharpness, and long-lasting performance compared to standard steel blades. With a 255mm (10-inch) diameter and universal arbor compatibility, it fits most petrol brush cutters and delivers clean, efficient cuts in demanding environments.',

     specification: `
  Blade Type: Carbide Tip (TCT)
  Teeth: 40 Teeth
  Diameter: 255mm (10 Inch)
  Bore Size: 20mm / 25.4mm (1 inch)
  Thickness: Approx. 1.25 – 2.0mm
  Max Speed: Up to 10,000 RPM
  Application: Grass, brush, shrubs, small trees
  `,

     features: `
  40 sharp carbide-tipped teeth for aggressive cutting performance
  Tungsten carbide tips for long-lasting durability and wear resistance
  Universal fit compatible with most brush cutters and trimmers
  Ideal for cutting thick grass, weeds, bushes, and small saplings
  Strong and heat-resistant design for high-speed operation
  Provides cleaner and faster cuts compared to nylon line heads
  Suitable for farming, landscaping, and heavy-duty clearing work
  `,
  
  jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },



   {
     id: 22004,
     name: '20-Piece Car Cleaning Kit – Detailing Brush Set (Interior & Exterior)',
     category: 'cleaning-accessories',
     brand: 'Generic',
     price: 26000,

     images: [
       'assets/img/brushcutters/Hot-selling car cleaning kit 20-piece set, detail brush, interior car wash cleaning brush.jpg'
     ],

     inStock: true,
     description: 'This 20-piece car cleaning kit is a complete detailing solution designed for both interior and exterior vehicle care. It includes a variety of brushes, drill attachments, microfiber towels, cleaning gels, and accessories to effectively remove dust, dirt, and grime from hard-to-reach areas. Ideal for car owners, detailers, and professionals, this all-in-one set ensures a thorough and scratch-free cleaning experience for dashboards, air vents, wheels, seats, and more.',

     specification: `
  Product Type: Car Cleaning & Detailing Kit
  Total Pieces: 20
  Material: Plastic, nylon bristles, microfiber
  Brush Types: Soft detailing brushes, drill brushes, wire brushes
  Application: Interior & exterior car cleaning
  `,

     features: `
  Complete 20-piece set for full car detailing
  Includes soft brushes for dashboards, vents, and delicate surfaces
  Drill brush attachments for deep cleaning wheels and carpets
  Microfiber towels for scratch-free wiping and polishing
  Cleaning gel for tight spaces like air vents and buttons
  Multi-purpose use for cars, motorcycles, and home cleaning
  Durable and reusable materials for long-term use
  Easy to carry and organize
  `,

     jumiaLink: 'https://www.jumia.com.ng/',
     kongaLink: 'https://www.konga.com/'
   },



   {
     id: 22005,
  name: 'TOTAL High Pressure Hose Pipe 5m (TGTHPH526) for Pressure Washer',
  category: 'pressure-hose',
  brand: 'Total',
  price: 18000,

  images: [
    'assets/img/hose/High-Pressure-Hose-Pipe-5m-Total-Pressure-Washer-Hose-Pipe.jpg'
  ],

  inStock: true,
  description: 'The TOTAL 5-meter High Pressure Hose Pipe (TGTHPH526) is a durable and flexible replacement hose designed for TOTAL pressure washers. Built with reinforced PVC or rubber material, it can withstand high pressure up to 160 bar, ensuring efficient water flow for cleaning vehicles, driveways, walls, and outdoor surfaces. Its 5m length provides extended reach while maintaining strong pressure performance, making it ideal for both home and professional cleaning tasks.',

  specification: `
  Model: TGTHPH526
  Length: 5 meters
  Pressure Rating: Up to 160 bar (16 MPa)
  Material: Reinforced PVC / Rubber
  Temperature Range: -20°C to +60°C
  Compatibility: TOTAL pressure washer models (TGT11316, TGT11226, etc.)
  Connection Type: Quick-connect / threaded fittings
  `,

  features: `
  Strong high-pressure hose designed for pressure washers
  5-meter length for extended cleaning reach
  Withstands up to 160 bar pressure for powerful performance
  Durable reinforced material for long lifespan
  Flexible and kink-resistant design for easy handling
  Easy to install and replace
  Compatible with multiple TOTAL pressure washer models
  Ideal for car washing, driveway cleaning, and outdoor use
  `,
  
  jumiaLink: 'https://www.jumia.com.ng/',
  kongaLink: 'https://www.konga.com/'
},

   {
     id: 22006,
     name: 'Samstorm Industrial Floor Scrubber And Buffing Machine',
     category: 'floor-scrubber-sweepers',
     brand: 'Samstorm',
     price: 765000,

     images: [
       'assets/img/scrubbersandlawnmowers/scrubbers.webp'
     ],

     inStock: true,
     description: 'Heavy-duty single disc floor scrubber and buffing machine with powerful 2.5 HP motor and sealed oil-filled gearbox. Designed for professional scrubbing, stripping, buffing and polishing of hard floors.',

     specification: `
  Model: Samstorm Single Disc Machine
  Power: 2.5 HP
  Pad/Brush Size: 17 inches
  Speed: 175 RPM
  Gearbox: Sealed oil-filled
  Voltage: 220-240V
  `,

     features: `
  Powerful 2.5 HP motor
  Sealed oil-filled gearbox for durability
  Heavy-duty construction
  Multi-purpose: scrub, strip, buff, polish
  Suitable for tile, concrete, marble, vinyl
  `,

     jumiaLink: 'https://www.jumia.com.ng/mlp-floor-scrubber-machine/',
     kongaLink: 'https://www.konga.com/product/samstorm-industrial-floor-scrubber-and-buffing-machine-6665146'
   },


   {
     id: 22007,
     name: 'Karcher K5 High Pressure Washer',
     category: 'electric-pressure-washer',
     brand: 'Karcher',
     price: 680000,

     images: [
       'assets/img/pressure and water pumps/Karcher K5 High Pressure Washer.jpg'
     ],

     inStock: true,
     description: 'Powerful electric high pressure washer ideal for moderate dirt on large vehicles, stone walls, bicycles, patios and outdoor surfaces. Features water-cooled motor and Quick Connect system.',

     specification: `
  Model: K5 (Classic / Power Control)
  Power: 2.1 kW
  Max Pressure: 145 bar
  Flow Rate: max. 500 l/h
  Area Performance: 40 m²/h
  High-Pressure Hose: 8 m
  Voltage: 220-240V
  Weight: approx. 13 kg
  `,

     features: `
  Water-cooled motor for longer life
  Quick Connect trigger gun
  Vario Power spray lance
  Dirt blaster for stubborn dirt
  Plug 'n' Clean detergent system
  Integrated water filter
  Suitable for cars, walls, driveways and garden furniture
  `,

     jumiaLink: 'https://www.jumia.com.ng/mlp-karcher-pressure-washer/',
     kongaLink: 'https://www.konga.com/product/karcher-k5-high-pressure-washer-5478778'
   },



   {
     id: 22008,
     name: 'Total TPWLI20084 Cordless Pressure Washer',
     category: 'cordless-pressure-washer',
     brand: 'Total',
     price: 185000,

     images: [
       'assets/img/pressure and water pumps/total cordless pw TPWLI20084.jpg'
     ],

     inStock: true,
     description: 'Compact 20V cordless pressure washer ideal for quick cleaning of cars, bikes, patios, windows and outdoor surfaces. Portable and battery-powered for use anywhere without electricity.',

     specification: `
  Model: TPWLI20084
  Voltage: 20V
  Max Pressure: 24.8 bar
  Flow Rate: 2.2 L/min
  Battery: 4.0Ah Lithium-Ion (included)
  Charger: Fast charger (included)
  Inlet Hose: 6m with quick connector
  Nozzle: 6-pattern spray gun
  Foam Tank: 400ml
  Weight: Approx. 2.6 - 3.5 kg
  `,

     features: `
  Fully cordless with 20V battery system
  24.8 bar pressure for effective cleaning
  Auto stop system for battery saving
  6-in-1 adjustable nozzle
  Includes foam producer for better cleaning
  Lightweight and portable design
  Compatible with Total 20V battery platform
  Ideal for car washing, garden cleaning and outdoor use
  `,

     jumiaLink: 'https://www.jumia.com.ng/total-20v-cordless-pressure-washer-419186100.html',
     kongaLink: 'https://www.konga.com/product/total-tpwli20084-cordless-pressure-washer'
   },
   


   {
     id: 22009,
     name: 'INGCO Industrial High Pressure Washer 130Bar 3000W-HPWR30008P',
     category: 'industrial-pressure-washer',
     brand: 'INGCO',
     price: 1250000,

     images: [
       'assets/img/pressure and water pumps/ingco-gasoline-industrial-pressure-washer-hpwr30008.jpg'
     ],

     inStock: true,
     description: 'Heavy-duty 3000W industrial electric pressure washer with copper pump and copper wire motor. Delivers up to 130 bar pressure for tough commercial cleaning tasks like driveways, vehicles, buildings and heavy equipment.',

     specification: `
  Model: HPWR30008P
  Power: 3000W
  Max Pressure: 130 Bar (1850 PSI)
  Flow Rate: 14 L/min
  Motor: Copper wire induction motor
  Pump: Copper pump
  Voltage: 220-240V ~ 50/60Hz
  Hose: 10m steel-wired high pressure hose
  Weight: 51 kg
  Lifetime: Up to 800 hours
  `,

     features: `
  Powerful 3000W copper wire motor
  Durable copper pump for long life
  High 130 bar pressure and 14 L/min flow
  Designed for commercial and industrial use
  10m reinforced steel-wired hose
  Metal spray gun with soap bottle
  Heavy-duty build with excellent performance
  Ideal for deep cleaning of vehicles, walls, floors and machinery
  `,

     jumiaLink: 'https://www.jumia.com.ng/mlp-ingco-pressure-washer/',
     kongaLink: 'https://www.konga.com/product/ingco-hpwr30008p-industrial-pressure-washer'
   },



   {
  id: 22010,
  name: 'Ingco Industrial Gasoline High Pressure Washer 7HP GHPW2103',
  category: 'petrol-pressure-washer',
  brand: 'Ingco',
  price: 1250000,

  images: [
    'assets/img/pressure and water pumps/Ingco Industrial Gasoline High Pressure Washer 7HP GHPW2103-1.jpg'
  ],

  inStock: true,
  description: 'Powerful 7HP gasoline pressure washer with axial pump and brass head. Delivers up to 235 bar pressure for heavy-duty commercial and industrial cleaning of vehicles, machinery, driveways, buildings and stubborn dirt.',

  specification: `
  Model: GHPW2103
  Engine Power: 7.0 HP
  Max Pressure: 235 Bar (3450 PSI)
  Flow Rate: 9.5 L/min (2.5 GPM)
  Engine: OHV 4-stroke, 212cc
  Pump: Axial pump with brass head
  Starting System: Recoil
  Fuel Tank: 6 L
  Hose: 9-10m high pressure hose
  Lifetime: Up to 300 hours
  `,

  features: `
  Strong 7.0 HP gasoline engine
  High 235 bar pressure for tough cleaning jobs
  Brass pump head with oil change function
  Axial pump for reliable performance
  Portable design suitable for sites without electricity
  Metal spray gun and multiple nozzles
  Ideal for cars, heavy equipment, walls and industrial cleaning
  `,

  jumiaLink: 'https://www.jumia.com.ng/ingco-ghpw2103-7.0hp-gasoline-pressure-washer/',
  kongaLink: 'https://www.konga.com/product/ingco-ghpw2103-gasoline-pressure-washer'
},

   


{
  id: 22011,
  name: 'TOTAL TVLI2006-20V Battery Cyclone Vacuum Cleaner',
  category: 'cyclone-vacuum-cleaners',
  brand: 'Total',
  price: 85000,

  images: [
    'assets/img/vacuum cleaners and hoses/TOTAL 40084 TVLI2006-20V Battery Cyclone Vacuum Cleaner.webp'
  ],

  inStock: true,
  description: 'Compact 20V cordless cyclone vacuum cleaner with multi-cyclone technology and HEPA filter. Lightweight and portable for quick cleaning of floors, cars, sofas and hard-to-reach areas.',

  specification: `
  Model: TVLI2006
  Voltage: 20V
  Power: 120W
  Suction: ≥9 kPa
  Dust Capacity: 0.8L
  Battery: 2.0Ah Lithium-Ion (included)
  Runtime: ≥35 min (low) / ≥18 min (high)
  Charge Time: Approx. 1.2 hours
  Filter: HEPA + Multi Cyclone
  Motor: Pure copper wire
  `,

  features: `
  Cordless 20V battery operation
  Multi-cyclone suction system
  HEPA filter for fine dust
  Two power levels (low/high)
  Lightweight and portable design
  Includes metal tube, crevice nozzle & sofa brush
  Compatible with TOTAL 20V battery platform
  Ideal for home, car and quick clean-ups
  `,

  jumiaLink: 'https://www.jumia.com.ng/total-20-v-li-ion-vacuum-cleaner-tvli2006/',
  kongaLink: 'https://www.konga.com/product/total-tvli2006-20v-cordless-vacuum-cleaner'
},



   {
     id: 22012,
     name: 'Karcher WD 5 Wet & Dry Vacuum 1100W 240V',
     category: 'wet and dry-vacuum-cleaners',
     brand: 'Karcher',
     price: 185000,

     images: [
       'assets/img/vacuum cleaners and hoses/Karcher - WD 5 Wet & Dry Vacuum 1100W 240V.webp'
     ],

     inStock: true,
     description: 'Powerful 1100W wet and dry vacuum cleaner with 25L capacity. Handles both wet and dry dirt efficiently, ideal for home, workshop, car and outdoor cleaning.',

     specification: `
  Model: WD 5
  Power: 1100W
  Container Capacity: 25 L
  Voltage: 220-240V
  Suction Power: Approx. 260-280W
  Air Flow: Max. 70 L/s
  Vacuum: Max. 260 mbar
  Hose Length: 2.2 m
  Power Cable: 5 m
  Weight: Approx. 8.5 kg
  `,

     features: `
  Wet and dry vacuuming capability
  Large 25L container
  Powerful 1100W motor
  Blower function
  Filter cleaning system
  Power tool connection socket
  Switchable wet/dry floor nozzle
  Includes crevice nozzle and fleece filter bag
  Sturdy and durable design
  `,

     jumiaLink: 'https://www.jumia.com.ng/mlp-karcher-vacuum-cleaner/',
     kongaLink: 'https://www.konga.com/product/karcher-wd-5-wet-dry-vacuum-1100w'
   },



   {
     id: 22013,
     name: 'TOTAL 75L Wet & Dry Vacuum Cleaner-TVC24751',
     category: 'industrial-vacuum-cleaners',
     brand: 'Total',
     price: 285000,

     images: [
       'assets/img/vacuum cleaners and hoses/total-industrial-vacuume-cleaners-TVC24751.jpeg'
     ],

     inStock: true,
     description: 'Heavy-duty industrial wet and dry vacuum cleaner with dual motors delivering 2400W total power. Features a massive 75L capacity tank suitable for large-scale cleaning of wet spills, dry dust, debris, and liquids in workshops, construction sites, warehouses, factories, and commercial spaces.',

     specification: `
  Model: TVC24751
  Power: 2 x 1200W (Total 2400W)
  Voltage: 220-240V ~ 50/60Hz
  Air Flow: 3 m³/min
  Vacuum Pressure: 16-17 KPa
  Dust Capacity: 75 Liters
  Power Cable: 5.5 meters
  Weight: 22 kg
  Noise Level: 72-82 dB
  Function: Wet & Dry vacuuming
  `,

     features: `
  Dual powerful motors for strong suction performance
  Large 75L stainless steel tank for extended cleaning without frequent emptying
  Handles both wet spills and dry dust/debris efficiently
  Ideal for industrial, commercial and heavy-duty applications
  Long 5.5m power cable for wide working range
  Durable and robust construction for daily professional use
  Includes flexible hose and standard accessories
  High air flow and strong vacuum pressure
  Suitable for workshops, garages, construction sites and large facilities
  `,

     jumiaLink: 'https://www.jumia.com.ng/mlp-total-vacuum-cleaner/',
     kongaLink: 'https://www.konga.com/product/total-tvc24751-wet-dry-vacuum-cleaner'
   },



   {
     id: 22014,
     name: 'TOTAL 1600W Electric Lawn Mower-TGT616151 ',
     category: 'electric-cordless-lawn-mower',
     brand: 'Total',
     price: 185000,

     images: [
       'assets/img/lawn mowers/total-1600w-electric-lawn-mower-TGT616152.jpg'
     ],

     inStock: true,
     description: 'Powerful 1600W corded electric lawn mower with 380mm cutting width and 50L grass collection box. Ideal for small to medium-sized gardens and lawns. Features 5 cutting height adjustments and induction motor for reliable performance.',

     specification: `
  Model: TGT616151
  Power: 1600W
  Voltage: 220-240V ~ 50/60Hz
  Motor: Induction motor
  No-load Speed: 2800 rpm
  Cutting Width: 380 mm
  Cutting Height: 28 / 38 / 48 / 58 / 68 mm (5 positions)
  Grass Box Capacity: 50 Liters
  Power Cord: 0.35 m (with extension cable support)
  `,

     features: `
  Powerful 1600W induction motor
  380mm cutting width for efficient mowing
  5-stage cutting height adjustment
  Large 50L grass collection box
  Lightweight and easy to maneuver
  Ideal for small to medium gardens and lawns
  Corded electric - consistent power
  Suitable for home and light commercial use
  `,

     jumiaLink: 'https://www.jumia.com.ng/total-electric-lawn-mower-tgt616151/',
     kongaLink: 'https://www.konga.com/product/total-tgt616151-1600w-electric-lawn-mower'
   },

{
  id: 22015,
  name: 'Water Discharge Hose - 100M X 2"',
  category: 'water-pump-hose',
  brand: 'Generic',
  price: 145000,

  images: [
    'assets/img/hose/Water Discharge Hose - 100M X 2.jpg',
  ],

  inStock: true,
  description: 'Heavy-duty 100 meter long 2-inch water discharge hose ideal for pumping, drainage, irrigation, and dewatering. Suitable for use with water pumps, flood control, construction sites, and agricultural applications.',

  specification: `
  Length: 100 Meters
  Diameter: 2 inches (50mm)
  Material: Reinforced PVC with high tensile polyester yarn
  Working Pressure: 4 - 6 Bar
  Burst Pressure: 12 - 18 Bar
  Temperature Range: -10°C to +60°C
  Weight: Approx. 25 - 30 kg per roll
  `,

  features: `
  Extra long 100 meter length
  2-inch (50mm) diameter for high flow rate
  Reinforced with polyester yarn for durability
  Flexible and kink-resistant
  Suitable for water pumps and discharge applications
  Ideal for irrigation, drainage, flooding, and construction
  Lightweight compared to rubber hoses
  Cost-effective and reliable for long-distance water transfer
  `,

  jumiaLink: 'https://www.jumia.com.ng/mlp-water-discharge-hose/',
  kongaLink: 'https://www.konga.com/product/water-discharge-hose-100m-x-2-inch'
},


   {
     id: 22016,
     name: 'TOTAL High Pressure Hose for Pressure Washers (TGTHPH526)',
     category: 'pressure-hose',
     brand: 'TOTAL',
     price: 85000,

     images: [
       'assets/img/hose/TOTAL HIGH PRESSURE HOSE FOR HIGH PRESSURE WASHERS (TGTHPH526).webp',
     ],

     inStock: true,
     description: 'The TOTAL TGTHPH526 high pressure hose is a premium-quality, heavy-duty hose specifically engineered for use with pressure washers. It is designed to handle high-pressure water flow efficiently, making it ideal for both residential and industrial cleaning applications. Whether you are washing vehicles, cleaning driveways, removing dirt from construction equipment, or maintaining outdoor surfaces, this hose delivers consistent and reliable performance.\n\nConstructed with reinforced PVC and internal steel wire braiding, the hose offers excellent durability, flexibility, and resistance to wear, abrasion, and harsh environmental conditions. It is built to withstand high working pressures without bursting or leaking, ensuring safety and long-lasting usage.\n\nThe hose is also designed for ease of use, featuring flexible material that prevents kinks and allows smooth water flow even during extended operations. Its secure and leak-proof connectors ensure a tight fit with compatible TOTAL pressure washers and similar machines.\n\nThis hose is a perfect choice for professionals and homeowners who require a dependable, long-lasting, and high-performance solution for demanding cleaning tasks.',

     specification: `
  Model: TGTHPH526
  Hose Type: High Pressure Reinforced Hose
  Material: Heavy-duty PVC with steel wire reinforcement
  Length: 5 - 10 Meters (depending on variant)
  Inner Diameter: Standard pressure washer fitting
  Working Pressure: 150 - 180 Bar
  Burst Pressure: Up to 450 Bar
  Temperature Range: 0°C to +60°C
  Connector Type: Quick-connect / threaded (model dependent)
  Compatibility: TOTAL Pressure Washers and other compatible brands
  `,

     features: `
  High-pressure performance suitable for tough cleaning tasks
  Reinforced with steel wire for extra strength and durability
  Resistant to abrasion, wear, and harsh working conditions
  Flexible design prevents kinks and ensures smooth operation
  Leak-proof connectors for secure and stable connection
  Easy to install and compatible with most TOTAL pressure washers
  Ideal for car washing, driveway cleaning, industrial and commercial use
  Long service life with minimal maintenance required
  Reliable and efficient water flow for maximum cleaning power
  `,

     jumiaLink: 'https://www.jumia.com.ng/catalog/?q=total+high+pressure+hose',
     kongaLink: 'https://www.konga.com/search?search=total+high+pressure+hose'
   },


   {
     id: 22017,
     name: 'High Pressure Hose Connector for Pressure Washers',
     category: 'pressure-washer-accessories',
     brand: 'Generic',
     price: 12000,

     images: [
       'assets/img/hose/hose-connector-pressure-washer.jpg',
     ],

     inStock: true,
     description: 'This high-pressure hose connector is a durable and essential accessory designed to securely join pressure washer hoses or connect hoses to pressure washer machines and spray guns. Built for reliability, it ensures a tight, leak-free connection even under high water pressure conditions.\n\nMade from high-quality brass or stainless steel (depending on variant), the connector offers excellent resistance to corrosion, rust, and wear, making it suitable for both indoor and outdoor use. It is engineered to withstand demanding cleaning tasks such as car washing, industrial cleaning, driveway maintenance, and agricultural use.\n\nThe connector features a user-friendly design that allows for quick installation and removal without the need for specialized tools. Its precision threading or quick-connect mechanism ensures compatibility with most standard pressure washer hoses and fittings.\n\nWhether you are replacing a worn-out connector or extending your hose system, this connector provides a dependable and long-lasting solution for maintaining strong water flow and pressure performance.',

     specification: `
  Product Type: Hose Connector / Coupling
  Material: Brass / Stainless Steel (varies by model)
  Connection Type: Quick-connect or threaded
  Size: 1/4", 3/8", or M22 (depending on variant)
  Working Pressure: Up to 200 - 300 Bar
  Compatibility: Most pressure washers and high-pressure hoses
  Corrosion Resistance: Yes
  Usage: Indoor and outdoor
  `,

     features: `
  Strong and durable construction for long-term use
  Leak-proof design ensures secure connection
  Easy to install and remove without tools
  Compatible with most pressure washer hoses and fittings
  Resistant to rust, corrosion, and high pressure
  Ideal for extending hoses or replacing damaged connectors
  Suitable for car wash, industrial cleaning, and home use
  Compact and lightweight design
  `,

     jumiaLink: 'https://www.jumia.com.ng/catalog/?q=pressure+washer+hose+connector',
     kongaLink: 'https://www.konga.com/search?search=pressure+washer+hose+connector'
   },


   {
     id: 22018,
     name: '18pcs Line Hose Connector Assembly Set – Pneumatic Iron Parts for Hoses',
     category: 'hose-accessories',
     brand: 'Generic',
     price: 25000,

     images: [
       'assets/img/hose/18pcs Line Hose Connector Assembly Set Pneumatic Iron Parts for Hoses.webp',
     ],

     inStock: true,
     description: 'This 18-piece pneumatic hose connector assembly set is a versatile and essential kit designed for connecting, extending, and repairing air hoses in pneumatic systems. It is ideal for use in workshops, garages, industrial environments, and DIY applications where compressed air tools are commonly used.\n\nThe set includes a variety of connectors such as straight couplers, T-connectors, Y-connectors, and reducers, allowing users to create multiple connection configurations with ease. Each component is manufactured from high-quality iron, ensuring durability, strength, and resistance to wear even under continuous use.\n\nDesigned to handle compressed air efficiently, these fittings provide secure, leak-proof connections that help maintain consistent air pressure and improve the performance of pneumatic tools such as air compressors, spray guns, nail guns, and impact wrenches.\n\nWith its easy-to-install design, this connector set allows quick assembly and disassembly without requiring specialized tools, making it suitable for both professionals and DIY users. Whether you are setting up a new pneumatic line or repairing an existing one, this kit provides a reliable and cost-effective solution.',

     specification: `
  Product Type: Pneumatic Hose Connector Set
  Number of Pieces: 18pcs
  Material: High-strength iron
  Connection Type: Push-fit / threaded (varies by piece)
  Compatible Hose Size: Standard pneumatic hose sizes
  Working Pressure: Suitable for standard air compressor systems
  Application: Air tools, compressors, pneumatic systems
  Corrosion Resistance: Moderate (recommended for dry environments)
  `,

     features: `
  Complete 18-piece connector set for versatile use
  Durable iron construction for long-lasting performance
  Provides secure and leak-proof air connections
  Includes multiple connector types (straight, T, Y, reducers)
  Easy to install and remove without specialized tools
  Suitable for air compressors and pneumatic tools
  Ideal for workshops, garages, and industrial use
  Helps maintain consistent air pressure and system efficiency
  Compact kit for easy storage and transport
  `,

     jumiaLink: 'https://www.jumia.com.ng/catalog/?q=pneumatic+hose+connector+set',
     kongaLink: 'https://www.konga.com/search?search=pneumatic+hose+connector+set'
   },


   {
     id: 22019,
     name: 'TOTAL Gasoline Lawn Mower 3.5KW (4.8HP) (TGT196201)',
     category: 'gasoline-lawn-mowers',
     brand: 'TOTAL',
     price: 650000,

     images: [
       'assets/img/lawn mowers/TOTAL TGT196201 Gasoline Lawn Mower 3.5KW (4.8HP).jpg',
       'assets/img/lawn mowers/TOTAL TGT196201 Gasoline Lawn Mower 3.5KW (4.8HP)-2.jpg',
       'assets/img/lawn mowers/TOTAL TGT196201 Gasoline Lawn Mower 3.5KW (4.8HP)-3.jpg',
       'assets/img/lawn mowers/TOTAL TGT196201 Gasoline Lawn Mower 3.5KW (4.8HP)-3.jpg'
     ],

     inStock: true,
     description: 'The TOTAL TGT196201 gasoline lawn mower is a powerful and reliable machine designed for efficient lawn maintenance in residential, commercial, and industrial environments. Equipped with a robust 3.5KW (4.8HP) petrol engine, this mower delivers strong cutting performance, making it suitable for medium to large lawns, gardens, estates, and outdoor facilities.\n\nBuilt with durability and ease of use in mind, the mower features a sturdy steel deck that can withstand tough working conditions while ensuring consistent cutting results. Its high-performance engine provides smooth operation and the ability to handle thick grass with ease.\n\nThe mower is designed for user comfort and convenience, with an ergonomic handle, easy start system, and adjustable cutting height to suit different grass levels. It also includes a spacious grass collection bag, reducing the need for frequent emptying and improving work efficiency.\n\nWhether you are a professional landscaper or a homeowner looking for a dependable mowing solution, the TOTAL TGT196201 offers excellent performance, durability, and value for money.',

     specification: `
  Model: TGT196201
  Engine Type: Gasoline (Petrol)
  Engine Power: 3.5KW (4.8HP)
  Displacement: Approx. 196cc
  Cutting Width: Approx. 460mm
  Cutting Height: Adjustable (multiple levels)
  Deck Material: Steel
  Grass Collection: Yes (rear bag)
  Start System: Recoil start
  Fuel Tank Capacity: Approx. 1.0 Liter
  Application: Lawn mowing, garden maintenance, landscaping
  `,

     features: `
  Powerful 3.5KW (4.8HP) gasoline engine for high performance
  Wide cutting deck for faster lawn coverage
  Adjustable cutting height for different grass levels
  Durable steel deck for long-lasting use
  Large grass collection bag for efficient operation
  Easy recoil start system
  Ergonomic handle for comfortable use
  Suitable for residential and commercial lawn care
  Handles thick grass and uneven surfaces effectively
  Low maintenance and reliable operation
  `,

     jumiaLink: 'https://www.jumia.com.ng/catalog/?q=total+lawn+mower',
     kongaLink: 'https://www.konga.com/search?search=total+lawn+mower'
   },


   {
     id: 22020,
     name: 'INGCO Cordless Lawn Mower 2x20V Li-Ion (Solo) (LMLI20182)',
     category: 'electric-cordless-lawn-mower',
     brand: 'INGCO',
     price: 480000,

     images: [
       'assets/img/lawn mowers/ingco cordless lawnmower - Lmli20182.webp',
     ],

     inStock: true,
     description: 'The INGCO LMLI20182 cordless lawn mower is a modern, battery-powered solution designed for efficient and convenient lawn maintenance. Powered by two 20V lithium-ion batteries (40V combined), this mower delivers strong cutting performance without the noise, fumes, or maintenance associated with gasoline-powered machines.\n\nThis "solo" version is supplied without batteries and charger, making it ideal for users who already own compatible INGCO 20V batteries. It provides excellent flexibility and cost savings while maintaining high performance.\n\nThe mower features a durable and lightweight design, allowing for easy maneuverability around lawns, gardens, and tight spaces. Its adjustable cutting height enables users to achieve the desired grass length, while the wide cutting deck ensures faster coverage of medium-sized lawns.\n\nWith a built-in grass collection system, the mower efficiently gathers cut grass, reducing cleanup time and improving overall productivity. It is perfect for residential users seeking a quiet, eco-friendly, and easy-to-use lawn care solution.',

     specification: `
  Model: LMLI20182
  Power Source: Battery (Cordless)
  Voltage: 2 x 20V (40V combined)
  Battery Type: Lithium-Ion (Not Included - Solo version)
  Cutting Width: Approx. 330 - 380mm
  Cutting Height: Adjustable (multiple levels)
  Grass Collection: Yes (collection bag included)
  Deck Material: Durable plastic/steel combination
  Noise Level: Low compared to gasoline mowers
  Application: Residential lawn maintenance
  `,

     features: `
  Cordless design for maximum mobility and convenience
  Powered by dual 20V batteries for strong performance
  Eco-friendly with no emissions or fuel required
  Low noise operation suitable for residential areas
  Adjustable cutting height for precise lawn finishing
  Lightweight and easy to maneuver
  Grass collection bag for efficient cleanup
  Compatible with INGCO 20V battery platform
  Ideal for small to medium-sized lawns
  Low maintenance compared to petrol mowers
  `,

     jumiaLink: 'https://www.jumia.com.ng/catalog/?q=ingco+cordless+lawn+mower',
     kongaLink: 'https://www.konga.com/search?search=ingco+cordless+lawn+mower'
   },

//  ends at 24000

// farm tools

  //  start at 25000

  {
     id: 25000,
     name: 'TOTAL Gasoline Tiller 196cc (TGC5001)',
     category: 'farm-machines',
     brand: 'TOTAL',
     price: 450000,

     images: [
       'assets/img/farm equipment/TOTAL GASOLINE TILLER 196cc (TGC5001).jpg',
       'assets/img/tools/total gasoline tiller tgc5001 2.jpg',
       'assets/img/tools/total gasoline tiller tgc5001 3.jpg'
     ],

     inStock: true,

     description: 'The TOTAL Gasoline Tiller 196cc (TGC5001) is a powerful agricultural machine designed for efficient soil cultivation, tilling, and land preparation. Equipped with a robust 196cc gasoline engine, it delivers high performance suitable for both small-scale farms and professional agricultural use.\n\nThis tiller is built to break up hard soil, mix nutrients, and prepare planting beds with ease. Its strong rotating tines penetrate the soil effectively, improving aeration and ensuring optimal conditions for crop growth.\n\nDesigned for durability and ease of use, it features sturdy construction, ergonomic handles, and smooth maneuverability. It is ideal for farmers, gardeners, and landscapers looking for a reliable and efficient tilling solution.',

     specification: `
  Model: TGC5001
  Brand: TOTAL
  Engine Type: Gasoline engine
  Engine Capacity: 196cc
  Power Output: High-performance engine
  Tilling Width: Approx. 500mm
  Tilling Depth: Adjustable
  Fuel Type: Petrol (Gasoline)
  Application: Soil cultivation, farming, gardening
  `,

     features: `
  Powerful 196cc gasoline engine for heavy-duty performance
  Efficient soil tilling and land preparation
  Strong rotating tines for deep soil penetration
  Adjustable tilling depth for different applications
  Durable construction for long-term use
  Ergonomic handle design for comfort and control
  Suitable for farming, gardening, and landscaping
  Easy to operate and maintain
  `
   },

   {
     id: 25001,
     name: 'Carbon Steel Garden Spade Shovel with Handle',
     category: 'farm-tools',
     brand: 'Generic',
     price: 18000,

     images: [
       'assets/img/farm equipment/Steel Garden Spade Shovel With Handle.avif',
       'assets/img/tools/garden spade shovel 2.jpg',
       'assets/img/tools/garden spade shovel 3.jpg'
     ],

     inStock: true,

     description: 'The Carbon Steel Garden Spade Shovel with Handle is a durable and versatile agricultural tool designed for digging, lifting, and moving soil, sand, and other materials. Made from high-quality carbon steel, the blade offers excellent strength, sharpness, and resistance to wear, making it suitable for tough farming and gardening tasks.\n\nThe shovel features a sturdy handle that provides a comfortable grip and better control during use. Its ergonomic design reduces strain, allowing for extended use without discomfort. The strong blade edge easily penetrates soil, making digging and planting more efficient.\n\nIdeal for farmers, gardeners, and construction workers, this spade shovel is a reliable tool for land preparation, planting, and general outdoor work.',

     specification: `
  Material: Carbon steel blade
  Handle Material: Wood / reinforced metal (varies)
  Blade Type: Flat / slightly curved spade
  Length: Standard full-length handle
  Grip: Ergonomic handle design
  Application: Digging, lifting, soil preparation, gardening
  `,

     features: `
  Strong carbon steel blade for durability and long life
  Sharp edge for easy soil penetration
  Sturdy handle for better control and comfort
  Suitable for farming, gardening, and construction tasks
  Ergonomic design reduces user fatigue
  Multi-purpose tool for digging and lifting materials
  Weather-resistant and reliable performance
  Easy to use and maintain
  `
   }

  // ends at 27000


























];
constructor() {
  this.checkForDuplicateIds();
}

private checkForDuplicateIds() {
  const ids = this.products.map(p => p.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

  if (duplicates.length > 0) {
    throw new Error('❌ Duplicate Product IDs Found: ' + duplicates.join(', '));
  } else {
    console.log('✅ All product IDs are unique');
  }
}


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

getCategoriesByGroup(groupName: string): string[] {
  const categories = this.products?.filter((p: Product) => p.group === groupName)
                                   .map((p: Product) => p.category) ?? [];
  return categories;
}




  public get currentSearchQueryValue(): string {
    return this.searchQuerySubject.value;
  }
}

