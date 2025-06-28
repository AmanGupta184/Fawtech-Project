// ProductData.js (Refactored with ES6 imports)

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
    description: 'Explore the latest in gaming with cutting-edge consoles and handhelds. Fawtech brings you immersive experiences with high-performance gear.',
    items: [
      { name: 'PlayStation 5', image: PS5Image, description: 'Sony’s next-gen console with immersive haptics, ray tracing, and ultra-fast SSD.' },
      { name: 'Xbox Series X|S', image: XboxImage, description: 'Microsoft’s powerful consoles for 4K gaming and backward compatibility.' },
      { name: 'Nintendo Switch', image: SwitchImage, description: 'Portable console with Joy-Con support and a huge game library.' },
      { name: 'Gaming Accessories', image: GamingAccessoriesImage, description: 'Controllers, headsets, and other gear to complete your setup.' },
    ],
    image: ConsolesCover,
  },
  {
    category: 'Laptops',
    description: 'Explore the latest in gaming with cutting-edge consoles and handhelds. Fawtech brings you immersive experiences with high-performance gear.',
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
    description: 'High-speed memory cards for photography, mobile storage, and professional equipment - fast, reliable, and secure.',
    items: [
      { name: 'Sandisk', image: SandiskImage, description: 'Trusted memory cards for every need.' },
      { name: 'NVM Express', image: NVMeImage, description: 'Fast NVMe storage for high-speed data access.' },
    ],
    image: MemoryCover,
  },
  {
    category: 'Tablets',
    description: "Versatile tablets that keep you connected, productive, and entertained - whether you're on the go or at home.",
    items: [
      { name: 'Apple', image: IpadImage, description: 'iPads with powerful chips and premium design.' },
      { name: 'Samsung', image: SamsungTabImage, description: 'Galaxy Tabs built for productivity and entertainment.' },
      { name: 'Accessories', image: TabletAccessoriesImage, description: 'Covers, keyboards, and more for your tablet.' },
    ],
    image: TabletsCover,
  },
  {
    category: 'Wearable Devices',
    description: 'Stay active and informed with stylish wearable tech designed to sync seamlessly with your devices',
    items: [
      { name: 'Apple Watch', image: AppleWatchImage, description: 'Track your health, stay connected, and more.' },
      { name: 'Samsung Watch', image: SamsungWatchImage, description: 'Smart features and fitness tracking on your wrist.' },
    ],
    image: WearablesCover,
  },
  {
    category: 'Drones',
    description: 'Premium electronics and trusted accessories from world-renowned brands, tailored to upgrade your digital lifestyle.',
    items: [
      { name: 'DJI', image: DJIImage, description: 'Industry-leading drones with high-res cameras.' },
    ],
    image: DronesCover,
  },
  {
    category: 'Other Electronics & Accessories',
    description: 'Premium electronics and trusted accessories from world-renowned brands, tailored to upgrade your digital lifestyle.',
    items: [
      { name: 'Apple Accessories', image: AppleAccessoriesImage, description: 'Enhance your Apple device experience.' },
      { name: 'Samsung Accessories', image: SamsungAccessoriesImage, description: 'Chargers, cases, and wearables for Galaxy devices.' },
      { name: 'Logitech Peripherals', image: LogitechImage, description: 'Reliable peripherals for everyday and gaming use.' },
      { name: 'Sony Electronics', image: SonyImage, description: 'High-quality gadgets and entertainment devices.' },
      { name: 'Dyson Products', image: DysonImage, description: 'Innovative vacuums, hair tools, and more.' },
      { name: 'JBL & Harman Kardon Speakers', image: JBLImage, description: 'Rich sound and premium build for music lovers.' },
    ],
    image: OtherCover,
  },
];
