/* eslint-disable react/jsx-key */
import { FaTrophy, FaBriefcase, FaRegLightbulb, FaHeart } from "react-icons/fa";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";
import h5 from "../assets/h5.png";
import agent1 from "../assets/agent1.jpg";
import agent2 from "../assets/agent2.jpg";
import agent3 from "../assets/team-1.jpg";
export const featured = [
  {
    cover: h1,
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: h2,
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: h3,
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: h4,
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: h5,
    name: "Villa & Condo",
    total: "80 Property",
  },
];
export const team = [
  {
    list: "50",
    cover: agent1,
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: agent2,
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    cover: agent3,
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "51",
    cover: agent1,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "42",
    cover: agent3,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "38",
    cover: agent1,
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [
      <i className="fa-brands fa-facebook-f"></i>,
      <i className="fa-brands fa-linkedin"></i>,
      <i className="fa-brands fa-twitter"></i>,
      <i className="fa-brands fa-instagram"></i>,
    ],
  },
];
export const awards = [
  {
    icon: <FaTrophy />,
    num: 32,
    name: "Blue Burmin Award",
  },
  {
    icon: <FaBriefcase />,
    num: 43,
    name: "Mimo X11 Award",
  },
  {
    icon: <FaRegLightbulb />,
    num: 51,
    name: "Australian UGC Award",
  },
  {
    icon: <FaHeart />,
    num: 42,
    name: "IITCA Green Award",
  },
];
export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];
