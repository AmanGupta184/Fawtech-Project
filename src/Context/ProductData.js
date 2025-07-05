// ProductData.js (with new products and brand cards)

import PS5Image from '../Assets/Images/Products/PS5_Image_Edited.png';
import XboxImage from '../Assets/Images/Products/xboxConsole.png';
import SwitchImage from '../Assets/Images/Products/switch.jpg';
import GamingAccessoriesImage from '../Assets/Images/Products/mouse.jpg';
import ConsolesCover from '../Assets/Images/Products/consoles.jpg';
import SteamDeck from '../Assets/Images/Products/steamDeck.png';
import MetaQuest from '../Assets/Images/Products/metaQuest.png';

import LenovoImage from '../Assets/Images/Products/lenovo_laptops.jpg';
import LenovoLegionImage from '../Assets/Images/Products/LenovoLegion.png';
import LenovoLOQImage from '../Assets/Images/Products/LenovoLOQ.png';
import DellImage from '../Assets/Images/Products/dellLaptop.png';
import HPImage from '../Assets/Images/Products/HP_laptop.jpg';
import SurfacePro from '../Assets/Images/Products/SurfacePro.png';
import LaptopsCover from '../Assets/Images/Products/photo-1517336714731-489689fd1ca8.jpg';

import KeyboardImage from '../Assets/Images/Products/keyboard.jpg';
import MouseImage from '../Assets/Images/Products/mouse.jpg';
import MonitorImage from '../Assets/Images/Products/monitor.jpg';
import RouterImage from '../Assets/Images/Products/router.png';
import PeripheralsCover from '../Assets/Images/Products/peripherals.jpg';

import NvidiaImage from '../Assets/Images/Products/nvidia_graphics_card.jpg';
import PNYImage from '../Assets/Images/Products/pnyGPU.png';
import AsusImage from '../Assets/Images/Products/asusGPU.png';
import GraphicsCardCover from '../Assets/Images/Products/graphics-card.jpg';

import SandiskImage from '../Assets/Images/Products/sandiskProduct.png';
import NVMeImage from '../Assets/Images/Products/nvmExpressCard.png';
import LexarImage from '../Assets/Images/Products/lexar.png';
import ToshibaImage from '../Assets/Images/Products/toshibaMemory.png';
import TranscendImage from '../Assets/Images/Products/Transcend.png';
import KingstonImage from '../Assets/Images/Products/Kingston.png';
import MemoryCover from '../Assets/Images/Products/sd-memory-cards.jpg';

import IpadImage from '../Assets/Images/Products/ipad.png';
import MW123Image from '../Assets/Images/Products/MacMW123.png';
import MW0Y3Image from '../Assets/Images/Products/MacMW0Y3.png';
import MC6T4Image from '../Assets/Images/Products/MacMC6T4.png';
import SamsungTabImage from '../Assets/Images/Products/samsungTab.png';
import TabletAccessoriesImage from '../Assets/Images/Products/tablet_accessories.png';
import TabletsCover from '../Assets/Images/Products/tablets.jpg';

import AppleWatchImage from '../Assets/Images/Products/appleWatch.png';
import SamsungWatchImage from '../Assets/Images/Products/samsungWatch.png';
import WearablesCover from '../Assets/Images/Products/wearables.jpeg';
import SamsungSDImage from '../Assets/Images/Products/samsungSD.png';

import DJIImage from '../Assets/Images/Products/djiDrones.png';
import DronesCover from '../Assets/Images/Products/DJI_drones.jpg';

import AsusCover from '../Assets/Images/Products/AsusCover.jpg';
import Zephyrus from '../Assets/Images/Products/Zephyrus.png';
import Strix from '../Assets/Images/Products/Strix.png';

import AcerCover from '../Assets/Images/Products/AcerCover.jpg';
import Nitro from '../Assets/Images/Products/nitro.png';
import Aspire from '../Assets/Images/Products/aspire.png';
import Predator from '../Assets/Images/Products/predator.png'; 

import AppleAccessoriesImage from '../Assets/Images/Products/appleAccessories.png';
import SamsungAccessoriesImage from '../Assets/Images/Products/Samsung_accessories.jpg';
import LogitechImage from '../Assets/Images/Products/logitechPeripherals.png';
import SonyImage from '../Assets/Images/Products/sonyElectronics.png';
import SonySDImage from '../Assets/Images/Products/SonySD.png';
import PSVRImage from '../Assets/Images/Products/PSVR.png';
import DysonImage from '../Assets/Images/Products/dyson.jpg';
import JBLImage from '../Assets/Images/Products/jbl_speakers.jpg';
import OtherCover from '../Assets/Images/Products/pexels-photo-4792736.jpg';

