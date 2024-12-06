import { RiShieldFill } from "react-icons/ri";
import { ImCog } from "react-icons/im";
import { GoHeartFill } from "react-icons/go";
import { BsConeStriped } from "react-icons/bs";
import { IoMdConstruct } from "react-icons/io";
import { RiStore3Fill } from "react-icons/ri";
import { FaUserShield, FaHardHat } from "react-icons/fa";

export const menuLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Company",
    link: "/about",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const values = [
  {
    id: 1,
    name: "Integrity",
    icon: RiShieldFill,
    text: "We uphold the highest standards of honesty and transparency in all our dealings.",
  },
  {
    id: 2,
    name: "Competence",
    icon: ImCog,
    text: "Our team consists of skilled professionals who excel in their respective fields, ensuring top-notch service delivery.",
  },
  {
    id: 3,
    name: "Empathy",
    icon: GoHeartFill,
    text: "We understand the needs and concerns of our clients, and we strive to address them with compassion and understanding.",
  },
];

export const services = [
  {
    name: "Construction Services",
    icon: BsConeStriped,
    text: "Canaan Dwellings is a leading name in the construction and construction services sector, committed to providing unparalleled excellence and quality in every project we undertake. Our core values of integrity, competence, and empathy drive everything we do, ensuring that our clients receive the best possible service and support.",
  },
  {
    name: "Management, Maintenance, and Repairs",
    icon: IoMdConstruct,
    text: "Keeping your building in pristine condition is essential for maximizing its lifespan and value. Canaan Dwellings provides expert management, maintenance, and repair services to ensure that your property remains in top-notch condition year after year.",
  },
  {
    name: "Building Material Store",
    icon: RiStore3Fill,
    text: "Our building material store offers a wide range of high-quality products, including blocks, stones, timber, roofing sheets, windows, doors, bathroom accessories, and more. With Canaan Dwellings, you can trust that you're getting the best materials for your project.",
  },
  {
    name: "Building Services Professionals",
    icon: FaHardHat,
    text: "Need skilled workers for your project? Our Construction Institute trains and certifies building services professionals who embody our core values and deliver exceptional workmanship. Whether you need bricklayers, carpenters, plumbers, electricians, or any other skilled worker, we've got you covered.",
  },
];
