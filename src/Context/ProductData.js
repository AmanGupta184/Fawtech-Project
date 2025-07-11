import PS5Image from '../Assets/Images/Products/PS5_Image_Edited.png'; 
import XboxImage from '../Assets/Images/Products/xboxConsole.png';
import SwitchImage from '../Assets/Images/Products/switch.jpg';
import SteamDeck from '../Assets/Images/Products/steamDeck.png';
import MetaQuest from '../Assets/Images/Products/metaQuest.png';
import PS5ProImage from '../Assets/Images/Products/PS5ProImage.jpg';
import PS4Image from '../Assets/Images/Products/PS4Image.jpg';

import PlayStation5PortalImage from '../Assets/Images/Products/PlayStation5PortalImage.jpg';
import MSIClawImage from '../Assets/Images/Products/MSIClawImage.jpg';

import LenovoLegionImage from '../Assets/Images/Products/LenovoLegion.png';
import LenovoLOQImage from '../Assets/Images/Products/LenovoLOQ.png';
import HPImage from '../Assets/Images/Products/HP_laptop.jpg';
import SurfacePro from '../Assets/Images/Products/SurfacePro.png';

import MacBookPro1416Image from '../Assets/Images/Products/MacBookPro1416Image.jpg';
import MacMiniImage from '../Assets/Images/Products/MacMiniImage.jpg';
import PencilImage from '../Assets/Images/Products/PencilImage.png';
import AirpodsAirpodsMaxImage from '../Assets/Images/Products/AirpodsAirpodsMaxImage.jpg';

import LexarImage from '../Assets/Images/Products/lexar.png';
import ToshibaImage from '../Assets/Images/Products/toshibaMemory.png';
import TranscendImage from '../Assets/Images/Products/Transcend.png';
import KingstonImage from '../Assets/Images/Products/Kingston.png';

import IpadImage from '../Assets/Images/Products/ipad.png';
import MW0Y3Image from '../Assets/Images/Products/MacMW0Y3.png';

import AirSeriesImage from '../Assets/Images/Products/AirSeriesImage.jpg';
import NeoSeriesImage from '../Assets/Images/Products/NeoSeriesImage.jpg';

import Nitro from '../Assets/Images/Products/nitro.png';
import Aspire from '../Assets/Images/Products/aspire.png';
import Predator from '../Assets/Images/Products/predator.png'; 

import SonySDImage from '../Assets/Images/Products/SonySD.png';
import PSVRImage from '../Assets/Images/Products/PSVR.png';
import DysonImage from '../Assets/Images/Products/dyson.jpg';
import JBLImage from '../Assets/Images/Products/jbl_speakers.jpg';
import HarmanKardonImage from '../Assets/Images/Products/HarmanKardonImage.jpg';
import BoseImage from '../Assets/Images/Products/BoseImage.jpg';
import MarshallImage from '../Assets/Images/Products/MarshallImage.jpg';
import SonyImage from '../Assets/Images/Products/SonyImage.jpg';
import BangAndOlufsenImage from '../Assets/Images/Products/BangAndOlufsenImage.jpg';

import MetaProAdvanced from '../Assets/Images/Products/MetaProAdvanced.jpg';

import ROGAlly from '../Assets/Images/Products/asusRogAlly.png';
import LegionGo from '../Assets/Images/Products/LegionGo.png';

import SurfaceProCoPilotPlus from '../Assets/Images/Products/SurfaceProCo-Pilot+.png';
import HPVictusGamingLaptop from '../Assets/Images/Products/HPVictusGamingLaptop.png';
import HPOMEN16 from '../Assets/Images/Products/HPOMEN16.png';
import ASUSTUFGamingF15 from '../Assets/Images/Products/ASUSTUFGamingF15.png';