export const ProductData = [
  {
    category: 'Gaming Products',
    description: 'Explore top-tier consoles and immersive VR gaming with next-gen performance and accessories.',
    items: [
      { name: 'Xbox Series X|S', image: XboxImage, description: 'Microsoft’s powerful consoles for 4K gaming and backward compatibility.' },
      { name: 'Nintendo Switch', image: SwitchImage, description: 'Portable console with Joy-Con support and a huge game library.' },
      { name: 'Steam Deck', image: SteamDeck, description: 'Valve’s handheld PC gaming device with Steam OS.' },
      { name: 'Meta Quest (Oculus)', image: MetaQuest, description: 'Wireless VR headset from Meta with immersive features and standalone functionality.' },
      { name: 'Gaming Accessories', image: GamingAccessoriesImage, description: 'Controllers, headsets, and other gear to complete your setup.' },
    ],
    image: ConsolesCover,
  },
  {
    category: 'Laptops',
    description: 'Work, create, and game with top-tier laptops from trusted brands, designed for power, performance, and portability.',
    items: [
      { name: 'Lenovo Legion', image: LenovoLegionImage, description: 'Premium gaming performance with bold design and top-tier cooling.' },
      { name: 'Lenovo LOQ', image: LenovoLOQImage, description: 'Entry-level gaming power designed for casual and rising gamers.'},
      { name: 'Dell', image: DellImage, description: 'High-performance laptops with excellent support.' },
      { name: 'HP', image: HPImage, description: 'Affordable, feature-rich laptops for everyday use.' },
      { name: 'Microsoft Surface Pro for Business, Co Pilot + PC', image: SurfacePro, description: 'Ultra-portable 2-in-1 with Snapdragon power and built-in AI features.'},
    ],
    image: LaptopsCover,
  },
  {
    category: 'IT Peripherals',
    description: 'Boost your productivity or gaming setup with reliable, professional-grade peripherals designed for everyday and competitive use.',
    items: [
      { name: 'Keyboards', image: KeyboardImage, description: 'Mechanical and membrane keyboards for all use cases.' },
      { name: 'Mice', image: MouseImage, description: 'Ergonomic and gaming mice for precision.' },
      { name: 'Monitors', image: MonitorImage, description: 'High-resolution displays for work and entertainment.' },
      { name: 'Networking Equipment', image: RouterImage, description: 'Routers and switches for fast, reliable connections.' },
    ],
    image: PeripheralsCover,
  },
  {
    category: 'Graphics Cards',
    description: 'Deliver next-gen graphics and performance with industry-leading GPUs perfect for gaming, design, and AI tasks.',
    items: [
      { name: 'Nvidia', image: NvidiaImage, description: 'Cutting-edge RTX GPUs for the ultimate visual fidelity.' },
      { name: 'PNY Technologies', image: PNYImage, description: 'High-performance graphics hardware for workstations and gaming.' },
    ],
    image: GraphicsCardCover,
  },
  {
    category: 'Memory Cards',
    description: 'High-speed and high-capacity SD and NVMe cards for all your storage needs — from casual use to professional photography.',
    items: [
      { name: 'SanDisk', image: SandiskImage, description: 'Owned by Western Digital, known for high-quality SD cards across use cases.' },
      { name: 'Lexar', image: LexarImage, description: 'High-speed SD cards for prosumers and professionals.' },
      { name: 'Toshiba', image: ToshibaImage, description: 'Durable, high-capacity cards ideal for cameras and mobile devices.' },
      { name: 'Transcend', image: TranscendImage, description: 'Affordable and reliable cards for everyday use.' },
      { name: 'Kingston', image: KingstonImage, description: 'Memory solutions known for durability and value.' },
    ],
    image: MemoryCover,
  },
  {
    category: 'Apple',
    description: 'Premium Apple products to enhance your digital life, from tablets to wearables and must-have accessories.',
    items: [
      { name: 'iPad', image: IpadImage, description: 'iPads with powerful chips and premium design.' },
      { name: 'Apple Watch', image: AppleWatchImage, description: 'Track your health, stay connected, and more.' },
      { name: 'Apple Accessories', image: AppleAccessoriesImage, description: 'Enhance your Apple device experience.' },
      { name: 'MacBook Air MW0Y3', image: MW0Y3Image, description: 'M2-powered MacBook Air with ultra-slim design and all-day battery.'},
      { name: 'MacBook Air MW123', image: MW123Image, description: 'Lightweight performance with silent fanless operation and sharp Retina display.'},
      { name: 'MacBook Air MC6T4', image: MC6T4Image, description: 'The latest MacBook Air with the blazing-fast M3 chip and stunning visuals.'},
    ],
    image: TabletsCover,
  },
  {
    category: 'Samsung',
    description: 'Explore the Samsung ecosystem with devices and storage solutions known for speed, design, and reliability.',
    items: [
      { name: 'Galaxy Tab', image: SamsungTabImage, description: 'Galaxy Tabs built for productivity and entertainment.' },
      { name: 'Samsung Watch', image: SamsungWatchImage, description: 'Smart features and fitness tracking on your wrist.' },
      { name: 'Samsung Accessories', image: SamsungAccessoriesImage, description: 'Chargers, cases, and wearables for Galaxy devices.' },
      { name: 'Samsung SD Cards', image: SamsungSDImage, description: 'EVO and PRO series known for high speed and reliability.' },
    ],
    image: WearablesCover,
  },
  {
    category: 'Sony',
    description: 'Sony’s world-class entertainment products—from consoles to professional-grade memory cards.',
    items: [
      { name: 'PlayStation 5', image: PS5Image, description: 'Sony’s next-gen console with immersive haptics, ray tracing, and ultra-fast SSD.' },
      { name: 'PlayStation VR', image: PSVRImage, description: 'Virtual reality headset that brings games to life with motion and sound.' },
      { name: 'Sony SD Cards', image: SonySDImage, description: 'High-performance memory cards preferred by photographers and videographers.' },
    ],
    image: ConsolesCover,
  },
  {
    category: 'Logitech',
    description: 'Logitech offers professional and gaming-grade peripherals with a reputation for reliability and performance.',
    items: [
      { name: 'Logitech Peripherals', image: LogitechImage, description: 'Reliable peripherals for everyday and gaming use.' },
    ],
    image: PeripheralsCover,
  },
  {
    category: 'Asus',
    description: 'From gaming beasts to creator-focused machines, Asus offers sleek, high-performance devices with futuristic design and reliability.',
    items: [
      { name: 'ASUS ROG Strix', image: Strix, description: 'Aggressive performance for hardcore gamers and esports enthusiasts.'},
      { name: 'ASUS ROG Zephyrus', image: Zephyrus, description: 'Sleek and powerful – the perfect mix of gaming and portability.'},
      { name: 'Asus GPU', image: AsusImage, description: 'High-performance graphics cards designed for gamers and creators.' },
    ],
    image: AsusCover,
  },
  {
    category: 'Acer',
    description: 'Acer brings powerful computing to everyone — whether you\'re gaming, creating, or working, their wide range balances performance and value.',
    items: [
      { name: 'Acer Predator Helios', image: Predator, description: 'Hardcore gaming laptop with top-tier specs and advanced cooling.'},
      { name: 'Acer Nitro 5', image: Nitro, description: 'Affordable gaming with great performance and bold aesthetics.'},
      { name: 'Acer Aspire 5', image: Aspire, description: 'Everyday productivity with reliable performance and modern design.'},
    ],
    image: AcerCover,
  },
  {
    category: 'Drones',
    description: 'Capture stunning visuals with industry-leading drones perfect for both professionals and hobbyists.',
    items: [
      { name: 'DJI', image: DJIImage, description: 'Industry-leading drones with high-res cameras.' },
    ],
    image: DronesCover,
  },
  {
    category: 'Other Electronics & Accessories',
    description: 'Premium electronics and trusted accessories from world-renowned brands, tailored to upgrade your digital lifestyle.',
    items: [
      { name: 'Dyson Products', image: DysonImage, description: 'Innovative vacuums, hair tools, and more.' },
      { name: 'JBL & Harman Kardon Speakers', image: JBLImage, description: 'Rich sound and premium build for music lovers.' },
    ],
    image: OtherCover,
  },
];
