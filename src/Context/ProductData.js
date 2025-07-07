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

import SandiskImage from '../Assets/Images/Products/sandiskProduct.png';
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
    name: 'SanDisk',
    brand: 'SanDisk',
    category: 'Memory Cards',
    images: [SandiskImage],
    description: 'High-quality SD cards across use cases.',
    specs: 'SanDisk Extreme PRO SDXC UHS-I, 128GB, up to 200MB/s, Class 10, V30'
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
    category: 'Drones',
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
    category: 'Other Electronics',
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
];

export default ProductData;