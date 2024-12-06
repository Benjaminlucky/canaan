import { RiShieldFill } from "react-icons/ri";
import { ImCog } from "react-icons/im";
import { GoHeartFill } from "react-icons/go";

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