import DysonAirwrapMultiStyler from '../Assets/Images/Products/DysonAirwrapMultiStyler.png';
import DysonCorraleHairStraightener from '../Assets/Images/Products/DysonCorraleHairStraightener.png';
import DysonV15DetectVacuumCleaner from '../Assets/Images/Products/DysonV15DetectVacuumCleaner.png';
import DysonAirstraitImage from '../Assets/Images/Products/DysonAirstraitImage.jpg';
import DysonPurifierHotAndCoolImage from '../Assets/Images/Products/DysonPurifierHotAndCoolImage.jpg';

import DJIAvataFPVDrone from '../Assets/Images/Products/DJIAvataFPVDrone.png';
import DJIMini4Pro from '../Assets/Images/Products/DJIMini4Pro.png';
import DJIInspire3 from '../Assets/Images/Products/DJIInspire3.png';
import DJIMavic3Pro from '../Assets/Images/Products/DJIMavic3Pro.png';
import FPVImage from '../Assets/Images/Products/FPVImage.jpg';

const ProductData = [
  {
    name: 'Xbox Series X',
    brand: 'Microsoft',
    category: 'Gaming Consoles',
    images: [XboxImage],
    description: 'Microsoft’s powerful consoles for 4K gaming and backward compatibility.',
    specs: '8-core AMD Zen 2 CPU, 12 TFLOP GPU, 16GB GDDR6 RAM, 1TB SSD, 4K UHD, Dolby Vision'
  },
  {
    name: 'PlayStation 5',
    brand: 'Sony',
    category: 'Gaming Consoles',
    images: [PS5Image],
    description: 'Sony’s next-gen console with immersive haptics, ray tracing, and ultra-fast SSD.',
    specs: 'AMD Zen 2 CPU, RDNA 2 GPU, 16GB GDDR6, 825GB SSD, 4K Gaming, HDR, Wi-Fi 6'
  },
  {
  name: 'PlayStation 5 Pro',
  brand: 'Sony',
  category: 'Gaming Consoles',
  images: [PS5ProImage],
  description: 'Upgraded version of PlayStation 5 with better GPU and 4K gaming support.',
  specs: 'Custom AMD RDNA 3 GPU, 1TB SSD, 4K/120Hz support, Ray Tracing, DualSense controller'
},
{
  name: 'PlayStation 4',
  brand: 'Sony',
  category: 'Gaming Consoles',
  images: [PS4Image],
  description: 'Popular last-gen console with a vast game library and online multiplayer.',
  specs: 'AMD Jaguar 8-core CPU, 500GB–1TB HDD, 1080p gaming, DualShock 4 controller'
},
{
  name: 'PlayStation 5 Portal',
  brand: 'Sony',
  category: 'Handheld Gaming Consoles',
  images: [PlayStation5PortalImage],
  description: 'Remote Play handheld device for streaming PS5 games over Wi-Fi.',
  specs: '8” LCD 1080p display, DualSense features, Wi-Fi streaming, 60Hz refresh rate'
},
{
  name: 'MSI Claw',
  brand: 'MSI',
  category: 'Handheld Gaming Consoles',
  images: [MSIClawImage],
  description: 'Windows-based handheld gaming PC with Intel Core Ultra processor.',
  specs: 'Intel Core Ultra 7, 7” FHD 120Hz display, 16GB RAM, 1TB SSD, Wi-Fi 7'
},

  {
  name: 'Nintendo Switch 2 OLED',
  brand: 'Nintendo',
  category: 'Handheld Gaming Consoles',
  images: [SwitchImage],
  description: 'Enhanced OLED portable console with vibrant display, improved audio, and refined design.',
  specs: 'Custom NVIDIA chip, 7" OLED display, 64GB storage, improved battery life, enhanced Joy-Cons with better drift resistance'
},

  {
  name: 'Steam Deck OLED',
  brand: 'Valve',
  category: 'Handheld Gaming Consoles',
  images: [SteamDeck],
  description: 'Upgraded handheld PC gaming console with OLED display and better battery life for immersive portable gaming.',
  specs: 'AMD APU (Zen 2 + RDNA 2), 7.4" OLED display (90Hz), up to 1TB NVMe SSD, 50Whr battery, faster Wi-Fi 6E, improved thermals'
},
  {
  name: 'Meta Quest 3',
  brand: 'Meta',
  category: 'VR',
  images: [MetaQuest],
  description: 'Next-gen standalone VR headset with mixed reality support, better visuals, and slimmer optics.',
  specs: 'Qualcomm Snapdragon XR2 Gen 2, 8GB RAM, up to 512GB Storage, 2064x2208 per eye, full-color passthrough, inside-out tracking'
},
{
  name: 'Meta Quest Pro Advance',
  brand: 'Meta',
  category: 'VR',
  images: [MetaProAdvanced],
  description: 'High-end VR/MR headset built for professionals, offering premium optics, eye tracking, and advanced controllers.',
  specs: 'Qualcomm Snapdragon XR2+, 12GB RAM, 256GB Storage, 1800x1920 per eye, eye & face tracking, color passthrough, self-tracking controllers'
},
  {
  name: 'PlayStation VR 2',
  brand: 'Sony',
  category: 'Gaming Consoles',
  images: [PSVRImage],
  description: 'Next-gen VR headset for PS5 with advanced haptics, eye tracking, and stunning visual fidelity.',
  specs: '2000x2040 OLED per eye, 120Hz refresh rate, 110° FOV, eye tracking, haptic feedback, adaptive triggers'
},

    {
    name: 'Lenovo Legion',
    brand: 'Lenovo',
    category: 'Gaming and Professional Laptops',
    images: [LenovoLegionImage],
    description: 'Premium gaming performance with bold design and top-tier cooling.',
    specs: 'Intel Core i7-13700H, NVIDIA RTX 4060, 16GB DDR5 RAM, 1TB SSD, 16" QHD 165Hz'
  },
  {
    name: 'Lenovo LOQ',
    brand: 'Lenovo',
    category: 'Gaming and Professional Laptops',
    images: [LenovoLOQImage],
    description: 'Entry-level gaming power designed for casual and rising gamers.',
    specs: 'Intel Core i5-12450H, NVIDIA RTX 3050, 8GB RAM, 512GB SSD, 15.6" FHD 144Hz'
  },
  {
    name: 'HP',
    brand: 'HP',
    category: 'Gaming and Professional Laptops',
    images: [HPImage],
    description: 'Affordable, feature-rich laptops for everyday use.',
    specs: 'AMD Ryzen 5, Radeon Graphics, 8GB RAM, 512GB SSD, 14" FHD display'
  },
  {
    name: 'Microsoft Surface Pro for Business, Co Pilot + PC',
    brand: 'Microsoft',
    category: 'Gaming and Professional Laptops',
    images: [SurfacePro],
    description: 'Ultra-portable 2-in-1 with Snapdragon power and built-in AI features.',
    specs: 'Snapdragon X Elite, 16GB RAM, 512GB SSD, 13" PixelSense touchscreen, detachable keyboard'
  },
  {
    name: 'Acer Nitro V',
    brand: 'Acer',
    category: 'Gaming and Professional Laptops',
    images: [Nitro],
    description: 'Budget gaming laptop with solid specs and cooling.',
    specs: 'Intel Core i5-12500H, RTX 3050, 8GB RAM, 512GB SSD, 15.6" FHD 144Hz'
  },
  {
    name: 'Acer Aspire 5',
    brand: 'Acer',
    category: 'Gaming and Professional Laptops',
    images: [Aspire],
    description: 'Everyday productivity laptop with sleek design and reliability.',
    specs: 'AMD Ryzen 7, Radeon Graphics, 16GB RAM, 512GB SSD, 15.6" FHD display'
  },
  {
    name: 'Acer Predator Helios',
    brand: 'Acer',
    category: 'Gaming and Professional Laptops',
    images: [Predator],
    description: 'High-end gaming beast with top specs and RGB keyboard.',
    specs: 'Intel Core i9, RTX 4080, 32GB RAM, 1TB SSD, 16" QHD 240Hz'
  },
  {
    name: 'Lexar',
    brand: 'Lexar',
    category: 'Memory Cards',
    images: [LexarImage],
    description: 'High-speed SD cards for prosumers and professionals.',
    specs: 'Lexar Professional 1066x SDXC, 128GB, up to 160MB/s read, UHS-I, V30'
  },
  {
    name: 'Toshiba',
    brand: 'Toshiba',
    category: 'Memory Cards',
    images: [ToshibaImage],
    description: 'Durable, high-capacity cards ideal for cameras and mobile devices.',
    specs: 'Toshiba Exceria Pro N502, 128GB, UHS-II, up to 270MB/s read, waterproof'
  },
  {
    name: 'Transcend',
    brand: 'Transcend',
    category: 'Memory Cards',
    images: [TranscendImage],
    description: 'Affordable and reliable cards for everyday use.',
    specs: 'Transcend 300S SDHC UHS-I, 64GB, up to 95MB/s read, Class 10'
  },
  {
    name: 'Kingston',
    brand: 'Kingston',
    category: 'Memory Cards',
    images: [KingstonImage],
    description: 'Memory solutions known for durability and value.',
    specs: 'Kingston Canvas Go! Plus, 128GB microSD, UHS-I, A2, V30, 170MB/s'
  },
  {
    name: 'Sony SD Card',
    brand: 'Sony',
    category: 'Memory Cards',
    images: [SonySDImage],
    description: 'Professional-grade SD card with ultra-fast read/write speeds.',
    specs: 'Sony SF-G Tough Series, 128GB, UHS-II, up to 300MB/s read, IP68'
  },
  {
    name: 'iPad',
    brand: 'Apple',
    category: 'Apple',
    images: [IpadImage],
    description: 'iPads with powerful chips and premium design.',
    specs: 'Apple iPad 10th Gen, A14 Bionic, 64GB/256GB, 10.9" Liquid Retina, Wi-Fi 6'
  },
  {
    name: 'MacBook Air',
    brand: 'Apple',
    category: 'Apple',
    images: [MW0Y3Image],
    description: 'M2-powered MacBook Air with ultra-slim design and all-day battery.',
    specs: '13-inch and 15-inch, Apple M2 chip, 8-core CPU, 8GB RAM, 256GB SSD, 13.6" Retina Display'
  },
  {
  name: "MacBook Pro 14'16",
  brand: 'Apple',
  category: 'Apple',
  images: [MacBookPro1416Image],
  description: 'Apple’s flagship laptop with powerful M-series chips for pros.',
  specs: 'Apple M3/M3 Pro/M3 Max, Liquid Retina XDR, up to 96GB RAM, 22-hour battery'
},
{
  name: 'Mac Mini',
  brand: 'Apple',
  category: 'Apple',
  images: [MacMiniImage],
  description: 'Compact desktop Mac with M-series performance in a tiny footprint.',
  specs: 'Apple M2/M2 Pro, up to 32GB RAM, 512GB–2TB SSD, multiple I/O ports'
},
{
  name: 'Pencil',
  brand: 'Apple',
  category: 'Apple',
  images: [PencilImage],
  description: 'Precision stylus for iPads ideal for drawing, notes, and navigation.',
  specs: 'Pressure-sensitive, tilt detection, magnetic attachment, USB-C/Lightning'
},
{
  name: 'Airpods / Airpods Max',
  brand: 'Apple',
  category: 'Apple',
  images: [AirpodsAirpodsMaxImage],
  description: 'Wireless Apple earbuds and over-ear headphones with spatial audio.',
  specs: 'H1/H2 chip, active noise canceling, Transparency mode, Adaptive EQ'
},
{
  name: 'Dyson Airstrait',
  brand: 'Dyson',
  category: 'Dyson',
  images: [DysonAirstraitImage],
  description: 'Hair straightener that styles wet hair with air, no hot plates.',
  specs: 'Air-powered styling, wet-to-dry, precise airflow, heat protection'
},
{
  name: 'Dyson Purifier Hot & Cool',
  brand: 'Dyson',
  category: 'Dyson',
  images: [DysonPurifierHotAndCoolImage],
  description: '3-in-1 air purifier, fan, and heater with HEPA filtration.',
  specs: 'HEPA H13 filter, real-time air monitoring, heating & cooling modes'
},

  {
    name: 'Dyson Hair Tools',
    brand: 'Dyson',
    category: 'Dyson Products',
    images: [DysonImage],
    description: 'Premium styling tools with airflow technology.',
    specs: 'Includes Dyson Airwrap, Supersonic Hair Dryer, intelligent heat control, multiple attachments'
  },
  {
  name: 'JBL',
  brand: 'JBL',
  category: 'Audio Components',
  images: [JBLImage],
  description: 'High-quality portable and home speakers with signature sound.',
  specs: 'Bass-heavy tuning, Bluetooth, waterproof (varies), long battery life'
},
{
  name: 'Harman Kardon',
  brand: 'Harman Kardon',
  category: 'Audio Components',
  images: [HarmanKardonImage],
  description: 'Premium home audio equipment known for elegant design and clear sound.',
  specs: 'Hi-Fi speakers, Bluetooth/Smart options, room-filling sound'
},
{
  name: 'Bose',
  brand: 'Bose',
  category: 'Audio Components',
  images: [BoseImage],
  description: 'Noise-canceling headphones and speakers with industry-leading tech.',
  specs: 'ANC, custom EQ, Spatial Audio, Bluetooth, multi-device pairing'
},
{
  name: 'Marshall',
  brand: 'Marshall',
  category: 'Audio Components',
  images: [MarshallImage],
  description: 'Vintage-inspired speakers and headphones with powerful rock-tuned sound.',
  specs: 'Bluetooth, analog knobs, durable build, deep bass'
},
{
  name: 'Sony',
  brand: 'Sony',
  category: 'Audio Components',
  images: [SonyImage],
  description: 'Renowned for versatile audio gear from budget to pro.',
  specs: 'LDAC support, noise canceling, 360 Reality Audio, wide range'
},
{
  name: 'Bang & Olufsen',
  brand: 'Bang & Olufsen',
  category: 'Audio Components',
  images: [BangAndOlufsenImage],
  description: 'Luxury audio brand with stunning aesthetics and top-tier sound.',
  specs: 'Premium materials, room calibration, wireless multiroom audio'
},

  //#######################################//
  {
  name: 'ASUS ROG Ally X',
  brand: 'ASUS',
  category: 'Handheld Gaming Consoles',
  image: [ROGAlly],
  description: 'Portable Windows gaming handheld with fast refresh rate and ergonomic design.',
  specs: 'AMD Ryzen Z1 Extreme, 7" FHD 120Hz, 16GB RAM, 512GB SSD, Windows 11, USB-C + XG Mobile'
},
{
  name: 'Lenovo Legion Go',
  brand: 'Lenovo',
  category: 'Handheld Gaming Consoles',
  image: [LegionGo],
  description: 'Windows handheld with detachable controllers and large screen.',
  specs: 'AMD Ryzen Z1 Extreme, 8.8" QHD+ 144Hz, 16GB RAM, 1TB SSD, Windows 11, detachable joysticks'
},
{
  name: 'Surface Pro 10 with Co-Pilot+ PC',
  brand: 'Microsoft',
  category: 'Gaming and Professional Laptops',
  image: [SurfaceProCoPilotPlus],
  description: '2-in-1 device with Snapdragon AI chip and productivity-focused design.',
  specs: 'Snapdragon X Elite, 16GB RAM, 512GB SSD, 13" PixelSense Flow Display, detachable keyboard'
},
{
  name: 'HP Victus Gaming Laptop',
  brand: 'HP',
  category: 'Gaming and Professional Laptops',
  image: [HPVictusGamingLaptop],
  description: 'Affordable gaming laptop with strong specs for entry-level players.',
  specs: 'Intel Core i5-13420H, RTX 3050, 16GB RAM, 512GB SSD, 15.6" FHD 144Hz'
},
{
  name: 'HP OMEN',
  brand: 'HP',
  category: 'Gaming and Professional Laptops',
  image: [HPOMEN16],
  description: 'Performance gaming laptop with high refresh rate and thermal control.',
  specs: 'Intel Core i7-13700HX, RTX 4070, 16GB RAM, 1TB SSD, 16.1" QHD 240Hz'
},
{
  name: 'ASUS TUF',
  brand: 'ASUS',
  category: 'Gaming and Professional Laptops',
  image: [ASUSTUFGamingF15],
  description: 'Durable, budget-friendly gaming laptop with solid specs.',
  specs: 'Intel Core i7-12700H, RTX 4060, 16GB RAM, 1TB SSD, 15.6" FHD 144Hz, military-grade build'
},
{
  name: 'Dyson Airwrap Multi-Styler',
  brand: 'Dyson',
  category: 'Dyson',
  image: [DysonAirwrapMultiStyler],
  description: 'Versatile hair styler that curls, smooths, and volumizes using air.',
  specs: 'Multiple attachments, Coanda effect, intelligent heat control, storage case'
},
{
  name: 'Dyson Corrale Hair Straightener',
  brand: 'Dyson',
  category: 'Dyson',
  image: [DysonCorraleHairStraightener],
  description: 'Cordless straightener with flexing plates and battery power.',
  specs: 'Manganese copper plates, OLED display, 30min cordless use, intelligent heat'
},
{
  name: 'Dyson V12 Detect Vacuum Cleaner',
  brand: 'Dyson',
  category: 'Dyson',
  image: [DysonV15DetectVacuumCleaner],
  description: 'Smart cordless vacuum with laser dust detection.',
  specs: '230AW suction, HEPA filter, laser dust tech, LCD screen, 60min runtime'
},
{
  name: 'Mavic Pro Series',
  brand: 'DJI',
  category: 'DJI',
  images: [DJIMavic3Pro],
  description: 'Professional drone lineup with high-end cameras and long-range control.',
  specs: '4K/5.1K video, up to 46 mins flight, omnidirectional obstacle sensing'
},
{
  name: 'Air Series',
  brand: 'DJI',
  category: 'DJI',
  images: [AirSeriesImage],
  description: 'Lightweight yet powerful DJI drones suitable for aerial photography.',
  specs: 'Up to 48MP stills, 4K/60fps video, 34–46 mins flight time'
},
{
  name: 'Mini Series',
  brand: 'DJI',
  category: 'DJI',
  images: [DJIMini4Pro],
  description: 'Compact DJI drones under 250g designed for beginners and travel use.',
  specs: '2.7K to 4K video, up to 38 mins flight, GPS + downward sensors'
},
{
  name: 'Neo Series',
  brand: 'DJI',
  category: 'DJI',
  images: [NeoSeriesImage],
  description: 'DJI’s modern drone lineup with beginner-friendly controls and safety.',
  specs: 'HD video, smart flight modes, obstacle detection'
},
{
  name: 'Avata Series',
  brand: 'DJI',
  category: 'DJI',
  images: [DJIAvataFPVDrone],
  description: 'FPV-style drones built for immersive flying and stabilized video capture.',
  specs: '4K/60fps video, built-in propeller guards, head-tracking support'
},
{
  name: 'FPV',
  brand: 'DJI',
  category: 'DJI',
  images: [FPVImage],
  description: 'High-speed FPV racing drone with manual mode and immersive goggles.',
  specs: '140kph top speed, 4K/60fps video, 20 mins flight, motion controller'
},
{
  name: 'Inspire',
  brand: 'DJI',
  category: 'DJI',
  images: [DJIInspire3],
  description: 'High-end cinematic drone used in filmmaking and professional shoots.',
  specs: 'Micro 4/3 camera, ProRes RAW, dual-operator mode, carbon fiber build'
},

];

export default ProductData;