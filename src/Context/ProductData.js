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
    description: 'Microsoft’s powerful consoles for 4K gaming and backward compatibility.'
  },
  {
    name: 'Nintendo Switch',
    brand: 'Nintendo',
    category: 'Gaming Products',
    images: [SwitchImage],
    description: 'Portable console with Joy-Con support and a huge game library.'
  },
  {
    name: 'Steam Deck',
    brand: 'Valve',
    category: 'Gaming Products',
    images: [SteamDeck],
    description: 'Valve’s handheld PC gaming device with Steam OS.'
  },
  {
    name: 'Meta Quest (Oculus)',
    brand: 'Meta',
    category: 'Gaming Products',
    images: [MetaQuest],
    description: 'Wireless VR headset from Meta with immersive features and standalone functionality.'
  },
  {
    name: 'Gaming Accessories',
    brand: 'Various',
    category: 'Gaming Products',
    images: [GamingAccessoriesImage],
    description: 'Controllers, headsets, and other gear to complete your setup.'
  },
  {
    name: 'PlayStation 5',
    brand: 'Sony',
    category: 'Gaming',
    images: [PS5Image],
    description: 'Sony’s next-gen console with immersive haptics, ray tracing, and ultra-fast SSD.'
  },
  {
    name: 'PlayStation VR',
    brand: 'Sony',
    category: 'Gaming',
    images: [PSVRImage],
    description: 'Immersive VR headset for PlayStation with motion tracking.'
  },
  {
    name: 'Lenovo Legion',
    brand: 'Lenovo',
    category: 'Laptops',
    images: [LenovoLegionImage],
    description: 'Premium gaming performance with bold design and top-tier cooling.'
  },
  {
    name: 'Lenovo LOQ',
    brand: 'Lenovo',
    category: 'Laptops',
    images: [LenovoLOQImage],
    description: 'Entry-level gaming power designed for casual and rising gamers.'
  },
  {
    name: 'Dell',
    brand: 'Dell',
    category: 'Laptops',
    images: [DellImage],
    description: 'High-performance laptops with excellent support.'
  },
  {
    name: 'HP',
    brand: 'HP',
    category: 'Laptops',
    images: [HPImage],
    description: 'Affordable, feature-rich laptops for everyday use.'
  },
  {
    name: 'Microsoft Surface Pro for Business, Co Pilot + PC',
    brand: 'Microsoft',
    category: 'Laptops',
    images: [SurfacePro],
    description: 'Ultra-portable 2-in-1 with Snapdragon power and built-in AI features.'
  },
  {
    name: 'ASUS ROG Zephyrus',
    brand: 'ASUS',
    category: 'Laptops',
    images: [Zephyrus],
    description: 'Slim and powerful gaming laptop with Ryzen CPU and RTX GPU.'
  },
  {
    name: 'ASUS ROG Strix',
    brand: 'ASUS',
    category: 'Laptops',
    images: [Strix],
    description: 'Aggressive design and performance for serious gamers.'
  },
  {
    name: 'Acer Nitro 5',
    brand: 'Acer',
    category: 'Laptops',
    images: [Nitro],
    description: 'Budget gaming laptop with solid specs and cooling.'
  },
  {
    name: 'Acer Aspire 5',
    brand: 'Acer',
    category: 'Laptops',
    images: [Aspire],
    description: 'Everyday productivity laptop with sleek design and reliability.'
  },
  {
    name: 'Acer Predator Helios',
    brand: 'Acer',
    category: 'Laptops',
    images: [Predator],
    description: 'High-end gaming beast with top specs and RGB keyboard.'
  },
  {
    name: 'Keyboards',
    brand: 'Generic',
    category: 'IT Peripherals',
    images: [KeyboardImage],
    description: 'Mechanical and membrane keyboards for all use cases.'
  },
  {
    name: 'Mice',
    brand: 'Generic',
    category: 'IT Peripherals',
    images: [MouseImage],
    description: 'Ergonomic and gaming mice for precision.'
  },
  {
    name: 'Monitors',
    brand: 'Generic',
    category: 'IT Peripherals',
    images: [MonitorImage],
    description: 'High-resolution displays for work and entertainment.'
  },
  {
    name: 'Networking Equipment',
    brand: 'Generic',
    category: 'IT Peripherals',
    images: [RouterImage],
    description: 'Routers and switches for fast, reliable connections.'
  },
  {
    name: 'Nvidia GPU',
    brand: 'Nvidia',
    category: 'Graphics Cards',
    images: [NvidiaImage],
    description: 'Cutting-edge RTX GPUs for the ultimate visual fidelity.'
  },
  {
    name: 'PNY Technologies',
    brand: 'PNY',
    category: 'Graphics Cards',
    images: [PNYImage],
    description: 'High-performance graphics hardware for workstations and gaming.'
  },
  {
    name: 'Asus ROG GPU',
    brand: 'ASUS',
    category: 'Graphics Cards',
    images: [AsusImage],
    description: 'High-performance ASUS graphics card designed for gamers and creators.'
  },
  {
    name: 'SanDisk',
    brand: 'SanDisk',
    category: 'Memory Cards',
    images: [SandiskImage],
    description: 'High-quality SD cards across use cases.'
  },
  {
    name: 'Lexar',
    brand: 'Lexar',
    category: 'Memory Cards',
    images: [LexarImage],
    description: 'High-speed SD cards for prosumers and professionals.'
  },
  {
    name: 'Toshiba',
    brand: 'Toshiba',
    category: 'Memory Cards',
    images: [ToshibaImage],
    description: 'Durable, high-capacity cards ideal for cameras and mobile devices.'
  },
  {
    name: 'Transcend',
    brand: 'Transcend',
    category: 'Memory Cards',
    images: [TranscendImage],
    description: 'Affordable and reliable cards for everyday use.'
  },
  {
    name: 'Kingston',
    brand: 'Kingston',
    category: 'Memory Cards',
    images: [KingstonImage],
    description: 'Memory solutions known for durability and value.'
  },
  {
    name: 'Sony SD Card',
    brand: 'Sony',
    category: 'Memory Cards',
    images: [SonySDImage],
    description: 'Professional-grade SD card with ultra-fast read/write speeds.'
  },
  {
    name: 'iPad',
    brand: 'Apple',
    category: 'Apple',
    images: [IpadImage],
    description: 'iPads with powerful chips and premium design.'
  },
  {
    name: 'Apple Watch',
    brand: 'Apple',
    category: 'Apple',
    images: [AppleWatchImage],
    description: 'Track your health, stay connected, and more.'
  },
  {
    name: 'Apple Accessories',
    brand: 'Apple',
    category: 'Apple',
    images: [AppleAccessoriesImage],
    description: 'Enhance your Apple device experience.'
  },
  {
    name: 'MacBook Air MW0Y3',
    brand: 'Apple',
    category: 'Apple',
    images: [MW0Y3Image],
    description: 'M2-powered MacBook Air with ultra-slim design and all-day battery.'
  },
  {
    name: 'MacBook Air MW123',
    brand: 'Apple',
    category: 'Apple',
    images: [MW123Image],
    description: 'Lightweight performance with silent fanless operation and sharp Retina display.'
  },
  {
    name: 'MacBook Air MC6T4',
    brand: 'Apple',
    category: 'Apple',
    images: [MC6T4Image],
    description: 'The latest MacBook Air with the blazing-fast M3 chip and stunning visuals.'
  },
  {
    name: 'DJI Drone Pro',
    brand: 'DJI',
    category: 'Drones',
    images: [DJIImage],
    description: 'High-resolution drone camera with smart tracking and GPS.'
  },
  {
    name: 'Logitech Gaming Gear',
    brand: 'Logitech',
    category: 'Accessories',
    images: [LogitechImage],
    description: 'Trusted gaming peripherals including mice and keyboards.'
  },
  {
    name: 'Dyson Hair Tools',
    brand: 'Dyson',
    category: 'Other Electronics',
    images: [DysonImage],
    description: 'Premium styling tools with airflow technology.'
  },
  {
    name: 'JBL PartyBox Speaker',
    brand: 'JBL',
    category: 'Audio',
    images: [JBLImage],
    description: 'Loud and clear audio with LED lights, perfect for parties.'
  }
];

export default ProductData;