// ProductData.js (with new products and brand cards)

import PS5Image from '../Assets/Images/Products/PS5_Image_Edited.png';
import XboxImage from '../Assets/Images/Products/xboxConsole.png';
import SwitchImage from '../Assets/Images/Products/switch.jpg';
import GamingAccessoriesImage from '../Assets/Images/Products/mouse.jpg';
import ConsolesCover from '../Assets/Images/Products/consoles.jpg';


import LenovoImage from '../Assets/Images/Products/lenovo_laptops.jpg';
import DellImage from '../Assets/Images/Products/dellLaptop.png';
import HPImage from '../Assets/Images/Products/HP_laptop.jpg';
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
import MemoryCover from '../Assets/Images/Products/sd-memory-cards.jpg';

import IpadImage from '../Assets/Images/Products/ipad.png';
import SamsungTabImage from '../Assets/Images/Products/samsungTab.png';
import TabletAccessoriesImage from '../Assets/Images/Products/tablet_accessories.png';
import TabletsCover from '../Assets/Images/Products/tablets.jpg';

import AppleWatchImage from '../Assets/Images/Products/appleWatch.png';
import SamsungWatchImage from '../Assets/Images/Products/samsungWatch.png';
import WearablesCover from '../Assets/Images/Products/wearables.jpeg';

import DJIImage from '../Assets/Images/Products/djiDrones.png';
import DronesCover from '../Assets/Images/Products/DJI_drones.jpg';

import AppleAccessoriesImage from '../Assets/Images/Products/appleAccessories.png';
import SamsungAccessoriesImage from '../Assets/Images/Products/Samsung_accessories.jpg';
import LogitechImage from '../Assets/Images/Products/logitechPeripherals.png';
import SonyImage from '../Assets/Images/Products/sonyElectronics.png';
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
      { name: 'Steam Deck', image: XboxImage, description: 'Valve’s handheld PC gaming device with Steam OS.' },
      { name: 'Meta Quest (Oculus)', image: XboxImage, description: 'Wireless VR headset from Meta with immersive features and standalone functionality.' },
      { name: 'Gaming Accessories', image: GamingAccessoriesImage, description: 'Controllers, headsets, and other gear to complete your setup.' },
    ],
    image: ConsolesCover,
  },
  {
    category: 'Laptops',
    description: 'Work, create, and game with top-tier laptops from trusted brands, designed for power, performance, and portability.',
    items: [
      { name: 'Lenovo', image: LenovoImage, description: 'Reliable laptops ideal for both work and play.' },
      { name: 'Dell', image: DellImage, description: 'High-performance laptops with excellent support.' },
      { name: 'HP', image: HPImage, description: 'Affordable, feature-rich laptops for everyday use.' },
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
      { name: 'Asus', image: AsusImage, description: 'Reliable and efficient GPUs with custom cooling.' },
    ],
    image: GraphicsCardCover,
  },
  {
    category: 'Memory Cards',
    description: 'High-speed and high-capacity SD and NVMe cards for all your storage needs — from casual use to professional photography.',
    items: [
      { name: 'SanDisk', image: SandiskImage, description: 'Owned by Western Digital, known for high-quality SD cards across use cases.' },
      { name: 'Lexar', image: SandiskImage, description: 'High-speed SD cards for prosumers and professionals.' },
      { name: 'Toshiba', image: SandiskImage, description: 'Durable, high-capacity cards ideal for cameras and mobile devices.' },
      { name: 'Transcend', image: SandiskImage, description: 'Affordable and reliable cards for everyday use.' },
      { name: 'Kingston', image: SandiskImage, description: 'Memory solutions known for durability and value.' },
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
      { name: 'Samsung SD Cards', image: SamsungAccessoriesImage, description: 'EVO and PRO series known for high speed and reliability.' },
    ],
    image: WearablesCover,
  },
  {
    category: 'Sony',
    description: 'Sony’s world-class entertainment products—from consoles to professional-grade memory cards.',
    items: [
      { name: 'PlayStation 5', image: PS5Image, description: 'Sony’s next-gen console with immersive haptics, ray tracing, and ultra-fast SSD.' },
      { name: 'PlayStation VR', image: PS5Image, description: 'Virtual reality headset that brings games to life with motion and sound.' },
      { name: 'Sony SD Cards', image: PS5Image, description: 'High-performance memory cards preferred by photographers and videographers.' },
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
