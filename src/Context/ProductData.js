import PS5Image from '../Assets/Images/Products/PS5_Image_Edited.png'; 
import XboxImage from '../Assets/Images/Products/xboxConsole.png';
import SwitchImage from '../Assets/Images/Products/switch.jpg';
import GamingAccessoriesImage from '../Assets/Images/Products/mouse.jpg';
import SteamDeck from '../Assets/Images/Products/steamDeck.png';
import MetaQuest from '../Assets/Images/Products/metaQuest.png';

import LenovoLegionImage from '../Assets/Images/Products/LenovoLegion.png';
import LenovoLOQImage from '../Assets/Images/Products/LenovoLOQ.png';
import DellImage from '../Assets/Images/Products/dellLaptop.png';
import HPImage from '../Assets/Images/Products/HP_laptop.jpg';
import SurfacePro from '../Assets/Images/Products/SurfacePro.png';

import KeyboardImage from '../Assets/Images/Products/keyboard.jpg';
import MouseImage from '../Assets/Images/Products/mouse.jpg';
import MonitorImage from '../Assets/Images/Products/monitor.jpg';
import RouterImage from '../Assets/Images/Products/router.png';

import NvidiaImage from '../Assets/Images/Products/nvidia_graphics_card.jpg';
import PNYImage from '../Assets/Images/Products/pnyGPU.png';
import AsusImage from '../Assets/Images/Products/asusGPU.png';


import LexarImage from '../Assets/Images/Products/lexar.png';
import ToshibaImage from '../Assets/Images/Products/toshibaMemory.png';
import TranscendImage from '../Assets/Images/Products/Transcend.png';
import KingstonImage from '../Assets/Images/Products/Kingston.png';

import IpadImage from '../Assets/Images/Products/ipad.png';
import MW123Image from '../Assets/Images/Products/MacMW123.png';
import MW0Y3Image from '../Assets/Images/Products/MacMW0Y3.png';
import MC6T4Image from '../Assets/Images/Products/MacMC6T4.png';

import AppleWatchImage from '../Assets/Images/Products/appleWatch.png';

import DJIImage from '../Assets/Images/Products/djiDrones.png';

import Zephyrus from '../Assets/Images/Products/Zephyrus.png';
import Strix from '../Assets/Images/Products/Strix.png';

import Nitro from '../Assets/Images/Products/nitro.png';
import Aspire from '../Assets/Images/Products/aspire.png';
import Predator from '../Assets/Images/Products/predator.png'; 

import AppleAccessoriesImage from '../Assets/Images/Products/appleAccessories.png';
import LogitechImage from '../Assets/Images/Products/logitechPeripherals.png';
import SonySDImage from '../Assets/Images/Products/SonySD.png';
import PSVRImage from '../Assets/Images/Products/PSVR.png';
import DysonImage from '../Assets/Images/Products/dyson.jpg';
import JBLImage from '../Assets/Images/Products/jbl_speakers.jpg';

import ROGAlly from '../Assets/Images/Products/asusRogAlly.png';
import LegionGo from '../Assets/Images/Products/LegionGo.png';
import AYANEO from '../Assets/Images/Products/AYANEO.png';
import OneXPlayer from '../Assets/Images/Products/OneXPlayer.png';

import SurfaceProCoPilotPlus from '../Assets/Images/Products/SurfaceProCo-Pilot+.png';
import SurfaceLaptop6 from '../Assets/Images/Products/SurfaceLaptop6.png';
import SurfaceLaptopStudio2 from '../Assets/Images/Products/SurfaceLaptopStudio2.png';
import ThinkPadX1Carbon  from '../Assets/Images/Products/ThinkPadX1Carbon.png';
import Yoga7i from '../Assets/Images/Products/Yoga7i.png';
import IdeaPadSlim5 from '../Assets/Images/Products/IdeaPadSlim5.png';
import HPVictusGamingLaptop from '../Assets/Images/Products/HPVictusGamingLaptop.png';
import HPOMEN16 from '../Assets/Images/Products/HPOMEN16.png';
import HPEnvyx360 from '../Assets/Images/Products/HPEnvyx360.png';
import HPSpectrex360 from '../Assets/Images/Products/HPSpectrex360.png';
import AcerSwiftGo14 from '../Assets/Images/Products/AcerSwiftGo14.png';
import AcerSpin5 from '../Assets/Images/Products/AcerSpin5.png'
import ASUSTUFGamingF15 from '../Assets/Images/Products/ASUSTUFGamingF15.png';
import ASUSVivobook15 from '../Assets/Images/Products/ASUSVivobook15.png';
import ASUSZenbook14X from '../Assets/Images/Products/ASUSZenbook14X.png'; 

import DysonAirwrapMultiStyler from '../Assets/Images/Products/DysonAirwrapMultiStyler.png';
import DysonSupersonicHairDryer from '../Assets/Images/Products/DysonSupersonicHairDryer.png';
import DysonCorraleHairStraightener from '../Assets/Images/Products/DysonCorraleHairStraightener.png';
import DysonV15DetectVacuumCleaner from '../Assets/Images/Products/DysonV15DetectVacuumCleaner.png';

import DJIAvataFPVDrone from '../Assets/Images/Products/DJIAvataFPVDrone.png';
import DJIMini4Pro from '../Assets/Images/Products/DJIMini4Pro.png';
import DJIInspire3 from '../Assets/Images/Products/DJIInspire3.png';
import DJIMavic3Pro from '../Assets/Images/Products/DJIMavic3Pro.png';
import DJIPocket3GimbalCamera from '../Assets/Images/Products/DJIPocket3GimbalCamera.png';
import DJIRonin4DCameraRig from '../Assets/Images/Products/DJIRonin4DCameraRig.png';

const ProductData = [
  {
    name: 'Xbox Series X|S',
    brand: 'Microsoft',
    category: 'Gaming Products',
    images: [XboxImage],
    description: 'Microsoft’s powerful consoles for 4K gaming and backward compatibility.',
    specs: '8-core AMD Zen 2 CPU, 12 TFLOP GPU, 16GB GDDR6 RAM, 1TB SSD, 4K UHD, Dolby Vision'
  },
  {
    name: 'Nintendo Switch',
    brand: 'Nintendo',
    category: 'Gaming Products',
    images: [SwitchImage],
    description: 'Portable console with Joy-Con support and a huge game library.',
    specs: 'NVIDIA Tegra X1, 6.2" LCD, 32GB storage, up to 9-hour battery, detachable Joy-Cons'
  },
  {
    name: 'Steam Deck',
    brand: 'Valve',
    category: 'Gaming Products',
    images: [SteamDeck],
    description: 'Valve’s handheld PC gaming device with Steam OS.',
    specs: 'AMD APU (Zen 2 CPU + RDNA 2 GPU), 16GB RAM, 64GB/256GB/512GB Storage, 7" LCD Touch'
  },
  {
    name: 'Meta Quest (Oculus)',
    brand: 'Meta',
    category: 'Gaming Products',
    images: [MetaQuest],
    description: 'Wireless VR headset from Meta with immersive features and standalone functionality.',
    specs: 'Qualcomm Snapdragon XR2, 6GB RAM, up to 256GB Storage, 1832x1920 per eye, inside-out tracking'
  },
  {
    name: 'Gaming Accessories',
    brand: 'Various',
    category: 'Gaming Products',
    images: [GamingAccessoriesImage],
    description: 'Controllers, headsets, and other gear to complete your setup.',
    specs: 'Includes gaming mice, mechanical keyboards, headsets, RGB lighting, USB-C wired/wireless'
  },
  {
    name: 'PlayStation 5',
    brand: 'Sony',
    category: 'Gaming',
    images: [PS5Image],
    description: 'Sony’s next-gen console with immersive haptics, ray tracing, and ultra-fast SSD.',
    specs: 'AMD Zen 2 CPU, RDNA 2 GPU, 16GB GDDR6, 825GB SSD, 4K Gaming, HDR, Wi-Fi 6'
  },
  {
    name: 'PlayStation VR',
    brand: 'Sony',
    category: 'Gaming',
    images: [PSVRImage],
    description: 'Immersive VR headset for PlayStation with motion tracking.',
    specs: '1080p OLED display, 120Hz refresh rate, 100° FOV, 3D audio, motion controllers'
  },
    {
    name: 'Lenovo Legion',
    brand: 'Lenovo',
    category: 'Laptops',
    images: [LenovoLegionImage],
    description: 'Premium gaming performance with bold design and top-tier cooling.',
    specs: 'Intel Core i7-13700H, NVIDIA RTX 4060, 16GB DDR5 RAM, 1TB SSD, 16" QHD 165Hz'
  },
  {
    name: 'Lenovo LOQ',
    brand: 'Lenovo',
    category: 'Laptops',
    images: [LenovoLOQImage],
    description: 'Entry-level gaming power designed for casual and rising gamers.',
    specs: 'Intel Core i5-12450H, NVIDIA RTX 3050, 8GB RAM, 512GB SSD, 15.6" FHD 144Hz'
  },
  {
    name: 'Dell',
    brand: 'Dell',
    category: 'Laptops',
    images: [DellImage],
    description: 'High-performance laptops with excellent support.',
    specs: 'Intel Core i7, Intel Iris Xe Graphics, 16GB RAM, 512GB SSD, 15.6" FHD display'
  },
  {
    name: 'HP',
    brand: 'HP',
    category: 'Laptops',
    images: [HPImage],
    description: 'Affordable, feature-rich laptops for everyday use.',
    specs: 'AMD Ryzen 5, Radeon Graphics, 8GB RAM, 512GB SSD, 14" FHD display'
  },
  {
    name: 'Microsoft Surface Pro for Business, Co Pilot + PC',
    brand: 'Microsoft',
    category: 'Laptops',
    images: [SurfacePro],
    description: 'Ultra-portable 2-in-1 with Snapdragon power and built-in AI features.',
    specs: 'Snapdragon X Elite, 16GB RAM, 512GB SSD, 13" PixelSense touchscreen, detachable keyboard'
  },
  {
    name: 'ASUS ROG Zephyrus',
    brand: 'ASUS',
    category: 'Laptops',
    images: [Zephyrus],
    description: 'Slim and powerful gaming laptop with Ryzen CPU and RTX GPU.',
    specs: 'AMD Ryzen 9, RTX 4070, 16GB DDR5 RAM, 1TB SSD, 14" QHD+ 165Hz'
  },
  {
    name: 'ASUS ROG Strix',
    brand: 'ASUS',
    category: 'Laptops',
    images: [Strix],
    description: 'Aggressive design and performance for serious gamers.',
    specs: 'Intel Core i9, RTX 4080, 32GB RAM, 1TB SSD, 17.3" QHD 240Hz'
  },
  {
    name: 'Acer Nitro 5',
    brand: 'Acer',
    category: 'Laptops',
    images: [Nitro],
    description: 'Budget gaming laptop with solid specs and cooling.',
    specs: 'Intel Core i5-12500H, RTX 3050, 8GB RAM, 512GB SSD, 15.6" FHD 144Hz'
  },
  {
    name: 'Acer Aspire 5',
    brand: 'Acer',
    category: 'Laptops',
    images: [Aspire],
    description: 'Everyday productivity laptop with sleek design and reliability.',
    specs: 'AMD Ryzen 7, Radeon Graphics, 16GB RAM, 512GB SSD, 15.6" FHD display'
  },
  {
    name: 'Acer Predator Helios',
    brand: 'Acer',
    category: 'Laptops',
    images: [Predator],
    description: 'High-end gaming beast with top specs and RGB keyboard.',
    specs: 'Intel Core i9, RTX 4080, 32GB RAM, 1TB SSD, 16" QHD 240Hz'
  },
  {
    name: 'Nvidia GPU',
    brand: 'Nvidia',
    category: 'Graphics Cards',
    images: [NvidiaImage],
    description: 'Cutting-edge RTX GPUs for the ultimate visual fidelity.',
    specs: 'NVIDIA GeForce RTX 4090, 24GB GDDR6X, Ray Tracing, DLSS 3, HDMI 2.1, PCIe 4.0'
  },
  {
    name: 'PNY Technologies',
    brand: 'PNY',
    category: 'Graphics Cards',
    images: [PNYImage],
    description: 'High-performance graphics hardware for workstations and gaming.',
    specs: 'PNY GeForce RTX 4070 Ti, 12GB GDDR6X, 7680 CUDA Cores, 2.6GHz Boost Clock'
  },
  {
    name: 'Asus ROG GPU',
    brand: 'ASUS',
    category: 'Graphics Cards',
    images: [AsusImage],
    description: 'High-performance ASUS graphics card designed for gamers and creators.',
    specs: 'ASUS ROG Strix RTX 4080, 16GB GDDR6X, Triple Fan, 2.7-Slot, RGB Aura Sync'
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
    name: 'Apple Watch',
    brand: 'Apple',
    category: 'Apple',
    images: [AppleWatchImage],
    description: 'Track your health, stay connected, and more.',
    specs: 'Apple Watch Series 9, 41mm/45mm, S9 chip, Always-On Display, Blood Oxygen sensor'
  },
  {
    name: 'Apple Accessories',
    brand: 'Apple',
    category: 'Apple',
    images: [AppleAccessoriesImage],
    description: 'Enhance your Apple device experience.',
    specs: 'Includes MagSafe charger, AirTag, Lightning cable, EarPods, USB-C adapter'
  },
  {
    name: 'MacBook Air MW0Y3',
    brand: 'Apple',
    category: 'Apple',
    images: [MW0Y3Image],
    description: 'M2-powered MacBook Air with ultra-slim design and all-day battery.',
    specs: 'Apple M2 chip, 8-core CPU, 8GB RAM, 256GB SSD, 13.6" Retina Display'
  },
  {
    name: 'MacBook Air MW123',
    brand: 'Apple',
    category: 'Apple',
    images: [MW123Image],
    description: 'Lightweight performance with silent fanless operation and sharp Retina display.',
    specs: 'Apple M2 chip, 8-core GPU, 8GB RAM, 512GB SSD, 13.6" Retina Display'
  },
  {
    name: 'MacBook Air MC6T4',
    brand: 'Apple',
    category: 'Apple',
    images: [MC6T4Image],
    description: 'The latest MacBook Air with the blazing-fast M3 chip and stunning visuals.',
    specs: 'Apple M3 chip, 8-core CPU, 16GB RAM, 512GB SSD, 15.3" Liquid Retina Display'
  },
  {
    name: 'DJI Drone Pro',
    brand: 'DJI',
    category: 'DJI',
    images: [DJIImage],
    description: 'High-resolution drone camera with smart tracking and GPS.',
    specs: 'DJI Air 3, Dual 4K Cameras, 46 min flight, O4 transmission, obstacle sensing'
  },
  {
    name: 'Logitech Gaming Gear',
    brand: 'Logitech',
    category: 'Accessories',
    images: [LogitechImage],
    description: 'Trusted gaming peripherals including mice and keyboards.',
    specs: 'Includes Logitech G502 Hero, G915 Keyboard, LIGHTSPEED wireless, RGB lighting'
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
    name: 'JBL PartyBox Speaker',
    brand: 'JBL',
    category: 'Audio',
    images: [JBLImage],
    description: 'Loud and clear audio with LED lights, perfect for parties.',
    specs: 'JBL PartyBox 310, 240W power, 18-hour battery, Bluetooth, dynamic light show'
  },
  {
    name: 'Keyboards',
    brand: 'Generic',
    category: 'IT Peripherals',
    images: [KeyboardImage],
    description: 'Mechanical and membrane keyboards for all use cases.',
    specs: 'Wired/wireless, RGB backlit, mechanical/membrane, USB/Bluetooth, ergonomic design'
  },
  {
    name: 'Mice',
    brand: 'Generic',
    category: 'IT Peripherals',
    images: [MouseImage],
    description: 'Ergonomic and gaming mice for precision.',
    specs: 'Optical sensor, DPI adjustment, RGB, wired/wireless, ergonomic shape'
  },
  {
    name: 'Monitors',
    brand: 'Generic',
    category: 'IT Peripherals',
    images: [MonitorImage],
    description: 'High-resolution displays for work and entertainment.',
    specs: '24"/27"/32" IPS/VA, 1080p/1440p/4K, 60Hz/144Hz/240Hz, HDMI/DisplayPort'
  },
  {
    name: 'Networking Equipment',
    brand: 'Generic',
    category: 'IT Peripherals',
    images: [RouterImage],
    description: 'Routers and switches for fast, reliable connections.',
    specs: 'Dual-band/tri-band Wi-Fi, gigabit ports, mesh support, MU-MIMO'
  },
  //#######################################//
  {
  name: 'ASUS ROG Ally',
  brand: 'ASUS',
  category: 'Gaming Products',
  image: [ROGAlly],
  description: 'Portable Windows gaming handheld with fast refresh rate and ergonomic design.',
  specs: 'AMD Ryzen Z1 Extreme, 7" FHD 120Hz, 16GB RAM, 512GB SSD, Windows 11, USB-C + XG Mobile'
},
{
  name: 'Lenovo Legion Go',
  brand: 'Lenovo',
  category: 'Gaming Products',
  image: [LegionGo],
  description: 'Windows handheld with detachable controllers and large screen.',
  specs: 'AMD Ryzen Z1 Extreme, 8.8" QHD+ 144Hz, 16GB RAM, 1TB SSD, Windows 11, detachable joysticks'
},
{
  name: 'AYANEO Series',
  brand: 'AYANEO',
  category: 'Gaming Products',
  image: [AYANEO],
  description: 'Premium handheld gaming PCs with customizable specs and sleek designs.',
  specs: 'AMD Ryzen 7 7840U, 7"/8.4"/10.1" displays, 16–64GB RAM, up to 4TB SSD, Windows 11'
},
{
  name: 'OneXPlayer 2 Pro',
  brand: 'OneXPlayer',
  category: 'Gaming Products',
  image: [OneXPlayer],
  description: 'Large screen handheld gaming PC for immersive portable gaming.',
  specs: 'AMD Ryzen 7 8840U, 8.4" 2.5K 120Hz, 32GB RAM, 1TB SSD, detachable controller modules'
},
{
  name: 'Surface Pro 10 with Co-Pilot+ PC',
  brand: 'Microsoft',
  category: 'Laptops',
  image: [SurfaceProCoPilotPlus],
  description: '2-in-1 device with Snapdragon AI chip and productivity-focused design.',
  specs: 'Snapdragon X Elite, 16GB RAM, 512GB SSD, 13" PixelSense Flow Display, detachable keyboard'
},
{
  name: 'Surface Laptop 6 with Co-Pilot+ PC',
  brand: 'Microsoft',
  category: 'Laptops',
  image: [SurfaceLaptop6],
  description: 'AI-enhanced laptop with sleek build and long battery life.',
  specs: 'Snapdragon X Elite, 16GB RAM, 512GB SSD, 13.8"/15" PixelSense, 120Hz, Windows Studio Effects'
},
{
  name: 'Surface Laptop Studio 2',
  brand: 'Microsoft',
  category: 'Laptops',
  image:[SurfaceLaptopStudio2],
  description: 'Powerful convertible laptop for creators and developers.',
  specs: 'Intel Core i7, RTX 4060, 32GB RAM, 1TB SSD, 14.4" 120Hz touch display, haptic touchpad'
},
{
  name: 'ThinkPad X1 Carbon Gen 11',
  brand: 'Lenovo',
  category: 'Laptops',
  image: [ThinkPadX1Carbon],
  description: 'Business ultrabook with MIL-STD durability and enterprise features.',
  specs: 'Intel Core i7 vPro, 16GB RAM, 512GB SSD, 14" WUXGA IPS, fingerprint reader, 1.12kg'
},
{
  name: 'Yoga 7i 2-in-1',
  brand: 'Lenovo',
  category: 'Laptops',
  image: [Yoga7i],
  description: 'Flexible convertible with touchscreen and great performance.',
  specs: 'Intel Core i7-1355U, 16GB RAM, 512GB SSD, 14" FHD+ touchscreen, 360° hinge'
},
{
  name: 'IdeaPad Slim 5',
  brand: 'Lenovo',
  category: 'Laptops',
  image: [IdeaPadSlim5],
  description: 'Budget-friendly productivity laptop with a clean design.',
  specs: 'AMD Ryzen 7 7730U, 16GB RAM, 512GB SSD, 15.6" FHD, narrow bezel'
},
{
  name: 'HP Victus Gaming Laptop',
  brand: 'HP',
  category: 'Laptops',
  image: [HPVictusGamingLaptop],
  description: 'Affordable gaming laptop with strong specs for entry-level players.',
  specs: 'Intel Core i5-13420H, RTX 3050, 16GB RAM, 512GB SSD, 15.6" FHD 144Hz'
},
{
  name: 'HP OMEN 16',
  brand: 'HP',
  category: 'Laptops',
  image: [HPOMEN16],
  description: 'Performance gaming laptop with high refresh rate and thermal control.',
  specs: 'Intel Core i7-13700HX, RTX 4070, 16GB RAM, 1TB SSD, 16.1" QHD 240Hz'
},
{
  name: 'HP Envy x360',
  brand: 'HP',
  category: 'Laptops',
  image: [HPEnvyx360],
  description: 'Convertible laptop for creative and professional workflows.',
  specs: 'Intel Core i7-1355U, 16GB RAM, 512GB SSD, 15.6" FHD Touch, 360° hinge, Bang & Olufsen audio'
},
{
  name: 'HP Spectre x360 OLED',
  brand: 'HP',
  category: 'Laptops',
  image: [HPSpectrex360],
  description: 'Luxury 2-in-1 laptop with OLED display and advanced security.',
  specs: 'Intel Core i7-13700H, 16GB RAM, 1TB SSD, 13.5" 3K2K OLED Touch, Windows Hello'
},
{
  name: 'Acer Swift Go 14',
  brand: 'Acer',
  category: 'Laptops',
  image: [AcerSwiftGo14],
  description: 'Thin and lightweight productivity laptop with vivid display.',
  specs: 'Intel Core Ultra 7 155H, 16GB RAM, 1TB SSD, 14" 2.8K OLED 90Hz'
},
{
  name: 'Acer Spin 5 2-in-1',
  brand: 'Acer',
  category: 'Laptops',
  image: [AcerSpin5],
  description: 'Versatile 2-in-1 with stylus support and portability.',
  specs: 'Intel Core i7-1355U, 16GB RAM, 512GB SSD, 14" WUXGA touch, 360° hinge, stylus included'
},
{
  name: 'ASUS TUF Gaming F15',
  brand: 'ASUS',
  category: 'Laptops',
  image: [ASUSTUFGamingF15],
  description: 'Durable, budget-friendly gaming laptop with solid specs.',
  specs: 'Intel Core i7-12700H, RTX 4060, 16GB RAM, 1TB SSD, 15.6" FHD 144Hz, military-grade build'
},
{
  name: 'ASUS Vivobook 15 OLED',
  brand: 'ASUS',
  category: 'Laptops',
  image: [ASUSVivobook15],
  description: 'Affordable OLED laptop with vibrant visuals and fast performance.',
  specs: 'Intel Core i5-13500H, 16GB RAM, 512GB SSD, 15.6" FHD OLED, ErgoLift hinge'
},
{
  name: 'ASUS Zenbook 14X OLED',
  brand: 'ASUS',
  category: 'Laptops',
  image: [ASUSZenbook14X],
  description: 'Slim OLED ultrabook with great color accuracy and power.',
  specs: 'Intel Core Ultra 9 185H, 32GB RAM, 1TB SSD, 14.5" 2.8K OLED 120Hz, Windows 11 Pro'
},
{
  name: 'Dyson Airwrap Multi-Styler',
  brand: 'Dyson',
  category: 'Dyson Products',
  image: [DysonAirwrapMultiStyler],
  description: 'Versatile hair styler that curls, smooths, and volumizes using air.',
  specs: 'Multiple attachments, Coanda effect, intelligent heat control, storage case'
},
{
  name: 'Dyson Supersonic Hair Dryer',
  brand: 'Dyson',
  category: 'Dyson Products',
  image: [DysonSupersonicHairDryer],
  description: 'Fast-drying hair dryer with focused airflow and heat protection.',
  specs: '1600W digital motor, 3 speed + 4 heat settings, diffuser, magnetic attachments'
},
{
  name: 'Dyson Corrale Hair Straightener',
  brand: 'Dyson',
  category: 'Dyson Products',
  image: [DysonCorraleHairStraightener],
  description: 'Cordless straightener with flexing plates and battery power.',
  specs: 'Manganese copper plates, OLED display, 30min cordless use, intelligent heat'
},
{
  name: 'Dyson V15 Detect Vacuum Cleaner',
  brand: 'Dyson',
  category: 'Dyson Products',
  image: [DysonV15DetectVacuumCleaner],
  description: 'Smart cordless vacuum with laser dust detection.',
  specs: '230AW suction, HEPA filter, laser dust tech, LCD screen, 60min runtime'
},
{
  name: 'DJI Avata FPV Drone',
  brand: 'DJI',
  category: 'DJI',
  image: [DJIAvataFPVDrone],
  description: 'Immersive FPV drone built for agile flying and indoor use.',
  specs: '1/1.7" CMOS sensor, 4K/60fps video, RockSteady, 18min flight, goggles support'
},
{
  name: 'DJI Mini 4 Pro',
  brand: 'DJI',
  category: 'DJI',
  image: [DJIMini4Pro],
  description: 'Compact, high-quality drone with pro camera features.',
  specs: '4K/100fps, 1/1.3" CMOS, 34min flight, omnidirectional obstacle sensing, under 250g'
},
{
  name: 'DJI Inspire 3',
  brand: 'DJI',
  category: 'DJI',
  image: [DJIInspire3],
  description: 'Professional cinema drone with full-frame camera and RTK GPS.',
  specs: '8K ProRes RAW, full-frame Zenmuse X9-8K Air, 28min flight, dual-antenna RTK'
},
{
  name: 'DJI Mavic 3 Pro',
  brand: 'DJI',
  category: 'DJI',
  image: [DJIMavic3Pro],
  description: 'Triple-camera drone for aerial photography and video.',
  specs: '4/3 CMOS Hasselblad + 2 tele cams, 43min flight, omnidirectional sensing'
},
{
  name: 'DJI Pocket 3 Gimbal Camera',
  brand: 'DJI',
  category: 'DJI',
  image: [DJIPocket3GimbalCamera],
  description: 'Compact gimbal camera for stabilized personal video recording.',
  specs: '1" CMOS, 4K/120fps video, 2" rotatable OLED, 3-axis stabilization, active tracking'
},
{
  name: 'DJI Ronin 4D Camera Rig',
  brand: 'DJI',
  category: 'DJI',
  image: [DJIRonin4DCameraRig],
  description: 'Professional 4-axis cinema camera rig for filmmakers.',
  specs: '6K/8K RAW recording, full-frame sensor, Z-axis stabilization, LiDAR focus, modular'
},

];

export default ProductData;